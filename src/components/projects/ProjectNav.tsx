"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import { fetchProjects } from "@/lib/api";
import { IProject } from "@/models/Projects";

interface ProjectNavProps {
  currentId: string;
}

const ProjectNav = ({ currentId }: ProjectNavProps) => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    const loadProjects = async () => {
      try {
        const list = await fetchProjects();
        if (isMounted) {
          setProjects(list);
        }
      } catch (err) {
        console.error("Failed to load projects for navigation:", err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProjects();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading || projects.length <= 1) {
    return null;
  }

  const currentIndex = projects.findIndex((p) => p._id === currentId);
  if (currentIndex === -1) {
    return null;
  }

  const total = projects.length;
  const prevProject = projects[(currentIndex - 1 + total) % total];
  const nextProject = projects[(currentIndex + 1) % total];

  const prevTitle = prevProject.shortTitle || prevProject.title;
  const nextTitle = nextProject.shortTitle || nextProject.title;

  return (
    <nav
      aria-label="Project Navigation"
      className="mt-12 pt-8 border-t border-darkGrey/40 flex flex-col sm:flex-row items-center justify-between gap-6"
    >
      {/* Previous project link */}
      <Link
        href={`/projects/${prevProject._id}`}
        className="flex items-center gap-3 group w-full sm:w-auto hover:text-classicGold transition-colors duration-200"
      >
        {prevProject.images?.[0] && (
          <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-darkGrey/60 group-hover:border-classicGold/50 transition-colors">
            <Image
              src={prevProject.images[0]}
              alt={prevTitle}
              fill
              sizes="48px"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="text-left">
          <div className="flex items-center gap-1 text-xs text-lightGrey/60 group-hover:text-classicGold transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous project</span>
          </div>
          <p className="text-sm font-semibold text-offWhite line-clamp-1 max-w-45 sm:max-w-50">
            {prevTitle}
          </p>
        </div>
      </Link>

      {/* View all projects */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-darkGrey/60 text-xs sm:text-sm font-medium text-lightGrey/80 hover:text-classicGold hover:border-classicGold/40 transition-all duration-200"
      >
        <LayoutGrid className="w-4 h-4 text-classicGold" />
        <span>All projects</span>
      </Link>

      {/* Next project link */}
      <Link
        href={`/projects/${nextProject._id}`}
        className="flex items-center justify-end gap-3 group w-full sm:w-auto hover:text-classicGold transition-colors duration-200 text-right"
      >
        <div className="text-right">
          <div className="flex items-center justify-end gap-1 text-xs text-lightGrey/60 group-hover:text-classicGold transition-colors">
            <span>Next project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
          <p className="text-sm font-semibold text-offWhite line-clamp-1 max-w-45 sm:max-w-50">
            {nextTitle}
          </p>
        </div>
        {nextProject.images?.[0] && (
          <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-darkGrey/60 group-hover:border-classicGold/50 transition-colors">
            <Image
              src={nextProject.images[0]}
              alt={nextTitle}
              fill
              sizes="48px"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
      </Link>
    </nav>
  );
};

export default ProjectNav;
