# ui-system/v2.5/themes

The nine canonical v2.5 theme blocks live in `../src/themes.css` (source) and
`../dist/themes.css` (generated). This folder is reserved for optional
per-theme override files that a host mounts after the base bundle if it needs
a bespoke derivation. New canonical themes should be added to
`../src/themes.css` so they are included in the `hln-ui-system-v2.5.css` bundle.

The catalog is intentionally independent from the v2 and v2.3 theme registries.
The v2.5 additions are `rhodes-paper`, `lungmen-night`, and `kazdel-ink`.
