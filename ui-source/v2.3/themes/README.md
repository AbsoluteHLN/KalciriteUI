# ui-system/v2/themes

The nine canonical theme blocks live in `../src/themes.css` (source) and
`../dist/themes.css` (generated). This folder is reserved for optional
per-theme override files that a host mounts after the base bundle if it needs
a bespoke derivation. New canonical themes should be added to `../src/themes.css`
so they are included in the `hln-ui-system-v2.css` bundle.