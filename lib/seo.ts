import type { Metadata } from "next";
import { htmlLang, locales, ogLocale, type Locale } from "./i18n/config";
import { routes, type RouteKey } from "./routes";
import { absoluteUrl, site } from "./content/site";
import type { Dictionary } from "./i18n/dictionaries/pt";

type BuildMetadataInput = {
  lang: Locale;
  route: RouteKey;
  title: string;
  description: string;
  dict: Dictionary;
  /** Usa o título sem o template "· Grupo Lake" (Home). */
  absoluteTitle?: boolean;
  noindex?: boolean;
};

export const localizedUrl = (lang: Locale, route: RouteKey) => absoluteUrl(`/${lang}${routes[route]}`);

export function languageAlternates(route: RouteKey) {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[htmlLang[l]] = `/${l}${routes[route]}`;
  languages["x-default"] = `/pt${routes[route]}`;
  return languages;
}

export function buildMetadata({
  lang,
  route,
  title,
  description,
  dict,
  absoluteTitle,
  noindex,
}: BuildMetadataInput): Metadata {
  const path = `/${lang}${routes[route]}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: dict.meta.keywords,
    alternates: { canonical: path, languages: languageAlternates(route) },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      url: path,
      title: absoluteTitle ? title : `${title} · ${site.name}`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle ? title : `${title} · ${site.name}`,
      description,
    },
    robots: noindex
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  };
}

/* ---------- JSON-LD builders (schema.org) ---------- */

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

export function organizationJsonLd(dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    alternateName: "Lake",
    url: site.url,
    logo: absoluteUrl("/icon.svg"),
    description: dict.llms.summary,
    email: site.emails.contact,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    areaServed: "BR",
    founder: { "@type": "Person", name: site.founder.name, jobTitle: "Founder" },
    knowsAbout: [
      "Software development",
      "Product design",
      "Software testing and QA",
      "Applied artificial intelligence",
      "Venture investments",
      "Business acceleration",
      "Corporate governance",
    ],
    sameAs: [site.social.instagram, site.social.linkedin],
    subOrganization: [
      {
        "@type": "Organization",
        name: "Lake Finance",
        url: site.portfolio.lakeFinance,
        description: dict.home.portfolio.lakeFinance.desc,
      },
    ],
    contactPoint: [
      { "@type": "ContactPoint", contactType: "customer support", email: site.emails.contact, availableLanguage: ["Portuguese", "English"] },
      { "@type": "ContactPoint", contactType: "press", email: site.emails.press },
      { "@type": "ContactPoint", contactType: "recruiting", email: site.emails.careers },
    ],
  };
}

export function websiteJsonLd(lang: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: site.name,
    url: site.url,
    inLanguage: htmlLang[lang],
    publisher: { "@id": ORG_ID },
  };
}

export function webPageJsonLd({
  lang,
  route,
  name,
  description,
  type = "WebPage",
}: {
  lang: Locale;
  route: RouteKey;
  name: string;
  description: string;
  type?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${localizedUrl(lang, route)}#webpage`,
    url: localizedUrl(lang, route),
    name,
    description,
    inLanguage: htmlLang[lang],
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "[data-speakable]"] },
  };
}

export function breadcrumbJsonLd(lang: Locale, dict: Dictionary, items: { route: RouteKey; name: string }[]) {
  const all = [{ route: "home" as RouteKey, name: dict.nav.breadcrumbHome }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: localizedUrl(lang, item.route),
    })),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
