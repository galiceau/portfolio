import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { skillGroups } from "@/content/skills";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function Skills({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="skills" eyebrow="03" title={dict.skills.title} subtitle={dict.skills.subtitle}>
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.id}
            delay={(index % 2) * 80}
            className="rounded-card border border-border-subtle glass p-6 shadow-card"
          >
            <h3 className="font-display text-base font-semibold tracking-tight text-accent">
              {group.title[locale]}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border-subtle bg-bg px-2.5 py-1 text-xs font-medium text-fg-muted transition hover:border-accent/40 hover:text-fg"
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
