"use client";
import {
  Home,
  CircleUser,
  Brain,
  BriefcaseBusiness,
  Briefcase,
  LucideIcon,
  Send,
} from "lucide-react";
import NavButton from "./butttons/navButton/NavButton";
import { useEffect, useState } from "react";

const handleScrollToSection = (id: string) => {
  const sec = document.getElementById(id);
  if (sec) {
    sec.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      // console.log(sections);
      let currentSectionId = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSectionId = section.id;
        }
      });

      setActiveSection(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Array of navigation items
  const navLinks: { id: string; icon: LucideIcon; label: string }[] = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: CircleUser, label: "About" },
    { id: "skills", icon: Brain, label: "Skills" },
    { id: "projects", icon: BriefcaseBusiness, label: "Projects" },
    { id: "experience", icon: Briefcase, label: "Experience" },
    { id: "contact", icon: Send, label: "Contact" },
  ];

  return (
   <>
    <div className="fixed  bottom-4 left-1/2 -translate-x-1/2 z-20 md:hidden">
    {/* navbar mobile */}
      <div className="flex flex-row gap-4 mt-4 items-end">
        {navLinks.map(({ id, icon, label }, i) => (
          <a
            key={i}
            onClick={() => handleScrollToSection(id)}
            className="flex justify-end w-full"
          >
            <NavButton
              icon={icon}
              label={label}
              className={
                activeSection === id ? "!bg-classicGold !text-mutedGrey" : ""
              }
            />
          </a>
        ))}
      </div>
    </div>
    <div className="md:fixed top-1/4 right-2 z-20 w-[125px] md:flex justify-end hidden">
      <div className="flex flex-col gap-4 mt-4 items-end">
        {navLinks.map(({ id, icon, label }, i) => (
          <a
            key={i}
            onClick={() => handleScrollToSection(id)}
            className="flex justify-end w-full"
          >
            <NavButton
              icon={icon}
              label={label}
              className={
                activeSection === id ? "!bg-classicGold !text-mutedGrey" : ""
              }
            />
          </a>
        ))}
      </div>
    </div>
   </>
  );
};

export default Navbar;
