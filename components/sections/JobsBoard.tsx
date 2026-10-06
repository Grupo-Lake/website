"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries/pt";
import { site } from "@/lib/content/site";
import { Icon } from "@/components/ui/Icon";
import { Pills } from "@/components/ui/Pills";
import { Eyebrow, Heading } from "@/components/ui/Typography";

export function JobsBoard({ j }: { j: Dictionary["careers"]["jobs"] }) {
  const [area, setArea] = useState(j.all);
  const jobs = area === j.all ? j.items : j.items.filter((job) => job.area === area);
  const count = `${jobs.length} ${jobs.length === 1 ? j.one : j.many}`;

  return (
    <>
      <Eyebrow>{j.eyebrow}</Eyebrow>
      <Heading id="vagas-title" size="lg" className="mt-3.5 text-strong" aria-live="polite">
        {count}
      </Heading>
      <div className="mt-7">
        <Pills label={j.filterLabel} options={[j.all, ...j.areas]} value={area} onChange={setArea} size="lg" scroll />
      </div>
      <ul className="mt-6 rounded-lg border border-subtle bg-white px-5 shadow-xs sm:px-6">
        {jobs.map((job) => {
          const subject = encodeURIComponent(`${j.applySubject}: ${job.t}`);
          return (
            <li key={job.t} className="border-b border-subtle last:border-b-0">
              <a
                href={`mailto:${site.emails.careers}?subject=${subject}`}
                className="group grid grid-cols-[1fr_auto] items-center gap-4 py-[22px] text-inherit hover:text-inherit"
              >
                <span>
                  <span className="block font-display text-[clamp(19px,2.2vw,22px)] leading-[1.25] text-strong group-hover:text-lake-700">
                    {job.t}
                  </span>
                  <span className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[14px] text-muted">
                    <span>{job.area}</span>
                    <span>{job.loc}</span>
                    <span>{job.type}</span>
                  </span>
                </span>
                <span
                  className="flex size-10 items-center justify-center rounded-[12px] border border-default text-lake-700 transition-colors group-hover:border-lake-700 group-hover:bg-lake-700 group-hover:text-on-brand"
                  aria-hidden="true"
                >
                  <Icon name="arrow-right" size={18} />
                </span>
                <span className="sr-only">— {j.apply}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-[14px] text-muted">
        {j.note}{" "}
        <a href={`mailto:${site.emails.careers}`} className="font-semibold break-all">
          {site.emails.careers}
        </a>
        .
      </p>
    </>
  );
}
