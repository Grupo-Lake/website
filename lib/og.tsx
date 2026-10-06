import { ImageResponse } from "next/og";
import type { EmText } from "@/components/ui/Typography";

const markSvg = (light = false) =>
  `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19" fill="${light ? "#EDF7F3" : "#0A4D43"}"/><path d="M9 22.5c2.4 1.8 4.2 1.8 6.6 0s4.2-1.8 6.6 0 4.2 1.8 6.6 0" stroke="${light ? "#0C6052" : "#7CC9B6"}" stroke-width="2.2" stroke-linecap="round"/><path d="M9 16c2.4 1.8 4.2 1.8 6.6 0s4.2-1.8 6.6 0 4.2 1.8 6.6 0" stroke="${light ? "#0A4D43" : "#EDF7F3"}" stroke-width="2.2" stroke-linecap="round"/></svg>`;

export const markDataUri = (light = false) => `data:image/svg+xml;base64,${Buffer.from(markSvg(light)).toString("base64")}`;

/** Ícone quadrado (apple-icon / PWA): marca sobre fundo lake. */
export function brandIcon(size: number) {
  const inner = Math.round(size * 0.72);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0A4D43" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markDataUri()} width={inner} height={inner} alt="" />
      </div>
    ),
    { width: size, height: size },
  );
}

/** Busca um subset da Newsreader no Google Fonts para o OG; cai no fallback se offline. */
async function loadDisplayFont(text: string, italic = false): Promise<ArrayBuffer | null> {
  try {
    const family = italic ? "Newsreader:ital,wght@1,500" : "Newsreader:wght@500";
    const css = await fetch(`https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`, {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)" },
    }).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype|woff)'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export const ogSize = { width: 1200, height: 630 };

export async function ogImage({ eyebrow, title }: { eyebrow: string; title: EmText }) {
  const all = `${title.a} ${title.b}`;
  const [regular, italic] = await Promise.all([loadDisplayFont(all), loadDisplayFont(title.em, true)]);
  const fonts = [
    regular && { name: "Newsreader", data: regular, weight: 500 as const, style: "normal" as const },
    italic && { name: "Newsreader", data: italic, weight: 500 as const, style: "italic" as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; weight: 500; style: "normal" | "italic" }[];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0C1512",
          color: "#EDF1EC",
          position: "relative",
          fontFamily: fonts.length ? "Newsreader" : "serif",
        }}
      >
        <svg width="900" height="900" viewBox="0 0 900 900" style={{ position: "absolute", right: -260, top: -240, opacity: 0.16 }}>
          {[120, 220, 320, 420].map((r) => (
            <circle key={r} cx="450" cy="450" r={r} fill="none" stroke="#7CC9B6" strokeWidth="2" />
          ))}
        </svg>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markDataUri(true)} width={52} height={52} alt="" />
          <span style={{ fontSize: 40 }}>Lake</span>
          <span
            style={{
              fontSize: 15,
              letterSpacing: 4,
              color: "#7CC9B6",
              border: "1.5px solid rgba(124,201,182,.5)",
              borderRadius: 999,
              padding: "4px 12px",
              fontFamily: "monospace",
            }}
          >
            GRUPO
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <span style={{ fontSize: 20, letterSpacing: 4, textTransform: "uppercase", color: "#7CC9B6", fontFamily: "monospace" }}>
            {eyebrow}
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", marginTop: 24, fontSize: 76, lineHeight: 1.05, letterSpacing: -2 }}>
            <span>{title.a}&nbsp;</span>
            <span style={{ fontStyle: "italic", color: "#7CC9B6" }}>{title.em}</span>
            <span>{/^[.,!?]/.test(title.b) ? title.b : ` ${title.b}`}</span>
          </div>
        </div>
        <div style={{ display: "flex", height: 6, width: 160, background: "#FF5A3C", borderRadius: 999 }} />
      </div>
    ),
    { ...ogSize, fonts: fonts.length ? fonts : undefined },
  );
}
