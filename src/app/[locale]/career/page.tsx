"use client";
import { Navbar } from "@/components";
import { Timeline } from "@/components/Timeline";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { SunIcon } from "../../../../public/icons/SunIcon";
import { MoonIcon } from "../../../../public/icons/MoonIcon";
import { DownloadCVButton } from "@/components/DownloadCVButton";

const Career = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkModeSelected, setIsDarkModeSelected] = useState<Boolean>(true);

  const t = useTranslations("HomePage");
  const locale = useLocale();
  const router = useRouter();
  const paths = usePathname().split("/");

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

  return (
    <main>
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        disabledButton={"career"}
      />
      {isMobileMenuOpen && (
        <div className="absolute w-3/4 bg-cream dark:bg-royal h-full md:hidden">
          <div className="flex flex-col items-center h-full py-12">
            <button className="w-full h-14 px-8 text-xl border-r-4 font-primary border-black hover:underline dark:border-gold dark:text-gold md:flex md:h-full md:items-center">
              {t("projects")}
            </button>

            <button
              onClick={handleRouteToHome}
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
      )}{" "}
      <div className="w-full overflow-x-scroll">
        <Timeline />
      </div>
      <DownloadCVButton />
    </main>
  );
};

export default Career;
