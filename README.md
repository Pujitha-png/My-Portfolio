# Pujita Nagalakshmi Kotha — Portfolio

A fully responsive personal portfolio built from scratch using React + Vite + Tailwind CSS, with Framer Motion animations and parallax effects.

## Tech Stack

- React (Vite)
- Tailwind CSS
- Framer Motion
- react-scroll-parallax
- react-scroll
- react-icons

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```text
src/
  components/
    Navbar.jsx
    HeroSection.jsx
    AboutSection.jsx
    SkillsSection.jsx
    ProjectsSection.jsx
    ProfilesSection.jsx
    ContactSection.jsx
    Footer.jsx
    SectionHeading.jsx
  data/
    content.js
  App.jsx
  main.jsx
  index.css
```

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import the GitHub repository.
4. Keep defaults:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.

## Suggested Commit Checkpoints by Phase

### Phase 1 — Scaffold and setup

- `chore: scaffold React Vite app and install core dependencies`
- `chore: configure Tailwind and global typography`

### Phase 2 — Core sections and content

- `feat: add modular portfolio sections and improved content`
- `feat: implement responsive sticky navbar with smooth scrolling`

### Phase 3 — Animation and polish

- `feat: add framer-motion reveals and hover transitions`
- `feat: add hero parallax and premium visual polish`

### Phase 4 — QA and release readiness

- `docs: add README with setup and Vercel deployment steps`
- `chore: run lint/build and finalize production-ready portfolio`
