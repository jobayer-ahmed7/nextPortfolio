import { Calendar, MapPin } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
}

const Experience = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      company: "GoldenRow",
      role: "Product Researcher, Sales Strategist & Trainner",
      period: "Apr 2024 – Present",
      location: "Remote",
      type: "Part-time",
      description: "Leading product research and sales strategy initiatives for e-commerce optimization.",
      achievements: [
        "Developed data-driven product sourcing strategies using trend analysis",
        "Collaborated with cross-functional teams to align offerings with market demands",
        "Optimized pricing strategies resulting in improved sales performance",
        "Maintained high-quality remote communication and reporting standards"
      ]
    },
    {
      id: 2,
      company: "Radyan Corporation",
      role: "Product Researcher & Virtual Assistant",
      period: "Aug 2023 – Mar 2024",
      location: "Remote",
      type: "Full-time",
      description: "Specialized in Amazon marketplace research and e-commerce optimization.",
      achievements: [
        "Conducted comprehensive product research ",
        "Enhanced product listings to improve visibility and conversion rates",
        "Performed competitive analysis for strategic new product launches",
        "Contributed to cross-functional e-commerce team initiatives"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <SectionHeading title="EXPERIENCE" />
      
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {experiences.map((experience) => (
            <div 
              key={experience.id} 
              className="relative group h-fit "
            >
              {/* Experience Card */}
              <div className="bg-cardBg/30 backdrop-blur-sm border border-mutedGrey/20 rounded-2xl p-6 hover:bg-cardBg/50 hover:border-classicGold/30 transition-all duration-300 h-full">
                
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="text-lg md:text-xl font-bold text-white transition-colors duration-300">
                          {experience.role}
                        </h3>
                        <span className="px-2 py-1 text-xs font-medium bg-classicGold/10 text-classicGold rounded-full border border-classicGold/20">
                          {experience.type}
                        </span>
                      </div>
                      
                      <p className="text-base text-lightGrey font-medium mb-3">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                  
                  {/* Meta Info */}
                  <div className="flex flex-col gap-2 text-sm text-lightGrey/70 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-classicGold" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-classicGold" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-lightGrey/80 leading-relaxed text-sm">
                    {experience.description}
                  </p>
                </div>
                
                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-lightGrey uppercase tracking-wide">
                    Key Achievements
                  </h4>
                  <div className="grid gap-2">
                    {experience.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3 group/item">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-classicGold flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                        <p className="text-lightGrey/90 leading-relaxed group-hover/item:text-white transition-colors duration-200 text-sm">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Subtle decorative element */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-classicGold/20 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
