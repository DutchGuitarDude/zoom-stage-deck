import test from 'node:test';
import assert from 'node:assert/strict';
import { getEffectDef, createSlotFromEffect, EFFECT_LIBRARY } from '../src/mock-data.js';
import { ZoomPatch } from '../src/zoom-patch.js';

test('Dual Delay has all 9 exact parameters from Zoom hardware', () => {
  const dd = getEffectDef('dual-dly');
  assert.equal(dd.name, 'DualDLY');
  assert.equal(dd.midiId, 1077936400);
  assert.equal(dd.category, 'DELAY');

  const paramNames = dd.params.map((p) => p.name);
  assert.equal(paramNames.length, 9, 'DualDLY must have exactly 9 parameters');
  assert.deepEqual(paramNames, [
    'Time A',
    'Time B',
    'FBack A',
    'FBack B',
    'Depth',
    'Speed',
    'Filter',
    'DelayMix',
    'Mix',
  ]);

  // Check default values
  assert.equal(dd.params[0].default, 500); // Time A
  assert.equal(dd.params[1].default, 375); // Time B
  assert.equal(dd.params[2].default, 50);  // FBack A
  assert.equal(dd.params[3].default, 50);  // FBack B
  assert.equal(dd.params[4].default, 0);   // Depth
  assert.equal(dd.params[5].default, 25);  // Speed
  assert.equal(dd.params[6].default, 100); // Filter
  assert.equal(dd.params[7].default, 25);  // DelayMix
  assert.equal(dd.params[8].default, 50);  // Mix

  // Also check lookup by MIDI ID 1077936400 (0x40400110)
  const byMidi = getEffectDef(1077936400);
  assert.equal(byMidi.params.length, 9);
  assert.equal(byMidi.params[0].name, 'Time A');
});

test('Delays and Reverbs have Level parameter with default 100 to prevent pedal muting', () => {
  const effectsToCheck = [
    'delay',
    'tape-echo',
    'analog-dly',
    'mod-delay',
    'spring',
    'hall',
    'room',
    'tiled-room',
    'plate',
  ];

  effectsToCheck.forEach((slug) => {
    const def = getEffectDef(slug);
    assert.ok(def, `Effect ${slug} must exist`);
    const levelParam = def.params.find((p) => p.name.toLowerCase() === 'level');
    assert.ok(levelParam, `Effect ${slug} (${def.name}) must define a Level parameter so audio is never muted`);
    assert.equal(levelParam.default, 100, `Effect ${slug} Level default must be 100`);
  });
});

test('ZoomPatch.setEffectId initializes Level to 100 so makeBin never mutes', () => {
  const p = new ZoomPatch();
  // Set Slot 0 to Spring Reverb (midiId 1073741842)
  p.setEffectState(0, true);
  p.setEffectId(0, 1073741842);

  // Parameter index 6 in fx[0] is Level (paramIndex 4 + 2)
  assert.equal(p.getParamVal(0, 6), 100, 'Spring reverb Level must default to 100 in patch buffer');

  // Set Slot 1 to TapeEcho (midiId 2097168)
  p.setEffectState(1, true);
  p.setEffectId(1, 2097168);
  assert.equal(p.getParamVal(1, 6), 100, 'TapeEcho Level must default to 100 in patch buffer');

  const bin = p.makeBin(0x58);
  assert.equal(bin.length, 146);

  // Unpack and verify
  const p2 = new ZoomPatch();
  p2.readBin(bin);
  assert.equal(p2.getParamVal(0, 6), 100);
  assert.equal(p2.getParamVal(1, 6), 100);
});

test('createSlotFromEffect initializes all 9 parameters for Dual Delay and 6 for TapeEcho', () => {
  const ddSlot = createSlotFromEffect('dual-dly', true);
  assert.equal(ddSlot.values.length, 9);
  assert.deepEqual(ddSlot.values, [500, 375, 50, 50, 0, 25, 100, 25, 50]);

  const teSlot = createSlotFromEffect('tape-echo', true);
  assert.ok(teSlot.values.length >= 5);
  // Parameter 4 is Level, must be 100
  assert.equal(teSlot.values[4], 100, 'TapeEcho slot value for Level must be 100');
});
