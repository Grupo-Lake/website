import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getPost, posts } from "@/lib/content/posts";
import { blogPostingJsonLd, breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/ui/Decor";
import { BlogArticle } from "@/components/sections/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/blog/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = getPost(slug);
  if (!hasLocale(lang) || !post) return {};
  const dict = await getDictionary(lang);
  const copy = post.copy[lang];
  return buildMetadata({
    lang,
    route: "blog",
    subpath: `/${slug}`,
    ogType: "article",
    dict,
    title: copy.title,
    description: copy.excerpt,
  });
}

export default async function BlogPostPage({ params }: PageProps<"/[lang]/blog/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return null;
  const post = getPost(slug);
  if (!post) notFound();
  const dict = await getDictionary(lang);
  const copy = post.copy[lang];
  return (
    <>
      <BlogArticle lang={lang} dict={dict} post={post} />
      <JsonLd
        data={[
          blogPostingJsonLd({
            lang,
            slug,
            headline: copy.title,
            description: copy.excerpt,
            date: post.date,
            image: post.image.src,
          }),
          breadcrumbJsonLd(lang, dict, [
            { route: "blog", name: dict.meta.blog.title },
            { route: "blog", name: copy.title, subpath: `/${slug}` },
          ]),
        ]}
      />
    </>
  );
}
