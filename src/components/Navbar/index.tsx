"use client";
import { NavItem } from "./NavItem";
import { NavLogo } from "./NavLogo";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useCallback, useState } from "react";
import { MoonIcon } from "../../../public/icons/MoonIcon";
import { SunIcon } from "../../../public/icons/SunIcon";
import { TNavbarProps } from "./types";
import { usePathname } from "next/navigation";

export const Navbar = ({ disabledButton }: TNavbarProps) => {
  const t = useTranslations("HomePage");
  const router = useRouter();
  const locale = useLocale();
  const [isDarkModeSelected, setIsDarkModeSelected] = useState<Boolean>(true);
  const paths = usePathname().split("/");

  const handleChangeLanguage = () => {
    if (paths.length > 2) {
      console.log("paths > 2", paths);
      if (paths[1] === "en") {
        router.replace(`/pt/${paths.slice(2).join("/")}`);
      } else if (paths[1] === "pt") {
        router.replace(`/en/${paths.slice(2).join("/")}`);
      }
    } else {
      locale === "en" ? router.replace("/pt") : router.replace("/en");
    }
  };

  const handleToggleDarkMode = useCallback(() => {
    setIsDarkModeSelected((prev) => !prev);
    if (!isDarkModeSelected) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkModeSelected]);

  const handleRouteToCarrer = () => {
    if (disabledButton !== "career") {
      router.push(`${locale}/career`);
    }
  };

  return (
    <nav className="w-full h-14 border-b-4 border-black flex justify-between dark:border-gold bg-cream text-black dark:bg-royal dark:text-gold">
      <div className="block md:hidden">BTN</div>
      <div className="md:flex md:items-center">
        <NavLogo />
        <NavItem name={t("projects")} />
        <NavItem onClick={handleRouteToCarrer} name={t("timeline")} />
        <NavItem name={t("contacts")} />
      </div>
      <div className="items-center flex">
        <button className="mr-10 hidden md:flex" onClick={handleToggleDarkMode}>
          {isDarkModeSelected ? (
            <SunIcon color={"#C4B274"} />
          ) : (
            <MoonIcon color={"black"} />
          )}
        </button>
        <p className="mr-10 hidden md:flex" onClick={handleChangeLanguage}>
          eng / pt-br
        </p>
      </div>
    </nav>
  );
};
