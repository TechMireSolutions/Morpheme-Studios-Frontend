# Morpheme Studios — v2

A redesigned front end for **morphemestudios.com**, rebuilt as a modern, editorial,
photography-led architecture studio site — inspired by Ayers Saint Gross, Woodcliffe,
Minale + Mann and Turner Works.

**Stack:** React 18 · React Router 6 · GSAP 3 (+ ScrollTrigger) · Vite. Frontend only.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## What's inside

**Pages** (`src/pages/`)
- `Home` — full-screen hero with parallax, marquee, intro statement, featured projects,
  hover-preview services list, animated stat counters, journal teaser
- `Studio` — philosophy, 4-step approach, leadership grid, three offices
- `Projects` — category filtering, responsive project grid
- `ProjectDetail` — cinematic hero, fact sidebar, parallax gallery, next-project link
- `Journal` — lead article + grid
- `Careers` — values, open roles
- `Contact` — working (frontend-only) form + studio details
- `NotFound` — 404

**Components** (`src/components/`) — `Navbar` (scroll hide/reveal + overlay menu),
`Footer`, `Cursor` (custom trailing cursor), `Loader` (intro counter), `Marquee`,
`Reveal` / `AnimatedHeading` (GSAP scroll entrances), `Parallax`, `ProjectCard`.

**Content** (`src/data/`) — projects, team, services, journal and a single
`images.js` map of curated imagery. All real Morpheme Studios content
(projects, offices, leadership) plus placeholder photography.

**Styles** (`src/styles/`) — `global.css` (design tokens + base),
`components.css`, `pages.css`.

## Design system

- **Palette:** warm bone `#f4f1ea`, near-black ink `#16150f`, clay accent `#9c5a3c`,
  dark sections `#1a1a18`
- **Type:** Fraunces (serif display) + Inter (sans UI/body)
- Custom cursor and scroll-smoothing are disabled on touch / reduced-motion.

## Notes

- The contact form is frontend-only (no backend wired up); submit shows a success state.
- Imagery uses Unsplash URLs as placeholders — swap the IDs in `src/data/images.js`
  for real project photography.
- Social/legal links in the footer are placeholders (`#`).
