import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { locales, TLocale } from "@/config";

// The career page is a client component, so its metadata lives in this layout.
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: TLocale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const title = t("careerTitle");
  const description = t("careerDescription");

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/career`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/career`])),
    },
    openGraph: { title, description, type: "profile", locale },
  };
}

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
