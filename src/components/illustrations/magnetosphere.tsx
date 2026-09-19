import { Circle, Line, Svg, polyline, type IllustrationProps } from "./svg";

/** Planet centre and radius (px); the Sun is to the left. */
const px = 255;
const py = 130;
const R = 22;

/**
 * Closed dipole field line r = L·sin²θ (in planet radii), from pole to pole on one side.
 * `stretch` squeezes the day side and pulls the night side into a tail.
 */
function fieldLine(L: number, side: "day" | "night", stretch: number) {
  const theta0 = Math.asin(Math.sqrt(1 / L));
  const steps = 48;
  const points: [number, number][] = [];
  for (let i = 0; i <= steps; i++) {
    const theta = theta0 + ((Math.PI - 2 * theta0) * i) / steps;
    const r = L * Math.sin(theta) ** 2 * R;
    const x = r * Math.sin(theta) * stretch;
    points.push([side === "day" ? px - x : px + x, py - r * Math.cos(theta)]);
  }
  return polyline(points);
}

const closedLines = [2, 2.9, 3.8].flatMap((L) => [
  fieldLine(L, "day", 1),
  fieldLine(L, "night", 1.6),
]);

/** Open field lines from the polar caps, stretched into the magnetotail. */
const tailLines = [
  "M250 109C262 86 300 70 400 66",
  "M246 110C247 82 288 55 400 50",
  "M250 151C262 174 300 190 400 194",
  "M246 150C247 178 288 205 400 210",
];

/** Plasma crossing the magnetopause outwards. */
const leaks = [
  { from: [296, 44], to: [300, 22] },
  { from: [196, 80], to: [182, 64] },
  { from: [296, 216], to: [300, 238] },
  { from: [196, 180], to: [182, 196] },
] as const;

function arrow(from: readonly [number, number], to: readonly [number, number]) {
  const angle = Math.atan2(to[1] - from[1], to[0] - from[0]);
  const head = (a: number) =>
    [to[0] - 5 * Math.cos(angle + a), to[1] - 5 * Math.sin(angle + a)] as [number, number];
  return `${polyline([from, to])}${polyline([head(0.5), [to[0], to[1]], head(-0.5)])}`;
}

const particles: [number, number][] = [
  [304, 32],
  [292, 52],
  [190, 70],
  [204, 88],
  [306, 228],
  [290, 208],
  [188, 190],
  [205, 173],
  [120, 58],
  [132, 204],
  [340, 28],
  [352, 236],
];

export function Magnetosphere(props: IllustrationProps) {
  return (
    <Svg viewBox="0 0 400 260" {...props}>
      {/* Solar wind */}
      {[46, 88, 130, 172, 214].map((y) => (
        <Line key={y} d={`M12 ${y}H48M42 ${y - 5}l6 5-6 5`} strokeWidth={1.1} />
      ))}

      {/* Bow shock and magnetopause */}
      <path d="M180 4C110 36 86 88 86 130C86 172 110 224 180 256" strokeDasharray="5 5" />
      <Line d="M400 36C290 30 160 58 160 130C160 202 290 230 400 224" strokeWidth={1.7} />

      {/* Field lines */}
      <g strokeWidth={0.85}>
        {closedLines.map((d) => (
          <Line key={d} d={d} />
        ))}
        {tailLines.map((d) => (
          <Line key={d} d={d} />
        ))}
      </g>

      {/* Leaking plasma */}
      {leaks.map(({ from, to }) => (
        <Line key={`${from[0]}-${from[1]}`} d={arrow(from, to)} strokeWidth={1.1} />
      ))}
      {particles.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={1.4} fill="currentColor" stroke="none" />
      ))}

      {/* Planet with its bands and a faint ring */}
      <Circle cx={px} cy={py} r={R} className="illo-fill" />
      <Line
        d={[-12, -4, 5, 13]
          .map((dy) => {
            const w = Math.sqrt(R ** 2 - dy ** 2);
            return `M${(px - w).toFixed(1)} ${py + dy}Q${px} ${py + dy + 3} ${(px + w).toFixed(1)} ${py + dy}`;
          })
          .join("")}
        strokeWidth={0.75}
      />
      <Line d={`M${px - 38} ${py + 2}A38 7 0 0 0 ${px + 38} ${py + 2}`} strokeWidth={0.8} />
    </Svg>
  );
}
