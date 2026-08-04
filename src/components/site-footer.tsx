import Link from "next/link";

import { SocialIcon } from "@/components/social-icon";
import { profile, socialLinks } from "@/content/profile";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { localePath } from "@/lib/i18n/routing";

export function SiteFooter({
  locale,
  dict,
  year,
}: {
  locale: Locale;
  dict: Dictionary;
  year: number;
}) {
  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link
            href={localePath(locale, "/")}
            className="font-display text-base font-bold tracking-tight text-fg transition hover:text-accent"
          >
            {profile.brand}
            <span className="text-accent">.</span>
          </Link>
          <p className="mt-2 text-sm text-fg-subtle">
            © {year} {profile.name}. {dict.footer.rights}
          </p>
          <p className="mt-1 text-xs text-fg-subtle">{dict.footer.builtWith}</p>
        </div>

        <ul className="flex flex-wrap items-center gap-2">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                className="inline-flex size-9 items-center justify-center rounded-btn border border-border-subtle text-fg-muted transition hover:border-accent hover:text-accent"
              >
                <SocialIcon
                  id={link.id}
                  logo={link.logo}
                  label={link.label}
                  className="size-[18px]"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
