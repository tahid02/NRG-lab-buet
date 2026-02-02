# NGR BUET Lab – Frontend

A Vite + React + TypeScript site for the Nanocomposite Research Group (NRG) at BUET. It uses Tailwind CSS, Radix UI primitives, Framer Motion, React Router, and Three.js (via @react-three/fiber and drei) for the interactive 3D hero.

## Overview

- Framework: React 18 with TypeScript and Vite
- Styling: Tailwind CSS with design tokens (CSS variables) and tailwindcss-animate
- UI primitives: Radix UI-based components under src/components/ui
- Routing: React Router (file alias "@/")
- Animations: Framer Motion for section transitions
- 3D: Three.js via @react-three/fiber and @react-three/drei for the Hero section buckyball

## Prerequisites

- Node.js 18+ (Vite 5 requires Node 18 or newer)
- npm (or another Node package manager)

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open http://localhost:5173

4. Lint the project:

```bash
npm run lint
```

5. Build for production:

```bash
npm run build
npm run preview
```

## Scripts

- dev: Vite dev server
- build: Production build with Vite
- preview: Serve the built assets locally
- lint: ESLint for .ts/.tsx

See [package.json](/package.json) for script definitions and dependencies.

## Project Structure

- Entry HTML: [index.html](/index.html)
- App bootstrap: [main.tsx](/src/main.tsx)
- Router and layout: [App.tsx](/src/App.tsx)
- Global styles and tokens: [index.css](/src/index.css)
- Tailwind config: [tailwind.config.js](/tailwind.config.js)
- Vite alias "@": [vite.config.ts](/vite.config.ts)
- Utilities (alias and URL mapping): [utils.ts](/src/utils.ts)

Pages (React Router):

- Home: [Home.tsx](/src/pages/Home.tsx)
- Research: [Research.tsx](/src/pages/Research.tsx)
- Team: [Team.tsx](/src/pages/Team.tsx)
- Publications: [Publications.tsx](/src/pages/Publications.tsx)
- News: [News.tsx](/src/pages/News.tsx)

Shared components:

- Navbar: [Navbar.tsx](/src/components/nrg/Navbar.tsx)
- Footer: [Footer.tsx](/src/components/nrg/Footer.tsx)
- Hero with 3D: [HeroSection.tsx](/src/components/nrg/HeroSection.tsx) + [BuckyballScene.jsx](/src/components/nrg/BuckyballScene.jsx)
- Other sections: Mission, ResearchZigZag, NewsSection, ImpactSection under src/components/nrg
- UI kit (Radix-based): src/components/ui (button, input, dialog, sheet, checkbox, command, etc.)

## How To Update Content Quickly

### Navigation and Links

- Routes are defined in [App.tsx](/src/App.tsx).
- Navbar and Footer links use createPageUrl from [utils.ts](/src/utils.ts).
- To add a new page:
  - Create your page component in src/pages (e.g., src/pages/Facilities.tsx).
  - Register the route in App.tsx: add `<Route path="/facilities" element={<Facilities />} />`.
  - Map the friendly name in createPageUrl: add `'Facilities': '/facilities'`.
  - Add the link in [Navbar.tsx](/src/components/nrg/Navbar.tsx) and/or [Footer.tsx](/src/components/nrg/Footer.tsx) as needed.

### Home Page Sections

- Hero: headline and subtext in [HeroSection.tsx](/src/components/nrg/HeroSection.tsx).
- Mission: copy in [MissionSection.tsx](/src/components/nrg/MissionSection.tsx).
- Research highlights: items in [ResearchZigZag.tsx](/src/components/nrg/ResearchZigZag.tsx).
- News previews: items in [NewsSection.tsx](/src/components/nrg/NewsSection.tsx).
- Impact stats: content in [ImpactSection.tsx](/src/components/nrg/ImpactSection.tsx).

### Research Page

- Edit researchAreas array in [Research.tsx](/src/pages/Research.tsx) to change icons, titles, descriptions, and images.

### Team Page

- Update PI details and teamMembers array in [Team.tsx](/src/pages/Team.tsx).

### Publications Page

- Update or connect data sources in [Publications.tsx](/src/pages/Publications.tsx). Filters and UI components live in src/components/ui.

### News Page

- Modify newsItems array in [News.tsx](/src/pages/News.tsx) for date, category, title, summary, and image.

## 3D Hero (Buckyball)

- Component: [BuckyballScene.jsx](/src/components/nrg/BuckyballScene.jsx) renders a C60-like structure using atoms and bonds.
- It adapts group scale on window resize:
  - Mobile (<640px): scale ≈ 1.1
  - Tablet (<1024px): scale ≈ 1.0
  - Desktop: scale ≈ 0.9
- To tweak responsiveness, adjust the thresholds and scale values in the resize handler inside BuckyballScene.
- The hero imports it here: [HeroSection.tsx](/src/components/nrg/HeroSection.tsx) and sets the canvas container height via Tailwind classes.

## Styling and UI

- Tailwind is configured in [tailwind.config.js](/tailwind.config.js) and design tokens live in [index.css](/src/index.css).
- Prefer utility classes and the existing UI primitives under src/components/ui for consistency (inputs, buttons, dialogs, sheets, etc.).
- House colors commonly used in hero/brand sections:
  - Primary maroon: `#630e1d`
  - Accent teal: `#00897b`
    Use Tailwind classes or inline styles consistently, following current patterns.

## Aliases and Imports

- Use `@/` for absolute imports within src, configured in [vite.config.ts](/vite.config.ts) and [tsconfig.json](/tsconfig.json).

## Deployment

- Build locally: `npm run build`
- Preview local build: `npm run preview`
- Host the `dist/` output on any static hosting (Netlify:https://nrg-lab-buet.netlify.app/, Vercel, GitHub Pages, etc.). Ensure server serves SPA routes to index.html.

## Maintenance Tips

- Keep dependencies up to date (React, Vite, Tailwind, Radix UI, Framer Motion, three.js).
- Run `npm run lint` before pushing changes.
- When adding new pages, update routes, navigation links, and utils mapping together to avoid broken links.
