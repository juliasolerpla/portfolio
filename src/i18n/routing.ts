import { isLocale, locales, type Locale } from "./config";

/** `("ca", "/projects")` → `"/ca/projects"`, `("ca", "/")` → `"/ca"`. */
export function localePath(locale: Locale, path = "/") {
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** `"/ca/projects/x"` → `"/projects/x"`, so the same page can be opened in another language. */
export function stripLocale(pathname: string) {
  const [, first, ...rest] = pathname.split("/");
  if (!isLocale(first)) return pathname;
  const path = rest.join("/");
  return path ? `/${path}` : "/";
}

/** Canonical URL plus `hreflang` alternates for a page that exists in every language. */
export function alternates(locale: Locale, path: string) {
  return {
    canonical: localePath(locale, path),
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, localePath(l, path)])),
      // The unprefixed URL redirects to the visitor's language, which is what x-default is for.
      "x-default": path,
    },
  };
}
