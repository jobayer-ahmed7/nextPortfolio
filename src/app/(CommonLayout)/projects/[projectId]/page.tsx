"use client";

import React, { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { fetchProjectById } from "@/lib/api";
import { IProject } from "@/models/Projects";
import Loading from "@/components/shared/Loading";
import BackButton from "@/components/shared/butttons/BackButton";
import ProjectHeader from "@/components/projects/ProjectHeader";
import CaseStudyCard from "@/components/projects/CaseStudyCard";
import ResultsCard from "@/components/projects/ResultsCard";
import CapabilitiesCard from "@/components/projects/CapabilitiesCard";
import ProjectTechCard from "@/components/projects/ProjectTechCard";
import ProjectTestimonial from "@/components/projects/ProjectTestimonial";
import ProjectCtaBand from "@/components/projects/ProjectCtaBand";
import ProjectNav from "@/components/projects/ProjectNav";
import MobileCtaBar from "@/components/projects/MobileCtaBar";

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<IProject | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const fetchSingleProject = async () => {
      if (!projectId) {
        setHasError(true);
        setIsLoading(false);
        return;
      }
      try {
        setIsLoading(true);
        const res = await fetchProjectById(projectId as string);
        if (res) {
          setProject(res);
          setHasError(false);
        } else {
          setHasError(true);
        }
      } catch (error) {
        console.error("Failed to fetch project:", error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSingleProject();
  }, [projectId]);

  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  if (isLoading) {
    return <Loading height={"min-h-screen"} />;
  }

  if (hasError || !project) {
    return (
      <div className="min-h-screen text-lightGrey flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-20 pb-16 text-center space-y-5 max-w-lg">
          <h1 className="text-3xl sm:text-4xl font-bold text-offWhite">
            Project not found
          </h1>
          <p className="text-lightGrey/75 text-sm sm:text-base leading-relaxed">
            The project you are looking for does not exist or may have been removed.
          </p>
          <div>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center bg-classicGold text-mutedGrey font-semibold px-6 py-2.5 rounded-lg hover:bg-classicGold/90 transition-all duration-300 shadow-md text-sm"
            >
              ← Back to all projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const displayTitle = project.shortTitle || project.title || "Project";
  const hasChallenge = Boolean(project.challenge);
  const hasSolution = Boolean(project.solution);
  const hasCaseStudy = hasChallenge || hasSolution;

  return (
    <div className="min-h-screen text-lightGrey pb-24 lg:pb-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-20 pb-16">
        {/* Back Button */}
        <div className="py-2 flex">
          <BackButton />
        </div>

        {/* Image Carousel */}
        {project.images && project.images.length > 0 && (
          <div className="relative mt-2">
            <Carousel
              plugins={[plugin.current]}
              className="w-full h-[35vh] md:h-[45vh]"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {project.images.map((imgUrl, index) => (
                  <CarouselItem key={index} className="h-[35vh] md:h-[45vh]">
                    <div className="p-1 h-full">
                      <Card className="h-full border-none bg-cardBg/40 overflow-hidden rounded-2xl sm:rounded-3xl">
                        <CardContent className="flex items-center justify-center h-full p-0">
                          <div className="relative w-full h-full bg-richBlack/60">
                            <Image
                              alt={`${displayTitle} screenshot ${index + 1}`}
                              fill
                              priority={index === 0}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                              className="object-cover"
                              src={imgUrl}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-richBlack/70 border-darkGrey text-lightGrey hover:text-classicGold hover:border-classicGold/50" />
              <CarouselNext className="right-4 bg-richBlack/70 border-darkGrey text-lightGrey hover:text-classicGold hover:border-classicGold/50" />
            </Carousel>
          </div>
        )}

        {/* Summary Header */}
        <ProjectHeader project={project} />

        {/* 2-Column Main Content on lg (7/5 split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-10">
          {/* Left Column (7 cols): Case-study story */}
          <div className="lg:col-span-7 space-y-6">
            {hasCaseStudy ? (
              <>
                {hasChallenge && (
                  <CaseStudyCard
                    heading="The Challenge"
                    content={project.challenge!}
                  />
                )}
                {hasSolution && (
                  <CaseStudyCard
                    heading="The Solution"
                    content={project.solution!}
                  />
                )}
                {project.results && project.results.length > 0 && (
                  <ResultsCard results={project.results} />
                )}
              </>
            ) : (
              project.overview && (
                <CaseStudyCard
                  heading="Overview"
                  content={project.overview}
                />
              )
            )}

            {/* Key Capabilities */}
            {project.features && project.features.length > 0 && (
              <CapabilitiesCard features={project.features} />
            )}
          </div>

          {/* Right Column (5 cols): Sticky CTA + Compact Tech */}
          <div className="lg:col-span-5 space-y-6">
            {/* <ProjectCtaCard /> */}
            <ProjectTechCard technologies={project.technologies} />
          </div>
        </div>

        {/* Testimonial (Full-width, if available) */}
        <ProjectTestimonial testimonial={project.testimonial} />

        {/* Bottom CTA Band */}
        <ProjectCtaBand />

        {/* Previous / Next Project Navigation */}
        <ProjectNav currentId={project._id || (projectId as string)} />
      </div>

      {/* Sticky Bottom CTA Bar on Mobile (< lg) */}
      <MobileCtaBar />
    </div>
  );
};

export default ProjectDetailsPage;
