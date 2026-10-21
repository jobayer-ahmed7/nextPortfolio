"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  MessageSquareText,
  FileCheck2,
  Code2,
  Rocket,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Discuss",
    description:
      "Tell me about your business, your customers, and what you want your website to do. We’ll talk through your goals on a call or chat, and I’ll ask the right questions so nothing gets missed.",
    icon: MessageSquareText,
  },
  {
    step: "02",
    title: "Plan and quote",
    description:
      "I’ll put together a clear plan: the pages, features, and timeline. You get a fixed quote with no hidden costs. You approve it before any work begins.",
    icon: FileCheck2,
  },
  {
    step: "03",
    title: "Build",
    description:
      "I design and develop your site with Next.js, React.js, Node.js and related technologies. You see progress along the way and can give feedback, so the final result is what you pictured.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Launch and support",
    description:
      "We go live together. After launch, I stay available to fix issues, answer questions, and help you make updates as your business grows.",
    icon: Rocket,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

const Process = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div className="w-full">
      <SectionHeading title="PROCESS" />

      {/* Subheading */}
      <p className="text-center text-lightGrey/70 max-w-2xl mx-auto -mt-6 sm:-mt-8 mb-12 sm:mb-16 text-sm sm:text-base leading-relaxed">
        No surprises. Here&apos;s exactly what happens from the first message to
        launch day.
      </p>

      {/* Steps Grid */}
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
      >
        {steps.map((stepItem, i) => {
          const Icon = stepItem.icon;
          return (
            <motion.div
              key={stepItem.step}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              className="relative flex flex-col justify-between rounded-2xl border border-darkGrey/40 bg-cardBg/40 backdrop-blur-sm p-6 lg:p-7 transition-all duration-300 hover:border-classicGold/40 hover:bg-cardBg/70 hover:-translate-y-1 group"
            >
              {/* Step indicator header */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-classicGold/40 group-hover:text-classicGold transition-colors duration-300">
                    {stepItem.step}
                  </span>
                  <div className="size-11 rounded-xl bg-mutedGrey/60 text-classicGold/80 group-hover:bg-classicGold/15 group-hover:text-classicGold flex items-center justify-center transition-colors duration-300">
                    <Icon className="size-5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-offWhite mb-3 group-hover:text-white transition-colors duration-200">
                  {stepItem.title}
                </h3>

                {/* Description */}
                <p className="text-lightGrey/75 text-sm leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              {/* Subtle top border accent glow on hover */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-classicGold/30 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          );
        })}
      </div>

      {/* Closing line & CTA */}
      <div className="mt-12 sm:mt-16 text-center">
        <p className="text-sm sm:text-base text-offWhite font-medium mb-4">
          Ready to start?{" "}
          <span className="text-classicGold font-semibold">
            Let&apos;s talk about your project.
          </span>
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-classicGold/40 bg-classicGold/10 px-6 py-2.5 text-xs sm:text-sm font-semibold text-classicGold transition-all duration-300 hover:bg-classicGold hover:text-richBlack hover:shadow-lg hover:shadow-classicGold/20"
        >
          <span>Get in Touch</span>
          <ArrowRight className="size-4" />
        </a>
      </div>
    </div>
  );
};

export default Process;
