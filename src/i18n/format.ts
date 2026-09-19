import type { Locale } from "./config";

// Written out instead of using Intl so the output is identical on every browser and server.
const shortMonths: Record<Locale, readonly string[]> = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  fr: [
    "janv.",
    "févr.",
    "mars",
    "avr.",
    "mai",
    "juin",
    "juil.",
    "août",
    "sept.",
    "oct.",
    "nov.",
    "déc.",
  ],
  ca: [
    "gen.",
    "febr.",
    "març",
    "abr.",
    "maig",
    "juny",
    "jul.",
    "ag.",
    "set.",
    "oct.",
    "nov.",
    "des.",
  ],
  es: [
    "ene.",
    "feb.",
    "mar.",
    "abr.",
    "may.",
    "jun.",
    "jul.",
    "ago.",
    "sept.",
    "oct.",
    "nov.",
    "dic.",
  ],
};

/** `"2025-09"` → `"Sep 2025"` / `"set. 2025"`… */
export function formatMonth(locale: Locale, yearMonth: string) {
  const [year, month] = yearMonth.split("-");
  return `${shortMonths[locale][Number(month) - 1] ?? ""} ${year ?? ""}`;
}

/** `"Sep 2025 – Mar 2027"`, or `"Sep 2025 – Present"` when there is no end date. */
export function formatPeriod(locale: Locale, start: string, end: string | null, present: string) {
  return `${formatMonth(locale, start)} – ${end ? formatMonth(locale, end) : present}`;
}

/** Year of a `"2025-09"` date, for compact labels. */
export function yearOf(yearMonth: string) {
  return yearMonth.slice(0, 4);
}

/** `3.9` → `"3.9"` in English, `"3,9"` in French, Catalan and Spanish. */
export function formatDecimal(locale: Locale, value: number) {
  return new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(value);
}
