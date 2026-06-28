import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["fr", "en", "pt"] as const;
const defaultLocale = "fr";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    const locale = pathname.split("/")[1];
    const response = NextResponse.next({
      request: {
        headers: new Headers({
          ...Object.fromEntries(request.headers.entries()),
          "x-locale": locale,
        }),
      },
    });
    return response;
  }

  // Always redirect to French by default — language is only changed
  // when the user explicitly clicks the switcher in the navbar.
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/).*)" ],
};
