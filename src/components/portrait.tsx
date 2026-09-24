import Image from "next/image";

import { Saturn, Starfield } from "~/components/illustrations";
import { profile } from "~/content";

/** Home-page portrait. Until `profile.photo` is set, shows a night sky with Saturn instead. */
export function Portrait({ alt }: { alt: string }) {
  return (
    <div className="wipe-in relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-navy sm:rounded-[3rem]">
      {profile.photo ? (
        <Image
          src={profile.photo}
          alt={alt}
          fill
          priority
          sizes="(min-width: 768px) 45vw, 100vw"
          className="object-cover object-top"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_30%_15%,#34507a_0%,var(--color-navy)_45%,var(--color-navy-deep)_100%)]">
          <Starfield className="absolute inset-0 size-full text-white" />
          <svg
            viewBox="0 0 400 500"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 size-full text-white/25"
            fill="none"
            stroke="currentColor"
            aria-hidden
          >
            <ellipse
              cx="200"
              cy="300"
              rx="260"
              ry="70"
              transform="rotate(-16 200 300)"
              strokeDasharray="3 7"
            />
            <ellipse
              cx="200"
              cy="300"
              rx="330"
              ry="120"
              transform="rotate(-16 200 300)"
              strokeDasharray="2 9"
            />
          </svg>
          <div className="draw absolute inset-x-[6%] top-[38%] text-white/90 [--draw-delay:0.5s] [--illo-bg:#23324d]">
            <Saturn strokeWidth={1.1} className="w-full" />
          </div>
        </div>
      )}
    </div>
  );
}
