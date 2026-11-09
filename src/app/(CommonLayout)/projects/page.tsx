"use client";

import { fetchProjects } from "@/lib/api";
import { IProject } from "@/models/Projects";
import React, { useEffect, useState, useMemo } from "react";
import ProjectCard from "@/components/shared/ProjectCard";
import SectionHeading from "@/components/shared/SectionHeading";
import { Code, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import TechnologyBadge from "@/components/shared/TechnologyBadge";
import FilterPanel from "@/components/shared/FilterPanel";
import BackButton from "@/components/shared/butttons/BackButton";
import MetricsPill from "@/components/projects/MetricsPill";

const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedTechnology, setSelectedTechnology] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "title">("newest");

  const fetchAllProjects = async () => {
    try {
      setLoading(true);
      const res = await fetchProjects();
      setProjects(res);
    } catch (error) {
      console.error("Failed to fetch projects", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProjects();
  }, []);

  // Get all unique industries from projects
  const allIndustries = useMemo(() => {
    const industrySet = new Set<string>();
    projects.forEach((project) => {
      if (project.industry) industrySet.add(project.industry);
    });
    return Array.from(industrySet).sort();
  }, [projects]);

  // Get all unique technologies from projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      project.technologies.frontend.forEach((tech) => techSet.add(tech));
      project.technologies.backend.forEach((tech) => techSet.add(tech));
      project.technologies.tools.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, [projects]);

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    const filtered = projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.overview.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (project.tagline && project.tagline.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesIndustry =
        selectedIndustry === "all" || project.industry === selectedIndustry;

      const matchesTechnology =
        selectedTechnology === "all" ||
        project.technologies.frontend.includes(selectedTechnology) ||
        project.technologies.backend.includes(selectedTechnology) ||
        project.technologies.tools.includes(selectedTechnology);

      return matchesSearch && matchesIndustry && matchesTechnology;
    });

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return (
            new Date(b.createdAt || 0).getTime() -
            new Date(a.createdAt || 0).getTime()
          );
        case "oldest":
          return (
            new Date(a.createdAt || 0).getTime() -
            new Date(b.createdAt || 0).getTime()
          );
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [projects, searchTerm, selectedIndustry, selectedTechnology, sortBy]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-classicGold mx-auto mb-4"></div>
          <p className="text-lightGrey">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto min-h-screen px-4 sm:px-6 md:px-8 pt-20 pb-16">
      {/* Header */}
      <div className="mb-8">
        <div className="py-4 flex gap-2">
          <BackButton />
        </div>
        <SectionHeading title="ALL PROJECTS" />
        <p className="text-center text-lightGrey/80 max-w-2xl mx-auto -mt-6 sm:-mt-8">
          Explore real client solutions and digital platforms engineered for conversion, performance, and revenue growth.
        </p>
      </div>

      {/* Filters and Controls */}
      <div className="mb-8">
        <FilterPanel
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedIndustry={selectedIndustry}
          setSelectedIndustry={setSelectedIndustry}
          selectedTechnology={selectedTechnology}
          setSelectedTechnology={setSelectedTechnology}
          sortBy={sortBy}
          setSortBy={setSortBy}
          viewMode={viewMode}
          setViewMode={setViewMode}
          allIndustries={allIndustries}
          allTechnologies={allTechnologies}
        />
      </div>

      {/* Projects Count */}
      <div className="mb-6">
        <p className="text-lightGrey/70 text-sm">
          Showing {filteredAndSortedProjects.length} of {projects.length}{" "}
          projects
        </p>
      </div>

      {/* Projects Grid/List */}
      <div>
        {filteredAndSortedProjects.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-lightGrey mb-2">
              No projects found
            </h3>
            <p className="text-lightGrey/60">
              Try adjusting your search terms or filters
            </p>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProjects.map((project, index) => (
              <div
                key={project._id || index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6"> 
            {filteredAndSortedProjects.map((project, index) => (
              <div
                key={project._id || index}
                className="bg-cardBg rounded-2xl p-6 border border-darkGrey hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/3">
                    <div className="relative w-full h-56 rounded-xl overflow-hidden bg-richBlack/50">
                      {project.images?.[0] ? (
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-lightGrey/40 text-sm">
                          No preview image
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="lg:w-2/3 space-y-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        {project.industry && (
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-classicGold/10 text-classicGold border border-classicGold/30">
                            {project.industry}
                          </span>
                        )}
                        {project.category && (
                          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-mutedGrey text-lightGrey/80 border border-darkGrey">
                            {project.category}
                          </span>
                        )}
                        {project.budgetRange && (
                          <span className="text-xs text-lightGrey/70 ml-auto">
                            Budget: {project.budgetRange}
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold text-lightGrey mb-1.5">
                        {project.title}
                      </h3>
                      <p className="text-lightGrey/80 line-clamp-2 text-sm leading-relaxed">
                        {project.tagline || project.overview}
                      </p>
                    </div>

                    {/* Metrics in list view */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                        {project.metrics.map((metric, idx) => (
                          <MetricsPill key={idx} metric={metric} size="sm" />
                        ))}
                      </div>
                    )}

                    <div className="space-y-2 pt-1">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.frontend.slice(0, 4).map((tech, i) => (
                          <TechnologyBadge
                            key={i}
                            technology={tech}
                            variant="secondary"
                          />
                        ))}
                        {project.technologies.backend.slice(0, 3).map((tech, i) => (
                          <TechnologyBadge
                            key={i}
                            technology={tech}
                            variant="accent"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <Link
                        href={`/projects/${project._id}`}
                        className="inline-flex items-center px-4 py-2 bg-classicGold text-mutedGrey rounded-lg hover:bg-classicGold/90 transition-colors duration-300 font-medium text-sm"
                      >
                        View Case Study
                      </Link>

                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-darkGrey text-lightGrey rounded-lg hover:border-classicGold hover:text-classicGold transition-colors duration-300 text-sm"
                        >
                          <Globe className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      )}

                      {project.codeIsPublic !== false && project.frontendCode && (
                        <a
                          href={project.frontendCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-darkGrey text-lightGrey rounded-lg hover:border-classicGold hover:text-classicGold transition-colors duration-300 text-sm"
                        >
                          <Code className="w-4 h-4 mr-2" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
