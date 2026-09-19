import { ImageResponse } from "next/og";

import { getDictionary, profile } from "~/content";
import { defaultLocale, isLocale, locales } from "~/i18n/config";

// Preview shown when the site is shared on LinkedIn, WhatsApp, Slack…

export const alt = "Júlia Soler";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const navy = "#253551";
const ink = "#101114";
const muted = "#5b606b";

/** Work Sans from Google Fonts, trimmed to the characters used. `null` falls back to the default font. */
async function loadWorkSans(weight: 500 | 700, text: string) {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Work+Sans:wght@${weight}&text=${encodeURIComponent(text)}`,
    ).then((response) => response.text());
    const url = /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/.exec(css)?.[1];
    if (!url) return null;
    const font = await fetch(url);
    return font.ok ? await font.arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { meta } = getDictionary(isLocale(locale) ? locale : defaultLocale);

  const text = `PORTFOLIO${profile.shortName}${meta.ogRole}${meta.ogTagline}`;
  const [bold, medium] = await Promise.all([loadWorkSans(700, text), loadWorkSans(500, text)]);
  const fonts = [
    ...(bold ? [{ name: "Work Sans", data: bold, weight: 700 as const }] : []),
    ...(medium ? [{ name: "Work Sans", data: medium, weight: 500 as const }] : []),
  ];

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        background: "#ffffff",
        fontFamily: "Work Sans",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
        <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: 6, color: muted }}>
          PORTFOLIO
        </div>
        <div
          style={{ marginTop: 28, fontSize: 104, fontWeight: 700, letterSpacing: -3, color: ink }}
        >
          {profile.shortName}
        </div>
        <div
          style={{ marginTop: 4, fontSize: 56, fontWeight: 700, letterSpacing: -1, color: navy }}
        >
          {meta.ogRole}
        </div>
        <div style={{ marginTop: 36, fontSize: 28, fontWeight: 500, color: muted }}>
          {meta.ogTagline}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 380,
          height: 470,
          borderRadius: "72px 0",
          background: navy,
        }}
      >
        <svg width="340" height="238" viewBox="0 0 200 140">
          <g transform="rotate(-16 100 70)" fill="none" stroke="#ffffff" strokeWidth="2">
            <path d="M12 70A88 20.5 0 0 1 188 70" />
            <circle cx="100" cy="70" r="34" fill={navy} />
            <path
              d="M69 48Q100 53 131 48M68 59Q100 64 132 59M66 73Q100 78 134 73"
              strokeWidth="1.4"
            />
            <path
              d="M12 70A88 20.5 0 0 0 188 70L157 70A57 12.5 0 0 1 43 70Z"
              fill={navy}
              stroke="none"
            />
            <path d="M12 70A88 20.5 0 0 0 188 70" />
            <path d="M43 70A57 12.5 0 0 0 157 70" />
          </g>
        </svg>
      </div>
    </div>,
    { ...size, fonts },
  );
}
