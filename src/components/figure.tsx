import Image from "next/image";
import type { ReactNode } from "react";

/** A real photo or figure, in a bordered card, with its caption underneath. */
export function Figure({
  src,
  alt,
  caption,
  sizes,
  priority,
  aspect = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  caption?: ReactNode;
  sizes: string;
  priority?: boolean;
  /** Tailwind aspect-ratio class of the frame. */
  aspect?: string;
}) {
  return (
    <figure>
      <div
        className={`relative ${aspect} overflow-hidden rounded-[1rem] bg-white ring-1 ring-line`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-contain p-2"
        />
      </div>
      {caption && <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>}
    </figure>
  );
}
