import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  centered?: boolean;
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  centered = false,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className={`mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 ${className}`}
    >
      <Reveal className={centered ? "text-center" : ""}>
        {eyebrow && (
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        )}
        <h2
          id={id ? `${id}-heading` : undefined}
          className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl"
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-4 max-w-2xl text-base leading-relaxed text-fg-muted text-pretty ${
              centered ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </p>
        )}
      </Reveal>

      <div className="mt-12">{children}</div>
    </section>
  );
}
