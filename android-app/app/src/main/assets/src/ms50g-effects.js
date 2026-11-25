// Clean-room Zoom MS-50G (v3.00 / v3.10) ZDL effect catalog
// Organized by category with standard .ZDL module filenames and editable parameters.

export const CATEGORY_COLORS = {
  DYNAMICS: '#38bdf8',
  FILTER: '#2dd4bf',
  DRIVE: '#fb923c',
  AMP: '#f43f5e',
  MOD: '#a78bfa',
  SFX: '#e879f9',
  DELAY: '#facc15',
  REVERB: '#60a5fa',
  EMPTY: '#475569',
};

export const CATEGORY_ICONS = {
  DYNAMICS: 'assets/icons/dynamics.png',
  FILTER: 'assets/icons/filter.png',
  DRIVE: 'assets/icons/drive.png',
  AMP: 'assets/icons/amp.png',
  CAB: 'assets/icons/cab.png',
  MOD: 'assets/icons/mod.png',
  SFX: 'assets/icons/sfx.png',
  DELAY: 'assets/icons/delay.png',
  REVERB: 'assets/icons/reverb.png',
  EMPTY: null,
};

export const MS50G_CABS = [
  'OFF',
  'FD COMBO 2x12',
  'DELUXE-R 1x12',
  'FD VIBRO 2x10',
  'US BLUES 4x10',
  'VX COMBO 2x12',
  'VX JMI 2x12',
  'BG CRUNCH 1x12',
  'MATCH 30 2x12',
  'CAR DRIVE 1x12',
  'TW ROCK 2x12',
  'TONE CITY 4x12',
  'HW STACK 4x12',
  'TANGERINE 4x12',
  'B-BREAKER 2x12',
  'MS CRUNCH 4x12',
  'MS 1959 4x12',
  'MS DRIVE 4x12',
  'BG DRIVE 4x12',
  'DZ DRIVE 4x12',
  'ALIEN 4x12',
  'REVO-1 4x12',
  'B-MAN 4x10',
];

export const MS50G_OUT_MODES = [
  'LINE',
  'COMBO FRONT',
  'STACK FRONT',
  'COMBO PWR AMP',
  'STACK PWR AMP',
];

export const CAB_INDEX_TO_RAW = [
  0,   // 0: OFF
  8,   // 1: FD COMBO 2x12
  16,  // 2: DELUXE-R 1x12
  32,  // 3: FD VIBRO 2x10
  48,  // 4: US BLUES 4x10
  64,  // 5: VX COMBO 2x12
  80,  // 6: VX JMI 2x12
  96,  // 7: BG CRUNCH 1x12
  112, // 8: MATCH 30 2x12
  128, // 9: CAR DRIVE 1x12
  144, // 10: TW ROCK 2x12
  160, // 11: TONE CITY 4x12
  176, // 12: HW STACK 4x12
  192, // 13: TANGERINE 4x12
  208, // 14: B-BREAKER 2x12
  224, // 15: MS CRUNCH 4x12
  240, // 16: MS 1959 4x12
  256, // 17: MS DRIVE 4x12
  288, // 18: BG DRIVE 4x12
  304, // 19: DZ DRIVE 4x12
  320, // 20: ALIEN 4x12
  336, // 21: REVO-1 4x12
  352, // 22: B-MAN 4x10
];

export function cabRawToIndex(rawVal) {
  if (!rawVal || rawVal <= 0) return 0;
  if (rawVal <= 22 && !CAB_INDEX_TO_RAW.includes(rawVal)) {
    return rawVal;
  }
  const exact = CAB_INDEX_TO_RAW.indexOf(rawVal);
  if (exact !== -1) return exact;
  if (rawVal > 22) {
    let closestIdx = 0;
    let minDiff = Infinity;
    for (let i = 0; i < CAB_INDEX_TO_RAW.length; i++) {
      const diff = Math.abs(CAB_INDEX_TO_RAW[i] - rawVal);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = i;
      }
    }
    return closestIdx;
  }
  return rawVal;
}

export function cabIndexToRaw(idx) {
  const i = Math.max(0, Math.min(CAB_INDEX_TO_RAW.length - 1, Number(idx) || 0));
  return CAB_INDEX_TO_RAW[i];
}

// Reusable parameter templates by effect archetype
const P = {
  comp: () => [
    { name: 'Sense', min: 0, max: 10, default: 5, unit: '' },
    { name: 'Tone', min: 0, max: 10, default: 6, unit: '' },
    { name: 'Level', min: 0, max: 150, default: 100, unit: '' },
    { name: 'Attack', min: 0, max: 1, default: 0, unit: '' },
  ],
  gate: () => [
    { name: 'THRSH', min: 1, max: 25, default: 12, unit: '' },
    { name: 'Decay', min: 0, max: 100, default: 30, unit: '' },
    { name: 'Level', min: 0, max: 150, default: 100, unit: '' },
  ],
  eq: () => [
    { name: 'Low', min: -12, max: 12, default: 0, unit: 'dB' },
    { name: 'LowMid', min: -12, max: 12, default: 1, unit: 'dB' },
    { name: 'Mid', min: -12, max: 12, default: 0, unit: 'dB' },
    { name: 'HiMid', min: -12, max: 12, default: 2, unit: 'dB' },
    { name: 'High', min: -12, max: 12, default: 1, unit: 'dB' },
    { name: 'Level', min: 0, max: 150, default: 100, unit: '' },
  ],
  filter: () => [
    { name: 'Sense', min: -10, max: 10, default: 5, unit: '' },
    { name: 'Reso', min: 0, max: 10, default: 5, unit: '' },
    { name: 'Freq', min: 0, max: 100, default: 50, unit: '' },
    { name: 'Level', min: 0, max: 150, default: 100, unit: '' },
  ],
  drive: () => [
    { name: 'Gain', min: 0, max: 100, default: 55, unit: '' },
    { name: 'Tone', min: 0, max: 100, default: 58, unit: '' },
    { name: 'Level', min: 0, max: 150, default: 100, unit: '' },
  ],
  amp: (defaultCab = 1) => [
    { name: 'Gain', min: 0, max: 100, default: 48, unit: '' },
    { name: 'Tube', min: 0, max: 100, default: 50, unit: '' },
    { name: 'Level', min: 0, max: 150, default: 100, unit: '' },
    { name: 'Trebl', min: 0, max: 100, default: 50, unit: '' },
    { name: 'Middl', min: 0, max: 100, default: 50, unit: '' },
    { name: 'Bass', min: 0, max: 100, default: 50, unit: '' },
    { name: 'Prese', min: 0, max: 100, default: 50, unit: '' },
    { name: 'CAB', type: 'select', options: MS50G_CABS, min: 0, max: MS50G_CABS.length - 1, default: defaultCab, unit: '' },
    { name: 'OUT', type: 'select', options: MS50G_OUT_MODES, min: 0, max: MS50G_OUT_MODES.length - 1, default: 0, unit: '' },
  ],
  mod: () => [
    { name: 'Depth', min: 0, max: 100, default: 55, unit: '' },
    { name: 'Rate', min: 1, max: 50, default: 18, unit: '' },
    { name: 'Tone', min: 0, max: 10, default: 6, unit: '' },
    { name: 'Mix', min: 0, max: 100, default: 48, unit: '%' },
  ],
  pitch: () => [
    { name: 'Shift', min: -12, max: 24, default: 12, unit: 'st' },
    { name: 'Tone', min: 0, max: 10, default: 6, unit: '' },
    { name: 'Bal', min: 0, max: 100, default: 50, unit: '%' },
    { name: 'Level', min: 0, max: 150, default: 100, unit: '' },
  ],
  delay: () => [
    { name: 'Time', min: 10, max: 4000, default: 420, unit: 'ms' },
    { name: 'F.B', min: 0, max: 100, default: 38, unit: '%' },
    { name: 'Mix', min: 0, max: 100, default: 34, unit: '%' },
    { name: 'HiDMP', min: 0, max: 10, default: 5, unit: '' },
    { name: 'Level', min: 0, max: 150, default: 100, unit: '' },
  ],
  dualDelay: () => [
    { name: 'Time A', min: 0, max: 2005, default: 500, unit: 'ms' },
    { name: 'Time B', min: 0, max: 2005, default: 375, unit: 'ms' },
    { name: 'FBack A', min: 0, max: 110, default: 50, unit: '%' },
    { name: 'FBack B', min: 0, max: 110, default: 50, unit: '%' },
    { name: 'Depth', min: 0, max: 101, default: 0, unit: '' },
    { name: 'Speed', min: 0, max: 50, default: 25, unit: '' },
    { name: 'Filter', min: -100, max: 100, default: 100, unit: '' },
    { name: 'DelayMix', min: 0, max: 100, default: 25, unit: '%' },
    { name: 'Mix', min: 0, max: 100, default: 50, unit: '%' },
  ],
  reverb: () => [
    { name: 'Decay', min: 1, max: 30, default: 14, unit: '' },
    { name: 'Tone', min: 0, max: 10, default: 6, unit: '' },
    { name: 'PreD', min: 0, max: 200, default: 24, unit: 'ms' },
    { name: 'Mix', min: 0, max: 100, default: 36, unit: '%' },
    { name: 'Level', min: 0, max: 150, default: 100, unit: '' },
  ],
  nam: () => [
    { name: 'Input', min: 0, max: 100, default: 50, unit: '' },
    { name: 'Output', min: 0, max: 100, default: 25, unit: '' },
    { name: 'Mix', min: 0, max: 100, default: 100, unit: '%' },
    { name: 'Bass', min: 0, max: 100, default: 50, unit: '' },
    { name: 'Mid', min: 0, max: 100, default: 50, unit: '' },
    { name: 'Treb', min: 0, max: 100, default: 50, unit: '' },
    { name: 'Gate', min: 0, max: 100, default: 0, unit: '' },
  ],
  cab: () => [
    { name: 'Mix', min: 0, max: 100, default: 100, unit: '%' },
    { name: 'Level', min: 0, max: 150, default: 100, unit: '' },
    { name: 'Reso', min: 0, max: 100, default: 50, unit: '' },
    { name: 'Pres', min: 0, max: 100, default: 50, unit: '' },
  ],
};

const ARCHETYPE_DSP = {
  comp: 7,
  gate: 6,
  eq: 8,
  filter: 12,
  drive: 12,
  amp: 33,
  nam: 35,
  cab: 10,
  mod: 14,
  pitch: 24,
  delay: 19,
  reverb: 22,
};

const EFFECT_DSP_OVERRIDES = {
  'line-sel': 3,
  'znr': 5,
  'noise-gate': 5,
  'opt-comp': 8,
  'para-eq': 10,
  'ac-sim': 21,
  'dz-drive': 37,
  'alien': 36,
  'revo-1': 36,
  'ms-1959': 34,
  'fd-combo': 32,
  'hps': 28,
  'mono-synth': 30,
  'z-organ': 29,
  'sitar-sim': 27,
  'ice-delay': 29,
  'tape-echo': 22,
  'tape-echo3': 26,
  'dual-dly': 25,
  'hd-reverb': 34,
  'hd-hall': 33,
  'shimmer-rv': 38,
  'particle-r': 39,
  'space-hole': 38,
  'mangl-verb': 36,
  'dual-verb': 35,
  'mod-reverb': 30,
  'plate': 18,
  'spring': 16,
  'spring-63': 20,
};

function fx(id, name, zdl, category, archetype, source = 'Factory', cabIndex = 1, midiId = null) {
  const dsp =
    id === 'empty'
      ? 0
      : EFFECT_DSP_OVERRIDES[id] ?? ARCHETYPE_DSP[archetype] ?? 10;
  const res = {
    id,
    name,
    zdl,
    category,
    source,
    dsp,
    params: archetype ? (archetype === 'amp' ? P.amp(cabIndex) : P[archetype]()) : [],
  };
  if (midiId !== null) res.midiId = midiId;
  return res;
}

export const MS50G_EFFECTS = [
  fx('empty', 'Thru (Empty)', 'THRU', 'EMPTY', null, 'Factory'),

  // ── DYNAMICS (13) ──
  fx('comp', 'Comp', 'COMP.ZDL', 'DYNAMICS', 'comp', 'Factory'),
  fx('rack-comp', 'RackComp', 'RACKCOMP.ZDL', 'DYNAMICS', 'comp', 'Factory'),
  fx('m-comp', 'M Comp', 'M_COMP.ZDL', 'DYNAMICS', 'comp', 'Factory'),
  fx('opt-comp', 'OptComp', 'OPT_COMP.ZDL', 'DYNAMICS', 'comp', 'Effect Manager'),
  fx('160-comp', '160 Comp', '160_COMP.ZDL', 'DYNAMICS', 'comp', 'Effect Manager'),
  fx('limiter', 'Limiter', 'LIMITER.ZDL', 'DYNAMICS', 'comp', 'Effect Manager'),
  fx('slow-attck', 'SlowATTCK', 'SLOW_ATK.ZDL', 'DYNAMICS', 'comp', 'Factory'),
  fx('znr', 'ZNR', 'ZNR.ZDL', 'DYNAMICS', 'gate', 'Factory'),
  fx('noise-gate', 'NoiseGate', 'NOISEGAT.ZDL', 'DYNAMICS', 'gate', 'Factory'),
  fx('dirty-gate', 'DirtyGate', 'DIRTYGAT.ZDL', 'DYNAMICS', 'gate', 'Factory'),
  fx('line-sel', 'LineSel', 'LINE_SEL.ZDL', 'DYNAMICS', 'gate', 'Factory'),
  fx('exciter', 'Exciter', 'EXCITER.ZDL', 'DYNAMICS', 'comp', 'Factory'),
  fx('rc-boost', 'RC Boost', 'RC_BOOST.ZDL', 'DYNAMICS', 'drive', 'Effect Manager'),

  // ── FILTER & EQ (19) ──
  fx('geq', 'GraphicEQ', 'GEQ.ZDL', 'FILTER', 'eq', 'Factory'),
  fx('para-eq', 'ParaEQ', 'PARA_EQ.ZDL', 'FILTER', 'eq', 'Factory'),
  fx('low-eq', 'LowEQ', 'LOW_EQ.ZDL', 'FILTER', 'eq', 'Effect Manager'),
  fx('lpf', 'LPF', 'LPF.ZDL', 'FILTER', 'filter', 'Effect Manager'),
  fx('auto-wah', 'AutoWah', 'AUTOWAH.ZDL', 'FILTER', 'filter', 'Factory'),
  fx('resonance', 'Resonance', 'RESONANC.ZDL', 'FILTER', 'filter', 'Factory'),
  fx('cry', 'Cry', 'CRY.ZDL', 'FILTER', 'filter', 'Factory'),
  fx('seq-fltr', 'SeqFLTR', 'SEQ_FLTR.ZDL', 'FILTER', 'filter', 'Factory'),
  fx('gt-geq7', 'Gt GEQ7', 'GT_GEQ7.ZDL', 'FILTER', 'eq', 'Effect Manager'),
  fx('st-gt-geq', 'St Gt GEQ', 'ST_GTGEQ.ZDL', 'FILTER', 'eq', 'Effect Manager'),
  fx('m-filter', 'M-Filter', 'M_FILTER.ZDL', 'FILTER', 'filter', 'Effect Manager'),
  fx('a-filter', 'A-Filter', 'A_FILTER.ZDL', 'FILTER', 'filter', 'Effect Manager'),
  fx('z-tron', 'Z-Tron', 'Z_TRON.ZDL', 'FILTER', 'filter', 'Effect Manager'),
  fx('step', 'Step', 'STEP.ZDL', 'FILTER', 'filter', 'Effect Manager'),
  fx('f-cycle', 'fCycle', 'F_CYCLE.ZDL', 'FILTER', 'filter', 'Effect Manager'),
  fx('comb-fltr', 'CombFLTR', 'COMBFLTR.ZDL', 'FILTER', 'filter', 'Effect Manager'),
  fx('rndm-fltr', 'RndmFLTR', 'RNDMFLTR.ZDL', 'FILTER', 'filter', 'Effect Manager'),
  fx('isolator', 'Isolator', 'ISOLATOR.ZDL', 'FILTER', 'eq', 'Effect Manager'),
  fx('bomber', 'Bomber', 'BOMBER.ZDL', 'FILTER', 'filter', 'Effect Manager'),

  // ── OVERDRIVE / DISTORTION (32) ──
  fx('booster', 'Booster', 'BOOSTER.ZDL', 'DRIVE', 'drive', 'Factory'),
  fx('overdrive', 'OverDrive', 'OVERDRIV.ZDL', 'DRIVE', 'drive', 'Factory'),
  fx('t-scream', 'T Scream', 'T_SCREAM.ZDL', 'DRIVE', 'drive', 'Factory'),
  fx('governor', 'Governor', 'GOVERNOR.ZDL', 'DRIVE', 'drive', 'Factory'),
  fx('dist-plus', 'Dist+', 'DISTPLUS.ZDL', 'DRIVE', 'drive', 'Factory'),
  fx('dist-1', 'Dist 1', 'DIST_1.ZDL', 'DRIVE', 'drive', 'Factory'),
  fx('squeak', 'Squeak', 'SQUEAK.ZDL', 'DRIVE', 'drive', 'Factory'),
  fx('fuzz-smile', 'FuzzSmile', 'FUZZSMIL.ZDL', 'DRIVE', 'drive', 'Factory'),
  fx('great-muff', 'GreatMuff', 'GREATMUF.ZDL', 'DRIVE', 'drive', 'Factory'),
  fx('metal-wld', 'MetalWRLD', 'METALWLD.ZDL', 'DRIVE', 'drive', 'Factory'),
  fx('hot-box', 'HotBox', 'HOTBOX.ZDL', 'DRIVE', 'drive', 'Factory'),
  fx('z-wild', 'Z Wild', 'Z_WILD.ZDL', 'DRIVE', 'drive', 'Factory'),
  fx('lead-rhy', 'LeadRHY', 'LEAD_RHY.ZDL', 'DRIVE', 'drive', 'Factory'),
  fx('extreme-ds', 'ExtremeDS', 'EXTREMED.ZDL', 'DRIVE', 'drive', 'Factory'),
  fx('ac-sim', 'Aco.Sim', 'AC_SIM.ZDL', 'DRIVE', 'drive', 'Factory'),
  fx('centa-gold', 'CentaGold', 'CENTAGLD.ZDL', 'DRIVE', 'drive', 'Effect Manager'),
  fx('sweet-drv', 'SweetDrv', 'SWEETDRV.ZDL', 'DRIVE', 'drive', 'Effect Manager'),
  fx('red-crunch', 'RedCrunch', 'REDCRNCH.ZDL', 'DRIVE', 'drive', 'Effect Manager'),
  fx('tb-mk15', 'TB MK1.5', 'TB_MK15.ZDL', 'DRIVE', 'drive', 'Effect Manager'),
  fx('oct-fuzz', 'OctFuzz', 'OCTFUZZ.ZDL', 'DRIVE', 'drive', 'Effect Manager'),
  fx('bg-throttle', 'BG Throtl', 'BG_THROT.ZDL', 'DRIVE', 'drive', 'Effect Manager'),
  fx('dynamic-drv', 'DynDrive', 'DYN_DRV.ZDL', 'DRIVE', 'drive', 'Effect Manager'),
  fx('z-scream', 'Z Scream', 'Z_SCREAM.ZDL', 'DRIVE', 'drive', 'Effect Manager'),
  fx('nyc-muff', 'NYC Muff', 'NYC_MUFF.ZDL', 'DRIVE', 'drive', 'Effect Manager'),
  fx('ts-drive', 'TS Drive', 'TS_DRIVE.ZDL', 'DRIVE', 'drive', 'Effect Manager'),
  fx('ep-stomp', 'EP Stomp', 'EP_STOMP.ZDL', 'DRIVE', 'drive', 'Effect Manager'),
  fx('gold-drive', 'GoldDrive', 'GOLD_DRV.ZDL', 'DRIVE', 'drive', 'Effect Manager'),
  fx('dark-pre', 'DarkPre', 'DARK_PRE.ZDL', 'DRIVE', 'drive', 'Effect Manager'),
  fx('metal-zone', 'MT Zone', 'MT_ZONE.ZDL', 'DRIVE', 'drive', 'Effect Manager'),
  fx('blues-drv', 'BluesDrv', 'BLUESDRV.ZDL', 'DRIVE', 'drive', 'Effect Manager'),
  fx('d-boost', 'D-Boost', 'D_BOOST.ZDL', 'DRIVE', 'drive', 'Effect Manager'),
  fx('spot-boost', 'SpotBoost', 'SPOTBST.ZDL', 'DRIVE', 'drive', 'Effect Manager'),

  // ── AMPLIFIERS (22) — each paired with its matching built-in CAB ──
  fx('fd-combo', 'FD COMBO', 'FD_COMBO.ZDL', 'AMP', 'amp', 'Factory', 1),
  fx('deluxe-r', 'DELUXE-R', 'DELUXE_R.ZDL', 'AMP', 'amp', 'Factory', 2),
  fx('fd-vibro', 'FD VIBRO', 'FD_VIBRO.ZDL', 'AMP', 'amp', 'Factory', 3),
  fx('us-blues', 'US BLUES', 'US_BLUES.ZDL', 'AMP', 'amp', 'Factory', 4),
  fx('vx-combo', 'VX COMBO', 'VX_COMBO.ZDL', 'AMP', 'amp', 'Factory', 5),
  fx('vx-jmi', 'VX JMI', 'VX_JMI.ZDL', 'AMP', 'amp', 'Factory', 6),
  fx('bg-crunch', 'BG CRUNCH', 'BG_CRNCH.ZDL', 'AMP', 'amp', 'Factory', 7),
  fx('match-30', 'MATCH 30', 'MATCH_30.ZDL', 'AMP', 'amp', 'Factory', 8),
  fx('car-drive', 'CAR DRIVE', 'CAR_DRV.ZDL', 'AMP', 'amp', 'Factory', 9),
  fx('tw-rock', 'TW ROCK', 'TW_ROCK.ZDL', 'AMP', 'amp', 'Factory', 10),
  fx('tone-city', 'TONE CITY', 'TONECITY.ZDL', 'AMP', 'amp', 'Factory', 11),
  fx('hw-stack', 'HW STACK', 'HW_STACK.ZDL', 'AMP', 'amp', 'Factory', 12),
  fx('tangerine', 'TANGERINE', 'TANGERIN.ZDL', 'AMP', 'amp', 'Factory', 13),
  fx('b-breaker', 'B-BREAKER', 'BBREAKER.ZDL', 'AMP', 'amp', 'Factory', 14),
  fx('ms-crunch', 'MS CRUNCH', 'MS_CRNCH.ZDL', 'AMP', 'amp', 'Factory', 15),
  fx('ms-1959', 'MS 1959', 'MS_1959.ZDL', 'AMP', 'amp', 'Factory', 16),
  fx('ms-drive', 'MS DRIVE', 'MS_DRIVE.ZDL', 'AMP', 'amp', 'Factory', 17),
  fx('bg-drive', 'BG DRIVE', 'BG_DRIVE.ZDL', 'AMP', 'amp', 'Factory', 18),
  fx('dz-drive', 'DZ DRIVE', 'DZ_DRIVE.ZDL', 'AMP', 'amp', 'Factory', 19),
  fx('alien', 'ALIEN', 'ALIEN.ZDL', 'AMP', 'amp', 'Factory', 20),
  fx('revo-1', 'REVO-1', 'REVO_1.ZDL', 'AMP', 'amp', 'Factory', 21),
  fx('b-man', 'B-MAN', 'B_MAN.ZDL', 'AMP', 'amp', 'Effect Manager', 22),

  // ── CUSTOM & COMMUNITY AMPS, NAM & CAB LOADERS ──
  fx('plexi', 'PLEXI', 'PLEXI.ZDL', 'AMP', 'amp', 'Custom', 16, 1076363784),
  fx('plexi2', 'Marshall PLEXI', 'PLEXI2.ZDL', 'AMP', 'amp', 'Custom', 16, 1080295944),
  fx('jcm800', 'JCM800', 'JCM800.ZDL', 'AMP', 'amp', 'Custom', 15, 1077936392),
  fx('engl', 'ENGL', 'ENGL.ZDL', 'AMP', 'amp', 'Custom', 20, 4194570),
  fx('engl2', 'ENGL2', 'ENGL2.ZDL', 'AMP', 'amp', 'Custom', 20, 4325642),
  fx('cabsim', 'CABSIM', 'CABSIM.ZDL', 'AMP', 'amp', 'Custom', 1, 1048840),
  fx('nam-plexi', 'NAM PLEXI', 'NAMPLEX.ZDL', 'AMP', 'nam', 'NAM Capture'),
  fx('nam-5150', 'NAM 5150', 'NAM5150.ZDL', 'AMP', 'nam', 'NAM Capture'),
  fx('nam-capture', 'NAMLite Capture', 'NAMLITE.ZDL', 'AMP', 'nam', 'NAM Capture'),
  fx('cab-ir', 'CabIR Loader', 'CABIR.ZDL', 'FILTER', 'cab', 'IR Loader'),

  // ── MODULATION (34) ──
  fx('tremolo', 'Tremolo', 'TREMOLO.ZDL', 'MOD', 'mod', 'Factory'),
  fx('phaser', 'Phaser', 'PHASER.ZDL', 'MOD', 'mod', 'Factory'),
  fx('cor-cho', 'Chorus', 'CHORUS.ZDL', 'MOD', 'mod', 'Factory'),
  fx('detune', 'Detune', 'DETUNE.ZDL', 'MOD', 'mod', 'Factory'),
  fx('vintage-ce', 'VintageCE', 'VINTAGCE.ZDL', 'MOD', 'mod', 'Factory'),
  fx('stereo-cho', 'StereoCho', 'STEREOCH.ZDL', 'MOD', 'mod', 'Factory'),
  fx('ensemble', 'Ensemble', 'ENSEMBLE.ZDL', 'MOD', 'mod', 'Factory'),
  fx('vin-flngr', 'VinFLNGR', 'VINFLNGR.ZDL', 'MOD', 'mod', 'Factory'),
  fx('dyna-flngr', 'DynaFLNGR', 'DYNAFLNG.ZDL', 'MOD', 'mod', 'Factory'),
  fx('vibrato', 'Vibrato', 'VIBRATO.ZDL', 'MOD', 'mod', 'Factory'),
  fx('octave', 'Octave', 'OCTAVE.ZDL', 'MOD', 'pitch', 'Factory'),
  fx('pitch-shft', 'PitchSHFT', 'PITCHSHF.ZDL', 'MOD', 'pitch', 'Factory'),
  fx('mono-pitch', 'MonoPitch', 'MONOPTCH.ZDL', 'MOD', 'pitch', 'Factory'),
  fx('hps', 'HPS', 'HPS.ZDL', 'MOD', 'pitch', 'Factory'),
  fx('bend-cho', 'BendCho', 'BEND_CHO.ZDL', 'MOD', 'mod', 'Factory'),
  fx('moj-vibe', 'MojoRoller', 'MOJOROLL.ZDL', 'MOD', 'mod', 'Factory'),
  fx('ring-mod', 'RingMod', 'RING_MOD.ZDL', 'MOD', 'mod', 'Factory'),
  fx('rt-closet', 'Rt Closet', 'RTCLOSET.ZDL', 'MOD', 'mod', 'Factory'),
  fx('super-cho', 'SuperCho', 'SUPERCHO.ZDL', 'MOD', 'mod', 'Effect Manager'),
  fx('corona-tri', 'CoronaTri', 'CORONATR.ZDL', 'MOD', 'mod', 'Effect Manager'),
  fx('clone-cho', 'CloneCho', 'CLONECHO.ZDL', 'MOD', 'mod', 'Effect Manager'),
  fx('ana234-cho', 'Ana234Cho', 'ANA234CH.ZDL', 'MOD', 'mod', 'Effect Manager'),
  fx('mirror-cho', 'MirrorCho', 'MIRRORCH.ZDL', 'MOD', 'mod', 'Effect Manager'),
  fx('stone-phs', 'StonePhs', 'STONEPHS.ZDL', 'MOD', 'mod', 'Effect Manager'),
  fx('warp-phs', 'WarpPhs', 'WARP_PHS.ZDL', 'MOD', 'mod', 'Effect Manager'),
  fx('duo-phase', 'DuoPhase', 'DUOPHASE.ZDL', 'MOD', 'mod', 'Effect Manager'),
  fx('the-vibe', 'TheVibe', 'THE_VIBE.ZDL', 'MOD', 'mod', 'Effect Manager'),
  fx('slicer', 'Slicer', 'SLICER.ZDL', 'MOD', 'mod', 'Effect Manager'),
  fx('duo-trem', 'DuoTrem', 'DUO_TREM.ZDL', 'MOD', 'mod', 'Effect Manager'),
  fx('auto-pan', 'AutoPan', 'AUTO_PAN.ZDL', 'MOD', 'mod', 'Effect Manager'),
  fx('bf-flanger', 'BF FLG 2', 'BF_FLG2.ZDL', 'MOD', 'mod', 'Effect Manager'),
  fx('flanger', 'Flanger', 'FLANGER.ZDL', 'MOD', 'mod', 'Effect Manager'),
  fx('pitch-dly', 'PitchDLY', 'PITCHDLY.ZDL', 'MOD', 'pitch', 'Effect Manager'),
  fx('vibe-rot', 'Rotary', 'ROTARY.ZDL', 'MOD', 'mod', 'Effect Manager'),

  // ── SFX / SYNTH (8) ──
  fx('mono-synth', 'MonoSynth', 'MONOSYNT.ZDL', 'SFX', 'filter', 'Factory'),
  fx('z-organ', 'Z-Organ', 'Z_ORGAN.ZDL', 'SFX', 'mod', 'Factory'),
  fx('bit-crush', 'BitCrush', 'BITCRUSH.ZDL', 'SFX', 'filter', 'Effect Manager'),
  fx('lofi-dly', 'LoFiDly', 'LOFI_DLY.ZDL', 'SFX', 'delay', 'Effect Manager'),
  fx('sitar-sim', 'SitarSim', 'SITARSIM.ZDL', 'SFX', 'filter', 'Effect Manager'),
  fx('defret', 'Defret', 'DEFRET.ZDL', 'SFX', 'filter', 'Effect Manager'),
  fx('syn-talk', 'SynTalk', 'SYNTALK.ZDL', 'SFX', 'filter', 'Effect Manager'),
  fx('osc-echo', 'OscEcho', 'OSC_ECHO.ZDL', 'SFX', 'delay', 'Effect Manager'),

  // ── DELAY (22) ──
  fx('delay', 'Delay', 'DELAY.ZDL', 'DELAY', 'delay', 'Factory'),
  fx('tape-echo', 'TapeEcho', 'TAPEECHO.ZDL', 'DELAY', 'delay', 'Factory'),
  fx('mod-delay', 'ModDelay', 'MODDELAY.ZDL', 'DELAY', 'delay', 'Factory'),
  fx('analog-dly', 'AnalogDLY', 'ANALOGDL.ZDL', 'DELAY', 'delay', 'Factory'),
  fx('reverse-dl', 'ReverseDL', 'REVERSED.ZDL', 'DELAY', 'delay', 'Factory'),
  fx('multi-tapd', 'MultiTapD', 'MULTITAP.ZDL', 'DELAY', 'delay', 'Factory'),
  fx('dyna-delay', 'DynaDelay', 'DYNADLY.ZDL', 'DELAY', 'delay', 'Factory'),
  fx('filter-dly', 'FilterDly', 'FLTR_DLY.ZDL', 'DELAY', 'delay', 'Factory'),
  fx('smooth-dly', 'SmoothDly', 'SMOOTHDL.ZDL', 'DELAY', 'delay', 'Effect Manager'),
  fx('stomp-dly', 'StompDly', 'STOMPDLY.ZDL', 'DELAY', 'delay', 'Effect Manager'),
  fx('stereo-dly', 'StereoDly', 'STEREODL.ZDL', 'DELAY', 'delay', 'Effect Manager'),
  fx('carbon-dly', 'CarbonDly', 'CARBOND.ZDL', 'DELAY', 'delay', 'Effect Manager'),
  fx('tape-echo3', 'TapeEcho3', 'TAPEECH3.ZDL', 'DELAY', 'delay', 'Effect Manager'),
  fx('drive-echo', 'DriveEcho', 'DRVECHO.ZDL', 'DELAY', 'delay', 'Effect Manager'),
  fx('slapback-d', 'SlapBackD', 'SLAPBACK.ZDL', 'DELAY', 'delay', 'Effect Manager'),
  fx('dual-dly', 'DualDLY', 'DUAL_DLY.ZDL', 'DELAY', 'dualDelay', 'Effect Manager'),
  fx('ice-delay', 'IceDelay', 'ICE_DLY.ZDL', 'DELAY', 'delay', 'Effect Manager'),
  fx('tremolo-dl', 'TremoloDL', 'TREMDLY.ZDL', 'DELAY', 'delay', 'Effect Manager'),
  fx('phase-dly', 'PhaseDly', 'PHASEDLY.ZDL', 'DELAY', 'delay', 'Effect Manager'),
  fx('slow-atk-d', 'SlowAtkDL', 'SLWATKDL.ZDL', 'DELAY', 'delay', 'Effect Manager'),
  fx('soft-echo', 'SoftEcho', 'SOFTECHO.ZDL', 'DELAY', 'delay', 'Effect Manager'),
  fx('hold-dly', 'HoldDLY', 'HOLD_DLY.ZDL', 'DELAY', 'delay', 'Effect Manager'),

  // ── REVERB (22) ──
  fx('hd-reverb', 'HD Reverb', 'HD_VERB.ZDL', 'REVERB', 'reverb', 'Factory'),
  fx('hd-hall', 'HD Hall', 'HD_HALL.ZDL', 'REVERB', 'reverb', 'Factory'),
  fx('spring', 'Spring', 'SPRING.ZDL', 'REVERB', 'reverb', 'Factory'),
  fx('hall', 'Hall', 'HALL.ZDL', 'REVERB', 'reverb', 'Factory'),
  fx('room', 'Room', 'ROOM.ZDL', 'REVERB', 'reverb', 'Factory'),
  fx('tiled-room', 'TiledRoom', 'TILED_RM.ZDL', 'REVERB', 'reverb', 'Factory'),
  fx('ambience', 'Ambience', 'AMBIENCE.ZDL', 'REVERB', 'reverb', 'Factory'),
  fx('arena', 'Arena', 'ARENA.ZDL', 'REVERB', 'reverb', 'Factory'),
  fx('plate', 'Plate', 'PLATE.ZDL', 'REVERB', 'reverb', 'Factory'),
  fx('early-ref', 'EarlyRef', 'EARLYREF.ZDL', 'REVERB', 'reverb', 'Factory'),
  fx('air', 'Air', 'AIR.ZDL', 'REVERB', 'reverb', 'Factory'),
  fx('church', 'Church', 'CHURCH.ZDL', 'REVERB', 'reverb', 'Effect Manager'),
  fx('chamber', 'Chamber', 'CHAMBER.ZDL', 'REVERB', 'reverb', 'Effect Manager'),
  fx('cave', 'Cave', 'CAVE.ZDL', 'REVERB', 'reverb', 'Effect Manager'),
  fx('spring-63', 'Spring63', 'SPRING63.ZDL', 'REVERB', 'reverb', 'Effect Manager'),
  fx('mod-reverb', 'ModReverb', 'MOD_VERB.ZDL', 'REVERB', 'reverb', 'Effect Manager'),
  fx('shimmer-rv', 'ShimmerRV', 'SHIMMERV.ZDL', 'REVERB', 'reverb', 'Effect Manager'),
  fx('particle-r', 'ParticleR', 'PARTICLR.ZDL', 'REVERB', 'reverb', 'Effect Manager'),
  fx('space-hole', 'SpaceHole', 'SPACEHOL.ZDL', 'REVERB', 'reverb', 'Effect Manager'),
  fx('mangl-verb', 'ManglVerb', 'MANGLVRB.ZDL', 'REVERB', 'reverb', 'Effect Manager'),
  fx('dual-verb', 'DualVerb', 'DUALVERB.ZDL', 'REVERB', 'reverb', 'Effect Manager'),
  fx('gate-verb', 'GateVerb', 'GATEVERB.ZDL', 'REVERB', 'reverb', 'Effect Manager'),
];

export const EFFECT_CATEGORIES = [
  'ALL',
  'DYNAMICS',
  'FILTER',
  'DRIVE',
  'AMP',
  'MOD',
  'SFX',
  'DELAY',
  'REVERB',
];

const MODEL_ICON_MAP = {
  // Dynamics
  'comp': 'assets/icons/pedal-dynacomp.png',
  'rack-comp': 'assets/icons/pedal-dynacomp.png',
  'm-comp': 'assets/icons/pedal-dynacomp.png',
  '160-comp': 'assets/icons/pedal-dynacomp.png',
  'opt-comp': 'assets/icons/dynamics.png',
  'znr': 'assets/icons/pedal-gate.png',
  'noise-gate': 'assets/icons/pedal-gate.png',
  'dirty-gate': 'assets/icons/pedal-gate.png',
  'line-sel': 'assets/icons/pedal-gate.png',
  'limiter': 'assets/icons/pedal-gate.png',
  'slow-attck': 'assets/icons/dynamics.png',
  'exciter': 'assets/icons/dynamics.png',
  'rc-boost': 'assets/icons/pedal-distplus.png',

  // Filter / Wah / EQ
  'cry': 'assets/icons/pedal-wah.png',
  'auto-wah': 'assets/icons/pedal-wah.png',
  'z-tron': 'assets/icons/pedal-wah.png',
  'm-filter': 'assets/icons/pedal-wah.png',
  'a-filter': 'assets/icons/pedal-wah.png',
  'geq': 'assets/icons/filter.png',
  'para-eq': 'assets/icons/filter.png',
  'low-eq': 'assets/icons/filter.png',
  'gt-geq7': 'assets/icons/filter.png',
  'st-gt-geq': 'assets/icons/filter.png',
  'isolator': 'assets/icons/filter.png',

  // Overdrive / Distortion / Fuzz
  't-scream': 'assets/icons/pedal-ts9.png',
  'ts-drive': 'assets/icons/pedal-ts9.png',
  'z-scream': 'assets/icons/pedal-ts9.png',
  'centa-gold': 'assets/icons/pedal-klon.png',
  'gold-drive': 'assets/icons/pedal-klon.png',
  'overdrive': 'assets/icons/pedal-boss-od.png',
  'sweet-drv': 'assets/icons/pedal-boss-od.png',
  'dynamic-drv': 'assets/icons/pedal-boss-od.png',
  'dist-1': 'assets/icons/pedal-boss-ds.png',
  'red-crunch': 'assets/icons/pedal-boss-ds.png',
  'hot-box': 'assets/icons/pedal-boss-ds.png',
  'blues-drv': 'assets/icons/pedal-boss-bd.png',
  'metal-wld': 'assets/icons/pedal-boss-mt.png',
  'metal-zone': 'assets/icons/pedal-boss-mt.png',
  'extreme-ds': 'assets/icons/pedal-boss-mt.png',
  'dark-pre': 'assets/icons/pedal-boss-mt.png',
  'squeak': 'assets/icons/pedal-rat.png',
  'great-muff': 'assets/icons/pedal-muff.png',
  'nyc-muff': 'assets/icons/pedal-muff.png',
  'oct-fuzz': 'assets/icons/pedal-muff.png',
  'tb-mk15': 'assets/icons/pedal-muff.png',
  'fuzz-smile': 'assets/icons/pedal-fuzzface.png',
  'dist-plus': 'assets/icons/pedal-distplus.png',
  'booster': 'assets/icons/pedal-distplus.png',
  'd-boost': 'assets/icons/pedal-distplus.png',
  'spot-boost': 'assets/icons/pedal-distplus.png',
  'ep-stomp': 'assets/icons/pedal-distplus.png',
  'governor': 'assets/icons/pedal-rat.png',
  'z-wild': 'assets/icons/pedal-boss-od.png',
  'lead-rhy': 'assets/icons/pedal-boss-ds.png',
  'bg-throttle': 'assets/icons/pedal-boss-mt.png',
  'ac-sim': 'assets/icons/pedal-dd.png',

  // Amplifiers
  'fd-combo': 'assets/icons/amp-fender-blackface.png',
  'deluxe-r': 'assets/icons/amp-fender-blackface.png',
  'fd-vibro': 'assets/icons/amp-fender-blackface.png',
  'us-blues': 'assets/icons/amp-fender-tweed.png',
  'b-man': 'assets/icons/amp-fender-tweed.png',
  'ms-1959': 'assets/icons/amp-marshall.png',
  'ms-crunch': 'assets/icons/amp-marshall.png',
  'ms-drive': 'assets/icons/amp-marshall.png',
  'b-breaker': 'assets/icons/amp-marshall.png',
  'hw-stack': 'assets/icons/amp-marshall.png',
  'vx-combo': 'assets/icons/amp-vox.png',
  'vx-jmi': 'assets/icons/amp-vox.png',
  'match-30': 'assets/icons/amp-vox.png',
  'car-drive': 'assets/icons/amp-vox.png',
  'tangerine': 'assets/icons/amp-orange.png',
  'bg-drive': 'assets/icons/amp-mesa.png',
  'bg-crunch': 'assets/icons/amp-mesa.png',
  'dz-drive': 'assets/icons/amp-mesa.png',
  'alien': 'assets/icons/amp-mesa.png',
  'revo-1': 'assets/icons/amp-mesa.png',
  'tw-rock': 'assets/icons/amp-boutique.png',
  'tone-city': 'assets/icons/amp-boutique.png',

  // Modulation
  'cor-cho': 'assets/icons/pedal-ce1.png',
  'vintage-ce': 'assets/icons/pedal-ce1.png',
  'stereo-cho': 'assets/icons/pedal-ce1.png',
  'super-cho': 'assets/icons/pedal-ce1.png',
  'clone-cho': 'assets/icons/pedal-ce1.png',
  'corona-tri': 'assets/icons/pedal-ce1.png',
  'ana234-cho': 'assets/icons/pedal-ce1.png',
  'mirror-cho': 'assets/icons/pedal-ce1.png',
  'ensemble': 'assets/icons/pedal-ce1.png',
  'bend-cho': 'assets/icons/pedal-ce1.png',
  'phaser': 'assets/icons/pedal-phase90.png',
  'stone-phs': 'assets/icons/pedal-phase90.png',
  'warp-phs': 'assets/icons/pedal-phase90.png',
  'duo-phase': 'assets/icons/pedal-phase90.png',
  'tremolo': 'assets/icons/pedal-tremolo.png',
  'duo-trem': 'assets/icons/pedal-tremolo.png',
  'slicer': 'assets/icons/pedal-tremolo.png',
  'auto-pan': 'assets/icons/pedal-tremolo.png',
  'vibrato': 'assets/icons/pedal-tremolo.png',
  'octave': 'assets/icons/pedal-pitch.png',
  'pitch-shft': 'assets/icons/pedal-pitch.png',
  'mono-pitch': 'assets/icons/pedal-pitch.png',
  'hps': 'assets/icons/pedal-pitch.png',
  'detune': 'assets/icons/pedal-pitch.png',
  'pitch-dly': 'assets/icons/pedal-pitch.png',
  'ring-mod': 'assets/icons/pedal-pitch.png',

  // Delays
  'tape-echo': 'assets/icons/pedal-tapeecho.png',
  'tape-echo3': 'assets/icons/pedal-tapeecho.png',
  'soft-echo': 'assets/icons/pedal-tapeecho.png',
  'drive-echo': 'assets/icons/pedal-tapeecho.png',
  'carbon-dly': 'assets/icons/pedal-carbon.png',
  'analog-dly': 'assets/icons/pedal-carbon.png',
  'slapback-d': 'assets/icons/pedal-carbon.png',
  'delay': 'assets/icons/pedal-dd.png',
  'smooth-dly': 'assets/icons/pedal-dd.png',
  'stomp-dly': 'assets/icons/pedal-dd.png',
  'stereo-dly': 'assets/icons/pedal-dd.png',
  'dual-dly': 'assets/icons/pedal-dd.png',
  'multi-tapd': 'assets/icons/pedal-dd.png',
  'dyna-delay': 'assets/icons/pedal-dd.png',
  'mod-delay': 'assets/icons/pedal-dd.png',
  'reverse-dl': 'assets/icons/pedal-dd.png',
  'ice-delay': 'assets/icons/pedal-bluesky.png',

  // Reverbs
  'hd-reverb': 'assets/icons/pedal-bluesky.png',
  'hd-hall': 'assets/icons/pedal-bluesky.png',
  'shimmer-rv': 'assets/icons/pedal-bluesky.png',
  'particle-r': 'assets/icons/pedal-bluesky.png',
  'space-hole': 'assets/icons/pedal-bluesky.png',
  'mod-reverb': 'assets/icons/pedal-bluesky.png',
  'church': 'assets/icons/pedal-bluesky.png',
  'dual-verb': 'assets/icons/pedal-bluesky.png',
  'mangl-verb': 'assets/icons/pedal-bluesky.png',
  'spring': 'assets/icons/pedal-rv.png',
  'spring-63': 'assets/icons/pedal-rv.png',
  'plate': 'assets/icons/pedal-rv.png',
  'hall': 'assets/icons/pedal-rv.png',
  'room': 'assets/icons/pedal-rv.png',
  'tiled-room': 'assets/icons/pedal-rv.png',
  'ambience': 'assets/icons/pedal-rv.png',
  'arena': 'assets/icons/pedal-rv.png',
  'early-ref': 'assets/icons/pedal-rv.png',
  'air': 'assets/icons/pedal-rv.png',
  'chamber': 'assets/icons/pedal-rv.png',
  'cave': 'assets/icons/pedal-rv.png',
  'gate-verb': 'assets/icons/pedal-rv.png',

  // Custom & Community Models / NAM / IR
  'plexi': 'assets/icons/amp-marshall.png',
  'plexi2': 'assets/icons/amp-marshall.png',
  'marshall-plexi': 'assets/icons/amp-marshall.png',
  'jcm800': 'assets/icons/amp-marshall.png',
  'engl': 'assets/icons/amp-mesa.png',
  'engl2': 'assets/icons/amp-mesa.png',
  'cabsim': 'assets/icons/cab.png',
  'nam-plexi': 'assets/icons/amp-marshall.png',
  'nam-5150': 'assets/icons/amp-orange.png',
  'nam-capture': 'assets/icons/amp.png',
  'cab-ir': 'assets/icons/cab.png',
};

export function getEffectIcon(def) {
  if (!def || def.id === 'empty') return null;
  if (MODEL_ICON_MAP[def.id]) return MODEL_ICON_MAP[def.id];
  const lowerName = (def.name || '').toLowerCase();
  if (lowerName.includes('plexi') || lowerName.includes('1959') || lowerName.includes('marshall') || lowerName.includes('jcm')) {
    return 'assets/icons/amp-marshall.png';
  }
  if (lowerName.includes('engl')) {
    return 'assets/icons/amp-mesa.png';
  }
  if (lowerName.includes('nam') || lowerName.includes('capture')) {
    return 'assets/icons/amp.png';
  }
  if (lowerName.includes('cab') || lowerName.includes('ir')) {
    return 'assets/icons/cab.png';
  }
  return CATEGORY_ICONS[def.category] || null;
}

export function getCabIcon(cabIndex) {
  const idx = cabIndex > 22 ? cabRawToIndex(cabIndex) : cabIndex;
  const label = MS50G_CABS[idx] || 'OFF';
  if (/TANGERINE/i.test(label)) return 'assets/icons/cab-4x12-orange.png';
  if (/VX COMBO|VX JMI/i.test(label)) return 'assets/icons/cab-2x12-diamond.png';
  if (/US BLUES|B-MAN|VIBRO/i.test(label)) return 'assets/icons/cab-4x10-tweed.png';
  if (/2x12/i.test(label)) return 'assets/icons/cab-2x12-silver.png';
  if (/1x12/i.test(label)) return 'assets/icons/cab-1x12.png';
  return 'assets/icons/cab-4x12.png';
}
