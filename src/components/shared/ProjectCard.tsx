import { IProject } from "@/models/Projects";
import { ArrowRight, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TechnologyBadge from "./TechnologyBadge";
import MetricsPill from "../projects/MetricsPill";

interface ProjectCardProps {
  project: IProject;
  priority?: boolean;
}

const ProjectCard = ({ project, priority = false }: ProjectCardProps) => {
  const displayTitle = project?.title || "Project";
  const displayDescription = project?.tagline || project?.overview || "";

  // Show at most 4 technology badges so card remains clean
  const featuredTechnologies = [
    ...(project?.technologies?.frontend || []),
    ...(project?.technologies?.backend || []),
    ...(project?.technologies?.tools || []),
  ].slice(0, 4);

  return (
    <div className="relative bg-cardBg rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-darkGrey/50 hover:border-classicGold/30 group flex flex-col h-full">
      {/* Project Image */}
      <div className="relative w-full h-48 overflow-hidden bg-richBlack/50 shrink-0">
        {project?.images?.[0] && (
          <Image
            src={project.images[0]}
            alt={displayTitle}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px"
            style={{ objectFit: "cover" }}
            className="group-hover:scale-105 transition-transform duration-300"
          />
        )}
        {project?.isFeatured && (
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-classicGold text-mutedGrey text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
              Featured
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-3">
          {/* Category & Industry Pill */}
          {(project?.industry || project?.category) && (
            <div className="flex items-center gap-2 flex-wrap">
              {project?.industry && (
                <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-classicGold/10 text-classicGold border border-classicGold/30">
                  {project.industry}
                </span>
              )}
              {project?.category && project?.category !== project?.industry && (
                <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-mutedGrey text-lightGrey/80 border border-darkGrey">
                  {project.category}
                </span>
              )}
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-bold text-lightGrey line-clamp-1 group-hover:text-classicGold transition-colors duration-300">
            {displayTitle}
          </h3>

          {/* Tagline / Overview */}
          <p className="text-lightGrey/80 text-sm line-clamp-2 leading-relaxed">
            {displayDescription}
          </p>

          {/* Quantified Metrics Highlight */}
          {project?.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2 pt-1">
              {project.metrics.slice(0, 2).map((metric, idx) => (
                <MetricsPill key={idx} metric={metric} size="sm" />
              ))}
            </div>
          )}

          {/* Technologies: at most 4 badges */}
          {featuredTechnologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {featuredTechnologies.map((tech, index) => (
                <TechnologyBadge key={index} technology={tech} variant="secondary" />
              ))}
            </div>
          )}
        </div>

        {/* Action Row */}
        <div className="flex gap-3 pt-2 items-center">
          {/* Main card link to case study */}
          <Link
            href={`/projects/${project?._id}`}
            className="flex-1 flex items-center justify-center bg-classicGold text-mutedGrey px-4 py-2 rounded-lg hover:bg-classicGold/90 transition-all duration-300 font-medium group/button focus:outline-none focus-visible:ring-2 focus-visible:ring-classicGold text-sm"
          >
            View Case Study
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover/button:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* Live Demo Link */}
          {project?.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              title="Live Demo"
              className="p-2 border flex items-center gap-1.5 border-darkGrey rounded-lg hover:border-classicGold hover:text-classicGold text-lightGrey/80 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-classicGold text-xs shrink-0"
            >
              <Globe className="w-4 h-4 hover:scale-110 transition-transform duration-300" />
              <span className="hidden sm:inline">Live Site</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
