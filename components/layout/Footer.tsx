import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/pt";
import { site } from "@/lib/content/site";
import { href } from "@/lib/routes";
import { Logo } from "@/components/ui/Decor";
import { InstagramIcon, LinkedinIcon } from "@/components/ui/Icon";

const linkCls = "text-on-dark-muted hover:text-on-dark";

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[11px] text-[14px]">
      <h2 className="mb-1 font-mono text-[11px] uppercase tracking-[.12em] text-lake-300">{title}</h2>
      <ul className="flex flex-col gap-[11px]">{children}</ul>
    </div>
  );
}

export function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const f = dict.footer;
  const social = [
    { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
    { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedinIcon },
  ];
  return (
    <footer className="bg-ink-900 px-6 pt-[72px] pb-10 font-sans text-on-dark-muted">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/10 pb-10">
          <div>
            <Link href={`/${lang}`} className="inline-flex">
              <Logo dark />
              <span className="sr-only"> — {dict.nav.homeLabel}</span>
            </Link>
            <p className="mt-4 max-w-[360px] text-[15px] leading-relaxed">{f.tagline}</p>
          </div>
          <ul aria-label={f.social} className="flex gap-2.5">
            {social.map(({ label, href: url, Icon }) => (
              <li key={label}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} ${dict.common.opensInNewTab}`}
                  className="flex size-11 items-center justify-center rounded-[12px] border border-white/16 text-on-dark transition-colors hover:bg-white/8 hover:text-on-dark"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-9 sm:grid-cols-3">
          <Column title={f.groupTitle}>
            <li><Link className={linkCls} href={href(lang, "home", "grupo")}>{f.group.about}</Link></li>
            <li><Link className={linkCls} href={href(lang, "home", "lideranca")}>{f.group.leadership}</Link></li>
            <li><Link className={linkCls} href={href(lang, "home", "portfolio")}>{f.group.portfolio}</Link></li>
            <li><Link className={linkCls} href={href(lang, "careers")}>{f.group.careers}</Link></li>
          </Column>
          <Column title={f.softwareTitle}>
            <li><Link className={linkCls} href={href(lang, "software", "servicos")}>{f.software.services}</Link></li>
            <li><Link className={linkCls} href={href(lang, "software", "cases")}>{f.software.cases}</Link></li>
            <li><Link className={linkCls} href={href(lang, "software", "contato")}>{f.software.start}</Link></li>
          </Column>
          <Column title={f.contactTitle}>
            <li><a className={`${linkCls} break-all`} href={`mailto:${site.emails.contact}`}>{site.emails.contact}</a></li>
            <li><a className={`${linkCls} break-all`} href={`mailto:${site.emails.press}`}>{site.emails.press}</a></li>
            <li><Link className={linkCls} href={href(lang, "home", "imprensa")}>{f.press}</Link></li>
          </Column>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-[12.5px] leading-relaxed">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.legalName} · CNPJ {site.cnpj} · {site.city}, {site.region}
          </p>
          <nav aria-label={f.legalNav}>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              <li><Link className={linkCls} href={href(lang, "privacy")}>{f.privacy}</Link></li>
              <li><a className={linkCls} href={`mailto:${site.emails.ethics}`}>{f.ethics}</a></li>
              <li><Link className={linkCls} href={href(lang, "terms")}>{f.terms}</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
