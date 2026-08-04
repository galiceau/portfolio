import { experiences } from "@/content/experience";
import { profile, siteUrl, socialLinks } from "@/content/profile";
import { skillGroups } from "@/content/skills";
import type { Locale } from "@/lib/i18n/config";
import { localeUrl } from "@/lib/i18n/routing";

export function StructuredData({ locale }: { locale: Locale }) {
  const current = experiences.find((experience) => experience.current);

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.brand,
    jobTitle: profile.role[locale],
    description: profile.intro[locale],
    url: localeUrl(siteUrl, locale, "/"),
    image: `${siteUrl}${profile.avatar}`,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gaillac-Toulza",
      postalCode: "31550",
      addressCountry: "FR",
    },
    knowsLanguage: ["fr", "en"],
    knowsAbout: skillGroups.flatMap((group) => group.items).slice(0, 30),
    sameAs: socialLinks.map((link) => link.href),
    ...(current
      ? {
          worksFor: {
            "@type": "Organization",
            name: current.client,
          },
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
    />
  );
}
