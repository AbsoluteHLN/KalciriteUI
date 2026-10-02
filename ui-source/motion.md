# HLN Motion Core

HLN uses a small framework-neutral motion layer built on CSS keyframes, CSS
custom properties, and a typed DOM trigger helper in `motion.ts`. This is the
intentional animation framework for the clients: it works in React, Solid and
Electron WebViews without adding a second UI runtime or coupling the shared
system to one agent.

## Presets

- `panel`: drawer, inspector and landing-surface entrance; opacity plus a
  short vertical transform.
- `item`: staggered rows and service cards; opacity plus a small vertical
  transform.
- `pulse`: status attention only; use sparingly for an active state.
- `ambient`: decorative background movement; never use for information that
  must be read.
- `scan`: one low-opacity instrumentation sweep over a decorative backdrop;
  never attach it to a message, list row, or control.

All durations and easing values come from `tokens.css`. The trigger helper
adds `data-hln-motion-state="enter"` and a stagger index; it does not mutate
layout geometry. `prefers-reduced-motion: reduce` disables animation and
transition in both the CSS contract and the helper.

## Adoption rule

Use `data-hln-motion="panel|item|pulse|ambient|scan"` on shared or client
surfaces. A view should normally use at most one ambient layer and one scan
layer. Do not animate every row just because the motion hook is available.
Prefer transform/opacity only. Do not animate height, width, top/left, text
content, or scroll position. Control Center and AntiDispona are the reference
adopters; all vendored clients receive the same `motion.css` and `motion.ts`
through `scripts/sync-ui-system.ps1`.
