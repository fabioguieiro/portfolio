"use client";
import { RefObject, useRef, useState } from "react";

import { Banner, Navbar } from "@/components";
import { DownloadCVButton } from "@/components/DownloadCVButton";
import { Footer } from "@/components/Footer";
import { SideMenu } from "@/components/SideMenu";
import { Work } from "@/components/Work";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToProjects = () => scrollToSection(projectsRef);

  const handleScrollToContacts = () => scrollToSection(contactsRef);

  return (
    <main>
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onClickProjects={handleScrollToProjects}
        onClickContacts={handleScrollToContacts}
      />
      <div
        className={`fixed z-40 -left-[100%] h-full w-full ease-out duration-300 ${
          isMobileMenuOpen ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <SideMenu
          handleCloseMenu={() => setIsMobileMenuOpen(false)}
          handleProjectClick={handleScrollToProjects}
          handleContactsClick={handleScrollToContacts}
        />
      </div>
      <Banner />
      <div ref={projectsRef}>
        <Work />
      </div>
      <div ref={contactsRef}>
        <Footer />
      </div>
      <DownloadCVButton />
    </main>
  );
}
