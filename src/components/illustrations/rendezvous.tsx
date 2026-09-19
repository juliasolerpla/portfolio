import { Line, Note, Svg, type IllustrationProps } from "./svg";

/** Small spacecraft in cabinet projection: front face, top and side, centred on (x, y). */
function spacecraft(x: number, y: number, w: number, h: number, depth: number) {
  const left = x - w / 2;
  const top = y - h / 2;
  const dx = depth;
  const dy = -depth * 0.75;
  return {
    front: `M${left} ${top}h${w}v${h}h${-w}Z`,
    top: `M${left} ${top}l${dx} ${dy}h${w}l${-dx} ${-dy}Z`,
    side: `M${left + w} ${top}l${dx} ${dy}v${h}l${-dx} ${-dy}Z`,
  };
}

/** Solar panel with a grid of cells. */
function panel(x: number, y: number, w: number, h: number, columns: number, rows: number) {
  const outline = `M${x} ${y}h${w}v${h}h${-w}Z`;
  const grid = [
    ...Array.from({ length: columns - 1 }, (_, i) => `M${x + ((i + 1) * w) / columns} ${y}v${h}`),
    ...Array.from({ length: rows - 1 }, (_, i) => `M${x} ${y + ((i + 1) * h) / rows}h${w}`),
  ].join("");
  return { outline, grid };
}

const target = spacecraft(292, 86, 28, 22, 8);
const targetPanels = [panel(230, 74, 40, 20, 4, 2), panel(322, 70, 40, 20, 4, 2)];
const chaser = spacecraft(100, 150, 18, 14, 5);
const chaserPanel = panel(56, 143, 28, 14, 3, 1);

export function Rendezvous(props: IllustrationProps) {
  return (
    <Svg viewBox="0 0 400 260" {...props}>
      {/* Earth's limb and atmosphere */}
      <Line d="M-10 204.9A650 650 0 0 1 410 204.9" strokeWidth={1.6} />
      <path d="M-10 192.2A662 662 0 0 1 410 192.2" strokeDasharray="2 5" />
      <Line d="M24 252C92 228 168 224 228 238M258 260C300 242 350 238 404 246" strokeWidth={0.8} />

      {/* Local orbital frame */}
      <Line d="M22 30H50M45 26l5 4-5 4M22 30V58M18 53l4 5 4-5" strokeWidth={1.1} />
      <Note x={56} y={33}>
        V-bar
      </Note>
      <Note x={22} y={72} anchor="middle">
        R-bar
      </Note>

      {/* Keep-out sphere and approach corridor */}
      <circle cx={292} cy={86} r={76} strokeDasharray="4 5" />
      <Line d="M292 101L283.2 150.4M292 101L263.4 142.7" strokeWidth={0.9} />

      {/* Target */}
      {targetPanels.map(({ outline, grid }) => (
        <g key={outline}>
          <Line className="illo-fill" d={outline} />
          <Line d={grid} strokeWidth={0.75} />
        </g>
      ))}
      <Line d="M270 84H278M314 80H322" />
      <Line className="illo-fill" d={target.side} />
      <Line className="illo-fill" d={target.top} />
      <Line className="illo-fill" d={target.front} />
      <Line d="M288 97h8v4h-8Z" />

      {/* Chaser, its estimated-position ellipse and its hopping approach */}
      <ellipse
        cx={102}
        cy={148}
        rx={32}
        ry={17}
        transform="rotate(-15 102 148)"
        strokeDasharray="3 4"
      />
      <Line className="illo-fill" d={chaserPanel.outline} />
      <Line d={chaserPanel.grid} strokeWidth={0.75} />
      <Line d="M84 150H91" />
      <Line className="illo-fill" d={chaser.side} />
      <Line className="illo-fill" d={chaser.top} />
      <Line className="illo-fill" d={chaser.front} />
      <path
        d="M114 140C130 108 160 108 172 136C184 112 212 112 222 138C232 120 252 122 258 140L274 148"
        strokeDasharray="4 4"
      />
    </Svg>
  );
}
