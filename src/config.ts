// Single source of truth for the supported locales.
// Kept free of runtime dependencies so it can be imported from the middleware
// (edge runtime), the i18n request config and the app router segments alike.
export const locales = ["en", "pt"] as const;

export const defaultLocale = "en" satisfies TLocale;

export type TLocale = (typeof locales)[number];

// Read by the pre-paint script in the layout (server) and by ThemeContext (client).
export const THEME_STORAGE_KEY = "portfolio-theme";

/**
 * Origin used for canonical and Open Graph URLs.
 *
 * Deliberately a constant rather than Vercel's VERCEL_PROJECT_PRODUCTION_URL:
 * that variable reports whatever custom domain the project has attached, even
 * when the domain has no DNS yet, which silently points canonical tags and
 * preview images at a dead host. Override with NEXT_PUBLIC_SITE_URL, and
 * update this value when a custom domain actually goes live.
 */
export const SITE_URL = "https://fabioguieiro.vercel.app";
