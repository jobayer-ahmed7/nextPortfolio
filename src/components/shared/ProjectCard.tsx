import { IProject } from "@/models/Projects";
import { ArrowRight, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TechnologyBadge from "./TechnologyBadge";

interface ProjectCardProps {
  project: IProject;
  priority?: boolean;
}

const ProjectCard = ({ project, priority = false }: ProjectCardProps) => {
  const displayTitle = project?.shortTitle || project?.title || "Project";
  const displayDescription = project?.tagline || project?.overview || "";

  // Show at most 5 technology badges, no "+N more" counter
  const featuredTechnologies = [
    ...(project?.technologies?.frontend || []),
    ...(project?.technologies?.backend || []),
    ...(project?.technologies?.tools || []),
  ].slice(0, 5);

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
            <span className="bg-classicGold text-mutedGrey text-xs font-bold px-2 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-3">
          {/* Category Pill (only if category exists) */}
          {project?.category && (
            <div>
              <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-classicGold/10 text-classicGold border border-classicGold/30">
                {project.category}
              </span>
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

          {/* Technologies: at most 5 badges */}
          {featuredTechnologies.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {featuredTechnologies.map((tech, index) => (
                <TechnologyBadge key={index} technology={tech} variant="secondary" />
              ))}
            </div>
          )}
        </div>

        {/* Action Row */}
        <div className="flex gap-3 pt-2 items-center">
          {/* Main card stretched link */}
          <Link
            href={`/projects/${project?._id}`}
            className="after:absolute after:inset-0 after:z-0 flex-1 flex items-center justify-center bg-classicGold text-mutedGrey px-4 py-2 rounded-lg hover:bg-classicGold/90 transition-all duration-300 font-medium group/button focus:outline-none focus-visible:ring-2 focus-visible:ring-classicGold"
          >
            View Case Study
            <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* Live Demo Link (sit above the stretched link with relative z-10) */}
          {project?.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              title="Live Demo"
              className="relative z-10 p-2 border flex items-center gap-2 border-darkGrey rounded-lg hover:border-classicGold hover:text-classicGold text-lightGrey/80 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-classicGold"
            >
              <Globe className="w-4 h-4 hover:scale-110 transition-transform duration-300" />Site Link
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
