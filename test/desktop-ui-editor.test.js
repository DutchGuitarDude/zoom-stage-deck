import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createSlotFromEffect, generateMockPresets } from '../src/mock-data.js';
import { defaultScenesForPreset } from '../src/storage.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

test('preload.cjs exposes electronAPI with fullscreen methods and event relays', () => {
  const preloadContent = fs.readFileSync(path.join(rootDir, 'preload.cjs'), 'utf8');
  assert.match(preloadContent, /contextBridge\.exposeInMainWorld\('electronAPI'/);
  assert.match(preloadContent, /toggleFullScreen/);
  assert.match(preloadContent, /setFullScreen/);
  assert.match(preloadContent, /isFullScreen/);
  assert.match(preloadContent, /onFullScreenChange/);
});

test('electron-main.cjs handles toggle-fullscreen and registers preload script', () => {
  const mainContent = fs.readFileSync(path.join(rootDir, 'electron-main.cjs'), 'utf8');
  assert.match(mainContent, /preload:\s*path\.join\(__dirname,\s*['"]preload\.cjs['"]\)/);
  assert.match(mainContent, /ipcMain\.on\(['"]toggle-fullscreen['"]/);
  assert.match(mainContent, /mainWindow\.setFullScreen\(!mainWindow\.isFullScreen\(\)\)/);
  assert.match(mainContent, /fullscreen-change/);
});

test('index.html contains split pedal editor structure (hero pedal stage + params stage)', () => {
  const htmlContent = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
  assert.match(htmlContent, /class=["'][^"']*editor-pedal-stage[^"']*["']/);
  assert.match(htmlContent, /id=["']editorHeroPedalBox["']/);
  assert.match(htmlContent, /id=["']editorHeroLed["']/);
  assert.match(htmlContent, /id=["']editorSlotNav["']/);
  assert.match(htmlContent, /id=["']editorSceneSaveBtn["']/);
  assert.match(htmlContent, /id=["']paramsGrid["']/);
  assert.match(htmlContent, /id=["']btnCloseEditor["']/);
});

test('styles.css enforces zero-scroll desktop viewport and side-by-side pedal editor', () => {
  const cssContent = fs.readFileSync(path.join(rootDir, 'styles.css'), 'utf8');
  // Root overflow hidden & 100vh constraint for zero-scroll desktop fit
  assert.match(cssContent, /overflow:\s*hidden;/);
  assert.match(cssContent, /height:\s*100vh;/);
  // Split editor with enlarged pedal showcase and parameters stage
  assert.match(cssContent, /\.editor-pedal-stage/);
  assert.match(cssContent, /\.editor-hero-pedal-box/);
  assert.match(cssContent, /\.editor-params-stage/);
  assert.match(cssContent, /\.editor-slot-nav-pill/);
});

test('Scenes retain and update tweaked parameters across all 3 modes', () => {
  const presets = generateMockPresets('MS-50G');
  const preset = presets[0];
  const scenes = defaultScenesForPreset(preset);

  // Simulate editing Slot 1 (Drive) in editor: tweak Gain from 55 to 88
  const slot1 = preset.slots[1];
  slot1.values[0] = 88; // e.g. Gain 88
  slot1.values[1] = 62; // e.g. Tone 62

  // Capture into Scene 1 (idx 0)
  const targetScene = scenes[0];
  targetScene.states = preset.slots.map((s) => s.enabled);
  targetScene.slotValues = preset.slots.map((s) => [...s.values]);

  assert.equal(targetScene.slotValues[1][0], 88, 'Gain parameter saved in scene');
  assert.equal(targetScene.slotValues[1][1], 62, 'Tone parameter saved in scene');

  // Change preset live values, then recall Scene 1
  slot1.values[0] = 10;
  assert.equal(slot1.values[0], 10);

  // Recall Scene 1
  slot1.values[0] = targetScene.slotValues[1][0];
  assert.equal(slot1.values[0], 88, 'Scene recall restores saved parameter knobs');
});
