import { Avatar } from "../../../public/images/Avatar";
import { useTranslations } from "next-intl";

export const Banner = () => {
  const t = useTranslations("HomePage");

  return (
    <div
      style={{
        backgroundSize: "14px 14px",
        backgroundImage:
          " linear-gradient(to right,  rgba(255, 255, 255, 0.15) 1px, transparent 1px) , linear-gradient(to bottom,  rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
      }}
      className="w-full px-4 pb-4 md:pb-0 h-auto md:h-full bg-indigo-600 flex flex-col md:flex-row items-center justify-center md:justify-center border-b-4 border-black dark:border-gold dark:bg-royal  "
    >
      <Avatar />
      <div className="w-full mt-4 md:mt-0 md:w-2/5 md:ml-10 bg-white p-12  rounded-b-full rounded-r-full md:rounded-b-none md:rounded-r-full md:rounded-t-full ">
        <h1 className="font-hand text-center md:text-left  text-3xl text-black mb-4">
          {t("bannerHeadline")}
        </h1>
        <h1 className="font-primary text-center md:text-left text-black">
          {t("bannerDescription")}
        </h1>
      </div>
    </div>
  );
};
