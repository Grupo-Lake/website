import type { ReactNode } from "react";
import { cn } from "./cn";

export type BadgeTone = "neutral" | "positive" | "negative" | "warning" | "info" | "brand" | "accent";

const tones: Record<BadgeTone, { box: string; dot: string }> = {
  neutral: { box: "bg-ink-100 text-ink-700", dot: "bg-ink-400" },
  positive: { box: "bg-positive-100 text-positive-600", dot: "bg-positive-500" },
  negative: { box: "bg-negative-100 text-negative-600", dot: "bg-negative-500" },
  warning: { box: "bg-warning-100 text-warning-600", dot: "bg-warning-500" },
  info: { box: "bg-info-100 text-info-600", dot: "bg-info-500" },
  brand: { box: "bg-lake-100 text-lake-700", dot: "bg-lake-500" },
  accent: { box: "bg-coral-100 text-coral-800", dot: "bg-coral-500" },
};

export function Badge({
  tone = "neutral",
  size = "md",
  dot,
  className,
  children,
}: {
  tone?: BadgeTone | string;
  size?: "sm" | "md";
  dot?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const t = tones[tone as BadgeTone] ?? tones.neutral;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full font-sans font-semibold tracking-[.01em]",
        size === "sm" ? "h-5 px-2 text-[11px]" : "h-6 px-2.5 text-[12.5px]",
        t.box,
        className,
      )}
    >
      {dot && <span className={cn("size-1.5 rounded-full", t.dot)} aria-hidden="true" />}
      {children}
    </span>
  );
}
