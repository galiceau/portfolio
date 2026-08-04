import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { profile, siteUrl } from "@/content/profile";
import { htmlLang, isLocale, locales, ogLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { localeUrl } from "@/lib/i18n/routing";

import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dict.meta.homeTitle,
      template: `%s · ${profile.name}`,
    },
    description: dict.meta.homeDescription,
    applicationName: profile.brand,
    authors: [{ name: profile.name, url: siteUrl }],
    creator: profile.name,
    keywords: [
      "AWS Architect",
      "Cloud Security",
      "Landing Zone",
      "FinOps",
      "Terraform",
      "RAG",
      "Agentic AI",
      "Amazon Bedrock",
      "Freelance",
      profile.name,
      profile.brand,
    ],
    openGraph: {
      type: "website",
      siteName: `${profile.name} — ${profile.role[locale]}`,
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
      url: localeUrl(siteUrl, locale, "/"),
      locale: ogLocale[locale],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <html
      lang={htmlLang[locale]}
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} h-full`}
    >
      <head>
        <noscript>
          <style>{`.reveal{opacity:1 !important;animation:none !important}`}</style>
        </noscript>
      </head>
      <body suppressHydrationWarning className="flex min-h-full flex-col font-sans">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-btn focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-contrast"
          >
            {dict.nav.skipToContent}
          </a>
          <SiteHeader locale={locale} dict={dict} />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter locale={locale} dict={dict} year={new Date().getFullYear()} />
        </ThemeProvider>
      </body>
    </html>
  );
}
