"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/pt";
import { href, routes } from "@/lib/routes";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Decor";
import { cn } from "@/components/ui/cn";
import { LanguageSwitcher } from "./LanguageSwitcher";

type NavKey = keyof Dictionary["nav"]["links"];

export function Header({ lang, nav }: { lang: Locale; nav: Dictionary["nav"] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const links: { key: NavKey; href: string }[] = [
    { key: "grupo", href: href(lang, "home", "grupo") },
    { key: "software", href: href(lang, "software") },
    { key: "portfolio", href: href(lang, "home", "portfolio") },
    { key: "carreiras", href: href(lang, "careers") },
    { key: "imprensa", href: href(lang, "home", "imprensa") },
  ];

  const sub = pathname.replace(/^\/(pt|en)/, "");
  const active: NavKey | null =
    sub === routes.software
      ? "software"
      : sub === routes.careers
        ? "carreiras"
        : sub === "" || sub === "/"
          ? "grupo"
          : null;

  // Fecha o menu ao navegar (ajuste de estado durante o render, sem efeito)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Esc fecha, trava o scroll e move o foco para o painel
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth > 980 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-subtle bg-paper/90 backdrop-blur-[14px] supports-[backdrop-filter]:bg-paper/[.88]">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-5 px-4 sm:px-6">
          <Link
            href={`/${lang}`}
            className="flex items-center rounded-md text-strong hover:text-strong"
          >
            <Logo />
            <span className="sr-only"> — {nav.homeLabel}</span>
          </Link>

          <nav aria-label={nav.mainNav} className="hidden nav:block">
            <ul className="flex gap-6 text-[13.5px] font-medium">
              {links.map((l) => (
                <li key={l.key}>
                  <Link
                    href={l.href}
                    aria-current={active === l.key ? "page" : undefined}
                    className={cn(
                      "border-b-[1.5px] py-1.5 transition-colors",
                      active === l.key
                        ? "border-lake-700 text-lake-700"
                        : "border-transparent text-body hover:border-lake-200 hover:text-lake-700",
                    )}
                  >
                    {nav.links[l.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher lang={lang} label={nav.language} />
            <span className="hidden nav:contents">
              <ButtonLink href={href(lang, "home", "contato")} size="sm">
                {nav.contact}
              </ButtonLink>
            </span>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? nav.closeMenu : nav.openMenu}
              className="flex size-11 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-[12px] border border-default bg-white nav:hidden"
            >
              {open ? (
                <X size={20} aria-hidden="true" className="text-ink-900" />
              ) : (
                <>
                  <span className="h-[1.5px] w-[18px] bg-ink-900" />
                  <span className="h-[1.5px] w-[18px] bg-ink-900" />
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto border-t border-subtle bg-paper px-6 pt-3 pb-8 nav:hidden"
      >
        <nav aria-label={nav.mainNav}>
          <ul>
            {links.map((l) => (
              <li key={l.key}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === l.key ? "page" : undefined}
                  className={cn(
                    "block border-b border-subtle py-3.5 font-display text-[26px]",
                    active === l.key ? "text-lake-700" : "text-strong",
                  )}
                >
                  {nav.links[l.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonLink
          href={href(lang, "home", "contato")}
          onClick={() => setOpen(false)}
          variant="accent"
          size="lg"
          full
          className="mt-5"
        >
          {nav.talkToGroup}
        </ButtonLink>
      </div>
    </>
  );
}
