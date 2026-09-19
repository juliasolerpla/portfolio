import type { Locale } from "~/i18n/config";

import { ca } from "./locales/ca";
import { en } from "./locales/en";
import { es } from "./locales/es";
import { fr } from "./locales/fr";
import { projects } from "./profile";
import type { Dictionary, ProjectEntry } from "./types";

const dictionaries: Record<Locale, Dictionary> = { en, fr, ca, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getProject(slug: string): ProjectEntry | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Most recent first, as on a resume. */
export function byStartDesc<T extends { start: string }>(entries: T[]): T[] {
  return [...entries].sort((a, b) => b.start.localeCompare(a.start));
}

export * from "./profile";
export type * from "./types";
