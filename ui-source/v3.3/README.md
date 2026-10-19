# KalciriteUI v3.3: OverleafPlus

An opt-in academic workspace edition layered after the unchanged v3.2 bundle.
It retains six theme IDs, stored preferences, icons and control geometry. Each
theme receives its own four research-category colors, used in real task surfaces,
source labels, content selection and artifacts rather than decorative navigation.

Build with `node ui-source/v3.3/build.mjs`. Node built-ins only; no dependencies.
The builder reads `src/overleafplus.css`, validates `src/palettes.json`, then emits
`dist/hln-ui-system-v3.3.css` and `dist/provenance.json`. Copy both outputs exactly
to the consuming app. Load the overlay after v3.2; opt in with
`data-hln-ui-variant="overleafplus-v33"`. Keep `data-hln-ui-version="v3.2"`.

Writing, analysis, review and media use blue, teal, ochre and muted orchid. Fine
rules, tabular figures and a clear task/content hierarchy carry the academic
identity. No invented charts or statistics. Motion is bounded to meaningful view
transitions, disclosure, tabs, dialogs, new messages and busy feedback, and obeys
reduced-motion. Layouts and business behavior remain the consuming app's concern.

See [contract.md](contract.md) for tokens, build guards and rollback.
