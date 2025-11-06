"use client";

import AboutMe from "@/components/home/AboutMe";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/home/HeroSection";
import Skills from "@/components/home/Skills";
import ContactMe from "@/components/home/ContactMe";
import Experience from "@/components/home/Experience";
import FeaturedProjects from "@/components/home/FeaturedProjects";

const HomePage = () => {
  return (
    <div className="text-lightGrey mb-16 ">
      <Navbar /> 

      {/* Hero Section with its own background */}
      <section id="home">
        <HeroSection />
      </section>

      <section
        id="about"
        className="  min-h-[90vh]"
      >
        <AboutMe />
      </section>

      <section
        id="skills"
        className="min-h-[85vh] flex justify-center items-center"
      >
        <Skills />
      </section>

      <section
        id="projects"
        className="min-h-[85vh] flex justify-center items-center"
      >
      <FeaturedProjects />
      </section>
      <section
        id="experience"
        className="min-h-[85vh] flex justify-center items-center"
      >
      <Experience />
      </section>

      <section
        id="contact"
        className="min-h-[85vh] flex justify-center items-center"
      >
        <ContactMe />
      </section>
    </div>
  );
};

export default HomePage;



