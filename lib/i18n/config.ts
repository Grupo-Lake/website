export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** BCP 47 tags for <html lang> and hreflang */
export const htmlLang: Record<Locale, string> = { pt: "pt-BR", en: "en" };
/** Open Graph locale codes */
export const ogLocale: Record<Locale, string> = { pt: "pt_BR", en: "en_US" };

export const LOCALE_COOKIE = "NEXT_LOCALE";
