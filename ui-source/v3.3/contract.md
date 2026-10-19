# KalciriteUI v3.3 OverleafPlus Additive Contract

## Scope and compatibility

v3.3 is an overlay-only edition. Its stylesheet must be loaded after the
unaltered v3.2 artifact. It preserves the v3.2 runtime, theme bootstrap,
`data-hln-ui-version="v3.2"`, and all six canonical themes:
`linear-obsidian`, `linear-platinum`, `linear-amber`, `linear-paper`,
`linear-emerald`, and `linear-mono`. It introduces no theme IDs, theme engine,
or global selectors that restyle unmarked pages.

The sole opt-in hook is
`[data-hln-ui-variant='overleafplus-v33']`. Every component and state rule is
scoped to this attribute. Without it, pages retain v3.2 presentation.

## Tokens

Tokens are declared only on the opt-in subtree. Color tokens alias the v3.2
semantic palette; mixed surfaces use `color-mix()` against inherited semantic
colors to support both light and dark themes.

| Token | Meaning |
| --- | --- |
| `--hln-v33-ai-reading-surface` | Quiet surface for AI-generated reading content |
| `--hln-v33-table-heading-surface` | Subtle data-table header surface |
| `--hln-v33-selection-surface` | Hover/selection surface |
| `--hln-v33-text-secondary` | Alias for muted semantic text |
| `--hln-v33-rule` | Fine structural rule using the active theme line |
| `--hln-v33-axis-rule-color`, `--hln-v33-grid-rule-color`, `--hln-v33-vector-rule-color` | Theme-derived vector and data marks |
| `--hln-v33-density-*` | Compact row, cell, and section spacing |
| `--hln-v33-control-*` | Compact existing control dimensions and radius |
| `--hln-v33-tabular-numbers` | Tabular and lining numeral features |

Letter spacing is zero in the opted-in subtree. Numeric data uses tabular
figures. The compact academic type scale favors legible tables, captions,
citations, and analytical prose over oversized display typography. Corner
radii are at most 4px; no gradients, blur, offset shadows, beige-specific
palette, or decorative orbs are introduced.

## Components and data marks

- `.hln-v33-ai-reading-surface` provides an open, theme-aware reading surface.
- `.hln-v33-data-table` styles semantic table markup with tabular numerals,
  fine rules, numeric alignment through `data-numeric="true"`, and a restrained
  row hover state.
- `.hln-v33-figure` and `.hln-v33-caption` frame real analytical content and its
  explanatory caption without inventing chart content.
- `.hln-v33-stat-row` lays out supplied summary measures with stable compact
  tracks and structural separators.
- `data-vector-axis`, `data-vector-gridline`, `data-vector-path`,
  `data-vector-point`, and `data-vector-bar` style inline vector marks. Use them
  only for marks backed by actual data; do not use these primitives to imply
  fabricated measurements or decorative charts.

Existing `[data-hln-ui-control]` and `[data-hln-ui-field]` controls receive
compact dimensions only inside the opt-in subtree. `.hln-v33-enter` is the one
purposeful 160ms entrance accent. Reduced-motion preferences remove that
animation and minimize control transitions.

## Build and provenance

`build.mjs` uses only Node built-ins. It reads the original v3.2 CSS artifact
for its base hash and emits only additive CSS, not a combined v3.2+v3.3 bundle.
It writes `dist/hln-ui-system-v3.3.css` and `dist/provenance.json` with stable
`baseSHA`, `sourceSHA`, `artifactSHA`, `variant`, `schema`, and `version`
properties. Source text is normalized to LF before source hashing and emission;
the base stylesheet is hashed byte-for-byte. Hashes are lowercase SHA-256 hex digests. The provenance JSON has
no timestamps or absolute paths, keeping identical inputs byte-deterministic.

## Rollback

Remove the overlay stylesheet load and the opt-in variant attribute. The
canonical v3.2 stylesheet, six themes, bootstrap, and stored theme choices are
unchanged; no migration or theme normalization is required.
