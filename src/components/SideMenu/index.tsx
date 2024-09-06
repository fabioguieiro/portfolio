import { useLocale, useTranslations } from "next-intl";
import { MoonIcon } from "../../../public/icons/MoonIcon";
import { SunIcon } from "../../../public/icons/SunIcon";
import { TSideMenuProps } from "./types";
import { UKFlagIcon } from "../../../public/icons/UKFlagIcon";
import { BrazilFlagIcon } from "../../../public/icons/BrazilFlagIcon";
import { useRouter } from "next/navigation";

export const SideMenu = ({
  handleProjectClick,
  handleToggleDarkMode,
  handleChangeLanguage,
  isDarkModeOn,
  currentLanguage,
}: TSideMenuProps) => {
  const t = useTranslations("HomePage");
  const router = useRouter();
  const locale = useLocale();

  const handleRouteToCarrer = () => {
    router.push(`${locale}/career`);
  };

  return (
    <div className="absolute w-3/4 bg-cream dark:bg-royal h-full md:hidden ">
      <div className="flex flex-col items-center h-full py-12">
        <button
          onClick={handleProjectClick}
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
            {isDarkModeOn ? (
              <SunIcon color={"#C4B274"} />
            ) : (
              <MoonIcon color={"black"} />
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
      </div>
    </div>
  );
};
