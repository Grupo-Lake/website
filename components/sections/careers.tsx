import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/pt";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Placeholder } from "@/components/ui/Decor";
import { Container, EmTitle, Eyebrow, Heading } from "@/components/ui/Typography";
import { cn } from "@/components/ui/cn";
import { JobsBoard } from "./JobsBoard";

type Props = { lang: Locale; dict: Dictionary };

const sectionY = "py-[clamp(80px,10vw,120px)]";

export function CareersHero({ dict }: Props) {
  const h = dict.careers.hero;
  return (
    <section aria-labelledby="careers-hero-title" className="overflow-hidden bg-grad-mist px-6 pt-[clamp(72px,10vw,128px)] text-center">
      <div className="mx-auto max-w-[900px]">
        <p className="font-mono text-[12px] uppercase tracking-[.16em] text-lake-600">{h.eyebrow}</p>
        <h1
          id="careers-hero-title"
          className="mt-5 font-display text-[clamp(40px,6.4vw,84px)] leading-[1.02] font-medium tracking-[-0.025em] text-balance text-strong"
        >
          <EmTitle text={h.title} />
        </h1>
        <p data-speakable className="mx-auto mt-6 max-w-[620px] text-[clamp(17px,1.5vw,20px)] leading-[1.6]">
          {h.lead}
        </p>
        <ButtonLink href="#vagas" variant="accent" size="lg" className="mt-[34px] w-full sm:w-auto">
          {h.cta}
        </ButtonLink>
      </div>
      <div className="mx-auto mt-[clamp(56px,7vw,80px)] grid h-[clamp(240px,24vw,300px)] max-w-[1100px] grid-cols-2 grid-rows-2 gap-3 sm:grid-cols-[2fr_1fr_1fr] sm:grid-rows-1">
        {h.photos.map((label, i) => (
          <Placeholder
            key={label}
            label={label}
            className={cn(
              "border-b-0",
              i === 0 ? "col-span-2 rounded-t-[20px] sm:col-span-1" : "rounded-[16px] sm:rounded-b-none sm:rounded-t-[20px]",
            )}
          />
        ))}
      </div>
    </section>
  );
}

export function CareersValues({ dict }: Props) {
  const v = dict.careers.values;
  return (
    <section aria-labelledby="values-title" className={`px-6 ${sectionY}`}>
      <Container>
        <Eyebrow>{v.eyebrow}</Eyebrow>
        <Heading id="values-title" size="l2" className="mt-3.5 text-strong">
          {v.title}
        </Heading>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {v.items.map((item) => (
            <li key={item.n} className="border-t-2 border-lake-700 pt-[22px]">
              <span className="font-mono text-[12px] tracking-[.12em] text-muted">{item.n}</span>
              <h3 className="mt-2 font-display text-[24px] text-strong">{item.t}</h3>
              <p className="mt-2 text-[15.5px] leading-[1.6]">{item.d}</p>
            </li>
          ))}
        </ul>
        <h3 className="sr-only">{v.perksLabel}</h3>
        <ul className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {v.perks.map((perk) => (
            <li
              key={perk.t}
              className="flex items-center gap-3 rounded-[14px] border border-subtle bg-white px-[18px] py-4 text-[15px] font-semibold text-strong"
            >
              <span className="flex size-9 flex-none items-center justify-center rounded-[10px] bg-lake-50 text-lake-700">
                <Icon name={perk.icon} size={18} />
              </span>
              {perk.t}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function CareersJobs({ dict }: Props) {
  return (
    <section id="vagas" aria-labelledby="vagas-title" className={`bg-sunken px-6 ${sectionY}`}>
      <div className="mx-auto max-w-[1000px]">
        <JobsBoard j={dict.careers.jobs} />
      </div>
    </section>
  );
}

export function CareersProcess({ dict }: Props) {
  const p = dict.careers.process;
  return (
    <section aria-labelledby="selection-title" className={`px-6 ${sectionY}`}>
      <Container>
        <Eyebrow>{p.eyebrow}</Eyebrow>
        <Heading id="selection-title" size="lg" className="mt-3.5 text-strong">
          {p.title}
        </Heading>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {p.items.map((step) => (
            <li key={step.n}>
              <Card className="h-full p-[26px]">
                <span className="font-mono text-[30px] text-lake-700">{step.n}</span>
                <h3 className="mt-4 text-[16.5px] font-bold text-strong">{step.t}</h3>
                <p className="mt-1.5 text-[14.5px] leading-[1.55]">{step.d}</p>
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
