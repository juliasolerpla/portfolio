import { Circle, Line, Note, Svg, polyline, type IllustrationProps } from "./svg";

/** Side view of a sounding rocket, drawn in an 80 × 260 box (the flame goes below). */
function RocketShape({ flame = false }: { flame?: boolean }) {
  return (
    <>
      {flame && (
        <g>
          <path d="M36 254Q40 272 44 254" strokeDasharray="2 3.5" />
          <path d="M33.5 254Q40 294 46.5 254" strokeDasharray="2 3.5" />
        </g>
      )}
      {/* Nose cone and body tube */}
      <Line className="illo-fill" d="M40 8C47 22 53 42 53 70H27C27 42 33 22 40 8Z" />
      <Line className="illo-fill" d="M27 70H53V240H27Z" />
      <Line d="M28.5 58H51.5" strokeWidth={0.8} />
      {/* Bays: payload | avionics | recovery | motor */}
      <Line d="M27 112H53M27 150H53M27 198H53" />
      {/* Avionics bay: access hatch and static-pressure vents */}
      <Line d="M33.5 121H46.5V141H33.5Z" strokeWidth={0.9} />
      <Circle cx={30.5} cy={131} r={1.3} strokeWidth={0.9} />
      <Circle cx={49.5} cy={131} r={1.3} strokeWidth={0.9} />
      {/* Roll pattern */}
      <Line d="M27 162H53M27 184H53M40 162V184" strokeWidth={0.8} />
      {/* Rail buttons */}
      <Line d="M53 92h2.5v5H53M53 212h2.5v5H53" strokeWidth={0.9} />
      {/* Fins: two in profile, one edge-on */}
      <Line className="illo-fill" d="M27 202L11 228V248L27 240Z" />
      <Line className="illo-fill" d="M53 202L69 228V248L53 240Z" />
      <Line className="illo-fill" d="M38.5 205H41.5V250H38.5Z" />
      {/* Nozzle */}
      <Line className="illo-fill" d="M34 240L32 251H48L46 240" />
    </>
  );
}

export function Rocket({ flame = false, ...props }: IllustrationProps & { flame?: boolean }) {
  return (
    <Svg viewBox={flame ? "0 0 80 300" : "0 0 80 260"} {...props}>
      <RocketShape flame={flame} />
    </Svg>
  );
}

/** Pins along one side of a chip: `pins(x, y, count, step, "down")`. */
function pins(
  x: number,
  y: number,
  count: number,
  step: number,
  direction: "up" | "down" | "left" | "right",
) {
  const length = 4;
  return Array.from({ length: count }, (_, i) => {
    const vertical = direction === "up" || direction === "down";
    const px = vertical ? x + i * step : x;
    const py = vertical ? y : y + i * step;
    const dx = direction === "left" ? -length : direction === "right" ? length : 0;
    const dy = direction === "up" ? -length : direction === "down" ? length : 0;
    return `M${px} ${py}l${dx} ${dy}`;
  }).join("");
}

/**
 * Cover for the avionics project: the rocket next to an altitude scale up to the 9 km apogee,
 * with a magnified view of its flight computer.
 */
export function RocketAvionics(props: IllustrationProps) {
  const board = { x: 204, y: 90, w: 142, h: 100 };
  return (
    <Svg viewBox="0 0 400 280" {...props}>
      {/* Altitude scale */}
      <Line d="M34 252V30" />
      <Line
        d={Array.from(
          { length: 10 },
          (_, i) => `M34 ${252 - i * 22.2}h${i % 2 === 0 ? 7 : 4}`,
        ).join("")}
        strokeWidth={0.9}
      />
      <path d="M34 30H128" strokeDasharray="3 3.5" />
      <Line d="M34 30h9" />
      <Note x={30} y={33} anchor="end">
        9 km
      </Note>
      <Note x={30} y={255} anchor="end">
        0
      </Note>

      {/* Rocket, scaled into the scene */}
      <g transform="translate(66 36) scale(0.86)">
        <RocketShape />
      </g>

      {/* Callout: avionics bay → flight computer */}
      <circle cx={100.4} cy={148.7} r={17} strokeDasharray="2.5 2.5" />
      <path d="M117 146L178 142" strokeDasharray="2.5 2.5" />
      <Note x={96} y={123} anchor="end">
        A
      </Note>
      <Circle cx={275} cy={140} r={98} className="illo-fill" />
      <Note x={275} y={258} anchor="middle">
        A
      </Note>

      {/* Flight computer board */}
      <Line
        d={`M${board.x + 6} ${board.y}h${board.w - 12}a6 6 0 0 1 6 6v${board.h - 12}a6 6 0 0 1-6 6h-${board.w - 12}a6 6 0 0 1-6-6v-${board.h - 12}a6 6 0 0 1 6-6Z`}
      />
      <Circle cx={board.x + 9} cy={board.y + 9} r={3} strokeWidth={0.9} />
      <Circle cx={board.x + board.w - 9} cy={board.y + 9} r={3} strokeWidth={0.9} />
      <Circle cx={board.x + 9} cy={board.y + board.h - 9} r={3} strokeWidth={0.9} />
      <Circle cx={board.x + board.w - 9} cy={board.y + board.h - 9} r={3} strokeWidth={0.9} />

      {/* Microcontroller */}
      <Line d="M226 122h32v32h-32Z" />
      <Circle cx={231} cy={127} r={1.4} strokeWidth={0.8} />
      <g strokeWidth={0.8}>
        <Line d={pins(229, 122, 6, 5.2, "up")} />
        <Line d={pins(229, 154, 6, 5.2, "down")} />
        <Line d={pins(226, 125, 6, 5.2, "left")} />
        <Line d={pins(258, 125, 6, 5.2, "right")} />
      </g>

      {/* IMU and barometer */}
      <Line d="M280 102h16v16h-16Z" />
      <Line d="M306 104h16v11h-16Z" />
      <g strokeWidth={0.8}>
        <Line d={pins(283, 102, 4, 3.4, "up")} />
        <Line d={pins(283, 118, 4, 3.4, "down")} />
      </g>

      {/* Radio module with its antenna trace */}
      <Line d="M296 150h30v24h-30Z" />
      <Line
        d={polyline([
          [326, 158],
          [331, 158],
          [331, 152],
          [335, 152],
          [335, 164],
          [339, 164],
          [339, 152],
          [343, 152],
        ])}
        strokeWidth={0.9}
      />

      {/* Memory card slot and connector header */}
      <Line d="M262 164h24v18h-24Z" strokeWidth={0.9} />
      <Line
        d={Array.from({ length: 6 }, (_, i) => `M${212 + i * 7} 172h5v5h-5Z`).join("")}
        strokeWidth={0.8}
      />

      {/* Traces */}
      <g strokeWidth={0.8}>
        <Line
          d={polyline([
            [264, 132],
            [272, 132],
            [276, 110],
            [280, 110],
          ])}
        />
        <Line
          d={polyline([
            [264, 137],
            [296, 137],
            [300, 127],
            [314, 127],
            [314, 115],
          ])}
        />
        <Line
          d={polyline([
            [264, 145],
            [284, 145],
            [292, 158],
            [296, 158],
          ])}
        />
        <Line
          d={polyline([
            [250, 162],
            [254, 170],
            [262, 170],
          ])}
        />
        <Line
          d={polyline([
            [232, 162],
            [232, 167],
            [228, 172],
          ])}
        />
      </g>
    </Svg>
  );
}
