// Single source of truth for the supported locales.
// Kept free of runtime dependencies so it can be imported from the middleware
// (edge runtime), the i18n request config and the app router segments alike.
export const locales = ["en", "pt"] as const;

export const defaultLocale = "en" satisfies TLocale;

export type TLocale = (typeof locales)[number];

// Read by the pre-paint script in the layout (server) and by ThemeContext (client).
export const THEME_STORAGE_KEY = "portfolio-theme";
