"use client";

import { motion } from "motion/react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3, FaGitAlt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import SectionHeading from "../shared/SectionHeading";

interface Skill {
  name: string;
  icon: React.ComponentType;
  color: string;
}

const skills: Skill[] = [
  { name: "React", icon: FaReact, color: "text-lightGrey" },
  { name: "Next.js", icon: RiNextjsFill, color: "text-lightGrey" },
  { name: "TypeScript", icon: BiLogoTypescript, color: "text-lightGrey" },
  { name: "JavaScript", icon: IoLogoJavascript, color: "text-lightGrey" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-lightGrey" },
  { name: "Redux", icon: TbBrandRedux, color: "text-lightGrey" },
  { name: "HTML5", icon: FaHtml5, color: "text-lightGrey" },
  { name: "CSS3", icon: FaCss3, color: "text-lightGrey" },
  { name: "Node.js", icon: FaNode, color: "text-lightGrey" },
  { name: "Express.js", icon: SiExpress, color: "text-lightGrey" },
  { name: "MongoDB", icon: SiMongodb, color: "text-lightGrey" },
  { name: "Mongoose", icon: SiMongoose, color: "text-lightGrey" },
  { name: "Git", icon: FaGitAlt, color: "text-lightGrey" },
  { name: "GitHub", icon: FaGithub, color: "text-lightGrey" },
  { name: "Vite", icon: SiVite, color: "text-lightGrey" },
];

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const Icon = skill.icon;
  return (
    <div className="group relative flex items-center gap-3 px-5 py-3.5 rounded-xl bg-cardBg/30 backdrop-blur-sm border border-mutedGrey/20 hover:border-classicGold/40 hover:bg-cardBg/60 transition-all duration-300 shrink-0">
      <div className="text-3xl text-lightGrey group-hover:text-classicGold group-hover:scale-110 transition-all duration-300">
        <Icon />
      </div>
      <span className="text-sm md:text-base font-medium text-lightGrey group-hover:text-white transition-colors duration-300 whitespace-nowrap">
        {skill.name}
      </span>
      {/* Subtle hover glow effect */}
      <div className="absolute inset-0 rounded-xl bg-linear-to-r from-classicGold/0 via-classicGold/5 to-classicGold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

interface MarqueeStripProps {
  items: Skill[];
  direction: "left" | "right";
  duration?: number;
}

const MarqueeStrip = ({
  items,
  direction,
  duration = 35,
}: MarqueeStripProps) => {
  // Triple the items to ensure seamless continuous scroll across all viewport sizes
  const duplicatedItems = [...items, ...items, ...items];

  // direction === "left" means content moves to the left (viewed scrolling left)
  // direction === "right" means content moves to the right (viewed scrolling right)
  const initialX = direction === "left" ? "0%" : "-33.333%";
  const animateX = direction === "left" ? "-33.333%" : "0%";

  return (
    <div className="relative w-full overflow-hidden py-2 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex gap-4 sm:gap-6 w-max"
        initial={{ x: initialX }}
        animate={{ x: animateX }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
        }}
      >
        {duplicatedItems.map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
};



const Skills = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 overflow-hidden">

      <div className={`flex flex-col gap-6 sm:gap-8  "mt-2"}`}>
        {/* Strip 1: Animates towards the left */}
        <MarqueeStrip items={skills} direction="left" duration={40} />

        {/* Strip 2: Animates towards the right */}
        <MarqueeStrip items={skills} direction="right" duration={40} />
      </div>
    </div>
  );
};

export default Skills;
