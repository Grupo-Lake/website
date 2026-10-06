import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/pt";
import { site } from "@/lib/content/site";
import { href } from "@/lib/routes";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Icon } from "@/components/ui/Icon";
import { LakeMark, Placeholder, Ripple } from "@/components/ui/Decor";
import { Container, EmTitle, Eyebrow, Heading } from "@/components/ui/Typography";
import { ContactForm } from "@/components/forms/Forms";
import { formText } from "@/components/forms/formText";

type Props = { lang: Locale; dict: Dictionary };

const sectionY = "py-[clamp(80px,10vw,120px)]";

export function HomeHero({ lang, dict }: Props) {
  const h = dict.home.hero;
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-ink-900 px-6 pt-[clamp(72px,11vw,136px)] text-center text-on-dark"
    >
      <Ripple size={1100} radii={[140, 240, 340, 440, 540]} className="top-[-200px] left-1/2 -translate-x-1/2 opacity-[.12]" />
      <div className="relative mx-auto max-w-[980px]">
        <p className="font-mono text-[11px] uppercase tracking-[.16em] text-lake-300 sm:text-[12px]">{h.eyebrow}</p>
        <h1
          id="hero-title"
          className="mt-[22px] font-display text-[clamp(40px,7vw,90px)] leading-[1.02] font-medium tracking-[-0.025em] text-balance"
        >
          <EmTitle text={h.title} emClassName="text-lake-300" />
        </h1>
        <p data-speakable className="mx-auto mt-7 max-w-[680px] text-[clamp(17px,1.5vw,20px)] leading-[1.6] text-pretty text-on-dark-muted">
          {h.lead}
        </p>
        <div className="mt-[38px] flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="#grupo" variant="accent" size="lg">
            {h.ctaPrimary}
          </ButtonLink>
          <ButtonLink href={href(lang, "software")} variant="outline-dark" size="lg" className="gap-2 px-[26px]">
            {h.ctaSecondary} <Icon name="arrow-up-right" size={18} />
          </ButtonLink>
        </div>
      </div>
      <Placeholder
        label={h.media}
        tone="dark"
        className="relative mx-auto mt-[clamp(56px,7vw,88px)] h-[clamp(200px,28vw,340px)] max-w-[880px] rounded-t-[24px] border-b-0"
      />
    </section>
  );
}

export function HomeStats({ dict }: Props) {
  const s = dict.home.stats;
  const items = [
    { v: site.stats.products, l: s.products },
    { v: site.stats.companies, l: s.companies },
    { v: site.stats.revenue, l: s.revenue },
    { v: site.stats.founded, l: s.founded },
  ];
  return (
    <section aria-label={s.label} className="bg-grad-lake px-6 py-14 text-on-dark">
      <dl className="mx-auto grid max-w-[1100px] grid-cols-2 gap-7 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.l} className="flex flex-col-reverse border-l border-white/18 pl-4">
            <dt className="mt-1.5 text-[14px] text-on-dark-muted">{item.l}</dt>
            <dd className="font-mono text-[clamp(28px,3vw,38px)] font-medium tabular-nums">{item.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function HomeGroup({ lang, dict }: Props) {
  const g = dict.home.group;
  return (
    <section id="grupo" aria-labelledby="grupo-title" className={`${sectionY} px-6`}>
      <Container>
        <div className="grid items-start gap-x-14 gap-y-10 md:grid-cols-2">
          <div>
            <Eyebrow>{g.eyebrow}</Eyebrow>
            <Heading id="grupo-title" className="mt-4 text-strong">
              <EmTitle text={g.title} />
            </Heading>
          </div>
          <div data-speakable className="flex max-w-[560px] flex-col gap-[18px] text-[17px] leading-[1.7] text-pretty">
            <p>{g.p1}</p>
            <p>{g.p2}</p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <article
            id="software"
            className="relative grid items-center gap-9 overflow-hidden rounded-xl bg-grad-dusk p-[clamp(28px,5vw,56px)] text-on-dark md:col-span-2 md:grid-cols-2"
          >
            <Ripple size={520} radii={[80, 150, 220]} stroke="#B0E0D2" className="right-[-120px] bottom-[-160px] opacity-[.14]" />
            <div className="relative">
              <p className="font-mono text-[12px] uppercase tracking-[.14em] text-lake-200">{g.software.eyebrow}</p>
              <h3 className="mt-3.5 font-display text-[clamp(32px,3.6vw,48px)] leading-[1.05] font-medium tracking-[-0.02em]">
                {g.software.title}
              </h3>
              <p className="mt-4 max-w-[460px] text-[17px] leading-[1.6] text-on-dark-muted">{g.software.desc}</p>
              <Link
                href={href(lang, "software")}
                className="mt-[22px] inline-flex min-h-11 items-center gap-1.5 font-semibold text-lake-200 hover:text-white"
              >
                {g.software.cta} <Icon name="chevron-right" size={16} />
              </Link>
            </div>
            <ul className="relative grid grid-cols-2 gap-3">
              {g.software.caps.map((c) => (
                <li key={c.t} className="rounded-[16px] border border-white/12 bg-white/8 p-[18px]">
                  <Icon name={c.icon} className="text-lake-200" />
                  <p className="mt-3 font-semibold">{c.t}</p>
                </li>
              ))}
            </ul>
          </article>

          {[
            { ...g.invest, icon: "landmark" },
            { ...g.accel, icon: "trending-up" },
          ].map((item) => (
            <Card key={item.title} interactive className="p-7 sm:p-9">
              <span className="flex size-12 items-center justify-center rounded-[14px] bg-lake-50 text-lake-700">
                <Icon name={item.icon} size={22} />
              </span>
              <p className="mt-7 font-mono text-[11.5px] tracking-[.14em] text-muted">{item.n}</p>
              <h3 className="mt-1.5 font-display text-[28px] text-strong">{item.title}</h3>
              <p className="mt-2.5 text-[15.5px] leading-[1.6]">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function HomePortfolio({ dict }: Props) {
  const p = dict.home.portfolio;
  const lf = p.lakeFinance;
  const partnerUrls = { tripSide: site.portfolio.tripSide, haze: site.portfolio.haze } as Record<string, string>;
  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className={`bg-sunken px-6 ${sectionY}`}>
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          <Eyebrow>{p.eyebrow}</Eyebrow>
          <Heading id="portfolio-title" className="mt-4 text-strong">
            {p.title}
          </Heading>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <article className="overflow-hidden rounded-xl bg-ink-900 px-[clamp(20px,4vw,48px)] pt-[clamp(40px,6vw,64px)] text-center text-on-dark md:col-span-2">
            <div className="flex items-center justify-center gap-2.5">
              <LakeMark size={30} light />
              <span className="font-display text-[26px]">{lf.name}</span>
            </div>
            <h3 className="mt-[18px] font-display text-[clamp(30px,4vw,52px)] leading-[1.05] font-medium tracking-[-0.02em] text-balance">
              <EmTitle text={lf.title} emClassName="text-lake-300" />
            </h3>
            <p className="mx-auto mt-3.5 max-w-[540px] text-[17px] leading-[1.55] text-on-dark-muted">{lf.desc}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-[22px] gap-y-2 text-[16px] font-semibold">
              <a
                href={site.portfolio.lakeFinance}
                target="_blank"
                rel="noopener"
                className="inline-flex min-h-11 items-center gap-1.5 text-lake-300 hover:text-white"
              >
                {lf.cta} <Icon name="chevron-right" size={16} />
                <span className="sr-only">{dict.common.opensInNewTab}</span>
              </a>
              <span className="font-mono text-[12px] uppercase tracking-[.1em] text-on-dark-muted">{lf.status}</span>
            </div>
            <Placeholder
              label={lf.shot}
              tone="dark"
              className="mx-auto mt-12 h-[clamp(180px,26vw,300px)] max-w-[820px] rounded-t-[20px] border-b-0"
            />
          </article>
          {p.partners.map((partner) => (
            <article
              key={partner.name}
              className="flex flex-col items-center overflow-hidden rounded-xl border border-subtle bg-white px-6 pt-11 text-center shadow-sm sm:px-8"
            >
              <Badge tone="brand">{partner.badge}</Badge>
              <h3 className="mt-4 font-display text-[34px] tracking-[-0.01em] text-strong">{partner.name}</h3>
              <p className="mx-auto mt-2.5 max-w-[380px] text-[16px] leading-[1.55] text-pretty">{partner.desc}</p>
              <a
                href={partnerUrls[partner.key]}
                target="_blank"
                rel="noopener"
                className="mt-[18px] inline-flex min-h-11 items-center gap-1.5 font-semibold"
              >
                {p.partnerCta} <span className="sr-only">{partner.name} {dict.common.opensInNewTab}</span>
                <Icon name="chevron-right" size={16} />
              </a>
              <Placeholder label={partner.img} tone="ink" className="mt-9 h-[200px] self-stretch rounded-t-[16px] border-b-0" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function BrowserFrame({ domain, label, className }: { domain: string; label: string; className?: string }) {
  return (
    <div
      className={`flex aspect-[16/10] flex-col overflow-hidden rounded-lg border border-subtle bg-stripes-paper ${className ?? "shadow-xs"}`}
    >
      <div className="flex h-[30px] items-center gap-1.5 border-b border-subtle bg-white px-3" aria-hidden="true">
        <span className="size-2 rounded-full bg-ink-200" />
        <span className="size-2 rounded-full bg-ink-200" />
        <span className="size-2 rounded-full bg-ink-200" />
        <span className="ml-2.5 truncate font-mono text-[11px] text-muted">{domain}</span>
      </div>
      <div role="img" aria-label={label} className="flex flex-1 items-center justify-center font-mono text-[12px] uppercase tracking-[.1em] text-muted">
        <span aria-hidden="true">{label}</span>
      </div>
    </div>
  );
}

export function HomeCases({ lang, dict }: Props) {
  const c = dict.home.cases;
  const urls = site.cases as Record<string, string>;
  return (
    <section id="cases" aria-labelledby="cases-title" className={`px-6 ${sectionY}`}>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <Heading id="cases-title" size="lg" className="mt-3.5 text-strong">
              {c.title}
            </Heading>
          </div>
          <Link href={href(lang, "software", "cases")} className="inline-flex min-h-11 items-center gap-1.5 font-semibold">
            {c.all} <Icon name="arrow-right" size={16} />
          </Link>
        </div>
        <ul className="mt-10 grid gap-7 md:grid-cols-2">
          {c.items.map((item) => (
            <li key={item.key}>
              <a href={urls[item.key]} target="_blank" rel="noopener" className="group block text-inherit hover:text-inherit">
                <BrowserFrame domain={item.domain} label={c.shot} className="shadow-xs transition-shadow group-hover:shadow-md" />
                <div className="mt-[18px] flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-[24px] text-strong group-hover:text-lake-700">{item.name}</h3>
                  <span className="font-mono text-[11.5px] uppercase tracking-[.06em] text-muted">{item.tag}</span>
                </div>
                <p className="mt-1.5 text-[15px] leading-[1.6]">{item.desc}</p>
                <span className="sr-only">{dict.common.opensInNewTab}</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function HomeLeadership({ dict }: Props) {
  const l = dict.home.leadership;
  return (
    <section id="lideranca" aria-labelledby="lideranca-title" className="px-6">
      <Container className={`border-t border-subtle ${sectionY}`}>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Placeholder label={l.portrait} tone="lake" className="aspect-[4/5] w-full max-w-[440px] rounded-xl" />
          <figure>
            <Eyebrow as="h2" id="lideranca-title">
              {l.eyebrow}
            </Eyebrow>
            <blockquote className="mt-[18px] font-display text-[clamp(26px,3vw,38px)] leading-[1.25] tracking-[-0.015em] text-pretty text-strong">
              <p>
                <EmTitle text={l.quote} />
              </p>
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3.5">
              <Avatar name={site.founder.name} size={48} />
              <span>
                <span className="block text-[16px] font-bold text-strong">{site.founder.name}</span>
                <span className="block text-[14px] text-muted">{l.role}</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}

export function HomeGovernance({ dict }: Props) {
  const g = dict.home.governance;
  return (
    <section id="governanca" aria-labelledby="governanca-title" className={`bg-sunken px-6 ${sectionY}`}>
      <Container className="grid gap-12 md:grid-cols-2">
        <div>
          <Eyebrow>{g.eyebrow}</Eyebrow>
          <Heading id="governanca-title" size="lg" className="mt-3.5 text-strong">
            {g.title}
          </Heading>
          <p className="mt-[18px] max-w-[460px] text-[17px] leading-[1.65]">{g.lead}</p>
        </div>
        <ul className="flex flex-col rounded-lg border border-subtle bg-white px-5 py-1 shadow-xs sm:px-6">
          {g.items.map((item) => (
            <li key={item.t} className="grid grid-cols-[44px_1fr] items-center gap-4 border-b border-subtle py-[18px] last:border-b-0">
              <span className="flex size-11 items-center justify-center rounded-[12px] bg-lake-50 text-lake-700">
                <Icon name={item.icon} />
              </span>
              <div>
                <h3 className="text-[16px] font-semibold text-strong">{item.t}</h3>
                <p className="mt-[3px] text-[14px] leading-[1.45] text-muted">{item.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function HomePress({ dict }: Props) {
  const p = dict.home.press;
  return (
    <section id="imprensa" aria-labelledby="imprensa-title" className={`px-6 ${sectionY}`}>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>{p.eyebrow}</Eyebrow>
            <Heading id="imprensa-title" size="lg" className="mt-3.5 text-strong">
              {p.title}
            </Heading>
          </div>
          <a href={`mailto:${site.emails.press}`} className="inline-flex min-h-11 items-center gap-1.5 font-semibold">
            {p.kit} <Icon name="arrow-right" size={16} />
          </a>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {p.items.map((n) => (
            <li key={n.t}>
              <Card className="h-full overflow-hidden">
                <Placeholder label={p.image} tone="ink" className="aspect-video border-0 border-b" />
                <article className="px-6 pt-[22px] pb-[26px]">
                  <div className="flex items-center gap-2.5">
                    <Badge tone={n.tone} size="sm">
                      {n.cat}
                    </Badge>
                    <span className="font-mono text-[12px] text-muted">{n.date}</span>
                  </div>
                  <h3 className="mt-3.5 font-display text-[22px] leading-[1.25] text-pretty text-strong">{n.t}</h3>
                </article>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function HomeCareers({ lang, dict }: Props) {
  const c = dict.home.careers;
  return (
    <section id="carreiras" aria-labelledby="carreiras-title" className="px-6">
      <div className="relative mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-7 overflow-hidden rounded-xl bg-grad-dusk p-[clamp(28px,5vw,56px)] text-on-dark">
        <Ripple size={420} radii={[70, 130, 190]} stroke="#B0E0D2" className="top-[-120px] right-[-80px] opacity-[.14]" />
        <div className="relative max-w-[620px]">
          <p className="font-mono text-[12px] uppercase tracking-[.14em] text-lake-200">{c.eyebrow}</p>
          <h2
            id="carreiras-title"
            className="mt-3.5 font-display text-[clamp(30px,3.6vw,46px)] leading-[1.08] font-medium tracking-[-0.02em]"
          >
            {c.title}
          </h2>
          <p className="mt-3.5 text-[17px] leading-[1.6] text-on-dark-muted">{c.lead}</p>
        </div>
        <ButtonLink href={href(lang, "careers")} variant="accent" size="lg" className="relative w-full sm:w-auto">
          {c.cta}
        </ButtonLink>
      </div>
    </section>
  );
}

export function HomeContact({ lang, dict }: Props) {
  const c = dict.home.contact;
  return (
    <section id="contato" aria-labelledby="contato-title" className="px-6 py-[clamp(88px,11vw,136px)]">
      <Container className="grid items-start gap-12 md:grid-cols-2">
        <div>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2
            id="contato-title"
            className="mt-4 font-display text-[clamp(36px,5vw,64px)] leading-[1.02] font-medium tracking-[-0.025em] text-balance text-strong"
          >
            <EmTitle text={c.title} />
          </h2>
          <p className="mt-[18px] max-w-[440px] text-[17px] leading-[1.6]">{c.lead}</p>
          <address className="mt-8 flex flex-col gap-3.5 text-[15px] not-italic">
            <a href={`mailto:${site.emails.contact}`} className="flex min-h-11 items-center gap-3 text-body hover:text-lake-700">
              <Icon name="mail" size={18} className="text-lake-700" />
              {site.emails.contact}
            </a>
            <span className="flex items-center gap-3">
              <Icon name="map-pin" size={18} className="text-lake-700" />
              {c.location}
            </span>
          </address>
        </div>
        <ContactForm lang={lang} t={formText(dict)} c={dict.home.contact} />
      </Container>
    </section>
  );
}
