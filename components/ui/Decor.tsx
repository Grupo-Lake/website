import { cn } from "./cn";

/** Motivo "ripple" da marca: círculos concêntricos de baixa opacidade. */
export function Ripple({
  size,
  radii,
  stroke = "#7CC9B6",
  className,
}: {
  size: number;
  radii: number[];
  stroke?: string;
  className?: string;
}) {
  const c = size / 2;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none absolute max-w-none", className)}
    >
      {radii.map((r) => (
        <circle key={r} cx={c} cy={c} r={r} fill="none" stroke={stroke} strokeWidth="1.5" />
      ))}
    </svg>
  );
}

type PlaceholderTone = "lake" | "ink" | "paper" | "dark";

const toneClasses: Record<PlaceholderTone, string> = {
  lake: "bg-stripes-lake border-subtle text-muted",
  ink: "bg-stripes-ink border-subtle text-muted",
  paper: "bg-stripes-paper border-subtle text-muted",
  dark: "bg-stripes-dark border-white/12 text-on-dark-muted",
};

/**
 * Espaço reservado para foto/screenshot (textura listrada do mockup).
 * Quando houver imagem real, substitua por next/image mantendo as mesmas dimensões.
 */
export function Placeholder({
  label,
  tone = "lake",
  className,
}: {
  label: string;
  tone?: PlaceholderTone;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex items-center justify-center border px-4 text-center font-mono text-[11px] uppercase tracking-[.1em] sm:text-[12px]",
        toneClasses[tone],
        className,
      )}
    >
      <span aria-hidden="true">{label}</span>
    </div>
  );
}

export function LakeMark({ size = 28, light }: { size?: number; light?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true" focusable="false">
      <circle cx="20" cy="20" r="19" fill={light ? "#EDF7F3" : "#0A4D43"} />
      <path
        d="M9 22.5c2.4 1.8 4.2 1.8 6.6 0s4.2-1.8 6.6 0 4.2 1.8 6.6 0"
        stroke={light ? "#0C6052" : "#7CC9B6"}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M9 16c2.4 1.8 4.2 1.8 6.6 0s4.2-1.8 6.6 0 4.2 1.8 6.6 0"
        stroke={light ? "#0A4D43" : "#EDF7F3"}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Logotipo: marca + "Lake" + pílula "GRUPO". */
export function Logo({ dark }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LakeMark size={dark ? 30 : 28} light={dark} />
      <span
        className={cn(
          "font-display font-semibold tracking-[-0.01em]",
          dark ? "text-[24px] font-normal text-on-dark" : "text-[22px] text-strong",
        )}
      >
        Lake
      </span>
      <span
        className={cn(
          "rounded-full border px-[7px] py-[2px] font-mono text-[10px] tracking-[.16em]",
          dark ? "border-lake-300/40 text-lake-300" : "border-lake-200 text-lake-700",
        )}
      >
        GRUPO
      </span>
    </span>
  );
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
