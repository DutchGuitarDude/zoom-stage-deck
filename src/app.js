import {
  CATEGORY_COLORS,
  CATEGORY_ICONS,
  EFFECT_CATEGORIES,
  EFFECT_LIBRARY,
  createSlotFromEffect,
  generateMockPresets,
  getCabIcon,
  getEffectDef,
  getEffectIcon,
  getExactDeviceDsp,
  cabRawToIndex,
  cabIndexToRaw,
} from './mock-data.js';
import {
  clearAllScenes,
  defaultScenesForPreset,
  loadAllScenes,
  loadPresetCache,
  loadSettings,
  saveAllScenes,
  savePresetCache,
  saveSettings,
  saveSinglePresetToCache,
} from './storage.js';
import { ZoomMidiEngine } from './zoom-midi.js';
import { ZoomPatch } from './zoom-patch.js';
import { ChocolateChordDetector, decodeChocolateScenePc } from './chocolate-midi.js';

const $ = (id) => document.getElementById(id);

const state = {
  settings: loadSettings(),
  presets: [],
  scenesByKey: loadAllScenes(),
  activePatch: 0,
  bankIndex: 0, // 0..12 (13 banks of 4 presets = 50 total)
  mode: 'preset', // 'preset' | 'stomp' | 'scenes'
  editMode: false,
  selectedSlot: 0,
  editorCategory: 'ALL',
  editorSearch: '',
  activeSceneIndex: null,
  sceneDirty: false,
  learningSwitch: null,
  midiLogs: [],
  isScanningPatches: false,
  isAutoConfiguringChocolate: false,
};

const midi = new ZoomMidiEngine({
  onLog: appendMidiLog,
  onIdentity: (model, version) => {
    state.settings.model = model;
    state.settings.mockMode = false;
    saveSettings(state.settings);
    toast(`Detected Zoom ${model} v${version} via USB MIDI`);
    midi.enableEditorMode(true);
    midi.requestCurrentProgram();
    setTimeout(() => {
      midi.requestCurrentPatch();
    }, 120);
    renderAll();
  },
  onProgramChange: (patchIndex) => {
    if (patchIndex >= 0 && patchIndex < state.presets.length) {
      state.activePatch = patchIndex;
      state.bankIndex = Math.floor(patchIndex / 4);
      state.activeSceneIndex = null;
      toast(`Pedal switched to Patch ${String(patchIndex + 1).padStart(2, '0')}`);
      midi.requestCurrentPatch();
      renderAll();
    }
  },
  onPatchData: (parsed) => {
    handleIncomingPatchData(parsed);
  },
  onParamChange: (data) => {
    handleIncomingParamChange(data);
  },
  onControllerMessage: handleExternalController,
  onPortChange: populatePortSelectors,
});

function appendMidiLog(line) {
  const stamp = new Date().toLocaleTimeString([], { hour12: false });
  state.midiLogs.unshift(`${stamp}  ${line}`);
  if (state.midiLogs.length > 60) state.midiLogs.pop();
  const logEl = $('midiLog');
  if (logEl) logEl.textContent = state.midiLogs.join('\n');
}

function toast(msg) {
  const el = $('statusToast');
  if (el) el.textContent = msg;
}

function currentPreset() {
  return state.presets[state.activePatch] || state.presets[0];
}

function sceneKey(patchIdx = state.activePatch) {
  return `${state.settings.model}:${patchIdx}`;
}

function getScenesForCurrentPreset() {
  const key = sceneKey();
  if (!state.scenesByKey[key]) {
    state.scenesByKey[key] = defaultScenesForPreset(currentPreset());
  }
  return state.scenesByKey[key];
}

function normalizePresetSlots(preset) {
  if (!preset || !Array.isArray(preset.slots)) return;
  preset.slots.forEach((slot) => {
    if (!slot || !slot.effectId || slot.effectId === 'empty') return;
    const def = getEffectDef(slot.effectId);
    if (def && Array.isArray(def.params) && def.params.length > 0) {
      if (!Array.isArray(slot.values)) {
        slot.values = def.params.map((p) => p.default);
      } else if (slot.values.length < def.params.length) {
        for (let pi = slot.values.length; pi < def.params.length; pi++) {
          slot.values.push(def.params[pi].default);
        }
      }
    }
  });
}

function rebuildPresetsForModel(model) {
  const cached = loadPresetCache(model);
  state.presets = generateMockPresets(model);

  if (cached && typeof cached === 'object') {
    if (Array.isArray(cached)) {
      cached.forEach((p, idx) => {
        if (p && idx < state.presets.length) {
          normalizePresetSlots(p);
          state.presets[idx] = p;
        }
      });
    } else {
      for (const [idxStr, p] of Object.entries(cached)) {
        const idx = Number(idxStr);
        if (idx >= 0 && idx < state.presets.length && p) {
          normalizePresetSlots(p);
          state.presets[idx] = p;
        }
      }
    }
  }

  state.activePatch = Math.min(state.activePatch, state.presets.length - 1);
  state.bankIndex = Math.floor(state.activePatch / 4);
  midi.setModel(model);
}

function handleIncomingPatchData({ name, slots, maxfx, curfx, dspstate }) {
  const current = state.presets[state.activePatch];
  if (!current) return;

  if (typeof dspstate === 'number') {
    current.dspstate = dspstate;
  }

  if (name && typeof name === 'string') {
    current.name = name.trim() || current.name;
  }

  if (Array.isArray(slots) && slots.length > 0) {
    current.slots = slots.map((s, idx) => {
      if (!s.midiId || s.midiId === 0) {
        return createSlotFromEffect('empty', false);
      }
      const def = getEffectDef(s.midiId);
      const values = def.params.map((p, pIdx) => {
        let v = (s.values && s.values[pIdx] !== undefined) ? s.values[pIdx] : p.default;
        if (p.name === 'CAB') {
          v = cabRawToIndex(v);
        }
        return v;
      });
      return {
        effectId: def.id,
        midiId: s.midiId,
        enabled: Boolean(s.enabled),
        values,
      };
    });
  }

  enforceDspThru(current);
  saveSinglePresetToCache(state.settings.model, state.activePatch, current);
  const activeFxCount = current.slots.filter((s) => s.effectId !== 'empty').length;
  const isHwOver = Boolean(current.dspstate && current.dspstate > 0);
  toast(`Synced patch from ${state.settings.model}: "${current.name}" (${activeFxCount} FX)${isHwOver ? ' · ⚠️ DSP FULL (THRU mode active)' : ''}`);
  renderAll();
}

function handleIncomingParamChange({ slotIndex, paramIndex, value }) {
  const preset = currentPreset();
  if (!preset || !preset.slots[slotIndex]) return;

  const slot = preset.slots[slotIndex];

  // paramIndex === 0: Bypass switch
  if (paramIndex === 0) {
    const isEnabled = value === 1;
    if (slot.enabled !== isEnabled) {
      slot.enabled = isEnabled;
      const def = getEffectDef(slot.effectId);
      toast(`Hardware stomp: Slot ${slotIndex + 1} (${def.name}) ${isEnabled ? 'ON' : 'BYPASS'}`);
      if (state.mode === 'scenes') {
        state.sceneDirty = true;
      }
      renderSlots();
      renderScenes();
      renderEditor();
    }
    return;
  }

  // paramIndex >= 2: Parameter knobs (offset by 2 in Zoom MultiStomp protocol)
  if (paramIndex >= 2) {
    const knobIdx = paramIndex - 2;
    if (slot.values) {
      const def = getEffectDef(slot.effectId);
      const param = def.params[knobIdx];
      let v = value;
      if (param && param.name === 'CAB') {
        v = cabRawToIndex(value);
      }
      slot.values[knobIdx] = v;
      const paramName = param ? param.name : `P${knobIdx + 1}`;
      const dispVal = (param && param.type === 'select' && param.options) ? (param.options[v] || v) : v;
      toast(`Hardware knob: Slot ${slotIndex + 1} ${paramName} = ${dispVal}`);
      if (state.mode === 'scenes') {
        state.sceneDirty = true;
      }
      renderSlots();
      renderScenes();
      renderEditor();
    }
  }
}

export function enforceDspThru(preset) {
  if (!preset || !Array.isArray(preset.slots)) return 0;
  let activeDsp = 0;
  let newDspState = 0;

  preset.slots.forEach((slot, idx) => {
    if (!slot || slot.effectId === 'empty') {
      slot.dspFull = false;
      return;
    }
    const def = getEffectDef(slot.effectId);
    const cost = getExactDeviceDsp(def.dsp);
    const isAmp = def.category === 'AMP';

    if (slot.enabled) {
      if (!isAmp && activeDsp + cost > 100.1) {
        // Exceeds hardware 100% DSP limit: auto-bypass secondary trailing effects (never amps)
        slot.dspFull = true;
        slot.enabled = false;
        newDspState |= (1 << idx);
      } else {
        activeDsp += cost;
        slot.dspFull = false;
      }
    } else {
      // If hardware or previous state reported DSP FULL, keep THRU state on trailing effects
      if (!isAmp && preset.dspstate && (preset.dspstate & (1 << idx))) {
        slot.dspFull = true;
        newDspState |= (1 << idx);
      } else {
        slot.dspFull = false;
      }
    }
  });

  preset.dspstate = newDspState;
  return parseFloat(activeDsp.toFixed(1));
}

let liveSyncTimeout = null;
function debouncedLivePatchSync(delayMs = 100) {
  if (liveSyncTimeout) clearTimeout(liveSyncTimeout);
  liveSyncTimeout = setTimeout(() => {
    sendLivePresetToPedal();
  }, delayMs);
}

function sendLivePresetToPedal() {
  saveSinglePresetToCache(state.settings.model, state.activePatch, currentPreset());
  if (!midi.isConnected || state.settings.mockMode) return;
  const preset = currentPreset();
  if (!preset) return;

  // Enforce DSP THRU so we never transmit an overloaded patch buffer to MS-50G
  enforceDspThru(preset);

  const p = new ZoomPatch();
  p.name = (preset.name || 'Patch').slice(0, 10);
  p.dspstate = preset.dspstate || 0;
  p.curfx = typeof state.selectedSlot === 'number' ? Math.max(0, Math.min(5, state.selectedSlot)) : 0;

  preset.slots.forEach((slot, i) => {
    if (i < 6) {
      const def = getEffectDef(slot.effectId);
      const isThru = def.id === 'empty' || slot.dspFull;
      p.setEffectState(i, !isThru && slot.enabled && !slot.dspFull);
      p.setEffectId(i, def.id === 'empty' ? 0 : (slot.midiId || def.midiId || 0));
      if (def.params && def.params.length > 0) {
        def.params.forEach((param, pIdx) => {
          let v = (slot.values && slot.values[pIdx] !== undefined) ? slot.values[pIdx] : param.default;
          if (v === undefined || v === null || isNaN(v)) {
            v = param.default !== undefined ? param.default : (param.name.toLowerCase() === 'level' ? 100 : 50);
          }
          if (param.name === 'CAB') {
            v = v > 22 ? v : cabIndexToRaw(v);
          }
          if (param.name === 'Tail' || param.name === 'TAIL') {
            v = 1;
            if (slot.values && slot.values[pIdx] !== undefined) {
              slot.values[pIdx] = 1;
            }
          }
          p.setParamVal(i, pIdx + 2, v);
        });
      } else if (slot.values && Array.isArray(slot.values)) {
        slot.values.forEach((v, pIdx) => {
          p.setParamVal(i, pIdx + 2, v);
        });
      }
    }
  });

  midi.sendCurrentPatch(p);
}

async function startFullPedalScan() {
  if (!midi.isConnected || state.settings.mockMode) {
    toast('Connect Zoom pedal via USB MIDI before scanning');
    return;
  }
  if (state.isScanningPatches) {
    midi.cancelScan();
    state.isScanningPatches = false;
    toast('Scan cancelled');
    return;
  }

  state.isScanningPatches = true;
  const scanBtn = $('btnSyncAllPatches');
  if (scanBtn) scanBtn.textContent = 'Cancel Scan';
  toast('Starting full scan of all 50 patches from Zoom pedal…');

  try {
    const patches = await midi.scanAllPatches(({ current, total }) => {
      toast(`Scanning MS-50G presets: ${current}/${total}…`);
    });

    if (Array.isArray(patches) && patches.length > 0) {
      patches.forEach((p) => {
        if (state.presets[p.index]) {
          state.presets[p.index].name = p.name || state.presets[p.index].name;
          if (p.slots && p.slots.length > 0) {
            state.presets[p.index].slots = p.slots.map((s) => {
              if (!s.midiId || s.midiId === 0) return createSlotFromEffect('empty', false);
              const def = getEffectDef(s.midiId);
              const values = def.params.map((param, pIdx) => {
                return (s.values && s.values[pIdx] !== undefined) ? s.values[pIdx] : param.default;
              });
              return {
                effectId: def.id,
                midiId: s.midiId,
                enabled: Boolean(s.enabled),
                values,
              };
            });
          }
        }
      });
      savePresetCache(state.settings.model, state.presets);
      toast(`Synced all ${patches.length} presets from ${state.settings.model}!`);
      renderAll();
    }
  } catch (err) {
    toast(`Scan error: ${err.message}`);
  } finally {
    state.isScanningPatches = false;
    if (scanBtn) scanBtn.textContent = 'Sync All (50)';
  }
}

/* ---------- Actions ---------- */

function selectPatch(patchIndex, autoRequestPatch = true) {
  if (patchIndex < 0 || patchIndex >= state.presets.length) return;
  state.activePatch = patchIndex;
  state.bankIndex = Math.floor(patchIndex / 4);
  state.activeSceneIndex = null;
  state.sceneDirty = false;

  const preset = currentPreset();
  if (preset) {
    enforceDspThru(preset);
  }

  midi.selectPatch(patchIndex, autoRequestPatch);
  toast(`Selected Preset ${String(patchIndex + 1).padStart(2, '0')} · ${currentPreset().name}`);
  renderAll();
}

function stepPatch(delta) {
  if (!state.presets.length) return;
  const total = state.presets.length;
  const next = (state.activePatch + delta + total) % total;
  selectPatch(next);
}

function stepBank(delta) {
  const maxBank = Math.ceil(state.presets.length / 4) - 1;
  state.bankIndex = (state.bankIndex + delta + maxBank + 1) % (maxBank + 1);
  renderBankBar();
}

function toggleSlot(slotIndex) {
  const preset = currentPreset();
  const slot = preset.slots[slotIndex];
  if (!slot || slot.effectId === 'empty') {
    openSlotEditor(slotIndex);
    return;
  }

  const def = getEffectDef(slot.effectId);
  const cost = getExactDeviceDsp(def.dsp);

  // If currently OFF and user attempts to enable: verify DSP headroom
  if (!slot.enabled) {
    let currentActiveDsp = 0;
    preset.slots.forEach((s, idx) => {
      if (idx !== slotIndex && s && s.enabled && s.effectId !== 'empty' && !s.dspFull) {
        const d = getEffectDef(s.effectId);
        currentActiveDsp += getExactDeviceDsp(d.dsp);
      }
    });

    if (currentActiveDsp + cost > 100.1) {
      const overBy = Math.round(currentActiveDsp + cost - 100);
      toast(`⚠️ DSP FULL (+${overBy}%)! "${def.name}" remains in THRU. Turn OFF another pedal to free DSP.`);
      slot.dspFull = true;
      slot.enabled = false;
      preset.dspstate = (preset.dspstate || 0) | (1 << slotIndex);
      midi.setSlotBypass(slotIndex, false);
      saveSinglePresetToCache(state.settings.model, state.activePatch, preset);
      renderSlots();
      renderEditor();
      renderScenes();
      return;
    } else {
      slot.dspFull = false;
      slot.enabled = true;
      if (preset.dspstate) {
        preset.dspstate &= ~(1 << slotIndex);
      }
    }
  } else {
    // Turning pedal OFF
    slot.enabled = false;
    slot.dspFull = false;
    if (preset.dspstate) {
      preset.dspstate &= ~(1 << slotIndex);
    }
  }

  if (state.mode === 'scenes') {
    if (state.activeSceneIndex === null) state.activeSceneIndex = 0;
    state.sceneDirty = true;
  } else {
    state.activeSceneIndex = null;
    state.sceneDirty = false;
  }

  // Recalculate any downstream slots that were in THRU and can now fit!
  enforceDspThru(preset);

  // Send instant real-time SysEx (0x31) for immediate hardware bypass toggle
  midi.setSlotBypass(slotIndex, slot.enabled);
  // Transmit full patch buffer so all slots (especially slots 4-6) are 100% synchronized
  sendLivePresetToPedal();

  saveSinglePresetToCache(state.settings.model, state.activePatch, preset);
  toast(`Slot ${slotIndex + 1} (${def.name}) ${slot.enabled ? 'ON' : 'OFF'}`);
  renderSlots();
  renderEditor();
  renderScenes();
}

function moveSlot(fromIndex, toIndex) {
  if (fromIndex === toIndex || fromIndex < 0 || fromIndex >= 6 || toIndex < 0 || toIndex >= 6) return;
  const preset = currentPreset();
  if (!preset || !preset.slots) return;

  // Move slot in chain
  const [moved] = preset.slots.splice(fromIndex, 1);
  preset.slots.splice(toIndex, 0, moved);

  // Update Chocolate Plus footswitch assignments so footswitches follow their stomp pedals
  if (Array.isArray(state.settings.chocolate?.stompSlots)) {
    state.settings.chocolate.stompSlots = state.settings.chocolate.stompSlots.map((sIdx) => {
      if (sIdx === fromIndex) return toIndex;
      if (fromIndex < toIndex) {
        if (sIdx > fromIndex && sIdx <= toIndex) return sIdx - 1;
      } else {
        if (sIdx >= toIndex && sIdx < fromIndex) return sIdx + 1;
      }
      return sIdx;
    });
    saveSettings(state.settings);
  }

  // Follow selectedSlot if active in editor
  if (state.selectedSlot === fromIndex) {
    state.selectedSlot = toIndex;
  } else if (fromIndex < toIndex && state.selectedSlot > fromIndex && state.selectedSlot <= toIndex) {
    state.selectedSlot--;
  } else if (fromIndex > toIndex && state.selectedSlot >= toIndex && state.selectedSlot < fromIndex) {
    state.selectedSlot++;
  }

  saveSinglePresetToCache(state.settings.model, state.activePatch, preset);
  sendLivePresetToPedal();

  const def = getEffectDef(moved.effectId);
  toast(`Moved Slot ${fromIndex + 1} (${def.name}) → Slot ${toIndex + 1} on ${state.settings.model}`);
  renderSlots();
  renderEditor();
  renderChocolateSettings();
  renderFootswitchModalMatrix();
}

function assignChocolateFootswitch(slotIndex, switchIndex) {
  if (!state.settings.chocolate.stompSlots) {
    state.settings.chocolate.stompSlots = [0, 1, 2, 3];
  }
  const stompSlots = [...state.settings.chocolate.stompSlots];

  // If this slot was assigned to another switch, remove it
  stompSlots.forEach((sIdx, swIdx) => {
    if (sIdx === slotIndex) {
      stompSlots[swIdx] = -1;
    }
  });

  // Assign slot to target switch (0=A, 1=B, 2=C, 3=D)
  if (switchIndex >= 0 && switchIndex < 4) {
    stompSlots[switchIndex] = slotIndex;
  }

  state.settings.chocolate.stompSlots = stompSlots;
  saveSettings(state.settings);

  const letters = ['A', 'B', 'C', 'D'];
  const switchLabel = switchIndex >= 0 && switchIndex < 4 ? `Footswitch ${letters[switchIndex]}` : 'Unassigned';
  toast(`Slot ${slotIndex + 1} → Chocolate ${switchLabel}`);

  renderSlots();
  renderEditor();
  renderChocolateSettings();
  renderFootswitchModalMatrix();
}

function setFootswitchSlot(switchIndex, slotIndex) {
  if (!state.settings.chocolate.stompSlots) {
    state.settings.chocolate.stompSlots = [0, 1, 2, 3];
  }
  state.settings.chocolate.stompSlots[switchIndex] = slotIndex;
  saveSettings(state.settings);

  const letters = ['A', 'B', 'C', 'D'];
  const targetLabel = slotIndex >= 0 ? `Slot ${slotIndex + 1}` : 'Unassigned';
  toast(`Footswitch ${letters[switchIndex]} → ${targetLabel}`);

  renderSlots();
  renderEditor();
  renderChocolateSettings();
  renderFootswitchModalMatrix();
}

function applyFootswitchPreset(slotsArray) {
  state.settings.chocolate.stompSlots = [...slotsArray];
  saveSettings(state.settings);
  toast(`Loaded footswitch layout: ${slotsArray.map((s, idx) => `FS ${['A', 'B', 'C', 'D'][idx]} → S${s >= 0 ? s + 1 : '—'}`).join(' · ')}`);
  renderSlots();
  renderEditor();
  renderChocolateSettings();
  renderFootswitchModalMatrix();
}

function renderFootswitchModalMatrix() {
  const container = $('fsAssignMatrix');
  if (!container) return;
  const preset = currentPreset();
  const stompSlots = state.settings.chocolate?.stompSlots || [0, 1, 2, 3];
  const letters = ['A', 'B', 'C', 'D'];

  container.innerHTML = '';
  letters.forEach((letter, swIdx) => {
    const currentSlot = stompSlots[swIdx];
    const row = document.createElement('div');
    row.className = 'fs-matrix-row';

    let options = `<option value="-1"${currentSlot === -1 ? ' selected' : ''}>-- Unassigned --</option>`;
    preset.slots.forEach((s, sIdx) => {
      const def = getEffectDef(s.effectId);
      const isSel = currentSlot === sIdx ? ' selected' : '';
      options += `<option value="${sIdx}"${isSel}>Slot ${sIdx + 1}: ${def.name} (${def.category})</option>`;
    });

    row.innerHTML = `
      <div class="fs-matrix-badge">FS ${letter}</div>
      <select class="fs-matrix-select" data-fs-switch="${swIdx}" aria-label="Assign Footswitch ${letter}">
        ${options}
      </select>
    `;

    const sel = row.querySelector('.fs-matrix-select');
    sel.addEventListener('change', (e) => {
      setFootswitchSlot(swIdx, Number(e.target.value));
    });

    container.appendChild(row);
  });
}

function openFootswitchesModal() {
  renderFootswitchModalMatrix();
  $('footswitchModal').classList.remove('hidden');
}

function closeFootswitchesModal() {
  $('footswitchModal').classList.add('hidden');
}

function openSlotEditor(slotIndex) {
  state.editMode = true;
  state.selectedSlot = slotIndex;
  const preset = currentPreset();
  if (preset && preset.slots && preset.slots[slotIndex]) {
    const s = preset.slots[slotIndex];
    const def = getEffectDef(s.effectId);
    if (def.category === 'AMP') {
      s.dspFull = false;
      if (preset.dspstate) preset.dspstate &= ~(1 << slotIndex);
    }
  }
  renderHeader();
  renderSlots();
  renderScenes();
  renderEditor();
}

function closeSlotEditor() {
  state.editMode = false;
  renderHeader();
  renderSlots();
  renderScenes();
  renderEditor();
}

function setMode(mode) {
  state.mode = mode;
  document.querySelectorAll('.mode-tab').forEach((tab) => {
    const active = tab.dataset.mode === mode;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });
  const scenesPanel = $('scenesPanel');
  if (scenesPanel) {
    scenesPanel.classList.toggle('hidden', mode !== 'scenes' || state.editMode);
    scenesPanel.classList.toggle('scenes-hero', mode === 'scenes');
  }
  const grid = $('slotGrid');
  if (grid) {
    grid.classList.toggle('stomp-mode-active', mode === 'stomp');
    grid.classList.toggle('scenes-mode-active', mode === 'scenes');
  }
  $('shortcutHint').innerHTML =
    mode === 'scenes'
      ? 'Chocolate A–D: Scenes 1–4 · E (A+B) / F (C+D): Patch −/+ · Click pedals to toggle ON/OFF · Edit to tweak knobs'
      : mode === 'stomp'
      ? 'Chocolate A–D: Assigned Stomps · Keys: <code>1–4</code> Stomps A–D · <code>Q–Y</code> All Slots · <code>M</code> Mode'
      : 'Chocolate A–D: Presets · Keys: <code>[</code>/<code>]</code> Bank · <code>1–4</code> Presets · <code>Q–Y</code> Stomps · <code>M</code> Mode';
  renderScenes();
  renderSlots();
  renderEditor();
}

function recallScene(sceneIdx) {
  const scenes = getScenesForCurrentPreset();
  const scene = scenes[sceneIdx];
  if (!scene) return;
  const preset = currentPreset();
  let restoredParamsCount = 0;

  // 1. Check if any slot in slots 4-6 actually changed bypass state
  let slots4to6BypassChanged = false;
  preset.slots.forEach((slot, i) => {
    const target = slot.effectId === 'empty' ? false : Boolean(scene.states[i]);
    if (i >= 3 && slot.enabled !== target) {
      slots4to6BypassChanged = true;
    }
    slot.enabled = target;
  });

  // 2. Protect hardware DSP limits with THRU
  enforceDspThru(preset);

  // 3. Send real-time gapless 0x31 messages for bypass and parameter knobs
  preset.slots.forEach((slot, i) => {
    if (i < 3) {
      midi.setSlotBypass(i, slot.enabled && !slot.dspFull);
    }

    if (
      Array.isArray(scene.slotValues) &&
      Array.isArray(scene.slotValues[i]) &&
      slot.effectId !== 'empty'
    ) {
      const savedFxId = Array.isArray(scene.effectIds) ? scene.effectIds[i] : null;
      if (!savedFxId || savedFxId === slot.effectId) {
        slot.values = [...scene.slotValues[i]];
        restoredParamsCount++;
        // Send real-time 0x31 for each parameter knob (gapless, no DSP drop)
        const def = getEffectDef(slot.effectId);
        slot.values.forEach((v, pIdx) => {
          const param = def.params[pIdx];
          const outVal = (param && param.name === 'CAB') ? (v > 22 ? v : cabIndexToRaw(v)) : v;
          midi.setSlotParam(i, pIdx, outVal);
        });
      }
    }
  });

  // 4. Send full patch buffer (0x28) ONLY if slots 4-6 actually changed bypass!
  // If slots 4-6 did not change bypass (e.g. LineSel is in slots 1-3, or Delay is in slots 1-3, or Delay is always ON),
  // skipping 0x28 prevents the Zoom MS-50G hardware DSP from resetting its audio RAM, guaranteeing natural delay trails!
  if (slots4to6BypassChanged) {
    sendLivePresetToPedal();
  }

  saveSinglePresetToCache(state.settings.model, state.activePatch, preset);
  state.activeSceneIndex = sceneIdx;
  state.sceneDirty = false;
  toast(
    `Recalled Scene ${sceneIdx + 1}: ${scene.name}${
      restoredParamsCount > 0 ? ' (pedals + saved parameters synced)' : ''
    }`
  );
  renderSlots();
  renderScenes();
  renderEditor();
}

function saveCurrentToScene(targetIdx) {
  const scenes = getScenesForCurrentPreset();
  if (targetIdx < 0 || targetIdx >= scenes.length) return;
  const preset = currentPreset();
  scenes[targetIdx].states = preset.slots.map((s) => Boolean(s.enabled));
  scenes[targetIdx].slotValues = preset.slots.map((s) =>
    Array.isArray(s.values) ? [...s.values] : []
  );
  scenes[targetIdx].effectIds = preset.slots.map((s) => s.effectId);
  saveAllScenes(state.scenesByKey);
  state.activeSceneIndex = targetIdx;
  state.sceneDirty = false;
  toast(
    `Saved 6 pedals & adjusted parameters to Scene ${targetIdx + 1} (${scenes[targetIdx].name})`
  );
  renderScenes();
}

function captureCurrentToScene() {
  const targetIdx = state.activeSceneIndex !== null ? state.activeSceneIndex : 0;
  saveCurrentToScene(targetIdx);
}

function renameScene(sceneIdx) {
  const scenes = getScenesForCurrentPreset();
  const scene = scenes[sceneIdx];
  if (!scene) return;
  const next = window.prompt(`Rename Scene ${sceneIdx + 1} (FS ${['A', 'B', 'C', 'D'][sceneIdx]}):`, scene.name);
  if (next && next.trim()) {
    scene.name = next.trim().slice(0, 24);
    saveAllScenes(state.scenesByKey);
    toast(`Renamed Scene ${sceneIdx + 1} → "${scene.name}"`);
    renderScenes();
  }
}

function triggerChocolateSwitch(switchIdx) {
  const letters = ['A', 'B', 'C', 'D'];
  const letter = letters[switchIdx] || '?';

  // Follow the active mode tab so switching to STOMP tab lets A–D toggle pedals,
  // SCENES tab lets A–D recall Scenes 1–4, and PRESET tab lets A–D pick Bank Presets A–D
  if (state.mode === 'stomp') {
    const targetSlot = state.settings.chocolate.stompSlots[switchIdx];
    if (typeof targetSlot === 'number' && targetSlot >= 0 && targetSlot < 6) {
      toggleSlot(targetSlot);
      return;
    }
    toast(`Chocolate ${letter}: no stomp slot assigned (click Footswitches A–D to assign)`);
    return;
  }
  if (state.mode === 'scenes') {
    recallScene(switchIdx);
    return;
  }
  // Default: PRESET mode (Patch Change A-D in current bank)
  const targetPatch = state.bankIndex * 4 + switchIdx;
  if (targetPatch < state.presets.length) {
    selectPatch(targetPatch);
  } else {
    toast(`Chocolate ${letter}: no preset in this bank slot`);
  }
}

function updateMidiActivity(msg, actionLabel = '') {
  const pill = $('midiRxPill');
  const text = $('midiRxText');
  if (!pill || !text) return;

  // Ultra-concise 3-4 char badge that fits inside the fixed 52px pill without layout jitter
  let label = 'MIDI';
  if (actionLabel) {
    if (
      actionLabel.includes('Patch −') ||
      actionLabel.includes('A+B') ||
      actionLabel.includes('Hold A') ||
      actionLabel.includes('Prev')
    ) {
      label = 'P −';
    } else if (
      actionLabel.includes('Patch +') ||
      actionLabel.includes('C+D') ||
      actionLabel.includes('Hold D') ||
      actionLabel.includes('Next')
    ) {
      label = 'P +';
    } else if (actionLabel.startsWith('FS ')) {
      label = actionLabel.slice(0, 4); // "FS A", "FS B", etc.
    } else {
      label = actionLabel.slice(0, 4);
    }
  } else if (msg.type === 'cc') {
    label = `C#${msg.cc}`;
  } else if (msg.type === 'pc') {
    label = `P#${String(msg.program).padStart(2, '0')}`;
  } else if (msg.type === 'sw') {
    label = 'FS';
  }

  text.textContent = label;
  pill.classList.remove('active');
  void pill.offsetWidth;
  pill.classList.add('active');
}

function triggerChocolateEF(direction, source = 'chord') {
  const delta = direction === 'prev' ? -1 : 1;
  stepPatch(delta);
  const action =
    delta < 0
      ? source === 'hold'
        ? 'Hold A (Patch −)'
        : 'Patch − (A+B)'
      : source === 'hold'
      ? 'Hold D (Patch +)'
      : 'Patch + (C+D)';
  updateMidiActivity({ type: 'chord' }, action);
  const sourceLabel =
    source === 'hold'
      ? delta < 0
        ? 'Hold A'
        : 'Hold D'
      : delta < 0
      ? 'E (A+B)'
      : 'F (C+D)';
  toast(
    `Chocolate ${sourceLabel} → Patch ${String(state.activePatch + 1).padStart(2, '0')} · ${
      currentPreset().name
    }`
  );
}

const chocolateChords = new ChocolateChordDetector({
  chordWindowMs: 380,
  cooldownMs: 350,
  holdMs: 450,
  onSwitch: (switchIdx) => {
    updateMidiActivity({ type: 'sw' }, `FS ${['A', 'B', 'C', 'D'][switchIdx]}`);
    triggerChocolateSwitch(switchIdx);
  },
  onChord: (dir) => triggerChocolateEF(dir, 'chord'),
  onHold: (switchIdx, dir) => triggerChocolateEF(dir, 'hold'),
});

const lastSwitchPressTimes = [0, 0, 0, 0];

function handleExternalController(msg) {
  // Update live MIDI activity monitor on screen with short badge
  updateMidiActivity(msg);

  // 1. MIDI Learn mode for Chocolate Plus A-D
  if (state.learningSwitch !== null) {
    if (msg.type === 'cc' && msg.value < 64) return;
    const idx = state.learningSwitch;
    const num = msg.type === 'pc' ? msg.program : msg.cc;
    state.settings.chocolate.switches[idx] = { type: msg.type, num };
    state.learningSwitch = null;
    saveSettings(state.settings);
    renderChocolateSettings();
    const letter = ['A', 'B', 'C', 'D'][idx];
    toast(`Learned Chocolate Switch ${letter} → ${msg.type.toUpperCase()} #${num}`);
    return;
  }

  const { ccMap } = state.settings;

  // 2. Direct CCs for Patch Down (Switch E / A+B) and Patch Up (Switch F / C+D) in all modes
  if (msg.type === 'cc') {
    // E (A+B) => Patch Down: CC 24 (CubeSuite default), or ccMap.bankPrev (default 24), or CC 2
    const isPatchPrev = msg.cc === 24 || msg.cc === ccMap.bankPrev || msg.cc === 2;
    // F (C+D) => Patch Up: CC 25 (if bankPrev is 24), or CC 26 (CubeSuite default), or ccMap.bankNext (default 25), or CC 3
    const isPatchNext =
      msg.cc === 26 ||
      msg.cc === ccMap.bankNext ||
      msg.cc === 3 ||
      (msg.cc === 25 && ccMap.bankPrev === 24);

    if (msg.value > 0) {
      if (isPatchPrev) {
        return triggerChocolateEF('prev', 'direct-cc');
      }
      if (isPatchNext) {
        return triggerChocolateEF('next', 'direct-cc');
      }
      if (msg.cc === ccMap.modeCycle) {
        const order = ['preset', 'stomp', 'scenes'];
        const next = order[(order.indexOf(state.mode) + 1) % order.length];
        setMode(next);
        toast(`Chocolate Mode → ${next.toUpperCase()}`);
        return;
      }
    }
  }

  // 3. Match Chocolate Plus switches A-D (CC or PC)
  const switches = state.settings.chocolate?.switches || [];
  for (let i = 0; i < switches.length; i++) {
    const sw = switches[i];
    if (sw.type === 'cc' && msg.type === 'cc' && msg.cc === sw.num) {
      const now = Date.now();
      if (msg.value > 0) {
        lastSwitchPressTimes[i] = now;
        chocolateChords.press(i, now);
      } else {
        // If value 0 arrives within 400ms of value > 0, it's a momentary foot release.
        // If value 0 arrives > 400ms later (or with no preceding press), it's a deliberate stomp on a TOGGLE switch!
        if (now - (lastSwitchPressTimes[i] || 0) < 400) {
          chocolateChords.release(i);
        } else {
          lastSwitchPressTimes[i] = now;
          chocolateChords.press(i, now);
          setTimeout(() => chocolateChords.release(i), 80);
        }
      }
      return;
    }
    if (sw.type === 'pc' && msg.type === 'pc' && msg.program === sw.num) {
      chocolateChords.press(i);
      return;
    }
  }

  // 4. Fallback for Program Change in PC-A mode (32 banks x 4 presets/scenes)
  if (msg.type === 'pc') {
    const layout = state.settings.chocolate?.layout || 'scenes-ef-patch';
    if (layout === 'scenes-ef-patch') {
      const { patchIndex, sceneIndex } = decodeChocolateScenePc(msg.program, state.presets.length);
      if (state.mode !== 'scenes') setMode('scenes');
      if (patchIndex !== state.activePatch) {
        selectPatch(patchIndex, false);
        setTimeout(() => recallScene(sceneIndex), 120);
      } else {
        chocolateChords.press(sceneIndex);
      }
      return;
    }
    // Direct patch select in preset mode
    selectPatch(msg.program % state.presets.length);
  }
}

/* ---------- Rendering ---------- */

function renderHeader() {
  const preset = currentPreset();
  $('activePatchNum').textContent = String(state.activePatch + 1).padStart(2, '0');
  $('activePatchName').textContent = preset.name;
  $('modelBadge').textContent = state.settings.model;

  const badge = $('connectionBadge');
  const isLive = midi.isConnected && !state.settings.mockMode;
  badge.classList.toggle('live', isLive);
  badge.classList.toggle('mock', !isLive);
  $('connectionText').textContent = isLive ? 'USB MIDI Live' : 'Mock Pedal';
  $('mockBtnLabel').textContent = isLive ? 'Switch to Mock' : 'Connect USB MIDI';

  const editBtn = $('btnEditMode');
  editBtn.setAttribute('aria-pressed', String(state.editMode));

  $('midiDeviceChip').textContent = isLive
    ? `Zoom MIDI: ${midi.zoomOutput?.name || state.settings.model}`
    : `Zoom MIDI: Simulated (${state.settings.model})`;
  $('controllerChip').textContent = midi.controllerInput
    ? `Footswitch: ${midi.controllerInput.name}`
    : 'Footswitch: Keyboard';
}

function renderBankBar() {
  const start = state.bankIndex * 4;
  const end = Math.min(start + 3, state.presets.length - 1);
  $('bankTitle').textContent = `BANK ${state.bankIndex + 1}`;
  $('bankRange').textContent = `${String(start + 1).padStart(2, '0')} – ${String(end + 1).padStart(2, '0')}`;

  const letters = ['A', 'B', 'C', 'D'];
  const strip = $('presetStrip');
  strip.innerHTML = '';

  for (let i = 0; i < 4; i++) {
    const idx = start + i;
    const preset = state.presets[idx];
    const btn = document.createElement('button');
    btn.className = 'preset-pad';
    if (!preset) {
      btn.disabled = true;
      btn.innerHTML = `<span class="preset-pad-top"><span>${letters[i]}</span><span>—</span></span><span class="preset-pad-name">Unused</span>`;
    } else {
      if (idx === state.activePatch) btn.classList.add('active');
      btn.innerHTML = `
        <span class="preset-pad-top">
          <span>${letters[i]} · ${String(idx + 1).padStart(2, '0')}</span>
          <span>${preset.slots.filter((s) => s.enabled && s.effectId !== 'empty').length} FX</span>
        </span>
        <span class="preset-pad-name">${preset.name}</span>
      `;
      btn.addEventListener('click', () => selectPatch(idx));
    }
    strip.appendChild(btn);
  }
}

function renderDspMeter() {
  const preset = currentPreset();
  if (!preset) return;
  enforceDspThru(preset);

  const thruSlots = [];
  let totalAll = 0;
  let activeTotal = 0;

  const breakdown = preset.slots.map((slot, idx) => {
    const def = getEffectDef(slot.effectId);
    const dspVal = getExactDeviceDsp(def.dsp);
    const isThru = Boolean(slot.dspFull || (preset.dspstate && (preset.dspstate & (1 << idx))));
    if (isThru) thruSlots.push(idx + 1);
    totalAll += dspVal;
    if (slot.enabled && !isThru) activeTotal += dspVal;
    return {
      slot: idx + 1,
      name: def.name,
      dsp: dspVal,
      enabled: slot.enabled,
      isThru,
    };
  });

  const total = parseFloat(totalAll.toFixed(1));
  const roundedActive = Math.round(activeTotal);
  const roundedTotal = Math.round(total);

  const meter = $('dspMeter');
  const pctEl = $('dspPercent');
  const fillEl = $('dspBarFill');
  const progEl = $('dspProgress');
  if (!meter || !pctEl || !fillEl) return;

  const hasThru = thruSlots.length > 0;
  const isWarn = (activeTotal >= 80 || total >= 90) && !hasThru;

  meter.classList.toggle('warn', isWarn);
  meter.classList.toggle('over', hasThru);

  if (hasThru) {
    pctEl.textContent = `${roundedActive}% · THRU (S${thruSlots.join(', S')})`;
  } else {
    pctEl.textContent = `${roundedActive}%`;
  }

  fillEl.style.width = `${Math.min(100, roundedActive)}%`;
  if (progEl) progEl.setAttribute('aria-valuenow', String(roundedActive));

  const lines = breakdown
    .filter((b) => b.dsp > 0)
    .map((b) => `Slot ${b.slot} ${b.name}: ${b.dsp}%${b.isThru ? ' [DSP FULL: THRU (Bypassed)]' : b.enabled ? ' [ACTIVE]' : ' [OFF]'}`);

  meter.title = `Zoom MS-50G Active DSP: ${activeTotal.toFixed(1)}% / 100% (Patch Total: ${total}%)\n${lines.join('\n')}${
    hasThru ? '\n\n⚡ DSP FULL: Bypassed slots are set to THRU exactly like the Zoom MS-50G hardware display to ensure audio never mutes.' : ''
  }`;
}

function renderSlots() {
  const grid = $('slotGrid');
  const chainSection = grid ? grid.closest('.chain-section') : null;
  if (chainSection) {
    chainSection.classList.toggle('hidden', state.editMode);
  }
  grid.innerHTML = '';
  const preset = currentPreset();
  renderDspMeter();

  const stompSlots = state.settings.chocolate?.stompSlots || [0, 1, 3, 4];
  const slotEntries =
    state.mode === 'stomp'
      ? stompSlots.map((slotIdx, switchIdx) => ({
          slot: preset.slots[slotIdx],
          idx: slotIdx,
          switchIdx,
        }))
      : preset.slots.map((slot, idx) => ({
          slot,
          idx,
          switchIdx: stompSlots.indexOf(idx),
        }));

  slotEntries.forEach(({ slot, idx, switchIdx }) => {
    if (!slot) return;
    const def = getEffectDef(slot.effectId);
    const dspVal = getExactDeviceDsp(def.dsp);
    const isHwFull = Boolean(slot.dspFull || (preset.dspstate && (preset.dspstate & (1 << idx))));
    const color = CATEGORY_COLORS[def.category] || CATEGORY_COLORS.EMPTY;
    const iconSrc = getEffectIcon(def);
    const isEmpty = def.id === 'empty';

    const card = document.createElement('article');
    card.className = `slot-card${slot.enabled && !isEmpty && !isHwFull ? ' enabled' : ''}${
      state.editMode && state.selectedSlot === idx ? ' selected-edit' : ''
    }${isHwFull ? ' dsp-overload' : ''}`;
    card.style.setProperty('--slot-color', color);

    const summary = def.params && def.params.length
      ? def.params
          .slice(0, 2)
          .map((p, pIdx) => `${p.name} ${slot.values[pIdx]}${p.unit}`)
          .join(' · ')
      : 'Click to add pedal';

    const fsBadge = ''; // Footswitch assignment is cleanly displayed in the slot header dropdown [FS A ▾]

    const thruStampMarkup = isHwFull
      ? `<div class="pedal-thru-stamp" title="Zoom MS-50G DSP Full: Automatically bypassed in THRU mode to prevent hardware muting">
           <span class="pedal-thru-title">DSP FULL</span>
           <span class="pedal-thru-badge">THRU</span>
         </div>`
      : '';

    const artMarkup = iconSrc
      ? `<div class="pedal-art-stage">
           ${fsBadge}
           <img class="pedal-art-img" src="${iconSrc}" alt="${def.name} ${def.category.toLowerCase()} icon" />
           <span class="pedal-led-halo" aria-hidden="true"></span>
           ${thruStampMarkup}
         </div>`
      : `<div class="pedal-art-stage">${fsBadge}<div class="pedal-empty-bay">+ THRU</div></div>`;

    let cabSubMarkup = '';
    if (def.category === 'AMP') {
      const cabIdx = def.params.findIndex((p) => p.name === 'CAB');
      if (cabIdx !== -1) {
        const cabParam = def.params[cabIdx];
        let cabVal = slot.values[cabIdx] ?? cabParam.default;
        if (cabVal > 22) cabVal = cabRawToIndex(cabVal);
        const cabLabel = cabParam.options?.[cabVal] || 'OFF';
        const cabIconSrc = getCabIcon(cabVal);
        const isOff = cabVal === 0;
        cabSubMarkup = `
          <button class="amp-cab-subslot${isOff ? ' cab-off' : ''}" type="button" title="Built-in Amp Cab (inside Slot ${idx + 1}) — click to change">
            <img class="amp-cab-thumb" src="${cabIconSrc}" alt="${cabLabel} cabinet icon" />
            <span class="amp-cab-info">
              <span class="amp-cab-tag">CAB · BUILT-IN</span>
              <span class="amp-cab-name">${cabLabel}</span>
            </span>
          </button>
        `;
      }
    }

    const reorderMarkup = `
      <div class="slot-reorder-group" title="Move pedal position on Zoom MS-50G chain">
        <button class="slot-move-btn" data-move-left="${idx}" title="Move left in chain" type="button"${idx === 0 ? ' disabled' : ''}>◀</button>
        <button class="slot-move-btn" data-move-right="${idx}" title="Move right in chain" type="button"${idx === 5 ? ' disabled' : ''}>▶</button>
      </div>
    `;

    const fsSelectMarkup = `
      <div class="slot-fs-wrapper" title="Assign Chocolate Plus footswitch">
        <select class="slot-fs-select${switchIdx !== -1 ? ' fs-assigned' : ''}" data-slot-fs="${idx}" aria-label="Assign footswitch to slot ${idx + 1}">
          <option value="-1"${switchIdx === -1 ? ' selected' : ''}>FS: —</option>
          <option value="0"${switchIdx === 0 ? ' selected' : ''}>FS A</option>
          <option value="1"${switchIdx === 1 ? ' selected' : ''}>FS B</option>
          <option value="2"${switchIdx === 2 ? ' selected' : ''}>FS C</option>
          <option value="3"${switchIdx === 3 ? ' selected' : ''}>FS D</option>
        </select>
      </div>
    `;

    const isHeavy = dspVal >= 33 || isHwFull;
    const dspBadgeMarkup = !isEmpty
      ? `<span class="slot-dsp${isHeavy ? ' heavy' : ''}${isHwFull ? ' dsp-full-alert' : ''}" title="${isHwFull ? 'MS-50G pedal firmware reports DSP FULL on this slot!' : 'Actual MS-50G hardware DSP usage'}">${isHwFull ? 'DSP FULL · ' : ''}${Math.round(dspVal)}%</span>`
      : '';

    card.innerHTML = `
      <div class="slot-top">
        <div style="display:flex;align-items:center;gap:6px;">
          <span class="slot-index">S${idx + 1}</span>
          ${reorderMarkup}
        </div>
        <div style="display:flex;align-items:center;gap:6px;">
          ${fsSelectMarkup}
          <span class="slot-category">${def.category}</span>
        </div>
      </div>
      ${artMarkup}
      <div class="slot-body">
        <div class="slot-name">${def.name}</div>
        <div class="slot-meta-badges">
          <span class="slot-zdl">${def.zdl || def.hexId || ''}</span>
          ${dspBadgeMarkup}
        </div>
        <div class="slot-summary">${summary}</div>
      </div>
      ${cabSubMarkup}
      <div class="slot-footer">
        ${
          isHwFull
            ? `<span class="led-pill dsp-thru" title="Bypassed by DSP limit (THRU)">
                 <span class="led-dot thru-dot"></span>
                 <span>THRU</span>
               </span>`
            : `<span class="led-pill">
                 <span class="led-dot"></span>
                 <span>${isEmpty ? 'EMPTY' : slot.enabled ? 'ON' : 'OFF'}</span>
               </span>`
        }
        <button class="slot-edit-chip" type="button">Edit</button>
      </div>
    `;

    // HTML5 Drag and Drop for Stomp Reordering
    card.setAttribute('draggable', 'true');
    card.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', String(idx));
      e.dataTransfer.effectAllowed = 'move';
      card.classList.add('slot-dragging');
    });
    card.addEventListener('dragend', () => {
      card.classList.remove('slot-dragging');
      document.querySelectorAll('.slot-card').forEach((c) => c.classList.remove('slot-drag-over'));
    });
    card.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      card.classList.add('slot-drag-over');
    });
    card.addEventListener('dragleave', () => {
      card.classList.remove('slot-drag-over');
    });
    card.addEventListener('drop', (e) => {
      e.preventDefault();
      card.classList.remove('slot-drag-over');
      const fromIdx = Number(e.dataTransfer.getData('text/plain'));
      if (!isNaN(fromIdx) && fromIdx !== idx) {
        moveSlot(fromIdx, idx);
      }
    });

    // Sub-buttons for move left/right
    const btnLeft = card.querySelector(`[data-move-left="${idx}"]`);
    if (btnLeft) {
      btnLeft.addEventListener('click', (e) => {
        e.stopPropagation();
        if (idx > 0) moveSlot(idx, idx - 1);
      });
    }
    const btnRight = card.querySelector(`[data-move-right="${idx}"]`);
    if (btnRight) {
      btnRight.addEventListener('click', (e) => {
        e.stopPropagation();
        if (idx < 5) moveSlot(idx, idx + 1);
      });
    }

    // Inline Footswitch assignment select
    const fsDropdown = card.querySelector(`[data-slot-fs="${idx}"]`);
    if (fsDropdown) {
      fsDropdown.addEventListener('click', (e) => e.stopPropagation());
      fsDropdown.addEventListener('change', (e) => {
        e.stopPropagation();
        assignChocolateFootswitch(idx, Number(e.target.value));
      });
    }

    card.addEventListener('click', (e) => {
      if (e.target.closest('.amp-cab-subslot')) {
        openSlotEditor(idx);
        setTimeout(() => document.getElementById('param-select-CAB')?.focus(), 30);
        return;
      }
      if (e.target.closest('.slot-edit-chip')) {
        openSlotEditor(idx);
        return;
      }
      if (e.target.closest('.led-pill') || state.mode === 'scenes') {
        toggleSlot(idx);
        return;
      }
      if (state.editMode) {
        state.selectedSlot = idx;
        renderSlots();
        renderEditor();
      } else {
        toggleSlot(idx);
      }
    });

    grid.appendChild(card);
  });
}

function renderEffectSelector(currentEffectId) {
  const select = $('editorEffectSelect');
  const query = state.editorSearch.trim().toLowerCase();
  const cat = state.editorCategory;

  const matches = EFFECT_LIBRARY.filter((fx) => {
    if (fx.id === 'empty') return true;
    const catOk = cat === 'ALL' || fx.category === cat;
    const textOk =
      !query ||
      fx.name.toLowerCase().includes(query) ||
      (fx.zdl && fx.zdl.toLowerCase().includes(query)) ||
      fx.category.toLowerCase().includes(query);
    return catOk && textOk;
  });

  if (!matches.some((fx) => fx.id === currentEffectId)) {
    const cur = getEffectDef(currentEffectId);
    if (cur) matches.unshift(cur);
  }

  select.innerHTML = '';
  const groups = new Map();
  matches.forEach((fx) => {
    if (!groups.has(fx.category)) groups.set(fx.category, []);
    groups.get(fx.category).push(fx);
  });

  for (const [category, items] of groups.entries()) {
    const optgroup = document.createElement('optgroup');
    optgroup.label = `${category} (${items.length})`;
    items.forEach((fx) => {
      const opt = document.createElement('option');
      opt.value = fx.id;
      const dspVal = getExactDeviceDsp(fx.dsp);
      opt.textContent = fx.id === 'empty' ? fx.name : `${fx.name} — ${fx.zdl || fx.hexId || ''} (${Math.round(dspVal)}% DSP)`;
      optgroup.appendChild(opt);
    });
    select.appendChild(optgroup);
  }
  select.value = currentEffectId;
}

function renderEditorCatPills() {
  const wrap = $('editorCatPills');
  wrap.innerHTML = '';
  EFFECT_CATEGORIES.forEach((cat) => {
    const count =
      cat === 'ALL'
        ? EFFECT_LIBRARY.length - 1
        : EFFECT_LIBRARY.filter((fx) => fx.category === cat).length;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `cat-pill${state.editorCategory === cat ? ' active' : ''}`;
    btn.textContent = `${cat} (${count})`;
    btn.addEventListener('click', () => {
      state.editorCategory = cat;
      renderEditorCatPills();
      renderEffectSelector(currentPreset().slots[state.selectedSlot].effectId);
    });
    wrap.appendChild(btn);
  });
}

function updateHeroKnobValue(pIdx, val, displayStr) {
  const wrapper = document.querySelector(`.pedal-knob-wrapper[data-pidx="${pIdx}"]`);
  if (!wrapper) return;
  const dial = wrapper.querySelector('.pedal-knob-dial');
  const valEl = wrapper.querySelector('.pedal-knob-val');
  const min = Number(wrapper.dataset.min);
  const max = Number(wrapper.dataset.max);
  const norm = Math.max(0, Math.min(1, (val - min) / (max - min || 1)));
  const angle = -135 + Math.round(norm * 270);
  if (dial) dial.style.transform = `rotate(${angle}deg)`;
  if (valEl) valEl.textContent = displayStr !== undefined ? displayStr : val;
}

function renderHeroInteractivePedal(slotIdx, def, slot) {
  const container = document.getElementById('heroInteractivePedal');
  const thumb = document.getElementById('editorPedalThumb');
  const emptyBay = document.getElementById('editorHeroEmptyBay');
  if (container) {
    container.classList.add('hidden');
    container.innerHTML = '';
  }

  if (!slot || def.id === 'empty') {
    if (thumb) thumb.classList.add('hidden');
    if (emptyBay) {
      emptyBay.textContent = '+ THRU';
      emptyBay.classList.remove('hidden');
    }
    return;
  }

  if (emptyBay) emptyBay.classList.add('hidden');
  const iconSrc = getEffectIcon(def);
  if (thumb && iconSrc) {
    thumb.src = iconSrc;
    thumb.alt = def.name;
    thumb.classList.remove('hidden');
  } else if (thumb) {
    thumb.classList.add('hidden');
  }
}

function renderEditor() {
  const panel = $('editorPanel');
  if (!state.editMode) {
    panel.classList.add('hidden');
    return;
  }
  panel.classList.remove('hidden');

  const slotIdx = state.selectedSlot;
  const slot = currentPreset().slots[slotIdx];
  const def = getEffectDef(slot.effectId);
  const dspVal = getExactDeviceDsp(def.dsp);
  const color = CATEGORY_COLORS[def.category] || CATEGORY_COLORS.EMPTY;
  const iconSrc = getEffectIcon(def);
  const isEmpty = def.id === 'empty';

  // 1. Slot Navigation Pills (S1..S6) on Top of Parameters Deck
  const nav = $('editorSlotNav');
  if (nav) {
    nav.innerHTML = '';
    const preset = currentPreset();
    const stompSlots = state.settings.chocolate?.stompSlots || [0, 1, 3, 4];
    preset.slots.forEach((s, sIdx) => {
      const sDef = getEffectDef(s.effectId);
      const isSel = sIdx === slotIdx;
      const fsIdx = stompSlots.indexOf(sIdx);
      const fsPart = fsIdx !== -1 ? ` <span class="nav-fs">[${['A', 'B', 'C', 'D'][fsIdx]}]</span>` : '';
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `editor-slot-nav-pill${isSel ? ' active' : ''}`;
      btn.innerHTML = `<strong>S${sIdx + 1}</strong>: ${sDef.name}${fsPart}`;
      btn.onclick = () => {
        openSlotEditor(sIdx);
      };
      nav.appendChild(btn);
    });
  }

  // 2. Scene Save Button in Editor Header (when in SCENES mode)
  const sceneSaveBtn = $('editorSceneSaveBtn');
  if (sceneSaveBtn) {
    if (state.mode === 'scenes') {
      const scenes = getScenesForCurrentPreset();
      const targetIdx = state.activeSceneIndex !== null ? state.activeSceneIndex : 0;
      const targetScene = scenes[targetIdx] || { name: `Scene ${targetIdx + 1}` };
      sceneSaveBtn.textContent = state.sceneDirty
        ? `Save Changes → Scene ${targetIdx + 1} (${targetScene.name})`
        : `Save to Scene ${targetIdx + 1} (${targetScene.name})`;
      sceneSaveBtn.className = `btn btn-sm ${state.sceneDirty ? 'btn-accent' : 'btn-outline'}`;
      sceneSaveBtn.classList.remove('hidden');
      sceneSaveBtn.onclick = () => {
        saveCurrentToScene(targetIdx);
        renderEditor();
      };
    } else {
      sceneSaveBtn.classList.add('hidden');
    }
  }

  // 3. Left-column Enlarged Pedal Showcase
  $('editorSlotTag').textContent = `SLOT ${slotIdx + 1}`;
  $('editorZdlBadge').textContent = def.zdl || def.hexId || '';
  const dspBadge = $('editorDspBadge');
  if (dspBadge) dspBadge.textContent = `DSP ${Math.round(dspVal)}%`;

  const btnMoveLeft = $('btnMoveSlotLeft');
  if (btnMoveLeft) {
    btnMoveLeft.disabled = slotIdx === 0;
    btnMoveLeft.onclick = (e) => {
      e.stopPropagation();
      if (slotIdx > 0) moveSlot(slotIdx, slotIdx - 1);
    };
  }
  const btnMoveRight = $('btnMoveSlotRight');
  if (btnMoveRight) {
    btnMoveRight.disabled = slotIdx === 5;
    btnMoveRight.onclick = (e) => {
      e.stopPropagation();
      if (slotIdx < 5) moveSlot(slotIdx, slotIdx + 1);
    };
  }

  // Footswitch tag & select
  const fsTag = $('editorFsTag');
  const stompSlots = state.settings.chocolate?.stompSlots || [0, 1, 3, 4];
  const currentSwIdx = stompSlots.indexOf(slotIdx);
  if (fsTag) {
    if (currentSwIdx !== -1) {
      fsTag.textContent = `FS ${['A', 'B', 'C', 'D'][currentSwIdx]}`;
      fsTag.classList.remove('hidden');
    } else {
      fsTag.classList.add('hidden');
    }
  }
  const fsSelect = $('editorFsAssignSelect');
  if (fsSelect) {
    fsSelect.value = String(currentSwIdx !== -1 ? currentSwIdx : -1);
    fsSelect.onchange = (e) => {
      assignChocolateFootswitch(slotIdx, Number(e.target.value));
    };
  }

  // Enlarged visual pedal box & LED
  const isThru = Boolean(slot.dspFull || (currentPreset().dspstate && (currentPreset().dspstate & (1 << slotIdx))));
  const heroBox = $('editorHeroPedalBox');
  if (heroBox) {
    heroBox.style.setProperty('--slot-color', color);
    heroBox.classList.toggle('enabled', slot.enabled && !isEmpty && !isThru);
    heroBox.classList.toggle('dsp-overload', isThru);
  }

  const thumb = $('editorPedalThumb');
  const emptyBay = $('editorHeroEmptyBay');
  if (iconSrc) {
    thumb.src = iconSrc;
    thumb.alt = def.name;
    thumb.classList.remove('hidden');
    if (emptyBay) emptyBay.classList.add('hidden');
  } else {
    thumb.classList.add('hidden');
    if (emptyBay) {
      emptyBay.textContent = `+ THRU`;
      emptyBay.classList.remove('hidden');
    }
  }

  // Render physical interactive stompbox pedal in Hero Stage with real-time rotating knobs
  renderHeroInteractivePedal(slotIdx, def, slot);

  // Authentic Zoom Hardware THRU Stamp on Enlarged Pedal
  const heroArtStage = heroBox ? heroBox.querySelector('.editor-hero-art-stage') : null;
  if (heroArtStage) {
    let heroStamp = heroArtStage.querySelector('.pedal-thru-stamp');
    if (isThru) {
      if (!heroStamp) {
        heroStamp = document.createElement('div');
        heroStamp.className = 'pedal-thru-stamp';
        heroStamp.title = 'Zoom MS-50G DSP Full: Automatically bypassed in THRU mode to prevent hardware muting';
        heroStamp.innerHTML = '<span class="pedal-thru-title">DSP FULL</span><span class="pedal-thru-badge">THRU</span>';
        heroArtStage.appendChild(heroStamp);
      }
    } else if (heroStamp) {
      heroStamp.remove();
    }
  }

  const heroLed = $('editorHeroLed');
  if (heroLed) {
    heroLed.className = `editor-hero-led${slot.enabled && !isEmpty && !isThru ? ' on' : ''}`;
  }

  const bypassBtn = $('editorBypassBtn');
  if (isThru) {
    bypassBtn.textContent = 'Status: THRU (DSP FULL)';
    bypassBtn.className = 'btn btn-sm editor-bypass-btn dsp-thru-btn';
    bypassBtn.title = 'Zoom MS-50G DSP Limit Reached: Effect is in THRU mode. Turn off another pedal to enable.';
  } else {
    bypassBtn.textContent = isEmpty ? 'EMPTY / THRU' : (slot.enabled ? 'Status: ON' : 'Status: BYPASS');
    bypassBtn.className = `btn btn-sm editor-bypass-btn ${slot.enabled && !isEmpty ? 'btn-accent' : 'btn-ghost'}`;
    bypassBtn.title = 'Toggle Pedal Bypass (ON / OFF)';
  }
  bypassBtn.onclick = () => {
    toggleSlot(slotIdx);
  };

  const srcBadge = $('editorSourceBadge');
  srcBadge.textContent = def.source || 'Factory';
  srcBadge.classList.toggle('manager', def.source === 'Effect Manager');

  renderEditorCatPills();
  renderEffectSelector(slot.effectId);

  // 4. Parameter Sliders Grid on the Right
  const grid = $('paramsGrid');
  grid.innerHTML = '';

  if (!def.params || def.params.length === 0) {
    grid.innerHTML = '<p class="muted" style="padding:16px;">Empty / bypass slot. Select an effect from the dropdown on the left to add a pedal.</p>';
    return;
  }

  def.params.forEach((param, pIdx) => {
    let val = slot.values[pIdx] ?? param.default;
    if (param.name === 'CAB' && val > 22) {
      val = cabRawToIndex(val);
    }
    const card = document.createElement('div');

    if (param.type === 'select' && Array.isArray(param.options)) {
      card.className = 'param-card param-select-card';
      const isCab = param.name === 'CAB';
      const optionsHtml = param.options
        .map((opt, optIdx) => `<option value="${optIdx}"${optIdx === val ? ' selected' : ''}>${opt}</option>`)
        .join('');
      card.innerHTML = `
        <div class="param-top">
          <span class="param-name">${param.name}${isCab ? ' (BUILT-IN)' : ''}</span>
          <span class="param-value" id="pval-${pIdx}">${param.options[val] || 'OFF'}</span>
        </div>
        <div class="param-select-row">
          ${isCab ? `<img class="param-cab-icon" id="editorCabPreview" src="${getCabIcon(val)}" alt="Cab" />` : ''}
          <select class="param-select" id="param-select-${param.name}" aria-label="${param.name}">
            ${optionsHtml}
          </select>
        </div>
      `;
      const sel = card.querySelector('select');
      const readout = card.querySelector('.param-value');
      const cabPreview = card.querySelector('#editorCabPreview');
      sel.addEventListener('change', () => {
        const nextVal = Number(sel.value);
        slot.values[pIdx] = nextVal;
        readout.textContent = param.options[nextVal] || 'OFF';
        if (cabPreview) cabPreview.src = getCabIcon(nextVal);
        const rawParamVal = isCab ? (nextVal > 22 ? nextVal : cabIndexToRaw(nextVal)) : nextVal;
        midi.setSlotParam(slotIdx, pIdx, rawParamVal);
        sendLivePresetToPedal();
        updateHeroKnobValue(pIdx, nextVal, param.options[nextVal] || 'OFF');
        saveSinglePresetToCache(state.settings.model, state.activePatch, currentPreset());
        if (state.mode === 'scenes') {
          if (state.activeSceneIndex === null) state.activeSceneIndex = 0;
          state.sceneDirty = true;
          renderScenes();
          if (sceneSaveBtn) {
            const scenes = getScenesForCurrentPreset();
            const targetIdx = state.activeSceneIndex;
            const targetScene = scenes[targetIdx] || { name: `Scene ${targetIdx + 1}` };
            sceneSaveBtn.textContent = `Save Changes → Scene ${targetIdx + 1} (${targetScene.name})`;
            sceneSaveBtn.className = 'btn btn-sm btn-accent';
          }
        }
        toast(`Slot ${slotIdx + 1} ${param.name}: ${param.options[nextVal]}`);
        renderSlots();
      });
      grid.appendChild(card);
      return;
    }

    card.className = `param-card${param.cabGroup ? ' param-select-card' : ''}`;
    card.innerHTML = `
      <div class="param-top">
        <span class="param-name">${param.name}</span>
        <span class="param-value" id="pval-${pIdx}">${val}${param.unit}</span>
      </div>
      <input
        class="param-slider"
        type="range"
        min="${param.min}"
        max="${param.max}"
        value="${val}"
        aria-label="${param.name}"
      />
    `;
    const slider = card.querySelector('input');
    const readout = card.querySelector('.param-value');
    slider.addEventListener('input', () => {
      const nextVal = Number(slider.value);
      slot.values[pIdx] = nextVal;
      readout.textContent = `${nextVal}${param.unit}`;
      updateHeroKnobValue(pIdx, nextVal, `${nextVal}${param.unit}`);
      midi.setSlotParam(slotIdx, pIdx, nextVal);
      debouncedLivePatchSync(35);
      saveSinglePresetToCache(state.settings.model, state.activePatch, currentPreset());
      if (state.mode === 'scenes') {
        if (state.activeSceneIndex === null) state.activeSceneIndex = 0;
        if (!state.sceneDirty) {
          state.sceneDirty = true;
          renderScenes();
          if (sceneSaveBtn) {
            const scenes = getScenesForCurrentPreset();
            const targetIdx = state.activeSceneIndex;
            const targetScene = scenes[targetIdx] || { name: `Scene ${targetIdx + 1}` };
            sceneSaveBtn.textContent = `Save Changes → Scene ${targetIdx + 1} (${targetScene.name})`;
            sceneSaveBtn.className = 'btn btn-sm btn-accent';
          }
        }
      }
      renderSlots();
    });
    slider.addEventListener('change', () => {
      sendLivePresetToPedal();
      saveSinglePresetToCache(state.settings.model, state.activePatch, currentPreset());
    });
    grid.appendChild(card);
  });
}

function renderScenes() {
  const scenesPanel = $('scenesPanel');
  if (scenesPanel) {
    scenesPanel.classList.toggle('hidden', state.mode !== 'scenes' || state.editMode);
  }
  const preset = currentPreset();
  $('scenesPatchName').textContent = preset.name;
  const scenes = getScenesForCurrentPreset();
  const grid = $('scenesGrid');
  grid.innerHTML = '';

  const targetIdx = state.activeSceneIndex !== null ? state.activeSceneIndex : 0;
  const captureBtn = $('btnCaptureScene');
  if (captureBtn && scenes[targetIdx]) {
    captureBtn.textContent = state.sceneDirty
      ? `Save Changes → Scene ${targetIdx + 1} (${scenes[targetIdx].name})`
      : `Save to Scene ${targetIdx + 1} (${scenes[targetIdx].name})`;
  }

  scenes.forEach((scene, idx) => {
    const isActive = state.activeSceneIndex === idx;
    const isDirty = isActive && state.sceneDirty;
    const hasSavedParams = Array.isArray(scene.slotValues) && scene.slotValues.some((v) => Array.isArray(v) && v.length > 0);
    const card = document.createElement('div');
    card.className = `scene-card${isActive ? ' active' : ''}${isDirty ? ' dirty' : ''}`;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    const miniPedalsHtml = preset.slots
      .map((slot, sIdx) => {
        const savedFxId = Array.isArray(scene.effectIds) && scene.effectIds[sIdx] ? scene.effectIds[sIdx] : slot.effectId;
        const def = getEffectDef(savedFxId || slot.effectId);
        const isEmpty = def.id === 'empty';
        const isOn = !isEmpty && Boolean(scene.states[sIdx]);
        const iconSrc = getEffectIcon(def);
        const color = CATEGORY_COLORS[def.category] || CATEGORY_COLORS.EMPTY;
        const shortName = isEmpty ? 'THRU' : def.name.slice(0, 7);
        const thumb = iconSrc
          ? `<img class="scene-mini-img" src="${iconSrc}" alt="${def.name}" />`
          : `<span class="scene-mini-empty">+</span>`;
        return `
          <div class="scene-mini-pedal ${isEmpty ? 'empty' : isOn ? 'on' : 'off'}"
               style="--mini-color:${color}"
               data-mini-slot="${sIdx}"
               title="Slot ${sIdx + 1}: ${def.name} (${isEmpty ? 'Empty' : isOn ? 'ON' : 'BYPASS'})">
            <span class="scene-mini-led"></span>
            ${thumb}
            <span class="scene-mini-label">${shortName}</span>
          </div>
        `;
      })
      .join('');

    const fsLetter = ['A', 'B', 'C', 'D'][idx];

    card.innerHTML = `
      <div class="scene-card-top">
        <span class="scene-key">
          SCENE ${idx + 1}${isDirty ? ' · EDITED' : ''}
          ${isActive ? '<span class="scene-active-pill">SELECTED</span>' : ''}
        </span>
        <span class="scene-fs-pill">FS ${fsLetter} · Key ${idx + 1}</span>
      </div>
      <div class="scene-name-row">
        <div class="scene-name">${scene.name}</div>
        <button type="button" class="scene-rename-btn" data-rename-scene="${idx}" title="Rename Scene ${idx + 1}">✎</button>
      </div>
      <div class="scene-mini-chain" aria-label="Miniature pedal chain for Scene ${idx + 1}">
        ${miniPedalsHtml}
      </div>
      <div class="scene-card-footer">
        <div class="scene-params-tag">${hasSavedParams ? 'Pedals + Knobs Saved' : 'Pedal Bypass Saved'}</div>
        <button type="button" class="scene-save-btn" data-save-scene="${idx}" title="Save current pedal ON/OFF states and adjusted parameters to Scene ${idx + 1}">
          ${isDirty ? 'Save Changes' : 'Save Here'}
        </button>
      </div>
    `;

    card.querySelector(`[data-save-scene="${idx}"]`).addEventListener('click', (e) => {
      e.stopPropagation();
      saveCurrentToScene(idx);
    });
    card.querySelector(`[data-rename-scene="${idx}"]`).addEventListener('click', (e) => {
      e.stopPropagation();
      renameScene(idx);
    });
    card.addEventListener('click', () => {
      if (idx === state.activeSceneIndex) {
        if (state.sceneDirty) {
          saveCurrentToScene(idx);
        }
        return;
      }
      recallScene(idx);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (idx === state.activeSceneIndex) {
          if (state.sceneDirty) {
            saveCurrentToScene(idx);
          }
          return;
        }
        recallScene(idx);
      }
    });

    grid.appendChild(card);
  });
}

function renderAll() {
  renderHeader();
  renderBankBar();
  renderSlots();
  renderEditor();
  renderScenes();
}

/* ---------- Settings & MIDI UI ---------- */

function populatePortSelectors({ inputs, outputs }) {
  const zoomSel = $('selectZoomPort');
  const ctrlSel = $('selectControllerPort');

  zoomSel.innerHTML = outputs.length
    ? outputs.map((p) => `<option value="${p.id}">${p.name}</option>`).join('')
    : '<option value="">No MIDI outputs detected</option>';
  if (midi.zoomOutput) zoomSel.value = midi.zoomOutput.id;

  ctrlSel.innerHTML =
    '<option value="">None (use keyboard shortcuts)</option>' +
    inputs.map((p) => `<option value="${p.id}">${p.name}</option>`).join('');

  const connectedBle = inputs.find(
    (p) => p.id === 'ble_controller' || (p.name || '').includes('(Connected Bluetooth)') || (p.name || '').includes('FootCtrl')
  );
  if (connectedBle && (!midi.controllerInput || midi.controllerInput.id !== connectedBle.id)) {
    midi.selectControllerPort(connectedBle.id);
  }

  if (midi.controllerInput) {
    ctrlSel.value = midi.controllerInput.id;
  }

  renderHeader();
}

function renderChocolateSettings() {
  const list = $('chocMapList');
  if (!list) return;
  const preset = currentPreset();
  const letters = ['A', 'B', 'C', 'D'];
  list.innerHTML = '';

  const layoutSel = $('selectChocLayout');
  if (layoutSel) layoutSel.value = state.settings.chocolate?.layout || 'scenes-ef-patch';

  const autoChk = $('chkAutoConfigChocolate');
  if (autoChk) autoChk.checked = state.settings.chocolate?.autoConfigureOnConnect !== false;

  state.settings.chocolate.switches.forEach((sw, idx) => {
    const row = document.createElement('div');
    row.className = 'choc-row';
    const slotOptions = preset.slots
      .map((s, sIdx) => {
        const fxName = getEffectDef(s.effectId).name;
        const sel = state.settings.chocolate.stompSlots[idx] === sIdx ? ' selected' : '';
        return `<option value="${sIdx}"${sel}>Stomp → Slot ${sIdx + 1} (${fxName})</option>`;
      })
      .join('');
    const isLearning = state.learningSwitch === idx;
    row.innerHTML = `
      <span class="choc-badge">${letters[idx]}</span>
      <select data-choc-type="${idx}" aria-label="Switch ${letters[idx]} MIDI type">
        <option value="cc"${sw.type === 'cc' ? ' selected' : ''}>CC</option>
        <option value="pc"${sw.type === 'pc' ? ' selected' : ''}>PC</option>
      </select>
      <input type="number" min="0" max="127" value="${sw.num}" data-choc-num="${idx}" aria-label="Switch ${letters[idx]} MIDI number" />
      <button type="button" class="btn btn-ghost btn-xs choc-learn-btn${isLearning ? ' learning' : ''}" data-choc-learn="${idx}">
        ${isLearning ? 'Stomp…' : 'Learn'}
      </button>
      <select data-choc-slot="${idx}" aria-label="Switch ${letters[idx]} stomp target slot">
        ${slotOptions}
      </select>
    `;

    row.querySelector(`[data-choc-type="${idx}"]`).addEventListener('change', (e) => {
      state.settings.chocolate.switches[idx].type = e.target.value;
    });
    row.querySelector(`[data-choc-num="${idx}"]`).addEventListener('change', (e) => {
      state.settings.chocolate.switches[idx].num = Math.max(0, Math.min(127, Number(e.target.value) || 0));
    });
    row.querySelector(`[data-choc-learn="${idx}"]`).addEventListener('click', () => {
      state.learningSwitch = state.learningSwitch === idx ? null : idx;
      renderChocolateSettings();
      if (state.learningSwitch !== null) {
        toast(`Waiting for Chocolate Plus Switch ${letters[idx]}… stomp it now!`);
      }
    });
    row.querySelector(`[data-choc-slot="${idx}"]`).addEventListener('change', (e) => {
      state.settings.chocolate.stompSlots[idx] = Number(e.target.value);
      renderSlots();
    });

    list.appendChild(row);
  });
}

function setChocolateAutoStatus(text, tone = '') {
  const el = $('chocolateAutoStatus');
  if (!el) return;
  el.textContent = text;
  el.className = `choc-auto-status${tone ? ` ${tone}` : ''}`;
}

async function runChocolateAutoConfigure({ silent = false } = {}) {
  if (state.isAutoConfiguringChocolate) return;
  if (!midi.access && !midi.controllerOutput) {
    if (midi.isSupported) {
      try {
        await midi.init();
      } catch (err) {
        if (!silent) {
          setChocolateAutoStatus(`MIDI access error: ${err.message}`, 'warn');
          toast(`MIDI access denied: ${err.message}`);
        }
        return;
      }
    } else {
      if (!silent) {
        setChocolateAutoStatus('Web MIDI is not supported in this browser (use Chrome or Edge).', 'warn');
        toast('Web MIDI required to auto-configure Chocolate Plus');
      }
      return;
    }
  }

  state.isAutoConfiguringChocolate = true;
  const btn = $('btnAutoConfigChocolate');
  const quickBtn = $('btnQuickAutoChoc');
  if (btn) btn.disabled = true;
  if (quickBtn) quickBtn.disabled = true;

  const layout = state.settings.chocolate?.layout || 'scenes-ef-patch';
  const profile = layout === 'scenes-ef-patch' ? 'scenes-ef-patch' : 'custom-cc';
  const targetCcs =
    layout === 'scenes-ef-patch'
      ? [20, 21, 22, 23]
      : state.settings.chocolate.switches.map((s) => s.num);

  setChocolateAutoStatus('Scanning M-VAVE Wireless MIDI & USB ports for Chocolate Plus…', 'busy');
  if (!silent) toast('Scanning for M-VAVE Chocolate Plus…');

  try {
    const res = await midi.discoverAndProgramChocolate({
      profile,
      channel: 0,
      ccs: targetCcs,
      onProgress: (msg) => {
        setChocolateAutoStatus(msg, 'busy');
      },
    });

    if (res.ok) {
      state.settings.chocolate.layout = layout;
      state.settings.chocolate.lastConfiguredPort = res.portName;
      state.settings.chocolate.switches = targetCcs.map((num) => ({ type: 'cc', num }));
      saveSettings(state.settings);
      renderChocolateSettings();
      setChocolateAutoStatus(`✓ ${res.message}`, 'ok');
      toast(res.message);
      if (layout === 'scenes-ef-patch' && state.mode !== 'scenes') {
        setMode('scenes');
      }
      renderHeader();
    } else {
      setChocolateAutoStatus(res.message, 'warn');
      if (!silent) toast(res.message);
    }
  } catch (err) {
    setChocolateAutoStatus(`Auto-configure failed: ${err.message}`, 'warn');
    if (!silent) toast(`Chocolate Plus config error: ${err.message}`);
  } finally {
    state.isAutoConfiguringChocolate = false;
    if (btn) btn.disabled = false;
    if (quickBtn) quickBtn.disabled = false;
  }
}

function openSettings() {
  $('selectModel').value = state.settings.model;
  $('ccModeCycle').value = state.settings.ccMap.modeCycle ?? 29;
  $('ccBankPrev').value = state.settings.ccMap.bankPrev ?? 24;
  $('ccBankNext').value = state.settings.ccMap.bankNext ?? 25;
  renderChocolateSettings();
  $('settingsModal').classList.remove('hidden');
}

function closeSettings() {
  state.learningSwitch = null;
  $('settingsModal').classList.add('hidden');
}

async function connectWebMidi() {
  if (!midi.isSupported) {
    toast('Web MIDI is not supported in this browser — staying in Mock mode');
    return;
  }
  try {
    if (typeof window !== 'undefined' && window.AndroidMidi && typeof window.AndroidMidi.scanBleDevices === 'function') {
      try { window.AndroidMidi.scanBleDevices(); } catch {}
    }
    await midi.init();
    if (midi.isConnected) {
      state.settings.mockMode = false;
      saveSettings(state.settings);
      toast(`Connected to ${midi.zoomOutput.name} — syncing patch…`);
      midi.sendIdentityRequest();
      midi.enableEditorMode(true);
      midi.requestCurrentProgram();
      setTimeout(() => {
        midi.requestCurrentPatch();
      }, 150);
    } else if (midi.controllerInput || midi.controllerOutput) {
      toast(`Connected M-VAVE controller (${(midi.controllerInput || midi.controllerOutput).name})`);
    } else {
      toast('No Zoom USB pedal found — open Settings to pick a port or stay in Mock mode');
    }
    renderHeader();

    // Auto-discover & configure M-VAVE Chocolate Plus if enabled and a controller port is present
    if (state.settings.chocolate?.autoConfigureOnConnect !== false) {
      setTimeout(() => {
        runChocolateAutoConfigure({ silent: true });
      }, 450);
    }
  } catch (err) {
    toast(`MIDI access denied: ${err.message}`);
  }
}

/* ---------- Fullscreen & Display ---------- */

const FS_ENTER_ICON = `
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="15 3 21 3 21 9"></polyline>
    <polyline points="9 21 3 21 3 15"></polyline>
    <line x1="21" y1="3" x2="14" y2="10"></line>
    <line x1="3" y1="21" x2="10" y2="14"></line>
  </svg>
`;

const FS_EXIT_ICON = `
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="4 14 10 14 10 20"></polyline>
    <polyline points="20 10 14 10 14 4"></polyline>
    <line x1="14" y1="10" x2="21" y2="3"></line>
    <line x1="3" y1="21" x2="10" y2="14"></line>
  </svg>
`;

function toggleFullScreen() {
  if (window.electronAPI && typeof window.electronAPI.toggleFullScreen === 'function') {
    window.electronAPI.toggleFullScreen();
    return;
  }
  if (!document.fullscreenElement) {
    const docEl = document.documentElement;
    if (docEl.requestFullscreen) {
      docEl.requestFullscreen().catch(() => {});
    } else if (docEl.webkitRequestFullscreen) {
      docEl.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

/* ---------- Event Listeners ---------- */

function bindEvents() {
  $('btnBankPrev').addEventListener('click', () => stepBank(-1));
  $('btnBankNext').addEventListener('click', () => stepBank(1));

  const btnFs = $('btnFullscreen');
  if (btnFs) {
    btnFs.addEventListener('click', toggleFullScreen);
  }
  const syncFsUi = (isFs) => {
    if (btnFs) {
      btnFs.classList.toggle('btn-accent', isFs);
      btnFs.setAttribute('aria-pressed', String(isFs));
      btnFs.title = isFs ? 'Exit Full Screen (F / Esc)' : 'Toggle Full Screen (F)';
      btnFs.innerHTML = isFs ? FS_EXIT_ICON : FS_ENTER_ICON;
    }
  };
  document.addEventListener('fullscreenchange', () => {
    syncFsUi(Boolean(document.fullscreenElement));
  });
  if (window.electronAPI && typeof window.electronAPI.onFullScreenChange === 'function') {
    window.electronAPI.onFullScreenChange(syncFsUi);
  }

  document.querySelectorAll('.mode-tab').forEach((tab) => {
    tab.addEventListener('click', () => setMode(tab.dataset.mode));
  });

  $('btnEditMode').addEventListener('click', () => {
    if (state.editMode) {
      closeSlotEditor();
    } else {
      openSlotEditor(state.selectedSlot || 0);
    }
  });

  $('btnCloseEditor').addEventListener('click', closeSlotEditor);

  $('editorBypassBtn').addEventListener('click', () => toggleSlot(state.selectedSlot));

  $('editorEffectSelect').addEventListener('change', (e) => {
    const slotIdx = state.selectedSlot;
    const nextFx = e.target.value;
    const def = getEffectDef(nextFx);
    const preset = currentPreset();
    preset.slots[slotIdx] = createSlotFromEffect(nextFx, nextFx !== 'empty');

    // Automatically enforce hardware DSP limit and apply THRU if overflowing (delays/reverbs)
    enforceDspThru(preset);

    if (preset.slots[slotIdx].dspFull) {
      toast(`⚠️ Assigned ${def.name} to Slot ${slotIdx + 1} · In THRU mode (DSP Full). Turn off another pedal to enable.`);
    } else {
      toast(`Assigned ${def.name} to Slot ${slotIdx + 1}`);
    }

    sendLivePresetToPedal();
    renderSlots();
    renderEditor();
    renderScenes();
  });

  $('editorEffectSearch').addEventListener('input', (e) => {
    state.editorSearch = e.target.value;
    renderEffectSelector(currentPreset().slots[state.selectedSlot].effectId);
  });

  $('btnCaptureScene').addEventListener('click', captureCurrentToScene);

  $('btnToggleMock').addEventListener('click', async () => {
    if (midi.isConnected && !state.settings.mockMode) {
      state.settings.mockMode = true;
      saveSettings(state.settings);
      toast('Switched to Mock Pedal mode');
      renderHeader();
    } else {
      await connectWebMidi();
    }
  });

  const unmuteBtn = $('btnUnmutePatch');
  if (unmuteBtn) {
    unmuteBtn.addEventListener('click', () => {
      sendLivePresetToPedal();
      toast('Sent clean uncorrupted patch buffer to pedal — audio unmuted!');
    });
  }

  $('btnSyncPedal').addEventListener('click', () => {
    if (midi.isConnected && !state.settings.mockMode) {
      midi.requestCurrentProgram();
      setTimeout(() => midi.requestCurrentPatch(), 80);
      toast('Requested current patch & program from Zoom pedal…');
    } else {
      toast('Simulated sync complete (connect a Zoom pedal via USB for live SysEx sync)');
    }
  });

  const btnSyncAll = $('btnSyncAllPatches');
  if (btnSyncAll) {
    btnSyncAll.addEventListener('click', startFullPedalScan);
  }

  const btnModalSync = $('btnModalSyncAll');
  if (btnModalSync) {
    btnModalSync.addEventListener('click', startFullPedalScan);
  }

  const btnMoveLeft = $('btnMoveSlotLeft');
  if (btnMoveLeft) {
    btnMoveLeft.addEventListener('click', () => {
      if (state.selectedSlot > 0) moveSlot(state.selectedSlot, state.selectedSlot - 1);
    });
  }

  const btnMoveRight = $('btnMoveSlotRight');
  if (btnMoveRight) {
    btnMoveRight.addEventListener('click', () => {
      if (state.selectedSlot < 5) moveSlot(state.selectedSlot, state.selectedSlot + 1);
    });
  }

  const editorFsSelect = $('editorFsAssignSelect');
  if (editorFsSelect) {
    editorFsSelect.addEventListener('change', (e) => {
      assignChocolateFootswitch(state.selectedSlot, Number(e.target.value));
    });
  }

  const btnOpenFs = $('btnOpenFootswitches');
  if (btnOpenFs) btnOpenFs.addEventListener('click', openFootswitchesModal);

  const btnCloseFs = $('btnCloseFootswitches');
  if (btnCloseFs) btnCloseFs.addEventListener('click', closeFootswitchesModal);

  const btnSaveFs = $('btnSaveFootswitches');
  if (btnSaveFs) btnSaveFs.addEventListener('click', closeFootswitchesModal);

  const fsModal = $('footswitchModal');
  if (fsModal) {
    fsModal.addEventListener('click', (e) => {
      if (e.target === fsModal) closeFootswitchesModal();
    });
  }

  const btnPreset1to4 = $('btnFsPreset1to4');
  if (btnPreset1to4) btnPreset1to4.addEventListener('click', () => applyFootswitchPreset([0, 1, 2, 3]));

  const btnPreset2to5 = $('btnFsPreset2to5');
  if (btnPreset2to5) btnPreset2to5.addEventListener('click', () => applyFootswitchPreset([1, 2, 3, 4]));

  const btnPreset3to6 = $('btnFsPreset3to6');
  if (btnPreset3to6) btnPreset3to6.addEventListener('click', () => applyFootswitchPreset([2, 3, 4, 5]));

  const btnPresetCustom = $('btnFsPresetCustom');
  if (btnPresetCustom) btnPresetCustom.addEventListener('click', () => applyFootswitchPreset([0, 1, 3, 4]));

  $('btnSettings').addEventListener('click', openSettings);
  $('btnCloseSettings').addEventListener('click', closeSettings);
  $('settingsModal').addEventListener('click', (e) => {
    if (e.target === $('settingsModal')) closeSettings();
  });

  $('btnScanMidi').addEventListener('click', connectWebMidi);
  $('btnClearLog').addEventListener('click', () => {
    state.midiLogs = [];
    $('midiLog').textContent = 'Log cleared.';
  });

  $('btnResetScenes').addEventListener('click', () => {
    clearAllScenes();
    state.scenesByKey = {};
    toast('Reset all saved scenes to defaults');
    renderScenes();
  });

  $('btnChocPresetCc').addEventListener('click', () => {
    state.settings.chocolate.switches = [
      { type: 'cc', num: 20 },
      { type: 'cc', num: 21 },
      { type: 'cc', num: 22 },
      { type: 'cc', num: 23 },
    ];
    renderChocolateSettings();
    toast('Loaded Chocolate Plus CC 20–23 preset');
  });

  $('btnChocPresetPc').addEventListener('click', () => {
    state.settings.chocolate.switches = [
      { type: 'pc', num: 0 },
      { type: 'pc', num: 1 },
      { type: 'pc', num: 2 },
      { type: 'pc', num: 3 },
    ];
    renderChocolateSettings();
    toast('Loaded Chocolate Plus PC 0–3 preset');
  });

  const btnQuickAutoChoc = $('btnQuickAutoChoc');
  if (btnQuickAutoChoc) {
    btnQuickAutoChoc.addEventListener('click', () => runChocolateAutoConfigure({ silent: false }));
  }

  const btnAutoChoc = $('btnAutoConfigChocolate');
  if (btnAutoChoc) {
    btnAutoChoc.addEventListener('click', () => runChocolateAutoConfigure({ silent: false }));
  }

  const selectChocLayout = $('selectChocLayout');
  if (selectChocLayout) {
    selectChocLayout.addEventListener('change', (e) => {
      state.settings.chocolate.layout = e.target.value;
      saveSettings(state.settings);
      toast(
        e.target.value === 'scenes-ef-patch'
          ? 'Chocolate layout → A–D Scenes 1–4 · E/F Patch ±'
          : 'Chocolate layout → Follow Active Mode Tab'
      );
    });
  }

  const chkAutoChoc = $('chkAutoConfigChocolate');
  if (chkAutoChoc) {
    chkAutoChoc.addEventListener('change', (e) => {
      state.settings.chocolate.autoConfigureOnConnect = Boolean(e.target.checked);
      saveSettings(state.settings);
    });
  }

  const selectCtrl = $('selectControllerPort');
  if (selectCtrl) {
    selectCtrl.addEventListener('change', () => {
      midi.selectControllerPort(selectCtrl.value);
    });
  }

  const btnScanBle = $('btnScanBleFootswitch');
  if (btnScanBle) {
    btnScanBle.addEventListener('click', async () => {
      btnScanBle.textContent = 'Scanning...';
      if (typeof window !== 'undefined' && window.AndroidMidi && typeof window.AndroidMidi.scanBleDevices === 'function') {
        try { window.AndroidMidi.scanBleDevices(); } catch {}
      }
      await midi.init();
      setTimeout(() => {
        btnScanBle.textContent = 'Scan Footswitch';
        populatePortSelectors(midi.listPorts());
      }, 1500);
    });
  }

  const selectZoom = $('selectZoomPort');
  if (selectZoom) {
    selectZoom.addEventListener('change', () => {
      if (selectZoom.value) {
        midi.selectZoomPort(selectZoom.value);
        state.settings.mockMode = false;
      }
    });
  }

  document.querySelectorAll('[data-sim-switch]').forEach((btn) => {
    btn.addEventListener('click', () => {
      triggerChocolateSwitch(Number(btn.dataset.simSwitch));
    });
  });

  document.querySelectorAll('[data-sim-ef]').forEach((btn) => {
    btn.addEventListener('click', () => {
      triggerChocolateEF(btn.dataset.simEf);
    });
  });

  $('btnSaveSettings').addEventListener('click', () => {
    const nextModel = $('selectModel').value;
    if (nextModel !== state.settings.model) {
      state.settings.model = nextModel;
      rebuildPresetsForModel(nextModel);
    }
    state.settings.ccMap = {
      modeCycle: Number($('ccModeCycle').value) || 29,
      bankPrev: Number($('ccBankPrev').value) || 24,
      bankNext: Number($('ccBankNext').value) || 25,
    };
    if ($('selectChocLayout')) {
      state.settings.chocolate.layout = $('selectChocLayout').value;
    }
    if ($('chkAutoConfigChocolate')) {
      state.settings.chocolate.autoConfigureOnConnect = Boolean($('chkAutoConfigChocolate').checked);
    }
    const zoomPortId = $('selectZoomPort').value;
    if (zoomPortId) {
      midi.selectZoomPort(zoomPortId);
      state.settings.mockMode = false;
    }
    midi.selectControllerPort($('selectControllerPort').value);
    saveSettings(state.settings);
    closeSettings();
    renderAll();
    toast('Settings & Chocolate Plus mapping saved');
  });

  // Keyboard footswitch shortcuts: [ / ] Bank, 1-4 Presets/Scenes, Q-Y Slots 1-6, M Mode, P Edit
  window.addEventListener('keydown', (e) => {
    if (e.target.matches('input, select, textarea')) return;
    if (!$('settingsModal').classList.contains('hidden')) {
      if (e.key === 'Escape') closeSettings();
      return;
    }
    if (!$('footswitchModal').classList.contains('hidden')) {
      if (e.key === 'Escape') closeFootswitchesModal();
      return;
    }
    const key = e.key.toLowerCase();
    if (key === '[') {
      stepBank(-1);
    } else if (key === ']') {
      stepBank(1);
    } else if (['1', '2', '3', '4'].includes(key)) {
      const idx = Number(key) - 1;
      chocolateChords.press(idx);
    } else if (key === 'arrowleft' || key === 'pagedown' || key === '-') {
      triggerChocolateEF('prev');
    } else if (key === 'arrowright' || key === 'pageup' || key === '=' || key === '+') {
      triggerChocolateEF('next');
    } else if (['q', 'w', 'e', 'r', 't', 'y'].includes(key)) {
      toggleSlot(['q', 'w', 'e', 'r', 't', 'y'].indexOf(key));
    } else if (key === 'p') {
      if (state.editMode) {
        closeSlotEditor();
      } else {
        openSlotEditor(state.selectedSlot || 0);
      }
    } else if (key === 'f') {
      e.preventDefault();
      toggleFullScreen();
    } else if (key === 'm') {
      const order = ['preset', 'stomp', 'scenes'];
      setMode(order[(order.indexOf(state.mode) + 1) % order.length]);
    } else if (key === 'escape' && state.editMode) {
      closeSlotEditor();
    }
  });
}

/* ---------- Boot ---------- */

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  rebuildPresetsForModel(state.settings.model);
  bindEvents();
  renderAll();
}
