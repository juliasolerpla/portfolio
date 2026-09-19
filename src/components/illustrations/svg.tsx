import type { ReactNode, SVGProps } from "react";

export type IllustrationProps = {
  className?: string;
  /** Accessible description. Without it the drawing is decorative and hidden from screen readers. */
  label?: string;
  strokeWidth?: number;
};

export function Svg({
  viewBox,
  className,
  label,
  strokeWidth = 1.5,
  children,
}: IllustrationProps & { viewBox: string; children: ReactNode }) {
  return (
    <svg
      viewBox={viewBox}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
    >
      {children}
    </svg>
  );
}

/** A stroked path that takes part in the draw-on animation (see `.draw` in globals.css). */
export function Line(props: SVGProps<SVGPathElement>) {
  return <path pathLength={1} {...props} />;
}

export function Circle(props: SVGProps<SVGCircleElement>) {
  return <circle pathLength={1} {...props} />;
}

/** Tiny annotation, like the ones on an engineering drawing. */
export function Note({
  x,
  y,
  children,
  anchor = "start",
}: {
  x: number;
  y: number;
  children: ReactNode;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fill="currentColor"
      stroke="none"
      fontSize={9}
      fontWeight={600}
      letterSpacing="0.08em"
    >
      {children}
    </text>
  );
}

const fmt = (n: number) => Number(n.toFixed(1));

/** Polyline through 2D points: `polyline([[0, 0], [10, 5]])` → `"M0 0L10 5"`. */
export function polyline(points: readonly (readonly [number, number])[], closed = false) {
  const d = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${fmt(x)} ${fmt(y)}`).join("");
  return closed ? `${d}Z` : d;
}
