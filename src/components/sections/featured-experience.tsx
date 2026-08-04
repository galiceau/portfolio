import Link from "next/link";

import { ExperienceCard } from "@/components/experience-card";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { experiences, featuredExperiences } from "@/content/experience";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { localePath } from "@/lib/i18n/routing";

export function FeaturedExperience({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const seeAll = dict.experience.seeAll.replace("29", String(experiences.length));

  return (
    <Section
      id="experience"
      eyebrow="02"
      title={dict.experience.title}
      subtitle={dict.experience.subtitle}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {featuredExperiences.map((experience, index) => (
          <Reveal key={experience.id} delay={(index % 2) * 90}>
            <ExperienceCard experience={experience} locale={locale} dict={dict} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex justify-center">
        <Link
          href={localePath(locale, "/cv")}
          className="inline-flex items-center gap-2 rounded-btn border border-border-strong px-5 py-2.5 text-sm font-semibold text-fg transition hover:border-accent hover:text-accent"
        >
          {seeAll}
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
        </Link>
      </Reveal>
    </Section>
  );
}
