"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "~/lib/cn";

export type NavItem = {
  href: string;
  label: string;
  /** Only active on this exact URL (the home page), not on the pages below it. */
  exact?: boolean;
};

export function isCurrent(pathname: string, { href, exact }: NavItem) {
  return pathname === href || (!exact && pathname.startsWith(`${href}/`));
}

export function NavLinks({
  items,
  label,
  className,
}: {
  items: NavItem[];
  label: string;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <nav aria-label={label} className={className}>
      <ul className="flex items-center gap-7">
        {items.map((item) => {
          const current = isCurrent(pathname, item);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={cn(
                  "text-[0.9375rem] font-medium decoration-[1.5px] underline-offset-[7px] transition-colors hover:underline",
                  current && "underline",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
