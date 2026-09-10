import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { locales, TLocale } from "@/config";

// The contacts page is a client component, so its metadata lives in this layout.
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: TLocale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const title = t("contactsTitle");
  const description = t("contactsDescription");

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/contacts`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/contacts`])),
    },
    openGraph: { title, description, type: "profile", locale },
  };
}

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
