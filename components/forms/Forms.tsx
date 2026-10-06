"use client";

import Link from "next/link";
import { useActionState, useState, type ReactNode } from "react";
import { CircleAlert, CircleCheck } from "lucide-react";
import { submitBriefing, submitContact, submitRiMailing, type FormState } from "@/app/actions/contact";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/pt";
import { site } from "@/lib/content/site";
import { href } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/Input";
import { Pills } from "@/components/ui/Pills";
import { cn } from "@/components/ui/cn";
import type { FormText } from "./formText";

const initial: FormState = { status: "idle" };

type Shared = { lang: Locale; t: FormText };

function Status({ state, t, successText, fallbackEmail }: { state: FormState; t: FormText; successText: string; fallbackEmail: string }) {
  const f = t.forms;
  return (
    <div aria-live="polite" role="status">
      {state.status === "success" && (
        <p className="flex items-start gap-2.5 rounded-[12px] bg-positive-100 px-4 py-3 text-[14px] font-medium text-positive-600">
          <CircleCheck size={18} aria-hidden="true" className="mt-px flex-none" />
          {successText}
        </p>
      )}
      {state.status === "invalid" && (
        <p className="flex items-start gap-2.5 rounded-[12px] bg-negative-100 px-4 py-3 text-[14px] font-medium text-negative-600">
          <CircleAlert size={18} aria-hidden="true" className="mt-px flex-none" />
          {f.errorInvalid}
        </p>
      )}
      {state.status === "error" && (
        <p className="flex items-start gap-2.5 rounded-[12px] bg-negative-100 px-4 py-3 text-[14px] font-medium text-negative-600">
          <CircleAlert size={18} aria-hidden="true" className="mt-px flex-none" />
          <span>
            {f.errorGeneric}{" "}
            <a className="font-semibold text-negative-600 underline" href={`mailto:${fallbackEmail}`}>
              {fallbackEmail}
            </a>
            .
          </span>
        </p>
      )}
    </div>
  );
}

function FormFrame({
  lang,
  t,
  action,
  pending,
  submitLabel,
  children,
}: Shared & { action: (formData: FormData) => void; pending: boolean; submitLabel: string; children: ReactNode }) {
  return (
    <Card className="p-6 sm:p-8">
      <form action={action} className="flex flex-col gap-[18px]" noValidate>
        <input type="hidden" name="lang" value={lang} />
        {/* Honeypot anti-spam: invisível para pessoas e leitores de tela */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        {children}
        <Button type="submit" size="lg" full disabled={pending} aria-disabled={pending}>
          {pending ? t.forms.sending : submitLabel}
        </Button>
        <p className="text-[12.5px] leading-normal text-muted">
          {t.lgpdNote}{" "}
          <Link href={href(lang, "privacy")} className="underline underline-offset-2">
            {t.privacyPolicy}
          </Link>
          .
        </p>
      </form>
    </Card>
  );
}

function NameEmailCompany({
  t,
  state,
  companyLabel,
  companyPlaceholder,
  emailPlaceholder,
}: {
  t: FormText;
  state: FormState;
  companyLabel: string;
  companyPlaceholder: string;
  emailPlaceholder?: string;
}) {
  const f = t.forms;
  const v = state.values ?? {};
  return (
    <>
      <Input
        label={f.name}
        name="name"
        placeholder={f.namePlaceholder}
        autoComplete="name"
        required
        defaultValue={v.name}
        error={state.fields?.name ? f.errors.name : undefined}
      />
      <Input
        label={f.email}
        name="email"
        type="email"
        inputMode="email"
        placeholder={emailPlaceholder ?? f.emailPlaceholder}
        autoComplete="email"
        required
        defaultValue={v.email}
        error={state.fields?.email ? f.errors.email : undefined}
      />
      <Input
        label={companyLabel}
        name="company"
        placeholder={companyPlaceholder}
        autoComplete="organization"
        defaultValue={v.company}
      />
    </>
  );
}

export function ContactForm({ lang, t, c }: Shared & { c: Dictionary["home"]["contact"] }) {
  const [state, action, pending] = useActionState(submitContact, initial);
  const [topic, setTopic] = useState(c.topics[0]);
  return (
    <FormFrame lang={lang} t={t} action={action} pending={pending} submitLabel={c.submit}>
      <Status state={state} t={t} successText={t.forms.success} fallbackEmail={site.emails.contact} />
      <Pills label={c.topicLabel} options={c.topics} value={topic} onChange={setTopic} name="topic" />
      <NameEmailCompany t={t} state={state} companyLabel={t.forms.company} companyPlaceholder={t.forms.companyPlaceholder} />
      <Textarea
        label={t.forms.message}
        name="message"
        rows={3}
        placeholder={t.forms.messagePlaceholder}
        defaultValue={state.values?.message}
      />
    </FormFrame>
  );
}

export function BriefingForm({ lang, t, c }: Shared & { c: Dictionary["software"]["contact"] }) {
  const [state, action, pending] = useActionState(submitBriefing, initial);
  const [kind, setKind] = useState(c.kinds[1]);
  return (
    <FormFrame lang={lang} t={t} action={action} pending={pending} submitLabel={c.submit}>
      <Status state={state} t={t} successText={t.forms.success} fallbackEmail={site.emails.contact} />
      <div>
        <p className="mb-2 text-[13px] font-semibold text-strong">
          {c.kindLabel}
        </p>
        <Pills label={c.kindLabel} options={c.kinds} value={kind} onChange={setKind} name="kind" />
      </div>
      <NameEmailCompany t={t} state={state} companyLabel={t.forms.company} companyPlaceholder={t.forms.companyPlaceholder} />
      <Textarea
        label={t.forms.message}
        name="message"
        rows={3}
        placeholder={t.forms.messagePlaceholder}
        defaultValue={state.values?.message}
      />
    </FormFrame>
  );
}

export function RiMailingForm({ lang, t, c }: Shared & { c: Dictionary["ri"]["contact"] }) {
  const [state, action, pending] = useActionState(submitRiMailing, initial);
  const [inst, setInst] = useState(false);
  return (
    <FormFrame lang={lang} t={t} action={action} pending={pending} submitLabel={c.submit}>
      <Status state={state} t={t} successText={t.forms.successMailing} fallbackEmail={site.emails.ir} />
      <NameEmailCompany
        t={t}
        state={state}
        companyLabel={t.forms.institution}
        companyPlaceholder={t.forms.institutionPlaceholder}
        emailPlaceholder={c.emailPlaceholder}
      />
      <label className="flex cursor-pointer items-center justify-between gap-4 text-[14px] font-semibold text-strong">
        {c.institutional}
        <span className="relative inline-flex">
          <input
            type="checkbox"
            role="switch"
            name="institutional"
            checked={inst}
            onChange={(e) => setInst(e.target.checked)}
            className="peer absolute inset-0 z-10 cursor-pointer opacity-0"
          />
          <span
            aria-hidden="true"
            className={cn(
              "relative h-[26px] w-[46px] rounded-full transition-colors duration-150 peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-lake-400",
              inst ? "bg-lake-700" : "bg-ink-200",
            )}
          >
            <span
              className={cn(
                "absolute top-[3px] size-5 rounded-full bg-white shadow-sm transition-[left] duration-200 ease-[cubic-bezier(.4,0,.2,1)]",
                inst ? "left-[23px]" : "left-[3px]",
              )}
            />
          </span>
        </span>
      </label>
    </FormFrame>
  );
}
