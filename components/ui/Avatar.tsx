import { cn } from "./cn";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("") || "•";

export function Avatar({ name, size = 40, muted }: { name: string; size?: number; muted?: boolean }) {
  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size, fontSize: size * 0.38 }}
      className={cn(
        "inline-flex flex-none items-center justify-center overflow-hidden rounded-full font-sans font-semibold",
        muted ? "bg-ink-100 text-ink-500" : "bg-lake-100 text-lake-700",
      )}
    >
      {muted ? "•" : initials(name)}
    </span>
  );
}
