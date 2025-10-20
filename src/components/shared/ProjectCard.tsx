import { IProject } from "@/models/Projects";
import { ArrowRight, Globe, Code, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TechnologyBadge from "./TechnologyBadge";

const ProjectCard = ({ project }: { project: IProject }) => {
  const featuredTechnologies = [
    ...project.technologies.frontend.slice(0, 2),
    ...project.technologies.backend.slice(0, 1)
  ].slice(0, 3);

  return (
    <div className="bg-cardBg rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-darkGrey/50 hover:border-classicGold/30 group">
      {/* Project Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={project?.images[0]}
          alt={project?.title}
          layout="fill" 
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-300"
        />
        {project.isFeatured && (
          <div className="absolute top-3 right-3">
            <span className="bg-classicGold text-mutedGrey text-xs font-bold px-2 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      
      {/* Project Content */}
      <div className="p-6 space-y-4">
        {/* Title and Date */}
        <div>
          <h3 className="text-xl font-bold text-lightGrey mb-2 group-hover:text-classicGold transition-colors duration-300">
             {project?.title.length > 40 ? `${project.title.slice(0, 40)}...`: `${project.title}`}
          </h3>
          {project.createdAt && (
            <div className="flex items-center text-lightGrey/60 text-sm mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(project.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short'
              })}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-lightGrey/80 text-sm line-clamp-3 leading-relaxed">
          {project?.overview.length > 120 ? `${project.overview.slice(0, 120)}...`: `${project.overview}`}
        </p>

        {/* Technologies */}
        {featuredTechnologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {featuredTechnologies.map((tech, index) => (
              <TechnologyBadge key={index} technology={tech} variant="secondary" />
            ))}
            {(project.technologies.frontend.length + project.technologies.backend.length) > 3 && (
              <span className="text-lightGrey/60 text-xs font-medium px-2 py-1">
                +{(project.technologies.frontend.length + project.technologies.backend.length) - 3} more
              </span>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Link
            href={`/projects/${project?._id}`}
            className="flex-1 flex items-center justify-center bg-classicGold text-mutedGrey px-4 py-2 rounded-lg hover:bg-classicGold/90 transition-all duration-300 font-medium group/button"
          >
            View Details
            <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-300" />
          </Link>
          
          <div className="flex gap-2">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-darkGrey rounded-lg hover:border-classicGold hover:text-classicGold transition-colors duration-300 group/link"
              title="Live Demo"
            >
              <Globe className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
            </a>
            
            <a
              href={project.frontendCode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-darkGrey rounded-lg hover:border-classicGold hover:text-classicGold transition-colors duration-300 group/link"
              title="Source Code"
            >
              <Code className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;



