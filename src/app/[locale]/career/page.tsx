"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import { Navbar } from "@/components";
import { DownloadCVButton } from "@/components/DownloadCVButton";
import { Footer } from "@/components/Footer";
import { SideMenu } from "@/components/SideMenu";
import { Timeline } from "@/components/Timeline";

const Career = () => {
  const locale = useLocale();
  const router = useRouter();
  const contactsRef = useRef<HTMLDivElement>(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleRouteToHome = () => {
    router.push(`/${locale}`);
  };

  const handleScrollToContacts = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    contactsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onClickProjects={handleRouteToHome}
        onClickContacts={handleScrollToContacts}
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
          handleContactsClick={handleScrollToContacts}
        />
      </div>
      <div className="w-full">
        <Timeline />
      </div>
      <div ref={contactsRef}>
        <Footer />
      </div>
      <DownloadCVButton />
    </main>
  );
};

export default Career;
