import Image from "next/image";
import type { CSSProperties } from "react";

import { cn } from "~/lib/cn";

type Props = {
  /** Path of the photo in `public/`, or `null` while there isn't one yet. */
  photo: string | null;
  alt: string;
  /** Width of the frame at each breakpoint, so the photo is served at the right size. */
  sizes: string;
  className?: string;
  style?: CSSProperties;
};

/** A photo in a rounded frame. Until the photo exists, a neutral placeholder holds its place. */
export function PhotoFrame({ photo, alt, sizes, className, style }: Props) {
  return (
    <div className={cn("relative overflow-hidden bg-paper", className)} style={style}>
      {photo ? (
        <Image src={photo} alt={alt} fill sizes={sizes} className="object-cover" />
      ) : (
        <PhotoPlaceholder />
      )}
    </div>
  );
}

function PhotoPlaceholder() {
  return (
    <div className="absolute inset-0 grid place-items-center dot-grid text-navy/60">
      <svg
        viewBox="0 0 96 80"
        className="w-[38%] max-w-24 min-w-12"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        focusable="false"
      >
        <path d="M8 16h20l6-8h28l6 8h20a6 6 0 0 1 6 6v46a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V22a6 6 0 0 1 6-6Z" />
        <circle cx="48" cy="45" r="17" />
        <circle cx="48" cy="45" r="8" />
        <path d="M78 26h4" />
      </svg>
    </div>
  );
}
