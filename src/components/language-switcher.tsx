"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { ChevronDownIcon, GlobeIcon } from "~/components/icons";
import { localeCookie, localeNames, locales, type Locale } from "~/i18n/config";
import { localePath, stripLocale } from "~/i18n/routing";
import { cn } from "~/lib/cn";

/** Remembered for a year, so the proxy sends returning visitors straight to this language. */
function rememberLocale(locale: Locale) {
  document.cookie = `${localeCookie}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

/** Dropdown that opens the current page in another language. */
export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const path = stripLocale(pathname);

  const choose = (next: Locale) => {
    rememberLocale(next);
    setOpen(false);
  };

  return (
    <div
      ref={rootRef}
      className="relative"
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className="flex h-10 items-center gap-1.5 rounded-full px-3 text-sm font-semibold tracking-wide transition-colors hover:bg-mist"
      >
        <GlobeIcon className="size-[18px]" />
        <span className="sr-only">{label}:</span>
        <span>{locale.toUpperCase()}</span>
        <ChevronDownIcon className={cn("size-3.5 transition-transform", open && "rotate-180")} />
      </button>

      <ul
        id={menuId}
        hidden={!open}
        className="absolute top-full right-0 z-50 mt-2 w-48 overflow-hidden rounded-[1rem_0] bg-white py-2 shadow-[0_20px_50px_-12px_rgb(16_17_20/0.28)] ring-1 ring-ink/10"
      >
        {locales.map((option) => {
          const current = option === locale;
          return (
            <li key={option}>
              <Link
                href={localePath(option, path)}
                hrefLang={option}
                lang={option}
                aria-current={current ? "true" : undefined}
                onClick={() => choose(option)}
                className={cn(
                  "flex items-center justify-between px-4 py-2 text-[0.9375rem] transition-colors hover:bg-paper",
                  current && "font-semibold text-navy",
                )}
              >
                {localeNames[option]}
                <span className="text-xs font-medium tracking-wide text-muted">
                  {option.toUpperCase()}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
