export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, { flag: string; short: string; name: string }> = {
  fr: { flag: "🇫🇷", short: "FR", name: "Français" },
  en: { flag: "🇬🇧", short: "EN", name: "English" },
};

export const htmlLang: Record<Locale, string> = {
  fr: "fr-FR",
  en: "en-US",
};

export const ogLocale: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_US",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export type Localized<T = string> = Record<Locale, T>;

export function t<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}
