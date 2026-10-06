import type { Dictionary } from "@/lib/i18n/dictionaries/pt";

/** Só as strings necessárias aos formulários (evita serializar o dicionário inteiro no cliente). */
export type FormText = { forms: Dictionary["forms"]; lgpdNote: string; privacyPolicy: string };
export const formText = (dict: Dictionary): FormText => ({
  forms: dict.forms,
  lgpdNote: dict.common.lgpdNote,
  privacyPolicy: dict.common.privacyPolicy,
});

