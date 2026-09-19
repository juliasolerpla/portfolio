"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

import { CloseIcon, MenuIcon } from "~/components/icons";
import { isCurrent, type NavItem } from "~/components/nav-links";

type Props = {
  items: NavItem[];
  labels: { open: string; close: string; nav: string };
  /** Rendered under the links (the social links). */
  children?: ReactNode;
  className?: string;
};

/** Full-screen menu for small screens. */
export function MobileMenu({ items, labels, children, className }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? labels.close : labels.open}
        onClick={() => setOpen((value) => !value)}
        className="grid size-10 place-items-center rounded-full transition-colors hover:bg-mist"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-white"
      >
        <nav aria-label={labels.nav} className="container-page flex flex-col pt-6 pb-12">
          <ul className="flex flex-col">
            {items.map((item) => {
              const current = isCurrent(pathname, item);
              return (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-5 text-3xl font-bold"
                  >
                    {item.label}.
                    {current && (
                      <span className="size-2.5 rounded-[0.5rem_0] bg-navy" aria-hidden />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-8 -ml-2">{children}</div>
        </nav>
      </div>
    </div>
  );
}
