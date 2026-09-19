import { Circle, Line, Note, Svg, polyline, type IllustrationProps } from "./svg";

/**
 * 3U CubeSat with two deployed solar wings, in isometric projection.
 * Geometry is in CubeSat units (1U = 10 cm): the body spans x, y ∈ [0, 1] and z ∈ [0, 3].
 */

type V3 = readonly [number, number, number];

const UNIT = 40;
const COS30 = Math.cos(Math.PI / 6);

/** x runs down-right, y down-left and z up. */
function project([x, y, z]: V3): [number, number] {
  return [(x - y) * COS30 * UNIT, ((x + y) / 2 - z) * UNIT];
}

const path = (points: V3[], closed = false) => polyline(points.map(project), closed);
const segments = (pairs: [V3, V3][]) => pairs.map((pair) => path(pair)).join("");

/** Panel in the plane y = 0.5, spanning x0..x1 and z0..z1, with its grid of cells. */
function panel(x0: number, x1: number, z0: number, z1: number) {
  const y = 0.5;
  const rows = 5;
  const xm = (x0 + x1) / 2;
  const outline = path(
    [
      [x0, y, z0],
      [x1, y, z0],
      [x1, y, z1],
      [x0, y, z1],
    ],
    true,
  );
  const cells: [V3, V3][] = [
    [
      [xm, y, z0],
      [xm, y, z1],
    ],
  ];
  for (let i = 1; i < rows; i++) {
    const z = z0 + ((z1 - z0) * i) / rows;
    cells.push([
      [x0, y, z],
      [x1, y, z],
    ]);
  }
  return { outline, cells: segments(cells) };
}

const Z0 = 0.15;
const Z1 = 2.85;
const leftWing = [panel(-2.14, -1.16, Z0, Z1), panel(-1.1, -0.12, Z0, Z1)];
const rightWing = [panel(1.12, 2.1, Z0, Z1), panel(2.16, 3.14, Z0, Z1)];

/** Hinges between the body and the wings, and between the two panels of each wing. */
const hinges = (xs: [number, number][]) =>
  segments(
    xs.flatMap(([a, b]) =>
      [0.7, 2.3].map((z): [V3, V3] => [
        [a, 0.5, z],
        [b, 0.5, z],
      ]),
    ),
  );

const body = {
  right: path(
    [
      [1, 0, 0],
      [1, 1, 0],
      [1, 1, 3],
      [1, 0, 3],
    ],
    true,
  ),
  left: path(
    [
      [0, 1, 0],
      [1, 1, 0],
      [1, 1, 3],
      [0, 1, 3],
    ],
    true,
  ),
  top: path(
    [
      [0, 0, 3],
      [1, 0, 3],
      [1, 1, 3],
      [0, 1, 3],
    ],
    true,
  ),
  // Rails along the vertical edges and the joints between the three units.
  rightLines: segments([
    [
      [1, 0.1, 0],
      [1, 0.1, 3],
    ],
    [
      [1, 0.9, 0],
      [1, 0.9, 3],
    ],
    [
      [1, 0.1, 1],
      [1, 0.9, 1],
    ],
    [
      [1, 0.1, 2],
      [1, 0.9, 2],
    ],
  ]),
  leftLines: segments([
    [
      [0.1, 1, 0],
      [0.1, 1, 3],
    ],
    [
      [0.9, 1, 0],
      [0.9, 1, 3],
    ],
    [
      [0.1, 1, 1],
      [0.9, 1, 1],
    ],
    [
      [0.1, 1, 2],
      [0.9, 1, 2],
    ],
  ]),
  // Body-mounted cells on the two lower units, star tracker on the top one.
  leftCells: [0, 1]
    .flatMap((u) => [
      path(
        [
          [0.2, 1, u + 0.15],
          [0.48, 1, u + 0.15],
          [0.48, 1, u + 0.85],
          [0.2, 1, u + 0.85],
        ],
        true,
      ),
      path(
        [
          [0.52, 1, u + 0.15],
          [0.8, 1, u + 0.15],
          [0.8, 1, u + 0.85],
          [0.52, 1, u + 0.85],
        ],
        true,
      ),
    ])
    .join(""),
  tracker: path(
    [
      [0.3, 1, 2.3],
      [0.7, 1, 2.3],
      [0.7, 1, 2.7],
      [0.3, 1, 2.7],
    ],
    true,
  ),
  plate: path(
    [
      [0.2, 0.2, 3],
      [0.8, 0.2, 3],
      [0.8, 0.8, 3],
      [0.2, 0.8, 3],
    ],
    true,
  ),
  lens: path(
    Array.from({ length: 32 }, (_, i): V3 => {
      const t = (i / 32) * Math.PI * 2;
      return [0.5 + 0.17 * Math.cos(t), 0.5 + 0.17 * Math.sin(t), 3];
    }),
    true,
  ),
  antenna: path([
    [0.5, 0.5, 3],
    [0.5, 0.5, 3.95],
  ]),
};

const [antennaX, antennaY] = project([0.5, 0.5, 3.95]);

/** Where the upper hinge meets the right wing: the part the HDRM callout points at. */
const [hingeX, hingeY] = project([1.1, 0.5, 2.3]);
/** Magnified view, in the empty space above the right wing. */
const detail = { x: hingeX + 41, y: hingeY - 60, r: 34 };

function viewBoxAround(points: [number, number][]) {
  const pad = 8;
  const xs = points.map(([x]) => x);
  const ys = points.map(([, y]) => y);
  const minX = Math.min(...xs) - pad;
  const minY = Math.min(...ys) - pad;
  const width = Math.max(...xs) + pad - minX;
  const height = Math.max(...ys) + pad - minY;
  return [minX, minY, width, height].map((n) => Math.round(n)).join(" ");
}

const outerCorners: V3[] = [
  [-2.14, 0.5, Z0],
  [-2.14, 0.5, Z1],
  [3.14, 0.5, Z0],
  [3.14, 0.5, Z1],
  [1, 1, 0],
  [0.5, 0.5, 3.95],
];
const viewBox = viewBoxAround(outerCorners.map(project));
const viewBoxWithDetail = viewBoxAround([
  ...outerCorners.map(project),
  [detail.x + detail.r, detail.y - detail.r],
]);

export function CubeSat({
  detailed = false,
  ...props
}: IllustrationProps & { detailed?: boolean }) {
  return (
    <Svg viewBox={detailed ? viewBoxWithDetail : viewBox} {...props}>
      {/* Left wing sits behind the body, which is painted over it. */}
      {leftWing.map(({ outline, cells }) => (
        <g key={outline}>
          <Line className="illo-fill" d={outline} />
          <Line d={cells} strokeWidth={0.75} />
        </g>
      ))}
      <Line d={hinges([[-1.16, -1.1]])} />

      <Line className="illo-fill" d={body.right} />
      <Line className="illo-fill" d={body.left} />
      <Line className="illo-fill" d={body.top} />
      <Line d={body.rightLines} strokeWidth={0.75} />
      <Line d={body.leftLines} strokeWidth={0.75} />
      <Line d={body.leftCells} strokeWidth={0.75} />
      <Line d={body.tracker} />
      <Line d={body.plate} strokeWidth={0.75} />
      <Line d={body.lens} />

      {/* Right wing sits in front of the body. */}
      <Line
        d={hinges([
          [1, 1.12],
          [2.1, 2.16],
        ])}
      />
      {rightWing.map(({ outline, cells }) => (
        <g key={outline}>
          <Line className="illo-fill" d={outline} />
          <Line d={cells} strokeWidth={0.75} />
        </g>
      ))}

      <Line d={body.antenna} />
      <Circle cx={antennaX} cy={antennaY} r={2.2} className="illo-fill" />

      {detailed && (
        <g>
          <circle cx={hingeX} cy={hingeY} r={9} strokeDasharray="2.5 2.5" />
          <path
            d={`M${hingeX + 6} ${hingeY - 7}L${detail.x - detail.r * 0.56} ${detail.y + detail.r * 0.82}`}
            strokeDasharray="2.5 2.5"
          />
          <Circle cx={detail.x} cy={detail.y} r={detail.r} className="illo-fill" />
          {/* Hold-down: a pin through the body wall and the stowed panel, preloaded by a spring. */}
          <g strokeWidth={1.1}>
            <Line d={`M${detail.x - 22} ${detail.y - 17}h7v34h-7z`} />
            <Line d={`M${detail.x + 12} ${detail.y - 17}h6v34h-6z`} />
            <Line
              d={`M${detail.x - 15} ${detail.y}H${detail.x + 23}M${detail.x + 23} ${detail.y - 5}v10`}
            />
            <Line
              d={polyline(
                Array.from({ length: 9 }, (_, i) => [
                  detail.x - 12 + i * 2.75,
                  detail.y + (i % 2 === 0 ? -4.5 : 4.5),
                ]),
              )}
            />
          </g>
          <Note x={detail.x} y={detail.y + detail.r + 13} anchor="middle">
            HDRM
          </Note>
        </g>
      )}
    </Svg>
  );
}
