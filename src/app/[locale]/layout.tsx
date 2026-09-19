import "~/styles/globals.css";

import type { Metadata, Viewport } from "next";
import { Work_Sans } from "next/font/google";
import { notFound } from "next/navigation";

import { RevealObserver } from "~/components/reveal-observer";
import { SiteFooter } from "~/components/site-footer";
import { SiteHeader } from "~/components/site-header";
import { getDictionary, profile } from "~/content";
import { isLocale, locales, ogLocales } from "~/i18n/config";
import { siteUrl } from "~/lib/site";

const workSans = Work_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-work-sans",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: { default: dict.meta.title, template: `%s — ${profile.shortName}` },
    description: dict.meta.description,
    authors: [{ name: profile.name, url: profile.linkedin }],
    openGraph: {
      type: "website",
      siteName: profile.name,
      locale: ogLocales[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
    },
    twitter: { card: "summary_large_image" },
  };
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={workSans.variable}>
      <body className="flex min-h-dvh flex-col overflow-x-clip bg-white font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only z-[60] rounded-[1rem_0] bg-navy px-5 py-2.5 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          {dict.nav.skipToContent}
        </a>
        <SiteHeader locale={locale} dict={dict} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter dict={dict} />
        <RevealObserver />
      </body>
    </html>
  );
}
