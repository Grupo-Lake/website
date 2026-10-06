import { ChevronDown } from "lucide-react";
import { Eyebrow, Heading } from "./Typography";

/**
 * FAQ em <details>/<summary>: funciona sem JavaScript e mantém as respostas no HTML
 * (importante para AEO/GEO). O JSON-LD FAQPage é emitido pela página.
 */
export function Faq({
  id,
  eyebrow,
  title,
  items,
}: {
  id: string;
  eyebrow: string;
  title: string;
  items: { q: string; a: string }[];
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-[1200px] px-6 py-[clamp(80px,10vw,120px)]">
      <div className="grid gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-14">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading id={`${id}-title`} size="lg" className="mt-3.5 text-strong">
            {title}
          </Heading>
        </div>
        <div className="rounded-lg border border-subtle bg-white px-5 shadow-xs sm:px-6">
          {items.map((item, i) => (
            <details key={item.q} className="group border-b border-subtle last:border-b-0" open={i === 0}>
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-[16px] font-semibold text-strong [&::-webkit-details-marker]:hidden">
                <h3 className="font-sans">{item.q}</h3>
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className="flex-none text-muted transition-transform duration-150 group-open:rotate-180"
                />
              </summary>
              <p className="pb-5 text-[15.5px] leading-[1.65] text-pretty">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
