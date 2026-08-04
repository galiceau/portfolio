import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, locales } from "@/lib/i18n/config";

const prefixedLocales = locales.filter((locale) => locale !== defaultLocale);

const METADATA_ROUTE = /\/(opengraph-image|twitter-image|icon|apple-icon)(\/|$)/;

export default function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  if (METADATA_ROUTE.test(pathname)) {
    return NextResponse.next();
  }
  if (
    prefixedLocales.some(
      (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
    )
  ) {
    return NextResponse.next();
  }
  if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
    const stripped = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(new URL(`${stripped}${search}`, request.url), 308);
  }
  const rewritten = request.nextUrl.clone();
  rewritten.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(rewritten);
}
export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
