"use client";
import { Navbar } from "@/components";
import { Timeline } from "@/components/Timeline";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { SunIcon } from "../../../../public/icons/SunIcon";
import { MoonIcon } from "../../../../public/icons/MoonIcon";
import { DownloadCVButton } from "@/components/DownloadCVButton";
import { SideMenu } from "@/components/SideMenu";
import { Footer } from "@/components/Footer";

const Career = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const router = useRouter();
  const paths = usePathname().split("/");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkModeSelected, setIsDarkModeSelected] = useState<Boolean>(false);
  const [currentLanguage, setCurrentLanguage] = useState<string>(paths[1]);

  const handleRouteToHome = () => {
    router.replace(`/`);
  };

  const handleToggleDarkMode = useCallback(() => {
    setIsDarkModeSelected((prev) => !prev);
    if (!isDarkModeSelected) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkModeSelected]);

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

  return (
    <main>
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onClickProjects={handleRouteToHome}
        disabledButton={"career"}
        currentLanguage={currentLanguage}
        handleChangeLanguage={handleChangeLanguage}
        handleToggleDarkMode={handleToggleDarkMode}
        isDarkModeOn={!!isDarkModeSelected}
      />
      <div
        className={`fixed z-40 -left-[100%] h-full w-full ease-out duration-300 ${
          isMobileMenuOpen ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <SideMenu
          handleCloseMenu={() => setIsMobileMenuOpen(false)}
          currentLanguage={currentLanguage}
          handleChangeLanguage={handleChangeLanguage}
          isDarkModeOn={!!isDarkModeSelected}
          handleProjectClick={handleRouteToHome}
          handleToggleDarkMode={handleToggleDarkMode}
        />
      </div>
      <div className="w-full">
        <Timeline />
      </div>
      <Footer />
      <DownloadCVButton />
    </main>
  );
};

export default Career;
