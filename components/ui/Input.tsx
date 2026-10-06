import { useId, type ComponentProps, type ReactNode } from "react";
import { cn } from "./cn";

type FieldProps = { label: string; error?: string; helper?: string };

const fieldBox =
  "w-full rounded-[12px] border bg-white px-3.5 font-sans text-[15px] text-strong placeholder:text-ink-400 outline-none transition-[border-color,box-shadow] duration-100 focus:border-lake-700 focus:ring-[3px] focus:ring-lake-100 focus-visible:outline-none disabled:bg-sunken";

function FieldShell({ id, label, error, helper, children }: FieldProps & { id: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[13px] font-semibold text-strong">
        {label}
      </label>
      {children}
      {(error || helper) && (
        <p id={`${id}-msg`} className={cn("text-[12.5px]", error ? "text-negative-500" : "text-muted")}>
          {error || helper}
        </p>
      )}
    </div>
  );
}

export function Input({ label, error, helper, className, id, ...props }: FieldProps & ComponentProps<"input">) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <FieldShell id={fieldId} label={label} error={error} helper={helper}>
      <input
        id={fieldId}
        aria-invalid={error ? true : undefined}
        aria-describedby={error || helper ? `${fieldId}-msg` : undefined}
        className={cn(fieldBox, "h-12", error ? "border-negative-500" : "border-default", className)}
        {...props}
      />
    </FieldShell>
  );
}

export function Textarea({ label, error, helper, className, id, ...props }: FieldProps & ComponentProps<"textarea">) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <FieldShell id={fieldId} label={label} error={error} helper={helper}>
      <textarea
        id={fieldId}
        aria-invalid={error ? true : undefined}
        aria-describedby={error || helper ? `${fieldId}-msg` : undefined}
        className={cn(fieldBox, "min-h-24 resize-y py-3 leading-relaxed", error ? "border-negative-500" : "border-default", className)}
        {...props}
      />
    </FieldShell>
  );
}
