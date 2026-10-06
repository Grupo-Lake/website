import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "./cn";

export type ButtonVariant = "primary" | "accent" | "secondary" | "ghost" | "outline-dark";
export type ButtonSize = "sm" | "md" | "lg";

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-[14px] rounded-[10px] gap-[7px]",
  md: "h-11 px-5 text-[15px] rounded-[12px] gap-2",
  lg: "h-[54px] px-7 text-[17px] rounded-[14px] gap-2.5",
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-lake-700 text-on-brand border-transparent hover:bg-lake-600 hover:text-on-brand",
  accent: "bg-coral-cta text-white border-transparent hover:bg-coral-700 hover:text-white",
  secondary: "bg-white text-strong border-default hover:bg-sunken hover:text-strong",
  ghost: "bg-transparent text-lake-700 border-transparent hover:bg-lake-50",
  /* Botão contornado sobre fundos escuros (hero) */
  "outline-dark": "bg-transparent text-on-dark border-white/25 hover:bg-white/10 hover:text-on-dark",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  full,
  className,
}: { variant?: ButtonVariant; size?: ButtonSize; full?: boolean; className?: string } = {}) {
  return cn(
    "inline-flex items-center justify-center whitespace-nowrap border font-sans font-semibold tracking-[-0.005em]",
    "transition-[background-color,color,transform] duration-150 ease-out active:translate-y-px",
    "disabled:cursor-not-allowed disabled:opacity-45 disabled:active:translate-y-0",
    sizes[size],
    variants[variant],
    full && "w-full",
    className,
  );
}

type Common = { variant?: ButtonVariant; size?: ButtonSize; full?: boolean };

export function Button({ variant, size, full, className, type = "button", ...props }: Common & ComponentProps<"button">) {
  return <button type={type} className={buttonClasses({ variant, size, full, className })} {...props} />;
}

export function ButtonLink({ variant, size, full, className, ...props }: Common & ComponentProps<typeof Link>) {
  return <Link className={buttonClasses({ variant, size, full, className })} {...props} />;
}
