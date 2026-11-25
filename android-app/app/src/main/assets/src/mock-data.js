import {
  CATEGORY_COLORS,
  CATEGORY_ICONS,
  EFFECT_CATEGORIES,
  MS50G_EFFECTS,
  getCabIcon,
  getEffectIcon,
  CAB_INDEX_TO_RAW,
  cabRawToIndex,
  cabIndexToRaw,
} from './ms50g-effects.js';
import { ZOOM_EFFECT_DB, getEffectByMidiId, getExactDeviceDsp } from './zoom-effects-db.js';
import { CUSTOM_COMMUNITY_EFFECTS } from './custom-effects-db.js';

export {
  CATEGORY_COLORS,
  CATEGORY_ICONS,
  EFFECT_CATEGORIES,
  getCabIcon,
  getEffectIcon,
  getExactDeviceDsp,
  CAB_INDEX_TO_RAW,
  cabRawToIndex,
  cabIndexToRaw,
};
export const EFFECT_LIBRARY = MS50G_EFFECTS;

const SLUG_TO_MIDI_ID = {
  'low-eq': 260,
  'lpf': 260,
  'gt-geq7': 1077936388,
  'isolator': 2097412,
  'lead-rhy': 4194822,
  'bg-throttle': 774,
  'dynamic-drv': 2098182,
  'ep-stomp': 1048582,
  'gold-drive': 1075839494,
  'dark-pre': 1075839002,
  'metal-zone': 2097414,
  'blues-drv': 2097158,
  'd-boost': 1048582,
  'spot-boost': 1048582,
  'mirror-cho': 1075839756,
  'stone-phs': 4195084,
  'warp-phs': 7602188,
  'vibe-rot': 1075839244,
  'sitar-sim': 4194572,
  'syn-talk': 270,
  'dual-dly': 1077936400,
  'slow-atk-d': 1073742096,
  'hold-dly': 1075839248,
  'mangl-verb': 6292242,
  'dual-verb': 1073742610,
  'gate-verb': 4194834,
};

// Initialize midiIds and exact device DSP on EFFECT_LIBRARY
const dbList = Object.values(ZOOM_EFFECT_DB);
EFFECT_LIBRARY.forEach((ef) => {
  if (ef.id === 'empty') {
    ef.midiId = 0;
    ef.dsp = 0;
    return;
  }
  if (SLUG_TO_MIDI_ID[ef.id]) {
    ef.midiId = SLUG_TO_MIDI_ID[ef.id];
  }
  const norm = ef.name.toLowerCase().replace(/[^a-z0-9]/g, '');
  let found = ef.midiId ? (ZOOM_EFFECT_DB[ef.midiId] || CUSTOM_COMMUNITY_EFFECTS[ef.midiId]) : null;
  if (!found) {
    found = dbList.find((k) => k.name.toLowerCase().replace(/[^a-z0-9]/g, '') === norm);
  }
  if (!found) {
    found = dbList.find((k) => {
      const kNorm = k.name.toLowerCase().replace(/[^a-z0-9]/g, '');
      return kNorm.includes(norm) || norm.includes(kNorm);
    });
  }
  if (found) {
    ef.midiId = found.midiId || ef.midiId;
    ef.dsp = getExactDeviceDsp(found.dsp);
    // CRITICAL: Always inherit full, bit-accurate hardware parameters from ZOOM_EFFECT_DB
    // so effects with Level/Tail/Tone/etc. are never truncated, preventing pedal muting!
    if (found.params && found.params.length > 0) {
      ef.params = found.params.map((p) => {
        const pCopy = { ...p };
        // Default Tail to 1 (ON) on delays/reverbs so bypass doesn't cut delay tails
        if (pCopy.name === 'Tail' || pCopy.name === 'TAIL') {
          pCopy.default = 1;
        }
        return pCopy;
      });
    }
    if (found.category) ef.category = found.category;
    if (found.title) ef.title = found.title;
  } else {
    ef.dsp = getExactDeviceDsp(ef.dsp);
  }
});

// Build fast lookup by normalized name
const LIBRARY_BY_NORM_NAME = new Map();
EFFECT_LIBRARY.forEach((ef) => {
  const norm = ef.name.toLowerCase().replace(/[^a-z0-9]/g, '');
  LIBRARY_BY_NORM_NAME.set(norm, ef);
});

export function getEffectDef(effectId) {
  if (!effectId || effectId === 'empty' || effectId === 0) {
    return EFFECT_LIBRARY[0];
  }

  // Normalize string ID if prefixed by custom-0x or zoom-0x or custom-amp- or custom-drive-
  let rawId = effectId;
  if (typeof effectId === 'string') {
    if (effectId.startsWith('custom-0x') || effectId.startsWith('zoom-0x')) {
      rawId = effectId.replace(/^(custom|zoom)-/, '');
    } else if (effectId.startsWith('custom-amp-') || effectId.startsWith('custom-drive-') || effectId.startsWith('custom-delay-') || effectId.startsWith('custom-reverb-') || effectId.startsWith('custom-mod-') || effectId.startsWith('custom-dyn-') || effectId.startsWith('custom-fltr-') || effectId.startsWith('custom-sfx-')) {
      rawId = effectId.replace(/^custom-[a-z]+-/, '');
    } else if (/^nam-slot-(\d+)$/i.test(effectId)) {
      const slotNum = parseInt(effectId.match(/^nam-slot-(\d+)$/i)[1], 10);
      const fxid = (slotNum >= 1 && slotNum <= 8) ? (899 + slotNum) : (slotNum <= 16 ? 941 + slotNum : 483 + slotNum);
      rawId = (((fxid & 63) << 17) | (((fxid >> 6) & 1) << 30) | (((fxid >> 7) & 7) << 8) | (8 << 1)) >>> 0;
    } else if (/^cab-slot-(\d+)$/i.test(effectId)) {
      const slotNum = parseInt(effectId.match(/^cab-slot-(\d+)$/i)[1], 10);
      const fxid = (slotNum >= 1 && slotNum <= 16) ? (929 + slotNum) : (683 + slotNum);
      rawId = (((fxid & 63) << 17) | (((fxid >> 6) & 1) << 30) | (((fxid >> 7) & 7) << 8) | (8 << 1)) >>> 0;
    }
  }

  // 1. Numeric ID or hex string (e.g. 0x00300002 or "0x00300002")
  const isHexOrNum =
    typeof rawId === 'number' ||
    (typeof rawId === 'string' && (/^0x[0-9a-fA-F]+$/i.test(rawId) || /^\d+$/.test(rawId)));

  if (isHexOrNum) {
    const numId = typeof rawId === 'number'
      ? rawId
      : (rawId.startsWith('0x') || rawId.startsWith('0X'))
      ? parseInt(rawId, 16)
      : Number(rawId);

    if (numId === 0) return EFFECT_LIBRARY[0];

    // Check in EFFECT_LIBRARY by midiId
    const byMidi = EFFECT_LIBRARY.find((e) => e.midiId === numId);
    if (byMidi) {
      const fromDb = getEffectByMidiId(numId);
      if (fromDb && fromDb.params && fromDb.params.length > byMidi.params.length) {
        byMidi.params = fromDb.params.map((p) => ({ ...p }));
      }
      return byMidi;
    }

    // Check in ZOOM_EFFECT_DB
    const fromDb = getEffectByMidiId(numId);
    if (fromDb && fromDb.name) {
      const normDb = fromDb.name.toLowerCase().replace(/[^a-z0-9]/g, '');
      const byName = LIBRARY_BY_NORM_NAME.get(normDb);
      if (byName) {
        byName.midiId = numId;
        byName.dsp = getExactDeviceDsp(fromDb.dsp);
        if (fromDb.params && fromDb.params.length > 0) {
          byName.params = fromDb.params.map((p) => ({ ...p }));
        }
        return byName;
      }
      return {
        ...fromDb,
        dsp: getExactDeviceDsp(fromDb.dsp),
      };
    }
  }

  // 2. Lookup by id slug in EFFECT_LIBRARY
  const byId = EFFECT_LIBRARY.find((e) => e.id === effectId);
  if (byId) {
    if (byId.midiId) {
      const fromDb = getEffectByMidiId(byId.midiId);
      if (fromDb && fromDb.params && fromDb.params.length > byId.params.length) {
        byId.params = fromDb.params.map((p) => ({ ...p }));
      }
    }
    return byId;
  }

  // 3. Lookup by normalized name
  const normSearch = String(effectId).toLowerCase().replace(/[^a-z0-9]/g, '');
  const byName = LIBRARY_BY_NORM_NAME.get(normSearch);
  if (byName) return byName;

  // 4. Aliases for common community amps and models
  if (typeof effectId === 'string') {
    const lower = effectId.toLowerCase();
    if (lower.includes('plexi')) {
      const plexi = EFFECT_LIBRARY.find((e) => e.id === 'plexi2' || e.id === 'plexi' || e.id === 'ms-1959');
      if (plexi) return plexi;
    }
    if (lower.includes('jcm')) {
      const jcm = EFFECT_LIBRARY.find((e) => e.id === 'jcm800' || e.id === 'ms-crunch');
      if (jcm) return jcm;
    }
    if (lower.includes('engl')) {
      const engl = EFFECT_LIBRARY.find((e) => e.id === 'engl' || e.id === 'alien');
      if (engl) return engl;
    }
    if (lower.includes('nam')) {
      const nam = EFFECT_LIBRARY.find((e) => e.id === 'nam-capture' || e.id === 'nam-plexi');
      if (nam) return nam;
    }
    if (lower.includes('cabir') || lower.includes('ir-loader')) {
      const cab = EFFECT_LIBRARY.find((e) => e.id === 'cab-ir');
      if (cab) return cab;
    }
  }

  return EFFECT_LIBRARY[0];
}

export function createSlotFromEffect(effectId, enabled = true, overrides = {}) {
  const def = getEffectDef(effectId);
  return {
    effectId: def.id,
    midiId: def.midiId || (typeof effectId === 'number' ? effectId : 0),
    enabled,
    values: def.params.map((p) => {
      if (overrides[p.name] !== undefined) return overrides[p.name];
      if (p.name === 'Tail' || p.name === 'TAIL') return 1;
      return p.default;
    }),
  };
}

const PRESET_TEMPLATES = {
  'MS-50G': [
    { name: 'Warm Clean', chain: [['opt-comp', 1], ['rc-boost', 0], ['fd-combo', 1], ['stereo-cho', 0], ['tape-echo', 1], ['empty', 0]] },
    { name: 'Edge Breakup', chain: [['comp', 1], ['t-scream', 1], ['ms-crunch', 1], ['tremolo', 0], ['carbon-dly', 1], ['hall', 1]] },
    { name: 'Modern Lead', chain: [['znr', 1], ['t-scream', 1], ['dz-drive', 1], ['graphic-eq', 0], ['tape-echo', 1], ['hall', 1]] },
    { name: 'Brit Rock', chain: [['znr', 1], ['t-scream', 1], ['ms-1959', 1], ['geq', 0], ['analog-dly', 1], ['room', 1]] },
    { name: 'Funk Pocket', chain: [['m-comp', 1], ['auto-wah', 1], ['para-eq', 1], ['vx-combo', 1], ['tremolo', 0], ['room', 1]] },
    { name: 'Indie Jangle', chain: [['comp', 1], ['blues-drv', 0], ['vx-combo', 1], ['vintage-ce', 1], ['mod-delay', 1], ['room', 1]] },
    { name: 'Surf Trem', chain: [['comp', 1], ['fd-vibro', 1], ['duo-trem', 1], ['slapback-d', 0], ['spring', 1], ['empty', 0]] },
    { name: 'Ambient Space (High DSP)', chain: [['opt-comp', 1], ['para-eq', 1], ['corona-tri', 1], ['ice-delay', 1], ['shimmer-rv', 1], ['space-hole', 1]] },
  ],
  'MS-70CDR': [
    { name: 'Lush Stereo', chain: [['opt-comp', 1], ['stereo-cho', 1], ['tape-echo', 1], ['hall', 1], ['shimmer-rv', 0], ['empty', 0]] },
    { name: '80s Dimension', chain: [['comp', 1], ['vintage-ce', 1], ['stone-phs', 0], ['stereo-dly', 1], ['room', 1], ['empty', 0]] },
    { name: 'Analog Echoes', chain: [['para-eq', 1], ['tremolo', 1], ['tape-echo3', 1], ['analog-dly', 1], ['spring', 1], ['empty', 0]] },
    { name: 'Phaser Dream', chain: [['comp', 1], ['duo-phase', 1], ['clone-cho', 0], ['mod-delay', 1], ['early-ref', 1], ['empty', 0]] },
    { name: 'Minimal Plate', chain: [['para-eq', 1], ['smooth-dly', 0], ['plate', 1], ['empty', 0], ['empty', 0], ['empty', 0]] },
    { name: 'Cloud Shimmer (High DSP)', chain: [['para-eq', 1], ['corona-tri', 1], ['carbon-dly', 1], ['ice-delay', 1], ['shimmer-rv', 1], ['space-hole', 1]] },
  ],
  'MS-60B': [
    { name: 'Studio Clean', chain: [['160-comp', 1], ['para-eq', 1], ['b-man', 1], ['stereo-cho', 0], ['room', 0], ['empty', 0]] },
    { name: 'Funk Slap', chain: [['m-comp', 1], ['z-tron', 1], ['geq', 1], ['b-man', 1], ['empty', 0], ['empty', 0]] },
    { name: 'Grit Drive', chain: [['znr', 1], ['dark-pre', 1], ['b-man', 1], ['low-eq', 1], ['empty', 0], ['empty', 0]] },
    { name: 'Chorus Fretless', chain: [['opt-comp', 1], ['b-man', 1], ['super-cho', 1], ['analog-dly', 0], ['room', 1], ['empty', 0]] },
  ],
};

export function generateMockPresets(model = 'MS-50G') {
  const templates = PRESET_TEMPLATES[model] || PRESET_TEMPLATES['MS-50G'];
  const presets = [];
  for (let i = 0; i < 50; i++) {
    const tpl = templates[i % templates.length];
    const variant = Math.floor(i / templates.length);
    const suffix = variant === 0 ? '' : ` ${variant + 1}`;
    presets.push({
      index: i,
      name: `${tpl.name}${suffix}`,
      slots: tpl.chain.map(([effectId, on]) => createSlotFromEffect(effectId, Boolean(on))),
    });
  }
  return presets;
}
