import Image from "next/image";
import Link from "next/link";

import { CvDownload } from "@/components/cv-download";
import { HeroBackdrop, Sparkle } from "@/components/hero-backdrop";
import { Reveal } from "@/components/reveal";
import { SocialIcon } from "@/components/social-icon";
import { certifications, profile, socialLinks } from "@/content/profile";
import { clientCount, experiences } from "@/content/experience";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { localePath } from "@/lib/i18n/routing";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const stats = [
    { value: `${experiences.length}`, label: dict.hero.stats.missions },
    { value: `${clientCount}`, label: dict.hero.stats.clients },
    { value: `${certifications.length}`, label: dict.hero.stats.certifications },
  ];

  return (
    <section id="hero" className="relative overflow-hidden">
      <HeroBackdrop />

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
          <Reveal>
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-fg-muted">
              {dict.hero.pillars.map((pillar, index) => (
                <li key={pillar} className="flex items-center gap-4">
                  {index > 0 && (
                    <span aria-hidden="true" className="h-4 w-px bg-border-strong" />
                  )}
                  {pillar}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="relative">
                <Sparkle className="absolute -left-3 -top-2 size-3 text-accent" />
                <Sparkle className="absolute -right-2 -bottom-1 size-2.5 text-accent/70" />
                <span className="badge-years inline-flex items-center rounded-btn px-3.5 py-1.5 font-display text-lg font-extrabold sm:text-xl">
                  +{profile.yearsOfExperience} {dict.hero.yearsShort}
                </span>
              </span>
              <span className="font-display text-lg font-medium text-fg sm:text-xl">
                {dict.hero.yearsLabel}
              </span>
            </div>

            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>

            <p className="display-caps mt-4 font-display text-xl font-bold sm:text-2xl">
              {profile.role[locale]}
            </p>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-fg-muted text-pretty">
              {profile.tagline[locale]}
            </p>

            <p className="glass mt-6 inline-flex items-center gap-2 rounded-full border border-border-subtle px-3 py-1.5 text-xs font-medium text-fg-muted">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              {dict.hero.available}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="btn-primary inline-flex items-center gap-2 rounded-btn px-5 py-2.5 text-sm font-semibold transition"
              >
                {dict.hero.ctaContact}
                <ArrowIcon />
              </a>
              <Link
                href={localePath(locale, "/cv")}
                className="glass inline-flex items-center gap-2 rounded-btn border border-border-strong px-5 py-2.5 text-sm font-semibold text-fg transition hover:border-accent hover:text-accent"
              >
                {dict.hero.ctaCv}
              </Link>
              <CvDownload locale={locale} dict={dict} />
            </div>

            <ul className="mt-7 flex flex-wrap items-center gap-3">
              {socialLinks
                .filter((link) => link.primary)
                .map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      title={link.label}
                      className="glass inline-flex size-10 items-center justify-center rounded-btn border border-border-subtle text-fg-muted transition hover:border-accent hover:text-accent"
                    >
                      <SocialIcon id={link.id} logo={link.logo} label={link.label} />
                    </a>
                  </li>
                ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="justify-self-center lg:justify-self-end">
            <div className="relative">
              <div
                aria-hidden="true"
                className="brand-gradient absolute -inset-3 rounded-card opacity-70 blur-xl"
              />
              <div className="glass relative rounded-card border border-border-subtle p-2 shadow-card">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={320}
                  height={320}
                  priority
                  className="size-56 rounded-[14px] object-cover sm:size-72"
                />
                <p className="px-2 pb-1 pt-4 text-center font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
                  {profile.brand}
                </p>
                <p className="px-2 pb-3 text-center text-xs text-fg-subtle">
                  {profile.badge[locale]}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <dl className="mt-16 grid gap-px overflow-hidden rounded-card border border-border-subtle bg-border-subtle sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="glass px-6 py-6 text-center sm:text-left">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="brand-gradient-text font-display text-3xl font-extrabold">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-sm text-fg-muted">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-10 text-center font-mono text-sm text-fg-subtle">
            « {profile.motto[locale]} »
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}
