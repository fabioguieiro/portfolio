import { useTranslations } from "next-intl";
import { Avatar } from "@/components/images";

export const Banner = () => {
  const t = useTranslations("HomePage");

  return (
    <div
      style={{
        backgroundSize: "14px 14px",
        backgroundImage:
          " linear-gradient(to right,  rgba(255, 255, 255, 0.15) 1px, transparent 1px) , linear-gradient(to bottom,  rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
      }}
      className="w-full px-4 pb-4 md:pb-0 h-auto md:h-full bg-indigo dark:bg-ground flex flex-col md:flex-row items-center justify-center md:justify-center border-b-4 border-outline "
    >
      <Avatar />
      <div className="w-full md:h-auto h-42 mt-4 md:mt-0 md:w-2/5 md:ml-10 bg-paper text-fieldInk p-6 md:p-8 rounded-b-full rounded-r-full md:rounded-b-none md:rounded-r-full md:rounded-t-full ">
        <h1 className="font-hand text-center md:text-left text-3xl mb-4">
          {t("bannerHeadline")}
        </h1>
        <h1 className="font-primary text-center md:text-left">
          {t("bannerDescription")}
        </h1>
      </div>
    </div>
  );
};
