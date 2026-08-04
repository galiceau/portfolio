import Image from "next/image";

import { references } from "@/content/profile";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function References({ dict }: { dict: Dictionary }) {
  const track = [...references, ...references];

  return (
    <section aria-label={dict.references.title} className="border-y border-border-subtle py-10">
      <p className="mb-6 text-center font-mono text-xs font-semibold uppercase tracking-[0.2em] text-fg-subtle">
        {dict.references.title}
      </p>

      <div className="marquee relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-28"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-28"
        />

        <ul className="marquee-track flex w-max items-center gap-4 px-6 sm:gap-5">
          {track.map((reference, index) => (
            <li
              key={`${reference.name}-${index}`}
              aria-hidden={index >= references.length}
              className="glass flex h-14 items-center gap-3 whitespace-nowrap rounded-btn border border-border-subtle px-5 transition-colors hover:border-accent/40"
            >
              {reference.logo && (
                <Image
                  src={reference.logo}
                  alt=""
                  width={28}
                  height={28}
                  unoptimized
                  className="size-7 object-contain"
                />
              )}
              <span className="font-display text-base font-semibold text-fg-muted sm:text-lg">
                {reference.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
