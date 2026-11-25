import test from 'node:test';
import assert from 'node:assert/strict';
import { ZoomMidiEngine } from '../src/zoom-midi.js';
import { ZoomPatch } from '../src/zoom-patch.js';

test('ZoomMidiEngine handles Identity Reply', () => {
  let detectedModel = null;
  const engine = new ZoomMidiEngine({
    onIdentity: (model) => { detectedModel = model; }
  });

  // MS-50G identity reply: F0 7E 00 06 02 52 58 00 00 00 33 2E 30 30 F7
  engine.handleZoomMessage(new Uint8Array([
    0xf0, 0x7e, 0x00, 0x06, 0x02, 0x52, 0x58, 0x00, 0x00, 0x00, 0x33, 0x2e, 0x30, 0x30, 0xf7
  ]));

  assert.equal(detectedModel, 'MS-50G');
  assert.equal(engine.model, 'MS-50G');
});

test('ZoomMidiEngine handles Program Change from pedal', () => {
  let changedProgram = null;
  const engine = new ZoomMidiEngine({
    onProgramChange: (patchIndex) => { changedProgram = patchIndex; }
  });

  // Zoom pedal sends C0 0B (switched to patch 12)
  engine.handleZoomMessage(new Uint8Array([0xc0, 0x0b]));
  assert.equal(changedProgram, 11);

  // Response to 0x33: B0 00 00 B0 20 00 C0 05
  engine.handleZoomMessage(new Uint8Array([
    0xb0, 0x00, 0x00, 0xb0, 0x20, 0x00, 0xc0, 0x05
  ]));
  assert.equal(changedProgram, 5);
});

test('ZoomMidiEngine handles real-time Parameter / Bypass change (0x31)', () => {
  let paramChange = null;
  const engine = new ZoomMidiEngine({
    onParamChange: (data) => { paramChange = data; }
  });

  // F0 52 00 58 31 <slot=1> <param=0> <valLSB=1> <valMSB=0> F7 (Slot 2 turned ON)
  engine.handleZoomMessage(new Uint8Array([
    0xf0, 0x52, 0x00, 0x58, 0x31, 0x01, 0x00, 0x01, 0x00, 0xf7
  ]));
  assert.deepEqual(paramChange, { slotIndex: 1, paramIndex: 0, value: 1 });

  // F0 52 00 58 31 <slot=0> <param=2> <valLSB=45> <valMSB=0> F7 (Slot 1 Knob 1 = 45)
  engine.handleZoomMessage(new Uint8Array([
    0xf0, 0x52, 0x00, 0x58, 0x31, 0x00, 0x02, 0x2d, 0x00, 0xf7
  ]));
  assert.deepEqual(paramChange, { slotIndex: 0, paramIndex: 2, value: 45 });
});

test('ZoomMidiEngine parses complete patch dump and extracts slots with effects', () => {
  let receivedPatch = null;
  const engine = new ZoomMidiEngine({
    onPatchData: (data) => { receivedPatch = data; }
  });

  // Create a real 146-byte patch with ZoomPatch
  const p = new ZoomPatch();
  p.readBin(EMPTY_146_FIXTURE);
  p.name = 'WARM LEAD';
  p.setEffectState(0, true);
  p.setEffectId(0, 0x00300002); // D Comp
  p.setParamVal(0, 2, 8); // Sense
  p.setEffectState(1, true);
  p.setEffectId(1, 0x00400006); // T Scream
  p.setEffectState(2, false);
  p.setEffectId(2, 0x00100008); // FD COMBO

  const bin = p.makeBin(0x58);
  engine.handleZoomMessage(new Uint8Array(bin));

  assert.ok(receivedPatch !== null);
  assert.equal(receivedPatch.name, 'WARM LEAD');
  assert.equal(receivedPatch.slots.length, 6);
  assert.equal(receivedPatch.slots[0].enabled, true);
  assert.equal(receivedPatch.slots[0].midiId, 0x00300002);
  assert.equal(receivedPatch.slots[0].values[0], 8);

  assert.equal(receivedPatch.slots[1].enabled, true);
  assert.equal(receivedPatch.slots[1].midiId, 0x00400006);

  assert.equal(receivedPatch.slots[2].enabled, false);
  assert.equal(receivedPatch.slots[2].midiId, 0x00100008);
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
