# Fabio Guieiro — Portfolio

Personal portfolio of a frontend developer: a bilingual, statically rendered
site with a project showcase and an interactive career timeline.

**Live:** [fabioguieiro.vercel.app](https://fabioguieiro.vercel.app)

![Portfolio home page](docs/preview.webp)

## Features

- **Two languages, real routing** — `/en` and `/pt` are separate routes handled
  by `next-intl` middleware. Switching languages keeps you on the page you were
  reading, and every page ships its own localized `<title>`, description and
  `hreflang` tags.
- **Dark mode that sticks** — the choice is stored in `localStorage` and applied
  by an inline script before the first paint, so a reload never flashes the
  wrong theme.
- **Fully static** — all four routes (`/en`, `/pt`, `/en/career`, `/pt/career`)
  are prerendered at build time.
- **Interactive career timeline** — pick a company to see the role, the
  achievements and the stack used there.
- **Responsive** — a slide-in side menu on mobile, a full navbar from `md` up.

## Stack

| | |
|---|---|
| Framework | [Next.js 14](https://nextjs.org) (App Router) |
| Language | TypeScript (strict) |
| Styling | [Tailwind CSS](https://tailwindcss.com) |
| i18n | [next-intl](https://next-intl-docs.vercel.app) |
| Hosting | [Vercel](https://vercel.com) |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you will be redirected to
`/en`, the default locale.

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build (prerenders every locale) |
| `npm start` | Serves the production build |
| `npm run lint` | ESLint via `next lint` |

### Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | No | Absolute base for Open Graph and canonical URLs. On Vercel this falls back to `VERCEL_PROJECT_PRODUCTION_URL` automatically, so it is only needed when hosting elsewhere. |

## Project structure

```
src/
├── app/
│   └── [locale]/            # locale-segmented routes
│       ├── layout.tsx       # metadata, static params, theme script, providers
│       ├── page.tsx         # home: banner + projects + contacts
│       └── career/          # career timeline (its own layout for metadata)
├── components/
│   ├── icons/               # inline SVG icons (UI + tech stack badges)
│   ├── images/              # next/image wrappers for the static assets
│   └── ...                  # Navbar, SideMenu, Timeline, Card, Work, Footer
├── contexts/
│   └── ThemeContext.tsx     # dark mode state + persistence
├── hooks/
│   └── useChangeLanguage.ts # swaps the locale segment of the current path
├── config.ts                # supported locales, storage keys
├── i18n.ts                  # next-intl request config
└── middleware.ts            # locale detection and redirects

messages/                    # en.json / pt.json translation catalogs
public/                      # static assets (WebP images, CV)
```

## Adding a language

1. Add the code to `locales` in [`src/config.ts`](src/config.ts).
2. Create `messages/<code>.json` mirroring the keys in `messages/en.json`.
3. Add the code to the `matcher` regex in [`src/middleware.ts`](src/middleware.ts).

`generateStaticParams` picks the new locale up automatically, so its pages are
prerendered on the next build.

## Deploy

The project is deployed on Vercel from the `main` branch. Any Node host works —
`npm run build` followed by `npm start`.

## License

The code is free to learn from. The written content, CV and photographs are
personal and not licensed for reuse.
