import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { enforceDspThru } from '../src/app.js';
import { ZoomPatch } from '../src/zoom-patch.js';
import { getEffectDef } from '../src/mock-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('enforceDspThru automatically bypasses overflowing delay/reverb slots into THRU mode without muting audio', () => {
  // Create a realistic preset with 6 active effects:
  // Slot 0: OptComp (12.5%)
  // Slot 1: RC Boost (25%)
  // Slot 2: FD Combo (33.3%)
  // Slot 3: StereoCho (8.3%)  -> Cumulative = 79.1%
  // Slot 4: SmoothDly (33.3%) -> Cumulative = 112.4% -> OVERFLOW! (dspFull: true, enabled: false)
  // Slot 5: HD Hall (50%)     -> Cumulative = 162.4% -> OVERFLOW! (dspFull: true, enabled: false)
  const preset = {
    name: 'HeavyDSP',
    dspstate: 0,
    slots: [
      { effectId: 'opt-comp', enabled: true },
      { effectId: 'rc-boost', enabled: true },
      { effectId: 'fd-combo', enabled: true },
      { effectId: 'stereo-cho', enabled: true },
      { effectId: 'smooth-dly', enabled: true },
      { effectId: 'hd-hall', enabled: true },
    ],
  };

  const activeDsp = enforceDspThru(preset);

  // Active DSP should be capped at safe load <= 100%
  assert.ok(activeDsp <= 100, `Active DSP must not exceed 100%, got ${activeDsp}%`);
  assert.equal(activeDsp, 79.1, 'Slots 0-3 sum to 79.1% active DSP');

  // Slots 0-3 must remain active
  assert.equal(preset.slots[0].enabled, true, 'Slot 0 (OptComp) remains ON');
  assert.equal(preset.slots[0].dspFull, false);
  assert.equal(preset.slots[1].enabled, true, 'Slot 1 (RC Boost) remains ON');
  assert.equal(preset.slots[1].dspFull, false);
  assert.equal(preset.slots[2].enabled, true, 'Slot 2 (FD Combo) remains ON');
  assert.equal(preset.slots[2].dspFull, false);
  assert.equal(preset.slots[3].enabled, true, 'Slot 3 (StereoCho) remains ON');
  assert.equal(preset.slots[3].dspFull, false);

  // Slots 4 and 5 must be automatically set to THRU (bypassed) exactly like Zoom MS-50G hardware
  assert.equal(preset.slots[4].enabled, false, 'Slot 4 (SmoothDly) is automatically bypassed');
  assert.equal(preset.slots[4].dspFull, true, 'Slot 4 is marked as dspFull (THRU)');
  assert.equal(preset.slots[5].enabled, false, 'Slot 5 (HD Hall) is automatically bypassed');
  assert.equal(preset.slots[5].dspFull, true, 'Slot 5 is marked as dspFull (THRU)');

  // Preset dspstate bitmask must have bits 4 and 5 set (1 << 4 | 1 << 5 = 16 + 32 = 48)
  assert.equal(preset.dspstate, (1 << 4) | (1 << 5), 'dspstate bitmask records Slot 4 & 5 overflow');
});

test('ZoomPatch.makeBin encodes dspstate in byte 129 and encodes THRU slots with state 0 so pedal never mutes', () => {
  const preset = {
    name: 'DspThruTest',
    dspstate: 0,
    slots: [
      { effectId: 'fd-combo', enabled: true, values: [50, 50, 50, 50, 50, 50, 50, 50, 1] }, // 33.3%
      { effectId: 'rc-boost', enabled: true, values: [50, 50, 50] }, // 25%
      { effectId: 'opt-comp', enabled: true, values: [50, 50] }, // 12.5% -> Cumulative = 70.8%
      { effectId: 'stereo-cho', enabled: true, values: [50, 50, 50] }, // 8.3% -> Cumulative = 79.1%
      { effectId: 'hd-hall', enabled: true, values: [50, 50, 50] }, // 50% -> Cumulative = 129.1% -> THRU!
      { effectId: 'empty', enabled: false, values: [] },
    ],
  };

  enforceDspThru(preset);
  assert.equal(preset.slots[4].dspFull, true, 'Slot 4 (HD Hall) must be marked THRU');
  assert.equal(preset.slots[4].enabled, false, 'Slot 4 must be disabled');
  assert.equal(preset.dspstate, 1 << 4, 'dspstate bit 4 set');

  const p = new ZoomPatch();
  p.name = preset.name;
  p.dspstate = preset.dspstate;

  preset.slots.forEach((slot, i) => {
    const def = getEffectDef(slot.effectId);
    const isThru = def.id === 'empty' || slot.dspFull;
    p.setEffectState(i, !isThru && slot.enabled && !slot.dspFull);
    p.setEffectId(i, def.id === 'empty' ? 0 : (def.midiId || 0));
  });

  const bin = p.makeBin(0x58);

  // Byte 129 must preserve the dspstate bitmask in bits 0..5
  const dspstateInBin = bin[129] & 0x3f;
  assert.equal(dspstateInBin, 1 << 4, `Byte 129 must encode dspstate 16, got ${dspstateInBin}`);

  // Slot 4 effect state must be 0 (OFF / THRU) in binary
  const readBackPatch = new ZoomPatch();
  readBackPatch.readBin(bin);
  assert.equal(readBackPatch.getEffectState(4), 0, 'Slot 4 effect state in patch bin must be 0 (bypassed / THRU)');
  assert.equal(readBackPatch.getEffectState(0), 1, 'Slot 0 (FD Combo) must be 1 (ON)');
  assert.equal(readBackPatch.getEffectState(3), 1, 'Slot 3 (StereoCho) must be 1 (ON)');
});

test('styles.css contains authentic Zoom hardware THRU badge and mobile non-overlapping header rules', () => {
  const css = fs.readFileSync(path.join(__dirname, '..', 'styles.css'), 'utf-8');

  // Verify THRU stamp styles exist
  assert.ok(css.includes('.pedal-thru-stamp'), 'styles.css must include .pedal-thru-stamp');
  assert.ok(css.includes('.pedal-thru-badge'), 'styles.css must include .pedal-thru-badge');
  assert.ok(css.includes('.led-pill.dsp-thru'), 'styles.css must include .led-pill.dsp-thru');
  assert.ok(css.includes('.dsp-thru-btn'), 'styles.css must include .dsp-thru-btn');

  // Verify mobile header avoids overlapping grid-areas
  assert.ok(css.includes('grid-column: 1 / span 2 !important;'), 'bank-bar spans full row in mobile');
  assert.ok(css.includes('justify-self: end !important;'), 'header-actions aligns to end without overlapping');
  assert.ok(css.includes('overflow-x: auto !important;'), 'scenes-mode-active scrolls horizontally');
});
