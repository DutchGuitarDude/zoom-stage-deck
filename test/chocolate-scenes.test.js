import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CHOCOLATE_ADDR,
  CHOCOLATE_MODES,
  ChocolateChordDetector,
  buildConfigWrite,
  buildCustomCcConfig,
  buildDiscoveryRequest,
  buildProgramChangeAConfig,
  buildScenesAndPatchConfig,
  classifyControllerPort,
  decodeChocolateScenePc,
  parseChocolateMessage,
} from '../src/chocolate-midi.js';
import { ZoomMidiEngine } from '../src/zoom-midi.js';
import { ZoomPatch } from '../src/zoom-patch.js';
import { createSlotFromEffect } from '../src/mock-data.js';
import { defaultScenesForPreset } from '../src/storage.js';

const hex = (str) =>
  str
    .trim()
    .split(/\s+/)
    .map((h) => parseInt(h, 16));

test('M-VAVE Chocolate Plus SysEx codec reproduces bit-perfect official USB captures', () => {
  assert.deepEqual(
    buildDiscoveryRequest(),
    hex('F0 00 32 45 00 00 00 40 7F F7'),
    'Discovery request matches capture bit-for-bit'
  );

  // Program Change A (0x00) -> checksum 74 03
  assert.deepEqual(
    buildConfigWrite(CHOCOLATE_ADDR.mode, CHOCOLATE_MODES.PC_A),
    hex('F0 00 32 09 49 00 00 00 02 00 00 00 00 10 00 00 00 00 74 03 F7'),
    'Mode PC-A write matches capture bit-for-bit'
  );

  // Custom CC (0x02) -> checksum 70 03
  assert.deepEqual(
    buildConfigWrite(CHOCOLATE_ADDR.mode, CHOCOLATE_MODES.CUSTOM_CC),
    hex('F0 00 32 09 49 00 00 00 02 00 00 00 00 10 00 00 00 02 70 03 F7'),
    'Mode Custom CC write matches capture bit-for-bit'
  );

  // Max Banks PC-B = 32 (value 0x1F) -> checksum 52 00
  assert.deepEqual(
    buildConfigWrite(CHOCOLATE_ADDR.maxBanksPcB, 0x1f),
    hex('F0 00 32 09 49 00 00 00 02 56 38 01 00 10 00 00 00 1F 52 00 F7'),
    'Max Banks system write matches capture bit-for-bit'
  );

  // Custom Bank 1 CC = 0x21 -> checksum 2A 03
  assert.deepEqual(
    buildConfigWrite(CHOCOLATE_ADDR.customBankFirst + 1, 0x21),
    hex('F0 00 32 09 49 00 00 00 02 04 00 00 00 10 00 00 00 21 2A 03 F7'),
    'Custom CC write matches capture bit-for-bit'
  );

  // Discovery response & ACK parser
  const discResp = hex(
    'F0 00 32 45 58 01 00 00 23 6F 5E 51 1B 44 4E 1C 36 50 58 55 1B 77 0B 4C 18 36 00 00 00 00 00 00 00 00 00 00 00 00 00 0E F7'
  );
  assert.equal(parseChocolateMessage(discResp).kind, 'discovery-response');
  assert.equal(parseChocolateMessage(hex('F0 00 32 01 08 00 00 00 00 7F 01 F7')).kind, 'ack');
});

test('Chocolate Plus Scenes (A-D) + Patch Up/Down (E/F) PC decoding and config sequence', () => {
  const writes = buildProgramChangeAConfig({ channel: 0, maxBanks: 32 });
  assert.equal(writes.length, 4);
  assert.equal(writes[0].addr, CHOCOLATE_ADDR.mode);
  assert.equal(writes[0].value, CHOCOLATE_MODES.PC_A);
  assert.equal(writes[1].addr, CHOCOLATE_ADDR.midiChannel);
  assert.equal(writes[1].value, 0);
  assert.equal(writes[2].addr, CHOCOLATE_ADDR.maxBanksPcA);
  assert.equal(writes[2].value, 31);
  assert.equal(writes[3].addr, CHOCOLATE_ADDR.bankMidi);
  assert.equal(writes[3].value, 1);

  // Custom CC config sequence sanity
  const ccWrites = buildCustomCcConfig({ channel: 0, ccs: [20, 21, 22, 23] });
  assert.equal(ccWrites.length, 10);

  // Instant Chord Scenes + Patch sequence sanity (10 writes in momentary custom CC)
  const sceneWrites = buildScenesAndPatchConfig({ channel: 0 });
  assert.equal(sceneWrites.length, 10);

  // PC 0..3 -> Patch 0, Scenes A..D (0..3)
  assert.deepEqual(decodeChocolateScenePc(0, 50), { patchIndex: 0, sceneIndex: 0 });
  assert.deepEqual(decodeChocolateScenePc(1, 50), { patchIndex: 0, sceneIndex: 1 });
  assert.deepEqual(decodeChocolateScenePc(2, 50), { patchIndex: 0, sceneIndex: 2 });
  assert.deepEqual(decodeChocolateScenePc(3, 50), { patchIndex: 0, sceneIndex: 3 });

  // Pressing F (C+D Bank Up) steps to Bank 1 -> PC 4..7 -> Patch 1, Scenes A..D
  assert.deepEqual(decodeChocolateScenePc(4, 50), { patchIndex: 1, sceneIndex: 0 });
  assert.deepEqual(decodeChocolateScenePc(7, 50), { patchIndex: 1, sceneIndex: 3 });

  // Bank 31 -> Patch 31, Scene D
  assert.deepEqual(decodeChocolateScenePc(127, 50), { patchIndex: 31, sceneIndex: 3 });

  // Port classification heuristics
  assert.equal(classifyControllerPort('SINCO FootCtrl Plus').isChocolate, true);
  assert.equal(classifyControllerPort('M-VAVE MS1 Wireless MIDI').isWireless, true);
  assert.equal(classifyControllerPort('ZOOM MS Series').isChocolate, false);
});

test('ChocolateChordDetector detects A+B (E) and C+D (F) simultaneous/staggered presses and Hold A/D', async () => {
  const switchEvents = [];
  const chordEvents = [];
  const holdEvents = [];

  const chords = new ChocolateChordDetector({
    chordWindowMs: 50,
    cooldownMs: 80,
    holdMs: 90,
    onSwitch: (s) => switchEvents.push(s),
    onChord: (dir) => chordEvents.push(dir),
    onHold: (idx, dir) => holdEvents.push({ idx, dir }),
  });

  // Simultaneous held A (0) + B (1) -> fires chord 'prev' immediately
  chords.press(0, 1000);
  assert.equal(chords.activeSwitches.has(0), true);
  chords.press(1, 1020);
  assert.equal(chordEvents.length, 1);
  assert.equal(chordEvents[0], 'prev');
  assert.equal(switchEvents.length, 0, 'No individual switch event fired for chord');
  chords.release(0);
  chords.release(1);
  assert.equal(chords.activeSwitches.size, 0);

  // Staggered C (2) and D (3) within chord window -> fires chord 'next' (F / Patch Up)
  chords.reset();
  chords.press(2, 2000);
  chords.press(3, 2030); // 30ms later
  assert.equal(chordEvents.length, 2);
  assert.equal(chordEvents[1], 'next');
  assert.equal(switchEvents.length, 0);

  // Single switch B (1) alone -> fires switch 1 after chord window expires
  chords.reset();
  chords.press(1);
  await new Promise((r) => setTimeout(r, 65));
  assert.equal(switchEvents.length, 1);
  assert.equal(switchEvents[0], 1);

  // Hold Switch A (0) >= holdMs -> fires onHold(0, 'prev') (Patch Down) without firing single switch
  chords.reset();
  switchEvents.length = 0;
  chords.press(0);
  await new Promise((r) => setTimeout(r, 110));
  assert.equal(holdEvents.length, 1);
  assert.deepEqual(holdEvents[0], { idx: 0, dir: 'prev' });
  assert.equal(switchEvents.length, 0, 'No single switch event fired on long hold');
  chords.release(0);
  assert.equal(switchEvents.length, 0, 'Release after hold does not fire single tap');

  // Hold Switch D (3) >= holdMs -> fires onHold(3, 'next') (Patch Up)
  chords.reset();
  chords.press(3);
  await new Promise((r) => setTimeout(r, 110));
  assert.equal(holdEvents.length, 2);
  assert.deepEqual(holdEvents[1], { idx: 3, dir: 'next' });
  chords.release(3);
});

test('ZoomMidiEngine.handleControllerMessage receives CC and PC without reference errors', () => {
  const events = [];
  const engine = new ZoomMidiEngine({
    onLog: () => {},
    onControllerMessage: (m) => events.push(m),
  });

  // CC 20 = 127
  engine.handleControllerMessage(new Uint8Array([0xb0, 20, 127]));
  assert.equal(events.length, 1);
  assert.equal(events[0].type, 'cc');
  assert.equal(events[0].cc, 20);
  assert.equal(events[0].value, 127);

  // PC 4
  engine.handleControllerMessage(new Uint8Array([0xc0, 4]));
  assert.equal(events.length, 2);
  assert.equal(events[1].type, 'pc');
  assert.equal(events[1].program, 4);
});

test('ZoomMidiEngine.discoverAndProgramChocolate programs connected Chocolate Plus end-to-end', async () => {
  const sentFrames = [];
  const engine = new ZoomMidiEngine({ onLog: () => {} });

  // Mock Chocolate Plus USB output that answers discovery and ACKs every config write
  engine.controllerOutput = {
    id: 'choc-out-1',
    name: 'SINCO Chocolate Plus',
    send: (bytes) => {
      sentFrames.push(Array.from(bytes));
      const parsed = parseChocolateMessage(bytes);
      // Discovery request -> respond with 45 58
      if (bytes[3] === 0x45 && bytes[4] === 0x00) {
        setTimeout(() => {
          engine.handleControllerMessage(
            new Uint8Array(
              hex(
                'F0 00 32 45 58 01 00 00 23 6F 5E 51 1B 44 4E 1C 36 50 58 55 1B 77 0B 4C 18 36 00 00 00 00 00 00 00 00 00 00 00 00 00 0E F7'
              )
            )
          );
        }, 10);
      } else if (parsed.kind === 'config-write') {
        setTimeout(() => {
          engine.handleControllerMessage(new Uint8Array(hex('F0 00 32 01 08 00 00 00 00 7F 01 F7')));
        }, 10);
      }
    },
  };

  const result = await engine.discoverAndProgramChocolate({
    profile: 'scenes-ef-patch',
    channel: 0,
    maxBanks: 32,
  });

  assert.equal(result.ok, true);
  assert.equal(result.discovered, true);
  assert.equal(result.ackCount, 10);
  assert.equal(result.totalWrites, 10);
  assert.equal(sentFrames.length, 11, '1 discovery + 10 config writes sent');
  assert.deepEqual(sentFrames[0], buildDiscoveryRequest());
  assert.deepEqual(sentFrames[1], buildConfigWrite(CHOCOLATE_ADDR.mode, CHOCOLATE_MODES.CUSTOM_CC));
});

test('ZoomMidiEngine.discoverAndProgramChocolate handles wireless SysEx filtering gracefully', async () => {
  const engine = new ZoomMidiEngine({ onLog: () => {} });

  // Mock M-VAVE Wireless MIDI port that drops SysEx (no reply)
  engine.controllerOutput = {
    id: 'mvave-wireless-1',
    name: 'M-VAVE MIDI-B Wireless',
    send: () => {
      // Simulates wireless dongle filtering out SysEx config commands
    },
  };

  const result = await engine.discoverAndProgramChocolate({ profile: 'scenes-ef-patch' });
  assert.equal(result.ok, false);
  assert.equal(result.discovered, false);
  assert.equal(result.reason, 'no-sysex-reply');
  assert.match(result.message, /USB/i);
});

test('Scenes save and recall both pedal ON/OFF states AND adjusted parameter knobs', () => {
  const preset = {
    name: 'Live Rig',
    slots: [
      createSlotFromEffect('opt-comp', true),
      createSlotFromEffect('t-scream', false),
      createSlotFromEffect('ms-1959', true),
      createSlotFromEffect('stereo-cho', false),
      createSlotFromEffect('tape-echo', false),
      createSlotFromEffect('hall', true),
    ],
  };

  const scenes = defaultScenesForPreset(preset);
  assert.equal(scenes.length, 4);
  assert.ok(Array.isArray(scenes[0].slotValues), 'Default scenes initialize parameter snapshots');

  // Adjust pedals for Scene 2 ("Lead Boost" -> index 2):
  // Turn T-Scream ON, turn TapeEcho ON, boost MS 1959 Gain to 88 and TapeEcho Mix to 55
  preset.slots[1].enabled = true;
  preset.slots[1].values[0] = 72; // T-Scream Gain = 72
  preset.slots[2].values[0] = 88; // MS 1959 Gain = 88
  preset.slots[4].enabled = true;
  preset.slots[4].values[2] = 55; // TapeEcho Mix = 55

  // Save snapshot to Scene 3 (index 2)
  scenes[2].states = preset.slots.map((s) => Boolean(s.enabled));
  scenes[2].slotValues = preset.slots.map((s) => [...s.values]);
  scenes[2].effectIds = preset.slots.map((s) => s.effectId);

  // Now adjust pedals for Scene 1 ("Clean Base" -> index 0):
  // Turn T-Scream OFF, lower MS 1959 Gain to 28, TapeEcho OFF
  preset.slots[1].enabled = false;
  preset.slots[2].values[0] = 28;
  preset.slots[4].enabled = false;
  scenes[0].states = preset.slots.map((s) => Boolean(s.enabled));
  scenes[0].slotValues = preset.slots.map((s) => [...s.values]);
  scenes[0].effectIds = preset.slots.map((s) => s.effectId);

  // Recall Scene 3 (Lead Boost) and verify BOTH states and adjusted knob values restore cleanly
  const recall = (idx) => {
    const sc = scenes[idx];
    preset.slots.forEach((slot, i) => {
      slot.enabled = Boolean(sc.states[i]);
      if (sc.slotValues && sc.slotValues[i]) {
        slot.values = [...sc.slotValues[i]];
      }
    });
  };

  recall(2);
  assert.equal(preset.slots[1].enabled, true, 'T-Scream ON in Lead Boost');
  assert.equal(preset.slots[1].values[0], 72, 'T-Scream Gain restored to 72');
  assert.equal(preset.slots[2].values[0], 88, 'MS 1959 Gain restored to 88');
  assert.equal(preset.slots[4].enabled, true, 'TapeEcho ON in Lead Boost');
  assert.equal(preset.slots[4].values[2], 55, 'TapeEcho Mix restored to 55');

  // Verify it encodes cleanly into a 146-byte ZoomPatch SysEx edit buffer dump
  const patch = new ZoomPatch();
  patch.name = preset.name;
  preset.slots.forEach((slot, i) => {
    patch.setEffectState(i, slot.enabled);
    patch.setEffectId(i, slot.midiId);
    slot.values.forEach((v, pIdx) => patch.setParamVal(i, pIdx + 2, v));
  });
  const bin = patch.makeBin(0x58);
  assert.equal(bin.length, 146);

  const decoded = new ZoomPatch();
  decoded.readBin(bin);
  assert.equal(decoded.getParamVal(2, 2), 88, 'MS 1959 Gain = 88 packed into hardware patch dump');

  // Recall Scene 1 (Clean Base) -> Gain drops back to 28 and T-Scream turns OFF
  recall(0);
  assert.equal(preset.slots[1].enabled, false, 'T-Scream OFF in Clean Base');
  assert.equal(preset.slots[2].values[0], 28, 'MS 1959 Gain restored to 28');
  assert.equal(preset.slots[4].enabled, false, 'TapeEcho OFF in Clean Base');
});
