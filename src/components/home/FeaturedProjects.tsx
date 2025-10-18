"use client";

import ProjectCard from "@/components/shared/ProjectCard";
import SectionHeading from "@/components/shared/SectionHeading";
import { fetchProjects } from "@/lib/api";
import { useEffect, useState } from "react";
import { IProject } from "@/models/Projects";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import Loading from "../shared/Loading";
const FeaturedProjects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [showMore, setShowMore] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  console.log(projects);

  const fetchAllProjects = async () => {
    try {
      const res = await fetchProjects();
      setProjects(res);
    } catch (error) {
      console.error("Failed to fetch projects", error);
    }
  };

  useEffect(() => {
    fetchAllProjects();
  }, []);

  const handleToggleProjects = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowMore(!showMore);
      setIsTransitioning(false);
    }, 150);
  };


  // Determine how many projects to show
  const projectsToShow = showMore ? 6 : 3;
  const displayedProjects = projects.slice(0, projectsToShow);
  const hasMoreProjects = projects.length > 3;

  return (
    <div
      className={`px-6 py-12 w-full transition-all duration-500 ease-in-out ${
        showMore ? "min-h-[140vh]" : "min-h-[70vh]"
      }`}
    >
      <SectionHeading title="PROJECTS" />

      {/* Projects Grid */}
      {!projects ? (
        <Loading />
      ) : (
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out ${
            isTransitioning ? "opacity-70" : "opacity-100"
          }`}
        >
          {displayedProjects.map((project, index) => (
            <div
              key={project._id || index}
              className={`transition-all duration-500 ease-in-out ${
                index >= 3 && showMore ? "animate-fade-in" : ""
              }`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      )}

      {/* Show More/Less Button */}
      {hasMoreProjects && (
        <div className="flex justify-center  mt-4 w-full overflow-hidden">
          <button
            onClick={handleToggleProjects}
            disabled={isTransitioning}
            className={`flex items-center justify-center bg-linear-to-t from-classicGold/50 to-richBlack text-xl cursor-pointer w-1/3 border border-darkGrey rounded-full${
              isTransitioning ? "scale-95" : ""
            }`}
          >
            {showMore ? (
              <Link
                href={"/projects"}
                className="flex justify-center items-center"
              >
                View All Projects
                <ChevronRight className="w-5 h-5 ml-2 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
            ) : (
              <>
                <ChevronDown className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform duration-300" />
                Show More Projects
              </>
            )}
          </button>
        </div>
      )}

      {/* Project Counter */}
      <div className="flex justify-center mt-6">
        <span className="text-sm text-lightGrey/60">
          Showing {displayedProjects.length} of {projects.length} projects
        </span>
      </div>
    </div>
  );
};

export default FeaturedProjects;
