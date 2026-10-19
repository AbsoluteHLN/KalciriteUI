# OverleafPlus v3.3 Contract

## Scope

Load after the exact canonical v3.2 artifact. Opt in only through
`[data-hln-ui-variant='overleafplus-v33']`. No runtime, new theme IDs, preference
migration or v3.2 token redefinition. The six base themes are unchanged:
obsidian, platinum, amber, paper, emerald and mono (all retain `linear-` IDs).
Component geometry and icons inherit v3.2. The host owns page layouts and behavior.

## Palette And Semantics

`src/palettes.json` is the only authority for research extensions. The builder
accepts exactly the six existing theme IDs in canonical order, each with exactly
writing, analysis, review and media hex colors. It emits only `--hln-v33-*`
declarations under theme AND variant selectors. Handwritten CSS cannot select
theme IDs or redefine `--hln-ui-*` tokens. Base themes remain byte-identical.

`data-academic-role="writing|analysis|review|media"` chooses `--hln-v33-role-color`.
At each role boundary, `--hln-v33-role-surface` mixes 14% category color with bg-1;
`--hln-v33-role-ink` mixes 72% category color with the base foreground. Text uses
role-ink, not the raw category color. Test these combinations at >=4.5:1.
Errors, warnings and success keep their independent base semantic tokens.

| Token | Purpose |
| --- | --- |
| `--hln-v33-writing/analysis/review/media` | Four theme-specific research colors |
| `--hln-v33-role-color/surface/ink` | Local role tokens, recomputed at role boundary |
| `--hln-v33-structure-surface` | Quiet navigation/toolbar surface |
| `--hln-v33-selection-surface` | Selection and hover background |
| `--hln-v33-ai-reading-surface` | Generated reading content |
| `--hln-v33-table-heading-surface` | Data header |
| `--hln-v33-text-secondary`, `--hln-v33-rule` | Base muted text and structural rule |
| `--hln-v33-axis-rule-color/grid-rule-color/vector-rule-color` | Actual-data vector marks |
| `--hln-v33-density-*` | Row, cell and section spacing |
| `--hln-v33-enter-duration/state-duration/ease` | 300ms entrance, 180ms state feedback |
| `--hln-v33-tabular-numbers` | Tabular and lining numeral features |

Components: `.hln-v33-role-surface`, `.hln-v33-ai-reading-surface`,
`.hln-v33-data-table` (numeric cells use `data-numeric=true`), `.hln-v33-figure`,
`.hln-v33-caption`, `.hln-v33-stat-row`. Data vector hooks use `data-vector-*`.
Use only source-grounded data. No decorative statistics. Letter spacing is zero.
Existing radius tokens remain authoritative; no gradients, glows or nested cards.

## Views And Motion

Digest uses full-width list and deliberate centered reading view on all sizes;
return restores filters, page, focus and scroll. Diagnostics are disclosures.
AI distinguishes task entry, conversation, skill selection and output artifacts.
Page layouts belong to plugin source, not canonical page-specific overrides.

Entrance travels 6px in 300ms; disclosure unmasks in 220ms; tabs glide in 280ms.
`data-motion-enter` marks only newly arriving messages, not reloaded history.
Spinners require actual `aria-busy=true`. All motion stops under reduced-motion.
No input-blocking delays or repeated page-wide stagger effects. Visible focus,
caret, selection and scrollbar colors follow the theme.

## Deterministic Build

Provenance schema `kalcirite-ui-overlay-provenance/v1`, version 3.3.1:
`baseSHA` hashes exact base bytes; `sourceSHA` hashes LF-normalized CSS;
`paletteSHA` hashes the parsed palette serialized with two-space JSON + LF;
`artifactSHA` hashes emitted overlay bytes. No timestamps or local paths.
The output is overlay-only, never a combined bundle. SHA-256 values are lowercase.

## Rollback

Remove the overlay load and variant attribute, or restore the two exact prior
generated artifacts together. The v3.2 theme engine and preferences need no change.
