"use client";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

import {
  BrazilFlagIcon,
  MoonIcon,
  SunIcon,
  UKFlagIcon,
} from "@/components/icons";
import { useTheme } from "@/contexts/ThemeContext";
import { useChangeLanguage } from "@/hooks/useChangeLanguage";

import { TSideMenuProps } from "./types";

export const SideMenu = ({
  handleProjectClick,
  handleCloseMenu,
}: TSideMenuProps) => {
  const t = useTranslations("HomePage");
  const router = useRouter();
  const locale = useLocale();
  const { isDarkModeOn, toggleTheme } = useTheme();
  const { currentLanguage, changeLanguage } = useChangeLanguage();

  const handleRouteToCarrer = () => {
    router.push(`/${locale}/career`);
  };

  const handleRouteToContacts = () => {
    router.push(`/${locale}/contacts`);
  };

  return (
    <div className={`fixed h-full w-full z-40  md:hidden flex `}>
      <div className="w-3/5 bg-ground text-ink border-r-4 border-outline">
        <div className="flex flex-col items-center h-full py-12">
          <button
            onClick={handleProjectClick}
            className="w-full h-14 px-8 text-xl  font-primary hover:underline md:flex md:h-full md:items-center"
          >
            {t("projects")}
          </button>

          <button
            onClick={handleRouteToCarrer}
            className="w-full h-14 px-8 text-xl  font-primary hover:underline md:flex md:h-full md:items-center"
          >
            {t("timeline")}
          </button>

          <button
            onClick={handleRouteToContacts}
            className="w-full h-14 px-8 text-xl  font-primary hover:underline md:flex md:h-full md:items-center"
          >
            {t("contacts")}
          </button>
          <div className="flex flex-col items-center">
            <button
              className="mt-10 flex"
              onClick={toggleTheme}
              aria-label={t("toggleTheme")}
            >
              {isDarkModeOn ? (
                <SunIcon color="currentColor" />
              ) : (
                <MoonIcon color="currentColor" />
              )}
            </button>
            <div className="mt-6 flex gap-6">
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
        </div>
      </div>
      <div
        onClick={handleCloseMenu}
        className="w-2/5 h-full bg-fieldInk/50"
      ></div>
    </div>
  );
};
