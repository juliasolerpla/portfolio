import { env } from "~/env";

/**
 * The site's own domain, once it has one. Takes priority over Vercel's own `*.vercel.app`
 * address below, so canonical links, the sitemap and the social preview image point at the
 * real domain even if `NEXT_PUBLIC_SITE_URL` hasn't been set in the Vercel project yet.
 */
const productionUrl = "https://www.juliasoler.net";

/** Absolute URL of the site, for canonical links, the sitemap and social previews. */
export const siteUrl =
  env.NEXT_PUBLIC_SITE_URL ??
  (env.VERCEL_ENV === "production"
    ? productionUrl
    : env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000");
