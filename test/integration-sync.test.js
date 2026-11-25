import test from 'node:test';
import assert from 'node:assert/strict';
import { ZoomMidiEngine } from '../src/zoom-midi.js';
import { ZoomPatch } from '../src/zoom-patch.js';
import { getEffectDef, createSlotFromEffect, getExactDeviceDsp } from '../src/mock-data.js';

test('Full pedal synchronization lifecycle test', async () => {
  let activePatch = 0;
  let activePreset = {
    name: 'Mock Preset',
    slots: Array.from({ length: 6 }, () => createSlotFromEffect('empty', false)),
  };

  const sentCommands = [];

  const engine = new ZoomMidiEngine({
    onLog: (line) => {},
    onIdentity: (model, version) => {
      engine.setModel(model);
      engine.enableEditorMode(true);
      engine.requestCurrentProgram();
      engine.requestCurrentPatch();
    },
    onProgramChange: (patchIndex) => {
      activePatch = patchIndex;
      engine.requestCurrentPatch();
    },
    onPatchData: ({ name, slots }) => {
      activePreset.name = name;
      activePreset.slots = slots.map((s) => {
        if (!s.midiId) return createSlotFromEffect('empty', false);
        const def = getEffectDef(s.midiId);
        return {
          effectId: def.id,
          midiId: s.midiId,
          enabled: s.enabled,
          values: s.values,
        };
      });
    },
    onParamChange: ({ slotIndex, paramIndex, value }) => {
      if (paramIndex === 0) {
        activePreset.slots[slotIndex].enabled = (value === 1);
      } else if (paramIndex >= 2) {
        activePreset.slots[slotIndex].values[paramIndex - 2] = value;
      }
    },
  });

  // Mock zoom output
  engine.zoomOutput = {
    name: 'ZOOM MS Series',
    send: (bytes) => {
      sentCommands.push(Array.from(bytes));
    },
  };

  // 1. Device identity handshake
  engine.handleZoomMessage(new Uint8Array([
    0xf0, 0x7e, 0x00, 0x06, 0x02, 0x52, 0x58, 0x00, 0x00, 0x00, 0x33, 0x2e, 0x30, 0x30, 0xf7
  ]));

  assert.equal(engine.model, 'MS-50G');
  // Check that Editor ON (50), Request Program (33), Request Patch (29) were sent
  assert.ok(sentCommands.some((c) => c[4] === 0x50), 'Editor ON sent');
  assert.ok(sentCommands.some((c) => c[4] === 0x33), 'Request Current Program sent');
  assert.ok(sentCommands.some((c) => c[4] === 0x29), 'Request Current Patch sent');

  // 2. Zoom pedal responds with current program (e.g. Patch 3 => index 2)
  engine.handleZoomMessage(new Uint8Array([0xc0, 0x02]));
  assert.equal(activePatch, 2);

  // 3. Zoom pedal responds with 146-byte Patch Dump for patch 3
  const patch = new ZoomPatch();
  patch.name = 'MY VINTAGE';
  // Slot 0: OptComp (0x00500002), ON
  patch.setEffectState(0, true);
  patch.setEffectId(0, 0x00500002);
  patch.setParamVal(0, 2, 6); // Sense = 6
  // Slot 1: T Scream (0x00400006), ON
  patch.setEffectState(1, true);
  patch.setEffectId(1, 0x00400006);
  patch.setParamVal(1, 2, 70); // Gain = 70
  // Slot 2: TapeEcho (0x00200010), OFF (bypassed)
  patch.setEffectState(2, false);
  patch.setEffectId(2, 0x00200010);
  patch.setParamVal(2, 2, 45); // Time = 45

  const patchDump = patch.makeBin(0x58);
  engine.handleZoomMessage(new Uint8Array(patchDump));

  // Verify software state is now perfectly synced with physical pedal
  assert.equal(activePreset.name, 'MY VINTAGE');
  assert.equal(activePreset.slots[0].enabled, true);
  assert.equal(activePreset.slots[0].midiId, 0x00500002);
  assert.equal(activePreset.slots[0].values[0], 6);

  assert.equal(activePreset.slots[1].enabled, true);
  assert.equal(activePreset.slots[1].midiId, 0x00400006);
  assert.equal(activePreset.slots[1].values[0], 70);

  assert.equal(activePreset.slots[2].enabled, false);
  assert.equal(activePreset.slots[2].midiId, 0x00200010);
  assert.equal(activePreset.slots[2].values[0], 45);

  // 4. Physical action on MS-50G: user turns TapeEcho ON
  engine.handleZoomMessage(new Uint8Array([
    0xf0, 0x52, 0x00, 0x58, 0x31, 0x02, 0x00, 0x01, 0x00, 0xf7
  ]));
  assert.equal(activePreset.slots[2].enabled, true, 'TapeEcho turned ON in real-time');

  // 5. Physical action on MS-50G: user turns Gain knob on T Scream from 70 to 85
  engine.handleZoomMessage(new Uint8Array([
    0xf0, 0x52, 0x00, 0x58, 0x31, 0x01, 0x02, 0x55, 0x00, 0xf7
  ]));
  assert.equal(activePreset.slots[1].values[0], 85, 'T Scream Gain updated in real-time');
});

test('Integration sync with sideloaded Marshall Plexi and themanro NAM capture', () => {
  let activePreset = {
    name: 'Untitled',
    slots: Array.from({ length: 6 }, () => createSlotFromEffect('empty', false)),
  };

  const engine = new ZoomMidiEngine({
    onLog: () => {},
    onPatchData: ({ name, slots }) => {
      activePreset.name = name;
      activePreset.slots = slots.map((s) => {
        if (!s.midiId) return createSlotFromEffect('empty', false);
        const def = getEffectDef(s.midiId);
        return {
          effectId: def.id,
          midiId: s.midiId,
          enabled: s.enabled,
          values: def.params.map((p, pIdx) => (s.values && s.values[pIdx] !== undefined ? s.values[pIdx] : p.default)),
        };
      });
    },
    onParamChange: ({ slotIndex, paramIndex, value }) => {
      if (paramIndex === 0) {
        activePreset.slots[slotIndex].enabled = (value === 1);
      } else if (paramIndex >= 2) {
        activePreset.slots[slotIndex].values[paramIndex - 2] = value;
      }
    },
  });

  // Create patch dump with:
  // Slot 0: PLEXI (1076363784 = 0x40280208)
  // Slot 1: NAMLite capture 1 (526096 = 0x00080710)
  // Slot 2: CabIR slot 1 (4458256 = 0x00440710)
  const patch = new ZoomPatch();
  patch.name = 'PLEXI+NAM';
  patch.setEffectState(0, true);
  patch.setEffectId(0, 1076363784); // PLEXI
  patch.setParamVal(0, 2, 75); // Gain = 75
  patch.setParamVal(0, 3, 40); // Tube = 40
  patch.setParamVal(0, 9, 16); // CAB = MS 1959 4x12

  patch.setEffectState(1, true);
  patch.setEffectId(1, 526096); // NAMLite capture 1
  patch.setParamVal(1, 2, 60); // Input = 60
  patch.setParamVal(1, 3, 30); // Output = 30
  patch.setParamVal(1, 8, 15); // Gate = 15

  patch.setEffectState(2, true);
  patch.setEffectId(2, 4458256); // CabIR slot 1
  patch.setParamVal(2, 2, 100); // Mix = 100%
  patch.setParamVal(2, 3, 80); // Level = 80

  const patchDump = patch.makeBin(0x58);
  engine.handleZoomMessage(new Uint8Array(patchDump));

  assert.equal(activePreset.name, 'PLEXI+NAM');

  // Verify Slot 0: PLEXI
  const plexiDef = getEffectDef(activePreset.slots[0].effectId);
  assert.equal(plexiDef.name, 'PLEXI');
  assert.equal(plexiDef.category, 'AMP');
  assert.equal(activePreset.slots[0].values[0], 75); // Gain
  assert.equal(activePreset.slots[0].values[1], 40); // Tube

  // Verify Slot 1: NAMLite
  const namDef = getEffectDef(activePreset.slots[1].effectId);
  assert.equal(namDef.name, 'NAMLite — capture 1');
  assert.equal(namDef.category, 'AMP');
  assert.equal(activePreset.slots[1].values[0], 60); // Input
  assert.equal(activePreset.slots[1].values[6], 15); // Gate

  // Verify Slot 2: CabIR
  const cabDef = getEffectDef(activePreset.slots[2].effectId);
  assert.equal(cabDef.name, 'CabIR — slot 1');
  assert.equal(cabDef.category, 'FILTER');
  assert.equal(activePreset.slots[2].values[1], 80); // Level

  // Real-time parameter edit from pedal: PLEXI Gain turned from 75 to 90
  engine.handleZoomMessage(new Uint8Array([
    0xf0, 0x52, 0x00, 0x58, 0x31, 0x00, 0x02, 0x5a, 0x00, 0xf7
  ]));
  assert.equal(activePreset.slots[0].values[0], 90, 'Plexi Gain updated to 90');
});

test('Stomp position rearranging updates pedal patch chain and footswitch mapping', () => {
  // Preset with 6 slots:
  // Slot 0: OptComp (0x00500002)
  // Slot 1: T Scream (0x00400006)
  // Slot 2: PLEXI (1076363784)
  // Slot 3: TapeEcho (0x00200010)
  // Slot 4: Hall (0x00100016)
  // Slot 5: GraphicEQ (0x00300006)
  const slots = [
    { effectId: 'optcomp', midiId: 0x00500002, enabled: true, values: [5, 40] },
    { effectId: 'tscream', midiId: 0x00400006, enabled: true, values: [65, 50] },
    { effectId: 'plexi', midiId: 1076363784, enabled: true, values: [80, 45] },
    { effectId: 'tapeecho', midiId: 0x00200010, enabled: false, values: [35, 20] },
    { effectId: 'hall', midiId: 0x00100016, enabled: true, values: [40, 25] },
    { effectId: 'graphiceq', midiId: 0x00300006, enabled: false, values: [0, 0] },
  ];

  // User initially has Chocolate Plus mapped to:
  // Switch A -> Slot 0 (OptComp)
  // Switch B -> Slot 1 (T Scream)
  // Switch C -> Slot 2 (PLEXI)
  // Switch D -> Slot 3 (TapeEcho)
  let stompSlots = [0, 1, 2, 3];

  // User moves Slot 2 (PLEXI) -> Slot 0 (front of chain)
  const fromIndex = 2;
  const toIndex = 0;

  const [moved] = slots.splice(fromIndex, 1);
  slots.splice(toIndex, 0, moved);

  // Update footswitch mapping so footswitches follow their stomp pedals
  stompSlots = stompSlots.map((sIdx) => {
    if (sIdx === fromIndex) return toIndex;
    if (fromIndex < toIndex) {
      if (sIdx > fromIndex && sIdx <= toIndex) return sIdx - 1;
    } else {
      if (sIdx >= toIndex && sIdx < fromIndex) return sIdx + 1;
    }
    return sIdx;
  });

  // Verify new slots order
  assert.equal(slots[0].effectId, 'plexi', 'PLEXI is now at Slot 0 (Slot 1 on device)');
  assert.equal(slots[1].effectId, 'optcomp', 'OptComp shifted to Slot 1 (Slot 2 on device)');
  assert.equal(slots[2].effectId, 'tscream', 'T Scream shifted to Slot 2 (Slot 3 on device)');

  // Verify Chocolate Plus mapping tracked the move:
  // Switch C originally pointed to index 2 (PLEXI) -> now points to index 0 (PLEXI)
  // Switch A originally pointed to index 0 (OptComp) -> now points to index 1 (OptComp)
  // Switch B originally pointed to index 1 (T Scream) -> now points to index 2 (T Scream)
  // Switch D originally pointed to index 3 (TapeEcho) -> unchanged at index 3
  assert.equal(stompSlots[2], 0, 'Switch C followed PLEXI to Slot 0');
  assert.equal(stompSlots[0], 1, 'Switch A followed OptComp to Slot 1');
  assert.equal(stompSlots[1], 2, 'Switch B followed T Scream to Slot 2');
  assert.equal(stompSlots[3], 3, 'Switch D still at Slot 3');

  // Verify sending this to ZoomPatch creates a valid 146-byte SysEx edit buffer dump
  const p = new ZoomPatch();
  p.name = 'REORDERED';
  slots.forEach((s, i) => {
    p.setEffectState(i, s.enabled);
    p.setEffectId(i, s.midiId);
    s.values.forEach((v, pIdx) => {
      p.setParamVal(i, pIdx + 2, v);
    });
  });

  const bin = p.makeBin(0x58);
  assert.equal(bin.length, 146, 'Full patch dump is exactly 146 bytes');

  // Unpack to verify integrity on pedal side
  const parsed = new ZoomPatch();
  parsed.readBin(bin);
  assert.equal(parsed.name, 'REORDERED');
  assert.equal(parsed.getEffectId(0), 1076363784, 'Pedal slot 0 is PLEXI');
  assert.equal(parsed.getParamVal(0, 2), 80, 'PLEXI Gain preserved');
  assert.equal(parsed.getEffectId(1), 0x00500002, 'Pedal slot 1 is OptComp');
});

test('Chocolate Plus footswitch assignment and presets', () => {
  // 1. Assign single footswitch
  let stompSlots = [0, 1, 2, 3];

  function assignSlot(slotIndex, switchIndex) {
    stompSlots.forEach((sIdx, swIdx) => {
      if (sIdx === slotIndex) stompSlots[swIdx] = -1;
    });
    if (switchIndex >= 0 && switchIndex < 4) {
      stompSlots[switchIndex] = slotIndex;
    }
  }

  // Assign Slot 4 (5th slot) to Switch B (switch index 1)
  assignSlot(4, 1);
  assert.deepEqual(stompSlots, [0, 4, 2, 3]);

  // Unassign Slot 4
  assignSlot(4, -1);
  assert.deepEqual(stompSlots, [0, -1, 2, 3]);

  // 2. Quick presets
  const preset1to4 = [0, 1, 2, 3];
  const preset2to5 = [1, 2, 3, 4];
  const preset3to6 = [2, 3, 4, 5];
  const presetCustom = [0, 1, 3, 4];

  assert.deepEqual(preset1to4.map((s) => s + 1), [1, 2, 3, 4]);
  assert.deepEqual(preset2to5.map((s) => s + 1), [2, 3, 4, 5]);
  assert.deepEqual(preset3to6.map((s) => s + 1), [3, 4, 5, 6]);
  assert.deepEqual(presetCustom.map((s) => s + 1), [1, 2, 4, 5]);
});

test('Actual Zoom MS-50G hardware DSP load calculations and hardware DSP full flags', () => {
  // 1. Zoom firmware denominator conversion to exact percentage
  assert.equal(getExactDeviceDsp(2), 50.0, 'D=2 (MS 1959 Plexi, MangledVerb) -> 50% DSP');
  assert.equal(getExactDeviceDsp(3), 33.3, 'D=3 (FD Combo, Match30, HD Hall) -> 33.3% DSP');
  assert.equal(getExactDeviceDsp(4), 25.0, 'D=4 (PitchShift, DualDelay) -> 25% DSP');
  assert.equal(getExactDeviceDsp(5), 20.0, 'D=5 (Plate) -> 20% DSP');
  assert.equal(getExactDeviceDsp(8), 12.5, 'D=8 (OptComp, 160 Comp) -> 12.5% DSP');
  assert.equal(getExactDeviceDsp(10), 10.0, 'D=10 (T-Scream, RAT) -> 10% DSP');
  assert.equal(getExactDeviceDsp(12), 8.3, 'D=12 (Delay, TapeEcho, GraphicEQ) -> 8.3% DSP');
  assert.equal(getExactDeviceDsp(17), 5.9, 'D=17 (ZNR Noise Reduction) -> 5.9% DSP');
  assert.equal(getExactDeviceDsp(18), 5.6, 'D=18 (LineSelector) -> 5.6% DSP');
  assert.equal(getExactDeviceDsp(10000), 0, 'D=10000 (Empty/Thru) -> 0% DSP');
  assert.equal(getExactDeviceDsp(0), 0, '0 -> 0% DSP');

  // 2. Community effects percentage preservation
  assert.equal(getExactDeviceDsp(39), 39.0, 'NAMLite capture preserved at 39% DSP');
  assert.equal(getExactDeviceDsp(20), 20.0, 'CabIR loader preserved at 20% DSP');

  // 3. Effects resolved via getEffectDef have realistic device DSP
  const ms1959 = getEffectDef('ms-1959');
  assert.ok(ms1959.dsp >= 33, `MS 1959 Plexi DSP should be heavy (>= 33%), got ${ms1959.dsp}%`);

  const optComp = getEffectDef('opt-comp');
  assert.ok(optComp.dsp >= 10 && optComp.dsp <= 15, `OptComp DSP should be around 12.5%, got ${optComp.dsp}%`);

  const lineSel = getEffectDef('line-sel');
  assert.ok(lineSel.dsp >= 5 && lineSel.dsp <= 6, `LineSel DSP should be around 5.6%, got ${lineSel.dsp}%`);

  // 4. Overload detection
  // Slot 0: MS 1959 (50%)
  // Slot 1: MangledVerb (50%)
  // Slot 2: OptComp (12.5%)
  const slotList = [
    { effectId: 'ms-1959' },
    { effectId: 'mangl-verb' },
    { effectId: 'opt-comp' },
    { effectId: 'empty' },
    { effectId: 'empty' },
    { effectId: 'empty' },
  ];
  const totalDsp = slotList.reduce((sum, s) => sum + getExactDeviceDsp(getEffectDef(s.effectId).dsp), 0);
  assert.ok(totalDsp > 100, `Stacking two heavy 50% effects + comp must exceed 100% (got ${totalDsp}%)`);

  // 5. Hardware dspstate bitmask parsing (from Zoom SysEx byte 129: dat[129] & 0x3f)
  // E.g. dspstate = 0b000101 = 5 (Slot 1 and Slot 3 marked DSP FULL by pedal)
  const dspstate = 5;
  const hwFullSlots = [];
  for (let i = 0; i < 6; i++) {
    if (dspstate & (1 << i)) hwFullSlots.push(i + 1);
  }
  assert.deepEqual(hwFullSlots, [1, 3], 'Bitmask 5 indicates physical Slots 1 and 3 are DSP FULL');
});
