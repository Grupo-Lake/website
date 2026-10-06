import type { Metadata } from "next";
import { lang as rootLang } from "next/root-params";
import { defaultLocale, hasLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { ButtonLink } from "@/components/ui/Button";
import { Ripple } from "@/components/ui/Decor";

export const metadata: Metadata = { title: "404", robots: { index: false, follow: true } };

export default async function NotFound() {
  const value = await rootLang();
  const lang = value && hasLocale(value) ? value : defaultLocale;
  const dict = await getDictionary(lang);
  return (
    <section className="relative flex min-h-[70dvh] items-center overflow-hidden bg-ink-900 px-6 py-24 text-on-dark">
      <Ripple size={760} radii={[110, 200, 290, 370]} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
      <div className="relative mx-auto max-w-[640px] text-center">
        <p className="font-mono text-[12px] tracking-[.16em] text-lake-300">404</p>
        <h1 className="mt-4 font-display text-[clamp(36px,5vw,56px)] leading-[1.05] font-medium tracking-[-0.02em]">
          {dict.meta.notFound.title}
        </h1>
        <p className="mt-4 text-[17px] text-on-dark-muted">{dict.common.notFoundText}</p>
        <ButtonLink href={`/${lang}`} variant="accent" size="lg" className="mt-8">
          {dict.common.backHome}
        </ButtonLink>
      </div>
    </section>
  );
}
