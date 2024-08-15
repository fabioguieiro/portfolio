"use client";
import { useTranslations } from "next-intl";
import {
  EmailIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "../../../public/icons";

export const Footer = () => {
  const t = useTranslations("HomePage");

  const handleIconClick = (icon: string) => {
    switch (icon) {
      case "github":
        window.open("https://github.com/FabioGuieiro", "_blank");
        break;
      case "email":
        window.open("mailto:fabio.guieiro@gmail.com", "_blank");
        break;
      case "linkedin":
        window.open("https://www.linkedin.com/in/fabioguieiro/", "_blank");
        break;
      case "whatsapp":
        window.open("https://wa.me/5531992472727", "_blank");
        break;
      case "instagram":
        window.open("https://www.instagram.com/fabio_guieiro/", "_blank");
        break;
    }
  };

  return (
    <footer className="w-full h-14 bg-tomato flex items-center justify-between">
      <div className="w-1/4 px-6">
        <p className="text-cream font-primary text-sm">{t("footer")}</p>
      </div>
      <div className="w-1/4 flex gap-2 justify-end px-6">
        <GithubIcon onClick={() => handleIconClick("github")} />
        <EmailIcon onClick={() => handleIconClick("email")} />
        <LinkedinIcon onClick={() => handleIconClick("linkedin")} />
        <WhatsappIcon onClick={() => handleIconClick("whatsapp")} />
        <InstagramIcon onClick={() => handleIconClick("instagram")} />
      </div>
    </footer>
  );
};
