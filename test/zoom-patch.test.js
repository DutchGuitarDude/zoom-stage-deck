import test from 'node:test';
import assert from 'node:assert/strict';
import { ZoomPatch } from '../src/zoom-patch.js';
import { ZOOM_EFFECT_DB, getEffectByMidiId } from '../src/zoom-effects-db.js';

test('ZoomPatch reads empty146 template properly', () => {
  const p = new ZoomPatch();
  const ok = p.readBin(EMPTY_146_FIXTURE);
  assert.equal(ok, true);
  assert.equal(p.name, 'Empty');
  assert.equal(p.getEffectId(0), 0);
  assert.equal(p.getEffectState(0), 0);
});

test('ZoomPatch packs and unpacks multiple effects with parameters', () => {
  const p = new ZoomPatch();
  p.readBin(EMPTY_146_FIXTURE);
  p.name = 'ROCK LEAD';

  // Slot 0: D Comp (0x00300002), enabled=1, Sense=7, Tone=9, Level=110
  p.setEffectState(0, true);
  p.setEffectId(0, 0x00300002);
  p.setParamVal(0, 2, 7);
  p.setParamVal(0, 3, 9);
  p.setParamVal(0, 4, 110);

  // Slot 1: T Scream (0x00400006), enabled=1, Gain=60, Tone=55, Level=90
  p.setEffectState(1, true);
  p.setEffectId(1, 0x00400006);
  p.setParamVal(1, 2, 60);
  p.setParamVal(1, 3, 55);
  p.setParamVal(1, 4, 90);

  // Slot 2: FD COMBO (0x00100008), enabled=0 (bypassed)
  p.setEffectState(2, false);
  p.setEffectId(2, 0x00100008);

  const bin = p.makeBin(0x58);
  assert.equal(bin.length, 146);
  assert.equal(bin[0], 0xf0);
  assert.equal(bin[1], 0x52);
  assert.equal(bin[2], 0x00);
  assert.equal(bin[3], 0x58);
  assert.equal(bin[4], 0x28);
  assert.equal(bin[145], 0xf7);

  // Re-read packed binary
  const p2 = new ZoomPatch();
  p2.readBin(bin);

  assert.equal(p2.name, 'ROCK LEAD');
  assert.equal(p2.getEffectState(0), 1);
  assert.equal(p2.getEffectId(0), 0x00300002);
  assert.equal(p2.getParamVal(0, 2), 7);
  assert.equal(p2.getParamVal(0, 3), 9);
  assert.equal(p2.getParamVal(0, 4), 110);

  assert.equal(p2.getEffectState(1), 1);
  assert.equal(p2.getEffectId(1), 0x00400006);
  assert.equal(p2.getParamVal(1, 2), 60);
  assert.equal(p2.getParamVal(1, 3), 55);
  assert.equal(p2.getParamVal(1, 4), 90);

  assert.equal(p2.getEffectState(2), 0);
  assert.equal(p2.getEffectId(2), 0x00100008);
});

test('ZOOM_EFFECT_DB has full coverage of MultiStomp library', () => {
  assert.ok(Object.keys(ZOOM_EFFECT_DB).length >= 220);
  const dcomp = getEffectByMidiId(0x00300002);
  assert.equal(dcomp.name, 'D Comp');
  assert.equal(dcomp.category, 'DYNAMICS');

  const fdcombo = getEffectByMidiId(0x00100008);
  assert.equal(fdcombo.name, 'FD COMBO');
  assert.equal(fdcombo.category, 'AMP');

  const thru = getEffectByMidiId(0);
  assert.equal(thru.name, 'Thru (Empty)');
  assert.equal(thru.category, 'EMPTY');
});

test('ZoomPatch makeBin correctly encodes CAB_BYTES and V2_BYTES for guitar amp models without muting', () => {
  const p = new ZoomPatch();
  p.readBin(EMPTY_146_FIXTURE);
  p.name = 'WARM CLEAN';

  // Slot 2: FD COMBO (0x00100008), enabled, CAB = 8 (FD COMBO 2x12)
  p.setEffectState(2, true);
  p.setEffectId(2, 0x00100008);
  p.setParamVal(2, 9, 8); // CAB parameter = 8

  const bin = p.makeBin(0x58);
  // CAB_BYTES[2] is index 64 in the 146-byte patch
  assert.equal(bin[64], 0x40, 'FD COMBO in Slot 2 with cab enabled must have CAB_BYTES[2] set to 0x40');

  // If CAB is set to 0 (OFF)
  p.setParamVal(2, 9, 0);
  const binOff = p.makeBin(0x58);
  assert.equal(binOff[64], 0x00, 'CAB set to OFF must set CAB_BYTES to 0x00');

  // Test Slot 0 with V2 Amp model (e.g., VX JMI 0x40200008)
  const pV2 = new ZoomPatch();
  pV2.readBin(EMPTY_146_FIXTURE);
  pV2.setEffectState(0, true);
  pV2.setEffectId(0, 0x40200008);
  pV2.setParamVal(0, 9, 8);

  const binV2 = pV2.makeBin(0x58);
  assert.equal(binV2[8], 0x20, 'V2 Amp in Slot 0 must set V2_BYTES[0] (byte 8) to 0x20');
  assert.equal(binV2[23], 0x40, 'V2 Amp in Slot 0 must set CAB_BYTES[0] (byte 23) to 0x40');
});

const EMPTY_146_FIXTURE = [
  0xf0, 0x52, 0x00, 0x58, 0x28, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x05, 0x0f, 0x45, 0x00, 0x6d, 0x70, 0x74, 0x79, 0x20, 0x20,
  0x20, 0x00, 0x20, 0x20, 0x00, 0xf7
];
