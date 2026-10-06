import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/pt";
import { site } from "@/lib/content/site";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Ripple } from "@/components/ui/Decor";
import { StatTile } from "@/components/ui/StatTile";
import { Container, EmTitle, Eyebrow, Heading } from "@/components/ui/Typography";
import { RiMailingForm } from "@/components/forms/Forms";
import { formText } from "@/components/forms/formText";
import { FactsList, ResultsDocs } from "./RiInteractive";

type Props = { lang: Locale; dict: Dictionary };

const sectionY = "py-[clamp(64px,8vw,96px)]";

export function RiHero({ dict }: Props) {
  const h = dict.ri.hero;
  return (
    <section aria-labelledby="ri-hero-title" className={`relative overflow-hidden bg-ink-900 px-6 text-on-dark ${sectionY}`}>
      <Ripple size={760} radii={[110, 200, 290, 370]} className="top-[-220px] right-[-220px] opacity-10" />
      <Container className="relative grid items-end gap-10 md:grid-cols-2">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-[12px] uppercase tracking-[.16em] text-lake-300">{h.eyebrow}</p>
            <Badge tone="accent" dot>
              {dict.common.comingSoon}
            </Badge>
          </div>
          <h1
            id="ri-hero-title"
            className="mt-[18px] font-display text-[clamp(40px,5.6vw,72px)] leading-[1.02] font-medium tracking-[-0.025em] text-balance"
          >
            <EmTitle text={h.title} emClassName="text-lake-300" />
          </h1>
          <p className="mt-5 max-w-[520px] text-[18px] leading-[1.6] text-on-dark-muted">{h.lead}</p>
        </div>
        <div className="rounded-xl border border-white/12 bg-white/5 p-6 sm:p-7" aria-describedby="ri-ticker-note">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[.12em] text-on-dark-muted sm:text-[12px]">{h.ticker}</span>
            <Badge tone="neutral" size="sm">
              {dict.common.comingSoon}
            </Badge>
          </div>
          <div className="mt-[18px] flex flex-wrap items-baseline gap-3.5">
            <span className="font-mono text-[clamp(36px,5vw,44px)] tabular-nums">{h.price}</span>
            <span className="font-mono text-[16px] text-lake-300">▲ {h.change}</span>
          </div>
          <svg viewBox="0 0 300 60" preserveAspectRatio="none" className="mt-3.5 h-[60px] w-full" aria-hidden="true">
            <polyline
              points="0,44 30,40 60,42 90,34 120,36 150,28 180,30 210,22 240,24 270,16 300,18"
              fill="none"
              stroke="#7CC9B6"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-white/10 pt-4 font-mono">
            {h.stats.map((s) => (
              <div key={s.l}>
                <dt className="text-[10.5px] uppercase tracking-[.1em] text-on-dark-muted">{s.l}</dt>
                <dd className="mt-1 text-[15px]">{s.v}</dd>
              </div>
            ))}
          </dl>
          <p id="ri-ticker-note" className="mt-3.5 text-[11.5px] text-on-dark-muted">
            {h.footnote}
          </p>
        </div>
      </Container>
    </section>
  );
}

export function RiSoonBanner({ dict }: Props) {
  return (
    <div role="note" className="border-b border-coral-200 bg-coral-100 px-6 py-3.5">
      <p className="mx-auto flex max-w-[1200px] items-start gap-2.5 text-[14px] font-medium text-coral-800">
        <Icon name="clock" size={18} className="mt-px flex-none" />
        {dict.ri.soonBanner}
      </p>
    </div>
  );
}

export function RiSubnav({ dict }: Props) {
  const s = dict.ri.subnav;
  const links = [
    ["resultados", s.results],
    ["fatos", s.facts],
    ["agenda", s.agenda],
    ["governanca", s.governance],
    ["contato-ri", s.contact],
  ] as const;
  return (
    <nav
      aria-label={s.label}
      className="no-scrollbar sticky top-16 z-30 overflow-x-auto border-b border-subtle bg-paper/[.92] backdrop-blur-md"
    >
      <ul className="mx-auto flex h-[52px] max-w-[1200px] items-center gap-7 px-6 text-[14px] font-semibold whitespace-nowrap">
        {links.map(([id, label]) => (
          <li key={id}>
            <a href={`#${id}`} className="text-body hover:text-lake-700">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function RiResults({ dict }: Props) {
  const r = dict.ri.results;
  return (
    <section id="resultados" aria-labelledby="resultados-title" className={`scroll-mt-[124px] px-6 ${sectionY}`}>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <Eyebrow>{r.eyebrow}</Eyebrow>
            <Heading id="resultados-title" size="lg" className="mt-3 text-strong">
              {r.title}
            </Heading>
          </div>
        </div>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {r.kpis.map((k) => (
            <li key={k.label}>
              <StatTile label={k.label} value={k.value} delta={k.delta} />
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <ResultsDocs r={dict.ri.results} soon={dict.common.comingSoon} />
        </div>
        <p className="mt-3.5 text-[13px] text-muted">{r.footnote}</p>
      </Container>
    </section>
  );
}

export function RiFacts({ dict }: Props) {
  const f = dict.ri.facts;
  return (
    <section id="fatos" aria-labelledby="fatos-title" className={`scroll-mt-[124px] bg-sunken px-6 ${sectionY}`}>
      <Container>
        <Eyebrow>{f.eyebrow}</Eyebrow>
        <Heading id="fatos-title" size="lg" className="mt-3 mb-6 text-strong">
          {f.title}
        </Heading>
        <FactsList f={dict.ri.facts} soon={dict.common.comingSoon} />
      </Container>
    </section>
  );
}

export function RiAgenda({ dict }: Props) {
  const a = dict.ri.agenda;
  return (
    <section id="agenda" aria-labelledby="agenda-title" className={`scroll-mt-[124px] px-6 ${sectionY}`}>
      <Container>
        <Eyebrow>{a.eyebrow}</Eyebrow>
        <Heading id="agenda-title" size="lg" className="mt-3 text-strong">
          {a.title}
        </Heading>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {a.items.map((e) => (
            <li key={e.t}>
              <Card className="h-full p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-mono text-[36px] leading-none text-strong">{e.day}</div>
                    <div className="mt-1.5 font-mono text-[11.5px] tracking-[.12em] text-muted">{e.mon}</div>
                  </div>
                  <span className="flex size-10 items-center justify-center rounded-[12px] bg-lake-50 text-lake-700">
                    <Icon name={e.icon} size={18} />
                  </span>
                </div>
                <h3 className="mt-[22px] text-[16px] font-semibold text-strong">{e.t}</h3>
                <p className="mt-1 text-[14px] text-muted">{e.d}</p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-muted">
                  <Icon name="calendar-plus" size={16} /> {a.add} · {dict.common.comingSoon}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function RiGovernance({ dict }: Props) {
  const g = dict.ri.governance;
  return (
    <section id="governanca" aria-labelledby="ri-gov-title" className="scroll-mt-[124px] px-6">
      <Container className={`grid gap-12 border-t border-subtle md:grid-cols-2 ${sectionY}`}>
        <div>
          <Eyebrow>{g.eyebrow}</Eyebrow>
          <Heading id="ri-gov-title" size="lg" className="mt-3 text-strong">
            {g.title}
          </Heading>
          <ul className="mt-7">
            {g.board.map((b, i) => (
              <li key={`${b.role}-${i}`} className="flex items-center gap-4 border-b border-subtle py-4">
                <Avatar name={b.name} size={48} muted={b.tbd} />
                <div>
                  <p className={b.tbd ? "text-[16px] font-semibold text-muted" : "text-[16px] font-semibold text-strong"}>{b.name}</p>
                  <p className="mt-0.5 text-[14px] text-muted">{b.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Eyebrow>{g.docsEyebrow}</Eyebrow>
          <Heading as="h3" size="lg" className="mt-3 text-strong">
            {g.docsTitle}
          </Heading>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {g.policies.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 rounded-[14px] border border-subtle bg-white p-4 text-[14.5px] font-semibold text-strong"
              >
                <Icon name="file-text" size={18} className="flex-none text-lake-700" />
                <span className="flex-1">{p}</span>
                <Badge size="sm">{dict.common.comingSoon}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function RiContact({ lang, dict }: Props) {
  const c = dict.ri.contact;
  return (
    <section id="contato-ri" aria-labelledby="contato-ri-title" className={`scroll-mt-[124px] bg-grad-mist px-6 ${sectionY}`}>
      <Container className="grid items-start gap-12 md:grid-cols-2">
        <div>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2
            id="contato-ri-title"
            className="mt-3.5 font-display text-[clamp(32px,4vw,52px)] leading-[1.05] font-medium tracking-[-0.02em] text-balance text-strong"
          >
            <EmTitle text={c.title} />
          </h2>
          <p className="mt-4 max-w-[440px] text-[17px] leading-[1.6]">{c.lead}</p>
          <ul className="mt-7 flex flex-col gap-3.5 text-[15px]">
            <li>
              <a href={`mailto:${site.emails.ir}`} className="flex min-h-11 items-center gap-3 text-body hover:text-lake-700">
                <Icon name="mail" size={18} className="text-lake-700" /> {site.emails.ir}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="user" size={18} className="text-lake-700" /> {c.officer}
            </li>
          </ul>
        </div>
        <RiMailingForm lang={lang} t={formText(dict)} c={dict.ri.contact} />
      </Container>
    </section>
  );
}
