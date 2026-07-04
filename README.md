# IGNITO — Techfest Website 🚀

A responsive, animated techfest landing site built for **IGNITO**, a fictional
space-themed national student techfest. 

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
