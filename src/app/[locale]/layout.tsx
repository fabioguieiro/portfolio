import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";

import { locales, THEME_STORAGE_KEY, TLocale } from "@/config";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "../globals.css";

type TLocaleLayoutProps = {
  children: React.ReactNode;
  params: { locale: TLocale };
};

// Pre-renders one static page per locale instead of server-rendering on demand.
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Applies the stored theme before the first paint so a reload never flashes
// the light theme at someone who chose dark.
const themeScript = `(function(){try{if(localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)})==="dark"){document.documentElement.classList.add("dark")}}catch(e){}})()`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Absolute base for Open Graph URLs. Vercel exposes the production domain
// automatically; set NEXT_PUBLIC_SITE_URL to override or when hosting elsewhere.
function getMetadataBase() {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL &&
      `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);

  return url ? new URL(url) : undefined;
}

export async function generateMetadata({
  params: { locale },
}: Omit<TLocaleLayoutProps, "children">): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const title = t("title");
  const description = t("description");

  return {
    metadataBase: getMetadataBase(),
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale,
      images: ["/og-image.png"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: TLocaleLayoutProps) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="h-max">
        {/* Runs before the body is painted; the App Router drops raw scripts
            placed inside a hand-written <head>, so it lives here instead. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
