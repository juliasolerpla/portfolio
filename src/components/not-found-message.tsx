"use client";

import { useParams } from "next/navigation";

import { Saturn } from "~/components/illustrations/saturn";
import { LeafButton } from "~/components/leaf-button";
import type { Dictionary } from "~/content/types";
import { defaultLocale, isLocale, type Locale } from "~/i18n/config";
import { localePath } from "~/i18n/routing";

type Props = { copies: Record<Locale, Dictionary["notFound"]> };

/** Not-found pages don't receive the route params, so the language is read here. */
export function NotFoundMessage({ copies }: Props) {
  const params = useParams<{ locale?: string }>();
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const copy = copies[locale];

  return (
    <div className="container-page grid place-items-center py-24 text-center md:py-32">
      <div className="draw w-56 text-navy md:w-72">
        <Saturn strokeWidth={1.2} />
      </div>
      <h1 className="mt-10 text-5xl font-bold tracking-[-0.02em] md:text-6xl">{copy.title}</h1>
      <p className="mt-4 max-w-md text-lg text-muted">{copy.text}</p>
      <LeafButton href={localePath(locale)} className="mt-10">
        {copy.back}
      </LeafButton>
    </div>
  );
}
