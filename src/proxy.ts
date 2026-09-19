import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, isLocale, localeCookie, locales, type Locale } from "~/i18n/config";

/** The language picked in the switcher, else the best match from the browser, else English. */
function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(localeCookie)?.value;
  if (isLocale(saved)) return saved;

  // "ca-ES,ca;q=0.9,en;q=0.8" → ["ca", "ca", "en"], ordered by preference
  const accepted = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((part) => {
      const [tag = "", ...params] = part.trim().split(";");
      const q = params.find((param) => param.trim().startsWith("q="));
      return {
        language: tag.trim().toLowerCase().split("-")[0],
        quality: q ? Number(q.trim().slice(2)) : 1,
      };
    })
    .filter(({ quality }) => quality > 0)
    .sort((a, b) => b.quality - a.quality);

  for (const { language } of accepted) {
    if (isLocale(language)) return language;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next.js internals and every file with an extension (icons, robots.txt, sitemap.xml…).
  matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
};
