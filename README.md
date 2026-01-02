
# MacBook Pro (M4) — Mock Landing Page

A lightweight mock landing page showcasing a MacBook Pro with the hypothetical M4 chip. Built with React, Vite, and Three.js to demonstrate a responsive product viewer, animated sections, and simple controls for switching models and colors.

**Getting Started**

- Install dependencies: `npm install`
- Run development server: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`

**Highlights / Features**

- Interactive 3D product viewer using `@react-three/fiber` and `@react-three/drei`.
- Model switching between 14" and 16" variants, color and scale controls.
- Scroll-triggered animations with `gsap` and `@gsap/react`.
- Modular React components for Hero, Showcase, Performance, Features, Highlights, Navbar, and Footer.

**Project Structure (important files)**

- `index.html` — App entry.
- `src/main.jsx` — React bootstrap.
- `src/App.jsx` — Page layout + component imports.
- `src/components/` — UI and Three.js components (see `ProductViewer.jsx`, `three/ModelSwitcher.jsx`, models).
- `src/store/index.js` — Zustand store for color/scale/texture state.
- `public/` — Static assets (models, videos, fonts).

**Dependencies**

- React, Vite
- `three`, `@react-three/fiber`, `@react-three/drei`
- `gsap`, `@gsap/react`
- `zustand`, `clsx`, `react-responsive`

