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
import { MenuIcon } from "../../../public/icons/MenuIcon";
import { ExitIcon } from "../../../public/icons/ExitIcon";
import { UKFlagIcon } from "../../../public/icons/UKFlagIcon";
import { BrazilFlagIcon } from "../../../public/icons/BrazilFlagIcon";

export const Navbar = ({
  disabledButton,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: TNavbarProps) => {
  const t = useTranslations("HomePage");
  const router = useRouter();
  const locale = useLocale();
  const [isDarkModeSelected, setIsDarkModeSelected] = useState<Boolean>(false);
  const paths = usePathname().split("/");
  const [currentLanguage, setCurrentLanguage] = useState(paths[1]);

  const handleChangeLanguage = (language: "en" | "pt") => {
    if (paths.length > 2) {
      if (language === "pt") {
        router.replace(`/pt/${paths.slice(2).join("/")}`);
        setCurrentLanguage("pt");
      } else if (language === "en") {
        router.replace(`/en/${paths.slice(2).join("/")}`);
        setCurrentLanguage("en");
      }
    } else {
      if (language === "pt") {
        router.replace("/pt");
        setCurrentLanguage("pt");
      } else if (language === "en") {
        router.replace("/en");
        setCurrentLanguage("en");
      }
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

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full h-14 border-b-4 border-black flex justify-between dark:border-gold bg-cream text-black dark:bg-royal dark:text-gold">
      <div className="md:hidden flex items-center justify-center mx-4">
        {isMobileMenuOpen ? (
          <ExitIcon onClick={handleOpenMobileMenu} />
        ) : (
          <MenuIcon onClick={handleOpenMobileMenu} />
        )}
      </div>
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
        <div className="mr-10 hidden md:flex md:gap-2">
          <UKFlagIcon
            style={{
              width: 30,
              height: 30,
              filter: currentLanguage === "en" ? "none" : "grayscale(100%)",
              cursor: "pointer",
            }}
            onClick={() => handleChangeLanguage("en")}
          />
          <BrazilFlagIcon
            style={{
              width: 30,
              height: 30,
              filter: currentLanguage === "pt" ? "none" : "grayscale(100%)",
              cursor: "pointer",
            }}
            onClick={() => handleChangeLanguage("pt")}
          />
        </div>
      </div>
    </nav>
  );
};
