"use client";
import { NavItem } from "./NavItem";
import { NavLogo } from "./NavLogo";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useCallback, useState } from "react";
import { MoonIcon } from "../../../public/icons/MoonIcon";
import { SunIcon } from "../../../public/icons/SunIcon";

export const Navbar = () => {
  const t = useTranslations("HomePage");
  const router = useRouter();
  const locale = useLocale();
  const [isDarkModeSelected, setIsDarkModeSelected] = useState<Boolean>(true);

  const handleChangeLanguage = () => {
    locale === "en" ? router.replace("/pt") : router.replace("/en");
  };

  const handleToggleDarkMode = useCallback(() => {
    setIsDarkModeSelected((prev) => !prev);
    if (!isDarkModeSelected) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkModeSelected]);

  return (
    <nav className="w-full h-14 border-b-4 border-black flex justify-between dark:border-gold">
      <div className="flex">
        <NavLogo />
        <NavItem name={t("projects")} />
        <NavItem name={t("timeline")} />
        <NavItem name={t("contacts")} />
      </div>
      <div className="flex items-center">
        <button className="mr-10" onClick={handleToggleDarkMode}>
          {isDarkModeSelected ? (
            <SunIcon color={"#C4B274"} />
          ) : (
            <MoonIcon color={"black"} />
          )}
        </button>
        <p className="mr-10" onClick={handleChangeLanguage}>
          eng / pt-br
        </p>
      </div>
    </nav>
  );
};
