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

| Command                | What it does                        |
| ---------------------- | ----------------------------------- |
| `npm run dev`          | Development server                  |
| `npm run build`        | Production build (what Vercel runs) |
| `npm run check`        | ESLint + type checking              |
| `npm run format:write` | Formats the code with Prettier      |

## Where to edit the content

All content lives in `src/content/`:

| What                                                          | File                                   |
| ------------------------------------------------------------- | -------------------------------------- |
| Texts in each language (titles, descriptions, resume items)   | `src/content/locales/{en,fr,ca,es}.ts` |
| Shared data: email, LinkedIn, dates, grades, tools, languages | `src/content/profile.ts`               |
| Shape of the content                                          | `src/content/types.ts`                 |

If a language is missing a text, `npm run check` (and the build) will point it out.

### Adding photos of Júlia

There are three spots for a photo of Júlia, each set independently in `src/content/profile.ts`:

| Spot                                      | Field         | Suggested size (portrait) |
| ----------------------------------------- | ------------- | ------------------------- |
| Home page, the big portrait               | `photo`       | about 1200 × 1500 px      |
| Home page, the small photo overlapping it | `photoInset`  | about 800 × 1000 px       |
| Resume page, next to the summary          | `photoResume` | about 900 × 1125 px       |

To add one: copy the file to `public/images/` (for example `public/images/julia.jpg`), then set the matching field to that path, e.g. `photo: "/images/julia.jpg"`.

Until a field is set, that spot shows a placeholder instead: an illustration of Saturn for `photo`, and a plain camera icon for `photoInset` and `photoResume`.

### Adding the resume PDF

1. Copy the PDF to `public/julia-soler-cv.pdf`.
2. In `src/content/profile.ts`, set `resumePdf: "/julia-soler-cv.pdf"`. A download button appears on the resume page.

### Project photos, key numbers, results and outcome

Each project page can show real photos and figures instead of (or alongside) its line drawing.
The image paths are language-independent (`src/content/profile.ts`); their alt text and
captions are per language (`src/content/locales/*.ts`, in each project's entry under `projects`):

| What                                                  | Path field (`profile.ts`)     | Text fields (`locales/*.ts`) |
| ------------------------------------------------------ | ------------------------------ | ------------------------------ |
| Hero photo, at the top of the page and on its card      | `image`                       | `coverAlt`                    |
| "Closed/open" or "before/after" pair, under "What I did" | `designImages: [a, b]`       | `designCaption`               |
| Results gallery (as many as you like)                   | `resultImages: [a, b, …]`    | `results: [{ alt, caption }, …]` (same order) |
| Photo in the Outcome block (e.g. a poster, an event)    | `outcomePhoto`                | `outcomePhotoAlt`, `outcomeCaption` |
| Team or event photo                                     | `teamPhoto`                   | `teamPhotoAlt`, `teamCaption`  |

Every project also needs, per language, a `stats` array (3–4 headline figures shown as a row,
e.g. `{ value: "140 N", label: "Load held in traction testing" }`) and an `outcome` paragraph
(what came of the work: grade, competition, conference, paper…). `outcomeLinks` adds buttons
to a PDF, poster or paper, e.g. `{ label: "View poster", href: "/images/projects/plasma/poster.jpg" }`.

Without `image`, the SVG illustration is shown instead; without `designImages`/`resultImages`,
those sections are simply skipped.

### Adding a new project

1. Add its id to `ProjectSlug` in `src/content/types.ts`.
2. Add its data to `projects` in `src/content/profile.ts` (the order there is the order on the site).
3. Add its texts to `projects` in the four files in `src/content/locales/`. TypeScript will list
   every field `ProjectCopy` requires.

## Publications & presentations

Listed on the resume page from `publications` in each `src/content/locales/*.ts` file — a plain
list of `{ text, href? }`, with "Soler i Pla" bolded automatically wherever it appears.

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

The site's own domain (`https://www.juliasoler.net`) is already hardcoded as the fallback in
`src/lib/site.ts`, used for canonical links, the sitemap and the social preview image on
production deploys. If the domain ever changes, either edit that file or set the environment
variable `NEXT_PUBLIC_SITE_URL` in Vercel (Settings → Environment Variables), which always
takes priority.
