"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  FaShoppingCart,
  FaGlobe,
  FaTools,
  FaCheck,
  FaClock,
} from "react-icons/fa";
import { Send } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import PrimaryButton from "@/components/shared/butttons/PrimaryButton";

interface Service {
  icon: React.ElementType;
  badge?: string;
  title: string;
  whoFor: string;
  includes: string[];
  timeline: string;
  startingFrom: string;
  featured?: boolean;
}

const services: Service[] = [
  {
    icon: FaShoppingCart,
    badge: "Most Popular",
    title: "E-commerce Website",
    whoFor:
      "Small-to-medium businesses wanting a fast, conversion-focused online store built to sell.",
    includes: [
      "Custom Next.js storefront",
      "Product, cart & checkout pages",
      "Secure payment integration",
      "Mobile-first responsive design",
      "Admin dashboard setup",
      "SEO & performance optimisation",
    ],
    timeline: "2 – 3 weeks",
    startingFrom: "৳15000",
    featured: true,
  },
  {
    icon: FaGlobe,
    title: "Business / Landing Page",
    whoFor:
      "Freelancers, agencies & local businesses that need a sharp web presence or campaign page — fast.",
    includes: [
      "Custom Next.js / React page",
      "Hero, features & contact sections",
      "Lead-gen form or booking link",
      "Mobile-first design",
      "Basic SEO meta tags",
      "Deployed & live within days",
    ],
    timeline: "1 – 2 weeks",
    startingFrom: "৳7000",
  },
  {
    icon: FaTools,
    title: "Fixes, Redesigns & Speed",
    whoFor:
      "Businesses with an existing site that's slow, outdated, broken, or simply no longer converting.",
    includes: [
      "Core Web Vitals & Lighthouse audit",
      "Image, code & caching fixes",
      "UI redesign or component refresh",
      "Bug fixes & browser compatibility",
      "Performance report included",
      "Post-delivery support call",
    ],
    timeline: "About a week",
    startingFrom: "৳5000",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="w-full px-4 py-8 container mx-auto">
      <SectionHeading title="SERVICES" />

      <p className="text-center text-lightGrey/70 max-w-2xl mx-auto -mt-4 mb-12 text-base leading-relaxed">
        Every project is scoped, priced, and delivered clearly — so you know
        exactly what you&apos;re getting before we start.
      </p>

      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
      >
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              className={`relative flex flex-col rounded-2xl border p-6 lg:p-8 shadow-xl transition-all duration-300 hover:scale-[1.02] group ${
                service.featured
                  ? "bg-cardBg border-classicGold/60 shadow-classicGold/10"
                  : "bg-cardBg border-darkGrey/40 hover:border-classicGold/40"
              }`}
            >
              {/* Featured badge */}
              {service.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-classicGold text-richBlack text-xs font-bold px-4 py-1 rounded-full shadow-md shadow-classicGold/30 whitespace-nowrap">
                  {service.badge}
                </span>
              )}

              {/* Icon */}
              <div
                className={`mb-5 inline-flex size-12 items-center justify-center rounded-xl text-xl ${
                  service.featured
                    ? "bg-classicGold/20 text-classicGold"
                    : "bg-mutedGrey/50 text-classicGold/80 group-hover:bg-classicGold/15 group-hover:text-classicGold transition-colors duration-300"
                }`}
              >
                <Icon />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-offWhite mb-2">
                {service.title}
              </h3>

              {/* Who it's for */}
              <p className="text-lightGrey/60 text-sm italic mb-5 leading-relaxed">
                {service.whoFor}
              </p>

              {/* What's included */}
              <ul className="space-y-2.5 mb-6 flex-1">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <FaCheck className="mt-0.5 shrink-0 text-classicGold text-xs" />
                    <span className="text-lightGrey/85">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Timeline */}
              <div className="flex items-center gap-2 mb-5">
                <FaClock className="text-classicGold/70 text-xs shrink-0" />
                <span className="text-xs text-lightGrey/60 bg-mutedGrey/40 px-3 py-1 rounded-full">
                  {service.timeline}
                </span>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <span className="text-xs text-lightGrey/50 uppercase tracking-widest">
                  Starting from
                </span>
                <p className="text-3xl font-bold text-classicGold mt-1">
                  {service.startingFrom}
                </p>
              </div>

              {/* CTA */}
              <a href="#contact" className="block w-full">
                <PrimaryButton
                  label="Get a Quote"
                  icon={Send}
                  className="w-full justify-center! text-sm py-2.5! px-4!"
                />
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
