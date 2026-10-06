import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/pt";
import { site } from "@/lib/content/site";

/**
 * Página jurídica simples. Os textos em dicionário são uma base inicial e
 * DEVEM passar por revisão jurídica antes do lançamento.
 */
export function LegalPage({
  lang,
  dict,
  doc,
  email,
}: {
  lang: Locale;
  dict: Dictionary;
  doc: Dictionary["legal"]["privacy"] | Dictionary["legal"]["terms"];
  email: string;
}) {
  const updated = new Date(`${site.lastModified}T12:00:00`).toLocaleDateString(lang === "pt" ? "pt-BR" : "en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <article className="px-6 py-[clamp(64px,8vw,96px)]">
      <div className="mx-auto max-w-[760px]">
        <h1 className="font-display text-[clamp(36px,5vw,56px)] leading-[1.05] font-medium tracking-[-0.02em] text-strong">
          {doc.title}
        </h1>
        <p className="mt-3 font-mono text-[12px] uppercase tracking-[.12em] text-muted">
          {dict.legal.updated}: <time dateTime={site.lastModified}>{updated}</time>
        </p>
        <p data-speakable className="mt-8 text-[18px] leading-[1.65] text-pretty">
          {doc.intro}
        </p>
        {doc.sections.map((s) => (
          <section key={s.h} className="mt-10">
            <h2 className="font-display text-[26px] leading-[1.2] text-strong">{s.h}</h2>
            {s.p.map((p) => (
              <p key={p} className="mt-3 text-[16px] leading-[1.7] text-pretty">
                {p}
              </p>
            ))}
          </section>
        ))}
        <p className="mt-12 border-t border-subtle pt-6 text-[16px]">
          {doc.contact}{" "}
          <a href={`mailto:${email}`} className="font-semibold">
            {email}
          </a>
          .
        </p>
      </div>
    </article>
  );
}
