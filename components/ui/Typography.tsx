import type { ComponentProps, ElementType, ReactNode } from "react";
import { cn } from "./cn";

export type EmText = { a: string; em: string; b: string };

/** Renderiza "a <em>em</em> b" com o itálico serifado da marca. */
export function EmTitle({ text, emClassName = "text-lake-700" }: { text: EmText; emClassName?: string }) {
  const tight = /^[.,!?”]/.test(text.b);
  return (
    <>
      {text.a} <em className={cn("italic", emClassName)}>{text.em}</em>
      {tight ? "" : " "}
      {text.b}
    </>
  );
}

export function Eyebrow({
  children,
  className,
  id,
  as: As = "p",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: ElementType;
}) {
  return (
    <As id={id} className={cn("font-mono text-[12px] uppercase tracking-[.14em] text-muted", className)}>
      {children}
    </As>
  );
}

type HeadingSize = "hero" | "xl" | "l2" | "lg" | "md";

const headingSizes: Record<HeadingSize, string> = {
  /* h1 dos heros */
  hero: "text-[clamp(40px,7vw,90px)] leading-[1.02] tracking-[-0.025em]",
  /* h2 principais (O grupo, Portfólio) */
  xl: "text-[clamp(34px,4.4vw,56px)] leading-[1.05] tracking-[-0.02em]",
  /* h2 das páginas internas (Serviços, Processo, Valores) */
  l2: "text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.02em]",
  /* h2 secundários (Cases, Governança, Imprensa) */
  lg: "text-[clamp(30px,3.6vw,46px)] leading-[1.07] tracking-[-0.02em]",
  md: "text-[clamp(28px,3vw,38px)] leading-[1.1] tracking-[-0.015em]",
};

export function Heading({
  as: As = "h2",
  size = "xl",
  className,
  ...props
}: { as?: ElementType; size?: HeadingSize } & ComponentProps<"h2">) {
  return (
    <As
      className={cn("font-display font-medium text-balance", headingSizes[size], className)}
      {...props}
    />
  );
}

export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1200px]", className)} {...props} />;
}
