import type { Locale } from "@/lib/i18n/config";
import type { SiteImage } from "../images";

/** Blocos de corpo do artigo: subtítulo, parágrafo ou lista. */
export type Block = { h2: string } | { p: string } | { ul: string[] };

export type PostCopy = {
  title: string;
  /** Resumo usado no card, na meta description e no JSON-LD. */
  excerpt: string;
  body: Block[];
};

/** Chave de rótulo em `dict.blog.categories`. */
export type PostCategory = "product" | "education" | "software" | "group";

export type Post = {
  /** Compartilhado entre idiomas (só o prefixo /pt | /en muda). */
  slug: string;
  /** Data de publicação neste site (ISO, AAAA-MM-DD). */
  date: string;
  /** "news" aparece na home; "article" só no blog. */
  kind: "news" | "article";
  category: PostCategory;
  tone: "brand" | "info" | "neutral" | "accent";
  image: SiteImage;
  minutes: number;
  copy: Record<Locale, PostCopy>;
};
