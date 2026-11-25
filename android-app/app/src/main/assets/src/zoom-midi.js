import { ZoomPatch } from './zoom-patch.js';
import {
  buildCustomCcConfig,
  buildDiscoveryRequest,
  buildScenesAndPatchConfig,
  classifyControllerPort,
  parseChocolateMessage,
} from './chocolate-midi.js';

export const ZOOM_MODELS = {
  'MS-50G': { id: 0x58, label: 'MS-50G' },
  'MS-60B': { id: 0x5f, label: 'MS-60B' },
  'MS-70CDR': { id: 0x61, label: 'MS-70CDR' },
};

const MODEL_BY_ID = Object.fromEntries(
  Object.entries(ZOOM_MODELS).map(([name, info]) => [info.id, name])
);

function toHex(bytes) {
  return Array.from(bytes, (b) => b.toString(16).toUpperCase().padStart(2, '0')).join(' ');
}

function fromHex(hex) {
  const clean = String(hex || '').replace(/[^0-9a-fA-F]/g, '');
  const out = new Uint8Array(clean.length / 2);
  for (let i = 0; i < out.length; i++) {
    out[i] = parseInt(clean.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
}

export class ZoomMidiEngine {
  constructor({
    onLog,
    onIdentity,
    onProgramChange,
    onPatchData,
    onParamChange,
    onControllerMessage,
    onControllerSysEx,
    onPortChange,
    onScanProgress,
  } = {}) {
    this.access = null;
    this.androidBridge = typeof window !== 'undefined' ? window.AndroidMidi || null : null;
    this.zoomInput = null;
    this.zoomOutput = null;
    this.controllerInput = null;
    this.controllerOutput = null;
    this.model = 'MS-50G';
    this.firmwareVersion = '3.00';
    this.currentPatchIndex = 0;
    this.isScanning = false;

    this.onLog = onLog || (() => {});
    this.onIdentity = onIdentity || (() => {});
    this.onProgramChange = onProgramChange || (() => {});
    this.onPatchData = onPatchData || (() => {});
    this.onParamChange = onParamChange || (() => {});
    this.onControllerMessage = onControllerMessage || (() => {});
    this.onControllerSysEx = onControllerSysEx || (() => {});
    this.onPortChange = onPortChange || (() => {});
    this.onScanProgress = onScanProgress || (() => {});

    this._pendingPatchResolvers = [];
    this._chocolateWaiters = [];

    if (this.androidBridge && typeof window !== 'undefined') {
      window.__onAndroidMidi = (role, hex) => {
        const bytes = fromHex(hex);
        if (role === 'zoom') this.handleZoomMessage(bytes);
        else if (role === 'controller') this.handleControllerMessage(bytes);
      };
      window.__onAndroidMidiPortsChanged = () => {
        if (!this.zoomOutput) this.autoSelectZoomPorts();
        if (!this.controllerInput) this.autoSelectControllerPorts();
        this.onPortChange(this.listPorts());
      };
    }
  }

  get isSupported() {
    return Boolean(
      this.androidBridge ||
        (typeof navigator !== 'undefined' && typeof navigator.requestMIDIAccess === 'function')
    );
  }

  get isConnected() {
    return Boolean(this.zoomOutput);
  }

  setModel(modelName) {
    if (ZOOM_MODELS[modelName]) {
      this.model = modelName;
    }
  }

  get modelId() {
    return (ZOOM_MODELS[this.model] || ZOOM_MODELS['MS-50G']).id;
  }

  async init() {
    if (this.androidBridge) {
      this.onLog('Using Android Native MIDI bridge (USB-OTG / BLE MIDI).');
      this.autoSelectZoomPorts();
      this.autoSelectControllerPorts();
      this.onPortChange(this.listPorts());
      return true;
    }
    if (!this.isSupported) {
      this.onLog('Web MIDI API is not available in this browser.');
      return false;
    }
    this.access = await navigator.requestMIDIAccess({ sysex: true });
    this.access.onstatechange = () => {
      if (!this.zoomOutput) this.autoSelectZoomPorts();
      if (!this.controllerInput) this.autoSelectControllerPorts();
      this.onPortChange(this.listPorts());
    };
    this.autoSelectZoomPorts();
    this.autoSelectControllerPorts();
    this.onPortChange(this.listPorts());
    return true;
  }

  listPorts() {
    if (this.androidBridge) {
      try {
        const ports = JSON.parse(this.androidBridge.listPorts());
        const inputs = Array.isArray(ports?.inputs) ? ports.inputs : [];
        const outputs = Array.isArray(ports?.outputs) ? ports.outputs : [];

        // Attach send() method to outputs so SysEx / configuration writes work on Android too
        outputs.forEach((out) => {
          if (!out.send) {
            out.send = (data) => {
              const hex = Array.from(data, (b) => b.toString(16).padStart(2, '0')).join('');
              if (typeof this.androidBridge.sendPortHex === 'function') {
                this.androidBridge.sendPortHex(String(out.id), hex);
              } else if (typeof this.androidBridge.sendZoomHex === 'function') {
                this.androidBridge.sendZoomHex(hex);
              }
            };
          }
        });

        return { inputs, outputs };
      } catch {
        return { inputs: [], outputs: [] };
      }
    }
    if (!this.access) return { inputs: [], outputs: [] };
    const inputs = Array.from(this.access.inputs.values()).map((p) => ({
      id: p.id,
      name: p.name || 'Unnamed MIDI Input',
    }));
    const outputs = Array.from(this.access.outputs.values()).map((p) => ({
      id: p.id,
      name: p.name || 'Unnamed MIDI Output',
    }));
    return { inputs, outputs };
  }

  autoSelectZoomPorts() {
    const matcher = /zoom|ms-50|ms-60|ms-70|multistomp/i;
    const { inputs, outputs } = this.listPorts();
    const out = outputs.find((p) => matcher.test(p.name || ''));
    const inp = inputs.find((p) => matcher.test(p.name || ''));
    if (out) {
      this.selectZoomPort(out.id, inp?.id);
      return true;
    }
    return false;
  }

  selectZoomPort(outputId, matchingInputId = null) {
    if (this.androidBridge) {
      const { inputs, outputs } = this.listPorts();
      const out = outputs.find((p) => p.id === outputId) || null;
      this.zoomOutput = out;
      if (out) {
        this.androidBridge.selectZoomOutput(out.id);
        const inp =
          (matchingInputId && inputs.find((i) => i.id === matchingInputId)) ||
          inputs.find((i) => (i.name || '').toLowerCase() === (out.name || '').toLowerCase()) ||
          null;
        this.zoomInput = inp;
        if (inp) this.androidBridge.selectZoomInput(inp.id);
        this.onLog(`Connected Android MIDI Zoom port: ${out.name}`);
        setTimeout(() => {
          this.sendIdentityRequest();
          this.enableEditorMode(true);
          this.requestCurrentProgram();
        }, 150);
      } else {
        this.zoomInput = null;
        this.androidBridge.selectZoomOutput('');
        this.androidBridge.selectZoomInput('');
      }
      return;
    }

    if (!this.access) return;
    if (this.zoomInput) this.zoomInput.onmidimessage = null;

    this.zoomOutput = outputId ? this.access.outputs.get(outputId) || null : null;
    if (matchingInputId) {
      this.zoomInput = this.access.inputs.get(matchingInputId) || null;
    } else if (this.zoomOutput) {
      const targetName = (this.zoomOutput.name || '').toLowerCase();
      this.zoomInput =
        Array.from(this.access.inputs.values()).find(
          (i) => (i.name || '').toLowerCase() === targetName
        ) || null;
    } else {
      this.zoomInput = null;
    }

    if (this.zoomInput) {
      this.zoomInput.onmidimessage = (evt) => this.handleZoomMessage(evt.data);
    }

    if (this.zoomOutput) {
      this.onLog(`Connected Zoom port: ${this.zoomOutput.name}`);
      setTimeout(() => {
        this.sendIdentityRequest();
        this.enableEditorMode(true);
        this.requestCurrentProgram();
      }, 150);
    }
  }

  autoSelectControllerPorts() {
    const { inputs } = this.listPorts();
    const zoomMatcher = /zoom|ms-50|ms-60|ms-70|multistomp/i;
    const candidates = inputs.filter((p) => !zoomMatcher.test(p.name || ''));
    // Priority 1: Connected Bluetooth controller (e.g. FootCtrlPlus)
    const bleConnected = candidates.find(
      (p) => p.id === 'ble_controller' || (p.name || '').includes('(Connected Bluetooth)')
    );
    if (bleConnected) {
      this.selectControllerPort(bleConnected.id);
      return true;
    }
    // Priority 2: Named footswitch controller or wireless MIDI
    const preferred =
      candidates.find((p) => {
        const cls = classifyControllerPort(p.name);
        return cls.isChocolate || cls.isWireless;
      }) || candidates[0];
    if (preferred) {
      this.selectControllerPort(preferred.id);
      return true;
    }
    return false;
  }

  selectControllerPort(inputId) {
    if (this.androidBridge) {
      const { inputs, outputs } = this.listPorts();
      this.controllerInput = inputId ? inputs.find((i) => i.id === inputId) || null : null;
      this.controllerOutput = this.controllerInput
        ? outputs.find((o) => (o.name || '').toLowerCase() === (this.controllerInput.name || '').toLowerCase()) || null
        : null;
      this.androidBridge.selectControllerInput(this.controllerInput ? this.controllerInput.id : '');
      if (this.controllerInput) {
        this.onLog(`Connected Android MIDI footswitch: ${this.controllerInput.name}`);
      }
      return;
    }

    if (!this.access) return;
    if (this.controllerInput) this.controllerInput.onmidimessage = null;
    this.controllerInput = inputId ? this.access.inputs.get(inputId) || null : null;
    if (this.controllerInput) {
      const targetName = (this.controllerInput.name || '').toLowerCase();
      this.controllerOutput =
        Array.from(this.access.outputs.values()).find(
          (o) => (o.name || '').toLowerCase() === targetName
        ) || null;
      this.controllerInput.onmidimessage = (evt) => this.handleControllerMessage(evt.data);
      this.onLog(`Connected external footswitch: ${this.controllerInput.name}`);
    } else {
      this.controllerOutput = null;
    }
  }

  sendRaw(bytes, label = '') {
    const arr = Array.from(bytes);
    const hex = toHex(arr);
    if (!this.zoomOutput) {
      this.onLog(`[MOCK TX] ${label ? `${label}: ` : ''}${hex}`);
      return false;
    }
    if (this.androidBridge) {
      this.androidBridge.sendZoomHex(hex.replace(/\s+/g, ''));
      this.onLog(`[TX] ${label ? `${label}: ` : ''}${hex}`);
      return true;
    }
    this.zoomOutput.send(arr);
    this.onLog(`[TX] ${label ? `${label}: ` : ''}${hex}`);
    return true;
  }

  sendIdentityRequest() {
    this.sendRaw([0xf0, 0x7e, 0x00, 0x06, 0x01, 0xf7], 'Identity Req');
  }

  enableEditorMode(enabled = true) {
    const cmd = enabled ? 0x50 : 0x51;
    this.sendRaw([0xf0, 0x52, 0x00, this.modelId, cmd, 0xf7], enabled ? 'Editor ON' : 'Editor OFF');
  }

  requestCurrentProgram() {
    this.sendRaw([0xf0, 0x52, 0x00, this.modelId, 0x33, 0xf7], 'Request Current Program');
  }

  requestCurrentPatch() {
    this.sendRaw([0xf0, 0x52, 0x00, this.modelId, 0x29, 0xf7], 'Read Current Patch');
  }

  selectPatch(patchIndex, autoRequestPatch = true) {
    const clamped = Math.max(0, Math.min(49, patchIndex));
    this.currentPatchIndex = clamped;
    this.sendRaw([0xc0, clamped], `Patch ${String(clamped + 1).padStart(2, '0')}`);
    if (autoRequestPatch && this.isConnected) {
      setTimeout(() => {
        this.requestCurrentPatch();
      }, 50);
    }
  }

  setSlotBypass(slotIndex, enabled) {
    const val = enabled ? 1 : 0;
    this.sendRaw(
      [0xf0, 0x52, 0x00, this.modelId, 0x31, slotIndex, 0x00, val, 0x00, 0xf7],
      `Slot ${slotIndex + 1} ${enabled ? 'ON' : 'OFF'}`
    );
  }

  setSlotParam(slotIndex, paramIndex, value) {
    const v = Math.max(0, Math.round(value));
    const lo = v & 0x7f;
    const hi = (v >> 7) & 0x7f;
    // Zoom MultiStomp parameter offset: param 0 = bypass, 1 = effect ID, 2+ = knobs
    this.sendRaw(
      [0xf0, 0x52, 0x00, this.modelId, 0x31, slotIndex, paramIndex + 2, lo, hi, 0xf7],
      `Slot ${slotIndex + 1} P${paramIndex + 1}=${v}`
    );
  }

  sendCurrentPatch(patchData) {
    if (Array.isArray(patchData) || patchData instanceof Uint8Array) {
      return this.sendRaw(patchData, 'Send Patch Buffer');
    }
    if (patchData && typeof patchData.makeBin === 'function') {
      const bin = patchData.makeBin(this.modelId);
      return this.sendRaw(bin, `Send Patch: ${patchData.name || 'Current'}`);
    }
    return false;
  }

  storePatch(patchIndex = this.currentPatchIndex) {
    const pp = Math.max(0, Math.min(49, patchIndex));
    this.sendRaw(
      [0xf0, 0x52, 0x00, this.modelId, 0x32, 0x01, 0x00, 0x00, pp, 0x00, 0x00, 0x00, 0x00, 0x00, 0xf7],
      `Store Patch to Slot ${pp + 1}`
    );
  }

  waitForPatchData(timeoutMs = 600) {
    return new Promise((resolve) => {
      let timer = null;
      const resolver = (patch) => {
        if (timer) clearTimeout(timer);
        resolve(patch);
      };
      timer = setTimeout(() => {
        const idx = this._pendingPatchResolvers.indexOf(resolver);
        if (idx !== -1) this._pendingPatchResolvers.splice(idx, 1);
        resolve(null);
      }, timeoutMs);
      this._pendingPatchResolvers.push(resolver);
    });
  }

  async scanAllPatches(onProgress) {
    if (!this.isConnected) return false;
    this.isScanning = true;
    const originalPatch = this.currentPatchIndex;
    const patches = [];

    this.onLog('[SCAN] Starting scan of all 50 patches from Zoom pedal…');
    this.enableEditorMode(true);

    for (let i = 0; i < 50; i++) {
      if (!this.isScanning) {
        this.onLog('[SCAN] Scan cancelled.');
        break;
      }
      if (onProgress) {
        onProgress({ current: i + 1, total: 50, patchIndex: i });
      }

      this.sendRaw([0xc0, i], `Scan Select P${String(i + 1).padStart(2, '0')}`);
      await new Promise((r) => setTimeout(r, 60));

      this.requestCurrentPatch();
      const patchData = await this.waitForPatchData(450);
      if (patchData) {
        patches.push({ index: i, ...patchData });
      }
    }

    // Restore original active patch
    this.selectPatch(originalPatch, true);
    this.isScanning = false;
    this.onLog(`[SCAN] Scan finished. Fetched ${patches.length}/50 patches.`);
    return patches;
  }

  cancelScan() {
    this.isScanning = false;
  }

  handleZoomMessage(data) {
    if (!data || data.length < 2) return;
    this.onLog(`[RX] ${toHex(data.slice(0, 24))}${data.length > 24 ? ' …' : ''}`);

    const status = data[0];

    // 1. MIDI Program Change from pedal: C0 <patchIndex>
    if ((status & 0xf0) === 0xc0) {
      const patchIndex = data[1] & 0x7f;
      this.currentPatchIndex = patchIndex;
      this.onLog(`[ZOOM PC] Pedal selected patch ${String(patchIndex + 1).padStart(2, '0')}`);
      this.onProgramChange(patchIndex);
      return;
    }

    // 2. Response to 0x33 (Request Current Program): [B0 00 00, B0 20 00, C0 <patchIndex>]
    if (status === 0xb0) {
      for (let i = 0; i < data.length - 1; i++) {
        if ((data[i] & 0xf0) === 0xc0) {
          const patchIndex = data[i + 1] & 0x7f;
          this.currentPatchIndex = patchIndex;
          this.onLog(`[ZOOM PC] Active program on pedal is ${String(patchIndex + 1).padStart(2, '0')}`);
          this.onProgramChange(patchIndex);
          return;
        }
      }
    }

    if (status !== 0xf0) return;

    // 3. Universal Identity Reply: F0 7E 00 06 02 52 <modelId> ...
    if (data[1] === 0x7e && data[3] === 0x06 && data[4] === 0x02 && data[5] === 0x52) {
      const detected = MODEL_BY_ID[data[6]];
      let version = '1.00';
      if (data.length >= 14) {
        version = String.fromCharCode(data[10], data[11], data[12], data[13]);
      }
      this.firmwareVersion = version;
      if (detected) {
        this.model = detected;
        this.onIdentity(detected, version);
      }
      return;
    }

    // 4. Real-time Parameter / Bypass Change: F0 52 00 <modelId> 31 <slot> <param> <valLSB> <valMSB> F7
    if (data[1] === 0x52 && data[4] === 0x31 && data.length >= 10) {
      const slotIndex = data[5];
      const paramIndex = data[6];
      const value = (data[7] & 0x7f) | ((data[8] & 0x7f) << 7);
      this.onLog(`[PARAM] Slot ${slotIndex + 1} Param ${paramIndex} = ${value}`);
      this.onParamChange({ slotIndex, paramIndex, value });
      return;
    }

    // 5. Current Patch Data Reply: F0 52 00 <modelId> 28 <packed 146 or 105 bytes...> F7
    if (data[1] === 0x52 && data[4] === 0x28 && data.length >= 100) {
      const patch = new ZoomPatch();
      if (patch.readBin(data)) {
        const slots = [];
        const flen = data.length >= 146 ? 6 : 4;
        for (let i = 0; i < 6; i++) {
          if (i < flen) {
            const midiId = patch.getEffectId(i);
            const enabled = patch.getEffectState(i) === 1;
            const values = [];
            for (let p = 2; p < 11; p++) {
              values.push(patch.getParamVal(i, p));
            }
            slots.push({
              slotIndex: i,
              enabled,
              midiId,
              values,
            });
          } else {
            slots.push({
              slotIndex: i,
              enabled: false,
              midiId: 0,
              values: [],
            });
          }
        }

        const parsed = {
          name: patch.name || 'Untitled',
          slots,
          maxfx: patch.maxfx,
          curfx: patch.curfx,
          dspstate: patch.dspstate,
          raw: data,
        };

        // Notify any pending waiters (for scan/sync)
        while (this._pendingPatchResolvers.length > 0) {
          const resolver = this._pendingPatchResolvers.shift();
          try {
            resolver(parsed);
          } catch {
            // ignore
          }
        }

        this.onPatchData(parsed);
      }
    }
  }

  handleControllerMessage(data, portName = '') {
    if (!data || data.length < 2) return;
    if (data[0] === 0xf0) {
      const parsed = parseChocolateMessage(data);
      if (parsed.kind !== 'other') {
        this.onLog(`[CHOC RX] ${parsed.kind.toUpperCase()}: ${toHex(data.slice(0, 14))}${data.length > 14 ? ' …' : ''}`);
      }
      this._resolveChocolateWaiters(parsed);
      this.onControllerSysEx(parsed, data);
      return;
    }
    const status = data[0] & 0xf0;
    if (status === 0xb0 && data.length >= 3) {
      this.onLog(`[CTRL CC] CC#${data[1]} = ${data[2]}`);
      this.onControllerMessage({
        type: 'cc',
        cc: data[1],
        value: data[2],
        portName: portName || this.controllerInput?.name || 'Controller',
      });
    } else if (status === 0xc0) {
      this.onLog(`[CTRL PC] Program ${data[1]}`);
      this.onControllerMessage({
        type: 'pc',
        program: data[1],
        portName: portName || this.controllerInput?.name || 'Controller',
      });
    }
  }

  _resolveChocolateWaiters(parsed) {
    if (!this._chocolateWaiters.length) return;
    const remaining = [];
    for (const waiter of this._chocolateWaiters) {
      if (waiter.predicate(parsed)) {
        clearTimeout(waiter.timer);
        waiter.resolve(parsed);
      } else {
        remaining.push(waiter);
      }
    }
    this._chocolateWaiters = remaining;
  }

  _waitForChocolate(predicate, timeoutMs = 750) {
    return new Promise((resolve) => {
      const waiter = {
        predicate,
        resolve,
        timer: setTimeout(() => {
          this._chocolateWaiters = this._chocolateWaiters.filter((w) => w !== waiter);
          resolve(null);
        }, timeoutMs),
      };
      this._chocolateWaiters.push(waiter);
    });
  }

  _getChocolateCandidatePairs() {
    const zoomMatcher = /zoom|ms-50|ms-60|ms-70|multistomp/i;
    const pairs = [];
    const seenIds = new Set();

    const pushPair = (output, input) => {
      if (!output || seenIds.has(output.id || output.name)) return;
      if (zoomMatcher.test(output.name || '')) return;
      seenIds.add(output.id || output.name);
      pairs.push({ output, input });
    };

    // 1. Currently selected controller output first
    if (this.controllerOutput) {
      pushPair(this.controllerOutput, this.controllerInput);
    }

    // 2. Scan all Web MIDI or Android non-Zoom outputs (prioritizing Chocolate / SinCo / M-VAVE / Wireless MIDI)
    const allOutputs = this.access
      ? Array.from(this.access.outputs.values())
      : (this.listPorts().outputs || []);
    const allInputs = this.access
      ? Array.from(this.access.inputs.values())
      : (this.listPorts().inputs || []);

    if (allOutputs.length > 0) {
      const scored = allOutputs
        .filter((o) => !zoomMatcher.test(o.name || ''))
        .map((o) => {
          const cls = classifyControllerPort(o.name);
          const score = cls.isChocolate ? 3 : cls.isWireless ? 2 : 1;
          const matchingInput =
            allInputs.find((i) => (i.name || '').toLowerCase() === (o.name || '').toLowerCase()) ||
            null;
          return { output: o, input: matchingInput, score };
        })
        .sort((a, b) => b.score - a.score);

      scored.forEach(({ output, input }) => pushPair(output, input));
    }

    return pairs;
  }

  /**
   * Discover M-VAVE Chocolate Plus over USB MIDI or Wireless MIDI and
   * automatically program it via bit-perfect `09 49` SysEx configuration writes.
   */
  async discoverAndProgramChocolate({
    profile = 'scenes-ef-patch',
    channel = 0,
    maxBanks = 32,
    ccs = [20, 21, 22, 23],
    onProgress = () => {},
  } = {}) {
    const pairs = this._getChocolateCandidatePairs();
    if (pairs.length === 0) {
      return {
        ok: false,
        discovered: false,
        reason: 'no-ports',
        message:
          'No Chocolate Plus or M-VAVE MIDI output port found. Connect your Chocolate Plus via USB (or M-VAVE Wireless MIDI) and click Scan MIDI first.',
      };
    }

    // Direct Bluetooth Low Energy (FootCtrlPlus) uses standard MIDI CC/PC; M-VAVE filters EEPROM SysEx over BLE
    const isBleConnected =
      (this.controllerInput && (this.controllerInput.id === 'ble_controller' || (this.controllerInput.name || '').includes('Bluetooth') || (this.controllerInput.name || '').includes('FootCtrl'))) ||
      pairs.some(p => p.output.id === 'ble_controller' || (p.output.name || '').includes('Bluetooth') || (p.output.name || '').includes('FootCtrl'));

    if (isBleConnected) {
      this.onLog('[CHOC] FootCtrlPlus is connected via Bluetooth LE — active for Scenes & Stomps (CC 20–23 / PC 0–3).');
      return {
        ok: true,
        discovered: true,
        transport: 'bluetooth',
        portName: 'FootCtrlPlus',
        message: 'FootCtrlPlus is connected via Bluetooth! Switches A–D are active for Scenes & Stomps.',
      };
    }

    const discoveryFrame = buildDiscoveryRequest();
    let matchedPair = null;
    const tempListeners = [];

    try {
      for (const pair of pairs) {
        const { output, input } = pair;
        const portName = output.name || 'MIDI Output';
        onProgress(`Probing ${portName} for M-VAVE Chocolate Plus…`);

        // Attach temporary listener if this input is not already wired to handleControllerMessage
        if (input && input !== this.controllerInput && !input.onmidimessage) {
          const prev = input.onmidimessage;
          input.onmidimessage = (evt) => this.handleControllerMessage(evt.data);
          tempListeners.push({ input, prev });
        }

        const waitPromise = this._waitForChocolate((m) => m.kind === 'discovery-response', 750);
        this.onLog(`[CHOC TX] Discovery → ${portName}: ${toHex(discoveryFrame)}`);
        output.send(discoveryFrame);
        const reply = await waitPromise;
        if (reply && reply.kind === 'discovery-response') {
          matchedPair = pair;
          break;
        }
      }

      if (!matchedPair) {
        const names = pairs.map((p) => p.output.name || 'MIDI').join(', ');
        const isBle = names.includes('Bluetooth') || names.includes('FootCtrl') || names.includes('ble_');
        if (isBle) {
          return {
            ok: true,
            discovered: true,
            transport: 'bluetooth',
            portName: 'FootCtrlPlus',
            message:
              'FootCtrlPlus is connected via Bluetooth! Footswitches A–D are active for Scenes & Stomps (Bluetooth uses standard MIDI CC/PC).',
          };
        }
        return {
          ok: false,
          discovered: false,
          reason: 'no-sysex-reply',
          checkedPorts: names,
          message:
            `No Chocolate Plus SysEx reply on (${names}). M-VAVE Wireless MIDI dongles often filter SysEx config writes — connect Chocolate Plus directly via USB once, click Auto-Configure, then unplug and play wirelessly!`,
        };
      }

      const { output } = matchedPair;
      const portName = output.name || 'Chocolate Plus';
      const cls = classifyControllerPort(portName);
      const transport = cls.isWireless && !cls.isChocolate ? 'wireless' : 'usb';

      const writes =
        profile === 'custom-cc'
          ? buildCustomCcConfig({ channel, ccs, latching: false })
          : buildScenesAndPatchConfig({ channel, ccs });

      let ackCount = 0;
      for (let i = 0; i < writes.length; i++) {
        const w = writes[i];
        onProgress(`Writing (${i + 1}/${writes.length}): ${w.label}…`);
        const ackWait = this._waitForChocolate((m) => m.kind === 'ack', 650);
        this.onLog(`[CHOC TX] ${w.label}: ${toHex(w.bytes)}`);
        output.send(w.bytes);
        const ack = await ackWait;
        if (ack && ack.kind === 'ack') ackCount++;
        await new Promise((r) => setTimeout(r, 55));
      }

      return {
        ok: true,
        discovered: true,
        transport,
        portName,
        ackCount,
        totalWrites: writes.length,
        profile,
        message:
          profile === 'custom-cc'
            ? `Programmed Chocolate Plus (${portName}) to Custom CC (${ccs.join(', ')}) — ${ackCount}/${writes.length} writes ACKed.`
            : `Programmed Chocolate Plus (${portName}) via ${transport.toUpperCase()}: A–D = Scenes 1–4, E (A+B) = Patch Down, F (C+D) = Patch Up (${ackCount}/${writes.length} ACKed).`,
      };
    } finally {
      for (const { input, prev } of tempListeners) {
        input.onmidimessage = prev || null;
      }
    }
  }
}
