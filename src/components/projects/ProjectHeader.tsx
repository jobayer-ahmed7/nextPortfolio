import { IProject } from "@/models/Projects";
import { Briefcase, Clock, Code2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";

interface ProjectHeaderProps {
  project: IProject;
}

const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  const displayTitle = project.shortTitle || project.title;
  const showSubtitle = Boolean(project.shortTitle && project.shortTitle !== project.title);

  return (
    <div className="space-y-6 pt-6">
      {/* Category Pill */}
      {project.category && (
        <div>
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-classicGold/10 text-classicGold border border-classicGold/30">
            {project.category}
          </span>
        </div>
      )}

      {/* Main Title & Subtitle */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-offWhite tracking-tight">
          {displayTitle}
        </h1>
        {showSubtitle && (
          <p className="text-lg text-lightGrey/80 font-medium">
            {project.title}
          </p>
        )}
        {project.tagline && (
          <p className="text-base sm:text-lg text-lightGrey/90 leading-relaxed max-w-3xl">
            {project.tagline}
          </p>
        )}
      </div>

      {/* Meta Row: clientType, role, duration */}
      {(project.clientType || project.role || project.duration) && (
        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-lightGrey/75 pt-1">
          {project.clientType && (
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-classicGold shrink-0" />
              <span>{project.clientType}</span>
            </div>
          )}
          {project.role && (
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-classicGold shrink-0" />
              <span>{project.role}</span>
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
            <span>Live Demo</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        )}

        <Link
          href="/#contact"
          className="inline-flex items-center justify-center border border-darkGrey/80 text-lightGrey font-semibold px-5 py-2.5 rounded-lg hover:border-classicGold/60 hover:text-classicGold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-classicGold text-sm sm:text-base cursor-pointer"
        >
          Start a similar project
        </Link>

        {/* Quiet Code Links */}
        {(project.frontendCode || project.backendCode) && (
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
