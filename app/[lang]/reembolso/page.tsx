import type { Metadata } from "next";
import { hasLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { site } from "@/lib/content/site";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/ui/Decor";
import { LegalPage } from "@/components/sections/LegalPage";

export async function generateMetadata({ params }: PageProps<"/[lang]/reembolso">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return buildMetadata({
    lang,
    route: "refund",
    dict,
    title: dict.meta.refund.title,
    description: dict.meta.refund.description,
  });
}

export default async function RefundPage({ params }: PageProps<"/[lang]/reembolso">) {
  const { lang } = await params;
  if (!hasLocale(lang)) return null;
  const dict = await getDictionary(lang);
  return (
    <>
      <LegalPage lang={lang} dict={dict} doc={dict.legal.refund} email={site.emails.privacy} />
      <JsonLd data={breadcrumbJsonLd(lang, dict, [{ route: "refund", name: dict.meta.refund.title }])} />
    </>
  );
}
