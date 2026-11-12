# ProjectHLN UI System — v4.0 Folio

**Calm Minimal Multi-Pigment Edition.** An independent UI engine for
ProjectHLN clients, shipped in `ui-source/v4/`.

## What makes v4 different

The three prior generations all share one DNA: a near-black canvas, a single
accent hue per theme, chamfered or notched geometry, and dense technical
ornament. v4 breaks all four axes at once.

| | v1 | v2 / v2.3 | v3.x | **v4 Folio** |
|---|---|---|---|---|
| Canvas | dark + aurora | near-black | near-black | **warm paper, light-first** |
| Geometry | 8–16px round | 0px chamfer | 0–4px fiducial | **4 / 6 / 8px soft** |
| Colour | one accent | one accent | one hue | **pigment pair per theme** |
| Ornament | blobs, blur | hazard, scanlines | grids, telemetry | **static, near-none** |
| Motion | ambient loops | ambient loops | ambient loops | **one-shot, opacity + transform** |

## The two signatures

**The Wash** — the selected state of a control is a pigment wash, never a flat
fill: the accent tinted at 10%, the label switched to the accent, and a 2px
accent bar on the leading edge. It reads like a highlighter stroke over a
line of text.

**The Running Head** — every panel opens with a mono, uppercase, wide-tracked
eyebrow above its title, followed by a hairline that runs to the panel edge.
It is the only place where mono uppercase acts as a structural device.

Everything else stays quiet. No glows, no notches, no bezels, no decorative
telemetry.

## The eight themes

Every theme carries a **primary pigment** and a **secondary pigment** from a
different hue family, so a theme reads as its own place rather than one
template with a different hex.

| id | label | scheme | primary | secondary |
|---|---|---|---|---|
| `folio-porcelain` | 瓷白 Porcelain | light | indigo | celadon |
| `folio-sage` | 苔青 Sage | light | pine | clay |
| `folio-apricot` | 杏色 Apricot | light | sienna | dusty teal |
| `folio-lilac` | 藕荷 Lilac | light | indigo violet | dusty rose |
| `folio-graphite` | 石墨 Graphite | dark | amber | slate blue |
| `folio-pine` | 苍松 Pine | dark | warm sand | jade |
| `folio-plum` | 墨梅 Plum | dark | copper | orchid |
| `folio-slate` | 靛青 Slate | dark | periwinkle | sea green |

## Package layout

```text
ui-source/v4/
  INTERFACE.md          parent-owned interface contract
  contract.md           the engine contract a host relies on
  README.md             this file
  build.mjs             build script
  verify.mjs            standalone verification
  node-contract.test.mjs contract test suite
  src/
    tokens.css          structural, elevation and typography tokens
    themes.css          the eight theme blocks
    base.css            component grammar
    folio.css           showcase layout primitives
    index.js            runtime registry
    index.d.ts          type declarations
  dist/                 generated
```

## Build and verify

```bash
node ui-source/v4/build.mjs
node ui-source/v4/verify.mjs
node --test ui-source/v4/node-contract.test.mjs
```

## Using it in a host

```html
<link rel="stylesheet" href="styles/hln-ui-system-v4.css">
```

```html
<div data-hln-ui-root data-hln-ui-version="v4" data-hln-theme="folio-porcelain">
  <div data-hln-ui-bar>…</div>
  <section data-hln-ui-surface="panel">
    <button type="button" data-hln-ui-control data-active="true">保存</button>
    <input type="text" data-hln-ui-field>
  </section>
</div>
```

Set `data-hln-theme` on the root to switch themes, `data-hln-font` to switch
typography profiles, and `data-hln-bg-motion` to switch the static ambient
surface. The runtime in `src/index.js` exposes `applyHlnV4Theme`,
`applyHlnV4Font`, `applyHlnV4CjkFont`, `applyHlnV4Background`,
`playHlnMotion`, `hlnFlip`, `createHlnSkin` and `applyHlnSkin`.

See [`contract.md`](./contract.md) for the full DOM, motion, surface and skin
contract.
