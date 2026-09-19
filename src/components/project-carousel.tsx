"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { ArrowIcon } from "~/components/icons";

type Props = {
  /** Section heading, shown next to the arrows. */
  heading: ReactNode;
  /** `<li>` items. */
  children: ReactNode;
  labels: { previous: string; next: string };
};

/** Horizontally scrolling row of cards that bleeds off the right edge of the page. */
export function ProjectCarousel({ heading, children, labels }: Props) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ atStart: true, atEnd: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      setEdges({ atStart: track.scrollLeft <= 2, atEnd: track.scrollLeft >= max - 2 });
    };
    // Also fires once right away, which sets the initial state.
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(track);
    track.addEventListener("scroll", update, { passive: true });
    return () => {
      resizeObserver.disconnect();
      track.removeEventListener("scroll", update);
    };
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild;
    if (!track || !(card instanceof HTMLElement)) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const arrowClass =
    "grid size-11 place-items-center rounded-full border border-ink/15 transition-colors enabled:hover:border-navy enabled:hover:bg-navy enabled:hover:text-white disabled:opacity-30";

  return (
    <div>
      <div className="container-page flex items-end justify-between gap-6">
        {heading}
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            className={arrowClass}
            onClick={() => scrollByCard(-1)}
            disabled={edges.atStart}
            aria-label={labels.previous}
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            className={arrowClass}
            onClick={() => scrollByCard(1)}
            disabled={edges.atEnd}
            aria-label={labels.next}
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
      <ul
        ref={trackRef}
        className="mt-10 flex snap-x snap-mandatory bleed-px [scrollbar-width:none] gap-5 overflow-x-auto pb-4 md:gap-7 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>
    </div>
  );
}
