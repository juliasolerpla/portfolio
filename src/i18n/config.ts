export const locales = ["en", "fr", "ca", "es"] as const;

export type Locale = (typeof locales)[number];

/** Used when the visitor's browser doesn't ask for any of the supported languages. */
export const defaultLocale: Locale = "en";

/** Each language written in itself, as shown in the language switcher. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  ca: "Català",
  es: "Español",
};

/** Open Graph locale codes, used by social networks when the site is shared. */
export const ogLocales: Record<Locale, string> = {
  en: "en_GB",
  fr: "fr_FR",
  ca: "ca_ES",
  es: "es_ES",
};

/** Remembers the language picked in the switcher so the proxy honours it on the next visit. */
export const localeCookie = "NEXT_LOCALE";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}
