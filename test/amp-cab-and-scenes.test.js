import test from 'node:test';
import assert from 'node:assert/strict';
import { getEffectDef, cabRawToIndex, cabIndexToRaw, CAB_INDEX_TO_RAW } from '../src/mock-data.js';
import { ZoomPatch } from '../src/zoom-patch.js';
import { CUSTOM_COMMUNITY_EFFECTS } from '../src/custom-effects-db.js';

test('Amp models have exact 9 parameters matching Zoom MS-50G hardware', () => {
  // 1. Check custom Marshall Plexi
  const plexi = getEffectDef(1080295944);
  assert.ok(plexi, 'Marshall Plexi must be found in catalog');
  assert.equal(plexi.params.length, 9, 'Marshall Plexi must have exactly 9 parameters');
  
  const expectedNames = ['Gain', 'Tube', 'Level', 'Trebl', 'Middl', 'Bass', 'Prese', 'CAB', 'OUT'];
  plexi.params.forEach((p, idx) => {
    assert.equal(p.name, expectedNames[idx], `Param ${idx} should be ${expectedNames[idx]}`);
  });
  
  // Verify CAB LEVEL does NOT exist
  assert.equal(plexi.params.some(p => p.name.includes('CAB LEVEL')), false, 'CAB LEVEL parameter must not exist');

  // 2. Check standard factory amp (e.g. ms-1959 / 1080033544)
  const factoryPlexi = getEffectDef('ms-1959');
  assert.ok(factoryPlexi, 'Factory MS 1959 must be found in catalog');
  assert.equal(factoryPlexi.params.length, 9, 'Factory amp must have exactly 9 parameters');
  factoryPlexi.params.forEach((p, idx) => {
    assert.equal(p.name, expectedNames[idx], `Param ${idx} should be ${expectedNames[idx]}`);
  });
});

test('CAB raw bitfield conversion maps accurately between Zoom hardware bytes and UI index', () => {
  // Hardware byte 240 is MS 1959 4x12 (index 16)
  assert.equal(cabRawToIndex(240), 16, 'Raw 240 must map to index 16 (MS 1959 4x12)');
  assert.equal(cabIndexToRaw(16), 240, 'Index 16 must map to raw 240');

  // Hardware byte 8 is FD COMBO 2x12 (index 1)
  assert.equal(cabRawToIndex(8), 1, 'Raw 8 must map to index 1 (FD COMBO 2x12)');
  assert.equal(cabIndexToRaw(1), 8, 'Index 1 must map to raw 8');

  // Hardware byte 16 is DELUXE-R 1x12 (index 2)
  assert.equal(cabRawToIndex(16), 2, 'Raw 16 must map to index 2 (DELUXE-R 1x12)');
  assert.equal(cabIndexToRaw(2), 16, 'Index 2 must map to raw 16');

  // Hardware byte 0 is OFF (index 0)
  assert.equal(cabRawToIndex(0), 0, 'Raw 0 must map to index 0 (OFF)');
  assert.equal(cabIndexToRaw(0), 0, 'Index 0 must map to raw 0');
});

test('Changing CAB between DLX-R (index 2) and MS 1959 (index 16) syncs accurately to pedal', () => {
  // 1. User selects DLX-R 1x12 (UI Index 2)
  const dlxrIndex = 2;
  const dlxrRaw = cabIndexToRaw(dlxrIndex);
  assert.equal(dlxrRaw, 16, 'DLX-R 1x12 UI index 2 must convert to raw 16 for hardware');

  // 2. User selects MS 1959 4x12 (UI Index 16)
  const ms1959Index = 16;
  const ms1959Raw = cabIndexToRaw(ms1959Index);
  assert.equal(ms1959Raw, 240, 'MS 1959 4x12 UI index 16 must convert to raw 240 for hardware');

  // 3. ZoomPatch encodes raw 240 into Slot 3 (Slot 4 on UI)
  const p = new ZoomPatch();
  p.setEffectId(3, 1080295944); // Marshall Plexi
  p.setEffectState(3, 1);
  p.setParamVal(3, 9, ms1959Raw); // Raw 240

  const bin = p.makeBin(0x58);
  const readBack = new ZoomPatch();
  readBack.readBin(bin);
  const rawFromHardware = readBack.getParamVal(3, 9);
  assert.equal(rawFromHardware, 240, 'Hardware binary patch must preserve raw 240 for MS 1959 4x12');

  // 4. When software decodes the hardware patch, it must decode to index 16 (MS 1959) and NOT index 2
  const decodedIndex = cabRawToIndex(rawFromHardware);
  assert.equal(decodedIndex, 16, 'Raw 240 from hardware must decode to UI index 16 (MS 1959 4x12)');
  assert.notEqual(decodedIndex, 2, 'Must not revert or collapse to DLX-R 1x12 (index 2)');
});

test('ZoomPatch makeBin correctly encodes CAB for custom Marshall Plexi and sideloaded amps', () => {
  const p = new ZoomPatch();
  // Slot 3 (Slot 4 on UI): Marshall Plexi (1080295944)
  p.setEffectId(3, 1080295944);
  p.setEffectState(3, 1);
  p.setParamVal(3, 9, 240); // CAB = MS 1959 4x12 (raw 240)

  const bin = p.makeBin(0x58);
  // CAB_BYTES[3] is byte 84 in the 146-byte patch
  assert.equal(bin[84], 0x40, 'Marshall Plexi in Slot 4 with CAB enabled must have CAB_BYTES[3] (byte 84) set to 0x40');

  // When CAB is set to 0 (OFF)
  p.setParamVal(3, 9, 0);
  const binOff = p.makeBin(0x58);
  assert.equal(binOff[84], 0x00, 'CAB set to OFF must set CAB_BYTES[3] to 0x00');

  // Verify byte 70 (V2_BYTES[3]) is NOT corrupted to 0x20 for custom sideloaded amps
  assert.equal(bin[70], 0x00, 'Custom sideloaded amp must not write V2 byte 70');
});

test('enforceDspThru never bypasses or marks an Amp as THRU, even in high DSP chains', async () => {
  const { enforceDspThru } = await import('../src/app.js');

  const heavyPreset = {
    name: 'HeavyRig',
    dspstate: 0,
    slots: [
      { effectId: 'znr', enabled: true, dspFull: false, values: [] },          // 5.9%
      { effectId: 'overdrive', enabled: true, dspFull: false, values: [] },    // 12.5%
      { effectId: 'plexi2', enabled: true, dspFull: false, values: [] },       // 34% (Amp)
      { effectId: 'carbon-dly', enabled: true, dspFull: false, values: [] },   // 33.3%
      { effectId: 'hall', enabled: true, dspFull: false, values: [] },         // 11.1%
      { effectId: 'empty', enabled: false, dspFull: false, values: [] },
    ],
  };

  enforceDspThru(heavyPreset);

  // Amp must remain ON and NOT marked dspFull
  const ampSlot = heavyPreset.slots[2];
  assert.equal(ampSlot.enabled, true, 'Amp in Slot 3 must remain ENABLED');
  assert.equal(ampSlot.dspFull, false, 'Amp in Slot 3 must NEVER have dspFull set to true');
});

test('Selected Scene card in styles.css does not expand height or hide Save Here button', async () => {
  const fs = await import('node:fs');
  const path = await import('node:path');
  const css = fs.readFileSync(path.resolve('styles.css'), 'utf8');

  // .scene-card.active must not have flex: 1.45 or oversized padding that hides footer
  assert.match(css, /\.scene-card\.active\s*\{[^}]*flex:\s*1;/);
  assert.match(css, /\.scene-card-footer\s*\{[^}]*flex-shrink:\s*0;/);

  // Active scene card must NOT enlarge mini pedal images (which causes vertical card expansion and clipped buttons)
  assert.equal(css.includes('.scene-card.active .scene-mini-img'), false, 'Active card must not enlarge mini pedal images');

  // Scene card must have overflow hidden and box-sizing border-box to contain footer and buttons
  assert.match(css, /\.scene-card\s*\{[^}]*overflow:\s*hidden;/);
  assert.match(css, /\.scene-card\s*\{[^}]*box-sizing:\s*border-box;/);

  // Scenes mode pedal strip must not be squished to 110px
  assert.equal(css.includes('max-height: 110px;'), false, 'Pedal chain strip must not be locked to 110px max height');
});

test('styles.css sets color-scheme dark and dark options for footswitch and parameter dropdowns', async () => {
  const fs = await import('node:fs');
  const path = await import('node:path');
  const css = fs.readFileSync(path.resolve('styles.css'), 'utf8');

  // Verify color-scheme: dark on :root and select elements to prevent white popup on Windows
  assert.match(css, /color-scheme:\s*dark;/, 'Must specify color-scheme: dark');
  assert.match(css, /select\s*\{[^}]*color-scheme:\s*dark;/);
  
  // Verify option elements have dark background and high-contrast light text
  assert.match(css, /select\s+option[^}]*background-color:\s*#0d131f\s*!important;/);
  assert.match(css, /select\s+option[^}]*color:\s*#f3f6fc\s*!important;/);
  
  // Verify .editor-fs-select and .slot-fs-select have dark styling
  assert.match(css, /\.editor-fs-select\s*\{[^}]*color-scheme:\s*dark;/);
  assert.match(css, /\.slot-fs-select\s*\{[^}]*color-scheme:\s*dark;/);
  assert.match(css, /\.fs-matrix-select\s*\{[^}]*color-scheme:\s*dark;/);
});

test('Delay and Reverb effects default Tail to 1 (ON) so tails persist upon bypass', async () => {
  const { createSlotFromEffect, getEffectDef } = await import('../src/mock-data.js');

  // TapeEcho (midiId 1077936388 / tape-echo)
  const tapeEcho = createSlotFromEffect('tape-echo');
  const tapeDef = getEffectDef('tape-echo');
  const tailIdx = tapeDef.params.findIndex(p => p.name === 'Tail');
  assert.ok(tailIdx !== -1, 'TapeEcho must have Tail parameter');
  assert.equal(tapeEcho.values[tailIdx], 1, 'TapeEcho Tail must default to 1 (ON)');

  // Carbon Delay / Analog Delay
  const carbon = createSlotFromEffect('carbon-dly');
  const carbonDef = getEffectDef('carbon-dly');
  const cTailIdx = carbonDef.params.findIndex(p => p.name === 'Tail');
  if (cTailIdx !== -1) {
    assert.equal(carbon.values[cTailIdx], 1, 'Carbon Delay Tail must default to 1 (ON)');
  }
});

test('Scene recall in app.js transmits full patch buffer 0x28 to synchronize slots 4-6 on hardware', async () => {
  const fs = await import('node:fs');
  const path = await import('node:path');
  const appCode = fs.readFileSync(path.resolve('src/app.js'), 'utf8');

  // Extract recallScene function body
  const match = appCode.match(/function recallScene\([\s\S]*?\n\}/);
  assert.ok(match, 'recallScene function must exist in app.js');
  const recallBody = match[0];

  // Must call sendLivePresetToPedal() inside recallScene because MS-50G firmware ignores 0x31 on slots 4-6
  assert.ok(
    recallBody.includes('sendLivePresetToPedal()'),
    'recallScene must invoke sendLivePresetToPedal() so slots 4-6 toggle accurately on the hardware'
  );

  // Must also call midi.setSlotBypass and midi.setSlotParam
  assert.ok(recallBody.includes('midi.setSlotBypass('), 'recallScene must use midi.setSlotBypass');
  assert.ok(recallBody.includes('midi.setSlotParam('), 'recallScene must use midi.setSlotParam');

  // Verify sendLivePresetToPedal enforces Tail: 1 for delay/reverb
  assert.match(appCode, /if \(param\.name === 'Tail' \|\| param\.name === 'TAIL'\)\s*\{\s*v = 1;/);
});



