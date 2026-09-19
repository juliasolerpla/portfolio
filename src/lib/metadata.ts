import type { Metadata } from "next";

import { profile } from "~/content/profile";
import { locales, ogLocales, type Locale } from "~/i18n/config";
import { alternates, localePath } from "~/i18n/routing";

/** `"Projects."` → `"Projects"`: headings end with a full stop, page titles don't. */
export const withoutFullStop = (text: string) => text.replace(/\.$/, "");

/**
 * Title, description, canonical/hreflang links and social preview of a page. Pages set
 * `openGraph` as a whole because Next.js doesn't merge it with the layout's.
 */
export function pageMetadata({
  locale,
  path,
  title,
  description,
  absoluteTitle = false,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  /** Use the title as is, without the "— Júlia Soler" suffix. */
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} — ${profile.shortName}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: alternates(locale, path),
    openGraph: {
      type: "website",
      siteName: profile.name,
      locale: ogLocales[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
      url: localePath(locale, path),
      title: fullTitle,
      description,
    },
  };
}
