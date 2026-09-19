import { Circle, Line, Svg, type IllustrationProps } from "./svg";

const cx = 100;
const cy = 70;
const radius = 34;
const rings = [
  { rx: 88, ry: 20.5 },
  { rx: 74, ry: 17 },
  { rx: 57, ry: 12.5 },
];

/** Upper (behind the planet) or lower (in front of it) half of a ring. */
function halfRing({ rx, ry }: { rx: number; ry: number }, half: "back" | "front") {
  return `M${cx - rx} ${cy}A${rx} ${ry} 0 0 ${half === "back" ? 1 : 0} ${cx + rx} ${cy}`;
}

const outer = rings[0]!;
const inner = rings[2]!;
/** The front half of the ring system, painted to hide the planet behind it. */
const frontBand = `${halfRing(outer, "front")}L${cx + inner.rx} ${cy}A${inner.rx} ${inner.ry} 0 0 1 ${cx - inner.rx} ${cy}Z`;

const bands = [-22, -11, 3, 15].map((offset) => {
  const half = Math.sqrt(radius ** 2 - offset ** 2);
  return `M${(cx - half).toFixed(1)} ${cy + offset}Q${cx} ${cy + offset + 5} ${(cx + half).toFixed(1)} ${cy + offset}`;
});

export function Saturn(props: IllustrationProps) {
  return (
    <Svg viewBox="0 0 200 140" {...props}>
      <g transform={`rotate(-16 ${cx} ${cy})`}>
        {rings.map((ring) => (
          <Line
            key={ring.rx}
            d={halfRing(ring, "back")}
            strokeWidth={ring === rings[1] ? 0.8 : undefined}
          />
        ))}
        <Circle cx={cx} cy={cy} r={radius} className="illo-fill" />
        {bands.map((d) => (
          <Line key={d} d={d} strokeWidth={0.8} />
        ))}
        <path d={frontBand} className="illo-fill" stroke="none" />
        {rings.map((ring) => (
          <Line
            key={ring.rx}
            d={halfRing(ring, "front")}
            strokeWidth={ring === rings[1] ? 0.8 : undefined}
          />
        ))}
      </g>
      {/* Two small stars */}
      <Line d="M24 22v10M19 27h10" strokeWidth={1} />
      <Line d="M176 116v7M172.5 119.5h7" strokeWidth={1} />
    </Svg>
  );
}
