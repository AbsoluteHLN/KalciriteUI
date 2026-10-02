# ProjectHLN UI System

Canonical, framework-neutral visual foundation for every ProjectHLN client.
It ships one CSS token architecture, six design languages, a maintainable
motion core, custom scrollbars, and a reusable component grammar.

## Core themes

Set `data-hln-theme` (Solid) or `data-theme` (React) on the host root:

1. `flat-design` - deterministic flat interface, aliased as `flat-glass`
2. `aurora` - layered violet and cyan aurora surfaces
3. `liquid-glass` - refractive depth, specular highlights, high blur
4. `organic-biophilic` - moss and emerald organic panels
5. `arknights` - Rhodes Island tactical terminal language
6. `endfield` - Talos-II industrial engineering navigation

Legacy themes (`neumorphism`, `modern-dark`, `swiss`, `oled`, `ai-native`)
remain as compatibility aliases only and are not part of the supported set.

## Typography

The system requires four named families and graceful fallbacks:

- `Book Antiqua` - classic Latin display and editorial serif
- `Berlin Sans BF` - bold geometric Latin sans
- `方正小标宋简体` (`FZXiaoBiaoSong-B05S`) - Chinese title serif
- `仿宋` (`FangSong` / `STFangsong`) - Chinese body and document font

Hosts consume `--hln-ui-font-display`, `--hln-ui-font-body`,
`--hln-ui-font-form`, `--hln-ui-font-technical`, plus the semantic
`--hln-ui-font-classic`, `--hln-ui-font-fangsong`,
`--hln-ui-font-berlin`, and `--hln-ui-font-xiaobiaosong` tokens.

## Files

| File | Responsibility |
| --- | --- |
| `tokens.css` | Global tokens: typography, color, radius, shadow, spacing, motion |
| `themes.css` | Canonical theme blocks and legacy aliases |
| `surfaces.css` | Root, glass, quiet, scrollbar, topbar, drawer, resize handles |
| `components.css` | Shared controls, fields, landing and shell components |
| `composer.css` | AntiDispona composer contract |
| `motion.css` | One-shot panel/item/control motion and spring variants |
| `motion.ts` | Framework-light motion API and FLIP helper |
| `icons.ts` | Shared icon helpers |
| `contract.md` | DOM, state, layout, typography, and motion contract |
| `hln-ui-system.css` | Generated self-contained distribution, do not edit |

## Usage

```html
<link rel="stylesheet" href="hln-ui-system.css">
<div data-hln-ui-root data-hln-theme="aurora">
  <aside data-hln-ui-surface="glass" data-hln-ui-scroll>
    <!-- panel content -->
  </aside>
  <button data-hln-ui-control data-hln-motion="control">Action</button>
</div>
```

```ts
import { playHlnMotion } from "./motion"

playHlnMotion(panelRef.current, "panel", "enter", "spring")
playHlnMotion(listRef.current, "item", "enter")
```

## Preview application

`E:\Projects\KalciriteUI\artist-Paralos-main\` is the visual QA and skin workbench. It
renders every theme, the font palette, controls, scrollbars, motion presets,
and a character skin demonstration built on the same canonical CSS.

## Synchronization

Run `scripts/build-ui-system-bundle.ps1` after editing source CSS, then
`scripts/sync-ui-system.ps1` to vendor byte-identical copies into registered
hosts.

## Accessibility

- All radii remain at or below 8px unless the theme contract says otherwise.
- Every transition stops under `prefers-reduced-motion: reduce`.
- Component motion is opacity/transform-only and one-shot. Opt-in background
  presets may loop for ambient depth, and are disabled under reduced motion.
- Focus rings and contrast tokens are part of the shared contract.
