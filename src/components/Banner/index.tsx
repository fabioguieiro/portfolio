import { Avatar } from "../../../public/images/Avatar";
import { useTranslations } from "next-intl";

export const Banner = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="w-full py-10  h-auto md:h-full bg-tomato flex flex-col md:flex-row items-center justify-center md:justify-center border-b-4 border-black dark:border-gold dark:bg-brownie">
      <Avatar />
      <div className="w-full mt-4 md:mt-0 md:w-1/4 md:ml-10">
        <h1 className="font-hand text-center md:text-left  text-3xl text-cream mb-4">
          {t("bannerHeadline")}
        </h1>
        <h1 className="font-primary text-center md:text-left text-cream">
          {t("bannerDescription")}
        </h1>
      </div>
    </div>
  );
};
