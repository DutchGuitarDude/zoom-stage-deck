/**
 * M-VAVE Chocolate Plus ("FC2") SysEx Auto-Configuration Codec & Programmer
 *
 * Implements the verified M-VAVE Chocolate Plus SysEx protocol (`F0 00 32 ... F7`)
 * to auto-discover and program the footswitch over USB MIDI or Wireless MIDI
 * (if the wireless bridge passes SysEx).
 *
 * Default Zoom Stage Deck profile ("scenes-ef-patch"):
 *   - Operating Mode: Program Change A (0x00)
 *   - MIDI Channel:   Channel 1 (0x00)
 *   - Max Banks:      32 banks (PC 0..127 => 32 Patches x 4 Scenes each)
 *   - Bank-MIDI:      ON (1) => pressing E (A+B) or F (C+D) immediately sends PC for Patch Down / Up
 *   - Footswitches A, B, C, D => Scenes 1, 2, 3, 4 on the active patch
 *   - Virtual E (A+B) / F (C+D) => Patch Down / Patch Up
 */

export const SYSEX_START = 0xf0;
export const SYSEX_END = 0xf7;
export const MANUFACTURER = [0x00, 0x32];

export const CMD_ACK = 0x01;
export const CMD_CONFIG = 0x09;
export const CMD_READ = 0x0d;
export const CMD_DISCOVERY = 0x45;

export const SUB_CONFIG_WRITE = 0x49;
export const SUB_READ_REQ = 0x41;
export const SUB_READ_RESP = 0x49;
export const SUB_READ_RESP_FINAL = 0x79;

export const FIXED_PARAM = [0x00, 0x00, 0x00, 0x02];

export const CK_DEFAULT = 0x28a;
export const CK_FOOTSWITCH_B = 0x38b;
export const CK_FOOTSWITCH_C = 0x18b;
export const CK_SYSTEM = 0x20b;

export const ADV_CUSTOM_START = 93;
export const ADV_CUSTOM_BLOCK = 417;
export const ADV_CUSTOM_SWITCHES = 4;

export const CHOCOLATE_MODES = {
  PC_A: 0x00,
  PC_B: 0x01,
  CUSTOM_CC: 0x02,
  ADV_CUSTOM: 0x03,
};

export const CHOCOLATE_ADDR = {
  mode: 0x0000,
  midiInterface: 0x0001,
  midiChannel: 0x0002,
  customBankFirst: 0x0003, // latch = 3+2b, cc = 4+2b (b = 0..4)
  maxBanksPcA: 23637,      // count - 1 (0x1F = 32 banks)
  maxBanksPcB: 23638,      // count - 1
  maxGroupCount: 23639,    // count - 1
  usrPage: 23640,          // 0 or 1
  hidPage: 23641,
  polarity: 23642,         // 0 = off, 1 = on
  bankMidi: 23643,         // 0 = off, 1 = send MIDI immediately on E/F bank switch
  pcDisp: 23644,
};

export function encode14(value) {
  const v = value & 0x3fff;
  return [v & 0x7f, (v >> 7) & 0x7f];
}

export function decode14(lo, hi) {
  return (lo & 0x7f) | ((hi & 0x7f) << 7);
}

export function encodeAddress(addr) {
  return [addr & 0x7f, (addr >> 7) & 0x7f, (addr >> 14) & 0x7f, 0];
}

export function decodeAddress(sel) {
  return (sel[0] & 0x7f) | ((sel[1] & 0x7f) << 7) | ((sel[2] & 0x7f) << 14);
}

export function checksumConstantFor(addr) {
  const rel = addr - ADV_CUSTOM_START;
  if (rel >= 0 && rel < 8 * ADV_CUSTOM_BLOCK) {
    const sw = Math.floor(rel / ADV_CUSTOM_BLOCK) % ADV_CUSTOM_SWITCHES;
    return [CK_DEFAULT, CK_FOOTSWITCH_B, CK_FOOTSWITCH_C, CK_FOOTSWITCH_B][sw];
  }
  if (addr >= CHOCOLATE_ADDR.maxBanksPcA && addr <= 23645) {
    return CK_SYSTEM;
  }
  return CK_DEFAULT;
}

export function checksum(d, constant, extra = 0) {
  const sum = d.reduce((a, b) => a + b, 0);
  return encode14(constant - sum - extra);
}

/** Discovery ping: `F0 00 32 45 00 00 00 40 7F F7` */
export function buildDiscoveryRequest() {
  return [SYSEX_START, ...MANUFACTURER, CMD_DISCOVERY, 0x00, 0x00, 0x00, 0x40, 0x7f, SYSEX_END];
}

/**
 * 21-byte `09 49` configuration write:
 * `F0 00 32 09 49 00 00 00 02 <addr:4> 10 00 00 00 <value> <ck:2> F7`
 */
export function buildConfigWrite(addr, value) {
  const val7 = value & 0x7f;
  const d = [
    ...MANUFACTURER,
    CMD_CONFIG,
    SUB_CONFIG_WRITE,
    ...FIXED_PARAM,
    ...encodeAddress(addr),
    0x10,
    0x00,
    0x00,
    0x00,
    val7,
  ];
  const ck = checksum(d, checksumConstantFor(addr), d[8] + val7);
  return [SYSEX_START, ...d, ...ck, SYSEX_END];
}

/** Parse incoming M-VAVE Chocolate Plus SysEx frame. */
export function parseChocolateMessage(bytes) {
  if (!bytes || bytes.length < 4) return { kind: 'other', data: bytes };
  const data = Uint8Array.from(bytes);
  if (
    data[0] === SYSEX_START &&
    data[1] === MANUFACTURER[0] &&
    data[2] === MANUFACTURER[1]
  ) {
    const cmd = data[3];
    if (cmd === CMD_ACK && data[4] === 0x08) {
      return { kind: 'ack' };
    }
    if (cmd === CMD_DISCOVERY && data[4] === 0x58) {
      return { kind: 'discovery-response', data };
    }
    if (cmd === CMD_CONFIG && data[4] === SUB_CONFIG_WRITE && data.length === 21) {
      return {
        kind: 'config-write',
        addr: decodeAddress(Array.from(data.slice(9, 13))),
        value: data[17],
      };
    }
    if (cmd === CMD_READ && (data[4] === SUB_READ_RESP || data[4] === SUB_READ_RESP_FINAL)) {
      return {
        kind: 'read-response',
        final: data[4] === SUB_READ_RESP_FINAL,
        pageId: decodeAddress(Array.from(data.slice(9, 13))),
        payload: data.slice(17, data.length - 3),
      };
    }
  }
  return { kind: 'other', data };
}

/**
 * Build the SysEx write sequence that programs a Chocolate Plus for:
 *   - A, B, C, D        => Scenes 1..4 on the active patch (Momentary CC 20–23)
 *   - E (A+B together)  => INSTANT Patch Down on a single stomp (no second press!)
 *   - F (C+D together)  => INSTANT Patch Up on a single stomp (no second press!)
 *
 * Uses Custom CC Mode (0x02, Momentary) instead of Program Change A because in PC-A mode
 * the Chocolate Plus firmware intercepts A+B / C+D internally to queue a bank change without
 * sending MIDI until a second press of A–D. In Custom CC Momentary mode, pressing A+B or C+D
 * immediately transmits both CCs so the stage deck detects the chord and steps Patch −/+
 * immediately on the first stomp across all 50 MS-50G patches.
 */
export function buildScenesAndPatchConfig({ channel = 0, ccs = [20, 21, 22, 23] } = {}) {
  return buildCustomCcConfig({ channel, ccs, latching: false });
}

/**
 * Optional Program Change A mode sequence (32 banks x 4 PCs).
 */
export function buildProgramChangeAConfig({ channel = 0, maxBanks = 32 } = {}) {
  const clampedBanks = Math.max(1, Math.min(32, maxBanks));
  const writes = [
    {
      label: 'Mode → Program Change A',
      addr: CHOCOLATE_ADDR.mode,
      value: CHOCOLATE_MODES.PC_A,
    },
    {
      label: `MIDI Channel → Ch ${channel + 1}`,
      addr: CHOCOLATE_ADDR.midiChannel,
      value: channel & 0x0f,
    },
    {
      label: `Max Banks → ${clampedBanks} Banks`,
      addr: CHOCOLATE_ADDR.maxBanksPcA,
      value: clampedBanks - 1,
    },
    {
      label: 'Bank-MIDI → ON',
      addr: CHOCOLATE_ADDR.bankMidi,
      value: 1,
    },
  ];
  return writes.map((w) => ({
    ...w,
    bytes: buildConfigWrite(w.addr, w.value),
  }));
}

/**
 * Chord and Hold detector for M-VAVE Chocolate Plus:
 *   - Simultaneous A+B (E) => INSTANT Patch Down
 *   - Simultaneous C+D (F) => INSTANT Patch Up
 *   - Staggered foot roll within `chordWindowMs` (380ms) => INSTANT Patch Down / Up
 *   - Long-press / Hold on Switch A (450ms) => Patch Down (guaranteed single-pedal reliability!)
 *   - Long-press / Hold on Switch D (450ms) => Patch Up (guaranteed single-pedal reliability!)
 *   - Short tap (< 380ms) => fires normal single switch A, B, C, D (Scenes / Stomp pedals / Presets)
 */
export class ChocolateChordDetector {
  constructor({
    chordWindowMs = 380,
    cooldownMs = 350,
    holdMs = 450,
    onSwitch = () => {},
    onChord = () => {},
    onHold = () => {},
  } = {}) {
    this.chordWindowMs = chordWindowMs;
    this.cooldownMs = cooldownMs;
    this.holdMs = holdMs;
    this.onSwitch = onSwitch;
    this.onChord = onChord;
    this.onHold = onHold;
    this.activeSwitches = new Set();
    this._pendingSwitch = null;
    this._tapTimer = null;
    this._holdTimer = null;
    this._holdFired = false;
    this._cooldownUntil = 0;
  }

  press(switchIdx, now = Date.now()) {
    if (switchIdx < 0 || switchIdx > 3) return;
    if (now < this._cooldownUntil) return;

    this.activeSwitches.add(switchIdx);

    // 1. Dual-switch simultaneously held chord: A(0) + B(1) => E (Patch Down)
    if (this.activeSwitches.has(0) && this.activeSwitches.has(1)) {
      this._triggerChord('prev', now);
      return;
    }

    // 2. Dual-switch simultaneously held chord: C(2) + D(3) => F (Patch Up)
    if (this.activeSwitches.has(2) && this.activeSwitches.has(3)) {
      this._triggerChord('next', now);
      return;
    }

    // 3. Staggered presses within chordWindowMs (quick foot roll)
    if (this._pendingSwitch !== null) {
      const prev = this._pendingSwitch;
      if ((prev === 0 && switchIdx === 1) || (prev === 1 && switchIdx === 0)) {
        this._triggerChord('prev', now);
        return;
      }
      if ((prev === 2 && switchIdx === 3) || (prev === 3 && switchIdx === 2)) {
        this._triggerChord('next', now);
        return;
      }
      // Different non-chord switch: flush previous immediately
      if (prev !== switchIdx) {
        this._flushPending();
      }
    }

    this._pendingSwitch = switchIdx;
    this._holdFired = false;

    // Start Hold timer for Switch A (0 -> prev) and Switch D (3 -> next)
    if (switchIdx === 0 || switchIdx === 3) {
      this._clearHoldTimer();
      const holdDir = switchIdx === 0 ? 'prev' : 'next';
      this._holdTimer = setTimeout(() => {
        this._holdFired = true;
        this._clearPending();
        this.activeSwitches.clear();
        this._cooldownUntil = Date.now() + this.cooldownMs;
        this.onHold(switchIdx, holdDir);
      }, this.holdMs);
    }

    // Single-switch tap timer: switches B (1) and C (2) cannot be held, so flush after chordWindowMs
    if (switchIdx === 1 || switchIdx === 2) {
      this._clearTapTimer();
      this._tapTimer = setTimeout(() => {
        this._flushPending();
      }, this.chordWindowMs);
    }
  }

  release(switchIdx) {
    this.activeSwitches.delete(switchIdx);
    this._clearHoldTimer();

    if (this._holdFired) {
      this._holdFired = false;
      this._clearPending();
      return;
    }

    // If released before holdMs, schedule quick flush of pending single tap
    if (this._pendingSwitch === switchIdx) {
      this._clearTapTimer();
      this._tapTimer = setTimeout(() => {
        this._flushPending();
      }, Math.min(60, this.chordWindowMs));
    }
  }

  _triggerChord(dir, now) {
    this._clearHoldTimer();
    this._clearPending();
    this.activeSwitches.clear();
    this._holdFired = false;
    this._cooldownUntil = now + this.cooldownMs;
    this.onChord(dir);
  }

  _clearHoldTimer() {
    if (this._holdTimer) {
      clearTimeout(this._holdTimer);
      this._holdTimer = null;
    }
  }

  _clearTapTimer() {
    if (this._tapTimer) {
      clearTimeout(this._tapTimer);
      this._tapTimer = null;
    }
  }

  _clearPending() {
    this._clearTapTimer();
    this._pendingSwitch = null;
  }

  _flushPending() {
    this._clearTapTimer();
    this._clearHoldTimer();
    const idx = this._pendingSwitch;
    this._pendingSwitch = null;
    if (idx !== null && !this._holdFired) {
      this.onSwitch(idx);
    }
  }

  reset() {
    this._clearHoldTimer();
    this._clearPending();
    this.activeSwitches.clear();
    this._holdFired = false;
    this._cooldownUntil = 0;
  }
}

/**
 * Build the SysEx write sequence for Custom CC Mode (CC 20–23 momentary on A–D).
 */
export function buildCustomCcConfig({ channel = 0, ccs = [20, 21, 22, 23], latching = false } = {}) {
  const writes = [
    {
      label: 'Mode → Custom CC',
      addr: CHOCOLATE_ADDR.mode,
      value: CHOCOLATE_MODES.CUSTOM_CC,
    },
    {
      label: `MIDI Channel → Ch ${channel + 1}`,
      addr: CHOCOLATE_ADDR.midiChannel,
      value: channel & 0x0f,
    },
  ];
  for (let b = 0; b < 4; b++) {
    writes.push({
      label: `Switch ${['A', 'B', 'C', 'D'][b]} Latch → ${latching ? 'Toggle' : 'Momentary'}`,
      addr: CHOCOLATE_ADDR.customBankFirst + b * 2,
      value: latching ? 1 : 0,
    });
    writes.push({
      label: `Switch ${['A', 'B', 'C', 'D'][b]} CC → #${ccs[b] ?? 20 + b}`,
      addr: CHOCOLATE_ADDR.customBankFirst + b * 2 + 1,
      value: (ccs[b] ?? 20 + b) & 0x7f,
    });
  }
  return writes.map((w) => ({
    ...w,
    bytes: buildConfigWrite(w.addr, w.value),
  }));
}

/**
 * Heuristic check whether a MIDI port name looks like M-VAVE Chocolate Plus or M-VAVE Wireless MIDI.
 */
export function classifyControllerPort(portName = '') {
  const name = String(portName || '');
  if (/sinco|chocolate|footctrl|fc2|cuvave|foot|switch|pedal/i.test(name)) {
    return { isChocolate: true, isWireless: /ble|bt|wireless|midi-a|midi-b|ms1|bluetooth/i.test(name) };
  }
  if (/m-vave|mvave|ms1|midi-a|midi-b|wireless|ble|bt\s*midi|bluetooth/i.test(name)) {
    return { isChocolate: false, isWireless: true };
  }
  return { isChocolate: false, isWireless: false };
}

/**
 * Helper to translate incoming Chocolate Plus PC (0..127) in "scenes-ef-patch" layout
 * into `{ patchIndex, sceneIndex }`.
 *   - Bank K (0..31) maps to Patch K (0..31)
 *   - Switches A..D inside Bank K map to Scenes 0..3
 */
export function decodeChocolateScenePc(programNumber, maxPatches = 50) {
  const pc = Math.max(0, Math.min(127, Number(programNumber) || 0));
  const patchIndex = Math.floor(pc / 4) % maxPatches;
  const sceneIndex = pc % 4;
  return { patchIndex, sceneIndex };
}
