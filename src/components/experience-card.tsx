import type { Experience } from "@/content/experience";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function ExperienceCard({
  experience,
  locale,
  dict,
  compact = false,
}: {
  experience: Experience;
  locale: Locale;
  dict: Dictionary;
  compact?: boolean;
}) {
  const highlights = experience.highlights[locale];
  const shown = compact ? highlights.slice(0, 3) : highlights;

  return (
    <article className="rounded-card border border-border-subtle glass p-6 shadow-card transition duration-300 hover:border-accent/40 sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight">{experience.client}</h3>
          <p className="mt-1 text-sm font-medium text-accent">{experience.role[locale]}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {experience.current && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold text-accent-strong">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              {dict.experience.current}
            </span>
          )}
          {experience.freelance && (
            <span className="rounded-full border border-border-subtle px-2.5 py-1 text-[11px] font-medium text-fg-subtle">
              {dict.experience.freelance}
            </span>
          )}
        </div>
      </div>

      <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-fg-subtle">
        <span>{experience.period[locale]}</span>
        {experience.location && (
          <>
            <span aria-hidden="true">·</span>
            <span>{experience.location}</span>
          </>
        )}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-fg-muted text-pretty">
        {experience.summary[locale]}
      </p>

      {shown.length > 0 && (
        <ul className="mt-4 space-y-2">
          {shown.map((highlight) => (
            <li key={highlight} className="flex gap-2.5 text-sm leading-relaxed text-fg-muted">
              <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
              {highlight}
            </li>
          ))}
        </ul>
      )}

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {experience.stack.map((item) => (
          <li
            key={item}
            className="rounded-md border border-border-subtle px-2 py-0.5 font-mono text-[11px] text-fg-subtle"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
