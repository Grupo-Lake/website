import type { Metadata } from "next";
import { hasLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { site } from "@/lib/content/site";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/ui/Decor";
import { LegalPage } from "@/components/sections/LegalPage";

export async function generateMetadata({ params }: PageProps<"/[lang]/seguranca">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return buildMetadata({
    lang,
    route: "security",
    dict,
    title: dict.meta.security.title,
    description: dict.meta.security.description,
  });
}

export default async function SecurityPage({ params }: PageProps<"/[lang]/seguranca">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return null;
  const dict = await getDictionary(lang);
  return (
    <>
      <LegalPage lang={lang} dict={dict} doc={dict.legal.security} email={site.emails.privacy} />
      <JsonLd data={breadcrumbJsonLd(lang, dict, [{ route: "security", name: dict.meta.security.title }])} />
    </>
  );
}
