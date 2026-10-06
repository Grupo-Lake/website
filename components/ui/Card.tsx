import type { ComponentProps } from "react";
import { cn } from "./cn";

export function Card({ interactive, className, ...props }: { interactive?: boolean } & ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-lg border border-subtle bg-white text-body shadow-sm",
        interactive && "transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-md",
        className,
      )}
      {...props}
    />
  );
}
