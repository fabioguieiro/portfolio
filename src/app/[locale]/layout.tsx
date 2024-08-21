import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import "../globals.css";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html className="dark" lang={locale}>
      <body className="bg-cream text-black dark:bg-royal dark:text-gold">
        <NextIntlClientProvider messages={messages}>
          <body className="h-max">{children}</body>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
