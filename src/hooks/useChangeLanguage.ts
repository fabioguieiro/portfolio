"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

import { TLocale } from "@/config";

/**
 * Swaps the locale segment of the current path, keeping the visitor on the
 * page they are already reading.
 */
export const useChangeLanguage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLanguage = useLocale() as TLocale;

  const changeLanguage = (language: TLocale) => {
    if (language === currentLanguage) return;

    const segments = pathname.split("/");
    segments[1] = language;

    router.replace(segments.join("/"));
  };

  return { currentLanguage, changeLanguage };
};
