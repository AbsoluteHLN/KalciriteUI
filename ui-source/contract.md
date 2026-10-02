# ProjectHLN UI System Contract

`ui-system/src/` is the only editable source of truth for the shared visual
system. The top-level files in `ui-system/` are generated compatibility
outputs. Host applications may add layout rules, but they must consume the
semantic `--hln-ui-*` tokens and the shared data attributes below.

## Themes

The supported theme ids are `flat-design`, `aurora`, `liquid-glass`,
`organic-biophilic`, `arknights`, and `endfield`. A host sets
`data-hln-theme` or `data-theme` on its UI root. Legacy ids are isolated in
`compatibility.css` and are not valid for new screens.

## Typography

Display and title roles use Book Antiqua, Berlin Sans BF, and 方正小标宋简体.
Body and form roles use Berlin Sans BF and 仿宋. Each role has a Windows-safe
fallback chain. Technical identifiers use the monospace token.

## DOM contract

```text
[data-hln-ui-root]
  [data-hln-ui-bar]*
  [data-hln-ui-surface="glass"|"panel"|"glass-strong"|"quiet"]*
  [data-hln-ui-scroll]*
  [data-hln-ui-resize-handle="vertical"|"horizontal"]*
  [data-hln-ui-control]*
  [data-hln-ui-field]*
```

Controls must expose an accessible name and use `data-active="true"` for
selected state. Status chips may use the pill radius; ordinary controls and
panels use radii no larger than 8px.

## Motion

The shared motion layer provides one-shot `panel`, `item`, and `control`
presets with optional `spring` entry variants. Motion is limited to opacity and
transform. `prefers-reduced-motion: reduce` disables animation and transition.
No repeating pulse, ambient, scan, shimmer, or symbol-stream effects belong in
the shared system.

`playHlnMotion()` applies a preset to a root or its descendants. `hlnFlip()`
handles layout changes with a bounded 150-300ms transform animation.

## Surfaces and layout

Scroll regions use the custom scrollbar contract rather than browser-default
tracks. Resizable split panes expose a 14px hit target through
`data-hln-ui-resize-handle`; the visible rule is drawn by the shared layer.
Conversation, composer, and drawer surfaces must retain independent vertical
scroll regions and must not introduce horizontal overflow at 320px.

## Skins

`createHlnSkin()` validates a custom skin id and token values. `applyHlnSkin()`
applies only the allowlisted semantic color tokens to a host root and returns
a cleanup function. This is the extension point for character or anime skin
packages; skin packages must not replace component geometry or inject raw CSS.

## Build and sync

Run `scripts/build-ui-system-bundle.ps1` after source edits. It regenerates the
top-level compatibility files and the self-contained `hln-ui-system.css`.
Run `scripts/sync-ui-system.ps1` to copy the generated contract files into the
registered host destinations. A destination is valid only when its copied
files match the generated source hashes.
