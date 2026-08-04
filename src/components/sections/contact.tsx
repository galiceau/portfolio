import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { CalendarIcon, SocialIcon } from "@/components/social-icon";
import { profile, socialLinks } from "@/content/profile";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function Contact({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section
      id="contact"
      eyebrow="06"
      title={dict.contact.title}
      subtitle={dict.contact.subtitle}
      centered
    >
      <Reveal className="mx-auto max-w-2xl">
        <div className="rounded-card border border-border-subtle glass p-8 shadow-card sm:p-10">
          <div className="rounded-card border border-accent/30 bg-accent-soft p-6 text-center sm:p-8">
            <a
              href={profile.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2.5 rounded-btn px-6 py-3 text-base font-semibold transition"
            >
              <CalendarIcon className="size-5" />
              {dict.contact.book}
            </a>
            <p className="mt-3 text-sm text-fg-muted">{dict.contact.bookHint}</p>
          </div>

          <p className="mt-8 text-center font-mono text-xs font-semibold uppercase tracking-[0.2em] text-fg-subtle">
            {dict.contact.orEmail}
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-3 block break-words text-center font-display text-lg font-semibold text-accent underline-offset-4 transition hover:underline sm:text-xl"
          >
            {profile.email}
          </a>

          <p className="mt-4 text-center text-sm text-fg-muted">📍 {profile.location[locale]}</p>

          <div className="mt-8 border-t border-border-subtle pt-6">
            <p className="text-center font-mono text-xs font-semibold uppercase tracking-[0.2em] text-fg-subtle">
              {dict.contact.elsewhere}
            </p>
            <ul className="mt-4 flex flex-wrap justify-center gap-3">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border-subtle px-4 py-2 text-sm font-medium text-fg-muted transition hover:border-accent hover:text-accent"
                  >
                    <SocialIcon
                      id={link.id}
                      logo={link.logo}
                      label={link.label}
                      className="size-4"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
