"use client";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

import {
  BrazilFlagIcon,
  ExitIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
  UKFlagIcon,
} from "@/components/icons";
import { useTheme } from "@/contexts/ThemeContext";
import { useChangeLanguage } from "@/hooks/useChangeLanguage";

import { NavItem } from "./NavItem";
import { NavLogo } from "./NavLogo";
import { TNavbarProps } from "./types";

export const Navbar = ({
  disabledButton,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  onClickProjects,
}: TNavbarProps) => {
  const t = useTranslations("HomePage");
  const router = useRouter();
  const locale = useLocale();
  const { isDarkModeOn, toggleTheme } = useTheme();
  const { currentLanguage, changeLanguage } = useChangeLanguage();

  const handleRouteToCarrer = () => {
    if (disabledButton !== "career") {
      router.push(`/${locale}/career`);
    }
  };

  const handleRouteToContacts = () => {
    if (disabledButton !== "contacts") {
      router.push(`/${locale}/contacts`);
    }
  };

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full h-14 border-b-4 border-outline flex justify-between bg-ground text-ink">
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
        <NavItem onClick={handleRouteToContacts} name={t("contacts")} />
      </div>
      <div className="items-center w-16 md:w-auto flex">
        <button
          className="mr-4 hidden md:flex"
          onClick={toggleTheme}
          aria-label={t("toggleTheme")}
        >
          {isDarkModeOn ? (
            <SunIcon color="currentColor" />
          ) : (
            <MoonIcon color="currentColor" />
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
            onClick={() => changeLanguage("en")}
          />
          <BrazilFlagIcon
            style={{
              width: 30,
              height: 30,
              filter: currentLanguage === "pt" ? "none" : "grayscale(100%)",
              cursor: "pointer",
            }}
            onClick={() => changeLanguage("pt")}
          />
        </div>
      </div>
    </nav>
  );
};
