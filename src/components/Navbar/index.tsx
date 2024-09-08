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
  onClickProjects,
  handleChangeLanguage,
  currentLanguage,
  handleToggleDarkMode,
  isDarkModeOn,
}: TNavbarProps) => {
  const t = useTranslations("HomePage");
  const router = useRouter();
  const locale = useLocale();

  const handleRouteToCarrer = () => {
    if (disabledButton !== "career") {
      router.push(`${locale}/career`);
    }
  };

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full h-14 border-b-4 border-black flex justify-between dark:border-gold bg-amber-100 text-black dark:bg-royal dark:text-gold">
      <div className="md:hidden flex items-center justify-center mx-4">
        {isMobileMenuOpen ? (
          <ExitIcon onClick={handleOpenMobileMenu} />
        ) : (
          <MenuIcon onClick={handleOpenMobileMenu} />
        )}
      </div>
      <div className="flex items-center">
        <NavLogo />
        <NavItem onClick={onClickProjects} name={t("projects")} />
        <NavItem onClick={handleRouteToCarrer} name={t("timeline")} />
        <NavItem name={t("contacts")} />
      </div>
      <div className="items-center w-16 md:w-auto flex">
        <button className="mr-4 hidden md:flex" onClick={handleToggleDarkMode}>
          {isDarkModeOn ? (
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
