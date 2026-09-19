# Portfolio · Júlia Soler i Pla

Personal website (portfolio and resume) in English, French, Catalan and Spanish.

- **Stack:** [T3](https://create.t3.gg/) with Tailwind only: Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4. No database or backend: every page is statically generated.
- **Hosting:** Vercel.

## Running it locally

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>: it redirects to your browser's language.

| Command                | What it does                           |
| ---------------------- | -------------------------------------- |
| `npm run dev`          | Development server                     |
| `npm run build`        | Production build (what Vercel runs)    |
| `npm run check`        | ESLint + type checking                 |
| `npm run format:write` | Formats the code with Prettier         |

## Where to edit the content

All content lives in `src/content/`:

| What                                                        | File                                   |
| ----------------------------------------------------------- | -------------------------------------- |
| Texts in each language (titles, descriptions, resume items) | `src/content/locales/{en,fr,ca,es}.ts` |
| Shared data: email, LinkedIn, dates, grades, tools, languages | `src/content/profile.ts`             |
| Shape of the content                                        | `src/content/types.ts`                 |

If a language is missing a text, `npm run check` (and the build) will point it out.

### Adding the home-page photo

1. Copy the photo to `public/images/julia.jpg` (portrait orientation, about 1200 × 1500 px).
2. In `src/content/profile.ts`, change `photo: null` to `photo: "/images/julia.jpg"`.

Until there is a photo, an illustration of Saturn is shown instead.

### Adding the resume PDF

1. Copy the PDF to `public/julia-soler-cv.pdf`.
2. In `src/content/profile.ts`, set `resumePdf: "/julia-soler-cv.pdf"`. A download button appears on the resume page.

### Project photos

Each project has a technical line drawing made in SVG (`src/components/illustrations/`). To use a photo instead:

1. Copy it to `public/images/projects/`, for example `cubesat-hdrm.jpg`.
2. Add `image: "/images/projects/cubesat-hdrm.jpg"` to that project in `src/content/profile.ts`.

### Adding a new project

1. Add its id to `ProjectSlug` in `src/content/types.ts`.
2. Add its data to `projects` in `src/content/profile.ts` (the order there is the order on the site).
3. Add its texts to `projects` in the four files in `src/content/locales/`.

## Languages

- Each language has its own URL: `/en`, `/fr`, `/ca`, `/es`.
- `src/proxy.ts` sends visitors who open `/` to the language they picked before in the switcher (`NEXT_LOCALE` cookie) or, failing that, to their browser's language. If it's none of the four, they get English (`defaultLocale` in `src/i18n/config.ts`).
- Every page lists its versions in the other languages (`hreflang`), and there is a `sitemap.xml` and a `robots.txt`, so search engines find them all.

## Structure

```
src/
  app/[locale]/     pages: home, resume, projects, projects/[slug] and the social preview image
  components/       header, language switcher, carousel, illustrations…
  content/          all texts and data
  i18n/             languages, routes and date formatting
  proxy.ts          redirects each visitor to their language
```

## Deploying to Vercel

1. On [vercel.com](https://vercel.com), choose **Add New… → Project** and import this GitHub repository.
2. Vercel detects Next.js on its own; no settings need changing. Click **Deploy**.
3. Every `git push` to `main` publishes the site again.

With a custom domain (Settings → Domains), also add the environment variable `NEXT_PUBLIC_SITE_URL` with the full address (for example `https://juliasoler.com`) under Settings → Environment Variables, so canonical links, the sitemap and the social preview image use that domain.
