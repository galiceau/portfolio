import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CvDownload } from "@/components/cv-download";
import { Reveal } from "@/components/reveal";
import { Timeline } from "@/components/sections/timeline";
import { CalendarIcon } from "@/components/social-icon";
import { education } from "@/content/education";
import { certifications, languages, profile, siteUrl } from "@/content/profile";
import { skillGroups } from "@/content/skills";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { localeUrl } from "@/lib/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);

  return {
    title: dict.nav.cv,
    description: dict.meta.cvDescription,
    alternates: {
      canonical: localeUrl(siteUrl, locale, "/cv"),
      languages: Object.fromEntries(
        locales.map((other) => [other, localeUrl(siteUrl, other, "/cv")]),
      ),
    },
    openGraph: {
      title: dict.meta.cvTitle,
      description: dict.meta.cvDescription,
      url: localeUrl(siteUrl, locale, "/cv"),
    },
  };
}

export default async function CvPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
      <Reveal>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {dict.nav.cv}
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-2 font-display text-lg font-semibold text-fg-muted">
          {profile.role[locale]} · {profile.location[locale]}
        </p>
        <p className="mt-6 text-base leading-relaxed text-fg-muted text-pretty">
          {profile.intro[locale]}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {certifications.map((certification) => (
            <li
              key={certification.en}
              className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-strong"
            >
              {certification[locale]}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <CvDownload locale={locale} dict={dict} variant="solid" />
          <a
            href={profile.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-btn border border-border-strong px-5 py-2.5 text-sm font-semibold text-fg transition hover:border-accent hover:text-accent"
          >
            <CalendarIcon />
            {dict.contact.book}
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-btn border border-border-strong px-5 py-2.5 text-sm font-semibold text-fg transition hover:border-accent hover:text-accent"
          >
            {dict.hero.ctaContact}
          </a>
        </div>
      </Reveal>

      <div aria-hidden="true" className="rule-gradient my-14 h-px" />

      <Timeline locale={locale} dict={dict} />

      <div aria-hidden="true" className="rule-gradient my-14 h-px" />

      <section aria-labelledby="education-heading" className="scroll-mt-24">
        <Reveal>
          <h2
            id="education-heading"
            className="font-display text-2xl font-bold tracking-tight sm:text-3xl"
          >
            {dict.education.title}
          </h2>
        </Reveal>

        <ul className="mt-8 space-y-px overflow-hidden rounded-card border border-border-subtle bg-border-subtle">
          {education.map((entry, index) => (
            <li key={entry.id}>
              <Reveal
                delay={Math.min(index, 5) * 50}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 glass px-6 py-5"
              >
                <div>
                  <p className="font-display text-base font-semibold">
                    {entry.school}
                    {entry.certification && (
                      <span className="ml-2 rounded-full bg-accent-soft px-2 py-0.5 align-middle text-[10px] font-semibold uppercase tracking-wide text-accent-strong">
                        {dict.education.certification}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-sm text-fg-muted">{entry.title[locale]}</p>
                </div>
                <p className="font-mono text-xs text-fg-subtle">{entry.date[locale]}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <div aria-hidden="true" className="rule-gradient my-14 h-px" />

      <section aria-labelledby="cv-skills-heading" className="scroll-mt-24">
        <Reveal>
          <h2
            id="cv-skills-heading"
            className="font-display text-2xl font-bold tracking-tight sm:text-3xl"
          >
            {dict.skills.title}
          </h2>
        </Reveal>

        <dl className="mt-8 space-y-6">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={Math.min(index, 5) * 50}>
              <dt className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
                {group.title[locale]}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-fg-muted">
                {group.items.join(" · ")}
              </dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <div aria-hidden="true" className="rule-gradient my-14 h-px" />

      <section aria-labelledby="languages-heading" className="scroll-mt-24">
        <Reveal>
          <h2
            id="languages-heading"
            className="font-display text-2xl font-bold tracking-tight sm:text-3xl"
          >
            {dict.languages.title}
          </h2>
        </Reveal>

        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          {languages.map((language) => (
            <Reveal
              key={language.name.en}
              className="flex items-baseline justify-between gap-4 rounded-xl border border-border-subtle glass px-5 py-4"
            >
              <dt className="font-display text-base font-semibold">{language.name[locale]}</dt>
              <dd className="text-sm text-fg-muted">{language.level[locale]}</dd>
            </Reveal>
          ))}
        </dl>
      </section>
    </div>
  );
}
