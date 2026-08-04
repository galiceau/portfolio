"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { localeLabels, locales, type Locale } from "@/lib/i18n/config";
import { localePath, pathWithoutLocale } from "@/lib/i18n/routing";

export function LocaleSwitcher({ current, label }: { current: Locale; label: string }) {
  const pathname = usePathname();
  const basePath = pathWithoutLocale(pathname ?? "/");

  return (
    <div
      className="inline-flex items-center rounded-full border border-border-subtle glass p-0.5"
      role="group"
      aria-label={label}
    >
      {locales.map((locale) => {
        const active = locale === current;

        return (
          <Link
            key={locale}
            href={localePath(locale, basePath)}
            hrefLang={locale}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition ${
              active
                ? "btn-primary"
                : "text-fg-subtle hover:text-accent"
            }`}
          >
            {localeLabels[locale].short}
          </Link>
        );
      })}
    </div>
  );
}
