/** Deterministic pseudo-random numbers, so the stars are the same on every render. */
function random(seed: number) {
  let t = seed;
  return () => {
    t = (t + 0x6d2b79f5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

const next = random(7);
const stars = Array.from({ length: 90 }, () => ({
  x: next() * 400,
  y: next() * 500,
  r: 0.4 + next() ** 3 * 1.6,
  opacity: 0.25 + next() * 0.65,
}));

/** Scattered dots, filling its box (the extra is cropped). */
export function Starfield({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden
      focusable="false"
    >
      {stars.map((star, i) => (
        <circle
          key={i}
          cx={star.x.toFixed(1)}
          cy={star.y.toFixed(1)}
          r={star.r.toFixed(2)}
          fill="currentColor"
          opacity={star.opacity.toFixed(2)}
        />
      ))}
    </svg>
  );
}
