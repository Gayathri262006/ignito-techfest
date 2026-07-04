# IGNITO — Techfest Website 🚀

A responsive, animated techfest landing site built for **IGNITO**, a fictional
space-themed national student techfest. Built with React 19, Vite, Tailwind CSS v4,
and Framer Motion.

## Design concept

IGNITO is framed as a **launch sequence**, not a festival. The hero features an
animated orbital system (rotating rings + glowing planet core) and a live
countdown to "ignition." Recurring HUD corner-bracket accents and a monospace
utility font (JetBrains Mono) reinforce a mission-control aesthetic across every
section — event cards read like a "mission log," competitions are "launch pads,"
and the schedule is a "flight plan."

**Palette:** void black (`#05060B`), nebula violet (`#7C3AED`), ignite ember
(`#FF5A36`), starlight cyan (`#38BDF8`), fog grey (`#A5A3C2`).
**Type:** Orbitron (display), Space Grotesk (body), JetBrains Mono (data/labels).

## Sections

- **Home** — animated starfield, orbiting planet signature, live countdown timer
- **Mission** — fest story + HUD-style stat readouts
- **Events** — filterable "mission log" card grid (dummy data)
- **Competitions** — four flagship "launch pad" competitions with prize pools
- **Schedule** — interactive three-day flight-plan timeline
- **Sponsors** — infinite-scroll marquee
- **FAQ** — accordion
- **Contact** — ground-control form + details

All content in `src/data/content.js` is placeholder/dummy data — swap it for
real event, competition, and contact details.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build to /dist
npm run preview    # preview the production build
```

## Tech stack

- **React 19** + **Vite** — app shell & tooling
- **Tailwind CSS v4** (via `@tailwindcss/vite`) — styling, theme tokens defined
  in `src/index.css` under `@theme`
- **Framer Motion** — page-load and scroll-triggered animations
- **lucide-react** — icon set

## Project structure

```
src/
  components/     All UI sections (Navbar, Hero, Events, Competitions, ...)
  data/           Dummy content (content.js)
  hooks/          useReveal.js — scroll-reveal intersection observer hook
  index.css       Tailwind import + design tokens + custom keyframes
  App.jsx         Page composition
  main.jsx        Entry point
```

## Notes on responsiveness & accessibility

- Fully responsive from 360px mobile up to wide desktop; the hero's orbit
  animation is hidden on small screens to keep focus on the headline and CTA.
- Respects `prefers-reduced-motion` (starfield freezes, CSS animations shortened).
- Keyboard-focusable nav, buttons, and form fields with visible focus states.
