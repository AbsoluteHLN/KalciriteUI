# ProjectHLN UI System v4.0 Contract

**Folio — Calm Minimal Multi-Pigment Edition.** Shipped as an independent
package in `ui-source/v4/`.

The parent-owned interface contract for this engine lives in
[`INTERFACE.md`](./INTERFACE.md). This document is the engine's own contract
surface: what a host application may rely on.

## 1. Architectural independence

- `v1`, `v2`, `v2.3`, `v2.5`, `v3`, `v3.2`, `v3.5` and `v3.8` remain untouched
  in their own directories and keep their original showcase layouts.
- `v4` owns `dist/hln-ui-system-v4.css`, `dist/index.js` and
  `dist/index.d.ts`. It shares no stylesheet, no theme id, and no motion
  variant with any other engine.
- `v4` reads no global state from the other engines. Switching engines in the
  workbench swaps the stylesheet and the catalogue; nothing leaks.

## 2. Theme catalogue

`HLN_V4_THEMES` and `HLN_V4_THEME_REGISTRY` contain exactly eight themes, in
this order:

1. `folio-porcelain` — 瓷白 Porcelain. Warm paper, indigo primary, celadon secondary.
2. `folio-sage` — 苔青 Sage. Pale sage paper, pine primary, clay secondary.
3. `folio-apricot` — 杏色 Apricot. Warm cream, burnt sienna primary, dusty teal secondary.
4. `folio-lilac` — 藕荷 Lilac. Cool lilac-grey, indigo violet primary, dusty rose secondary.
5. `folio-graphite` — 石墨 Graphite. Lifted graphite, warm amber primary, slate blue secondary.
6. `folio-pine` — 苍松 Pine. Deep pine, warm sand primary, jade secondary.
7. `folio-plum` — 墨梅 Plum. Deep aubergine, copper primary, orchid secondary.
8. `folio-slate` — 靛青 Slate. Deep blue-grey, periwinkle primary, sea green secondary.

Every theme defines a **primary pigment** (`--hln-ui-accent`) and a
**secondary pigment** (`--hln-ui-accent-cool`) from a different hue family,
plus `--hln-ui-focus` equal to the primary. All themes enforce
`--hln-ui-blur: 12px`.

Four themes are light, four are dark. No theme uses a pure black canvas.

A host sets `data-hln-theme` on its UI root. `data-theme` is written in
parallel for hosts that read the generic attribute.

## 3. Typography contract

`HLN_V4_FONTS` exposes six profiles, selected with `data-hln-font`:

| id | Stack | Role |
|---|---|---|
| `grotesque` | Inter + modern geometric hei | default UI and body |
| `editorial` | Aptos Display + Source Han Serif | titles and running prose |
| `display` | Bahnschrift + condensed architectural hei | display numerals |
| `technical` | JetBrains Mono + Sarasa Mono SC | identifiers and codes only |
| `label` | Bahnschrift + modern hei | labels and eyebrows |
| `fangsong` | Georgia + FangSong | forms and quotations |

`HLN_V4_CJK_FONTS` exposes the shared seven CJK modes: `auto`, `hei`,
`display`, `song`, `kai`, `mono`, `fangsong`. A CJK override sets
`--hln-ui-font-cjk-override` and `font-size-adjust: from-font`.

Monospace is reserved for technical content — identifiers, codes, versions,
readouts. It is never the blanket interface face.

## 4. DOM contract

```text
[data-hln-ui-root]
  [data-hln-ui-bar]*
  [data-hln-ui-surface="glass"|"panel"|"glass-strong"|"quiet"]*
  [data-hln-ui-scroll]*
  [data-hln-ui-resize-handle="vertical"|"horizontal"]*
  [data-hln-ui-control]*
  [data-hln-ui-field]*
```

- Every `[data-hln-ui-control]` exposes an accessible name and marks its
  selected state with `data-active="true"`.
- Controls and panels use radii no larger than 8px. Only status chips use the
  pill radius.
- Every `[data-hln-ui-field]` shows a visible focus ring.

## 5. Motion contract

`HLN_V4_MOTION_VARIANTS` exposes seven one-shot entry variants — `rise`,
`unfold`, `spring`, `slide-left`, `slide-right`, `type-in`, `page-shift` —
alongside the shared `panel`, `item` and `control` presets.

- Motion is limited to opacity and transform.
- Every entry animation is one-shot and bounded at 300ms or less.
- `prefers-reduced-motion: reduce` disables all animation and transition.
- **No repeating pulse, ambient, scan, shimmer, drift or symbol-stream effect
  exists anywhere in v4.** All seven ambient background presets are static.

`playHlnMotion(scope, preset, variant)` applies a preset to a root or its
descendants and returns the number of animated elements. `hlnFlip(element)`
handles a layout change with a bounded 150–300ms transform animation.

## 6. Surfaces and layout

- Scroll regions use the custom scrollbar contract, never the browser default.
- Resizable split panes expose a 14px hit target through
  `data-hln-ui-resize-handle`; the visible rule is drawn by the shared layer.
- Conversation, composer and drawer surfaces keep independent vertical scroll
  regions and introduce no horizontal overflow at 320px.
- The v4 showcase grid resolves to three columns above 1200px, two columns
  between 900px and 1199px, and one column below 900px.

## 7. Skins

`createHlnSkin()` validates a skin id and its token values against a fixed
allowlist of seventeen semantic colour tokens; anything else throws a
`TypeError`. `applyHlnSkin()` applies only the allowlisted tokens to a host
root and returns a cleanup function that restores the previous inline values.

Skin packages may recolour the semantic tokens. They may not replace
component geometry and they may not inject raw CSS.

A skin that replaces `--hln-ui-accent` MUST also replace `--hln-ui-on-accent`
with a colour that clears 4.5:1 against the new accent.

## 8. Terminology

v4 uses no game-specific nouns and no observatory or telemetry jargon. The
theme, font, background and motion vocabularies are the ones listed above and
in `INTERFACE.md`.

## 9. Build and verification

```bash
node ui-source/v4/build.mjs
node ui-source/v4/verify.mjs
node --test ui-source/v4/node-contract.test.mjs
```

`build.mjs` regenerates `dist/` from `src/` and assembles
`dist/hln-ui-system-v4.css` from `tokens.css`, `themes.css`, `base.css` and
`folio.css` in that order. The workbench copy at
`artist-Paralos-main/styles/hln-ui-system-v4.css` must stay byte-identical to
the built bundle.
