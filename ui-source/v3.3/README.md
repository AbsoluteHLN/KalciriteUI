# KalciriteUI v3.3 OverleafPlus Additive Edition

This is an opt-in CSS overlay for OverleafPlus, layered after the canonical
v3.2 stylesheet. It does not bundle or fork v3.2, add theme IDs, ship a runtime,
or modify theme bootstrap behavior.

## Build

Run `node ui-source/v3.3/build.mjs` from the KalciriteUI repository. The
dependency-free Node script reads the original
`ui-source/v3.2/dist/hln-ui-system-v3.2.css` artifact and hashes it, then writes
the overlay-only `dist/hln-ui-system-v3.3.css` and `dist/provenance.json`.
Provenance uses SHA-256 over the original base bytes, source bytes, and emitted
artifact bytes. Output contains no timestamps or machine-specific paths.

The parent integration copies the generated CSS artifact exactly; no
OverleafPlus CSS copy, manifest, runtime, or bootstrap file is owned here.

## Loading and opt-in

Load v3.2 first and this overlay second. Add
`data-hln-ui-variant="overleafplus-v33"` only to the existing UI subtree that
should receive the compact academic presentation. With the attribute absent,
this overlay has no visible effect on existing pages. Keep the existing
`data-hln-ui-version="v3.2"` and theme selection intact.

All six v3.2 themes remain compatible. Navigation, icons, buttons and fields
inherit v3.2 geometry, theme colors and states without global control overrides.
Muted research accents identify source marks, real feed-coverage bars and small
research-task icons. Neutral open rows and skill controls remain consistent
with v3.2. A faint cool structural surface distinguishes navigation and toolbars.
Labels keep the base foreground contrast.
No theme definitions are replaced.

The academic role vocabulary adds analysis, writing, review and media accents.
Controls retain the v3.2 language; academic expression comes from fine rules,
source-grounded data marks, tabular numerals and reading hierarchy.
Content enters with bounded staggering; tab indicators slide, panels disclose,
dialogs fade and newly arriving messages enter once. Busy indicators animate
only while an operation is active. The digest uses an index/reader composition,
an understated reading reveal and progressive provenance disclosure. On phones,
the selected article replaces the index and returns to its previous position.
Reduced-motion disables all overlay motion.
