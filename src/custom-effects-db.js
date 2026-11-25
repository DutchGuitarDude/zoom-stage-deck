// Custom & Community MultiStomp Effects Database
// Sideloaded Amps (Marshall Plexi, JCM800, ENGL), Neural Amp Modeler (NAM), CabIR loaders,
// and custom effects by themanro and community.

export const STANDARD_CABS = [
  'OFF', 'FD COMBO 2x12', 'DELUXE-R 1x12', 'FD VIBRO 2x10', 'US BLUES 4x10',
  'VX COMBO 2x12', 'VX JMI 2x12', 'BG CRUNCH 1x12', 'MATCH 30 2x12', 'CAR DRIVE 1x12',
  'TW ROCK 2x12', 'TONE CITY 4x12', 'HW STACK 4x12', 'TANGERINE 4x12', 'B-BREAKER 2x12',
  'MS CRUNCH 4x12', 'MS 1959 4x12', 'MS DRIVE 4x12', 'BG DRIVE 4x12', 'DZ DRIVE 4x12',
  'ALIEN 4x12', 'REVO-1 4x12', 'B-MAN 4x10'
];

export const STANDARD_OUTS = ['LINE', 'COMBO FRONT', 'STACK FRONT', 'COMBO PWR AMP', 'STACK PWR AMP'];

export const CUSTOM_COMMUNITY_EFFECTS = {
  "526096": {
    "midiId": 526096,
    "hexId": "0x00080710",
    "fxid": 900,
    "gid": 8,
    "name": "NAMLite — capture 1",
    "category": "AMP",
    "title": "Neural Amp Modeler Capture #1",
    "dsp": 39,
    "params": [
      {
        "name": "Input",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Output",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Treb",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Gate",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "657168": {
    "midiId": 657168,
    "hexId": "0x000a0710",
    "fxid": 901,
    "gid": 8,
    "name": "NAMLite — capture 2",
    "category": "AMP",
    "title": "Neural Amp Modeler Capture #2",
    "dsp": 39,
    "params": [
      {
        "name": "Input",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Output",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Treb",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Gate",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "788240": {
    "midiId": 788240,
    "hexId": "0x000c0710",
    "fxid": 902,
    "gid": 8,
    "name": "NAMLite — capture 3",
    "category": "AMP",
    "title": "Neural Amp Modeler Capture #3",
    "dsp": 39,
    "params": [
      {
        "name": "Input",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Output",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Treb",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Gate",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "919312": {
    "midiId": 919312,
    "hexId": "0x000e0710",
    "fxid": 903,
    "gid": 8,
    "name": "NAMLite — capture 4",
    "category": "AMP",
    "title": "Neural Amp Modeler Capture #4",
    "dsp": 39,
    "params": [
      {
        "name": "Input",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Output",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Treb",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Gate",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1048840": {
    "midiId": 1048840,
    "hexId": "0x00100108",
    "fxid": 101,
    "gid": 4,
    "name": "CABSIM",
    "category": "AMP",
    "title": "FD COMBO Clean / Custom Flat Cabsim",
    "dsp": 25,
    "zdl": "CABSIM.ZDL",
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 35,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tube",
        "min": 0,
        "max": 100,
        "default": 20,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Middl",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Prese",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": STANDARD_CABS
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": STANDARD_OUTS
      }
    ]
  },
  "1050384": {
    "midiId": 1050384,
    "hexId": "0x00100710",
    "fxid": 904,
    "gid": 8,
    "name": "NAMLite — capture 5",
    "category": "AMP",
    "title": "Neural Amp Modeler Capture #5",
    "dsp": 39,
    "params": [
      {
        "name": "Input",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Output",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Treb",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Gate",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1181456": {
    "midiId": 1181456,
    "hexId": "0x00120710",
    "fxid": 905,
    "gid": 8,
    "name": "NAMLite — capture 6",
    "category": "AMP",
    "title": "Neural Amp Modeler Capture #6",
    "dsp": 39,
    "params": [
      {
        "name": "Input",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Output",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Treb",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Gate",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1312528": {
    "midiId": 1312528,
    "hexId": "0x00140710",
    "fxid": 906,
    "gid": 8,
    "name": "NAMLite — capture 7",
    "category": "AMP",
    "title": "Neural Amp Modeler Capture #7",
    "dsp": 39,
    "params": [
      {
        "name": "Input",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Output",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Treb",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Gate",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1443600": {
    "midiId": 1443600,
    "hexId": "0x00160710",
    "fxid": 907,
    "gid": 8,
    "name": "NAMLite — capture 8",
    "category": "AMP",
    "title": "Neural Amp Modeler Capture #8",
    "dsp": 39,
    "params": [
      {
        "name": "Input",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Output",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Treb",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Gate",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "2361104": {
    "midiId": 2361104,
    "hexId": "0x00240710",
    "fxid": 914,
    "gid": 8,
    "name": "Spool",
    "category": "DELAY",
    "title": "Spool Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Tempo",
        "min": 0,
        "max": 240,
        "default": 120,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Div",
        "min": 0,
        "max": 100,
        "default": 67,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Feed",
        "min": 0,
        "max": 100,
        "default": 35,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Flutter",
        "min": 0,
        "max": 100,
        "default": 35,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Wow",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Wear",
        "min": 0,
        "max": 100,
        "default": 55,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Drive",
        "min": 0,
        "max": 100,
        "default": 35,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Spring",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 35,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "2491152": {
    "midiId": 2491152,
    "hexId": "0x00260310",
    "fxid": 403,
    "gid": 8,
    "name": "Oxide",
    "category": "SFX",
    "title": "Oxide Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Input",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tilt",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Shape",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Flutter",
        "min": 0,
        "max": 100,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "FlutSpd",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bias",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "HeadBmp",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Output",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "3146512": {
    "midiId": 3146512,
    "hexId": "0x00300310",
    "fxid": 408,
    "gid": 8,
    "name": "Galactic",
    "category": "SFX",
    "title": "Galactic Custom MultiStomp Effect",
    "dsp": 30,
    "params": [
      {
        "name": "Replace",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bright",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Detune",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bigness",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "3932944": {
    "midiId": 3932944,
    "hexId": "0x003c0310",
    "fxid": 414,
    "gid": 8,
    "name": "Scope",
    "category": "SFX",
    "title": "Scope Custom MultiStomp Effect",
    "dsp": 8,
    "params": [
      {
        "name": "Time",
        "min": 0,
        "max": 100,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mode",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "4064016": {
    "midiId": 4064016,
    "hexId": "0x003e0310",
    "fxid": 415,
    "gid": 8,
    "name": "Ring",
    "category": "SFX",
    "title": "Ring Custom MultiStomp Effect",
    "dsp": 8,
    "params": [
      {
        "name": "Time",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Size",
        "min": 0,
        "max": 100,
        "default": 35,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Spin",
        "min": 0,
        "max": 100,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "4194570": {
    "midiId": 4194570,
    "hexId": "0x0040010a",
    "fxid": 204,
    "gid": 5,
    "name": "ENGL",
    "category": "AMP",
    "title": "ENGL Invader High-Gain Mod Amp",
    "dsp": 36,
    "zdl": "ENGL.ZDL",
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 65,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tube",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": 0,
        "max": 100,
        "default": 65,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Middl",
        "min": 0,
        "max": 100,
        "default": 45,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Prese",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 20,
        "unit": "",
        "type": "select",
        "options": STANDARD_CABS
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": STANDARD_OUTS
      }
    ]
  },
  "4195088": {
    "midiId": 4195088,
    "hexId": "0x00400310",
    "fxid": 416,
    "gid": 8,
    "name": "Skull",
    "category": "SFX",
    "title": "Skull Custom MultiStomp Effect",
    "dsp": 8,
    "params": [
      {
        "name": "Sense",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Decay",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Shake",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Boom",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "4325642": {
    "midiId": 4325642,
    "hexId": "0x0042010a",
    "fxid": 205,
    "gid": 5,
    "name": "ENGL2",
    "category": "AMP",
    "title": "ENGL Savage High-Gain Mod Amp 2",
    "dsp": 36,
    "zdl": "ENGL2.ZDL",
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 65,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tube",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": 0,
        "max": 100,
        "default": 65,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Middl",
        "min": 0,
        "max": 100,
        "default": 45,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Prese",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 20,
        "unit": "",
        "type": "select",
        "options": STANDARD_CABS
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": STANDARD_OUTS
      }
    ]
  },
  "4326160": {
    "midiId": 4326160,
    "hexId": "0x00420310",
    "fxid": 417,
    "gid": 8,
    "name": "Deform",
    "category": "SFX",
    "title": "Deform Custom MultiStomp Effect",
    "dsp": 45,
    "params": [
      {
        "name": "Drive",
        "min": 0,
        "max": 100,
        "default": 35,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Crush",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Comp",
        "min": 0,
        "max": 100,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tilt",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Split",
        "min": 0,
        "max": 2,
        "default": 1,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mode",
        "min": 0,
        "max": 2,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Noise",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Decay",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "4457232": {
    "midiId": 4457232,
    "hexId": "0x00440310",
    "fxid": 418,
    "gid": 8,
    "name": "Chimera",
    "category": "SFX",
    "title": "Chimera Custom MultiStomp Effect",
    "dsp": 40,
    "params": [
      {
        "name": "Vowel",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Open",
        "min": 0,
        "max": 100,
        "default": 55,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Body",
        "min": 0,
        "max": 100,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Nasal",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Talk",
        "min": 0,
        "max": 100,
        "default": 35,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Move",
        "min": 0,
        "max": 3,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Buzz",
        "min": 0,
        "max": 100,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Breath",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "4458256": {
    "midiId": 4458256,
    "hexId": "0x00440710",
    "fxid": 930,
    "gid": 8,
    "name": "CabIR — slot 1",
    "category": "FILTER",
    "title": "Cabinet IR Loader #1",
    "dsp": 10,
    "params": [
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pres",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "4588304": {
    "midiId": 4588304,
    "hexId": "0x00460310",
    "fxid": 419,
    "gid": 8,
    "name": "Horizon",
    "category": "SFX",
    "title": "Horizon Custom MultiStomp Effect",
    "dsp": 50,
    "params": [
      {
        "name": "Size",
        "min": 0,
        "max": 100,
        "default": 70,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Decay",
        "min": 0,
        "max": 100,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pre",
        "min": 0,
        "max": 100,
        "default": 15,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mod",
        "min": 0,
        "max": 100,
        "default": 35,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Lo",
        "min": 0,
        "max": 100,
        "default": 20,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Hi",
        "min": 0,
        "max": 100,
        "default": 55,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Swell",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Width",
        "min": 0,
        "max": 100,
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 45,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "4589328": {
    "midiId": 4589328,
    "hexId": "0x00460710",
    "fxid": 931,
    "gid": 8,
    "name": "CabIR — slot 2",
    "category": "FILTER",
    "title": "Cabinet IR Loader #2",
    "dsp": 10,
    "params": [
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pres",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "4719376": {
    "midiId": 4719376,
    "hexId": "0x00480310",
    "fxid": 420,
    "gid": 8,
    "name": "HorizonL",
    "category": "SFX",
    "title": "HorizonL Custom MultiStomp Effect",
    "dsp": 35,
    "params": [
      {
        "name": "Size",
        "min": 0,
        "max": 100,
        "default": 70,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Decay",
        "min": 0,
        "max": 100,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pre",
        "min": 0,
        "max": 100,
        "default": 15,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mod",
        "min": 0,
        "max": 100,
        "default": 35,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Lo",
        "min": 0,
        "max": 100,
        "default": 20,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Hi",
        "min": 0,
        "max": 100,
        "default": 55,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Swell",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Width",
        "min": 0,
        "max": 100,
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 45,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "4720400": {
    "midiId": 4720400,
    "hexId": "0x00480710",
    "fxid": 932,
    "gid": 8,
    "name": "CabIR — slot 3",
    "category": "FILTER",
    "title": "Cabinet IR Loader #3",
    "dsp": 10,
    "params": [
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pres",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "4851472": {
    "midiId": 4851472,
    "hexId": "0x004a0710",
    "fxid": 933,
    "gid": 8,
    "name": "CabIR — slot 4",
    "category": "FILTER",
    "title": "Cabinet IR Loader #4",
    "dsp": 10,
    "params": [
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pres",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "4982544": {
    "midiId": 4982544,
    "hexId": "0x004c0710",
    "fxid": 934,
    "gid": 8,
    "name": "CabIR — slot 5",
    "category": "FILTER",
    "title": "Cabinet IR Loader #5",
    "dsp": 10,
    "params": [
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pres",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "5113616": {
    "midiId": 5113616,
    "hexId": "0x004e0710",
    "fxid": 935,
    "gid": 8,
    "name": "CabIR — slot 6",
    "category": "FILTER",
    "title": "Cabinet IR Loader #6",
    "dsp": 10,
    "params": [
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pres",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "5244688": {
    "midiId": 5244688,
    "hexId": "0x00500710",
    "fxid": 936,
    "gid": 8,
    "name": "CabIR — slot 7",
    "category": "FILTER",
    "title": "Cabinet IR Loader #7",
    "dsp": 10,
    "params": [
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pres",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "5375760": {
    "midiId": 5375760,
    "hexId": "0x00520710",
    "fxid": 937,
    "gid": 8,
    "name": "CabIR — slot 8",
    "category": "FILTER",
    "title": "Cabinet IR Loader #8",
    "dsp": 10,
    "params": [
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pres",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "5506832": {
    "midiId": 5506832,
    "hexId": "0x00540710",
    "fxid": 938,
    "gid": 8,
    "name": "CabIR — slot 9",
    "category": "FILTER",
    "title": "Cabinet IR Loader #9",
    "dsp": 10,
    "params": [
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pres",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "5637904": {
    "midiId": 5637904,
    "hexId": "0x00560710",
    "fxid": 939,
    "gid": 8,
    "name": "CabIR — slot 10",
    "category": "FILTER",
    "title": "Cabinet IR Loader #10",
    "dsp": 10,
    "params": [
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pres",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "5768976": {
    "midiId": 5768976,
    "hexId": "0x00580710",
    "fxid": 940,
    "gid": 8,
    "name": "CabIR — slot 11",
    "category": "FILTER",
    "title": "Cabinet IR Loader #11",
    "dsp": 10,
    "params": [
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pres",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "5900048": {
    "midiId": 5900048,
    "hexId": "0x005a0710",
    "fxid": 941,
    "gid": 8,
    "name": "CabIR — slot 12",
    "category": "FILTER",
    "title": "Cabinet IR Loader #12",
    "dsp": 10,
    "params": [
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pres",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "6031120": {
    "midiId": 6031120,
    "hexId": "0x005c0710",
    "fxid": 942,
    "gid": 8,
    "name": "CabIR — slot 13",
    "category": "FILTER",
    "title": "Cabinet IR Loader #13",
    "dsp": 10,
    "params": [
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pres",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "6162192": {
    "midiId": 6162192,
    "hexId": "0x005e0710",
    "fxid": 943,
    "gid": 8,
    "name": "CabIR — slot 14",
    "category": "FILTER",
    "title": "Cabinet IR Loader #14",
    "dsp": 10,
    "params": [
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pres",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "6293264": {
    "midiId": 6293264,
    "hexId": "0x00600710",
    "fxid": 944,
    "gid": 8,
    "name": "CabIR — slot 15",
    "category": "FILTER",
    "title": "Cabinet IR Loader #15",
    "dsp": 10,
    "params": [
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pres",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "6424336": {
    "midiId": 6424336,
    "hexId": "0x00620710",
    "fxid": 945,
    "gid": 8,
    "name": "CabIR — slot 16",
    "category": "FILTER",
    "title": "Cabinet IR Loader #16",
    "dsp": 10,
    "params": [
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pres",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "6686480": {
    "midiId": 6686480,
    "hexId": "0x00660710",
    "fxid": 947,
    "gid": 8,
    "name": "Chopdly",
    "category": "DELAY",
    "title": "Chopdly Custom MultiStomp Effect",
    "dsp": 40,
    "params": [
      {
        "name": "Time",
        "min": 0,
        "max": 100,
        "default": 45,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Chops",
        "min": 0,
        "max": 16,
        "default": 4,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Order",
        "min": 0,
        "max": 21,
        "default": 6,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pitch",
        "min": 0,
        "max": 12,
        "default": 3,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reverse",
        "min": 0,
        "max": 7,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Stretch",
        "min": 0,
        "max": 6,
        "default": 4,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Glide",
        "min": 0,
        "max": 100,
        "default": 20,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Feedbk",
        "min": 0,
        "max": 100,
        "default": 35,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "7079696": {
    "midiId": 7079696,
    "hexId": "0x006c0710",
    "fxid": 950,
    "gid": 8,
    "name": "NAMLite — capture 9",
    "category": "AMP",
    "title": "Neural Amp Modeler Capture #9",
    "dsp": 39,
    "params": [
      {
        "name": "Input",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Output",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Treb",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Gate",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "7210768": {
    "midiId": 7210768,
    "hexId": "0x006e0710",
    "fxid": 951,
    "gid": 8,
    "name": "NAMLite — capture 10",
    "category": "AMP",
    "title": "Neural Amp Modeler Capture #10",
    "dsp": 39,
    "params": [
      {
        "name": "Input",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Output",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Treb",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Gate",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "7340816": {
    "midiId": 7340816,
    "hexId": "0x00700310",
    "fxid": 440,
    "gid": 8,
    "name": "Stasis",
    "category": "REVERB",
    "title": "Stasis Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Length",
        "min": 0,
        "max": 100,
        "default": 35,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Blur",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Decay",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 100,
        "default": 55,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Capture",
        "min": 0,
        "max": 2,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "7341840": {
    "midiId": 7341840,
    "hexId": "0x00700710",
    "fxid": 952,
    "gid": 8,
    "name": "NAMLite — capture 11",
    "category": "AMP",
    "title": "Neural Amp Modeler Capture #11",
    "dsp": 39,
    "params": [
      {
        "name": "Input",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Output",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Treb",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Gate",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "7472912": {
    "midiId": 7472912,
    "hexId": "0x00720710",
    "fxid": 953,
    "gid": 8,
    "name": "NAMLite — capture 12",
    "category": "AMP",
    "title": "Neural Amp Modeler Capture #12",
    "dsp": 39,
    "params": [
      {
        "name": "Input",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Output",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Treb",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Gate",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "7603984": {
    "midiId": 7603984,
    "hexId": "0x00740710",
    "fxid": 954,
    "gid": 8,
    "name": "NAMLite — capture 13",
    "category": "AMP",
    "title": "Neural Amp Modeler Capture #13",
    "dsp": 39,
    "params": [
      {
        "name": "Input",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Output",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Treb",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Gate",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "7735056": {
    "midiId": 7735056,
    "hexId": "0x00760710",
    "fxid": 955,
    "gid": 8,
    "name": "NAMLite — capture 14",
    "category": "AMP",
    "title": "Neural Amp Modeler Capture #14",
    "dsp": 39,
    "params": [
      {
        "name": "Input",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Output",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Treb",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Gate",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "7866128": {
    "midiId": 7866128,
    "hexId": "0x00780710",
    "fxid": 956,
    "gid": 8,
    "name": "NAMLite — capture 15",
    "category": "AMP",
    "title": "Neural Amp Modeler Capture #15",
    "dsp": 39,
    "params": [
      {
        "name": "Input",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Output",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Treb",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Gate",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "7997200": {
    "midiId": 7997200,
    "hexId": "0x007a0710",
    "fxid": 957,
    "gid": 8,
    "name": "NAMLite — capture 16",
    "category": "AMP",
    "title": "Neural Amp Modeler Capture #16",
    "dsp": 39,
    "params": [
      {
        "name": "Input",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Output",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Treb",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Gate",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1073873680": {
    "midiId": 1073873680,
    "hexId": "0x40020310",
    "fxid": 449,
    "gid": 8,
    "name": "Spiral",
    "category": "MOD",
    "title": "Spiral Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Div",
        "min": 0,
        "max": 100,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tempo",
        "min": 0,
        "max": 240,
        "default": 120,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Feedbk",
        "min": 0,
        "max": 100,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rise",
        "min": 0,
        "max": 100,
        "default": 62,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Glide",
        "min": 0,
        "max": 100,
        "default": 45,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Span",
        "min": 0,
        "max": 100,
        "default": 45,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1074004752": {
    "midiId": 1074004752,
    "hexId": "0x40040310",
    "fxid": 450,
    "gid": 8,
    "name": "Microlm",
    "category": "DYNAMICS",
    "title": "Microlm Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Pitch",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Regen",
        "min": 0,
        "max": 100,
        "default": 72,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 100,
        "default": 55,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1074135824": {
    "midiId": 1074135824,
    "hexId": "0x40060310",
    "fxid": 451,
    "gid": 8,
    "name": "Flower",
    "category": "MOD",
    "title": "Flower Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Rate",
        "min": 0,
        "max": 100,
        "default": 45,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1074266896": {
    "midiId": 1074266896,
    "hexId": "0x40080310",
    "fxid": 452,
    "gid": 8,
    "name": "Shatter",
    "category": "SFX",
    "title": "Shatter Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Chance",
        "min": 0,
        "max": 100,
        "default": 55,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1074529040": {
    "midiId": 1074529040,
    "hexId": "0x400c0310",
    "fxid": 454,
    "gid": 8,
    "name": "Corrupt",
    "category": "SFX",
    "title": "Corrupt Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Sub",
        "min": 0,
        "max": 100,
        "default": 82,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 100,
        "default": 45,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Wave",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1074660112": {
    "midiId": 1074660112,
    "hexId": "0x400e0310",
    "fxid": 455,
    "gid": 8,
    "name": "Klang",
    "category": "SFX",
    "title": "Klang Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Freq",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Sweep",
        "min": 0,
        "max": 100,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1074791184": {
    "midiId": 1074791184,
    "hexId": "0x40100310",
    "fxid": 456,
    "gid": 8,
    "name": "GenLoss",
    "category": "SFX",
    "title": "GenLoss Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Wow",
        "min": 0,
        "max": 100,
        "default": 72,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 100,
        "default": 52,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Hiss",
        "min": 0,
        "max": 100,
        "default": 2,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1074922256": {
    "midiId": 1074922256,
    "hexId": "0x40120310",
    "fxid": 457,
    "gid": 8,
    "name": "Scorch",
    "category": "DRIVE",
    "title": "Scorch Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 22,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1075053328": {
    "midiId": 1075053328,
    "hexId": "0x40140310",
    "fxid": 458,
    "gid": 8,
    "name": "Howl",
    "category": "SFX",
    "title": "Howl Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Tune",
        "min": 0,
        "max": 100,
        "default": 17,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Annihil",
        "min": 0,
        "max": 100,
        "default": 34,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1075184400": {
    "midiId": 1075184400,
    "hexId": "0x40160310",
    "fxid": 459,
    "gid": 8,
    "name": "Hydra",
    "category": "SFX",
    "title": "Hydra Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Div",
        "min": 0,
        "max": 100,
        "default": 42,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tempo",
        "min": 0,
        "max": 240,
        "default": 120,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Fast",
        "min": 0,
        "max": 100,
        "default": 70,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Slow",
        "min": 0,
        "max": 100,
        "default": 55,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 100,
        "default": 45,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1075446544": {
    "midiId": 1075446544,
    "hexId": "0x401a0310",
    "fxid": 461,
    "gid": 8,
    "name": "Dissolve",
    "category": "SFX",
    "title": "Dissolve Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Chance",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Smear",
        "min": 0,
        "max": 100,
        "default": 55,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Glitch",
        "min": 0,
        "max": 100,
        "default": 35,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1075708688": {
    "midiId": 1075708688,
    "hexId": "0x401e0310",
    "fxid": 463,
    "gid": 8,
    "name": "Dustbox",
    "category": "DRIVE",
    "title": "Dustbox Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Dust",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Motor",
        "min": 0,
        "max": 100,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Filter",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Power",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1075970832": {
    "midiId": 1075970832,
    "hexId": "0x40220310",
    "fxid": 465,
    "gid": 8,
    "name": "Rewire",
    "category": "SFX",
    "title": "Rewire Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Route",
        "min": 0,
        "max": 100,
        "default": 10,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bits",
        "min": 0,
        "max": 100,
        "default": 55,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Drive",
        "min": 0,
        "max": 100,
        "default": 35,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Ring",
        "min": 0,
        "max": 100,
        "default": 20,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Comb",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Shift",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 100,
        "default": 55,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1076101904": {
    "midiId": 1076101904,
    "hexId": "0x40240310",
    "fxid": 466,
    "gid": 8,
    "name": "Taffy",
    "category": "MOD",
    "title": "Taffy Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Speed",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Chance",
        "min": 0,
        "max": 100,
        "default": 35,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Depth",
        "min": 0,
        "max": 100,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Glide",
        "min": 0,
        "max": 100,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1076232976": {
    "midiId": 1076232976,
    "hexId": "0x40260310",
    "fxid": 467,
    "gid": 8,
    "name": "Loop",
    "category": "DELAY",
    "title": "Loop Custom MultiStomp Effect",
    "dsp": 8,
    "params": [
      {
        "name": "Loop",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Dry",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Fade",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Undo",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Long",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tempo",
        "min": 0,
        "max": 250,
        "default": 120,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Beats",
        "min": 0,
        "max": 12,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Click",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1076363784": {
    "midiId": 1076363784,
    "hexId": "0x40280208",
    "fxid": 340,
    "gid": 4,
    "name": "PLEXI",
    "category": "AMP",
    "title": "Marshall 1959 Super Lead Plexi Mod Amp",
    "dsp": 34,
    "zdl": "PLEXI.ZDL",
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 58,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tube",
        "min": 0,
        "max": 100,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Middl",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Prese",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 16,
        "unit": "",
        "type": "select",
        "options": STANDARD_CABS
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": STANDARD_OUTS
      }
    ]
  },
  "1076364048": {
    "midiId": 1076364048,
    "hexId": "0x40280310",
    "fxid": 468,
    "gid": 8,
    "name": "Spectrum",
    "category": "SFX",
    "title": "Spectrum Custom MultiStomp Effect",
    "dsp": 8,
    "params": [
      {
        "name": "Range",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Fall",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tilt",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1076626192": {
    "midiId": 1076626192,
    "hexId": "0x402c0310",
    "fxid": 470,
    "gid": 8,
    "name": "Mangle",
    "category": "SFX",
    "title": "Mangle Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Time",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Feedbk",
        "min": 0,
        "max": 100,
        "default": 45,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Crush",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tremolo",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pitch",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1076888336": {
    "midiId": 1076888336,
    "hexId": "0x40300310",
    "fxid": 472,
    "gid": 8,
    "name": "Rooms",
    "category": "REVERB",
    "title": "Rooms Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Mode",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Time",
        "min": 0,
        "max": 100,
        "default": 55,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Freq",
        "min": 0,
        "max": 100,
        "default": 45,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Depth",
        "min": 0,
        "max": 100,
        "default": 45,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1077019408": {
    "midiId": 1077019408,
    "hexId": "0x40320310",
    "fxid": 473,
    "gid": 8,
    "name": "Arrakis",
    "category": "SFX",
    "title": "Arrakis Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Detune",
        "min": 0,
        "max": 100,
        "default": 63,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1077936392": {
    "midiId": 1077936392,
    "hexId": "0x40400108",
    "fxid": 201,
    "gid": 4,
    "name": "JCM800",
    "category": "AMP",
    "title": "Marshall JCM800 Master Lead Mod Amp",
    "dsp": 34,
    "zdl": "JCM800.ZDL",
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tube",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Middl",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Prese",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 15,
        "unit": "",
        "type": "select",
        "options": STANDARD_CABS
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": STANDARD_OUTS
      }
    ]
  },
  "1077936912": {
    "midiId": 1077936912,
    "hexId": "0x40400310",
    "fxid": 480,
    "gid": 8,
    "name": "DualShft",
    "category": "MOD",
    "title": "DualShft Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Ptch1",
        "min": 0,
        "max": 66,
        "default": 49,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Ptch2",
        "min": 0,
        "max": 66,
        "default": 19,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Dly1",
        "min": 0,
        "max": 112,
        "default": 70,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Dly2",
        "min": 0,
        "max": 112,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Div",
        "min": 0,
        "max": 16,
        "default": 8,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Depth",
        "min": 0,
        "max": 80,
        "default": 29,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Shape",
        "min": 0,
        "max": 6,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tempo",
        "min": 0,
        "max": 441,
        "default": 120,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1078461200": {
    "midiId": 1078461200,
    "hexId": "0x40480310",
    "fxid": 484,
    "gid": 8,
    "name": "Gyre",
    "category": "MOD",
    "title": "Gyre Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Size",
        "min": 0,
        "max": 100,
        "default": 45,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Feed",
        "min": 0,
        "max": 100,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Decay",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rise",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Glide",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Span",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 100,
        "default": 55,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1078592272": {
    "midiId": 1078592272,
    "hexId": "0x404a0310",
    "fxid": 485,
    "gid": 8,
    "name": "DubSiren",
    "category": "SFX",
    "title": "DubSiren Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Trig",
        "min": 0,
        "max": 3,
        "default": 1,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mode",
        "min": 0,
        "max": 3,
        "default": 1,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pitch",
        "min": 0,
        "max": 100,
        "default": 48,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rate",
        "min": 0,
        "max": 112,
        "default": 67,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Depth",
        "min": 0,
        "max": 100,
        "default": 34,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Vol",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Time",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tempo",
        "min": 0,
        "max": 441,
        "default": 120,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Fdbk",
        "min": 0,
        "max": 125,
        "default": 70,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1078723344": {
    "midiId": 1078723344,
    "hexId": "0x404c0310",
    "fxid": 486,
    "gid": 8,
    "name": "Choral",
    "category": "MOD",
    "title": "Choral Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Choir",
        "min": 0,
        "max": 16,
        "default": 4,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Size",
        "min": 0,
        "max": 5,
        "default": 2,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Chord",
        "min": 0,
        "max": 24,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Sing",
        "min": 0,
        "max": 11,
        "default": 6,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pace",
        "min": 0,
        "max": 16,
        "default": 4,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Feel",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Glide",
        "min": 0,
        "max": 100,
        "default": 20,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tempo",
        "min": 0,
        "max": 441,
        "default": 120,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 70,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1078854416": {
    "midiId": 1078854416,
    "hexId": "0x404e0310",
    "fxid": 487,
    "gid": 8,
    "name": "WaveFold",
    "category": "FILTER",
    "title": "WaveFold Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Drive",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Symm",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 100,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1078985488": {
    "midiId": 1078985488,
    "hexId": "0x40500310",
    "fxid": 488,
    "gid": 8,
    "name": "EuGate",
    "category": "DYNAMICS",
    "title": "EuGate Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Notes",
        "min": 0,
        "max": 63,
        "default": 4,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Steps",
        "min": 0,
        "max": 63,
        "default": 15,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Shift",
        "min": 0,
        "max": 63,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Swing",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reset",
        "min": 0,
        "max": 3,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Gap",
        "min": 0,
        "max": 50,
        "default": 15,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Soft",
        "min": 0,
        "max": 100,
        "default": 35,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tempo",
        "min": 0,
        "max": 441,
        "default": 120,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1079116560": {
    "midiId": 1079116560,
    "hexId": "0x40520310",
    "fxid": 489,
    "gid": 8,
    "name": "S.GN_L",
    "category": "SFX",
    "title": "S.GN_L Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Loss",
        "min": 0,
        "max": 100,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Size",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Codec",
        "min": 0,
        "max": 100,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Fill",
        "min": 0,
        "max": 7,
        "default": 1,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Burst",
        "min": 0,
        "max": 100,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Jump",
        "min": 0,
        "max": 100,
        "default": 20,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Line",
        "min": 0,
        "max": 3,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Edge",
        "min": 0,
        "max": 100,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1079247632": {
    "midiId": 1079247632,
    "hexId": "0x40540310",
    "fxid": 490,
    "gid": 8,
    "name": "Scrub",
    "category": "DRIVE",
    "title": "Scrub Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Pos",
        "min": 0,
        "max": 600,
        "default": 600,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Grain",
        "min": 0,
        "max": 112,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rec",
        "min": 0,
        "max": 2,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Glide",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Dir",
        "min": 0,
        "max": 3,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Spray",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tempo",
        "min": 0,
        "max": 441,
        "default": 120,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1079378704": {
    "midiId": 1079378704,
    "hexId": "0x40560310",
    "fxid": 491,
    "gid": 8,
    "name": "DirtBox",
    "category": "DRIVE",
    "title": "DirtBox Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Model",
        "min": 0,
        "max": 6,
        "default": 3,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Drive",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 100,
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Low",
        "min": 0,
        "max": 24,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": 0,
        "max": 24,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "High",
        "min": 0,
        "max": 24,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "ZNR",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1079509776": {
    "midiId": 1079509776,
    "hexId": "0x40580310",
    "fxid": 492,
    "gid": 8,
    "name": "Droplets",
    "category": "SFX",
    "title": "Droplets Custom MultiStomp Effect",
    "dsp": 50,
    "params": [
      {
        "name": "Pitch",
        "min": 0,
        "max": 10,
        "default": 5,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rate",
        "min": 0,
        "max": 100,
        "default": 45,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Size",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Contour",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Scan",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pattern",
        "min": 0,
        "max": 10,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Random",
        "min": 0,
        "max": 100,
        "default": 20,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Feedbk",
        "min": 0,
        "max": 100,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1079640848": {
    "midiId": 1079640848,
    "hexId": "0x405a0310",
    "fxid": 493,
    "gid": 8,
    "name": "Breather",
    "category": "SFX",
    "title": "Breather Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Targt",
        "min": 0,
        "max": 3,
        "default": 2,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Shape",
        "min": 0,
        "max": 2,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Depth",
        "min": 0,
        "max": 100,
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Div",
        "min": 0,
        "max": 4,
        "default": 2,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Shift",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Curve",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Verb",
        "min": 0,
        "max": 100,
        "default": 35,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tempo",
        "min": 0,
        "max": 441,
        "default": 160,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Size",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1079771920": {
    "midiId": 1079771920,
    "hexId": "0x405c0310",
    "fxid": 494,
    "gid": 8,
    "name": "SyncEQ",
    "category": "FILTER",
    "title": "SyncEQ Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "LoCut",
        "min": 0,
        "max": 50,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Low",
        "min": 0,
        "max": 24,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": 0,
        "max": 24,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "MidF",
        "min": 0,
        "max": 50,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "High",
        "min": 0,
        "max": 24,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "HiCut",
        "min": 0,
        "max": 50,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Drive",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tempo",
        "min": 0,
        "max": 441,
        "default": 120,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 24,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1079902992": {
    "midiId": 1079902992,
    "hexId": "0x405e0310",
    "fxid": 495,
    "gid": 8,
    "name": "GridDly",
    "category": "DELAY",
    "title": "GridDly Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Type",
        "min": 0,
        "max": 5,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Time",
        "min": 0,
        "max": 113,
        "default": 108,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Fdbk",
        "min": 0,
        "max": 120,
        "default": 45,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 100,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Char",
        "min": 0,
        "max": 100,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Duck",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tempo",
        "min": 0,
        "max": 441,
        "default": 120,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1080034064": {
    "midiId": 1080034064,
    "hexId": "0x40600310",
    "fxid": 496,
    "gid": 8,
    "name": "Sweep",
    "category": "FILTER",
    "title": "Sweep Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Type",
        "min": 0,
        "max": 7,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rate",
        "min": 0,
        "max": 115,
        "default": 109,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Depth",
        "min": 0,
        "max": 100,
        "default": 70,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Cntr",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Shape",
        "min": 0,
        "max": 5,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tempo",
        "min": 0,
        "max": 441,
        "default": 120,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1080165136": {
    "midiId": 1080165136,
    "hexId": "0x40620310",
    "fxid": 497,
    "gid": 8,
    "name": "Carillon",
    "category": "SFX",
    "title": "Carillon Custom MultiStomp Effect",
    "dsp": 40,
    "params": [
      {
        "name": "Cutoff",
        "min": 0,
        "max": 100,
        "default": 70,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 100,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Decay",
        "min": 0,
        "max": 100,
        "default": 55,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Key",
        "min": 0,
        "max": 11,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Scale",
        "min": 0,
        "max": 9,
        "default": 2,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Slope",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Waves",
        "min": 0,
        "max": 100,
        "default": 20,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Noise",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 60,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1080295944": {
    "midiId": 1080295944,
    "hexId": "0x40640208",
    "fxid": 370,
    "gid": 4,
    "name": "Marshall PLEXI",
    "category": "AMP",
    "title": "Marshall 1959 Super Lead Plexi 2 Mod Amp",
    "dsp": 34,
    "zdl": "PLEXI2.ZDL",
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 58,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tube",
        "min": 0,
        "max": 100,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Middl",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Prese",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 16,
        "unit": "",
        "type": "select",
        "options": STANDARD_CABS
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": STANDARD_OUTS
      }
    ]
  },
  "1080427280": {
    "midiId": 1080427280,
    "hexId": "0x40660310",
    "fxid": 499,
    "gid": 8,
    "name": "Tonic",
    "category": "SFX",
    "title": "Tonic Custom MultiStomp Effect",
    "dsp": 20,
    "params": [
      {
        "name": "Mode",
        "min": 0,
        "max": 100,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Amount",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Drive",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Phase",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Order",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      }
    ]
  }
};

export function decodeEffectId(id) {
  const num = Number(id) >>> 0;
  const gid = (num & 0x1E) >> 1;
  const fxid = ((num >> 17) & 0x3F) | (((num >> 30) & 0x01) << 6) | (((num >> 8) & 0x07) << 7);
  return { gid, fxid };
}

export function encodeEffectId(gid, fxid) {
  return (((fxid & 63) << 17) | (((fxid >> 6) & 1) << 30) | (((fxid >> 7) & 7) << 8) | ((gid & 0x0F) << 1)) >>> 0;
}

export function resolveCustomEffect(midiId) {
  const num = Number(midiId) >>> 0;
  if (!num) return null;

  // 1. Direct match in custom database
  if (CUSTOM_COMMUNITY_EFFECTS[num]) {
    return {
      ...CUSTOM_COMMUNITY_EFFECTS[num],
      id: 'custom-' + CUSTOM_COMMUNITY_EFFECTS[num].hexId.toLowerCase()
    };
  }

  // 2. Dynamic bitfield decoding
  const { gid, fxid } = decodeEffectId(num);
  const hexId = '0x' + num.toString(16).padStart(8, '0');

  // GID 8: themanro NAM captures and CabIR slots
  if (gid === 8) {
    // NAMLite capture ranges: 900..907 (slots 1..8), 950..957 (slots 9..16), 500..699 (slots 17..216)
    let namSlot = null;
    if (fxid >= 900 && fxid <= 907) namSlot = fxid - 899;
    else if (fxid >= 950 && fxid <= 957) namSlot = fxid - 941;
    else if (fxid >= 500 && fxid <= 699) namSlot = fxid - 483;

    if (namSlot !== null) {
      return {
        midiId: num,
        hexId,
        id: 'nam-slot-' + namSlot,
        name: `NAMLite — capture ${namSlot}`,
        category: 'AMP',
        title: `Neural Amp Modeler Capture #${namSlot}`,
        dsp: 35,
        params: [
          { name: 'Input', min: 0, max: 100, default: 50, unit: '', type: 'slider', options: null },
          { name: 'Output', min: 0, max: 100, default: 25, unit: '', type: 'slider', options: null },
          { name: 'Mix', min: 0, max: 100, default: 100, unit: '%', type: 'slider', options: null },
          { name: 'Bass', min: 0, max: 100, default: 50, unit: '', type: 'slider', options: null },
          { name: 'Mid', min: 0, max: 100, default: 50, unit: '', type: 'slider', options: null },
          { name: 'Treb', min: 0, max: 100, default: 50, unit: '', type: 'slider', options: null },
          { name: 'Gate', min: 0, max: 100, default: 0, unit: '', type: 'slider', options: null }
        ]
      };
    }

    // CabIR loader ranges: 930..945 (slots 1..16), 700..899 (slots 17..216)
    let cabSlot = null;
    if (fxid >= 930 && fxid <= 945) cabSlot = fxid - 929;
    else if (fxid >= 700 && fxid <= 899) cabSlot = fxid - 683;

    if (cabSlot !== null) {
      return {
        midiId: num,
        hexId,
        id: 'cab-slot-' + cabSlot,
        name: `CabIR — slot ${cabSlot}`,
        category: 'FILTER',
        title: `Cabinet IR Loader #${cabSlot}`,
        dsp: 10,
        params: [
          { name: 'Mix', min: 0, max: 100, default: 100, unit: '%', type: 'slider', options: null },
          { name: 'Level', min: 0, max: 150, default: 100, unit: '', type: 'slider', options: null },
          { name: 'Reso', min: 0, max: 100, default: 50, unit: '', type: 'slider', options: null },
          { name: 'Pres', min: 0, max: 100, default: 50, unit: '', type: 'slider', options: null }
        ]
      };
    }
  }

  // GID 4 (Guitar Amp) or GID 5 (Bass Amp)
  if (gid === 4 || gid === 5) {
    const isBass = gid === 5;
    return {
      midiId: num,
      hexId,
      id: `custom-amp-${num}`,
      name: isBass ? `Custom Bass Amp (${fxid})` : `Custom Guitar Amp (${fxid})`,
      category: 'AMP',
      title: isBass ? 'Custom Bass Amplifier Model' : 'Custom MultiStomp Guitar Amplifier',
      dsp: 34,
      params: [
        { name: 'Gain', min: 0, max: 100, default: 50, unit: '', type: 'slider', options: null },
        { name: 'Tube', min: 0, max: 100, default: 30, unit: '', type: 'slider', options: null },
        { name: 'Level', min: 0, max: 150, default: 100, unit: '', type: 'slider', options: null },
        { name: 'Trebl', min: 0, max: 100, default: 50, unit: '', type: 'slider', options: null },
        { name: 'Middl', min: 0, max: 100, default: 50, unit: '', type: 'slider', options: null },
        { name: 'Bass', min: 0, max: 100, default: 50, unit: '', type: 'slider', options: null },
        { name: 'Prese', min: 0, max: 100, default: 50, unit: '', type: 'slider', options: null },
        { name: 'CAB', min: 0, max: 22, default: 16, unit: '', type: 'select', options: STANDARD_CABS },
        { name: 'OUT', min: 0, max: 4, default: 0, unit: '', type: 'select', options: STANDARD_OUTS }
      ]
    };
  }

  // GID 3, 12, 13: Drive / Distortion
  if (gid === 3 || gid === 12 || gid === 13) {
    return {
      midiId: num,
      hexId,
      id: `custom-drive-${num}`,
      name: `Custom Drive (${fxid})`,
      category: 'DRIVE',
      title: 'Custom Overdrive / Distortion Effect',
      dsp: 15,
      params: [
        { name: 'Gain', min: 0, max: 100, default: 50, unit: '', type: 'slider', options: null },
        { name: 'Tone', min: 0, max: 100, default: 50, unit: '', type: 'slider', options: null },
        { name: 'Level', min: 0, max: 150, default: 100, unit: '', type: 'slider', options: null }
      ]
    };
  }

  // GID 6: Modulation
  if (gid === 6) {
    return {
      midiId: num,
      hexId,
      id: `custom-mod-${num}`,
      name: `Custom Mod (${fxid})`,
      category: 'MOD',
      title: 'Custom Modulation Effect',
      dsp: 18,
      params: [
        { name: 'Depth', min: 0, max: 100, default: 50, unit: '', type: 'slider', options: null },
        { name: 'Rate', min: 1, max: 50, default: 20, unit: '', type: 'slider', options: null },
        { name: 'Tone', min: 0, max: 10, default: 5, unit: '', type: 'slider', options: null },
        { name: 'Mix', min: 0, max: 100, default: 50, unit: '%', type: 'slider', options: null }
      ]
    };
  }

  // GID 8: Delay
  if (gid === 8) {
    return {
      midiId: num,
      hexId,
      id: `custom-delay-${num}`,
      name: `Custom Delay (${fxid})`,
      category: 'DELAY',
      title: 'Custom Delay / Echo Effect',
      dsp: 24,
      params: [
        { name: 'Time', min: 10, max: 2000, default: 400, unit: 'ms', type: 'slider', options: null },
        { name: 'F.B', min: 0, max: 100, default: 40, unit: '', type: 'slider', options: null },
        { name: 'Mix', min: 0, max: 100, default: 50, unit: '%', type: 'slider', options: null }
      ]
    };
  }

  // GID 9: Reverb
  if (gid === 9) {
    return {
      midiId: num,
      hexId,
      id: `custom-reverb-${num}`,
      name: `Custom Reverb (${fxid})`,
      category: 'REVERB',
      title: 'Custom Reverb / Space Effect',
      dsp: 28,
      params: [
        { name: 'Decay', min: 1, max: 100, default: 50, unit: '', type: 'slider', options: null },
        { name: 'Tone', min: 0, max: 100, default: 50, unit: '', type: 'slider', options: null },
        { name: 'Mix', min: 0, max: 100, default: 40, unit: '%', type: 'slider', options: null }
      ]
    };
  }

  // GID 1: Dynamics
  if (gid === 1) {
    return {
      midiId: num,
      hexId,
      id: `custom-dyn-${num}`,
      name: `Custom Dynamics (${fxid})`,
      category: 'DYNAMICS',
      title: 'Custom Dynamics / Compressor',
      dsp: 12,
      params: [
        { name: 'Sense', min: 0, max: 10, default: 5, unit: '', type: 'slider', options: null },
        { name: 'Attack', min: 0, max: 10, default: 5, unit: '', type: 'slider', options: null },
        { name: 'Level', min: 0, max: 150, default: 100, unit: '', type: 'slider', options: null }
      ]
    };
  }

  // GID 2: Filter
  if (gid === 2) {
    return {
      midiId: num,
      hexId,
      id: `custom-fltr-${num}`,
      name: `Custom Filter (${fxid})`,
      category: 'FILTER',
      title: 'Custom Filter / EQ Effect',
      dsp: 14,
      params: [
        { name: 'Sense', min: 0, max: 10, default: 5, unit: '', type: 'slider', options: null },
        { name: 'Reso', min: 0, max: 10, default: 5, unit: '', type: 'slider', options: null },
        { name: 'Freq', min: 0, max: 100, default: 50, unit: '', type: 'slider', options: null },
        { name: 'Level', min: 0, max: 150, default: 100, unit: '', type: 'slider', options: null }
      ]
    };
  }

  // Universal fallback: 4 assignable controls
  return {
    midiId: num,
    hexId,
    id: `custom-sfx-${num}`,
    name: `Custom Effect (${hexId})`,
    category: 'SFX',
    title: 'Custom MultiStomp Effect',
    dsp: 15,
    params: [
      { name: 'Knob 1', min: 0, max: 100, default: 50, unit: '', type: 'slider', options: null },
      { name: 'Knob 2', min: 0, max: 100, default: 50, unit: '', type: 'slider', options: null },
      { name: 'Knob 3', min: 0, max: 100, default: 50, unit: '', type: 'slider', options: null },
      { name: 'Level', min: 0, max: 150, default: 100, unit: '', type: 'slider', options: null }
    ]
  };
}
