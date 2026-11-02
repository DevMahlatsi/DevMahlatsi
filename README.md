# DevMahlatsi

Personal portfolio site for **DevMahlatsi** — a single-page React app built with Vite, TypeScript, and Tailwind CSS v4.

There's no router. The whole site is one scrolling page assembled in [`src/Pages/Home.tsx`](src/Pages/Home.tsx) from `<section id="...">` blocks (`home`, `about`, `skills`, `portfolio`, `process`, `contact`) that the nav links scroll to.

## Stack

- **React 19** + **TypeScript**
- **Vite 7**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **EmailJS** for the contact form
- **Vercel Analytics**

## Getting started

```bash
npm install
npm run dev
```

The dev server binds to all hosts (`server.host: true` in [`vite.config.ts`](vite.config.ts)), so it's reachable on your LAN too.

### Environment variables

The contact form sends mail via EmailJS. Create a `.env.local` (gitignored) with:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

## Scripts

| Command             | Description                                   |
| -------------------- | ---------------------------------------------- |
| `npm run dev`        | Start the Vite dev server                      |
| `npm run build`      | Type-check (`tsc -b`) then production build    |
| `npm run lint`       | Run ESLint over the whole repo                  |
| `npm run preview`    | Serve the production build locally              |

There's no test suite configured in this repo.

## Project structure

- **`src/Components/<Feature>/<Feature>.tsx`** — components grouped by feature, some split into a container plus small presentational sub-components (e.g. `NavigationBar.tsx` composes `NavBar`, `Menu`, `Logo`, `BurgerIcon`).
- **`src/Data/devmahlatsi.data.ts`** — content lives here, not hardcoded in JSX: portfolio projects, project types, skills, hire reasons, tools/tech list, nav menu.
- **`src/Props/devmahlatsi.props.ts`** — shared TypeScript types (`Project`, `ProjectStatus`, `ProjectCategory`, `TeamInfo`, component prop interfaces).
- **`public/`** — static assets referenced by root-relative path; **`src/assets/`** — icons/SVGs imported as modules. Some project screenshots are hosted on Cloudinary.
- **`src/index.css`** — Tailwind v4 import plus a layer of hand-written utility classes (`.name-deco`, `.hero-buttons`, `.stats-header`, etc.) used alongside Tailwind classes in JSX.

Adding or editing a portfolio project? Edit [`src/Data/devmahlatsi.data.ts`](src/Data/devmahlatsi.data.ts) rather than a component — it's the single source of truth for what shows up on the live site.

## Styling

Accent color is `#1a73e8` on a black background. Tailwind v4 utilities are the default; reach for the hand-written classes in `src/index.css` only where Tailwind alone doesn't cover it.
