import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { expertiseAreas } from "@/content/expertise";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function Expertise({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section
      id="expertise"
      eyebrow="01"
      title={dict.expertise.title}
      subtitle={dict.expertise.subtitle}
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {expertiseAreas.map((area, index) => (
          <Reveal
            key={area.id}
            delay={index * 90}
            as="article"
            className="group flex flex-col rounded-card border border-border-subtle glass p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent/40"
          >
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
              <svg
                viewBox="0 0 24 24"
                className="size-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d={area.icon} />
              </svg>
            </span>

            <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-balance">
              {area.title[locale]}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-fg-muted text-pretty">
              {area.summary[locale]}
            </p>

            <ul className="mt-5 space-y-2.5 border-t border-border-subtle pt-5">
              {area.points[locale].map((point) => (
                <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-fg-muted">
                  <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>

            <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
              {area.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border-subtle px-2 py-0.5 font-mono text-[11px] text-fg-subtle"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
