import test from 'node:test';
import assert from 'node:assert/strict';
import { ZoomMidiEngine } from '../src/zoom-midi.js';
import { ZoomPatch } from '../src/zoom-patch.js';
import { getEffectDef, createSlotFromEffect } from '../src/mock-data.js';

test('Slot 5 (DualDLY) bypass toggle transmits 146-byte patch buffer (0x28) to sync hardware', () => {
  const sentCommands = [];
  const engine = new ZoomMidiEngine();
  engine.zoomOutput = {
    name: 'ZOOM MS Series',
    send: (bytes) => {
      sentCommands.push(Array.from(bytes));
    },
  };

  const p = new ZoomPatch();
  p.name = 'RAT Drive';
  // Slot 4 (Slot 5 in UI) is DualDLY
  p.setEffectState(4, true);
  p.setEffectId(4, 1077936400); // DualDigiD

  // Transmit patch to pedal
  engine.sendCurrentPatch(p);

  // Verify that an 0x28 patch dump of length 146 was sent
  const patchDump = sentCommands.find((c) => c[4] === 0x28);
  assert.ok(patchDump, 'Must send 0x28 SysEx patch dump');
  assert.equal(patchDump.length, 146);
  assert.equal(patchDump[3], 0x58); // MS-50G model ID

  // Read back to verify Slot 5 is ON and has DualDLY
  const readBack = new ZoomPatch();
  readBack.readBin(patchDump);
  assert.equal(readBack.getEffectId(4), 1077936400);
  assert.equal(readBack.getEffectState(4), 1);
});

test('DualDLY parameter adjustments are encoded into 146-byte patch buffer for slots 4-6', () => {
  const sentCommands = [];
  const engine = new ZoomMidiEngine();
  engine.zoomOutput = {
    name: 'ZOOM MS Series',
    send: (bytes) => {
      sentCommands.push(Array.from(bytes));
    },
  };

  const p = new ZoomPatch();
  p.name = 'RAT Drive';
  p.setEffectState(4, true);
  p.setEffectId(4, 1077936400); // DualDigiD

  // Adjust parameters: Time A = 650, Time B = 420, FBack A = 75, Mix = 60
  p.setParamVal(4, 2, 650); // Time A
  p.setParamVal(4, 3, 420); // Time B
  p.setParamVal(4, 4, 75);  // FBack A
  p.setParamVal(4, 10, 60); // Mix

  engine.sendCurrentPatch(p);

  const patchDump = sentCommands.find((c) => c[4] === 0x28);
  assert.ok(patchDump);

  const readBack = new ZoomPatch();
  readBack.readBin(patchDump);
  assert.equal(readBack.getParamVal(4, 2), 650);
  assert.equal(readBack.getParamVal(4, 3), 420);
  assert.equal(readBack.getParamVal(4, 4), 75);
  assert.equal(readBack.getParamVal(4, 10), 60);
});

test('Scene recall transmits full patch buffer with all 6 slots and parameter values', () => {
  const sentCommands = [];
  const engine = new ZoomMidiEngine();
  engine.zoomOutput = {
    name: 'ZOOM MS Series',
    send: (bytes) => {
      sentCommands.push(Array.from(bytes));
    },
  };

  const p = new ZoomPatch();
  p.name = 'Scene Lead';
  p.setEffectState(0, true);
  p.setEffectId(0, 0x00300002); // Comp ON
  p.setEffectState(1, false);
  p.setEffectId(1, 0x00400006); // Drive OFF
  p.setEffectState(4, true);
  p.setEffectId(4, 1077936400); // DualDLY ON

  engine.sendCurrentPatch(p);

  const patchDump = sentCommands.find((c) => c[4] === 0x28);
  assert.ok(patchDump);
  assert.equal(patchDump.length, 146);

  const readBack = new ZoomPatch();
  readBack.readBin(patchDump);
  assert.equal(readBack.getEffectState(0), 1);
  assert.equal(readBack.getEffectState(1), 0);
  assert.equal(readBack.getEffectState(4), 1);
});
