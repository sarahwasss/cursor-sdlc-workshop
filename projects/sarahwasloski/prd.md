# Product Requirements Document (PRD)

> **Instructions:** This is your project specification. Fill in the sections below to define what you're building.

---

## Project Overview

**Project Name:** Flappy Sprint

**One-line Description:** A single-page canvas game where you tap or press Space to keep a bird aloft, dodge pipes, and beat your personal best score.

**Type:** Single-page web app (HTML, CSS, and JavaScript on a `<canvas>` — open `index.html` in a browser)

---

## Guidelines

### Keep It Small!
- Your MVP should be buildable in **10 minutes**
- Think "proof of concept" not "production ready"
- If it sounds ambitious, make it simpler
- **Use Cursor to help you plan this!**
- This exercise is about learning the git flow and understanding where Cursor's features fit into the SDLC

### Good Project Ideas

**Pong** — classic paddle-and-ball game
- _Example features:_ scoreboard, sound effects, difficulty/speed settings

**Memory Card Match** — flip cards to find matching pairs
- _Example features:_ move counter, timer, win animation/confetti

**Drawing Pad** — simple canvas you can sketch on
- _Example features:_ color picker, brush size slider, eraser tool

**Typing Speed Game** — type a passage and measure your words per minute
- _Example features:_ WPM display, accuracy tracker, difficulty levels

**Trivia Quiz** — multiple choice questions with score tracking
- _Example features:_ timer per question, category selector, results summary screen

### Bad Project Ideas (Too Big!)
- Anything with a database — tell Cursor to avoid this
- Anything requiring authentication
- Anything with multiple pages/screens
- Anything that "needs" an API

---

## Base MVP

> Build the minimal working version of your project first.

**What the MVP includes:**
- One screen with a canvas: bird falls with gravity; tap or Space to “flap” upward
- Green pipes scroll in from the right with a gap; hitting a pipe or the ground ends the run
- Live score increases for each pipe passed; **Game Over** overlay shows final score and **Retry**
- Best score persisted in the browser (`localStorage`) and shown on game over
- Start overlay (“Tap or Press Space to Start”) and basic sound toggle using built-in tones (no external assets required)

**What it does NOT include (stretch goals):**
- User accounts, server, or database
- Separate routes or multiple HTML pages
- Paid APIs or hosted backends
- The three planned features below — those come **after** the MVP feels solid

---

## Features

> Plan out the features you want to add after the MVP is working. Each feature should be in its own component file to keep things organized.

### Feature 1: Difficulty presets
- **Description:** Let the player pick Easy / Normal / Hard (e.g. pipe speed, gap size, or spawn rate) before starting a run, with values stored in small config objects so tuning is easy.
- **Files to create:** `base_mvp/js/difficulty.js` (preset constants + helper to apply settings to the game), wire-up from `index.html` or a thin `base_mvp/js/main.js` entry

### Feature 2: Session stats panel
- **Description:** Show runs played this session, highest score this session, and maybe average score — all computed in memory (reset on refresh; optional “clear stats” button).
- **Files to create:** `base_mvp/js/sessionStats.js` (track outcomes after each game over), small UI block in HTML or created from JS

### Feature 3: Visual polish pass
- **Description:** Add lightweight juice: brief screen flash or particle burst on new best score, or a simple day/night palette swap — still no image assets required if you prefer pure canvas/CSS.
- **Files to create:** `base_mvp/js/effects.js` (draw particles or handle palette), optional `base_mvp/css/theme.css` if you split styles out of `index.html`

---

## Success Criteria

- [ ] MVP runs locally
- [ ] At least one PR merged to the original repo
- [ ] Features work without breaking the base app
