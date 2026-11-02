# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal portfolio site for DevMahlatsi — a single-page React app built with Vite, TypeScript, and Tailwind CSS v4. There is no router; the whole site is one scrolling page assembled in [src/Pages/Home.tsx](src/Pages/Home.tsx) from `<section id="...">` blocks (`home`, `about`, `skills`, `portfolio`, `process`, `contact`) that nav links scroll to.

## Commands

- `npm run dev` — start the Vite dev server (binds to all hosts, `server.host: true` in [vite.config.ts](vite.config.ts))
- `npm run build` — type-check (`tsc -b`) then production build
- `npm run lint` — run ESLint over the whole repo
- `npm run preview` — serve the production build locally

There is no test suite configured in this repo.

## Environment variables

EmailJS credentials are read via `import.meta.env` and must be set in `.env.local` (gitignored):
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

`emailjs.init()` is called once in [src/App.tsx](src/App.tsx); the contact form in [src/Components/Contact/ContactForm.tsx](src/Components/Contact/ContactForm.tsx) sends via `emailjs.sendForm`.

## Architecture notes

- **Components live under `src/Components/<Feature>/<Feature>.tsx`**, using spaced directory names (e.g. `"Navigation Bar"`, `"Design Process"`, `"Buttons/Discuss Project"`). Many features are split into a container component plus small presentational sub-components in the same folder (e.g. `NavigationBar.tsx` composes `NavBar`, `Menu`, `Logo`, `BurgerIcon`).
- **Content is data-driven, not hardcoded in JSX.** [src/Data/devmahlatsi.data.ts](src/Data/devmahlatsi.data.ts) exports arrays like `projects` and `projectTypes` that components (`Portfolio`, `ProjectCard`, `ProjectModal`, `ContactForm`'s project-type `<select>`) map over. When adding or editing a portfolio project, edit this file rather than a component.
- **Shared types live in [src/Props/devmahlatsi.props.ts](src/Props/devmahlatsi.props.ts)**, not colocated with components — e.g. `Project`, `ProjectStatus`, `ProjectCategory`, `TeamInfo`, and the `*Props` interfaces for component props.
- **Images**: static site assets referenced by root-relative path (e.g. `/kokoro-stream-home.png`) live in [public/](public/); icons/SVGs imported as modules live in [src/assets/](src/assets/). Some project screenshots are hosted on Cloudinary and referenced by full URL directly in the data file.
- **Styling** is Tailwind v4 (via `@tailwindcss/vite`, imported with `@import "tailwindcss";` in [src/index.css](src/index.css)) plus a layer of hand-written utility-ish classes in that same file (`.name-deco`, `.hero-buttons`, `.stats-header`, `.lblnEdt`, `.edtInput`, etc.) used alongside Tailwind classes in JSX. The site's accent color is `#1a73e8` on a black background.
- **"Indicators"** (`src/Components/Indicators/...`) is a grab-bag of small stat/badge components (hero stats, about stats, work availability, hire reasons, page section headings/banners) split by where they're used rather than by type.
- `src/utils/scrollToSection.ts` backs the nav bar's in-page scrolling; the `bannerVisible` state in `Home.tsx` (persisted via `localStorage.bannerDismissed`) controls top padding to account for the under-construction banner + nav bar stacking.
