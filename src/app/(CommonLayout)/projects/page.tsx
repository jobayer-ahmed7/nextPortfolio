"use client";

import { fetchProjects } from "@/lib/api";
import { IProject } from "@/models/Projects";
import React, { useEffect, useState, useMemo } from "react";
import ProjectCard from "@/components/shared/ProjectCard";
import SectionHeading from "@/components/shared/SectionHeading";
import {  Code, Globe } from "lucide-react";
import Link from "next/link";
import TechnologyBadge from "@/components/shared/TechnologyBadge";
import FilterPanel from "@/components/shared/FilterPanel";
import BackButton from "@/components/shared/butttons/BackButton";

const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
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
        project.overview.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesTechnology =
        selectedTechnology === "all" ||
        project.technologies.frontend.includes(selectedTechnology) ||
        project.technologies.backend.includes(selectedTechnology) ||
        project.technologies.tools.includes(selectedTechnology);

      return matchesSearch && matchesTechnology;
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
  }, [projects, searchTerm, selectedTechnology, sortBy]);

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
    <div className="min-h-screen px-6 py-12">
      {/* Header */}
      <div className="mb-8">
       <p className="py-4 flex gap-2">
            <BackButton/>
          </p>
        <SectionHeading title="ALL PROJECTS" />
        <p className="text-center text-lightGrey/80 max-w-2xl mx-auto">
          Explore my complete portfolio of web applications, featuring modern
          technologies and creative solutions.
        </p>
      </div>

      {/* Filters and Controls */}
      <div className="max-w-7xl mx-auto mb-8">
        <FilterPanel
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedTechnology={selectedTechnology}
          setSelectedTechnology={setSelectedTechnology}
          sortBy={sortBy}
          setSortBy={setSortBy}
          viewMode={viewMode}
          setViewMode={setViewMode}
          allTechnologies={allTechnologies}
        />
      </div>

      {/* Projects Count */}
      <div className="max-w-7xl mx-auto mb-6">
        <p className="text-lightGrey/70">
          Showing {filteredAndSortedProjects.length} of {projects.length}{" "}
          projects
        </p>
      </div>

      {/* Projects Grid/List */}
      <div className="max-w-7xl mx-auto">
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
                    <div className="relative w-full h-48 rounded-lg overflow-hidden">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="lg:w-2/3 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-lightGrey mb-2">
                        {project.title}
                      </h3>
                      <p className="text-lightGrey/80 line-clamp-3">
                        {project.overview}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-classicGold mb-1">
                          Frontend Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.frontend.map((tech, i) => (
                            <TechnologyBadge
                              key={i}
                              technology={tech}
                              variant="accent"
                            />
                          ))}
                        </div>
                      </div>

                      {project.technologies.backend.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-classicGold mb-1">
                            Backend Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.backend.map((tech, i) => (
                              <TechnologyBadge
                                key={i}
                                technology={tech}
                                variant="primary"
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <Link
                        href={`/projects/${project._id}`}
                        className="inline-flex items-center px-4 py-2 bg-classicGold text-mutedGrey rounded-lg hover:bg-classicGold/90 transition-colors duration-300 font-medium"
                      >
                        View Details
                      </Link>

                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-darkGrey text-lightGrey rounded-lg hover:border-classicGold hover:text-classicGold transition-colors duration-300"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>

                      <a
                        href={project.frontendCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-darkGrey text-lightGrey rounded-lg hover:border-classicGold hover:text-classicGold transition-colors duration-300"
                      >
                        <Code className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom spacing */}
      <div className="h-20"></div>
    </div>
  );
};

export default Projects;
