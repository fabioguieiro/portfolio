"use client";
import { useTranslations } from "next-intl";
import {
  EmailIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/icons";

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
    <footer
      id="contacts"
      className="w-full h-12 md:h-14 bg-tomato text-cream border-t-4 border-fieldInk flex items-center justify-between "
    >
      <div className="w-2/4 md:w-1/4 px-1 md:px-6">
        <p className="font-primary text-xs md:text-sm">{t("footer")}</p>
      </div>
      <div className="w-1/4 flex gap-2 justify-end px-1 md:px-6">
        <GithubIcon
          color="currentColor"
          onClick={() => handleIconClick("github")}
        />
        <EmailIcon
          color="currentColor"
          onClick={() => handleIconClick("email")}
        />
        <LinkedinIcon
          color="currentColor"
          onClick={() => handleIconClick("linkedin")}
        />
        <WhatsappIcon
          color="currentColor"
          onClick={() => handleIconClick("whatsapp")}
        />
        <InstagramIcon
          color="currentColor"
          onClick={() => handleIconClick("instagram")}
        />
      </div>
    </footer>
  );
};
