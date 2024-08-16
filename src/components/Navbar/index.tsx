"use client";
import { NavItem } from "./NavItem";
import { NavLogo } from "./NavLogo";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export const Navbar = () => {
  const t = useTranslations("HomePage");
  const router = useRouter();
  const locale = useLocale();

  const handleChangeLanguage = () => {
    locale === "en" ? router.replace("/pt") : router.replace("/en");
  };

  return (
    <nav className="w-full h-14 border-b-4 border-black flex justify-between">
      <div className="flex">
        <NavLogo />
        <NavItem name={t("projects")} />
        <NavItem name={t("timeline")} />
        <NavItem name={t("contacts")} />
      </div>
      <div className="flex items-center">
        <p className="mr-10">dark / light</p>
        <p className="mr-10" onClick={handleChangeLanguage}>
          eng / pt-br
        </p>
      </div>
    </nav>
  );
};
