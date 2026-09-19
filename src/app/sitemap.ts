import type { MetadataRoute } from "next";

import { projects } from "~/content/profile";
import { locales } from "~/i18n/config";
import { localePath } from "~/i18n/routing";
import { siteUrl } from "~/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/resume", "/projects", ...projects.map((p) => `/projects/${p.slug}`)];

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${siteUrl}${localePath(locale, path)}`,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}${localePath(l, path)}`])),
      },
    })),
  );
}
