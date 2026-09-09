import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";

import { locales, SITE_URL, THEME_STORAGE_KEY, TLocale } from "@/config";
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

// Absolute base for canonical and Open Graph URLs. See SITE_URL in config.ts
// for why this does not fall back to Vercel's project domain variable.
function getMetadataBase() {
  return new URL(process.env.NEXT_PUBLIC_SITE_URL || SITE_URL);
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
