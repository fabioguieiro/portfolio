import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "./config";

export default createMiddleware({
  // A list of all locales that are supported
  locales: [...locales],

  // Used when no locale matches
  defaultLocale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pt|en)/:path*"],
};
