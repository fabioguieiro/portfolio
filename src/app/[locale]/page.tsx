"use client";
import { Banner, Navbar } from "@/components";
import { Footer } from "@/components/Footer";
import { NavItem } from "@/components/Navbar/NavItem";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { MoonIcon } from "../../../public/icons/MoonIcon";
import { SunIcon } from "../../../public/icons/SunIcon";
import { Work } from "@/components/Work";
import { DownloadCVButton } from "@/components/DownloadCVButton";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkModeSelected, setIsDarkModeSelected] = useState<Boolean>(true);

  const router = useRouter();
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const paths = usePathname().split("/");
  const projectsRef = useRef(null);

  const handleRouteToCarrer = () => {
    router.push(`${locale}/career`);
  };

  const handleToggleDarkMode = useCallback(() => {
    setIsDarkModeSelected((prev) => !prev);
    if (!isDarkModeSelected) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkModeSelected]);

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

  const handleScrollToProjects = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    projectsRef.current &&
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onClickProjects={handleScrollToProjects}
      />
      {isMobileMenuOpen && (
        <div className="absolute w-3/4 bg-cream dark:bg-royal h-full md:hidden ">
          <div className="flex flex-col items-center h-full py-12">
            <button
              onClick={handleScrollToProjects}
              className="w-full h-14 px-8 text-xl border-r-4 font-primary border-black hover:underline dark:border-gold dark:text-gold md:flex md:h-full md:items-center"
            >
              {t("projects")}
            </button>

            <button
              onClick={handleRouteToCarrer}
              className="w-full h-14 px-8 text-xl border-r-4 font-primary border-black hover:underline dark:border-gold dark:text-gold md:flex md:h-full md:items-center"
            >
              {t("timeline")}
            </button>

            <button className="w-full h-14 px-8 text-xl border-r-4 font-primary border-black hover:underline dark:border-gold dark:text-gold md:flex md:h-full md:items-center">
              {t("contacts")}
            </button>
            <div className="flex flex-col items-center">
              <button className="mt-10 flex" onClick={handleToggleDarkMode}>
                {isDarkModeSelected ? (
                  <SunIcon color={"#C4B274"} />
                ) : (
                  <MoonIcon color={"black"} />
                )}
              </button>
              <p
                className="mt-10 flex dark:text-gold"
                onClick={handleChangeLanguage}
              >
                eng / pt-br
              </p>
            </div>
          </div>
        </div>
      )}
      <Banner />
      <div ref={projectsRef}>
        <Work />
      </div>
      <Footer />
      <DownloadCVButton />
    </main>
  );
}
