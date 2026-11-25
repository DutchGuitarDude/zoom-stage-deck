// Auto-generated Zoom MultiStomp hardware effect database (226 effects)
// Reverse-engineered effect IDs, parameter definitions, categories and DSP loads.

export const ZOOM_EFFECT_DB = {
  "0": {
    "midiId": 0,
    "hexId": "0x00000000",
    "name": "THRU",
    "category": "EMPTY",
    "title": "THRU",
    "dsp": 10000,
    "params": []
  },
  "258": {
    "midiId": 258,
    "hexId": "0x00000102",
    "name": "OrangeLim",
    "category": "DYNAMICS",
    "title": "ORANGE SQUEEZER modeling",
    "dsp": 5,
    "params": []
  },
  "260": {
    "midiId": 260,
    "hexId": "0x00000104",
    "name": "SlowFLTR",
    "category": "FILTER",
    "title": "Filter changing by picking trigger",
    "dsp": 7,
    "params": [
      {
        "name": "Time",
        "min": 1,
        "max": 50,
        "default": 20,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Curve",
        "min": 0,
        "max": 10,
        "default": 10,
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
        "name": "Reso",
        "min": 0,
        "max": 10,
        "default": 6,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Chara",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "2Pole",
          "4Pole"
        ]
      },
      {
        "name": "DRCTN",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "Open",
          "Close"
        ]
      }
    ]
  },
  "262": {
    "midiId": 262,
    "hexId": "0x00000106",
    "name": "GreatMuff",
    "category": "DRIVE",
    "title": "Electro-Harmonix Big Muff modeling",
    "dsp": 8,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 70,
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
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "264": {
    "midiId": 264,
    "hexId": "0x00000108",
    "name": "CAR DRIVE",
    "category": "AMP",
    "title": "Carr Mercury combo amp modeling",
    "dsp": 2,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 51,
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
        "default": 74,
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
        "default": 128,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "LINE",
          "COMBO FRONT",
          "STACK FRONT",
          "COMBO POWER AMP",
          "STACK POWER AMP"
        ]
      }
    ]
  },
  "266": {
    "midiId": 266,
    "hexId": "0x0000010a",
    "name": "Monotone",
    "category": "AMP",
    "title": "POLYTONE MINI-BRUTE III simulation",
    "dsp": 3,
    "params": [
      {
        "name": "Bass",
        "min": -10,
        "max": 10,
        "default": 13,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": -10,
        "max": 10,
        "default": 18,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": -10,
        "max": 10,
        "default": 13,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid_F",
        "min": 0,
        "max": 30,
        "default": 13,
        "unit": "",
        "type": "select",
        "options": [
          "32Hz",
          "40Hz",
          "50Hz",
          "63Hz",
          "70Hz",
          "80Hz",
          "100Hz",
          "120Hz",
          "140Hz",
          "150Hz",
          "160Hz",
          "180Hz",
          "200Hz",
          "250Hz",
          "300Hz",
          "350Hz",
          "400Hz",
          "450Hz",
          "500Hz",
          "630Hz",
          "800Hz",
          "1.0kHz",
          "1.2kHz",
          "1.6kHz",
          "2.0kHz",
          "2.5kHz",
          "3.0kHz",
          "3.6kHz",
          "4.0kHz",
          "4.5kHz",
          "6.3kHz"
        ]
      },
      {
        "name": "Gain",
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
        "default": 70,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Char",
        "min": 0,
        "max": 2,
        "default": 2,
        "unit": "",
        "type": "select",
        "options": [
          "Dark",
          "Brght",
          "Flat"
        ]
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 128,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "268": {
    "midiId": 268,
    "hexId": "0x0000010c",
    "name": "Detune",
    "category": "MOD",
    "title": "Chorus without modulation by slightly pitch-shifted mix",
    "dsp": 14,
    "params": [
      {
        "name": "Cent",
        "min": -25,
        "max": 25,
        "default": 35,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PreD",
        "min": 0,
        "max": 50,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 52,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 8,
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
      }
    ]
  },
  "270": {
    "midiId": 270,
    "hexId": "0x0000010e",
    "name": "SynTlk",
    "category": "SFX",
    "title": "Talking modulator like sound",
    "dsp": 5,
    "params": [
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
        "name": "Type",
        "min": 0,
        "max": 3,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "iA",
          "UE",
          "UA",
          "oA"
        ]
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 8,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Synth",
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
        "default": 60,
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
      }
    ]
  },
  "272": {
    "midiId": 272,
    "hexId": "0x00000110",
    "name": "PitchDly",
    "category": "DELAY",
    "title": "Delay effect with pitch-shifting",
    "dsp": 8,
    "params": [
      {
        "name": "Time",
        "min": 1,
        "max": 2000,
        "default": 89,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Pitch",
        "min": 0,
        "max": 30,
        "default": 21,
        "unit": "",
        "type": "select",
        "options": [
          "-12",
          "-11",
          "-10",
          "-9",
          "-8",
          "-7",
          "-6",
          "-5",
          "-4",
          "-3",
          "-2",
          "-1",
          "-0.15",
          "-0.10",
          "-0.05",
          "0",
          "0.05",
          "0.10",
          "0.15",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12"
        ]
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "F.B",
        "min": 0,
        "max": 100,
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 8,
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
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "516": {
    "midiId": 516,
    "hexId": "0x00000204",
    "name": "St Bs GEQ",
    "category": "FILTER",
    "title": "7 bands stereo GEQ for bass",
    "dsp": 5,
    "params": [
      {
        "name": "50Hz",
        "min": -12,
        "max": 12,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "120Hz",
        "min": -12,
        "max": 12,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "400Hz",
        "min": -12,
        "max": 12,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "500Hz",
        "min": -12,
        "max": 12,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "800Hz",
        "min": -12,
        "max": 12,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "4.5kHz",
        "min": -12,
        "max": 12,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "10kHz",
        "min": -12,
        "max": 12,
        "default": 12,
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
      }
    ]
  },
  "518": {
    "midiId": 518,
    "hexId": "0x00000206",
    "name": "Z Neos",
    "category": "DRIVE",
    "title": "Crunch soudns of British class A combo amp",
    "dsp": 8,
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
        "name": "Tone",
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
      }
    ]
  },
  "520": {
    "midiId": 520,
    "hexId": "0x00000208",
    "name": "MS DRIVE",
    "category": "AMP",
    "title": "Marshall JCM2000 high gain sound modeling",
    "dsp": 3,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 82,
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
        "default": 103,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": 0,
        "max": 100,
        "default": 45,
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
        "default": 56,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Prese",
        "min": 0,
        "max": 100,
        "default": 53,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 256,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "LINE",
          "COMBO FRONT",
          "STACK FRONT",
          "COMBO POWER AMP",
          "STACK POWER AMP"
        ]
      }
    ]
  },
  "524": {
    "midiId": 524,
    "hexId": "0x0000020c",
    "name": "Vibrato",
    "category": "MOD",
    "title": "Automatic vibrato",
    "dsp": 12,
    "params": [
      {
        "name": "Depth",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rate",
        "min": 0,
        "max": 78,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bal",
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
        "max": 10,
        "default": 7,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 120,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "528": {
    "midiId": 528,
    "hexId": "0x00000210",
    "name": "DriveEcho",
    "category": "DELAY",
    "title": "LINE6 M9 TubeEcho modeling",
    "dsp": 2,
    "params": [
      {
        "name": "DRIVE",
        "min": 0,
        "max": 100,
        "default": 39,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "MIX",
        "min": 0,
        "max": 100,
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "TIME",
        "min": 0,
        "max": 1985,
        "default": 355,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "F.B",
        "min": 0,
        "max": 100,
        "default": 70,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "WOW",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "DRV",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "DRIV",
          "THRU"
        ]
      },
      {
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      },
      {
        "name": "Mode",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "MONO",
          "STR"
        ]
      }
    ]
  },
  "530": {
    "midiId": 530,
    "hexId": "0x00000212",
    "name": "Cave",
    "category": "REVERB",
    "title": "Reverbrations of a cave simulation",
    "dsp": 3,
    "params": [
      {
        "name": "Decay",
        "min": 0,
        "max": 100,
        "default": 52,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 100,
        "default": 54,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PreD",
        "min": 0,
        "max": 200,
        "default": 62,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "774": {
    "midiId": 774,
    "hexId": "0x00000306",
    "name": "BG_THRTTL",
    "category": "DRIVE",
    "title": "Mesa Boogie THROTTLE BOX modeling",
    "dsp": 3,
    "params": [
      {
        "name": "LEVEL",
        "min": 0,
        "max": 100,
        "default": 54,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "LO/HI",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "LO",
          "HI"
        ]
      },
      {
        "name": "GAIN",
        "min": 0,
        "max": 100,
        "default": 78,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "MdCut",
        "min": 0,
        "max": 100,
        "default": 46,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "TONE",
        "min": 0,
        "max": 100,
        "default": 56,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "BOOST",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "780": {
    "midiId": 780,
    "hexId": "0x0000030c",
    "name": "CE-Cho5",
    "category": "MOD",
    "title": "BOSS CE-5 chorus modeling",
    "dsp": 10,
    "params": [
      {
        "name": "E.LVL",
        "min": 0,
        "max": 120,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "RATE",
        "min": 0,
        "max": 100,
        "default": 31,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "DEPTH",
        "min": 0,
        "max": 100,
        "default": 67,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "LOW",
        "min": 0,
        "max": 100,
        "default": 43,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "HIGH",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "MODE",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "MONO",
          "STR"
        ]
      }
    ]
  },
  "784": {
    "midiId": 784,
    "hexId": "0x00000310",
    "name": "ICE Delay",
    "category": "DELAY",
    "title": "Strymon TIMELINE ICE mode pitch shifting delay modeling",
    "dsp": 3,
    "params": [
      {
        "name": "TIME",
        "min": 0,
        "max": 1255,
        "default": 440,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "F.B",
        "min": 0,
        "max": 100,
        "default": 64,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "MIX",
        "min": 0,
        "max": 100,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "INTVL",
        "min": 0,
        "max": 30,
        "default": 23,
        "unit": "",
        "type": "select",
        "options": [
          "-Oct",
          "-M7",
          "-m7",
          "-M6",
          "-m6",
          "-P5",
          "-Tri",
          "-P4",
          "-M3",
          "-m3",
          "-M2",
          "-m2",
          "-50c",
          "-25c",
          "Uni",
          "+25c",
          "+50c",
          "+m2",
          "+M2",
          "+m3",
          "+M3",
          "+P4",
          "+Tri",
          "+P5",
          "+m6",
          "+M6",
          "+m7",
          "+M7",
          "+Oct",
          "Oc+5",
          "2Oct"
        ]
      },
      {
        "name": "SLICE",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "SHORT",
          "LONG"
        ]
      },
      {
        "name": "BLEND",
        "min": 0,
        "max": 20,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "SMEAR",
        "min": 0,
        "max": 20,
        "default": 7,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "DAMP",
        "min": 0,
        "max": 10,
        "default": 2,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "HPF",
        "min": 0,
        "max": 20,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "20",
          "40",
          "60",
          "80",
          "100",
          "120",
          "140",
          "160",
          "180",
          "200",
          "230",
          "260",
          "300",
          "350",
          "400",
          "500",
          "600",
          "700",
          "800",
          "900"
        ]
      }
    ]
  },
  "786": {
    "midiId": 786,
    "hexId": "0x00000312",
    "name": "ShimmerRv",
    "category": "REVERB",
    "title": "Strymon blueSky shimmer mode pitch-shifting delay/reverb modeling",
    "dsp": 2,
    "params": [
      {
        "name": "PreD",
        "min": 1,
        "max": 100,
        "default": 39,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "DECAY",
        "min": 0,
        "max": 100,
        "default": 90,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "MIX",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "LoDMP",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "HiDMP",
        "min": 0,
        "max": 100,
        "default": 74,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "1036": {
    "midiId": 1036,
    "hexId": "0x0000040c",
    "name": "CoronaTri",
    "category": "MOD",
    "title": "tc electonic CORONA Tri-Chorus modeling",
    "dsp": 4,
    "params": [
      {
        "name": "SPEED",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "DEPTH",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "FxLVL",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "TONE",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "DRY",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "1048578": {
    "midiId": 1048578,
    "hexId": "0x00100002",
    "name": "Comp",
    "category": "DYNAMICS",
    "title": "MXR DynaComp style comp",
    "dsp": 14,
    "params": [
      {
        "name": "Sense",
        "min": 0,
        "max": 10,
        "default": 6,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 6,
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
        "name": "ATTCK",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "Slow",
          "Fast"
        ]
      }
    ]
  },
  "1048580": {
    "midiId": 1048580,
    "hexId": "0x00100004",
    "name": "LineSel",
    "category": "FILTER",
    "title": "Send directly to OUTPUT when OFF",
    "dsp": 18,
    "params": [
      {
        "name": "EFX_L",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "OUT_L",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1048582": {
    "midiId": 1048582,
    "hexId": "0x00100006",
    "name": "Booster",
    "category": "DRIVE",
    "title": "Boost signal gain for more power",
    "dsp": 8,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 80,
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
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1048584": {
    "midiId": 1048584,
    "hexId": "0x00100008",
    "name": "FD COMBO",
    "category": "AMP",
    "title": "Fender Twin Reverb ('65) modeling",
    "dsp": 3,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 24,
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
        "default": 86,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": 0,
        "max": 100,
        "default": 48,
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
        "default": 44,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Prese",
        "min": 0,
        "max": 100,
        "default": 52,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 8,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "LINE",
          "COMBO FRONT",
          "STACK FRONT",
          "COMBO POWER AMP",
          "STACK POWER AMP"
        ]
      }
    ]
  },
  "1048588": {
    "midiId": 1048588,
    "hexId": "0x0010000c",
    "name": "Tremolo",
    "category": "MOD",
    "title": "Volume varieing effect",
    "dsp": 14,
    "params": [
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
        "name": "Rate",
        "min": 0,
        "max": 78,
        "default": 33,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 130,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Wave",
        "min": 0,
        "max": 29,
        "default": 21,
        "unit": "",
        "type": "select",
        "options": [
          "UP 0",
          "UP 1",
          "UP 2",
          "UP 3",
          "UP 4",
          "UP 5",
          "UP 6",
          "UP 7",
          "UP 8",
          "UP 9",
          "DWN 0",
          "DWN 1",
          "DWN 2",
          "DWN 3",
          "DWN 4",
          "DWN 5",
          "DWN 6",
          "DWN 7",
          "DWN 8",
          "DWN 9",
          "TRI 0",
          "TRI 1",
          "TRI 2",
          "TRI 3",
          "TRI 4",
          "TRI 5",
          "TRI 6",
          "TRI 7",
          "TRI 8",
          "TRI 9"
        ]
      }
    ]
  },
  "1048592": {
    "midiId": 1048592,
    "hexId": "0x00100010",
    "name": "Delay",
    "category": "DELAY",
    "title": "Long delay upto 4000ms",
    "dsp": 14,
    "params": [
      {
        "name": "Time",
        "min": 0,
        "max": 4022,
        "default": 559,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "F.B",
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
        "default": 70,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "HiDMP",
        "min": 0,
        "max": 10,
        "default": 10,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "P-P",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "MONO",
          "P-P"
        ]
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
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "1048594": {
    "midiId": 1048594,
    "hexId": "0x00100012",
    "name": "HD Hall",
    "category": "REVERB",
    "title": "Dense hall reverb",
    "dsp": 2,
    "params": [
      {
        "name": "PreD",
        "min": 1,
        "max": 200,
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Decay",
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
        "default": 62,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "LoDMP",
        "min": 0,
        "max": 100,
        "default": 32,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "HiDMP",
        "min": 0,
        "max": 100,
        "default": 70,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "1048836": {
    "midiId": 1048836,
    "hexId": "0x00100104",
    "name": "Z Tron",
    "category": "FILTER",
    "title": "Envelope Filter like Q-Tron in LP mode",
    "dsp": 15,
    "params": [
      {
        "name": "Sense",
        "min": 0,
        "max": 19,
        "default": 12,
        "unit": "",
        "type": "select",
        "options": [
          "-10",
          "-9",
          "-8",
          "-7",
          "-6",
          "-5",
          "-4",
          "-3",
          "-2",
          "-1",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ]
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 10,
        "default": 7,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Dry",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 108,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1048844": {
    "midiId": 1048844,
    "hexId": "0x0010010c",
    "name": "Ba Detune",
    "category": "MOD",
    "title": "Mix a small amount of the pitch-shift",
    "dsp": 7,
    "params": [
      {
        "name": "Cent",
        "min": -50,
        "max": 0,
        "default": 35,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PreD",
        "min": 0,
        "max": 50,
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
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 8,
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
        "name": "LoCut",
        "min": 0,
        "max": 10,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "60Hz",
          "120Hz",
          "180Hz",
          "200Hz",
          "280Hz",
          "340Hz",
          "400Hz",
          "500Hz",
          "630Hz",
          "800Hz"
        ]
      }
    ]
  },
  "1572882": {
    "midiId": 1572882,
    "hexId": "0x00180012",
    "name": "HD Reverb",
    "category": "REVERB",
    "title": "High definition reverb",
    "dsp": 5,
    "params": [
      {
        "name": "Decay",
        "min": 0,
        "max": 100,
        "default": 10,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 7,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 46,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PreD",
        "min": 1,
        "max": 200,
        "default": 53,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "HPF",
        "min": 0,
        "max": 10,
        "default": 7,
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
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "2097154": {
    "midiId": 2097154,
    "hexId": "0x00200002",
    "name": "RackComp",
    "category": "DYNAMICS",
    "title": "Comp with more detailed parameter",
    "dsp": 12,
    "params": [
      {
        "name": "THRSH",
        "min": 0,
        "max": 50,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Ratio",
        "min": 1,
        "max": 10,
        "default": 5,
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
        "name": "ATTCK",
        "min": 1,
        "max": 10,
        "default": 6,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "2097156": {
    "midiId": 2097156,
    "hexId": "0x00200004",
    "name": "GraphicEQ",
    "category": "FILTER",
    "title": "6-band quealizer",
    "dsp": 12,
    "params": [
      {
        "name": "160Hz",
        "min": -12,
        "max": 12,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "400Hz",
        "min": -12,
        "max": 12,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "800Hz",
        "min": -12,
        "max": 12,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "3.2kHz",
        "min": -12,
        "max": 12,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "6.4kHz",
        "min": -12,
        "max": 12,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "12kHz",
        "min": -12,
        "max": 12,
        "default": 12,
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
      }
    ]
  },
  "2097158": {
    "midiId": 2097158,
    "hexId": "0x00200006",
    "name": "OverDrive",
    "category": "DRIVE",
    "title": "BOSS OD-1 Overdrive modiling",
    "dsp": 8,
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
        "name": "Tone",
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
      }
    ]
  },
  "2097160": {
    "midiId": 2097160,
    "hexId": "0x00200008",
    "name": "DELUXE-R",
    "category": "AMP",
    "title": "Fender Deluxe Reverb ('65) modeling",
    "dsp": 2,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 50,
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
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "LINE",
          "COMBO FRONT",
          "STACK FRONT",
          "COMBO POWER AMP",
          "STACK POWER AMP"
        ]
      }
    ]
  },
  "2097162": {
    "midiId": 2097162,
    "hexId": "0x0020000a",
    "name": "SVT",
    "category": "AMP",
    "title": "Ampeg SVT simulation",
    "dsp": 4,
    "params": [
      {
        "name": "Bass",
        "min": -10,
        "max": 10,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": -10,
        "max": 10,
        "default": 14,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": -10,
        "max": 10,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid_F",
        "min": 0,
        "max": 30,
        "default": 15,
        "unit": "",
        "type": "select",
        "options": [
          "32Hz",
          "40Hz",
          "50Hz",
          "63Hz",
          "70Hz",
          "80Hz",
          "100Hz",
          "120Hz",
          "140Hz",
          "150Hz",
          "160Hz",
          "180Hz",
          "200Hz",
          "250Hz",
          "300Hz",
          "350Hz",
          "400Hz",
          "450Hz",
          "500Hz",
          "630Hz",
          "800Hz",
          "1.0kHz",
          "1.2kHz",
          "1.6kHz",
          "2.0kHz",
          "2.5kHz",
          "3.0kHz",
          "3.6kHz",
          "4.0kHz",
          "4.5kHz",
          "6.3kHz"
        ]
      },
      {
        "name": "Gain",
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
        "default": 38,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Ultra",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "Low",
          "Hi",
          "Both",
          "Cut"
        ]
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 16,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "2097164": {
    "midiId": 2097164,
    "hexId": "0x0020000c",
    "name": "DuoTrem",
    "category": "MOD",
    "title": "Combines two tremolos",
    "dsp": 13,
    "params": [
      {
        "name": "RateA",
        "min": 0,
        "max": 78,
        "default": 46,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "RateB",
        "min": 0,
        "max": 78,
        "default": 5,
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
        "name": "DPT_A",
        "min": 0,
        "max": 100,
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "DPT_B",
        "min": 0,
        "max": 100,
        "default": 90,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Link",
        "min": 0,
        "max": 2,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "Seri",
          "Para",
          "STR"
        ]
      },
      {
        "name": "WaveA",
        "min": 0,
        "max": 29,
        "default": 19,
        "unit": "",
        "type": "select",
        "options": [
          "UP 0",
          "UP 1",
          "UP 2",
          "UP 3",
          "UP 4",
          "UP 5",
          "UP 6",
          "UP 7",
          "UP 8",
          "UP 9",
          "DWN 0",
          "DWN 1",
          "DWN 2",
          "DWN 3",
          "DWN 4",
          "DWN 5",
          "DWN 6",
          "DWN 7",
          "DWN 8",
          "DWN 9",
          "TRI 0",
          "TRI 1",
          "TRI 2",
          "TRI 3",
          "TRI 4",
          "TRI 5",
          "TRI 6",
          "TRI 7",
          "TRI 8",
          "TRI 9"
        ]
      },
      {
        "name": "WaveB",
        "min": 0,
        "max": 29,
        "default": 21,
        "unit": "",
        "type": "select",
        "options": [
          "UP 0",
          "UP 1",
          "UP 2",
          "UP 3",
          "UP 4",
          "UP 5",
          "UP 6",
          "UP 7",
          "UP 8",
          "UP 9",
          "DWN 0",
          "DWN 1",
          "DWN 2",
          "DWN 3",
          "DWN 4",
          "DWN 5",
          "DWN 6",
          "DWN 7",
          "DWN 8",
          "DWN 9",
          "TRI 0",
          "TRI 1",
          "TRI 2",
          "TRI 3",
          "TRI 4",
          "TRI 5",
          "TRI 6",
          "TRI 7",
          "TRI 8",
          "TRI 9"
        ]
      }
    ]
  },
  "2097166": {
    "midiId": 2097166,
    "hexId": "0x0020000e",
    "name": "BitCrush",
    "category": "SFX",
    "title": "Lo-Fi effect",
    "dsp": 14,
    "params": [
      {
        "name": "Bit",
        "min": 4,
        "max": 16,
        "default": 5,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "SMPL",
        "min": 0,
        "max": 50,
        "default": 2,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bal",
        "min": 0,
        "max": 100,
        "default": 90,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 8,
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
      }
    ]
  },
  "2097168": {
    "midiId": 2097168,
    "hexId": "0x00200010",
    "name": "TapeEcho",
    "category": "DELAY",
    "title": "Tape echo simulation",
    "dsp": 12,
    "params": [
      {
        "name": "Time",
        "min": 0,
        "max": 2014,
        "default": 559,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "F.B",
        "min": 0,
        "max": 100,
        "default": 64,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 56,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "HiDMP",
        "min": 0,
        "max": 10,
        "default": 5,
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
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "2097170": {
    "midiId": 2097170,
    "hexId": "0x00200012",
    "name": "Hall",
    "category": "REVERB",
    "title": "Concert hall simulation",
    "dsp": 9,
    "params": [
      {
        "name": "Decay",
        "min": 1,
        "max": 30,
        "default": 9,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 5,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 46,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PreD",
        "min": 1,
        "max": 100,
        "default": 48,
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
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "2097176": {
    "midiId": 2097176,
    "hexId": "0x00200018",
    "name": "Ba Boost",
    "category": "DRIVE",
    "title": "Xotic EP Booster simulation",
    "dsp": 6,
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
        "name": "Bass",
        "min": -10,
        "max": 10,
        "default": 10,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": -10,
        "max": 10,
        "default": 8,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 78,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "2097178": {
    "midiId": 2097178,
    "hexId": "0x0020001a",
    "name": "BassDrive",
    "category": "DRIVE",
    "title": "SansAmp BASS DRIVER DI simulation",
    "dsp": 5,
    "params": [
      {
        "name": "Bass",
        "min": -10,
        "max": 10,
        "default": 11,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": -10,
        "max": 10,
        "default": 11,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Prese",
        "min": -10,
        "max": 10,
        "default": 13,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 93,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Blend",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": -10,
        "max": 10,
        "default": 17,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "2097410": {
    "midiId": 2097410,
    "hexId": "0x00200102",
    "name": "GrayComp",
    "category": "DYNAMICS",
    "title": "ROSS Compressor modiling",
    "dsp": 5,
    "params": [
      {
        "name": "SUSTN",
        "min": 0,
        "max": 100,
        "default": 63,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 100,
        "default": 88,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "2097412": {
    "midiId": 2097412,
    "hexId": "0x00200104",
    "name": "M-Filter",
    "category": "FILTER",
    "title": "Evelope filter with Moog MF-101 like LPF",
    "dsp": 8,
    "params": [
      {
        "name": "Freq",
        "min": 0,
        "max": 100,
        "default": 56,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Sense",
        "min": 0,
        "max": 10,
        "default": 5,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 10,
        "default": 7,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Type",
        "min": 0,
        "max": 2,
        "default": 2,
        "unit": "",
        "type": "select",
        "options": [
          "HPF",
          "BPF",
          "LPF"
        ]
      },
      {
        "name": "Chara",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "2Pole",
          "4Pole"
        ]
      },
      {
        "name": "VLCTY",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "Fast",
          "Slow"
        ]
      },
      {
        "name": "Bal",
        "min": 0,
        "max": 100,
        "default": 100,
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
      }
    ]
  },
  "2097414": {
    "midiId": 2097414,
    "hexId": "0x00200106",
    "name": "MetalWRLD",
    "category": "DRIVE",
    "title": "BOSS Meta Zone modeling",
    "dsp": 8,
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
        "name": "Tone",
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
      }
    ]
  },
  "2097416": {
    "midiId": 2097416,
    "hexId": "0x00200108",
    "name": "TW ROCK",
    "category": "AMP",
    "title": "Two Rock Emerald 50 drive channel",
    "dsp": 3,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 53,
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
        "default": 95,
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
        "default": 51,
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
        "default": 144,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "LINE",
          "COMBO FRONT",
          "STACK FRONT",
          "COMBO POWER AMP",
          "STACK POWER AMP"
        ]
      }
    ]
  },
  "2097418": {
    "midiId": 2097418,
    "hexId": "0x0020010a",
    "name": "SuperB",
    "category": "AMP",
    "title": "Marshall Super Bass I simulation",
    "dsp": 3,
    "params": [
      {
        "name": "Bass",
        "min": -10,
        "max": 10,
        "default": 15,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": -10,
        "max": 10,
        "default": 17,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": -10,
        "max": 10,
        "default": 17,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid_F",
        "min": 0,
        "max": 30,
        "default": 13,
        "unit": "",
        "type": "select",
        "options": [
          "32Hz",
          "40Hz",
          "50Hz",
          "63Hz",
          "70Hz",
          "80Hz",
          "100Hz",
          "120Hz",
          "140Hz",
          "150Hz",
          "160Hz",
          "180Hz",
          "200Hz",
          "250Hz",
          "300Hz",
          "350Hz",
          "400Hz",
          "450Hz",
          "500Hz",
          "630Hz",
          "800Hz",
          "1.0kHz",
          "1.2kHz",
          "1.6kHz",
          "2.0kHz",
          "2.5kHz",
          "3.0kHz",
          "3.6kHz",
          "4.0kHz",
          "4.5kHz",
          "6.3kHz"
        ]
      },
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 55,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Prese",
        "min": 0,
        "max": 10,
        "default": 8,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 144,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "2097420": {
    "midiId": 2097420,
    "hexId": "0x0020010c",
    "name": "VintageCE",
    "category": "MOD",
    "title": "BOSS CE-1 modeling",
    "dsp": 11,
    "params": [
      {
        "name": "Comp",
        "min": 0,
        "max": 9,
        "default": 2,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rate",
        "min": 1,
        "max": 50,
        "default": 24,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
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
      }
    ]
  },
  "2097422": {
    "midiId": 2097422,
    "hexId": "0x0020010e",
    "name": "Z-Syn",
    "category": "SFX",
    "title": "analog bass synth sound",
    "dsp": 5,
    "params": [
      {
        "name": "Wave",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "Saw",
          "Sqr"
        ]
      },
      {
        "name": "Decay",
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
        "max": 10,
        "default": 7,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Freq",
        "min": 0,
        "max": 10,
        "default": 2,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Range",
        "min": 0,
        "max": 20,
        "default": 8,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 20,
        "default": 18,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Synth",
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
        "default": 0,
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
      }
    ]
  },
  "2097424": {
    "midiId": 2097424,
    "hexId": "0x00200110",
    "name": "StereoDly",
    "category": "DELAY",
    "title": "Stereo delay with L/R separate delay times",
    "dsp": 11,
    "params": [
      {
        "name": "TimeL",
        "min": 0,
        "max": 2014,
        "default": 164,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "TimeR",
        "min": 0,
        "max": 2014,
        "default": 504,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "LchFB",
        "min": 0,
        "max": 100,
        "default": 55,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "RchFB",
        "min": 0,
        "max": 100,
        "default": 37,
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
        "name": "LchLv",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "RchLv",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "2097426": {
    "midiId": 2097426,
    "hexId": "0x00200112",
    "name": "Plate",
    "category": "REVERB",
    "title": "Plate reverb simulation",
    "dsp": 3,
    "params": [
      {
        "name": "PreD",
        "min": 1,
        "max": 200,
        "default": 8,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Decay",
        "min": 0,
        "max": 100,
        "default": 52,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 44,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Color",
        "min": 0,
        "max": 100,
        "default": 58,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "LoDMP",
        "min": 0,
        "max": 100,
        "default": 97,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "HiDMP",
        "min": 0,
        "max": 100,
        "default": 95,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "2097432": {
    "midiId": 2097432,
    "hexId": "0x00200118",
    "name": "Ba Metal",
    "category": "DRIVE",
    "title": "BOSS Metal Zone emulation with added parameter",
    "dsp": 6,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 67,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 100,
        "default": 85,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bal",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "2097670": {
    "midiId": 2097670,
    "hexId": "0x00200206",
    "name": "Z Wild",
    "category": "DRIVE",
    "title": "High-gain sound even more overdrive",
    "dsp": 8,
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
        "name": "Tone",
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
      }
    ]
  },
  "2097672": {
    "midiId": 2097672,
    "hexId": "0x00200208",
    "name": "BGN DRIVE",
    "category": "AMP",
    "title": "Bogner Ecstasy lead sound modeling",
    "dsp": 2,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 84,
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
        "default": 91,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": 0,
        "max": 100,
        "default": 52,
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
        "default": 49,
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
        "default": 272,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "LINE",
          "COMBO FRONT",
          "STACK FRONT",
          "COMBO POWER AMP",
          "STACK POWER AMP"
        ]
      }
    ]
  },
  "2097676": {
    "midiId": 2097676,
    "hexId": "0x0020020c",
    "name": "Octave",
    "category": "MOD",
    "title": "Adding one/two octave below sound",
    "dsp": 12,
    "params": [
      {
        "name": "Oct1",
        "min": 0,
        "max": 100,
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Oct2",
        "min": 0,
        "max": 100,
        "default": 15,
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
        "name": "Chara",
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
        "max": 10,
        "default": 8,
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
      }
    ]
  },
  "2097680": {
    "midiId": 2097680,
    "hexId": "0x00200210",
    "name": "SlapBackD",
    "category": "DELAY",
    "title": "tc electonic FLASHBACK set for SLAP delay modeling",
    "dsp": 5,
    "params": [
      {
        "name": "TIME",
        "min": 0,
        "max": 300,
        "default": 98,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "SubDv",
        "min": 0,
        "max": 2,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "&#x1D15F;",
          "&#x1D160;.",
          "P-P"
        ]
      },
      {
        "name": "F.B",
        "min": 0,
        "max": 100,
        "default": 29,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "FxLVL",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "DRY",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      },
      {
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      },
      {
        "name": "Mode",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "2097682": {
    "midiId": 2097682,
    "hexId": "0x00200212",
    "name": "Ambience",
    "category": "REVERB",
    "title": "Natural ambience reverb",
    "dsp": 2,
    "params": [
      {
        "name": "DECAY",
        "min": 0,
        "max": 100,
        "default": 70,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "TONE",
        "min": 0,
        "max": 100,
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "MIX",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PreD",
        "min": 0,
        "max": 200,
        "default": 29,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      },
      {
        "name": "Dry",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "2097926": {
    "midiId": 2097926,
    "hexId": "0x00200306",
    "name": "OctFuzz",
    "category": "DRIVE",
    "title": "Fuzz adding an octave above",
    "dsp": 4,
    "params": [
      {
        "name": "VOL",
        "min": 0,
        "max": 100,
        "default": 68,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "COLOR",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "1",
          "2"
        ]
      },
      {
        "name": "BOOST",
        "min": 0,
        "max": 100,
        "default": 65,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "2097932": {
    "midiId": 2097932,
    "hexId": "0x0020030c",
    "name": "CloneCho",
    "category": "MOD",
    "title": "Electro-Harmonix SmallClone chorus modeling",
    "dsp": 9,
    "params": [
      {
        "name": "DEPTH",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "1",
          "2"
        ]
      },
      {
        "name": "RATE",
        "min": 0,
        "max": 100,
        "default": 23,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "2097938": {
    "midiId": 2097938,
    "hexId": "0x00200312",
    "name": "ParticleR",
    "category": "REVERB",
    "title": "LINE6 M9 Particle Verb complex reverb modeling",
    "dsp": 2,
    "params": [
      {
        "name": "DWELL",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "GAIN",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "MODE",
        "min": 0,
        "max": 2,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "STBL",
          "CRTCL",
          "HZD"
        ]
      },
      {
        "name": "MIX",
        "min": 0,
        "max": 100,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "MONO",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      },
      {
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "2098182": {
    "midiId": 2098182,
    "hexId": "0x00200406",
    "name": "DynmcDrv",
    "category": "DRIVE",
    "title": "Warm drive tone of a tube amp",
    "dsp": 3,
    "params": [
      {
        "name": "LEVEL",
        "min": 0,
        "max": 100,
        "default": 62,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "TONE",
        "min": 0,
        "max": 100,
        "default": 67,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "GAIN",
        "min": 0,
        "max": 100,
        "default": 78,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "MODE",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "COMBO",
          "STACK"
        ]
      }
    ]
  },
  "2752772": {
    "midiId": 2752772,
    "hexId": "0x002a0104",
    "name": "A-Filter",
    "category": "FILTER",
    "title": "Resonance filter with a sharp envelope",
    "dsp": 14,
    "params": [
      {
        "name": "Sense",
        "min": 1,
        "max": 10,
        "default": 7,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Peak",
        "min": 0,
        "max": 10,
        "default": 7,
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
        "type": "select",
        "options": [
          "Up",
          "Down"
        ]
      },
      {
        "name": "Dry",
        "min": 0,
        "max": 100,
        "default": 10,
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
      }
    ]
  },
  "3145730": {
    "midiId": 3145730,
    "hexId": "0x00300002",
    "name": "D Comp",
    "category": "DYNAMICS",
    "title": "MXR Dyna Comp style comp",
    "dsp": 10,
    "params": [
      {
        "name": "Sense",
        "min": 0,
        "max": 10,
        "default": 3,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 8,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 125,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "ATTCK",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "Slow",
          "Fast"
        ]
      }
    ]
  },
  "3145732": {
    "midiId": 3145732,
    "hexId": "0x00300004",
    "name": "Ba GEQ",
    "category": "FILTER",
    "title": "7 bands GEQ for bass",
    "dsp": 10,
    "params": [
      {
        "name": "50Hz",
        "min": -12,
        "max": 12,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "120Hz",
        "min": -12,
        "max": 12,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "400Hz",
        "min": -12,
        "max": 12,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "500Hz",
        "min": -12,
        "max": 12,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "800Hz",
        "min": -12,
        "max": 12,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "4.5kHz",
        "min": -12,
        "max": 12,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "10kHz",
        "min": -12,
        "max": 12,
        "default": 12,
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
      }
    ]
  },
  "3146252": {
    "midiId": 3146252,
    "hexId": "0x0030020c",
    "name": "Ba Octave",
    "category": "MOD",
    "title": "Adds sound one octave below",
    "dsp": 11,
    "params": [
      {
        "name": "Oct",
        "min": 0,
        "max": 100,
        "default": 80,
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
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 8,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Low",
        "min": 0,
        "max": 10,
        "default": 3,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": 0,
        "max": 10,
        "default": 4,
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
      }
    ]
  },
  "3408132": {
    "midiId": 3408132,
    "hexId": "0x00340104",
    "name": "Ba Cry",
    "category": "FILTER",
    "title": "Bass frequency talking modulator",
    "dsp": 9,
    "params": [
      {
        "name": "Range",
        "min": 1,
        "max": 10,
        "default": 4,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 10,
        "default": 8,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Sense",
        "min": 0,
        "max": 19,
        "default": 16,
        "unit": "",
        "type": "select",
        "options": [
          "-10",
          "-9",
          "-8",
          "-7",
          "-6",
          "-5",
          "-4",
          "-3",
          "-2",
          "-1",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ]
      },
      {
        "name": "Bal",
        "min": 0,
        "max": 100,
        "default": 100,
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
      }
    ]
  },
  "4194306": {
    "midiId": 4194306,
    "hexId": "0x00400002",
    "name": "M Comp",
    "category": "DYNAMICS",
    "title": "More natural sound comp",
    "dsp": 10,
    "params": [
      {
        "name": "THRSH",
        "min": 0,
        "max": 50,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Ratio",
        "min": 1,
        "max": 10,
        "default": 3,
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
        "name": "ATTCK",
        "min": 1,
        "max": 10,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "4194308": {
    "midiId": 4194308,
    "hexId": "0x00400004",
    "name": "ParaEQ",
    "category": "FILTER",
    "title": "2-band parametric equalizer",
    "dsp": 16,
    "params": [
      {
        "name": "Freq1",
        "min": 0,
        "max": 30,
        "default": 8,
        "unit": "",
        "type": "select",
        "options": [
          "20Hz",
          "25Hz",
          "32Hz",
          "40Hz",
          "50Hz",
          "63Hz",
          "80Hz",
          "100Hz",
          "125Hz",
          "160Hz",
          "200Hz",
          "250Hz",
          "320Hz",
          "400Hz",
          "500Hz",
          "630Hz",
          "800Hz",
          "1.0kHz",
          "1.2kHz",
          "1.6kHz",
          "2.0kHz",
          "2.5kHz",
          "3.2kHz",
          "4.0kHz",
          "5.0kHz",
          "6.3kHz",
          "8.0kHz",
          "10kHz",
          "12kHz",
          "16kHz",
          "20kHz"
        ]
      },
      {
        "name": "Q1",
        "min": 0,
        "max": 5,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "0.5",
          "1",
          "2",
          "4",
          "8",
          "16"
        ]
      },
      {
        "name": "Gain1",
        "min": -12,
        "max": 12,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Freq2",
        "min": 0,
        "max": 30,
        "default": 15,
        "unit": "",
        "type": "select",
        "options": [
          "20Hz",
          "25Hz",
          "32Hz",
          "40Hz",
          "50Hz",
          "63Hz",
          "80Hz",
          "100Hz",
          "125Hz",
          "160Hz",
          "200Hz",
          "250Hz",
          "320Hz",
          "400Hz",
          "500Hz",
          "630Hz",
          "800Hz",
          "1.0kHz",
          "1.2kHz",
          "1.6kHz",
          "2.0kHz",
          "2.5kHz",
          "3.2kHz",
          "4.0kHz",
          "5.0kHz",
          "6.3kHz",
          "8.0kHz",
          "10kHz",
          "12kHz",
          "16kHz",
          "20kHz"
        ]
      },
      {
        "name": "Q2",
        "min": 0,
        "max": 5,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "0.5",
          "1",
          "2",
          "4",
          "8",
          "16"
        ]
      },
      {
        "name": "Gain2",
        "min": -12,
        "max": 12,
        "default": 12,
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
      }
    ]
  },
  "4194310": {
    "midiId": 4194310,
    "hexId": "0x00400006",
    "name": "T Scream",
    "category": "DRIVE",
    "title": "Ibanez TS808 modeling",
    "dsp": 8,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 70,
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
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "4194312": {
    "midiId": 4194312,
    "hexId": "0x00400008",
    "name": "FD VIBRO",
    "category": "AMP",
    "title": "Fender Vibroverb ('63) modeling",
    "dsp": 3,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 56,
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
        "default": 98,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": 0,
        "max": 100,
        "default": 54,
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
        "default": 47,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Prese",
        "min": 0,
        "max": 100,
        "default": 52,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 32,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "LINE",
          "COMBO FRONT",
          "STACK FRONT",
          "COMBO POWER AMP",
          "STACK POWER AMP"
        ]
      }
    ]
  },
  "4194314": {
    "midiId": 4194314,
    "hexId": "0x0040000a",
    "name": "B-Man",
    "category": "AMP",
    "title": "Fender BASSMAN 100 simulation",
    "dsp": 4,
    "params": [
      {
        "name": "Bass",
        "min": -10,
        "max": 10,
        "default": 15,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": -10,
        "max": 10,
        "default": 16,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": -10,
        "max": 10,
        "default": 10,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid_F",
        "min": 0,
        "max": 30,
        "default": 12,
        "unit": "",
        "type": "select",
        "options": [
          "32Hz",
          "40Hz",
          "50Hz",
          "63Hz",
          "70Hz",
          "80Hz",
          "100Hz",
          "120Hz",
          "140Hz",
          "150Hz",
          "160Hz",
          "180Hz",
          "200Hz",
          "250Hz",
          "300Hz",
          "350Hz",
          "400Hz",
          "450Hz",
          "500Hz",
          "630Hz",
          "800Hz",
          "1.0kHz",
          "1.2kHz",
          "1.6kHz",
          "2.0kHz",
          "2.5kHz",
          "3.0kHz",
          "3.6kHz",
          "4.0kHz",
          "4.5kHz",
          "6.3kHz"
        ]
      },
      {
        "name": "Gain",
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
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Deep",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 32,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "4194316": {
    "midiId": 4194316,
    "hexId": "0x0040000c",
    "name": "Slicer",
    "category": "MOD",
    "title": "Rhythmical sounds by slicing",
    "dsp": 12,
    "params": [
      {
        "name": "PTTRN",
        "min": 1,
        "max": 20,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Speed",
        "min": 1,
        "max": 78,
        "default": 24,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bal",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "THRSH",
        "min": 0,
        "max": 50,
        "default": 20,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 130,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "4194318": {
    "midiId": 4194318,
    "hexId": "0x0040000e",
    "name": "Bomber",
    "category": "SFX",
    "title": "Explosive sound effect",
    "dsp": 11,
    "params": [
      {
        "name": "PTTRN",
        "min": 0,
        "max": 3,
        "default": 3,
        "unit": "",
        "type": "select",
        "options": [
          "HndGn",
          "Arm",
          "Bomb",
          "Thndr"
        ]
      },
      {
        "name": "Deay",
        "min": 1,
        "max": 100,
        "default": 49,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bal",
        "min": 0,
        "max": 100,
        "default": 15,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "THRSH",
        "min": 0,
        "max": 50,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Power",
        "min": 0,
        "max": 30,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 4,
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
      }
    ]
  },
  "4194320": {
    "midiId": 4194320,
    "hexId": "0x00400010",
    "name": "ModDelay",
    "category": "DELAY",
    "title": "Delay effect with modulation",
    "dsp": 12,
    "params": [
      {
        "name": "Time",
        "min": 0,
        "max": 2014,
        "default": 499,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "F.B",
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
        "default": 62,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rate",
        "min": 1,
        "max": 50,
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
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "4194322": {
    "midiId": 4194322,
    "hexId": "0x00400012",
    "name": "Room",
    "category": "REVERB",
    "title": "A room simulation",
    "dsp": 11,
    "params": [
      {
        "name": "Decay",
        "min": 1,
        "max": 30,
        "default": 9,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 8,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PreD",
        "min": 1,
        "max": 100,
        "default": 4,
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
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "4194328": {
    "midiId": 4194328,
    "hexId": "0x00400018",
    "name": "Bass OD",
    "category": "DRIVE",
    "title": "BOSS ODB-3 simulation",
    "dsp": 6,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
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
        "default": 120,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bal",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "4194330": {
    "midiId": 4194330,
    "hexId": "0x0040001a",
    "name": "D.I Plus",
    "category": "DRIVE",
    "title": "MXR Bass D.I.+ simulation",
    "dsp": 5,
    "params": [
      {
        "name": "Bass",
        "min": -10,
        "max": 10,
        "default": 13,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": -10,
        "max": 10,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": -10,
        "max": 10,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Blend",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 120,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Color",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      },
      {
        "name": "CHAN",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "CLN",
          "DIST"
        ]
      }
    ]
  },
  "4194562": {
    "midiId": 4194562,
    "hexId": "0x00400102",
    "name": "DualComp",
    "category": "DYNAMICS",
    "title": "Compressor with low/high separate frequency",
    "dsp": 8,
    "params": [
      {
        "name": "Hi",
        "min": 0,
        "max": 50,
        "default": 24,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Lo",
        "min": 0,
        "max": 50,
        "default": 15,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Freq",
        "min": 0,
        "max": 9,
        "default": 9,
        "unit": "",
        "type": "select",
        "options": [
          "300Hz",
          "400Hz",
          "500Hz",
          "600Hz",
          "700Hz",
          "800Hz",
          "900Hz",
          "1.0kHz",
          "1.2kHz",
          "1.5kHz"
        ]
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
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 2,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "4194564": {
    "midiId": 4194564,
    "hexId": "0x00400104",
    "name": "Step",
    "category": "FILTER",
    "title": "Special effect for sound stepping",
    "dsp": 11,
    "params": [
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
        "name": "Rate",
        "min": 0,
        "max": 78,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 10,
        "default": 8,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Shape",
        "min": 0,
        "max": 10,
        "default": 10,
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
      }
    ]
  },
  "4194566": {
    "midiId": 4194566,
    "hexId": "0x00400106",
    "name": "HotBox",
    "category": "DRIVE",
    "title": "Matchless Hotbox pre-amp modeling",
    "dsp": 8,
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
        "name": "Tone",
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
      }
    ]
  },
  "4194568": {
    "midiId": 4194568,
    "hexId": "0x00400108",
    "name": "TONE CITY",
    "category": "AMP",
    "title": "Sound City 50 Plus Mark 2 modeling",
    "dsp": 2,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 78,
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
        "default": 89,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": 0,
        "max": 100,
        "default": 54,
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
        "default": 46,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Prese",
        "min": 0,
        "max": 100,
        "default": 52,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 160,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "LINE",
          "COMBO FRONT",
          "STACK FRONT",
          "COMBO POWER AMP",
          "STACK POWER AMP"
        ]
      }
    ]
  },
  "4194570": {
    "midiId": 4194570,
    "hexId": "0x0040010a",
    "name": "G-Krueger",
    "category": "AMP",
    "title": "Gallien-Krueger 800RB simulation",
    "dsp": 3,
    "params": [
      {
        "name": "Bass",
        "min": -10,
        "max": 10,
        "default": 18,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": -10,
        "max": 10,
        "default": 14,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": -10,
        "max": 10,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid_F",
        "min": 0,
        "max": 30,
        "default": 12,
        "unit": "",
        "type": "select",
        "options": [
          "32Hz",
          "40Hz",
          "50Hz",
          "63Hz",
          "70Hz",
          "80Hz",
          "100Hz",
          "120Hz",
          "140Hz",
          "150Hz",
          "160Hz",
          "180Hz",
          "200Hz",
          "250Hz",
          "300Hz",
          "350Hz",
          "400Hz",
          "450Hz",
          "500Hz",
          "630Hz",
          "800Hz",
          "1.0kHz",
          "1.2kHz",
          "1.6kHz",
          "2.0kHz",
          "2.5kHz",
          "3.0kHz",
          "3.6kHz",
          "4.0kHz",
          "4.5kHz",
          "6.3kHz"
        ]
      },
      {
        "name": "Gain",
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
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Color",
        "min": 0,
        "max": 3,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "Off",
          "Low",
          "Mid",
          "Hi"
        ]
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 160,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "4194572": {
    "midiId": 4194572,
    "hexId": "0x0040010c",
    "name": "StereoCho",
    "category": "MOD",
    "title": "Stereo chorus",
    "dsp": 12,
    "params": [
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
        "name": "Rate",
        "min": 1,
        "max": 50,
        "default": 29,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 7,
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
      }
    ]
  },
  "4194574": {
    "midiId": 4194574,
    "hexId": "0x0040010e",
    "name": "Defret",
    "category": "SFX",
    "title": "Fretless bass sound",
    "dsp": 11,
    "params": [
      {
        "name": "Sense",
        "min": 0,
        "max": 30,
        "default": 11,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Color",
        "min": 1,
        "max": 10,
        "default": 7,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 140,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 1,
        "max": 50,
        "default": 36,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "4194576": {
    "midiId": 4194576,
    "hexId": "0x00400110",
    "name": "PhaseDly",
    "category": "DELAY",
    "title": "Delay effect with phaser",
    "dsp": 8,
    "params": [
      {
        "name": "Time",
        "min": 0,
        "max": 2014,
        "default": 499,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "F.B",
        "min": 0,
        "max": 100,
        "default": 28,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 57,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rate",
        "min": 1,
        "max": 50,
        "default": 49,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Color",
        "min": 0,
        "max": 3,
        "default": 3,
        "unit": "",
        "type": "select",
        "options": [
          "4 STG",
          "8 STG",
          "inv 4",
          "inv 8"
        ]
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
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "4194578": {
    "midiId": 4194578,
    "hexId": "0x00400112",
    "name": "ModReverb",
    "category": "REVERB",
    "title": "Fluctuating echoes",
    "dsp": 4,
    "params": [
      {
        "name": "Depth",
        "min": 0,
        "max": 100,
        "default": 38,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Decay",
        "min": 1,
        "max": 30,
        "default": 19,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 45,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rate",
        "min": 1,
        "max": 50,
        "default": 19,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 6,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PreD",
        "min": 1,
        "max": 100,
        "default": 29,
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
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "4194584": {
    "midiId": 4194584,
    "hexId": "0x00400118",
    "name": "TS+DRY",
    "category": "DRIVE",
    "title": "Ibanez TS808 emulation with added parameter",
    "dsp": 6,
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
        "name": "Tone",
        "min": 0,
        "max": 100,
        "default": 74,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 110,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bal",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "4194822": {
    "midiId": 4194822,
    "hexId": "0x00400206",
    "name": "Lead",
    "category": "DRIVE",
    "title": "Bright and smooth distortion",
    "dsp": 8,
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
        "name": "Tone",
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
      }
    ]
  },
  "4194824": {
    "midiId": 4194824,
    "hexId": "0x00400208",
    "name": "BG DRIVE",
    "category": "AMP",
    "title": "Mesa Boogie Dual Rectifier red channel modeling",
    "dsp": 3,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 47,
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
        "default": 97,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": 0,
        "max": 100,
        "default": 48,
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
        "default": 52,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Prese",
        "min": 0,
        "max": 100,
        "default": 48,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 288,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "LINE",
          "COMBO FRONT",
          "STACK FRONT",
          "COMBO POWER AMP",
          "STACK POWER AMP"
        ]
      }
    ]
  },
  "4194828": {
    "midiId": 4194828,
    "hexId": "0x0040020c",
    "name": "PitchSHFT",
    "category": "MOD",
    "title": "Pitch shift up or down",
    "dsp": 14,
    "params": [
      {
        "name": "Shift",
        "min": 0,
        "max": 25,
        "default": 19,
        "unit": "",
        "type": "select",
        "options": [
          "-12",
          "-11",
          "-10",
          "-9",
          "-8",
          "-7",
          "-6",
          "-5",
          "-4",
          "-3",
          "-2",
          "-1",
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "24"
        ]
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 7,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bal",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Fine",
        "min": -25,
        "max": 25,
        "default": 25,
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
      }
    ]
  },
  "4194832": {
    "midiId": 4194832,
    "hexId": "0x00400210",
    "name": "SmoothDly",
    "category": "DELAY",
    "title": "BOSS DD-20 smooth mode delay modeling",
    "dsp": 3,
    "params": [
      {
        "name": "TIME",
        "min": 0,
        "max": 3014,
        "default": 322,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "F.B",
        "min": 0,
        "max": 100,
        "default": 39,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "E.LVL",
        "min": 0,
        "max": 100,
        "default": 49,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "TONE",
        "min": 0,
        "max": 100,
        "default": 83,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "4194834": {
    "midiId": 4194834,
    "hexId": "0x00400212",
    "name": "GateRev",
    "category": "REVERB",
    "title": "DigiTech RV-7(Lexicon) Gated setting modeling",
    "dsp": 3,
    "params": [
      {
        "name": "Level",
        "min": 0,
        "max": 100,
        "default": 60,
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
        "name": "Decay",
        "min": 0,
        "max": 100,
        "default": 55,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      },
      {
        "name": "Dry",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "4195078": {
    "midiId": 4195078,
    "hexId": "0x00400306",
    "name": "BG GRID",
    "category": "DRIVE",
    "title": "Mesa Boogie GRID SLAMMER modeling",
    "dsp": 3,
    "params": [
      {
        "name": "LEVEL",
        "min": 0,
        "max": 100,
        "default": 74,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "TONE",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "GAIN",
        "min": 0,
        "max": 100,
        "default": 68,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "4195084": {
    "midiId": 4195084,
    "hexId": "0x0040030c",
    "name": "StonePha",
    "category": "MOD",
    "title": "Electro-Harmonix SmallStone phaser modeling",
    "dsp": 10,
    "params": [
      {
        "name": "COLOR",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "1",
          "2"
        ]
      },
      {
        "name": "RATE",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "4195090": {
    "midiId": 4195090,
    "hexId": "0x00400312",
    "name": "SpaceHole",
    "category": "REVERB",
    "title": "Eventide SPACE BlackHole delay/reverb modeling",
    "dsp": 2,
    "params": [
      {
        "name": "Decay",
        "min": -100,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PDLY",
        "min": 0,
        "max": 1000,
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "F.B",
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
        "default": 58,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Speed",
        "min": 0,
        "max": 100,
        "default": 39,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Size",
        "min": 0,
        "max": 100,
        "default": 29,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Low",
        "min": -100,
        "max": 100,
        "default": 87,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "High",
        "min": -100,
        "max": 100,
        "default": 82,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "4718596": {
    "midiId": 4718596,
    "hexId": "0x00480004",
    "name": "Ba PEQ",
    "category": "FILTER",
    "title": "2-band parametric equalizer for bass",
    "dsp": 11,
    "params": [
      {
        "name": "Freq1",
        "min": 0,
        "max": 37,
        "default": 8,
        "unit": "",
        "type": "select",
        "options": [
          "20Hz",
          "25Hz",
          "32Hz",
          "40Hz",
          "50Hz",
          "63Hz",
          "70Hz",
          "80Hz",
          "100Hz",
          "120Hz",
          "140Hz",
          "150Hz",
          "160Hz",
          "180Hz",
          "200Hz",
          "250Hz",
          "300Hz",
          "350Hz",
          "400Hz",
          "450Hz",
          "500Hz",
          "630Hz",
          "800Hz",
          "1.0kHz",
          "1.2kHz",
          "1.6kHz",
          "2.0kHz",
          "2.5kHz",
          "3.0kHz",
          "3.6kHz",
          "4.0kHz",
          "4.5kHz",
          "6.3kHz",
          "8.0kHz",
          "10kHz",
          "12kHz",
          "16kHz",
          "20kHz"
        ]
      },
      {
        "name": "Q1",
        "min": 0,
        "max": 5,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "0.5",
          "1",
          "2",
          "4",
          "8",
          "16"
        ]
      },
      {
        "name": "Gain1",
        "min": -20,
        "max": 20,
        "default": 20,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Freq2",
        "min": 0,
        "max": 37,
        "default": 15,
        "unit": "",
        "type": "select",
        "options": [
          "20Hz",
          "25Hz",
          "32Hz",
          "40Hz",
          "50Hz",
          "63Hz",
          "70Hz",
          "80Hz",
          "100Hz",
          "120Hz",
          "140Hz",
          "150Hz",
          "160Hz",
          "180Hz",
          "200Hz",
          "250Hz",
          "300Hz",
          "350Hz",
          "400Hz",
          "450Hz",
          "500Hz",
          "630Hz",
          "800Hz",
          "1.0kHz",
          "1.2kHz",
          "1.6kHz",
          "2.0kHz",
          "2.5kHz",
          "3.0kHz",
          "3.6kHz",
          "4.0kHz",
          "4.5kHz",
          "6.3kHz",
          "8.0kHz",
          "10kHz",
          "12kHz",
          "16kHz",
          "20kHz"
        ]
      },
      {
        "name": "Q2",
        "min": 0,
        "max": 5,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "0.5",
          "1",
          "2",
          "4",
          "8",
          "16"
        ]
      },
      {
        "name": "Gain2",
        "min": -20,
        "max": 20,
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
      }
    ]
  },
  "5242884": {
    "midiId": 5242884,
    "hexId": "0x00500004",
    "name": "Splitter",
    "category": "FILTER",
    "title": "Divide into 2bands and mix with ratio",
    "dsp": 16,
    "params": [
      {
        "name": "Hi",
        "min": 0,
        "max": 50,
        "default": 19,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Lo",
        "min": 0,
        "max": 50,
        "default": 16,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Freq",
        "min": 0,
        "max": 15,
        "default": 2,
        "unit": "",
        "type": "select",
        "options": [
          "80Hz",
          "100Hz",
          "125Hz",
          "160Hz",
          "200hz",
          "250Hz",
          "315Hz",
          "400Hz",
          "500Hz",
          "630Hz",
          "800Hz",
          "1.0kHz",
          "1.3kHz",
          "1.6kHz",
          "2.0kHz",
          "2.5kHz"
        ]
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 95,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "5242896": {
    "midiId": 5242896,
    "hexId": "0x00500010",
    "name": "ModDelay2",
    "category": "DELAY",
    "title": "Modulation delay with depth adjust",
    "dsp": 8,
    "params": [
      {
        "name": "Time",
        "min": 0,
        "max": 2014,
        "default": 529,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "F.B",
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
        "default": 45,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rate",
        "min": 1,
        "max": 50,
        "default": 16,
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
        "name": "Depth",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "5767172": {
    "midiId": 5767172,
    "hexId": "0x00580004",
    "name": "Bottom B",
    "category": "FILTER",
    "title": "Emphasizes low/high frequencies",
    "dsp": 11,
    "params": [
      {
        "name": "Bass",
        "min": 0,
        "max": 10,
        "default": 6,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": 0,
        "max": 10,
        "default": 7,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "6291458": {
    "midiId": 6291458,
    "hexId": "0x00600002",
    "name": "OptComp",
    "category": "DYNAMICS",
    "title": "APHex Punch FACTORY style comp",
    "dsp": 8,
    "params": [
      {
        "name": "Drive",
        "min": 0,
        "max": 10,
        "default": 7,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 100,
        "default": 54,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "6291460": {
    "midiId": 6291460,
    "hexId": "0x00600004",
    "name": "Exciter",
    "category": "FILTER",
    "title": "2-band phase exciter",
    "dsp": 12,
    "params": [
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": 0,
        "max": 100,
        "default": 0,
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
      }
    ]
  },
  "6291462": {
    "midiId": 6291462,
    "hexId": "0x00600006",
    "name": "Governor",
    "category": "DRIVE",
    "title": "Marshall Guv'nor distortion modeling",
    "dsp": 8,
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
        "name": "Tone",
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
      }
    ]
  },
  "6291464": {
    "midiId": 6291464,
    "hexId": "0x00600008",
    "name": "US BLUES",
    "category": "AMP",
    "title": "Fender Tweed Bassman modeling",
    "dsp": 3,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 59,
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
        "default": 107,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": 0,
        "max": 100,
        "default": 46,
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
        "default": 48,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Prese",
        "min": 0,
        "max": 100,
        "default": 58,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 48,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "LINE",
          "COMBO FRONT",
          "STACK FRONT",
          "COMBO POWER AMP",
          "STACK POWER AMP"
        ]
      }
    ]
  },
  "6291466": {
    "midiId": 6291466,
    "hexId": "0x0060000a",
    "name": "HRT3500",
    "category": "AMP",
    "title": " Hartke HA3500 simulation",
    "dsp": 4,
    "params": [
      {
        "name": "Bass",
        "min": -10,
        "max": 10,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": -10,
        "max": 10,
        "default": 14,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": -10,
        "max": 10,
        "default": 11,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid_F",
        "min": 0,
        "max": 30,
        "default": 12,
        "unit": "",
        "type": "select",
        "options": [
          "32Hz",
          "40Hz",
          "50Hz",
          "63Hz",
          "70Hz",
          "80Hz",
          "100Hz",
          "120Hz",
          "140Hz",
          "150Hz",
          "160Hz",
          "180Hz",
          "200Hz",
          "250Hz",
          "300Hz",
          "350Hz",
          "400Hz",
          "450Hz",
          "500Hz",
          "630Hz",
          "800Hz",
          "1.0kHz",
          "1.2kHz",
          "1.6kHz",
          "2.0kHz",
          "2.5kHz",
          "3.0kHz",
          "3.6kHz",
          "4.0kHz",
          "4.5kHz",
          "6.3kHz"
        ]
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
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Comp",
        "min": 0,
        "max": 10,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ]
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 48,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "6291468": {
    "midiId": 6291468,
    "hexId": "0x0060000c",
    "name": "Phaser",
    "category": "MOD",
    "title": "Phase varieing effect",
    "dsp": 14,
    "params": [
      {
        "name": "Rate",
        "min": 1,
        "max": 78,
        "default": 11,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Color",
        "min": 0,
        "max": 3,
        "default": 3,
        "unit": "",
        "type": "select",
        "options": [
          "4 STG",
          "8 STG",
          "inv 4",
          "inv 8"
        ]
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "6291470": {
    "midiId": 6291470,
    "hexId": "0x0060000e",
    "name": "MonoSynth",
    "category": "SFX",
    "title": "Monophonic guitar synth effect",
    "dsp": 12,
    "params": [
      {
        "name": "Synth",
        "min": 0,
        "max": 100,
        "default": 40,
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
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Wave",
        "min": 0,
        "max": 3,
        "default": 2,
        "unit": "",
        "type": "select",
        "options": [
          "Sine",
          "Tri",
          "SawUp",
          "SawDn"
        ]
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 8,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Speed",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "6291472": {
    "midiId": 6291472,
    "hexId": "0x00600010",
    "name": "AnalogDly",
    "category": "DELAY",
    "title": "Analog delay simulation",
    "dsp": 14,
    "params": [
      {
        "name": "Time",
        "min": 0,
        "max": 4022,
        "default": 359,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "F.B",
        "min": 0,
        "max": 100,
        "default": 28,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "HiDMP",
        "min": 0,
        "max": 10,
        "default": 8,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "P-P",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "MONO",
          "P-P"
        ]
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
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "6291474": {
    "midiId": 6291474,
    "hexId": "0x00600012",
    "name": "TiledRoom",
    "category": "REVERB",
    "title": "Tiled room simulation",
    "dsp": 10,
    "params": [
      {
        "name": "Decay",
        "min": 1,
        "max": 30,
        "default": 19,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 4,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 46,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PreD",
        "min": 1,
        "max": 100,
        "default": 9,
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
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "6291480": {
    "midiId": 6291480,
    "hexId": "0x00600018",
    "name": "Bass Muff",
    "category": "DRIVE",
    "title": "Electro-Harmonix Bass Big Muff simulation",
    "dsp": 6,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 88,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 100,
        "default": 95,
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
        "name": "Mode",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "NORM",
          "BsBST"
        ]
      },
      {
        "name": "Bal",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "6291482": {
    "midiId": 6291482,
    "hexId": "0x0060001a",
    "name": "Bass BB",
    "category": "DRIVE",
    "title": "Xotic Bass BB Preamp simulation",
    "dsp": 6,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 84,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": -10,
        "max": 10,
        "default": 13,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": -10,
        "max": 10,
        "default": 16,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Blend",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 70,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "6291716": {
    "midiId": 6291716,
    "hexId": "0x00600104",
    "name": "SeqFLTR",
    "category": "FILTER",
    "title": "Z.Vex Seek-Wah like sequence filter",
    "dsp": 10,
    "params": [
      {
        "name": "Step",
        "min": 2,
        "max": 8,
        "default": 6,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PTTRN",
        "min": 1,
        "max": 8,
        "default": 6,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Speed",
        "min": 1,
        "max": 78,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Shape",
        "min": 0,
        "max": 10,
        "default": 10,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 10,
        "default": 10,
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
      }
    ]
  },
  "6291718": {
    "midiId": 6291718,
    "hexId": "0x00600106",
    "name": "Z Clean",
    "category": "DRIVE",
    "title": "ZOOM original clean sound",
    "dsp": 8,
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
        "name": "Tone",
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
      }
    ]
  },
  "6291720": {
    "midiId": 6291720,
    "hexId": "0x00600108",
    "name": "HW STACK",
    "category": "AMP",
    "title": "Hiwatt Custom 100 tube amp modeling",
    "dsp": 3,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 54,
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
        "default": 106,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": 0,
        "max": 100,
        "default": 46,
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
        "default": 56,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Prese",
        "min": 0,
        "max": 100,
        "default": 52,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 176,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "LINE",
          "COMBO FRONT",
          "STACK FRONT",
          "COMBO POWER AMP",
          "STACK POWER AMP"
        ]
      }
    ]
  },
  "6291722": {
    "midiId": 6291722,
    "hexId": "0x0060010a",
    "name": "Heaven",
    "category": "AMP",
    "title": "Eden WT-800 simulation",
    "dsp": 3,
    "params": [
      {
        "name": "Bass",
        "min": -10,
        "max": 10,
        "default": 15,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": -10,
        "max": 10,
        "default": 13,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": -10,
        "max": 10,
        "default": 14,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid_F",
        "min": 0,
        "max": 30,
        "default": 12,
        "unit": "",
        "type": "select",
        "options": [
          "32Hz",
          "40Hz",
          "50Hz",
          "63Hz",
          "70Hz",
          "80Hz",
          "100Hz",
          "120Hz",
          "140Hz",
          "150Hz",
          "160Hz",
          "180Hz",
          "200Hz",
          "250Hz",
          "300Hz",
          "350Hz",
          "400Hz",
          "450Hz",
          "500Hz",
          "630Hz",
          "800Hz",
          "1.0kHz",
          "1.2kHz",
          "1.6kHz",
          "2.0kHz",
          "2.5kHz",
          "3.0kHz",
          "3.6kHz",
          "4.0kHz",
          "4.5kHz",
          "6.3kHz"
        ]
      },
      {
        "name": "Gain",
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
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "ENHNC",
        "min": 0,
        "max": 10,
        "default": 1,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 176,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "6291724": {
    "midiId": 6291724,
    "hexId": "0x0060010c",
    "name": "Ensemble",
    "category": "MOD",
    "title": "Chorus with 3D movement",
    "dsp": 12,
    "params": [
      {
        "name": "Depth",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rate",
        "min": 1,
        "max": 50,
        "default": 29,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 8,
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
      }
    ]
  },
  "6291728": {
    "midiId": 6291728,
    "hexId": "0x00600110",
    "name": "TrgHldDly",
    "category": "DELAY",
    "title": "Delay effect with sample&hold by picking",
    "dsp": 12,
    "params": [
      {
        "name": "Time",
        "min": 10,
        "max": 1000,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Duty",
        "min": 25,
        "max": 100,
        "default": 75,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "THRSH",
        "min": 0,
        "max": 30,
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
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "6291730": {
    "midiId": 6291730,
    "hexId": "0x00600112",
    "name": "SlapBack",
    "category": "REVERB",
    "title": "Reverb with repeating echo",
    "dsp": 5,
    "params": [
      {
        "name": "Time",
        "min": 0,
        "max": 1010,
        "default": 379,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Decay",
        "min": 1,
        "max": 30,
        "default": 9,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 48,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "F.B",
        "min": 0,
        "max": 100,
        "default": 43,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 10,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "DRBal",
        "min": 0,
        "max": 100,
        "default": 70,
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
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "6291736": {
    "midiId": 6291736,
    "hexId": "0x00600118",
    "name": "Ba Squeak",
    "category": "DRIVE",
    "title": "ProCo RAT emulation with added parameter",
    "dsp": 6,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 46,
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
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bal",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "6291974": {
    "midiId": 6291974,
    "hexId": "0x00600206",
    "name": "ExtremeDS",
    "category": "DRIVE",
    "title": "Highest gain distortion",
    "dsp": 8,
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
        "name": "Tone",
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
      }
    ]
  },
  "6291976": {
    "midiId": 6291976,
    "hexId": "0x00600208",
    "name": "DZ DRIVE",
    "category": "AMP",
    "title": "High gain sound of Diezel Herbert",
    "dsp": 3,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 45,
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
        "default": 93,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": 0,
        "max": 100,
        "default": 53,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Middl",
        "min": 0,
        "max": 100,
        "default": 47,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 51,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Prese",
        "min": 0,
        "max": 100,
        "default": 55,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 304,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "LINE",
          "COMBO FRONT",
          "STACK FRONT",
          "COMBO POWER AMP",
          "STACK POWER AMP"
        ]
      }
    ]
  },
  "6291980": {
    "midiId": 6291980,
    "hexId": "0x0060020c",
    "name": "MonoPitch",
    "category": "MOD",
    "title": "Sound variance pitch shifter for monophonic",
    "dsp": 12,
    "params": [
      {
        "name": "Shift",
        "min": -12,
        "max": 13,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 6,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bal",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Fine",
        "min": -25,
        "max": 25,
        "default": 25,
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
      }
    ]
  },
  "6291984": {
    "midiId": 6291984,
    "hexId": "0x00600210",
    "name": "LO-FI Dly",
    "category": "DELAY",
    "title": "Strymon TIMELINE LO-FI mode deley modeling",
    "dsp": 2,
    "params": [
      {
        "name": "TIME",
        "min": 0,
        "max": 1913,
        "default": 248,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "F.B",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "MIX",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "SMPL",
        "min": 0,
        "max": 14,
        "default": 5,
        "unit": "",
        "type": "select",
        "options": [
          "1/128",
          "1/64",
          "1/32",
          "1/24",
          "1/12",
          "1/10",
          "1/9",
          "1/8",
          "1/7",
          "1/6",
          "1/5",
          "1/4",
          "1/3",
          "1/2",
          "1/1"
        ]
      },
      {
        "name": "BITS",
        "min": 0,
        "max": 20,
        "default": 10,
        "unit": "",
        "type": "select",
        "options": [
          "4",
          "4.5",
          "5",
          "5.5",
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "18",
          "20",
          "24",
          "32"
        ]
      },
      {
        "name": "BLEND",
        "min": 0,
        "max": 100,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "DAMP",
        "min": 0,
        "max": 10,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "FLT",
        "min": 0,
        "max": 8,
        "default": 2,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ]
      },
      {
        "name": "VINYL",
        "min": 0,
        "max": 18,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "D:1",
          "D:2",
          "D:3",
          "D:4",
          "D:5",
          "D:6",
          "D:7",
          "D:8",
          "D:9",
          "S:1",
          "S:2",
          "S:3",
          "S:4",
          "S:5",
          "S:6",
          "S:7",
          "S:8",
          "S:9"
        ]
      }
    ]
  },
  "6291986": {
    "midiId": 6291986,
    "hexId": "0x00600212",
    "name": "ReverseRv",
    "category": "REVERB",
    "title": "DigiTech RV-7(Lexicon) Reverse setting modeling",
    "dsp": 3,
    "params": [
      {
        "name": "Level",
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
        "default": 70,
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
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      },
      {
        "name": "Dry",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "6292230": {
    "midiId": 6292230,
    "hexId": "0x00600306",
    "name": "RedCrunch",
    "category": "DRIVE",
    "title": "Effect for EVH 'Brown Sound'",
    "dsp": 4,
    "params": [
      {
        "name": "VOL",
        "min": 0,
        "max": 100,
        "default": 61,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "LO/HI",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "LO",
          "HI"
        ]
      },
      {
        "name": "GAIN",
        "min": 0,
        "max": 100,
        "default": 68,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PRES",
        "min": 0,
        "max": 100,
        "default": 48,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "COMP",
        "min": 0,
        "max": 2,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "1",
          "0",
          "2"
        ]
      },
      {
        "name": "TONE",
        "min": 0,
        "max": 100,
        "default": 47,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "6292236": {
    "midiId": 6292236,
    "hexId": "0x0060030c",
    "name": "BF FLG 2",
    "category": "MOD",
    "title": "BOSS BF-2 Flanger modeling",
    "dsp": 9,
    "params": [
      {
        "name": "MNL",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "DEPTH",
        "min": 0,
        "max": 100,
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "RATE",
        "min": 0,
        "max": 100,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "RES",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "6292242": {
    "midiId": 6292242,
    "hexId": "0x00600312",
    "name": "MangledSp",
    "category": "REVERB",
    "title": "Eventide SPACE MangledVerb like wild echoes",
    "dsp": 2,
    "params": [
      {
        "name": "PDLY",
        "min": 0,
        "max": 500,
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Clip",
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
        "default": 38,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Decay",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mod",
        "min": 0,
        "max": 100,
        "default": 50,
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
      },
      {
        "name": "Low",
        "min": -100,
        "max": 100,
        "default": 97,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "High",
        "min": -100,
        "max": 100,
        "default": 101,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 200,
        "default": 85,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "6946818": {
    "midiId": 6946818,
    "hexId": "0x006a0002",
    "name": "160 Comp",
    "category": "DYNAMICS",
    "title": "dbx 160A style comp",
    "dsp": 7,
    "params": [
      {
        "name": "THRSH",
        "min": -60,
        "max": 0,
        "default": 38,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Ratio",
        "min": 1,
        "max": 91,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Gain",
        "min": 0,
        "max": 20,
        "default": 6,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Knee",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "Hard",
          "Soft"
        ]
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "6946828": {
    "midiId": 6946828,
    "hexId": "0x006a000c",
    "name": "DuoPhase",
    "category": "MOD",
    "title": "Combines 2 phasers",
    "dsp": 9,
    "params": [
      {
        "name": "RateA",
        "min": 1,
        "max": 78,
        "default": 46,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "RateB",
        "min": 1,
        "max": 52,
        "default": 5,
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
        "name": "ResoA",
        "min": 0,
        "max": 10,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "ResoB",
        "min": 0,
        "max": 10,
        "default": 6,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Link",
        "min": 0,
        "max": 2,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "Seri",
          "Para",
          "STR"
        ]
      },
      {
        "name": "DPT_A",
        "min": 1,
        "max": 100,
        "default": 36,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "DPT_B",
        "min": 1,
        "max": 100,
        "default": 62,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "7340046": {
    "midiId": 7340046,
    "hexId": "0x0070000e",
    "name": "Ba Synth",
    "category": "SFX",
    "title": "Monophonic bass synth sound",
    "dsp": 5,
    "params": [
      {
        "name": "Decay",
        "min": 0,
        "max": 100,
        "default": 36,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Wave",
        "min": 0,
        "max": 2,
        "default": 2,
        "unit": "",
        "type": "select",
        "options": [
          "Saw",
          "Pulse",
          "PWM"
        ]
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 10,
        "default": 9,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Synth",
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
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 135,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "7340300": {
    "midiId": 7340300,
    "hexId": "0x0070010c",
    "name": "Ba Ensmbl",
    "category": "MOD",
    "title": "Bass chorus with 3D movement",
    "dsp": 8,
    "params": [
      {
        "name": "Depth",
        "min": 0,
        "max": 100,
        "default": 48,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rate",
        "min": 1,
        "max": 50,
        "default": 22,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 5,
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
      }
    ]
  },
  "7340556": {
    "midiId": 7340556,
    "hexId": "0x0070020c",
    "name": "Ba Pitch",
    "category": "MOD",
    "title": "Pitch shifter for bass",
    "dsp": 5,
    "params": [
      {
        "name": "Shift",
        "min": 0,
        "max": 25,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "-12",
          "-11",
          "-10",
          "-9",
          "-8",
          "-7",
          "-6",
          "-5",
          "-4",
          "-3",
          "-2",
          "-1",
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "24"
        ]
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 7,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bal",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Fine",
        "min": -25,
        "max": 25,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 140,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "7602178": {
    "midiId": 7602178,
    "hexId": "0x00740002",
    "name": "Limiter",
    "category": "DYNAMICS",
    "title": "Limiter that suppresses signal peaks",
    "dsp": 10,
    "params": [
      {
        "name": "THRSH",
        "min": 0,
        "max": 50,
        "default": 20,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Ratio",
        "min": 0,
        "max": 9,
        "default": 3,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 90,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "REL",
        "min": 1,
        "max": 10,
        "default": 2,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "7602188": {
    "midiId": 7602188,
    "hexId": "0x0074000c",
    "name": "WarpPhase",
    "category": "MOD",
    "title": "Phaser with one way effect",
    "dsp": 9,
    "params": [
      {
        "name": "Speed",
        "min": 1,
        "max": 78,
        "default": 24,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 10,
        "default": 7,
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
        "name": "DRCTN",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "Go",
          "Back"
        ]
      }
    ]
  },
  "1073741826": {
    "midiId": 1073741826,
    "hexId": "0x40000002",
    "name": "SlowATTCK",
    "category": "DYNAMICS",
    "title": "Violin like slow attack sounds",
    "dsp": 12,
    "params": [
      {
        "name": "Time",
        "min": 1,
        "max": 50,
        "default": 20,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Curve",
        "min": 0,
        "max": 10,
        "default": 10,
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
      }
    ]
  },
  "1073741828": {
    "midiId": 1073741828,
    "hexId": "0x40000004",
    "name": "CombFLTR",
    "category": "FILTER",
    "title": "Comb filter, that like fix modulated flanger",
    "dsp": 13,
    "params": [
      {
        "name": "Freq",
        "min": 1,
        "max": 50,
        "default": 24,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": -10,
        "max": 10,
        "default": 15,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "HiDMP",
        "min": 0,
        "max": 10,
        "default": 6,
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
      }
    ]
  },
  "1073741830": {
    "midiId": 1073741830,
    "hexId": "0x40000006",
    "name": "Dist+",
    "category": "DRIVE",
    "title": "MXR distortion+ modeling",
    "dsp": 8,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 80,
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
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1073741832": {
    "midiId": 1073741832,
    "hexId": "0x40000008",
    "name": "VX COMBO",
    "category": "AMP",
    "title": "British combo amp modeling",
    "dsp": 3,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 31,
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
        "default": 44,
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
        "default": 49,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Prese",
        "min": 0,
        "max": 100,
        "default": 53,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 64,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "LINE",
          "COMBO FRONT",
          "STACK FRONT",
          "COMBO POWER AMP",
          "STACK POWER AMP"
        ]
      }
    ]
  },
  "1073741834": {
    "midiId": 1073741834,
    "hexId": "0x4000000a",
    "name": "SMR",
    "category": "AMP",
    "title": "SWR SM-900 simulation",
    "dsp": 3,
    "params": [
      {
        "name": "Bass",
        "min": -10,
        "max": 10,
        "default": 13,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": -10,
        "max": 10,
        "default": 17,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": -10,
        "max": 10,
        "default": 9,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid_F",
        "min": 0,
        "max": 30,
        "default": 13,
        "unit": "",
        "type": "select",
        "options": [
          "32Hz",
          "40Hz",
          "50Hz",
          "63Hz",
          "70Hz",
          "80Hz",
          "100Hz",
          "120Hz",
          "140Hz",
          "150Hz",
          "160Hz",
          "180Hz",
          "200Hz",
          "250Hz",
          "300Hz",
          "350Hz",
          "400Hz",
          "450Hz",
          "500Hz",
          "630Hz",
          "800Hz",
          "1.0kHz",
          "1.2kHz",
          "1.6kHz",
          "2.0kHz",
          "2.5kHz",
          "3.0kHz",
          "3.6kHz",
          "4.0kHz",
          "4.5kHz",
          "6.3kHz"
        ]
      },
      {
        "name": "Gain",
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
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "ENHNC",
        "min": 0,
        "max": 10,
        "default": 1,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 64,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1073741836": {
    "midiId": 1073741836,
    "hexId": "0x4000000c",
    "name": "TheVibe",
    "category": "MOD",
    "title": "Unique undulations vibe",
    "dsp": 9,
    "params": [
      {
        "name": "Speed",
        "min": 0,
        "max": 50,
        "default": 25,
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
        "name": "Bias",
        "min": 0,
        "max": 100,
        "default": 48,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Wave",
        "min": 0,
        "max": 100,
        "default": 24,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mode",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "VIBRT",
          "CHORS"
        ]
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1073741838": {
    "midiId": 1073741838,
    "hexId": "0x4000000e",
    "name": "Z-Organ",
    "category": "SFX",
    "title": "Organ sound effect",
    "dsp": 7,
    "params": [
      {
        "name": "Upper",
        "min": 0,
        "max": 100,
        "default": 70,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Lower",
        "min": 0,
        "max": 100,
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Dry",
        "min": 0,
        "max": 100,
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "HPF",
        "min": 0,
        "max": 10,
        "default": 3,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "LPF",
        "min": 0,
        "max": 10,
        "default": 8,
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
      }
    ]
  },
  "1073741840": {
    "midiId": 1073741840,
    "hexId": "0x40000010",
    "name": "ReverseDL",
    "category": "DELAY",
    "title": "Reverse delay upto 2000ms",
    "dsp": 14,
    "params": [
      {
        "name": "Time",
        "min": 0,
        "max": 2005,
        "default": 990,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "F.B",
        "min": 0,
        "max": 100,
        "default": 20,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bal",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "HiDMP",
        "min": 0,
        "max": 10,
        "default": 8,
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
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "1073741842": {
    "midiId": 1073741842,
    "hexId": "0x40000012",
    "name": "Spring",
    "category": "REVERB",
    "title": "Spring reverb simulation",
    "dsp": 9,
    "params": [
      {
        "name": "Decay",
        "min": 1,
        "max": 30,
        "default": 19,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 8,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PreD",
        "min": 1,
        "max": 100,
        "default": 0,
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
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "1073741850": {
    "midiId": 1073741850,
    "hexId": "0x4000001a",
    "name": "DI5",
    "category": "DRIVE",
    "title": "AVALON DESIGN U5 preamp simulation",
    "dsp": 5,
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
        "name": "Tone",
        "min": 0,
        "max": 6,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ]
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
        "name": "HiCut",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "1073742084": {
    "midiId": 1073742084,
    "hexId": "0x40000104",
    "name": "RndmFLTR",
    "category": "FILTER",
    "title": "Randomly changing filter",
    "dsp": 10,
    "params": [
      {
        "name": "Speed",
        "min": 1,
        "max": 78,
        "default": 34,
        "unit": "",
        "type": "slider",
        "options": null
      },
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
        "name": "Reso",
        "min": 0,
        "max": 10,
        "default": 6,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Type",
        "min": 0,
        "max": 2,
        "default": 2,
        "unit": "",
        "type": "select",
        "options": [
          "HPF",
          "BPF",
          "LPF"
        ]
      },
      {
        "name": "Chara",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "2Pole",
          "4Pole"
        ]
      },
      {
        "name": "Bal",
        "min": 0,
        "max": 100,
        "default": 90,
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
      }
    ]
  },
  "1073742086": {
    "midiId": 1073742086,
    "hexId": "0x40000106",
    "name": "Z MP 1",
    "category": "DRIVE",
    "title": "Original sounds with ADA MP1 + Marshall JCM800",
    "dsp": 8,
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
        "name": "Tone",
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
      }
    ]
  },
  "1073742088": {
    "midiId": 1073742088,
    "hexId": "0x40000108",
    "name": "TANGERINE",
    "category": "AMP",
    "title": "Orange Graphic 120 modeling",
    "dsp": 3,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 70,
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
        "default": 99,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": 0,
        "max": 100,
        "default": 52,
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
        "default": 45,
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
        "default": 192,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "LINE",
          "COMBO FRONT",
          "STACK FRONT",
          "COMBO POWER AMP",
          "STACK POWER AMP"
        ]
      }
    ]
  },
  "1073742090": {
    "midiId": 1073742090,
    "hexId": "0x4000010a",
    "name": "Mark B",
    "category": "AMP",
    "title": "Markbass Little Mark III simulation",
    "dsp": 4,
    "params": [
      {
        "name": "Bass",
        "min": -10,
        "max": 10,
        "default": 16,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": -10,
        "max": 10,
        "default": 13,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": -10,
        "max": 10,
        "default": 13,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid_F",
        "min": 0,
        "max": 30,
        "default": 12,
        "unit": "",
        "type": "select",
        "options": [
          "32Hz",
          "40Hz",
          "50Hz",
          "63Hz",
          "70Hz",
          "80Hz",
          "100Hz",
          "120Hz",
          "140Hz",
          "150Hz",
          "160Hz",
          "180Hz",
          "200Hz",
          "250Hz",
          "300Hz",
          "350Hz",
          "400Hz",
          "450Hz",
          "500Hz",
          "630Hz",
          "800Hz",
          "1.0kHz",
          "1.2kHz",
          "1.6kHz",
          "2.0kHz",
          "2.5kHz",
          "3.0kHz",
          "3.6kHz",
          "4.0kHz",
          "4.5kHz",
          "6.3kHz"
        ]
      },
      {
        "name": "Gain",
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
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Color",
        "min": 0,
        "max": 6,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 192,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1073742094": {
    "midiId": 1073742094,
    "hexId": "0x4000010e",
    "name": "V-Syn",
    "category": "SFX",
    "title": "Vintage bass synth sound",
    "dsp": 5,
    "params": [
      {
        "name": "Decay",
        "min": 0,
        "max": 100,
        "default": 24,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Sense",
        "min": 0,
        "max": 30,
        "default": 11,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Range",
        "min": 0,
        "max": 19,
        "default": 17,
        "unit": "",
        "type": "select",
        "options": [
          "-10",
          "-9",
          "-8",
          "-7",
          "-6",
          "-5",
          "-4",
          "-3",
          "-2",
          "-1",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ]
      },
      {
        "name": "Synth",
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
        "default": 80,
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
      }
    ]
  },
  "1073742096": {
    "midiId": 1073742096,
    "hexId": "0x40000110",
    "name": "StompDly",
    "category": "DELAY",
    "title": "Stomp style Self-Oscillable delay",
    "dsp": 12,
    "params": [
      {
        "name": "E.LVL",
        "min": 0,
        "max": 120,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "F.B",
        "min": 0,
        "max": 100,
        "default": 20,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Time",
        "min": 1,
        "max": 600,
        "default": 359,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Sync",
        "min": 0,
        "max": 15,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "1/16",
          "1/12",
          "3/32",
          "1/8",
          "1/6",
          "3/16",
          "1/4",
          "3/8",
          "1/2",
          "3/4",
          "4/4",
          "5/4",
          "6/4",
          "7/4",
          "8/4"
        ]
      },
      {
        "name": "Mode",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "MONO",
          "STR"
        ]
      },
      {
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      },
      {
        "name": "HiDMP",
        "min": 0,
        "max": 10,
        "default": 5,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1073742098": {
    "midiId": 1073742098,
    "hexId": "0x40000112",
    "name": "Spring63",
    "category": "REVERB",
    "title": "Fender Reverb ('63) spring reverb modeling",
    "dsp": 3,
    "params": [
      {
        "name": "DWELL",
        "min": 0,
        "max": 100,
        "default": 35,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "MIXER",
        "min": 0,
        "max": 100,
        "default": 51,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "TONE",
        "min": 0,
        "max": 100,
        "default": 58,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "LEVEL",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1073742104": {
    "midiId": 1073742104,
    "hexId": "0x40000118",
    "name": "BaFzSmile",
    "category": "DRIVE",
    "title": "FUZZ FACE emulation with added parameter",
    "dsp": 6,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 43,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 100,
        "default": 70,
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
        "name": "Bal",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1073742342": {
    "midiId": 1073742342,
    "hexId": "0x40000206",
    "name": "Aco.Sim",
    "category": "DRIVE",
    "title": "Acoustic guitar simulator",
    "dsp": 8,
    "params": [
      {
        "name": "Top",
        "min": 0,
        "max": 100,
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Body",
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
      }
    ]
  },
  "1073742344": {
    "midiId": 1073742344,
    "hexId": "0x40000208",
    "name": "ALIEN",
    "category": "AMP",
    "title": "Engl Invader modeling",
    "dsp": 2,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 62,
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
        "default": 87,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": 0,
        "max": 100,
        "default": 52,
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
        "default": 44,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Prese",
        "min": 0,
        "max": 100,
        "default": 54,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 320,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "LINE",
          "COMBO FRONT",
          "STACK FRONT",
          "COMBO POWER AMP",
          "STACK POWER AMP"
        ]
      }
    ]
  },
  "1073742348": {
    "midiId": 1073742348,
    "hexId": "0x4000020c",
    "name": "HPS",
    "category": "MOD",
    "title": "Intelligent pitch shifter according to scale/key",
    "dsp": 12,
    "params": [
      {
        "name": "Scale",
        "min": 0,
        "max": 9,
        "default": 6,
        "unit": "",
        "type": "select",
        "options": [
          "-6",
          "-5",
          "-4",
          "-3",
          "-m",
          "m",
          "3",
          "4",
          "5",
          "6"
        ]
      },
      {
        "name": "Key",
        "min": 0,
        "max": 11,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "C",
          "C#",
          "D",
          "D#",
          "E",
          "F",
          "F#",
          "G",
          "G#",
          "A",
          "A#",
          "B"
        ]
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 70,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 6,
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
      }
    ]
  },
  "1073742352": {
    "midiId": 1073742352,
    "hexId": "0x40000210",
    "name": "SlwAtkDly",
    "category": "DELAY",
    "title": "LINE6 M9 Auto-Volume Echo delay modeling",
    "dsp": 4,
    "params": [
      {
        "name": "TIME",
        "min": 0,
        "max": 1914,
        "default": 489,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "F.B",
        "min": 0,
        "max": 100,
        "default": 71,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "MIX",
        "min": 0,
        "max": 100,
        "default": 64,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "DEPTH",
        "min": 0,
        "max": 100,
        "default": 77,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "SWELL",
        "min": 1,
        "max": 50,
        "default": 24,
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
        "type": "select",
        "options": [
          "MONO",
          "STR"
        ]
      },
      {
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "1073742354": {
    "midiId": 1073742354,
    "hexId": "0x40000212",
    "name": "Echo",
    "category": "REVERB",
    "title": "Gorgeous echoes",
    "dsp": 3,
    "params": [
      {
        "name": "DECAY",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "TIME",
        "min": 0,
        "max": 200,
        "default": 125,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "TONE",
        "min": 0,
        "max": 100,
        "default": 70,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "MIX",
        "min": 0,
        "max": 100,
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      },
      {
        "name": "Mode",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "1073742598": {
    "midiId": 1073742598,
    "hexId": "0x40000306",
    "name": "TB MK1.5",
    "category": "DRIVE",
    "title": "Classic fuzz",
    "dsp": 3,
    "params": [
      {
        "name": "LEVEL",
        "min": 0,
        "max": 100,
        "default": 92,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "COLOR",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "1",
          "2"
        ]
      },
      {
        "name": "ATTCK",
        "min": 0,
        "max": 100,
        "default": 90,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1073742604": {
    "midiId": 1073742604,
    "hexId": "0x4000030c",
    "name": "SilkyCho",
    "category": "MOD",
    "title": "2 bands detune and chorus",
    "dsp": 5,
    "params": [
      {
        "name": "LoMix",
        "min": 0,
        "max": 100,
        "default": 38,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "HiMix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "ChMix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "LoPit",
        "min": -25,
        "max": 25,
        "default": 31,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "HiPit",
        "min": -25,
        "max": 25,
        "default": 33,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PreD",
        "min": 0,
        "max": 50,
        "default": 27,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rate",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Depth",
        "min": 0,
        "max": 100,
        "default": 46,
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
      }
    ]
  },
  "1073742610": {
    "midiId": 1073742610,
    "hexId": "0x40000312",
    "name": "DualRev",
    "category": "REVERB",
    "title": "Eventide SPACE DualVerb like Combination of two reverbs",
    "dsp": 2,
    "params": [
      {
        "name": "PDlyA",
        "min": 0,
        "max": 750,
        "default": 350,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PDlyB",
        "min": 0,
        "max": 750,
        "default": 700,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "ABMix",
        "min": 0,
        "max": 18,
        "default": 14,
        "unit": "",
        "type": "select",
        "options": [
          "A9B0",
          "A9B1",
          "A9B2",
          "A9B3",
          "A9B4",
          "A9B5",
          "A9B6",
          "A9B7",
          "A9B8",
          "A9B9",
          "A8B9",
          "A7B9",
          "A6B9",
          "A5B9",
          "A4B9",
          "A3B9",
          "A2B9",
          "A1B9",
          "A0B9"
        ]
      },
      {
        "name": "DCY A",
        "min": 0,
        "max": 100,
        "default": 15,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "DCY B",
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
        "max": 32,
        "default": 21,
        "unit": "",
        "type": "select",
        "options": [
          "A1B1",
          "A2B1",
          "A3B1",
          "A4B1",
          "A5B1",
          "A6B1",
          "A7B1",
          "A8B1",
          "A9B1",
          "A9B2",
          "A9B3",
          "A9B4",
          "A9B5",
          "A9B6",
          "A9B7",
          "A9B8",
          "A9B9",
          "A8B9",
          "A7B9",
          "A6B9",
          "A5B9",
          "A4B9",
          "A3B9",
          "A2B9",
          "A1B9",
          "A1B8",
          "A1B7",
          "A1B6",
          "A1B5",
          "A1B4",
          "A1B3",
          "A1B2",
          "A1B1"
        ]
      },
      {
        "name": "ToneA",
        "min": -100,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "ToneB",
        "min": -100,
        "max": 100,
        "default": 70,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1075838978": {
    "midiId": 1075838978,
    "hexId": "0x40200002",
    "name": "ZNR",
    "category": "DYNAMICS",
    "title": "ZOOM's unique noise reduction",
    "dsp": 17,
    "params": [
      {
        "name": "THRSH",
        "min": 1,
        "max": 25,
        "default": 9,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "DETCT",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "GtrIn",
          "EfxIn"
        ]
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1075838980": {
    "midiId": 1075838980,
    "hexId": "0x40200004",
    "name": "AutoWah",
    "category": "FILTER",
    "title": "Wah accordance with picking intensity",
    "dsp": 10,
    "params": [
      {
        "name": "Sense",
        "min": 0,
        "max": 19,
        "default": 17,
        "unit": "",
        "type": "select",
        "options": [
          "-10",
          "-9",
          "-8",
          "-7",
          "-6",
          "-5",
          "-4",
          "-3",
          "-2",
          "-1",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ]
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 10,
        "default": 8,
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
      }
    ]
  },
  "1075838982": {
    "midiId": 1075838982,
    "hexId": "0x40200006",
    "name": "Dist 1",
    "category": "DRIVE",
    "title": "BOSS DS-1 distortion modeling",
    "dsp": 8,
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
        "name": "Tone",
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
      }
    ]
  },
  "1075838984": {
    "midiId": 1075838984,
    "hexId": "0x40200008",
    "name": "VX JMI",
    "category": "AMP",
    "title": "Class-A British combo amp modeling",
    "dsp": 2,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 50,
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
        "default": 80,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "LINE",
          "COMBO FRONT",
          "STACK FRONT",
          "COMBO POWER AMP",
          "STACK POWER AMP"
        ]
      }
    ]
  },
  "1075838986": {
    "midiId": 1075838986,
    "hexId": "0x4020000a",
    "name": "Flip Top",
    "category": "AMP",
    "title": "Ampeg B-15 simulation",
    "dsp": 3,
    "params": [
      {
        "name": "Bass",
        "min": -10,
        "max": 10,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": -10,
        "max": 10,
        "default": 18,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": -10,
        "max": 10,
        "default": 5,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid_F",
        "min": 0,
        "max": 30,
        "default": 12,
        "unit": "",
        "type": "select",
        "options": [
          "32Hz",
          "40Hz",
          "50Hz",
          "63Hz",
          "70Hz",
          "80Hz",
          "100Hz",
          "120Hz",
          "140Hz",
          "150Hz",
          "160Hz",
          "180Hz",
          "200Hz",
          "250Hz",
          "300Hz",
          "350Hz",
          "400Hz",
          "450Hz",
          "500Hz",
          "630Hz",
          "800Hz",
          "1.0kHz",
          "1.2kHz",
          "1.6kHz",
          "2.0kHz",
          "2.5kHz",
          "3.0kHz",
          "3.6kHz",
          "4.0kHz",
          "4.5kHz",
          "6.3kHz"
        ]
      },
      {
        "name": "Gain",
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
        "default": 90,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Ultra",
        "min": 0,
        "max": 3,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "Off",
          "Low",
          "Hi",
          "Both"
        ]
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 80,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1075838990": {
    "midiId": 1075838990,
    "hexId": "0x4020000e",
    "name": "AutoPan",
    "category": "SFX",
    "title": "Cyclic panning position movement",
    "dsp": 14,
    "params": [
      {
        "name": "Rate",
        "min": 0,
        "max": 78,
        "default": 5,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Width",
        "min": -50,
        "max": 50,
        "default": 100,
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
        "name": "Depth",
        "min": 0,
        "max": 10,
        "default": 7,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Clip",
        "min": 0,
        "max": 10,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1075838992": {
    "midiId": 1075838992,
    "hexId": "0x40200010",
    "name": "MultiTapD",
    "category": "DELAY",
    "title": "Several delay sounds with different delay times",
    "dsp": 11,
    "params": [
      {
        "name": "Time",
        "min": 0,
        "max": 3018,
        "default": 2999,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PTTRN",
        "min": 1,
        "max": 8,
        "default": 1,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 20,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 10,
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
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "1075838994": {
    "midiId": 1075838994,
    "hexId": "0x40200012",
    "name": "Arena",
    "category": "REVERB",
    "title": "Sports arena like large enclosure simulation",
    "dsp": 11,
    "params": [
      {
        "name": "Decay",
        "min": 1,
        "max": 30,
        "default": 14,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 7,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 56,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PreD",
        "min": 1,
        "max": 100,
        "default": 89,
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
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "1075839000": {
    "midiId": 1075839000,
    "hexId": "0x40200018",
    "name": "Ba Dist 1",
    "category": "DRIVE",
    "title": "BOSS DS-1 emulation with added paremeter",
    "dsp": 6,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 42,
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
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bal",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1075839002": {
    "midiId": 1075839002,
    "hexId": "0x4020001a",
    "name": "Bass Pre",
    "category": "DRIVE",
    "title": "Preamp with semi-parametric EQ",
    "dsp": 5,
    "params": [
      {
        "name": "Bass",
        "min": 0,
        "max": 10,
        "default": 3,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Treble",
        "min": 0,
        "max": 10,
        "default": 3,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": -10,
        "max": 10,
        "default": 14,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Freq",
        "min": 0,
        "max": 23,
        "default": 7,
        "unit": "",
        "type": "select",
        "options": [
          "100Hz",
          "120Hz",
          "140Hz",
          "150Hz",
          "160Hz",
          "180Hz",
          "200Hz",
          "250Hz",
          "300Hz",
          "350Hz",
          "400Hz",
          "450Hz",
          "500Hz",
          "630Hz",
          "800Hz",
          "1.0kHz",
          "1.2kHz",
          "1.6kHz",
          "2.0kHz",
          "2.5kHz",
          "3.0kHz",
          "3.6kHz",
          "4.0kHz",
          "4.5kHz"
        ]
      }
    ]
  },
  "1075839236": {
    "midiId": 1075839236,
    "hexId": "0x40200104",
    "name": "fCycle",
    "category": "FILTER",
    "title": "Cyclic changing filter",
    "dsp": 10,
    "params": [
      {
        "name": "Rate",
        "min": 1,
        "max": 78,
        "default": 5,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Wave",
        "min": 0,
        "max": 3,
        "default": 3,
        "unit": "",
        "type": "select",
        "options": [
          "Sine",
          "Tri",
          "SawUp",
          "SawDn"
        ]
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
        "name": "Depth",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 10,
        "default": 8,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1075839238": {
    "midiId": 1075839238,
    "hexId": "0x40200106",
    "name": "Z Bottom",
    "category": "DRIVE",
    "title": "High gain sound with low-mid emphasis",
    "dsp": 8,
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
        "name": "Tone",
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
      }
    ]
  },
  "1075839240": {
    "midiId": 1075839240,
    "hexId": "0x40200108",
    "name": "B-BREAKER",
    "category": "AMP",
    "title": "Marshall 1962 Bluesbreaker modeling",
    "dsp": 2,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 61,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tube",
        "min": 0,
        "max": 100,
        "default": 31,
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
        "default": 52,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Prese",
        "min": 0,
        "max": 100,
        "default": 51,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 208,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "LINE",
          "COMBO FRONT",
          "STACK FRONT",
          "COMBO POWER AMP",
          "STACK POWER AMP"
        ]
      }
    ]
  },
  "1075839244": {
    "midiId": 1075839244,
    "hexId": "0x4020010c",
    "name": "SuperCho",
    "category": "MOD",
    "title": "BOSS CH-1 SUPER CHORUS modeling",
    "dsp": 12,
    "params": [
      {
        "name": "E.LVL",
        "min": 0,
        "max": 120,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rate",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Depth",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "EQ",
        "min": 0,
        "max": 100,
        "default": 50,
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
        "type": "select",
        "options": [
          "MONO",
          "STR"
        ]
      }
    ]
  },
  "1075839246": {
    "midiId": 1075839246,
    "hexId": "0x4020010e",
    "name": "4VoiceSyn",
    "category": "SFX",
    "title": "Add synth harmony effect",
    "dsp": 7,
    "params": [
      {
        "name": "ATTCK",
        "min": 0,
        "max": 10,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mode",
        "min": 1,
        "max": 9,
        "default": 3,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Scale",
        "min": 1,
        "max": 2,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Synth",
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
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1075839248": {
    "midiId": 1075839248,
    "hexId": "0x40200110",
    "name": "TapeEcho3",
    "category": "DELAY",
    "title": "MAESTRO ECHOPLEX EP-3 tape echo modiling",
    "dsp": 5,
    "params": [
      {
        "name": "F.B",
        "min": 0,
        "max": 100,
        "default": 20,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "MIX",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "TIME",
        "min": 10,
        "max": 1000,
        "default": 350,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "RecLv",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "SYNC",
        "min": 0,
        "max": 15,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "1/16",
          "1/12",
          "3/32",
          "1/8",
          "1/6",
          "3/16",
          "1/4",
          "3/8",
          "1/2",
          "3/4",
          "4/4",
          "5/4",
          "6/4",
          "7/4",
          "8/4"
        ]
      },
      {
        "name": "P-Amp",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "1075839250": {
    "midiId": 1075839250,
    "hexId": "0x40200112",
    "name": "Chamber",
    "category": "REVERB",
    "title": "Chamber room simulation",
    "dsp": 3,
    "params": [
      {
        "name": "Decay",
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
        "default": 73,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 48,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PreD",
        "min": 0,
        "max": 200,
        "default": 24,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "1075839494": {
    "midiId": 1075839494,
    "hexId": "0x40200206",
    "name": "CentaGold",
    "category": "DRIVE",
    "title": "Klon Centaur Gold overdrive modeling",
    "dsp": 4,
    "params": [
      {
        "name": "GAIN",
        "min": 0,
        "max": 100,
        "default": 69,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "TRBL",
        "min": 0,
        "max": 100,
        "default": 56,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 100,
        "default": 43,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1075839496": {
    "midiId": 1075839496,
    "hexId": "0x40200208",
    "name": "REVO-1",
    "category": "AMP",
    "title": "Krank Revolution 1 Plus modeling",
    "dsp": 2,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 64,
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
        "default": 89,
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
        "default": 51,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Prese",
        "min": 0,
        "max": 100,
        "default": 51,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 336,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "LINE",
          "COMBO FRONT",
          "STACK FRONT",
          "COMBO POWER AMP",
          "STACK POWER AMP"
        ]
      }
    ]
  },
  "1075839500": {
    "midiId": 1075839500,
    "hexId": "0x4020020c",
    "name": "BendCho",
    "category": "MOD",
    "title": "Pitch bending each input note",
    "dsp": 12,
    "params": [
      {
        "name": "Depth",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Time",
        "min": 0,
        "max": 50,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bal",
        "min": 0,
        "max": 100,
        "default": 100,
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
        "type": "select",
        "options": [
          "Up",
          "Down"
        ]
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 8,
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
      }
    ]
  },
  "1075839504": {
    "midiId": 1075839504,
    "hexId": "0x40200210",
    "name": "TremDelay",
    "category": "DELAY",
    "title": "Strymon TIMELINE trem mode delay modeling",
    "dsp": 2,
    "params": [
      {
        "name": "TIME",
        "min": 0,
        "max": 1855,
        "default": 300,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "F.B",
        "min": 0,
        "max": 100,
        "default": 70,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "MIX",
        "min": 0,
        "max": 100,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "LFO",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "TRI",
          "SQR",
          "SIN",
          "RAMP",
          "SAW"
        ]
      },
      {
        "name": "DEPTH",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "SPEED",
        "min": 0,
        "max": 34,
        "default": 19,
        "unit": "",
        "type": "select",
        "options": [
          "1/32",
          "1/24",
          "1/18",
          "1/16",
          "1/12",
          "1/10",
          "1/9",
          "1/8",
          "1/7",
          "1/6",
          "1/5",
          "1/4",
          "1/3",
          "1/2",
          "2/3",
          "3/4",
          "1/1",
          "4/3",
          "3/2",
          "2/1",
          "5/2",
          "3/1",
          "7/2",
          "4/1",
          "5/1",
          "6/1",
          "7/1",
          "8/1",
          "9/1",
          "10/1",
          "12/1",
          "16/1",
          "18/1",
          "24/1",
          "32/1"
        ]
      },
      {
        "name": "DAMP",
        "min": 0,
        "max": 10,
        "default": 4,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "HPF",
        "min": 0,
        "max": 20,
        "default": 4,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "20",
          "40",
          "60",
          "80",
          "100",
          "120",
          "140",
          "160",
          "180",
          "200",
          "230",
          "260",
          "300",
          "350",
          "400",
          "500",
          "600",
          "700",
          "800",
          "900"
        ]
      },
      {
        "name": "GRIT",
        "min": 0,
        "max": 10,
        "default": 2,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1075839506": {
    "midiId": 1075839506,
    "hexId": "0x40200212",
    "name": "TremoloRv",
    "category": "REVERB",
    "title": "EvenTide SPACE tremolo verb like reverb",
    "dsp": 2,
    "params": [
      {
        "name": "Decay",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PDLY",
        "min": 0,
        "max": 500,
        "default": 70,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 45,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Speed",
        "min": 10,
        "max": 356,
        "default": 28,
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
        "type": "select",
        "options": [
          "SINE",
          "TRI",
          "PEAK",
          "RNDM",
          "RAMP",
          "SQR"
        ]
      },
      {
        "name": "Depth",
        "min": 0,
        "max": 200,
        "default": 199,
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
      },
      {
        "name": "Low",
        "min": -100,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "High",
        "min": -100,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1075839750": {
    "midiId": 1075839750,
    "hexId": "0x40200306",
    "name": "SweetDrv",
    "category": "DRIVE",
    "title": "Modeling of a sweet sounding overdrive",
    "dsp": 3,
    "params": [
      {
        "name": "VOL",
        "min": 0,
        "max": 100,
        "default": 62,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "FOCUS",
        "min": 0,
        "max": 100,
        "default": 67,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "DRIVE",
        "min": 0,
        "max": 100,
        "default": 78,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1075839756": {
    "midiId": 1075839756,
    "hexId": "0x4020030c",
    "name": "MirageCho",
    "category": "MOD",
    "title": "Chorus like mirage",
    "dsp": 9,
    "params": [
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
        "name": "Rate",
        "min": 0,
        "max": 100,
        "default": 38,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 55,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PreD",
        "min": 1,
        "max": 20,
        "default": 10,
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
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1076887556": {
    "midiId": 1076887556,
    "hexId": "0x40300004",
    "name": "BaAutoWah",
    "category": "FILTER",
    "title": "Auto wah for bass",
    "dsp": 11,
    "params": [
      {
        "name": "Sense",
        "min": 0,
        "max": 19,
        "default": 11,
        "unit": "",
        "type": "select",
        "options": [
          "-10",
          "-9",
          "-8",
          "-7",
          "-6",
          "-5",
          "-4",
          "-3",
          "-2",
          "-1",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ]
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 10,
        "default": 8,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Dry",
        "min": 0,
        "max": 100,
        "default": 0,
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
      }
    ]
  },
  "1076887820": {
    "midiId": 1076887820,
    "hexId": "0x4030010c",
    "name": "VinFLNGR",
    "category": "MOD",
    "title": "MXR M-117R like analog flanger",
    "dsp": 12,
    "params": [
      {
        "name": "Depth",
        "min": 0,
        "max": 100,
        "default": 47,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rate",
        "min": 0,
        "max": 78,
        "default": 7,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": -10,
        "max": 10,
        "default": 18,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PreD",
        "min": 0,
        "max": 50,
        "default": 4,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 65,
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
      }
    ]
  },
  "1077936130": {
    "midiId": 1077936130,
    "hexId": "0x40400002",
    "name": "NoiseGate",
    "category": "DYNAMICS",
    "title": "Cuts the sound during playing pauses",
    "dsp": 14,
    "params": [
      {
        "name": "THRSH",
        "min": 1,
        "max": 25,
        "default": 9,
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
      }
    ]
  },
  "1077936132": {
    "midiId": 1077936132,
    "hexId": "0x40400004",
    "name": "Resonance",
    "category": "FILTER",
    "title": "Resonance filter according to picking intensisty",
    "dsp": 10,
    "params": [
      {
        "name": "Sense",
        "min": 0,
        "max": 19,
        "default": 14,
        "unit": "",
        "type": "select",
        "options": [
          "-10",
          "-9",
          "-8",
          "-7",
          "-6",
          "-5",
          "-4",
          "-3",
          "-2",
          "-1",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ]
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 10,
        "default": 8,
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
      }
    ]
  },
  "1077936134": {
    "midiId": 1077936134,
    "hexId": "0x40400006",
    "name": "Squeak",
    "category": "DRIVE",
    "title": "Pro Co Rat distortion modeling",
    "dsp": 8,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 40,
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
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1077936136": {
    "midiId": 1077936136,
    "hexId": "0x40400008",
    "name": "BG CRUNCH",
    "category": "AMP",
    "title": "Mesa Boogie MkIII modeling",
    "dsp": 3,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 57,
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
        "default": 99,
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
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 96,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "LINE",
          "COMBO FRONT",
          "STACK FRONT",
          "COMBO POWER AMP",
          "STACK POWER AMP"
        ]
      }
    ]
  },
  "1077936138": {
    "midiId": 1077936138,
    "hexId": "0x4040000a",
    "name": "acoustic",
    "category": "AMP",
    "title": "acoustic 360 simulation",
    "dsp": 4,
    "params": [
      {
        "name": "Bass",
        "min": -10,
        "max": 10,
        "default": 15,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": -10,
        "max": 10,
        "default": 15,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": -10,
        "max": 10,
        "default": 17,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid_F",
        "min": 0,
        "max": 30,
        "default": 19,
        "unit": "",
        "type": "select",
        "options": [
          "32Hz",
          "40Hz",
          "50Hz",
          "63Hz",
          "70Hz",
          "80Hz",
          "100Hz",
          "120Hz",
          "140Hz",
          "150Hz",
          "160Hz",
          "180Hz",
          "200Hz",
          "250Hz",
          "300Hz",
          "350Hz",
          "400Hz",
          "450Hz",
          "500Hz",
          "630Hz",
          "800Hz",
          "1.0kHz",
          "1.2kHz",
          "1.6kHz",
          "2.0kHz",
          "2.5kHz",
          "3.0kHz",
          "3.6kHz",
          "4.0kHz",
          "4.5kHz",
          "6.3kHz"
        ]
      },
      {
        "name": "Gain",
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
        "default": 85,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bright",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 96,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1077936142": {
    "midiId": 1077936142,
    "hexId": "0x4040000e",
    "name": "Rt Closet",
    "category": "SFX",
    "title": "Rotary speaker simulation",
    "dsp": 4,
    "params": [
      {
        "name": "Bal",
        "min": 0,
        "max": 100,
        "default": 50,
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
        "type": "select",
        "options": [
          "Slow",
          "Fast"
        ]
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
        "name": "Drive",
        "min": 0,
        "max": 100,
        "default": 20,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1077936144": {
    "midiId": 1077936144,
    "hexId": "0x40400010",
    "name": "DynaDelay",
    "category": "DELAY",
    "title": "Delay with dynamics adjusting according to input level",
    "dsp": 11,
    "params": [
      {
        "name": "Time",
        "min": 0,
        "max": 2014,
        "default": 359,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Sense",
        "min": 0,
        "max": 19,
        "default": 5,
        "unit": "",
        "type": "select",
        "options": [
          "-10",
          "-9",
          "-8",
          "-7",
          "-6",
          "-5",
          "-4",
          "-3",
          "-2",
          "-1",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ]
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "F.B",
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
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "1077936146": {
    "midiId": 1077936146,
    "hexId": "0x40400012",
    "name": "EarlyRef",
    "category": "REVERB",
    "title": "Only the early reflections of reverb",
    "dsp": 7,
    "params": [
      {
        "name": "Decay",
        "min": 1,
        "max": 30,
        "default": 14,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Shape",
        "min": -10,
        "max": 10,
        "default": 20,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
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
        "max": 10,
        "default": 6,
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
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "1077936154": {
    "midiId": 1077936154,
    "hexId": "0x4040001a",
    "name": "AC Bs Pre",
    "category": "DRIVE",
    "title": "Preamp with graphic EQ",
    "dsp": 5,
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
        "name": "Depth",
        "min": 0,
        "max": 10,
        "default": 10,
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
        "name": "Bass",
        "min": -10,
        "max": 10,
        "default": 10,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "L-Mid",
        "min": -10,
        "max": 10,
        "default": 8,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "LM_F",
        "min": 0,
        "max": 30,
        "default": 20,
        "unit": "",
        "type": "select",
        "options": [
          "32Hz",
          "40Hz",
          "50Hz",
          "63Hz",
          "70Hz",
          "80Hz",
          "100Hz",
          "120Hz",
          "140Hz",
          "150Hz",
          "160Hz",
          "180Hz",
          "200Hz",
          "250Hz",
          "300Hz",
          "350Hz",
          "400Hz",
          "450Hz",
          "500Hz",
          "630Hz",
          "800Hz",
          "1.0kHz",
          "1.2kHz",
          "1.6kHz",
          "2.0kHz",
          "2.5kHz",
          "3.0kHz",
          "3.6kHz",
          "4.0kHz",
          "4.5kHz",
          "6.3kHz"
        ]
      },
      {
        "name": "Mid",
        "min": -10,
        "max": 10,
        "default": 7,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "H-Mid",
        "min": -10,
        "max": 10,
        "default": 13,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": -10,
        "max": 10,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1077936388": {
    "midiId": 1077936388,
    "hexId": "0x40400104",
    "name": "St Gt GEQ",
    "category": "FILTER",
    "title": "6-bands Stereo Graphic equalizer for guitar",
    "dsp": 7,
    "params": [
      {
        "name": "160Hz",
        "min": -12,
        "max": 12,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "400Hz",
        "min": -12,
        "max": 12,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "800Hz",
        "min": -12,
        "max": 12,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "3.2kHz",
        "min": -12,
        "max": 12,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "6.4kHz",
        "min": -12,
        "max": 12,
        "default": 12,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "12kHz",
        "min": -12,
        "max": 12,
        "default": 12,
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
      }
    ]
  },
  "1077936390": {
    "midiId": 1077936390,
    "hexId": "0x40400106",
    "name": "Z Dream",
    "category": "DRIVE",
    "title": "High gain sounds based on Mesa Boogie Road King Series II Lead",
    "dsp": 8,
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
        "name": "Tone",
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
      }
    ]
  },
  "1077936392": {
    "midiId": 1077936392,
    "hexId": "0x40400108",
    "name": "MS CRUNCH",
    "category": "AMP",
    "title": "Marshall 1959 crunch sound modeling",
    "dsp": 3,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 72,
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
        "default": 98,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": 0,
        "max": 100,
        "default": 46,
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
        "default": 53,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Prese",
        "min": 0,
        "max": 100,
        "default": 54,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 224,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "LINE",
          "COMBO FRONT",
          "STACK FRONT",
          "COMBO POWER AMP",
          "STACK POWER AMP"
        ]
      }
    ]
  },
  "1077936396": {
    "midiId": 1077936396,
    "hexId": "0x4040010c",
    "name": "Flanger",
    "category": "MOD",
    "title": "ADA flanger like jet sound",
    "dsp": 12,
    "params": [
      {
        "name": "Depth",
        "min": 0,
        "max": 100,
        "default": 47,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rate",
        "min": 0,
        "max": 78,
        "default": 7,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": -10,
        "max": 10,
        "default": 18,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PreD",
        "min": 0,
        "max": 50,
        "default": 4,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 65,
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
      }
    ]
  },
  "1077936400": {
    "midiId": 1077936400,
    "hexId": "0x40400110",
    "name": "DualDigiD",
    "category": "DELAY",
    "title": "Eventide TimeFactor DigitalDelay like cobination of 2 delays",
    "dsp": 4,
    "params": [
      {
        "name": "Time A",
        "min": 0,
        "max": 2005,
        "default": 500,
        "unit": "ms",
        "type": "slider",
        "options": null
      },
      {
        "name": "Time B",
        "min": 0,
        "max": 2005,
        "default": 375,
        "unit": "ms",
        "type": "slider",
        "options": null
      },
      {
        "name": "FBack A",
        "min": 0,
        "max": 110,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "FBack B",
        "min": 0,
        "max": 110,
        "default": 50,
        "unit": "%",
        "type": "slider",
        "options": null
      },
      {
        "name": "Depth",
        "min": 0,
        "max": 101,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Speed",
        "min": 0,
        "max": 50,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Filter",
        "min": -100,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "DelayMix",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "%",
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
  "1077936402": {
    "midiId": 1077936402,
    "hexId": "0x40400112",
    "name": "LOFI Rev",
    "category": "REVERB",
    "title": "tc electronic HALL OF FAME lofi setting modeling",
    "dsp": 2,
    "params": [
      {
        "name": "DECAY",
        "min": 0,
        "max": 100,
        "default": 52,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "TONE",
        "min": 0,
        "max": 100,
        "default": 95,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "FxLVL",
        "min": 0,
        "max": 100,
        "default": 44,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PreD",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "SHORT",
          "LONG"
        ]
      },
      {
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      },
      {
        "name": "Dry",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "1077936646": {
    "midiId": 1077936646,
    "hexId": "0x40400206",
    "name": "NYC Muff",
    "category": "DRIVE",
    "title": "Electro-Harmonix Big Muff Pi modeling",
    "dsp": 7,
    "params": [
      {
        "name": "VOL",
        "min": 0,
        "max": 100,
        "default": 58,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "TONE",
        "min": 0,
        "max": 100,
        "default": 55,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "SUSTN",
        "min": 0,
        "max": 100,
        "default": 70,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1077936652": {
    "midiId": 1077936652,
    "hexId": "0x4040020c",
    "name": "MojoRolle",
    "category": "MOD",
    "title": "Pitch modulation after picking",
    "dsp": 9,
    "params": [
      {
        "name": "Depth",
        "min": 0,
        "max": 100,
        "default": 37,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Speed",
        "min": 0,
        "max": 128,
        "default": 57,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rise",
        "min": 0,
        "max": 100,
        "default": 0,
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
        "type": "select",
        "options": [
          "Up-Dn",
          "Up",
          "Down"
        ]
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1077936656": {
    "midiId": 1077936656,
    "hexId": "0x40400210",
    "name": "FLTR PPD",
    "category": "DELAY",
    "title": "Eventide TimeFactor FilterPong delay modeling",
    "dsp": 3,
    "params": [
      {
        "name": "TimeA",
        "min": 0,
        "max": 1915,
        "default": 500,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "TimeB",
        "min": 0,
        "max": 1915,
        "default": 250,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "DlyMx",
        "min": 0,
        "max": 100,
        "default": 25,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Fdbk",
        "min": 0,
        "max": 110,
        "default": 75,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Slur",
        "min": 0,
        "max": 10,
        "default": 3,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "FLTR",
        "min": 0,
        "max": 100,
        "default": 80,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Depth",
        "min": 0,
        "max": 21,
        "default": 8,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Wave",
        "min": 0,
        "max": 47,
        "default": 35,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1077936658": {
    "midiId": 1077936658,
    "hexId": "0x40400212",
    "name": "HolyFLERB",
    "category": "REVERB",
    "title": "Electro-Harmonix Holy Grail FLERB reverb/flanger modeling",
    "dsp": 2,
    "params": [
      {
        "name": "RVRB",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "1077936908": {
    "midiId": 1077936908,
    "hexId": "0x4040030c",
    "name": "CoronaCho",
    "category": "MOD",
    "title": "tc electronic CORONA CHORUS modeling",
    "dsp": 5,
    "params": [
      {
        "name": "SPEED",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "DEPTH",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "FxLVL",
        "min": 0,
        "max": 100,
        "default": 65,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "TONE",
        "min": 0,
        "max": 100,
        "default": 75,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "DRY",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "1078984972": {
    "midiId": 1078984972,
    "hexId": "0x4050010c",
    "name": "BaFlanger",
    "category": "MOD",
    "title": "ADA Flanger modeling",
    "dsp": 7,
    "params": [
      {
        "name": "Depth",
        "min": 0,
        "max": 100,
        "default": 76,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rate",
        "min": 0,
        "max": 78,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": -10,
        "max": 10,
        "default": 15,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PreD",
        "min": 0,
        "max": 50,
        "default": 2,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 95,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "LoCut",
        "min": 0,
        "max": 10,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "60Hz",
          "120Hz",
          "180Hz",
          "200Hz",
          "280Hz",
          "340Hz",
          "400Hz",
          "500Hz",
          "630Hz",
          "800Hz"
        ]
      }
    ]
  },
  "1080033282": {
    "midiId": 1080033282,
    "hexId": "0x40600002",
    "name": "DirtyGate",
    "category": "DYNAMICS",
    "title": "Gate with vintage style way of closing",
    "dsp": 16,
    "params": [
      {
        "name": "THRSH",
        "min": 1,
        "max": 25,
        "default": 9,
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
      }
    ]
  },
  "1080033284": {
    "midiId": 1080033284,
    "hexId": "0x40600004",
    "name": "Cry",
    "category": "FILTER",
    "title": "Like the talking modulator",
    "dsp": 12,
    "params": [
      {
        "name": "Range",
        "min": 1,
        "max": 10,
        "default": 6,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 10,
        "default": 8,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Sense",
        "min": 0,
        "max": 19,
        "default": 16,
        "unit": "",
        "type": "select",
        "options": [
          "-10",
          "-9",
          "-8",
          "-7",
          "-6",
          "-5",
          "-4",
          "-3",
          "-2",
          "-1",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ]
      },
      {
        "name": "Bal",
        "min": 0,
        "max": 100,
        "default": 100,
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
      }
    ]
  },
  "1080033286": {
    "midiId": 1080033286,
    "hexId": "0x40600006",
    "name": "FuzzSmile",
    "category": "DRIVE",
    "title": "Fuzz Face modeling",
    "dsp": 8,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 70,
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
        "name": "Level",
        "min": 0,
        "max": 150,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1080033288": {
    "midiId": 1080033288,
    "hexId": "0x40600008",
    "name": "MATCH 30",
    "category": "AMP",
    "title": "Matchless DC-30(channel-1) modeling",
    "dsp": 3,
    "params": [
      {
        "name": "Gain",
        "min": 0,
        "max": 100,
        "default": 28,
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
        "default": 46,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Middl",
        "min": 0,
        "max": 100,
        "default": 46,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bass",
        "min": 0,
        "max": 100,
        "default": 45,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Prese",
        "min": 0,
        "max": 100,
        "default": 53,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 112,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "LINE",
          "COMBO FRONT",
          "STACK FRONT",
          "COMBO POWER AMP",
          "STACK POWER AMP"
        ]
      }
    ]
  },
  "1080033290": {
    "midiId": 1080033290,
    "hexId": "0x4060000a",
    "name": "Ag Amp",
    "category": "AMP",
    "title": "Aguilar DB750 simulation",
    "dsp": 4,
    "params": [
      {
        "name": "Bass",
        "min": -10,
        "max": 10,
        "default": 13,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid",
        "min": -10,
        "max": 10,
        "default": 14,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Trebl",
        "min": -10,
        "max": 10,
        "default": 17,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mid_F",
        "min": 0,
        "max": 30,
        "default": 13,
        "unit": "",
        "type": "select",
        "options": [
          "32Hz",
          "40Hz",
          "50Hz",
          "63Hz",
          "70Hz",
          "80Hz",
          "100Hz",
          "120Hz",
          "140Hz",
          "150Hz",
          "160Hz",
          "180Hz",
          "200Hz",
          "250Hz",
          "300Hz",
          "350Hz",
          "400Hz",
          "450Hz",
          "500Hz",
          "630Hz",
          "800Hz",
          "1.0kHz",
          "1.2kHz",
          "1.6kHz",
          "2.0kHz",
          "2.5kHz",
          "3.0kHz",
          "3.6kHz",
          "4.0kHz",
          "4.5kHz",
          "6.3kHz"
        ]
      },
      {
        "name": "Gain",
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
        "default": 75,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Char",
        "min": 0,
        "max": 3,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "Deep",
          "Brght",
          "Both"
        ]
      },
      {
        "name": "CAB",
        "min": 0,
        "max": 22,
        "default": 112,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1080033292": {
    "midiId": 1080033292,
    "hexId": "0x4060000c",
    "name": "Chorus",
    "category": "MOD",
    "title": "Mixing shifted pitch effect",
    "dsp": 12,
    "params": [
      {
        "name": "Depth",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rate",
        "min": 1,
        "max": 50,
        "default": 24,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
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
        "max": 10,
        "default": 7,
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
      }
    ]
  },
  "1080033294": {
    "midiId": 1080033294,
    "hexId": "0x4060000e",
    "name": "StdSyn",
    "category": "SFX",
    "title": "ZOOM original bass synth sound",
    "dsp": 5,
    "params": [
      {
        "name": "Sense",
        "min": 0,
        "max": 100,
        "default": 10,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Sound",
        "min": 1,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 7,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Synth",
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
      }
    ]
  },
  "1080033296": {
    "midiId": 1080033296,
    "hexId": "0x40600010",
    "name": "FilterDly",
    "category": "DELAY",
    "title": "Delay effect with filter",
    "dsp": 11,
    "params": [
      {
        "name": "Time",
        "min": 0,
        "max": 2014,
        "default": 499,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "F.B",
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
        "default": 90,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rate",
        "min": 1,
        "max": 50,
        "default": 6,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Depth",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Reso",
        "min": 0,
        "max": 10,
        "default": 8,
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
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "1080033298": {
    "midiId": 1080033298,
    "hexId": "0x40600012",
    "name": "Air",
    "category": "REVERB",
    "title": "A room ambience with spatial depth",
    "dsp": 15,
    "params": [
      {
        "name": "Size",
        "min": 1,
        "max": 100,
        "default": 19,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 8,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Ref",
        "min": 0,
        "max": 10,
        "default": 5,
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
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "1080033542": {
    "midiId": 1080033542,
    "hexId": "0x40600106",
    "name": "Z Scream",
    "category": "DRIVE",
    "title": "Original balanced high-gain sounds",
    "dsp": 8,
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
        "name": "Tone",
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
      }
    ]
  },
  "1080033544": {
    "midiId": 1080033544,
    "hexId": "0x40600108",
    "name": "MS 1959",
    "category": "AMP",
    "title": "Marshall 1959 Plexi ('69)",
    "dsp": 2,
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
        "default": 240,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "FD COMBO 2x12",
          "DELUXE-R 1x12",
          "FD VIBRO 2x10",
          "US BLUES 4x10",
          "VX COMBO 2x12",
          "VX JMI 2x12",
          "BG CRUNCH 1x12",
          "MATCH 30 2x12",
          "CAR DRIVE 1x12",
          "TW ROCK 2x12",
          "TONE CITY 4x12",
          "HW STACK 4x12",
          "TANGERINE 4x12",
          "B-BREAKER 2x12",
          "MS CRUNCH 4x12",
          "MS 1959 4x12",
          "MS DRIVE 4x12",
          "BG DRIVE 4x12",
          "DZ DRIVE 4x12",
          "ALIEN 4x12",
          "REVO-1 4x12",
          "B-MAN 4x10"
        ]
      },
      {
        "name": "OUT",
        "min": 0,
        "max": 4,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "LINE",
          "COMBO FRONT",
          "STACK FRONT",
          "COMBO POWER AMP",
          "STACK POWER AMP"
        ]
      }
    ]
  },
  "1080033548": {
    "midiId": 1080033548,
    "hexId": "0x4060010c",
    "name": "DynaFLNGR",
    "category": "MOD",
    "title": "Flanger with effect changes according to input level",
    "dsp": 9,
    "params": [
      {
        "name": "Depth",
        "min": 0,
        "max": 100,
        "default": 30,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rate",
        "min": 0,
        "max": 78,
        "default": 38,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Sense",
        "min": 0,
        "max": 19,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "-10",
          "-9",
          "-8",
          "-7",
          "-6",
          "-5",
          "-4",
          "-3",
          "-2",
          "-1",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10"
        ]
      },
      {
        "name": "Reso",
        "min": -10,
        "max": 10,
        "default": 15,
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
      }
    ]
  },
  "1080033552": {
    "midiId": 1080033552,
    "hexId": "0x40600110",
    "name": "CarbonDly",
    "category": "DELAY",
    "title": "MXR Carbon Copy analog delay modeling",
    "dsp": 4,
    "params": [
      {
        "name": "DELAY",
        "min": 19,
        "max": 581,
        "default": 387,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "REGEN",
        "min": 0,
        "max": 100,
        "default": 47,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "MIX",
        "min": 0,
        "max": 100,
        "default": 69,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "MID",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      },
      {
        "name": "WIDTH",
        "min": 0,
        "max": 50,
        "default": 31,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "SPEED",
        "min": 0,
        "max": 50,
        "default": 28,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      },
      {
        "name": "Sync",
        "min": 0,
        "max": 15,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "1/16",
          "1/12",
          "3/32",
          "1/8",
          "1/6",
          "3/16",
          "1/4",
          "3/8",
          "1/2",
          "3/4",
          "4/4",
          "5/4",
          "6/4",
          "7/4",
          "8/4"
        ]
      }
    ]
  },
  "1080033554": {
    "midiId": 1080033554,
    "hexId": "0x40600112",
    "name": "Church",
    "category": "REVERB",
    "title": "Reverbrations of a church simulation",
    "dsp": 2,
    "params": [
      {
        "name": "DECAY",
        "min": 0,
        "max": 100,
        "default": 49,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PreD",
        "min": 0,
        "max": 200,
        "default": 96,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "MIX",
        "min": 0,
        "max": 100,
        "default": 46,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "TONE",
        "min": 0,
        "max": 100,
        "default": 61,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "HiDMP",
        "min": 0,
        "max": 100,
        "default": 83,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      },
      {
        "name": "Dry",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "1080033798": {
    "midiId": 1080033798,
    "hexId": "0x40600206",
    "name": "TS Drive",
    "category": "DRIVE",
    "title": "Ibanez TS808 modeling",
    "dsp": 6,
    "params": [
      {
        "name": "O.DRV",
        "min": 0,
        "max": 100,
        "default": 74,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "TONE",
        "min": 0,
        "max": 100,
        "default": 57,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "LEVEL",
        "min": 0,
        "max": 100,
        "default": 82,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1080033804": {
    "midiId": 1080033804,
    "hexId": "0x4060020c",
    "name": "RingMod",
    "category": "MOD",
    "title": "Metallic ringing sound",
    "dsp": 14,
    "params": [
      {
        "name": "Freq",
        "min": 1,
        "max": 50,
        "default": 27,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tone",
        "min": 0,
        "max": 10,
        "default": 10,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Bal",
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
        "default": 120,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1080033808": {
    "midiId": 1080033808,
    "hexId": "0x40600210",
    "name": "A-Pan DLY",
    "category": "DELAY",
    "title": "Combination of autopan and delay",
    "dsp": 6,
    "params": [
      {
        "name": "Time",
        "min": 0,
        "max": 2014,
        "default": 222,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "F.B",
        "min": 0,
        "max": 100,
        "default": 87,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 53,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rate",
        "min": -2,
        "max": 50,
        "default": 26,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Width",
        "min": -50,
        "max": 50,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Depth",
        "min": 0,
        "max": 10,
        "default": 7,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Clip",
        "min": 0,
        "max": 10,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Link",
        "min": 0,
        "max": 1,
        "default": 1,
        "unit": "",
        "type": "select",
        "options": [
          "P-D",
          "D-P"
        ]
      },
      {
        "name": "Level",
        "min": 0,
        "max": 200,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1080033810": {
    "midiId": 1080033810,
    "hexId": "0x40600212",
    "name": "DynaRev",
    "category": "REVERB",
    "title": "tc electronic NOVA REVERB dynamics changing reverb modeling",
    "dsp": 3,
    "params": [
      {
        "name": "Decay",
        "min": 0,
        "max": 100,
        "default": 82,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "PreD",
        "min": 0,
        "max": 100,
        "default": 0,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Color",
        "min": 0,
        "max": 100,
        "default": 76,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Sense",
        "min": -100,
        "max": 100,
        "default": 172,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 40,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Tail",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  },
  "1080034054": {
    "midiId": 1080034054,
    "hexId": "0x40600306",
    "name": "RC Boost",
    "category": "DRIVE",
    "title": "Booster for from clean to light drives",
    "dsp": 4,
    "params": [
      {
        "name": "GAIN",
        "min": 0,
        "max": 100,
        "default": 58,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "TRBL",
        "min": 0,
        "max": 100,
        "default": 52,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "BASS",
        "min": 0,
        "max": 100,
        "default": 48,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "VOL",
        "min": 0,
        "max": 100,
        "default": 48,
        "unit": "",
        "type": "slider",
        "options": null
      }
    ]
  },
  "1080034060": {
    "midiId": 1080034060,
    "hexId": "0x4060030c",
    "name": "ANA234Cho",
    "category": "MOD",
    "title": "MXR M234 analog chorus modeling",
    "dsp": 7,
    "params": [
      {
        "name": "LEVEL",
        "min": 0,
        "max": 100,
        "default": 70,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "RATE",
        "min": 0,
        "max": 100,
        "default": 60,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "DEPTH",
        "min": 0,
        "max": 100,
        "default": 50,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "LOW",
        "min": 0,
        "max": 100,
        "default": 100,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "HIGH",
        "min": 0,
        "max": 100,
        "default": 50,
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
        "type": "select",
        "options": [
          "MONO",
          "STR"
        ]
      }
    ]
  },
  "1081081868": {
    "midiId": 1081081868,
    "hexId": "0x4070000c",
    "name": "Ba Chorus",
    "category": "MOD",
    "title": "Chorus effect for bass",
    "dsp": 11,
    "params": [
      {
        "name": "Depth",
        "min": 0,
        "max": 100,
        "default": 42,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Rate",
        "min": 1,
        "max": 50,
        "default": 22,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "Mix",
        "min": 0,
        "max": 100,
        "default": 57,
        "unit": "",
        "type": "slider",
        "options": null
      },
      {
        "name": "LoCut",
        "min": 0,
        "max": 10,
        "default": 2,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "60Hz",
          "120Hz",
          "180Hz",
          "200Hz",
          "280Hz",
          "340Hz",
          "400Hz",
          "500Hz",
          "630Hz",
          "800Hz"
        ]
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
        "name": "PreD",
        "min": 0,
        "max": 1,
        "default": 0,
        "unit": "",
        "type": "select",
        "options": [
          "OFF",
          "ON"
        ]
      }
    ]
  }
};

import { resolveCustomEffect, CUSTOM_COMMUNITY_EFFECTS, decodeEffectId, encodeEffectId } from './custom-effects-db.js';
export { resolveCustomEffect, CUSTOM_COMMUNITY_EFFECTS, decodeEffectId, encodeEffectId };

/**
 * Normalizes an effect's raw DSP figure into an accurate percentage of Zoom MS-50G processor load.
 * In Zoom MultiStomp reverse-engineering databases (g200kg / Zoom ZDL):
 * - If rawDsp is 2..20: it is the instance denominator D (100 / D). E.g. 2 -> 50%, 3 -> 33.3%, 4 -> 25%, 8 -> 12.5%.
 * - If rawDsp is 10000 or 0: 0% (THRU / Empty).
 * - If rawDsp is already a percentage (21..100): use it directly (e.g. NAM lite 39%, custom Plexi 50%).
 */
export function getExactDeviceDsp(raw) {
  if (raw === null || raw === undefined) return 0;
  const val = typeof raw === 'object' ? raw.dsp : raw;
  if (!val || val >= 1000 || val <= 0) return 0;
  // If already a floating-point percentage (e.g. 12.5, 33.3, 8.3, 5.9):
  if (!Number.isInteger(val)) {
    return parseFloat(Number(val).toFixed(1));
  }
  // In Zoom MultiStomp firmware, hardware allocation denominators are integers from 2 to 18:
  // D=2 -> 50%, D=3 -> 33.3%, D=4 -> 25%, ..., D=8 -> 12.5%, ..., D=18 -> 5.6%.
  if (val >= 2 && val <= 18) {
    return parseFloat((100 / val).toFixed(1));
  }
  // Values >= 19 (e.g. 20%, 34%, 39%, 50%) are direct percentages.
  return parseFloat(Number(val).toFixed(1));
}

// Convert all entries in ZOOM_EFFECT_DB to accurate device percentages
for (const k in ZOOM_EFFECT_DB) {
  ZOOM_EFFECT_DB[k].dsp = getExactDeviceDsp(ZOOM_EFFECT_DB[k].dsp);
}

export function getEffectByMidiId(midiId) {
  if (!midiId || midiId === 0) {
    return {
      midiId: 0,
      hexId: '0x00000000',
      id: 'empty',
      name: 'Thru (Empty)',
      category: 'EMPTY',
      title: 'Empty / Thru',
      dsp: 0,
      params: []
    };
  }
  const found = ZOOM_EFFECT_DB[midiId];
  if (found) {
    return {
      ...found,
      id: 'zoom-' + found.hexId.toLowerCase(),
      dsp: getExactDeviceDsp(found.dsp),
    };
  }

  // Check custom community & sideloaded effects (Marshall Plexi, themanro NAM, CabIR, etc.)
  const custom = resolveCustomEffect(midiId);
  if (custom) {
    return {
      ...custom,
      dsp: getExactDeviceDsp(custom.dsp),
    };
  }

  return {
    midiId,
    hexId: '0x' + Number(midiId).toString(16).padStart(8, '0'),
    id: 'unknown-' + midiId,
    name: 'Effect 0x' + Number(midiId).toString(16).toUpperCase(),
    category: 'SFX',
    title: 'Custom MultiStomp Effect',
    dsp: 10,
    params: []
  };
}
