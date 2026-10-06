import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale, LOCALE_COOKIE, locales, type Locale } from "@/lib/i18n/config";

function preferredLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookie && hasLocale(cookie)) return cookie;

  // Accept-Language: "en-US,en;q=0.9,pt;q=0.8" → ordena por q e pega o primeiro suportado
  const header = request.headers.get("accept-language") ?? "";
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.toLowerCase().split("-")[0], q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  for (const { lang } of ranked) if (hasLocale(lang)) return lang;
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasPrefix = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasPrefix) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  // 307: a escolha depende do visitante; não deve ser cacheada como permanente
  return NextResponse.redirect(url, 307);
}

export const config = {
  // Ignora internos, arquivos com extensão e rotas de metadados na raiz
  matcher: ["/((?!_next|api|.*\\..*|sitemap.xml|robots.txt|manifest.webmanifest|icon|apple-icon|opengraph-image).*)"],
};
