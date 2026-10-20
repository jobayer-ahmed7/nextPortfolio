"use client";

import ProjectCard from "@/components/shared/ProjectCard";
import SectionHeading from "@/components/shared/SectionHeading";
import Loading from "@/components/shared/Loading";
import { fetchProjects } from "@/lib/api";
import { useEffect, useState } from "react";
import { IProject } from "@/models/Projects";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";

// ─── Content & CTA Configuration ────────────────────────────────────
const INTRO_TEXT =
  "Real projects built for real businesses. See how I turn ideas into fast, scalable e-commerce and web apps.";
const CTA_HEADING = "Need something like this for your business?";
const CTA_SUBTEXT = "Tell me about your project and I'll reply within 24 hours.";
const WHATSAPP_NUMBER = 
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "1234567890";
// ────────────────────────────────────────────────────────────────────

const FeaturedProjects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showMore, setShowMore] = useState<boolean>(false);

  const fetchAllProjects = async () => {
    setIsLoading(true);
    try {
      const res = await fetchProjects();
      setProjects(res);
    } catch (error) {
      console.error("Failed to fetch projects", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProjects();
  }, []);

  // Determine how many projects to show
  const projectsToShow = showMore ? 6 : 3;
  const displayedProjects = projects.slice(0, projectsToShow);
  const hasMoreProjects = projects.length > 3;

  return (
    <div className="w-full">
      <SectionHeading title="PROJECTS" />

      {/* Intro paragraph */}
      <p className="text-center text-lightGrey/70 max-w-2xl mx-auto -mt-6 sm:-mt-8 mb-10 text-sm sm:text-base leading-relaxed">
        {INTRO_TEXT}
      </p>

      {/* Projects Grid or Loading/Empty State */}
      {isLoading ? (
        <Loading />
      ) : projects.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-lightGrey/60 text-base">Projects coming soon.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={project._id || index}
              className={index >= 3 && showMore ? "animate-fade-in" : ""}
            >
              <ProjectCard project={project} priority={index === 0} />
            </div>
          ))}
        </div>
      )}

      {/* Toggle Button Area */}
      {hasMoreProjects && !isLoading && (
        <div className="flex justify-center mt-10 w-full">
          {!showMore ? (
            <button
              type="button"
              onClick={() => setShowMore(true)}
              className="flex items-center justify-center bg-linear-to-t from-classicGold/40 to-richBlack hover:from-classicGold/60 text-lightGrey hover:text-classicGold text-base sm:text-lg cursor-pointer w-full max-w-xs sm:max-w-sm py-2.5 px-6 border border-darkGrey hover:border-classicGold/40 rounded-full transition-all duration-300"
            >
              <ChevronDown className="w-5 h-5 mr-2" />
              Show More Projects
            </button>
          ) : (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Link
                href="/projects"
                className="flex items-center justify-center bg-linear-to-t from-classicGold/40 to-richBlack hover:from-classicGold/60 text-lightGrey hover:text-classicGold text-base sm:text-lg cursor-pointer w-full max-w-xs sm:max-w-sm py-2.5 px-6 border border-darkGrey hover:border-classicGold/40 rounded-full transition-all duration-300 group"
              >
                View All Projects
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <button
                type="button"
                onClick={() => setShowMore(false)}
                className="text-sm text-lightGrey/60 hover:text-classicGold underline underline-offset-4 cursor-pointer transition-colors duration-300"
              >
                Show Less
              </button>
            </div>
          )}
        </div>
      )}

      {/* CTA Band */}
      <div className="relative mt-16 rounded-2xl border border-darkGrey/50 overflow-hidden text-center p-8 sm:p-12 shadow-lg">
        {/* Subtle gold glow */}
        <div className="absolute inset-0 pointer-events-none backdrop-blur-xs" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-3">
          <h3 className="text-2xl sm:text-3xl font-bold text-lightGrey">
            {CTA_HEADING}
          </h3>
          <p className="text-lightGrey/70 text-sm sm:text-base leading-relaxed">
            {CTA_SUBTEXT}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-classicGold text-mutedGrey font-semibold px-6 py-3 rounded-lg hover:bg-classicGold/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Start a Project
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center border border-darkGrey/70 text-lightGrey font-semibold px-6 py-3 rounded-lg hover:border-classicGold/50 hover:text-classicGold transition-all duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
