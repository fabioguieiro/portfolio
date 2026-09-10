"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Navbar } from "@/components";
import { Contacts } from "@/components/Contacts";
import { DownloadCVButton } from "@/components/DownloadCVButton";
import { Footer } from "@/components/Footer";
import { SideMenu } from "@/components/SideMenu";

const ContactsPage = () => {
  const locale = useLocale();
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleRouteToHome = () => {
    router.push(`/${locale}`);
  };

  return (
    <main>
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onClickProjects={handleRouteToHome}
        disabledButton={"contacts"}
      />
      <div
        className={`fixed z-40 -left-[100%] h-full w-full ease-out duration-300 ${
          isMobileMenuOpen ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <SideMenu
          handleCloseMenu={() => setIsMobileMenuOpen(false)}
          handleProjectClick={handleRouteToHome}
        />
      </div>
      <Contacts />
      <Footer />
      <DownloadCVButton />
    </main>
  );
};

export default ContactsPage;
