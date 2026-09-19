import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "~/lib/cn";

const variants = {
  solid: "bg-navy text-white hover:bg-navy-deep",
  light: "bg-white text-navy hover:bg-mist",
  outline: "text-white ring-1 ring-white/60 ring-inset hover:bg-white/10",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  /** Opens in a new tab. mailto: links and files are always rendered as plain anchors. */
  external?: boolean;
  download?: boolean;
};

/** Button with two rounded corners that swap on hover, the site's signature shape. */
export function LeafButton({
  href,
  children,
  variant = "solid",
  className,
  external,
  download,
}: Props) {
  const classes = cn(
    "inline-flex min-w-40 items-center justify-center gap-2 rounded-[1rem_0] px-8 py-2.5 text-[0.8125rem] font-semibold tracking-[0.08em] uppercase transition-[border-radius,background-color,color] duration-300 ease-out hover:rounded-[0_1rem]",
    variants[variant],
    className,
  );

  if (external || download || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
