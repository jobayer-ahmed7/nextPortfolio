"use client";

import AboutMe from "@/components/home/AboutMe";
import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/Services";
import ContactMe from "@/components/home/ContactMe";
import Experience from "@/components/home/Experience";
import FeaturedProjects from "@/components/home/FeaturedProjects";

const HomePage = () => {
  return (
    <div className="text-lightGrey mb-16 overflow-x-hidden">

      {/* Hero Section with its own background */}

      <section id="home">
        <HeroSection />
      </section>

      {/* About Section */}

      <section id="about">
        <AboutMe />
      </section>

      {/* Services Section */}

      <section id="services">
        <Services />
      </section>


      {/* Projects Section */}

      <section id="projects">
        <FeaturedProjects />
      </section>

      {/* Experience Section */}

      <section id="experience">
        <Experience />
      </section>

      {/* Contact Section */}

      <section id="contact">
        <ContactMe />
      </section>
    </div>
  );
};

export default HomePage;
