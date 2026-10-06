import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/pt";
import { site } from "@/lib/content/site";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Ripple } from "@/components/ui/Decor";
import { Container, EmTitle, Eyebrow, Heading } from "@/components/ui/Typography";
import { BriefingForm } from "@/components/forms/Forms";
import { formText } from "@/components/forms/formText";
import { BrowserFrame } from "./home";

type Props = { lang: Locale; dict: Dictionary };

const sectionY = "py-[clamp(80px,10vw,120px)]";

export function SoftwareHero({ dict }: Props) {
  const h = dict.software.hero;
  return (
    <section
      aria-labelledby="sw-hero-title"
      className="relative overflow-hidden bg-grad-dusk px-6 pt-[clamp(72px,10vw,128px)] pb-[clamp(72px,9vw,112px)] text-on-dark"
    >
      <Ripple size={900} radii={[120, 220, 320, 420]} stroke="#B0E0D2" className="top-[-240px] right-[-260px] opacity-[.14]" />
      <Container className="relative">
        <p className="font-mono text-[12px] uppercase tracking-[.16em] text-lake-200">{h.eyebrow}</p>
        <h1
          id="sw-hero-title"
          className="mt-5 max-w-[960px] font-display text-[clamp(40px,6.6vw,86px)] leading-[1.02] font-medium tracking-[-0.025em] text-balance"
        >
          <EmTitle text={h.title} emClassName="text-lake-200" />
        </h1>
        <p data-speakable className="mt-6 max-w-[620px] text-[clamp(17px,1.5vw,20px)] leading-[1.6] text-on-dark-muted">
          {h.lead}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#contato" variant="accent" size="lg">
            {h.ctaPrimary}
          </ButtonLink>
          <ButtonLink href="#cases" variant="outline-dark" size="lg" className="border-white/28 px-[26px]">
            {h.ctaSecondary}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export function SoftwareServices({ dict }: Props) {
  const s = dict.software.services;
  return (
    <section id="servicos" aria-labelledby="servicos-title" className={`px-6 ${sectionY}`}>
      <Container>
        <div className="grid items-end gap-x-14 gap-y-6 md:grid-cols-2">
          <div>
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <Heading id="servicos-title" size="l2" className="mt-3.5 text-strong">
              {s.title}
            </Heading>
          </div>
          <p className="max-w-[520px] text-[17px] leading-[1.65]">{s.lead}</p>
        </div>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {s.items.map((item) => (
            <li key={item.t}>
              <Card interactive className="h-full p-[30px]">
                <span className="flex size-12 items-center justify-center rounded-[14px] bg-lake-50 text-lake-700">
                  <Icon name={item.icon} size={22} />
                </span>
                <h3 className="mt-[22px] font-display text-[24px] text-strong">{item.t}</h3>
                <p className="mt-2 text-[15px] leading-[1.6]">{item.d}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function SoftwareProcess({ dict }: Props) {
  const p = dict.software.process;
  return (
    <section id="processo" aria-labelledby="processo-title" className={`bg-ink-900 px-6 text-on-dark ${sectionY}`}>
      <Container>
        <p className="font-mono text-[12px] uppercase tracking-[.14em] text-lake-300">{p.eyebrow}</p>
        <Heading id="processo-title" size="l2" className="mt-3.5">
          {p.title}
        </Heading>
        <ol className="mt-14 grid border-t border-white/14 sm:grid-cols-2 lg:grid-cols-5">
          {p.steps.map((step, i) => (
            <li
              key={step.t}
              className="group border-b border-white/10 px-[22px] pt-7 pb-8 transition-colors duration-150 hover:bg-lake-300/10 sm:border-r sm:border-r-white/8"
            >
              <span className="font-mono text-[12px] tracking-[.12em] text-lake-300 transition-colors group-hover:text-coral-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3.5 font-display text-[24px]">{step.t}</h3>
              <p className="mt-2 text-[14.5px] leading-[1.55] text-on-dark-muted">{step.d}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function SoftwareCases({ dict }: Props) {
  const c = dict.software.cases;
  const urls: Record<string, string> = {
    lakeFinance: site.portfolio.lakeFinance,
    haze: site.portfolio.haze,
    ...site.cases,
  };
  return (
    <section id="cases" aria-labelledby="sw-cases-title" className={`px-6 ${sectionY}`}>
      <Container>
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <Heading id="sw-cases-title" size="lg" className="mt-3.5 text-strong">
          {c.title}
        </Heading>
        <ul className="mt-12 flex flex-col gap-14">
          {c.items.map((item) => (
            <li key={item.key}>
              <article className="grid items-center gap-9 md:grid-cols-2">
                <BrowserFrame domain={item.domain} label={item.img} className="shadow-sm" />
                <div>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} tone="brand" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="mt-4 font-display text-[clamp(28px,3vw,38px)] tracking-[-0.01em] text-strong">{item.name}</h3>
                  <p className="mt-2.5 max-w-[480px] text-[16.5px] leading-[1.65] text-pretty">{item.desc}</p>
                  <a
                    href={urls[item.key]}
                    target="_blank"
                    rel="noopener"
                    className="mt-[18px] inline-flex min-h-11 items-center gap-1.5 font-semibold"
                  >
                    {item.cta} <span className="sr-only">{item.name} {dict.common.opensInNewTab}</span>
                    <Icon name="arrow-up-right" size={16} />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function SoftwareWhy({ dict }: Props) {
  const w = dict.software.why;
  return (
    <section aria-labelledby="why-title" className="bg-sunken px-6 py-[clamp(80px,10vw,112px)]">
      <Container>
        <h2 id="why-title" className="sr-only">
          {w.title}
        </h2>
        <ul className="grid gap-8 md:grid-cols-3">
          {w.items.map((item) => (
            <li key={item.t} className="border-t-2 border-lake-700 pt-[22px]">
              <h3 className="font-display text-[24px] text-strong">{item.t}</h3>
              <p className="mt-2.5 text-[15.5px] leading-[1.65]">{item.d}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function SoftwareContact({ lang, dict }: Props) {
  const c = dict.software.contact;
  return (
    <section id="contato" aria-labelledby="sw-contato-title" className="px-6 py-[clamp(88px,11vw,128px)]">
      <Container className="grid items-start gap-12 md:grid-cols-2">
        <div>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2
            id="sw-contato-title"
            className="mt-4 font-display text-[clamp(36px,5vw,60px)] leading-[1.03] font-medium tracking-[-0.025em] text-balance text-strong"
          >
            <EmTitle text={c.title} />
          </h2>
          <p className="mt-[18px] max-w-[440px] text-[17px] leading-[1.6]">{c.lead}</p>
          <a
            href={`mailto:${site.emails.contact}`}
            className="mt-8 flex min-h-11 items-center gap-3 text-[15px] text-body hover:text-lake-700"
          >
            <Icon name="mail" size={18} className="text-lake-700" />
            {site.emails.contact}
          </a>
        </div>
        <BriefingForm lang={lang} t={formText(dict)} c={dict.software.contact} />
      </Container>
    </section>
  );
}
