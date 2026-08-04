import type { MetadataRoute } from "next";

import { siteUrl } from "@/content/profile";
import { locales } from "@/lib/i18n/config";
import { localeUrl } from "@/lib/i18n/routing";

export const dynamic = "force-static";

const PATHS = ["/", "/cv"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    PATHS.map((path) => ({
      url: localeUrl(siteUrl, locale, path),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((other) => [other, localeUrl(siteUrl, other, path)]),
        ),
      },
    })),
  );
}
