import type { Metadata } from "next";
import { hasLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/ui/Decor";
import { BlogIndex } from "@/components/sections/blog";

export async function generateMetadata({ params }: PageProps<"/[lang]/blog">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return buildMetadata({
    lang,
    route: "blog",
    dict,
    title: dict.meta.blog.title,
    description: dict.meta.blog.description,
  });
}

export default async function BlogPage({ params }: PageProps<"/[lang]/blog">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return null;
  const dict = await getDictionary(lang);
  return (
    <>
      <BlogIndex lang={lang} dict={dict} />
      <JsonLd
        data={[
          webPageJsonLd({
            lang,
            route: "blog",
            name: dict.meta.blog.title,
            description: dict.meta.blog.description,
            type: "CollectionPage",
          }),
          breadcrumbJsonLd(lang, dict, [{ route: "blog", name: dict.meta.blog.title }]),
        ]}
      />
    </>
  );
}
