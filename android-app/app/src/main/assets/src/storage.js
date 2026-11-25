const KEYS = {
  SCENES: 'zsd_scenes_v1',
  SETTINGS: 'zsd_settings_v2',
  PRESET_CACHE: 'zsd_preset_cache_v1',
};

export const DEFAULT_SETTINGS = {
  model: 'MS-50G',
  mockMode: true,
  ccMap: {
    bankPrev: 24,
    bankNext: 25,
    modeCycle: 29,
  },
  chocolate: {
    // 'scenes-ef-patch': A–D = Scenes 1–4, E (A+B) = Patch Down, F (C+D) = Patch Up
    // 'custom': follows active mode tab (Preset / Stomp / Scenes) with custom CC/PC table
    layout: 'scenes-ef-patch',
    autoConfigureOnConnect: true,
    lastConfiguredPort: null,
    switches: [
      { type: 'cc', num: 20 }, // A
      { type: 'cc', num: 21 }, // B
      { type: 'cc', num: 22 }, // C
      { type: 'cc', num: 23 }, // D
    ],
    // Customizable 0-based slot targets when in STOMP mode:
    // A -> Slot 1 (Comp), B -> Slot 2 (Drive), C -> Slot 4 (Mod), D -> Slot 5 (Delay)
    stompSlots: [0, 1, 3, 4],
  },
};

export function loadSettings() {
  try {
    const raw = typeof localStorage !== 'undefined' ? localStorage.getItem(KEYS.SETTINGS) : null;
    if (!raw) return structuredClone(DEFAULT_SETTINGS);
    const parsed = JSON.parse(raw);
    const switches =
      Array.isArray(parsed.chocolate?.switches) && parsed.chocolate.switches.length === 4
        ? parsed.chocolate.switches
        : structuredClone(DEFAULT_SETTINGS.chocolate.switches);
    const stompSlots =
      Array.isArray(parsed.chocolate?.stompSlots) && parsed.chocolate.stompSlots.length === 4
        ? parsed.chocolate.stompSlots
        : [...DEFAULT_SETTINGS.chocolate.stompSlots];

    const ccMap = {
      ...DEFAULT_SETTINGS.ccMap,
      ...(parsed.ccMap || {}),
    };
    if (ccMap.modeCycle === 24) {
      ccMap.modeCycle = 29; // Migrate old default away from Switch E
    }

    return {
      ...DEFAULT_SETTINGS,
      ...parsed,
      ccMap,
      chocolate: {
        ...DEFAULT_SETTINGS.chocolate,
        ...(parsed.chocolate || {}),
        switches,
        stompSlots,
      },
    };
  } catch {
    return structuredClone(DEFAULT_SETTINGS);
  }
}

export function saveSettings(settings) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(KEYS.SETTINGS, JSON.stringify(settings));
    }
  } catch {
    // Ignore storage quota errors
  }
}

export function loadAllScenes() {
  try {
    const raw = typeof localStorage !== 'undefined' ? localStorage.getItem(KEYS.SCENES) : null;
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveAllScenes(scenesByKey) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(KEYS.SCENES, JSON.stringify(scenesByKey));
    }
  } catch {
    // Ignore storage quota errors
  }
}

export function clearAllScenes() {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(KEYS.SCENES);
    }
  } catch {
    // Ignore
  }
}

export function loadPresetCache(model = 'MS-50G') {
  try {
    if (typeof localStorage === 'undefined') return null;
    const raw = localStorage.getItem(`${KEYS.PRESET_CACHE}_${model}`);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function savePresetCache(model, presets) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(`${KEYS.PRESET_CACHE}_${model}`, JSON.stringify(presets));
    }
  } catch {
    // Ignore quota errors
  }
}

export function saveSinglePresetToCache(model, patchIndex, preset) {
  try {
    const all = loadPresetCache(model) || {};
    all[patchIndex] = preset;
    savePresetCache(model, all);
  } catch {
    // Ignore
  }
}

export function defaultScenesForPreset(preset) {
  const baseStates = preset.slots.map((s) => Boolean(s.enabled));
  const baseValues = preset.slots.map((s) => (Array.isArray(s.values) ? [...s.values] : []));
  const baseEffectIds = preset.slots.map((s) => s.effectId);
  const cloneVals = () => baseValues.map((v) => [...v]);
  return [
    {
      name: 'Clean Base',
      states: [baseStates[0], false, baseStates[2], false, false, true],
      slotValues: cloneVals(),
      effectIds: [...baseEffectIds],
    },
    {
      name: 'Rhythm',
      states: [...baseStates],
      slotValues: cloneVals(),
      effectIds: [...baseEffectIds],
    },
    {
      name: 'Lead Boost',
      states: [true, true, true, baseStates[3], true, true],
      slotValues: cloneVals(),
      effectIds: [...baseEffectIds],
    },
    {
      name: 'Ambient',
      states: [baseStates[0], false, baseStates[2], true, true, true],
      slotValues: cloneVals(),
      effectIds: [...baseEffectIds],
    },
  ];
}
