// Native Android Web MIDI Polyfill for Zoom Stage Deck
// Bridges Android's native android.media.midi.MidiManager into standard W3C Web MIDI API
(function() {
  if (navigator.requestMIDIAccess) return; // If browser already provides Web MIDI, use native
  if (!window.AndroidMidi) return; // Only activate inside the Android native app shell

  class AndroidMIDIPort extends EventTarget {
    constructor(id, name, type) {
      super();
      this.id = String(id);
      this.name = String(name || 'MIDI Device');
      this.manufacturer = 'Android USB/BLE';
      this.type = type;
      this.version = '1.0';
      this.state = 'connected';
      this.connection = 'open';
      this.onmidimessage = null;
      this.onstatechange = null;
    }
  }

  class AndroidMIDIInput extends AndroidMIDIPort {
    constructor(id, name) {
      super(id, name, 'input');
    }
    _dispatchMessage(data) {
      const evt = { data: new Uint8Array(data), receivedTime: performance.now() };
      if (typeof this.onmidimessage === 'function') {
        try {
          this.onmidimessage(evt);
        } catch (err) {
          console.error('[Android MIDI Input error]', err);
        }
      }
      this.dispatchEvent(new CustomEvent('midimessage', { detail: evt }));
    }
  }

  class AndroidMIDIOutput extends AndroidMIDIPort {
    constructor(id, name) {
      super(id, name, 'output');
    }
    send(data) {
      try {
        const bytes = Array.from(data);
        window.AndroidMidi.sendMidi(this.id, JSON.stringify(bytes));
      } catch (err) {
        console.error('[Android MIDI Output send error]', err);
      }
    }
  }

  class AndroidMIDIAccess extends EventTarget {
    constructor() {
      super();
      this.inputs = new Map();
      this.outputs = new Map();
      this.sysexEnabled = true;
      this.onstatechange = null;
      this._refreshDevices();
    }

    _refreshDevices() {
      try {
        const raw = window.AndroidMidi.getDevices();
        const devices = JSON.parse(raw || '[]');
        const currentInIds = new Set();
        const currentOutIds = new Set();

        for (const dev of devices) {
          const id = String(dev.id);
          const name = dev.name || 'MIDI Device';
          if (dev.hasInput) {
            currentInIds.add(id);
            if (!this.inputs.has(id)) {
              this.inputs.set(id, new AndroidMIDIInput(id, name));
            }
          }
          if (dev.hasOutput) {
            currentOutIds.add(id);
            if (!this.outputs.has(id)) {
              this.outputs.set(id, new AndroidMIDIOutput(id, name));
            }
          }
        }

        for (const id of Array.from(this.inputs.keys())) {
          if (!currentInIds.has(id)) this.inputs.delete(id);
        }
        for (const id of Array.from(this.outputs.keys())) {
          if (!currentOutIds.has(id)) this.outputs.delete(id);
        }
      } catch (e) {
        console.error('AndroidMidi device refresh error:', e);
      }
    }
  }

  let globalAccess = null;

  window.__androidMidiReceive = function(portId, bytes) {
    if (globalAccess && globalAccess.inputs.has(String(portId))) {
      globalAccess.inputs.get(String(portId))._dispatchMessage(bytes);
    }
  };

  window.__androidMidiStateChange = function() {
    if (globalAccess) {
      globalAccess._refreshDevices();
      if (typeof globalAccess.onstatechange === 'function') {
        globalAccess.onstatechange(new Event('statechange'));
      }
      globalAccess.dispatchEvent(new Event('statechange'));
    }
  };

  navigator.requestMIDIAccess = function() {
    return new Promise((resolve) => {
      if (!globalAccess) {
        globalAccess = new AndroidMIDIAccess();
      }
      resolve(globalAccess);
    });
  };
})();
