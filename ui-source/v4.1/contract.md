# ProjectHLN UI System v4.1 Contract

**Composite — v3.2 skeleton + v3.3 overlay contract + partial v4 Folio absorption.**
Shipped as an opt-in overlay in `ui-source/v4.1/`.

## 1. Activation

- Host writes `data-hln-ui-variant="hln-v41"` (or `overleafplus-v41` for the
  OverleafPlus binding) on its UI root. **Without the attribute this layer
  has zero effect** — that is the precondition for coexisting with the host's
  frozen UI contracts.
- May be stacked on top of v3.2 + v3.3 (both canonical layers stay untouched).

## 2. What a host may rely on

- Component classes: `.hln-v41-wash`, `.hln-v41-wash-bar`, `.hln-v41-soft`,
  `.hln-v41-soft-md`, `.hln-v41-soft-lg`, `.hln-v41-hairline`,
  `.hln-v41-enter`, `.hln-v41-stagger`, `.hln-v41-pigment-alt`.
- Tokens: `--hln-v41-radius-soft{,-md,-lg}`, `--hln-ui-hairline`,
  `--hln-ui-ease-spring`, `--hln-ui-motion-stagger`,
  `--hln-v41-type-*`, `--hln-v41-leading-*`, `--hln-v41-tracking-*`,
  `--hln-v41-pigment-{primary,secondary}`, `--hln-ui-on-accent`, `--hln-ui-warning`.
- Typography application: root body size 15px / leading 1.65 / tabular-nums;
  controls 13px / leading 1.4 / tracking 0.02em.

## 3. What this layer never touches

- The host's page-header typography (OverleafPlus freezes title size/leading/
  gap via its panel-header contract).
- The host's theme ids and canvas palette (no new theme ids, no light-first).
- Control shapes the host has frozen (OverleafPlus button contract: square
  buttons, uniform borders, primary without underline).

## 4. Known pitfalls encoded in tokens

See README「首批实测踩坑」— soft radii must not reference host canonical
radius tokens (some hosts use 0px), hairline references need fallbacks,
`--hln-ui-font-display` must not drive UI/body text, and no `:lang(zh)`
global font override.
