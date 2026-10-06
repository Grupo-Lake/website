import type { Metadata } from "next";
import { hasLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { site } from "@/lib/content/site";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/ui/Decor";
import { LegalPage } from "@/components/sections/LegalPage";

export async function generateMetadata({ params }: PageProps<"/[lang]/termos">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return buildMetadata({
    lang,
    route: "terms",
    dict,
    title: dict.meta.terms.title,
    description: dict.meta.terms.description,
  });
}

export default async function TermsPage({ params }: PageProps<"/[lang]/termos">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return null;
  const dict = await getDictionary(lang);
  return (
    <>
      <LegalPage lang={lang} dict={dict} doc={dict.legal.terms} email={site.emails.contact} />
      <JsonLd data={breadcrumbJsonLd(lang, dict, [{ route: "terms", name: dict.meta.terms.title }])} />
    </>
  );
}
