# Brick Breaker — PRD

Web-only, ultra-simple Brick Breaker clone: single canvas, vanilla HTML/CSS/JS, no build step.

## Implementation appendix (agent-facing)

These values remove guesswork when implementing.

| Item | Specification |
|------|----------------|
| **Canvas size** | `480` × `360` pixels (`width` / `height` attributes on `<canvas>`). |
| **Ball** | Radius `r = 6`. Constant speed magnitude: `BALL_SPEED = 5` px/frame (tuned so one step does not tunnel past thin bricks). |
| **Launch velocity** | On **Start**, place ball centered above the paddle; set `vx = 2`, `vy = -BALL_SPEED` (slight horizontal component avoids endless vertical-only motion). Normalize to `BALL_SPEED` if you prefer exact magnitude. |
| **Keyboard focus** | Set `tabindex="0"` on the canvas; call `canvas.focus()` after load (and optionally on first click). If keys do not fire, the player can click the canvas. |
| **Brick collision** | Circle vs axis-aligned rectangle: closest-point test; resolve penetration and flip `vx` or `vy` on the axis of **minimum overlap** (or push along normal from closest point). Do not only invert `vy` — side hits must flip `vx`. |
| **Accessibility** | `aria-label` on the canvas, e.g. `Brick Breaker game`. |

## Original requirements summary

- Open `index.html` directly; no bundler.
- `requestAnimationFrame` game loop (~60 FPS).
- States: `ready`, `playing`, `won`, `lost`.
- Controls: Left/Right arrows and A/D; Space to start/restart; optional mouse moves paddle (`clientX` mapped with `getBoundingClientRect()`).
- Bricks: e.g. 5×3 grid; score = bricks destroyed; win when all cleared; lose when ball falls below the playfield.

## Out of scope

Sound, multiple levels, power-ups, multiple balls, touch, mobile polish.
