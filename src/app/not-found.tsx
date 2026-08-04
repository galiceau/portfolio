import Link from "next/link";

import { defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

import "./globals.css";

export default function NotFound() {
  const dict = getDictionary(defaultLocale);

  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center font-sans">
        <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          404
        </p>
        <h1 className="text-3xl font-bold tracking-tight">{dict.notFound.title}</h1>
        <p className="text-fg-muted">{dict.notFound.description}</p>
        <Link
          href="/"
          className="btn-primary mt-2 rounded-btn px-5 py-2.5 text-sm font-semibold"
        >
          {dict.nav.backHome}
        </Link>
      </body>
    </html>
  );
}
