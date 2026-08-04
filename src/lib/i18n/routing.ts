import { defaultLocale, locales, type Locale } from "./config";

export function localePath(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) {
    return clean === "" ? "/" : clean;
  }
  return `/${locale}${clean}`;
}

export function localeUrl(siteUrl: string, locale: Locale, path = "/"): string {
  const relative = localePath(locale, path);
  return relative === "/" ? siteUrl : `${siteUrl}${relative}`;
}
export function pathWithoutLocale(pathname: string): string {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }
  return pathname || "/";
}
