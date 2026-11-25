import test from 'node:test';
import assert from 'node:assert/strict';
import { getEffectDef, createSlotFromEffect } from '../src/mock-data.js';

test('getEffectDef resolves string slug, hex ID, and number ID', () => {
  // String slug
  const tscream = getEffectDef('t-scream');
  assert.equal(tscream.name, 'T Scream');
  assert.equal(tscream.category, 'DRIVE');

  // Hex string
  const dcompHex = getEffectDef('0x00300002');
  assert.equal(dcompHex.name, 'D Comp');
  assert.equal(dcompHex.category, 'DYNAMICS');

  // Numeric ID
  const fdcombo = getEffectDef(0x00100008);
  assert.equal(fdcombo.name, 'FD COMBO');
  assert.equal(fdcombo.category, 'AMP');

  // Empty / Thru
  const thru = getEffectDef(0);
  assert.equal(thru.id, 'empty');
});

test('createSlotFromEffect sets default values and preserves midiId', () => {
  const slot = createSlotFromEffect(0x00300002, true);
  assert.equal(slot.enabled, true);
  assert.equal(slot.midiId, 0x00300002);
  assert.ok(slot.values.length >= 3);
});

test('getEffectDef resolves Marshall Plexi custom amp from GitHub (.zdl)', () => {
  // PLEXI.ZDL (0x40280208 = 1076363784)
  const plexi1 = getEffectDef(1076363784);
  assert.equal(plexi1.name, 'PLEXI');
  assert.equal(plexi1.category, 'AMP');
  assert.ok(plexi1.params.length >= 9, 'Should have complete amp parameter list');
  assert.ok(plexi1.params.some((p) => p.name === 'Gain'));
  assert.ok(plexi1.params.some((p) => p.name === 'CAB'));

  // PLEXI2.ZDL (0x40640208 = 1080295944)
  const plexi2 = getEffectDef(1080295944);
  assert.equal(plexi2.name, 'Marshall PLEXI');
  assert.equal(plexi2.category, 'AMP');
  assert.ok(plexi2.params.length >= 9);

  // String alias
  const plexiSlug = getEffectDef('plexi');
  assert.equal(plexiSlug.category, 'AMP');
  assert.ok(plexiSlug.params.length >= 9);
});

test('getEffectDef resolves themanro Neural Amp Modeler (NAM) captures and CabIR slots', () => {
  // NAMLite capture 1 (fxid 900, id 526096)
  const nam1 = getEffectDef(526096);
  assert.equal(nam1.name, 'NAMLite — capture 1');
  assert.equal(nam1.category, 'AMP');
  assert.equal(nam1.params.length, 7);
  assert.deepEqual(
    nam1.params.map((p) => p.name),
    ['Input', 'Output', 'Mix', 'Bass', 'Mid', 'Treb', 'Gate']
  );

  // Generated NAM slot 17 (fxid 500, id 1080558352)
  const nam17 = getEffectDef(1080558352);
  assert.equal(nam17.name, 'NAMLite — capture 17');
  assert.equal(nam17.category, 'AMP');
  assert.equal(nam17.params.length, 7);

  // CabIR slot 1 (fxid 930, id 4458256)
  const cab1 = getEffectDef(4458256);
  assert.equal(cab1.name, 'CabIR — slot 1');
  assert.equal(cab1.category, 'FILTER');
  assert.equal(cab1.params.length, 4);

  // Generated CabIR slot 17 (fxid 700, id 7865616)
  const cab17 = getEffectDef(7865616);
  assert.equal(cab17.name, 'CabIR — slot 17');
  assert.equal(cab17.category, 'FILTER');
  assert.equal(cab17.params.length, 4);
});
