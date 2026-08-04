import { ExperienceCard } from "@/components/experience-card";
import { Reveal } from "@/components/reveal";
import { experiences } from "@/content/experience";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function Timeline({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="timeline" aria-labelledby="timeline-heading" className="scroll-mt-24">
      <Reveal>
        <h2
          id="timeline-heading"
          className="font-display text-2xl font-bold tracking-tight sm:text-3xl"
        >
          {dict.experience.timelineTitle}
        </h2>
        <p className="mt-3 text-base text-fg-muted">{dict.experience.timelineSubtitle}</p>
      </Reveal>

      <ol className="relative mt-10 space-y-6 sm:space-y-8 sm:pl-10">
        <span
          aria-hidden="true"
          className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border-strong sm:block"
        />

        {experiences.map((experience, index) => (
          <li key={experience.id} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-10 top-8 hidden size-4 rounded-full border-2 sm:block ${
                experience.current
                  ? "border-accent bg-accent"
                  : "border-border-strong bg-bg"
              }`}
            />
            <Reveal delay={Math.min(index, 6) * 50}>
              <ExperienceCard experience={experience} locale={locale} dict={dict} compact />
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
