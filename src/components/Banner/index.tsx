import { Avatar } from "../../../public/images/Avatar";
import { useTranslations } from "next-intl";

export const Banner = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="w-full h-64 bg-petroleum flex items-center justify-evenly border-b-4 border-black dark:border-gold dark:bg-brownie">
      <Avatar />
      <div className="w-1/4">
        <h1 className="font-hand text-3xl text-cream mb-4">
          {t("bannerHeadline")}
        </h1>
        <h1 className="font-primary text-cream">{t("bannerDescription")}</h1>
      </div>
    </div>
  );
};
