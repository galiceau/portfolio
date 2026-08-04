import Link from "next/link";

import { defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { localePath } from "@/lib/i18n/routing";

export default function LocaleNotFound() {
  const dict = getDictionary(defaultLocale);

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-5 py-32 text-center sm:px-8">
      <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        {dict.notFound.title}
      </h1>
      <p className="mt-4 text-base text-fg-muted">{dict.notFound.description}</p>
      <Link
        href={localePath(defaultLocale, "/")}
        className="btn-primary mt-8 inline-flex items-center gap-2 rounded-btn px-5 py-2.5 text-sm font-semibold transition"
      >
        {dict.nav.backHome}
      </Link>
    </div>
  );
}
