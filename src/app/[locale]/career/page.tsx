"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Navbar } from "@/components";
import { DownloadCVButton } from "@/components/DownloadCVButton";
import { Footer } from "@/components/Footer";
import { SideMenu } from "@/components/SideMenu";
import { Timeline } from "@/components/Timeline";

const Career = () => {
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
        disabledButton={"career"}
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
      <div className="w-full">
        <Timeline />
      </div>
      <Footer />
      <DownloadCVButton />
    </main>
  );
};

export default Career;
