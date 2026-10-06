import type { MetadataRoute } from "next";
import { htmlLang, locales } from "@/lib/i18n/config";
import { site } from "@/lib/content/site";
import { routes, type RouteKey } from "@/lib/routes";

/** "ri" fica fora até o portal de investidores ser lançado. */
const indexed: { route: RouteKey; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { route: "home", priority: 1, changeFrequency: "weekly" },
  { route: "software", priority: 0.9, changeFrequency: "monthly" },
  { route: "careers", priority: 0.8, changeFrequency: "weekly" },
  { route: "privacy", priority: 0.3, changeFrequency: "yearly" },
  { route: "terms", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.lastModified);
  return indexed.flatMap(({ route, priority, changeFrequency }) => {
    const languages = Object.fromEntries(locales.map((l) => [htmlLang[l], `${site.url}/${l}${routes[route]}`]));
    return locales.map((lang) => ({
      url: `${site.url}/${lang}${routes[route]}`,
      lastModified,
      changeFrequency,
      priority: lang === "pt" ? priority : Math.max(priority - 0.1, 0.1),
      alternates: { languages: { ...languages, "x-default": `${site.url}/pt${routes[route]}` } },
    }));
  });
}
