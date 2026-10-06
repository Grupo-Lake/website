"use client";

import { cn } from "./cn";

/**
 * Grupo de pílulas de seleção única (filtros, assunto, tipo de projeto).
 * `scroll` mantém tudo em uma linha rolável no mobile, com scroll-snap.
 */
export function Pills({
  options,
  value,
  onChange,
  label,
  size = "md",
  scroll,
  name,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label: string;
  size?: "md" | "lg";
  scroll?: boolean;
  /** Quando presente, envia o valor selecionado junto do formulário. */
  name?: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn(
        "flex gap-2",
        scroll
          ? "no-scrollbar -mx-6 snap-x scroll-px-6 overflow-x-auto px-6 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
          : "flex-wrap",
      )}
    >
      {name && <input type="hidden" name={name} value={value} />}
      {options.map((option) => {
        const on = option === value;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(option)}
            className={cn(
              "flex-none snap-start cursor-pointer whitespace-nowrap rounded-full border font-sans font-semibold transition-colors duration-150",
              size === "lg" ? "h-[38px] px-4 text-[14px]" : "h-9 px-3.5 text-[13.5px]",
              on
                ? "border-lake-700 bg-lake-700 text-on-brand"
                : "border-default bg-white text-body hover:border-lake-300 hover:bg-lake-50",
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
