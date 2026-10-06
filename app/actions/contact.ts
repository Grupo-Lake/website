"use server";

import { Resend } from "resend";
import { z } from "zod";
import { site } from "@/lib/content/site";

export type FormState = {
  status: "idle" | "success" | "error" | "invalid";
  fields?: Partial<Record<"name" | "email", true>>;
  /** Mantém os valores digitados após erro (o form é resetado pelo React após a action). */
  values?: Record<string, string>;
};

const base = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email().max(160),
  company: z.string().trim().max(160).optional().default(""),
});

const contactSchema = base.extend({
  topic: z.string().trim().max(60).optional().default(""),
  message: z.string().trim().max(4000).optional().default(""),
});

const briefingSchema = base.extend({
  kind: z.string().trim().max(60).optional().default(""),
  message: z.string().trim().max(4000).optional().default(""),
});

const mailingSchema = base.extend({
  institutional: z.string().optional(),
});

function read(formData: FormData) {
  const values: Record<string, string> = {};
  for (const [k, v] of formData.entries()) if (typeof v === "string" && !k.startsWith("$")) values[k] = v.trim();
  return values;
}

function invalid(error: z.ZodError, values: Record<string, string>): FormState {
  const fields: FormState["fields"] = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (key === "name" || key === "email") fields[key] = true;
  }
  return { status: "invalid", fields, values };
}

async function send({ to, subject, replyTo, lines }: { to: string; subject: string; replyTo: string; lines: [string, string][] }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[forms] RESEND_API_KEY ausente — mensagem não enviada:", subject);
    return false;
  }
  const resend = new Resend(apiKey);
  const text = lines
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM ?? `Site ${site.name} <site@grupolake.com.br>`,
    to,
    replyTo,
    subject,
    text,
  });
  if (error) {
    console.error("[forms] Falha no envio via Resend:", error);
    return false;
  }
  return true;
}

/** Honeypot: bots tendem a preencher o campo oculto "website". */
const isBot = (values: Record<string, string>) => Boolean(values.website);

export async function submitContact(_prev: FormState, formData: FormData): Promise<FormState> {
  const values = read(formData);
  if (isBot(values)) return { status: "success" };
  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) return invalid(parsed.error, values);
  const d = parsed.data;
  const ok = await send({
    to: site.emails.contact,
    replyTo: d.email,
    subject: `[Site] Contato — ${d.topic || "Geral"} — ${d.name}`,
    lines: [
      ["Assunto", d.topic],
      ["Nome", d.name],
      ["E-mail", d.email],
      ["Empresa", d.company],
      ["Mensagem", d.message],
      ["Idioma", values.lang ?? ""],
    ],
  });
  return ok ? { status: "success" } : { status: "error", values };
}

export async function submitBriefing(_prev: FormState, formData: FormData): Promise<FormState> {
  const values = read(formData);
  if (isBot(values)) return { status: "success" };
  const parsed = briefingSchema.safeParse(values);
  if (!parsed.success) return invalid(parsed.error, values);
  const d = parsed.data;
  const ok = await send({
    to: site.emails.contact,
    replyTo: d.email,
    subject: `[Site] Briefing — ${d.kind || "Projeto"} — ${d.name}`,
    lines: [
      ["Tipo de projeto", d.kind],
      ["Nome", d.name],
      ["E-mail", d.email],
      ["Empresa", d.company],
      ["Mensagem", d.message],
      ["Idioma", values.lang ?? ""],
    ],
  });
  return ok ? { status: "success" } : { status: "error", values };
}

export async function submitRiMailing(_prev: FormState, formData: FormData): Promise<FormState> {
  const values = read(formData);
  if (isBot(values)) return { status: "success" };
  const parsed = mailingSchema.safeParse(values);
  if (!parsed.success) return invalid(parsed.error, values);
  const d = parsed.data;
  const ok = await send({
    to: site.emails.ir,
    replyTo: d.email,
    subject: `[Site] Mailing RI — ${d.name}`,
    lines: [
      ["Nome", d.name],
      ["E-mail", d.email],
      ["Instituição", d.company],
      ["Investidor institucional", d.institutional === "on" ? "Sim" : "Não"],
      ["Idioma", values.lang ?? ""],
    ],
  });
  return ok ? { status: "success" } : { status: "error", values };
}
