import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3, FaGitAlt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMongoose, SiTailwindcss, SiVite } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import SectionHeading from "../shared/SectionHeading";

interface Skill {
  name: string;
  icon: React.ComponentType;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  gradient: string;
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      gradient: "from-darkGrey/10 to-mutedGrey/10",
      skills: [
        {
          name: "React",
          icon: FaReact,
          color: "text-lightGrey"
        },
        {
          name: "Next.js",
          icon: RiNextjsFill,
          color: "text-lightGrey"
        },
        {
          name: "TypeScript",
          icon: BiLogoTypescript,
          color: "text-lightGrey"
        },
        {
          name: "JavaScript",
          icon: IoLogoJavascript,
          color: "text-lightGrey"
        },
        {
          name: "HTML5",
          icon: FaHtml5,
          color: "text-lightGrey"
        },
        {
          name: "CSS3",
          icon: FaCss3,
          color: "text-lightGrey"
        },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          color: "text-lightGrey"
        },
        {
          name: "Redux",
          icon: TbBrandRedux,
          color: "text-lightGrey"
        }
      ]
    },
    {
      title: "Backend Development",
      gradient: "from-darkGrey/10 to-mutedGrey/10",
      skills: [
        {
          name: "Node.js",
          icon: FaNode,
          color: "text-lightGrey"
        },
        {
          name: "Express.js",
          icon: SiExpress,
          color: "text-lightGrey"
        },
        {
          name: "MongoDB",
          icon: SiMongodb,
          color: "text-lightGrey"
        },
        {
          name: "Mongoose",
          icon: SiMongoose,
          color: "text-lightGrey"
        }
      ]
    },
    {
      title: "Tools & Technologies",
      gradient: "from-darkGrey/10 to-mutedGrey/10",
      skills: [
        {
          name: "Git",
          icon: FaGitAlt,
          color: "text-lightGrey"
        },
        {
          name: "GitHub",
          icon: FaGithub,
          color: "text-lightGrey"
        },
        {
          name: "Vite",
          icon: SiVite,
          color: "text-lightGrey"
        }
      ]
    }
  ];


  return (
    <div className="container mx-auto px-4">
      <SectionHeading title="SKILLS" />
      
      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="relative">
            {/* Category Header */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
              <div className="h-1 w-20 bg-gradient-to-r from-classicGold to-transparent rounded-full"></div>
            </div>
            
            {/* Skills Grid */}
            <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${category.gradient} backdrop-blur-sm border border-mutedGrey/20`}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative bg-cardBg/30 backdrop-blur-sm rounded-xl p-4 hover:bg-cardBg/50 transition-all duration-300 hover:scale-105 border border-mutedGrey/10 hover:border-classicGold/20"
                  >
                    {/* Skill Icon */}
                    <div className="flex flex-col items-center text-center">
                      <div className={`text-4xl md:text-5xl mb-3 ${skill.color} group-hover:text-classicGold group-hover:scale-110 transition-all duration-300`}>
                        <skill.icon />
                      </div>
                      
                      {/* Skill Name */}
                      <h4 className="text-sm md:text-base font-semibold text-lightGrey group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </div>
                    
                    {/* Subtle Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-classicGold/0 via-classicGold/3 to-classicGold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Skills;


