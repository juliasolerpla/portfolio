import { env } from "~/env";

/** Absolute URL of the site, for canonical links, the sitemap and social previews. */
export const siteUrl =
  env.NEXT_PUBLIC_SITE_URL ??
  (env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
