import { IProject } from "@/models/Projects";
import { Briefcase, Clock, ExternalLink, DollarSign } from "lucide-react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";

interface ProjectHeaderProps {
  project: IProject;
}

const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  const displayTitle = project.title;
  const showCodeLinks = project.codeIsPublic !== false && (Boolean(project.frontendCode) || Boolean(project.backendCode));

  return (
    <div className="space-y-6 pt-6">
      {/* Category & Industry Badges */}
      {(project.industry || project.category) && (
        <div className="flex items-center gap-2 flex-wrap">
          {project.industry && (
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-classicGold/10 text-classicGold border border-classicGold/30">
              {project.industry}
            </span>
          )}
          {project.category && project.category !== project.industry && (
            <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-mutedGrey text-lightGrey/80 border border-darkGrey">
              {project.category}
            </span>
          )}
        </div>
      )}

      {/* Main Title */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-offWhite tracking-tight">
          {displayTitle}
        </h1>
        {project.tagline && (
          <p className="text-base sm:text-lg text-lightGrey/90 leading-relaxed max-w-3xl">
            {project.tagline}
          </p>
        )}
      </div>

      {/* Meta Row: clientType, budgetRange, duration */}
      {(project.clientType || project.budgetRange || project.duration) && (
        <div className="flex flex-wrap items-center gap-y-2.5 gap-x-6 text-sm text-lightGrey/75 pt-1">
          {project.clientType && (
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-classicGold shrink-0" />
              <span>{project.clientType}</span>
            </div>
          )}
          {project.budgetRange && (
            <div className="flex items-center gap-1.5 text-offWhite font-medium">
              <DollarSign className="w-4 h-4 text-classicGold shrink-0" />
              <span>Budget: {project.budgetRange}</span>
            </div>
          )}
          {project.duration && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-classicGold shrink-0" />
              <span>{project.duration}</span>
            </div>
          )}
        </div>
      )}

      {/* Actions Row */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-classicGold text-mutedGrey font-semibold px-5 py-2.5 rounded-lg hover:bg-classicGold/90 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-classicGold text-sm sm:text-base cursor-pointer"
          >
            <span>Visit Live Website</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        )}

        <Link
          href="/#contact"
          className="inline-flex items-center justify-center border border-darkGrey/80 text-lightGrey font-semibold px-5 py-2.5 rounded-lg hover:border-classicGold/60 hover:text-classicGold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-classicGold text-sm sm:text-base cursor-pointer"
        >
          Start a Similar Project
        </Link>

        {/* Quiet Code Links (only if codeIsPublic is true) */}
        {showCodeLinks && (
          <div className="flex items-center gap-4 text-xs sm:text-sm text-lightGrey/60 sm:ml-2">
            {project.frontendCode && (
              <a
                href={project.frontendCode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-classicGold transition-colors duration-200"
              >
                <FiGithub className="w-4 h-4" />
                <span>Frontend Code</span>
              </a>
            )}
            {project.backendCode && (
              <a
                href={project.backendCode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-classicGold transition-colors duration-200"
              >
                <FiGithub className="w-4 h-4" />
                <span>Backend Code</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectHeader;
