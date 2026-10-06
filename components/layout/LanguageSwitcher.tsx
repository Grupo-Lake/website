"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { htmlLang, locales, LOCALE_COOKIE, type Locale } from "@/lib/i18n/config";
import { switchLocalePath } from "@/lib/routes";
import { cn } from "@/components/ui/cn";

export function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname();
  return (
    <div role="group" aria-label={label} className="flex rounded-full border border-default p-0.5 font-mono text-[11px] tracking-[.06em]">
      {locales.map((l) => {
        const on = l === lang;
        return (
          <Link
            key={l}
            href={switchLocalePath(pathname, l)}
            hrefLang={htmlLang[l]}
            lang={htmlLang[l]}
            aria-current={on ? "true" : undefined}
            onClick={() => {
              document.cookie = `${LOCALE_COOKIE}=${l}; path=/; max-age=31536000; samesite=lax`;
            }}
            className={cn(
              "flex h-7 min-w-9 items-center justify-center rounded-full px-2 uppercase transition-colors",
              on ? "bg-ink-900 text-paper hover:text-paper" : "text-muted hover:text-strong",
            )}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}
