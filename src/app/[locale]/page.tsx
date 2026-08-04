import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";
import { Expertise } from "@/components/sections/expertise";
import { FeaturedExperience } from "@/components/sections/featured-experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { References } from "@/components/sections/references";
import { Skills } from "@/components/sections/skills";
import { StructuredData } from "@/components/structured-data";
import { siteUrl } from "@/content/profile";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { localeUrl } from "@/lib/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);

  return {
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
    alternates: {
      canonical: localeUrl(siteUrl, locale, "/"),
      languages: Object.fromEntries(
        locales.map((other) => [other, localeUrl(siteUrl, other, "/")]),
      ),
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <StructuredData locale={locale} />
      <Hero locale={locale} dict={dict} />
      <References dict={dict} />
      <Expertise locale={locale} dict={dict} />
      <FeaturedExperience locale={locale} dict={dict} />
      <Skills locale={locale} dict={dict} />
      <Projects dict={dict} />
      <Blog locale={locale} dict={dict} />
      <Contact locale={locale} dict={dict} />
    </>
  );
}
