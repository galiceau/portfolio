import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { profile } from "@/content/profile";
import { htmlLang, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { getArticles } from "@/lib/medium";

export async function Blog({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const articles = await getArticles();
  const formatter = new Intl.DateTimeFormat(htmlLang[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Section id="blog" eyebrow="05" title={dict.blog.title} subtitle={dict.blog.subtitle}>
      {articles.length === 0 ? (
        <Reveal className="rounded-card border border-dashed border-border-strong glass p-10 text-center">
          <p className="text-sm text-fg-muted">
            {dict.blog.error}{" "}
            <a
              href={profile.mediumFeed.replace("/feed", "")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent underline-offset-4 hover:underline"
            >
              medium.joce.cloud
            </a>
          </p>
        </Reveal>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2">
            {articles.map((article, index) => (
              <Reveal
                key={article.id}
                delay={(index % 2) * 80}
                as="article"
                className="group relative flex flex-col overflow-hidden rounded-card border border-border-subtle glass shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent/40"
              >
                {article.thumbnail && (
                  <div className="relative aspect-[16/9] overflow-hidden bg-bg">
                    <Image
                      src={article.thumbnail}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  {article.publishedAt && (
                    <time
                      dateTime={article.publishedAt}
                      className="font-mono text-xs text-fg-subtle"
                    >
                      {formatter.format(new Date(article.publishedAt))}
                    </time>
                  )}

                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug tracking-tight text-balance">
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-accent"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      {article.title}
                    </a>
                  </h3>

                  {article.excerpt && (
                    <p className="mt-3 text-sm leading-relaxed text-fg-muted text-pretty">
                      {article.excerpt}
                    </p>
                  )}

                  <p className="mt-auto pt-5 text-sm font-semibold text-accent">
                    {dict.blog.read} →
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <a
              href={profile.mediumFeed.replace("/feed", "")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              {dict.blog.seeAll}
            </a>
          </Reveal>
        </>
      )}
    </Section>
  );
}
