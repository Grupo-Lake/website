import type { Locale } from "./i18n/config";

/** Slugs são compartilhados entre idiomas; só o prefixo /pt | /en muda. */
export const routes = {
  home: "",
  software: "/casa-de-software",
  careers: "/carreiras",
  ri: "/investidores",
  privacy: "/privacidade",
  terms: "/termos",
} as const;

export type RouteKey = keyof typeof routes;

export const href = (lang: Locale, route: RouteKey, hash?: string) =>
  `/${lang}${routes[route]}${hash ? `#${hash}` : ""}` || "/";

/** Troca o prefixo de idioma de um pathname (/pt/carreiras → /en/carreiras). */
export const switchLocalePath = (pathname: string, to: Locale) => {
  const parts = pathname.split("/");
  parts[1] = to;
  return parts.join("/") || `/${to}`;
};
