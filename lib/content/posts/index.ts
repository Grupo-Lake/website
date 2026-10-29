import type { Locale } from "@/lib/i18n/config";
import type { Post } from "./types";
import { aiCostControl } from "./ai-cost-control";
import { lakeFinanceBeta } from "./lake-finance-beta";
import { legalPages } from "./legal-pages";
import { lgpdDigitalProducts } from "./lgpd-digital-products";
import { opamFirstAidCourse } from "./opam-first-aid-course";
import { openFinanceExplained } from "./open-finance-explained";
import { readOnlyFinanceApps } from "./read-only-finance-apps";
import { softwareHouseProjects } from "./software-house-projects";

export type { Block, Post, PostCategory, PostCopy } from "./types";

/** Mais recentes primeiro; a ordem do array desempata datas iguais. */
export const posts: Post[] = [
  opamFirstAidCourse,
  lakeFinanceBeta,
  legalPages,
  openFinanceExplained,
  readOnlyFinanceApps,
  lgpdDigitalProducts,
  aiCostControl,
  softwareHouseProjects,
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const getNews = (limit = 3) => posts.filter((p) => p.kind === "news").slice(0, limit);

export const formatPostDate = (date: string, lang: Locale) =>
  new Date(`${date}T12:00:00`).toLocaleDateString(lang === "pt" ? "pt-BR" : "en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
