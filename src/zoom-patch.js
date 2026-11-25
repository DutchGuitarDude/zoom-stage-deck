// Zoom MultiStomp Patch bit-packing and SysEx encoder/decoder
// Based on clean-room reverse-engineering specs for Zoom MS-50G / MS-60B / MS-70CDR.

import { ZOOM_EFFECT_DB } from './zoom-effects-db.js';
import { CUSTOM_COMMUNITY_EFFECTS, resolveCustomEffect } from './custom-effects-db.js';

const EMPTY_146 = [
  0xf0, 0x52, 0x00, 0x58, 0x28, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x05, 0x0f, 0x45, 0x00, 0x6d, 0x70, 0x74, 0x79, 0x20, 0x20,
  0x20, 0x00, 0x20, 0x20, 0x00, 0xf7
];

const EMPTY_105 = [
  0xf0, 0x52, 0x00, 0x5f, 0x28, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x10, 0x00, 0x00, 0x40, 0x04, 0x0f, 0x45, 0x6d, 0x00, 0x70, 0x74, 0x79, 0x20, 0x20, 0x20,
  0x20, 0x00, 0x20, 0x00, 0xf7
];

const BITS_MAP = [
  [ // Slot 0
    [[6, 1, 0]], // State (Bypass: 0, On: 1)
    [[5, 0x40, 24], [6, 0x7e, 16], [7, 0x07, 8], [9, 0x1f, 0]], // Effect ID (32-bit)
    [[9, 0x60, -5], [5, 0x8, -1], [10, 0x7f, 3], [5, 0x4, 8], [11, 0x1, 11]], // Param 0 (Knob 1)
    [[11, 0x7c, -2], [5, 0x2, 4], [12, 0x1f, 6]], // Param 1 (Knob 2)
    [[5, 0x1, 0], [14, 0x7f, 1], [13, 0x40, 2], [15, 0x3, 9]], // Param 2 (Knob 3)
    [[15, 0x70, -4], [13, 0x20, -2], [16, 0x0f, 4]], // Param 3 (Knob 4)
    [[16, 0x70, -4], [13, 0x10, -1], [17, 0x0f, 4]], // Param 4 (Knob 5)
    [[17, 0x70, -4], [13, 0x08, 0], [18, 0x0f, 4]], // Param 5 (Knob 6)
    [[18, 0x70, -4], [13, 0x04, 1], [19, 0x0f, 4]], // Param 6 (Knob 7)
    [[19, 0x70, -4], [13, 0x02, 2], [20, 0x1f, 4], [23, 0x40, "NZ"]], // Param 7 (Knob 8)
    [[24, 0x7f, 0], [21, 0x10, 3]], // Param 8 (Knob 9)
  ],
  [ // Slot 1
    [[26, 1, 0]],
    [[21, 0x4, 28], [26, 0x7e, 16], [27, 0x07, 8], [30, 0x1f, 0]],
    [[30, 0x60, -5], [29, 0x40, -4], [31, 0x7f, 3], [29, 0x20, 5], [32, 0x1, 11]],
    [[32, 0x7c, -2], [29, 0x10, 1], [33, 0x1f, 6]],
    [[29, 0x8, -3], [34, 0x7f, 1], [29, 0x4, 6], [35, 0x3, 9]],
    [[35, 0x70, -4], [29, 0x2, 2], [36, 0x0f, 4]],
    [[36, 0x70, -4], [29, 0x1, 3], [38, 0x0f, 4]],
    [[38, 0x70, -4], [37, 0x40, -3], [39, 0x0f, 4]],
    [[39, 0x70, -4], [37, 0x20, -2], [40, 0x0f, 4]],
    [[40, 0x70, -4], [37, 0x10, -1], [41, 0x1f, 4], [43, 0x40, "NZ"]],
    [[44, 0x7f, 0], [37, 0x1, 7]],
  ],
  [ // Slot 2
    [[47, 1, 0]],
    [[45, 0x20, 25], [47, 0x7e, 16], [48, 0x07, 8], [50, 0x1f, 0]],
    [[50, 0x60, -5], [45, 0x4, 0], [51, 0x7f, 3], [45, 0x2, 9], [52, 0x1, 11]],
    [[52, 0x7c, -2], [45, 0x1, 5], [54, 0x1f, 6]],
    [[53, 0x40, -6], [55, 0x7f, 1], [53, 0x20, 3], [56, 0x3, 9]],
    [[56, 0x70, -4], [53, 0x10, -1], [57, 0x0f, 4]],
    [[57, 0x70, -4], [53, 0x8, 0], [58, 0x0f, 4]],
    [[58, 0x70, -4], [53, 0x4, 1], [59, 0x0f, 4]],
    [[59, 0x70, -4], [53, 0x2, 2], [60, 0x0f, 4]],
    [[60, 0x70, -4], [53, 0x1, 3], [62, 0x1f, 4], [64, 0x40, "NZ"]],
    [[65, 0x7f, 0], [61, 0x8, 4]],
  ],
  [ // Slot 3
    [[67, 1, 0]],
    [[61, 0x2, 29], [67, 0x7e, 16], [68, 0x07, 8], [71, 0x1f, 0]],
    [[71, 0x60, -5], [69, 0x20, -3], [72, 0x7f, 3], [69, 0x10, 6], [73, 0x1, 11]],
    [[73, 0x7c, -2], [69, 0x8, 2], [74, 0x1f, 6]],
    [[69, 0x4, -2], [75, 0x7f, 1], [69, 0x2, 7], [76, 0x3, 9]],
    [[76, 0x70, -4], [69, 0x1, 3], [78, 0x0f, 4]],
    [[78, 0x70, -4], [77, 0x40, -3], [79, 0x0f, 4]],
    [[79, 0x70, -4], [77, 0x20, -2], [80, 0x0f, 4]],
    [[80, 0x70, -4], [77, 0x10, -1], [81, 0x0f, 4]],
    [[81, 0x70, -4], [77, 0x8, 0], [82, 0x1f, 4], [84, 0x40, "NZ"]],
    [[86, 0x7f, 0], [85, 0x40, 1]],
  ],
  [ // Slot 4
    [[88, 1, 0]],
    [[85, 0x10, 26], [88, 0x7e, 16], [89, 0x07, 8], [91, 0x1f, 0]],
    [[91, 0x60, -5], [85, 0x2, 1], [92, 0x7f, 3], [85, 0x1, 10], [94, 0x1, 11]],
    [[94, 0x7c, -2], [93, 0x40, -1], [95, 0x1f, 6]],
    [[93, 0x20, -5], [96, 0x7f, 1], [93, 0x10, 4], [97, 0x3, 9]],
    [[97, 0x70, -4], [93, 0x8, 0], [98, 0x0f, 4]],
    [[98, 0x70, -4], [93, 0x4, 1], [99, 0x0f, 4]],
    [[99, 0x70, -4], [93, 0x2, 2], [100, 0x0f, 4]],
    [[100, 0x70, -4], [93, 0x1, 3], [102, 0x0f, 4]],
    [[102, 0x70, -4], [101, 0x40, -3], [103, 0x1f, 4], [105, 0x40, "NZ"]],
    [[106, 0x7f, 0], [101, 0x4, 5]],
  ],
  [ // Slot 5
    [[108, 1, 0]],
    [[101, 0x1, 30], [108, 0x7e, 16], [110, 0x07, 8], [112, 0x1f, 0]],
    [[112, 0x60, -5], [109, 0x10, -2], [113, 0x7f, 3], [109, 0x8, 7], [114, 0x1, 11]],
    [[114, 0x7c, -2], [109, 0x4, 3], [115, 0x1f, 6]],
    [[109, 0x2, -1], [116, 0x7f, 1], [109, 0x1, 8], [118, 0x3, 9]],
    [[118, 0x70, -4], [117, 0x40, -3], [119, 0x0f, 4]],
    [[119, 0x70, -4], [117, 0x20, -2], [120, 0x0f, 4]],
    [[120, 0x70, -4], [117, 0x10, -1], [121, 0x0f, 4]],
    [[121, 0x70, -4], [117, 0x8, 0], [122, 0x0f, 4]],
    [[122, 0x70, -4], [117, 0x4, 1], [123, 0x1f, 4], [126, 0x40, "NZ"]],
    [[127, 0x7f, 0], [125, 0x20, 2]],
  ]
];

const NAME_INDICES = [
  [91, 92, 94, 95, 96, 97, 98, 99, 100, 102], // MS-60B (105-byte)
  [132, 134, 135, 136, 137, 138, 139, 140, 142, 143] // MS-50G / MS-70CDR (146-byte)
];

const CAB_BYTES = [23, 43, 64, 84, 105, 126];
const V2_BYTES = [8, 28, 49, 70];
const MAX_FX_INDICES = [89, 130];

export class ZoomPatch {
  constructor() {
    this.name = "";
    this.fx = Array.from({ length: 6 }, () => new Array(11).fill(0));
    this.maxfx = 1;
    this.curfx = 0;
    this.dspstate = 0;
  }

  static getBits(dat, bits) {
    const len = dat.length;
    let val = 0;
    for (let i = 0; i < bits.length; ++i) {
      const b0 = bits[i];
      if (b0[0] < len && b0[2] !== "NZ") {
        let v = dat[b0[0]] & b0[1];
        if (b0[2] >= 0) v <<= b0[2];
        else v >>= -b0[2];
        val |= v;
      }
    }
    return val;
  }

  static setBits(dat, bits, val) {
    const len = dat.length;
    for (let i = 0; i < bits.length; ++i) {
      const b0 = bits[i];
      if (b0[0] < len) {
        if (b0[2] === "NZ") {
          dat[b0[0]] = (dat[b0[0]] & ~b0[1]) + (val !== 0 ? b0[1] : 0);
        } else {
          let v = b0[2] >= 0 ? (val >> b0[2]) : (val << -b0[2]);
          dat[b0[0]] = (dat[b0[0]] & ~b0[1]) + (v & b0[1]);
        }
      }
    }
  }

  getEffectId(slotIndex) {
    return this.fx[slotIndex] ? this.fx[slotIndex][1] : 0;
  }

  getEffectState(slotIndex) {
    return this.fx[slotIndex] ? this.fx[slotIndex][0] : 0;
  }

  getParamVal(slotIndex, paramIndex) {
    return this.fx[slotIndex] ? this.fx[slotIndex][paramIndex] : 0;
  }

  setParamVal(slotIndex, paramIndex, val) {
    if (this.fx[slotIndex]) {
      this.fx[slotIndex][paramIndex] = val;
    }
  }

  setEffectState(slotIndex, on) {
    if (this.fx[slotIndex]) {
      this.fx[slotIndex][0] = on ? 1 : 0;
    }
  }

  setEffectId(slotIndex, id) {
    if (this.fx[slotIndex]) {
      this.fx[slotIndex][1] = id;
      if (id !== 0 && ZOOM_EFFECT_DB && ZOOM_EFFECT_DB[id]) {
        const ef = ZOOM_EFFECT_DB[id];
        if (ef.params && Array.isArray(ef.params)) {
          ef.params.forEach((param, pIdx) => {
            const pBitIdx = pIdx + 2;
            if (pBitIdx < 11) {
              if (param.name === 'Tail' || param.name === 'TAIL') {
                this.fx[slotIndex][pBitIdx] = 1;
              } else if (param.default !== undefined) {
                this.fx[slotIndex][pBitIdx] = param.default;
              }
            }
          });
        }
      }
    }
  }

  readBin(dat) {
    const len = dat.length;
    if (len < 100) return false;

    // Read 10-char patch name directly from SysEx payload bytes
    let rawName = "";
    const nameOffset = len >= 146 ? 132 : 91;
    for (let j = 0; j < 13; ++j) {
      const c = dat[nameOffset + j];
      if (c && c >= 32 && c <= 126) {
        rawName += String.fromCharCode(c);
      }
    }
    this.name = rawName.trim();

    const flen = len >= 146 ? 6 : 4;
    for (let f = 0; f < 6; ++f) {
      for (let p = 0; p < 11; ++p) {
        if (f >= flen) {
          this.fx[f][p] = 0;
        } else {
          this.fx[f][p] = ZoomPatch.getBits(dat, BITS_MAP[f][p]);
        }
      }
    }

    const maxIdx = MAX_FX_INDICES[len >= 146 ? 1 : 0];
    this.maxfx = (dat[maxIdx] & 0x1c) >> 2;

    if (len < 146) {
      this.curfx = 3 - (((dat[88] & 0x40) >> 6) + ((dat[85] & 0x10) >> 3));
      this.dspstate = dat[88] & 0x3f;
    } else {
      this.curfx = 6 - (((dat[130] & 1) << 2) + ((dat[125] & 8) >> 2) + ((dat[129] & 0x40) >> 6));
      this.dspstate = dat[129] & 0x3f;
    }

    return true;
  }

  makeBin(devId = 0x58, effectListLocal = null) {
    const is60B = devId === 0x5f;
    const r = (is60B ? EMPTY_105 : EMPTY_146).slice(0);
    const flen = is60B ? 4 : 6;
    r[3] = devId;

    let patchName = (this.name || "Untitled").slice(0, 10);
    const nameMap = NAME_INDICES[is60B ? 0 : 1];
    for (let i = 0; i < 10; ++i) {
      const c = patchName.charCodeAt(i);
      r[nameMap[i]] = isNaN(c) ? 0x20 : c;
    }

    const effectDb = effectListLocal || ZOOM_EFFECT_DB;
    for (let f = 0; f < flen; ++f) {
      for (let p = 0; p < 11; ++p) {
        ZoomPatch.setBits(r, BITS_MAP[f][p], this.fx[f][p]);
      }
      const efId = this.fx[f][1];
      if (efId) {
        let ef = (effectDb && effectDb[efId]) || (CUSTOM_COMMUNITY_EFFECTS && CUSTOM_COMMUNITY_EFFECTS[efId]);
        if (!ef && typeof resolveCustomEffect === 'function') {
          ef = resolveCustomEffect(efId);
        }
        if (ef && (ef.category === 'AMP' || ef.group === 'AMP')) {
          const isV2 = Boolean((ef.ver && (ef.ver & 0xf0) === 0x20) || (((efId >> 16) & 0xf0) === 0x20 && (efId & 0x0f) === 0x08));
          if (isV2 && f < V2_BYTES.length) {
            r[V2_BYTES[f]] = 0x20;
          }
          const isBassAmp = (efId & 0xf) === 0x0a || (ef.ver && !(ef.ver & 0xf));
          if (!isBassAmp) {
            r[CAB_BYTES[f]] = this.fx[f][9] ? 0x40 : 0;
          } else {
            const cab = this.fx[f][9];
            if (cab === 0) r[CAB_BYTES[f]] = 0;
            else if ([16, 32, 48, 96, 112, 192].includes(cab)) r[CAB_BYTES[f]] = 0x50;
            else r[CAB_BYTES[f]] = 0x51;
          }
        }
      }
    }

    let activeCount = is60B ? 3 : 5;
    while (activeCount > 0) {
      if (this.fx[activeCount][1] !== 0) break;
      --activeCount;
    }
    const maxFxTarget = Math.max(1, Math.min(flen, activeCount + 1));
    const maxIdx = MAX_FX_INDICES[is60B ? 0 : 1];
    r[maxIdx] = (r[maxIdx] & ~0x1c) + (maxFxTarget << 2);

    if (is60B) {
      const n = 3 - this.curfx;
      r[88] = ((n & 1) << 6) | (this.dspstate & 0x3f);
      r[85] = (r[85] & ~0x10) + ((n & 2) << 3);
    } else {
      const n = 5 - this.curfx;
      r[129] = ((n & 1) << 6) | (this.dspstate & 0x3f);
      r[125] = (r[125] & ~0x8) + ((n & 2) << 2);
      r[130] = (r[130] & ~1) + ((n & 4) >> 2);
    }

    return r;
  }
}
