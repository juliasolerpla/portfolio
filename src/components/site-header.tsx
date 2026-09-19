import Link from "next/link";

import { LanguageSwitcher } from "~/components/language-switcher";
import { MobileMenu } from "~/components/mobile-menu";
import { NavLinks, type NavItem } from "~/components/nav-links";
import { SocialLinks } from "~/components/social-links";
import { profile, type Dictionary } from "~/content";
import type { Locale } from "~/i18n/config";
import { localePath } from "~/i18n/routing";

export function SiteHeader({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const items: NavItem[] = [
    { href: localePath(locale), label: dict.nav.home, exact: true },
    { href: localePath(locale, "/resume"), label: dict.nav.resume },
    { href: localePath(locale, "/projects"), label: dict.nav.projects },
  ];

  return (
    <header className="relative z-50 bg-white">
      <div className="container-page flex h-16 items-center justify-between gap-4 md:grid md:grid-cols-[1fr_auto_1fr]">
        <NavLinks items={items} label={dict.nav.main} className="hidden md:block" />

        <Link href={localePath(locale)} className="text-[1.0625rem] font-bold tracking-[0.01em]">
          {profile.shortName}
        </Link>

        <div className="flex items-center justify-end gap-1">
          <SocialLinks className="hidden md:flex" />
          <LanguageSwitcher locale={locale} label={dict.nav.language} />
          <MobileMenu
            items={items}
            labels={{ open: dict.nav.openMenu, close: dict.nav.closeMenu, nav: dict.nav.main }}
            className="md:hidden"
          >
            <SocialLinks />
          </MobileMenu>
        </div>
      </div>
    </header>
  );
}
