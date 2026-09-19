import type { CSSProperties } from "react";

/** Staggers `[data-reveal]` elements: `style={revealDelay(index * 90)}`. */
export const revealDelay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

/** Staggers elements using the `animate-rise` entrance animation. */
export const riseDelay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });
