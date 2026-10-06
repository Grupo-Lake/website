"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries/pt";
import { Badge, type BadgeTone } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Pills } from "@/components/ui/Pills";
import { cn } from "@/components/ui/cn";

const YEARS = [2026, 2025, 2024];

/** Seletor de ano + tabela de documentos trimestrais (todos "Em breve" até a publicação). */
export function ResultsDocs({ r, soon }: { r: Dictionary["ri"]["results"]; soon: string }) {
  const [year, setYear] = useState(YEARS[0]);
  const yy = String(year).slice(2);
  const quarters = [1, 2, 3, 4].map((q) => (r.quarter === "T" ? `${q}T${yy}` : `${r.quarter}${q} ${yy}`));

  return (
    <>
      <div role="group" aria-label={r.yearLabel} className="inline-flex rounded-[12px] border border-subtle bg-sunken p-[3px]">
        {YEARS.map((y) => (
          <button
            key={y}
            type="button"
            aria-pressed={y === year}
            onClick={() => setYear(y)}
            className={cn(
              "h-9 cursor-pointer rounded-[9px] px-4 font-mono text-[13px] transition-colors",
              y === year ? "bg-white text-strong shadow-xs" : "text-muted hover:text-strong",
            )}
          >
            {y}
          </button>
        ))}
      </div>

      {/* Desktop/tablet: tabela */}
      <div className="mt-7 hidden overflow-x-auto rounded-lg border border-subtle bg-white shadow-xs md:block">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <caption className="sr-only">
            {r.title} {year}
          </caption>
          <thead>
            <tr className="border-b border-subtle font-mono text-[11px] uppercase tracking-[.1em] text-muted">
              <th scope="col" className="w-[28%] px-6 py-3.5 font-normal">
                {r.docHeader}
              </th>
              {quarters.map((q) => (
                <th key={q} scope="col" className="px-6 py-3.5 font-normal">
                  {q}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {r.docs.map((doc) => (
              <tr key={doc} className="border-b border-subtle text-[15px] last:border-b-0">
                <th scope="row" className="px-6 py-4 font-semibold text-strong">
                  {doc}
                </th>
                {quarters.map((q) => (
                  <td key={q} className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[12px] text-muted">
                      <Icon name="clock" size={15} /> {soon}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: um card por documento */}
      <ul className="mt-7 flex flex-col gap-3 md:hidden">
        {r.docs.map((doc) => (
          <li key={doc} className="rounded-[14px] border border-subtle bg-white p-4 shadow-xs">
            <p className="text-[15px] font-semibold text-strong">{doc}</p>
            <dl className="mt-3 grid grid-cols-2 gap-2">
              {quarters.map((q) => (
                <div key={q} className="flex items-center justify-between rounded-[10px] bg-sunken px-3 py-2">
                  <dt className="font-mono text-[11px] tracking-[.08em] text-muted">{q}</dt>
                  <dd className="inline-flex items-center gap-1 font-mono text-[11px] text-muted">
                    <Icon name="clock" size={13} /> {soon}
                  </dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}

const factTones: BadgeTone[] = ["accent", "brand", "info", "neutral"];

export function FactsList({ f, soon }: { f: Dictionary["ri"]["facts"]; soon: string }) {
  const [filter, setFilter] = useState(f.all);
  const facts = filter === f.all ? f.items : f.items.filter((item) => item.type === filter);
  const toneOf = (type: string) => factTones[f.types.indexOf(type)] ?? "neutral";

  return (
    <>
      <Pills label={f.filterLabel} options={[f.all, ...f.types]} value={filter} onChange={setFilter} scroll />
      <ul className="mt-7 rounded-lg border border-subtle bg-white px-5 shadow-xs sm:px-6">
        {facts.map((item, i) => (
          <li
            key={`${item.t}-${i}`}
            className="grid grid-cols-1 gap-2 border-b border-subtle py-5 last:border-b-0 sm:grid-cols-[minmax(90px,120px)_1fr_auto] sm:items-center sm:gap-[18px]"
          >
            <span className="font-mono text-[13px] text-muted">{item.date}</span>
            <div className="flex flex-col items-start gap-1.5">
              <Badge tone={toneOf(item.type)} size="sm">
                {item.type}
              </Badge>
              <span className="text-[16px] font-medium text-strong">{item.t}</span>
            </div>
            <span className="inline-flex items-center gap-1.5 font-mono text-[12px] text-muted">
              <Icon name="clock" size={14} /> {soon}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
