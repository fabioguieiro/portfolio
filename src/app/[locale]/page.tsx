"use client";
import { Banner, Navbar } from "@/components";
import { Footer } from "@/components/Footer";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { Work } from "@/components/Work";
import { DownloadCVButton } from "@/components/DownloadCVButton";
import { SideMenu } from "@/components/SideMenu";

export default function Home() {
  const paths = usePathname().split("/");
  const projectsRef = useRef(null);
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkModeSelected, setIsDarkModeSelected] = useState<Boolean>(false);
  const [currentLanguage, setCurrentLanguage] = useState<string>(paths[1]);

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

  const handleScrollToProjects = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    projectsRef.current &&
      //@ts-ignore
      projectsRef.current?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <main>
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onClickProjects={handleScrollToProjects}
        handleChangeLanguage={handleChangeLanguage}
        currentLanguage={currentLanguage}
        isDarkModeOn={!!isDarkModeSelected}
        handleToggleDarkMode={handleToggleDarkMode}
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
          handleProjectClick={handleScrollToProjects}
          handleToggleDarkMode={handleToggleDarkMode}
        />
      </div>
      <Banner />
      <div ref={projectsRef}>
        <Work />
      </div>
      <Footer />
      <DownloadCVButton />
    </main>
  );
}
