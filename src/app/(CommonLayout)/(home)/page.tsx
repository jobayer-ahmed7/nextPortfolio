"use client";

import AboutMe from "@/components/home/AboutMe";
import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/Services";
import ContactMe from "@/components/home/ContactMe";
import Experience from "@/components/home/Experience";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Process from "@/components/home/Process";
import FAQ from "@/components/home/FAQ";

const HomePage = () => {
  return (
    <div className="text-lightGrey overflow-x-hidden">

      {/* Hero Section with its own background (full-bleed) */}

      <section id="home">
        <HeroSection />
      </section>

      {/* Main Content Sections with standard container padding */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8">

        {/* About Section */}

        <section id="about" className="py-16 md:py-20">
          <AboutMe />
        </section>

        {/* Services Section */}

        <section id="services" className="py-16 md:py-20">
          <Services />
        </section>

        {/* Projects Section */}

        <section id="projects" className="py-16 md:py-20">
          <FeaturedProjects />
        </section>

        {/* Process Section */}

        <section id="process" className="py-16 md:py-20">
          <Process />
        </section>

        {/* Experience Section */}

        <section id="experience" className="py-16 md:py-20">
          <Experience />
        </section>

        {/* FAQ Section */}

        <section id="faq" className="py-16 md:py-20">
          <FAQ />
        </section>

        {/* Contact Section */}

        <section id="contact" className="py-16 md:py-20">
          <ContactMe />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
