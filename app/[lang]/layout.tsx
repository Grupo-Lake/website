import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Hanken_Grotesk, IBM_Plex_Mono, Newsreader } from "next/font/google";
import "../globals.css";
import { hasLocale, htmlLang, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { site } from "@/lib/content/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/ui/Decor";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
});
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#0C1512",
  colorScheme: "light",
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    metadataBase: new URL(site.url),
    title: { default: dict.meta.siteTitle, template: `%s · ${site.name}` },
    description: dict.meta.defaultDescription,
    applicationName: site.name,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    publisher: site.name,
    category: "business",
    formatDetection: { email: false, address: false, telephone: false },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <html lang={htmlLang[lang]} className={`${newsreader.variable} ${hanken.variable} ${plexMono.variable}`}>
      <body className="min-h-dvh bg-paper font-sans text-body antialiased">
        <a
          href="#conteudo"
          className="sr-only z-[60] rounded-md bg-ink-900 px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:text-paper"
        >
          {dict.nav.skipToContent}
        </a>
        <Header lang={lang} nav={dict.nav} />
        <main id="conteudo" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer lang={lang} dict={dict} />
        <JsonLd data={[organizationJsonLd(dict), websiteJsonLd(lang)]} />
      </body>
    </html>
  );
}
