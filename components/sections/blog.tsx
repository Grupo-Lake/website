import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/pt";
import { site } from "@/lib/content/site";
import { formatPostDate, posts, type Post } from "@/lib/content/posts";
import { href, postHref } from "@/lib/routes";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Placeholder } from "@/components/ui/Decor";
import { Container, Eyebrow, Heading } from "@/components/ui/Typography";

type Props = { lang: Locale; dict: Dictionary };

const sectionY = "py-[clamp(64px,8vw,96px)]";

/** Card de publicação: link esticado no título, usado no blog e na seção de notícias da home. */
export function PostCard({ lang, dict, post }: Props & { post: Post }) {
  const copy = post.copy[lang];
  return (
    <Card interactive className="relative h-full overflow-hidden">
      <Placeholder
        label={copy.title}
        tone="ink"
        image={post.image}
        sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
        className="aspect-video border-0 border-b"
      />
      <article className="px-6 pt-[22px] pb-[26px]">
        <div className="flex items-center gap-2.5">
          <Badge tone={post.tone} size="sm">
            {dict.blog.categories[post.category]}
          </Badge>
          <time dateTime={post.date} className="font-mono text-[12px] text-muted">
            {formatPostDate(post.date, lang)}
          </time>
        </div>
        <h3 className="mt-3.5 font-display text-[22px] leading-[1.25] text-pretty text-strong">
          <Link href={postHref(lang, post.slug)} className="after:absolute after:inset-0 after:content-['']">
            {copy.title}
          </Link>
        </h3>
        <p className="mt-2.5 text-[15px] leading-[1.6] text-pretty">{copy.excerpt}</p>
        <p className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-lake-700">
          {dict.blog.readMore} <Icon name="arrow-right" size={16} />
        </p>
      </article>
    </Card>
  );
}

export function BlogIndex({ lang, dict }: Props) {
  const b = dict.blog;
  return (
    <section aria-labelledby="blog-title" className={`px-6 ${sectionY}`}>
      <Container>
        <Eyebrow>{b.eyebrow}</Eyebrow>
        <Heading as="h1" id="blog-title" size="lg" className="mt-3.5 text-strong">
          {b.title}
        </Heading>
        <p data-speakable className="mt-5 max-w-[640px] text-[18px] leading-[1.65] text-pretty">
          {b.lead}
        </p>
        <ul aria-label={b.listLabel} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <PostCard lang={lang} dict={dict} post={post} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function BlogArticle({ lang, dict, post }: Props & { post: Post }) {
  const b = dict.blog;
  const copy = post.copy[lang];
  return (
    <article className={`px-6 ${sectionY}`}>
      <div className="mx-auto max-w-[760px]">
        <Link
          href={href(lang, "blog")}
          className="inline-flex min-h-11 items-center gap-1.5 text-[14px] font-semibold text-lake-700"
        >
          <Icon name="arrow-left" size={16} /> {b.back}
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          <Badge tone={post.tone} size="sm">
            {b.categories[post.category]}
          </Badge>
          <span className="font-mono text-[12px] uppercase tracking-[.12em] text-muted">{b.kinds[post.kind]}</span>
        </div>
        <Heading as="h1" size="lg" className="mt-4 text-strong">
          {copy.title}
        </Heading>
        <p className="mt-4 font-mono text-[12px] uppercase tracking-[.12em] text-muted">
          {b.by} {site.founder.name} · {b.published}{" "}
          <time dateTime={post.date}>{formatPostDate(post.date, lang)}</time> · {post.minutes} {b.minutes}
        </p>
        <p data-speakable className="mt-8 text-[19px] leading-[1.65] text-pretty text-strong">
          {copy.excerpt}
        </p>
        <Placeholder
          label={copy.title}
          tone="ink"
          image={post.image}
          priority
          sizes="(min-width: 800px) 760px, 100vw"
          className="mt-10 aspect-video rounded-lg"
        />
        <div className="mt-10">
          {copy.body.map((block, i) =>
            "h2" in block ? (
              <h2 key={i} className="mt-10 font-display text-[26px] leading-[1.2] text-strong">
                {block.h2}
              </h2>
            ) : "ul" in block ? (
              <ul key={i} className="mt-4 list-disc space-y-2 pl-6 text-[17px] leading-[1.7] marker:text-lake-500">
                {block.ul.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            ) : (
              <p key={i} className="mt-4 text-[17px] leading-[1.75] text-pretty">
                {block.p}
              </p>
            ),
          )}
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-5 rounded-xl border border-subtle bg-sunken p-7">
          <p className="max-w-[420px] font-display text-[22px] leading-[1.25] text-strong">{b.cta.title}</p>
          <ButtonLink href={href(lang, "home", "contato")}>{b.cta.button}</ButtonLink>
        </div>
      </div>
    </article>
  );
}
