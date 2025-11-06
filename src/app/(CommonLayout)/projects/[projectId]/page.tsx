"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FiGithub } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";
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
import CvButton from "@/components/shared/butttons/cvButton/CvButton";
import Image from "next/image";
import { fetchProjectById } from "@/lib/api";
import { IProject } from "@/models/Projects";
import Loading from "@/components/shared/Loading";
import BackButton from "@/components/shared/butttons/BackButton";

const ProjectDetailsPage = () => {
  const { projectId } = useParams();


  console.log(projectId);
  const [project, setProject] = useState<IProject>();
  console.log(project);

  useEffect(() => {
    const fetchSingleProject = async () => {
      if (!projectId) {
        console.error("Project ID is not defined");
        return;
      }
      try {
        const res = await fetchProjectById(projectId as string);
        console.log(res);
        if (res) {
          setProject(res);
        }
      } catch (error) {
        console.error("Failed to fetch featured products:", error);
      }
    };
    fetchSingleProject();
  }, [projectId]);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className=" min-h-screen text-lightGrey">
      {!project ? (
        <Loading height={"min-h-screen"} />
      ) : (
        <div className="container mx-auto p-4 ">
          <p className="py-4 flex gap-2">
            <BackButton/>
          </p>
          <Carousel
            plugins={[plugin.current]}
            className="w-full h-[65vh]"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {project?.images.map((imgUrl, index) => (
                <CarouselItem key={index} className=" min-h-[65vh] ">
                  <div className="p-1 h-full">
                    <Card className=" h-full border-none">
                      <CardContent className="flex items-center justify-center h-full">
                        <div className="relative w-full h-full ">
                          <Image alt="" fill objectFit="cover" src={imgUrl} />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className=" lg:grid lg:grid-cols-12 gap-6 mt-4">
            <div className="col-span-12 lg:flex  space-y-4 justify-between">
              <h2 className="text-4xl  font-semibold">{project?.title}</h2>
              <p className="flex gap-4">
                <Link target="_blank" href={project?.liveLink}>
                  <CvButton
                    className="!px-3"
                    icon={GoLinkExternal}
                    label="Live Link"
                  />
                </Link>
                <Link target="_blank" href={project?.frontendCode}>
                  <CvButton
                    className="!px-3"
                    icon={FiGithub}
                    label="Frontend Code"
                  />
                </Link>
                <Link target="_blank" href={project?.backendCode}>
                  <CvButton
                    className="!px-3"
                    icon={FiGithub}
                    label="Backend Code"
                  />
                </Link>
              </p>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <div className=" p-4 rounded-4xl inset-shadow-xs inset-shadow-darkGrey">
                <h3 className="text-3xl text-offWhite mb-6">Overview</h3>
                <p>{project?.overview}</p>
              </div>
              <div className=" p-4 rounded-4xl inset-shadow-xs inset-shadow-darkGrey">
                <h3 className="text-3xl text-offWhite mb-6">Features</h3>
                <ul className="list-inside list-disc">
                  {project?.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-3xl text-offWhite mb-6">Technologies</h3>
              <div className=" p-4 rounded-4xl inset-shadow-xs inset-shadow-darkGrey">
                <h3 className="text-3xl text-offWhite mb-6">Frontend</h3>
                <div className="flex gap-3 flex-wrap">
                  {project?.technologies?.frontend.map((tec, i) => (
                    <p
                      key={i}
                      className="bg-cardBg px-2.5 py-0.5 rounded-2xl text-classicGold"
                    >
                      {tec}
                    </p>
                  ))}
                </div>
              </div>
              <div className=" p-4 rounded-4xl inset-shadow-xs inset-shadow-darkGrey">
                <h3 className="text-3xl text-offWhite mb-6">Backend</h3>
                <div className="flex gap-3 flex-wrap">
                  {project?.technologies?.backend.map((tec, i) => (
                    <p
                      key={i}
                      className="bg-cardBg px-2.5 py-0.5 rounded-2xl text-classicGold"
                    >
                      {tec}
                    </p>
                  ))}
                </div>
              </div>
              <div className=" p-4 rounded-4xl inset-shadow-xs inset-shadow-darkGrey">
                <h3 className="text-3xl text-offWhite mb-6">Tools</h3>
                <div className="flex gap-3 flex-wrap">
                  {project?.technologies?.tools.map((tec, i) => (
                    <p
                      key={i}
                      className="bg-cardBg px-2.5 py-0.5 rounded-2xl text-classicGold"
                    >
                      {tec}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailsPage;
