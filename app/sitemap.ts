import type { MetadataRoute } from "next";
import { htmlLang, locales } from "@/lib/i18n/config";
import { site } from "@/lib/content/site";
import { posts } from "@/lib/content/posts";
import { routes, type RouteKey } from "@/lib/routes";

/** "ri" fica fora até o portal de investidores ser lançado. */
const indexed: { route: RouteKey; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { route: "home", priority: 1, changeFrequency: "weekly" },
  { route: "software", priority: 0.9, changeFrequency: "monthly" },
  { route: "careers", priority: 0.8, changeFrequency: "weekly" },
  { route: "blog", priority: 0.7, changeFrequency: "weekly" },
  { route: "privacy", priority: 0.3, changeFrequency: "yearly" },
  { route: "terms", priority: 0.3, changeFrequency: "yearly" },
  { route: "security", priority: 0.3, changeFrequency: "yearly" },
  { route: "refund", priority: 0.3, changeFrequency: "yearly" },
];

type Entry = { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly"; lastModified: Date };

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.lastModified);
  const entries: Entry[] = [
    ...indexed.map(({ route, priority, changeFrequency }) => ({
      path: routes[route],
      priority,
      changeFrequency,
      lastModified,
    })),
    ...posts.map((post) => ({
      path: `${routes.blog}/${post.slug}`,
      priority: 0.6,
      changeFrequency: "monthly" as const,
      lastModified: new Date(post.date),
    })),
  ];
  return entries.flatMap(({ path, priority, changeFrequency, lastModified }) => {
    const languages = Object.fromEntries(locales.map((l) => [htmlLang[l], `${site.url}/${l}${path}`]));
    return locales.map((lang) => ({
      url: `${site.url}/${lang}${path}`,
      lastModified,
      changeFrequency,
      priority: lang === "pt" ? priority : Math.max(priority - 0.1, 0.1),
      alternates: { languages: { ...languages, "x-default": `${site.url}/pt${path}` } },
    }));
  });
}
