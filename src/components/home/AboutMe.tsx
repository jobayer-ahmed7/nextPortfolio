import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";
import { FaCode, FaLaptopCode, FaRocket, FaHeart } from "react-icons/fa";

const AboutMe = () => {
  const highlights = [
    {
      icon: <FaCode className="text-2xl" />,
      title: "Full-Stack Development",
      description: "MERN Stack expertise with modern JavaScript frameworks",
    },
    {
      icon: <FaLaptopCode className="text-2xl" />,
      title: "Responsive Design",
      description: "Creating seamless experiences across all devices",
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: "Performance Focused",
      description: "Optimized applications with clean, scalable code",
    },
    {
      icon: <FaHeart className="text-2xl" />,
      title: "Passionate Learner",
      description: "Always exploring new technologies and best practices",
    },
  ];

  return (
    <div className="min-h-[90vh] py-16 px-4">
      <div className="container mx-auto">
        <SectionHeading title="ABOUT ME" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1 space-y-8 ">
            <div className=" bg-cardBg/50 backdrop-blur-none rounded-2xl p-8 border border-mutedGrey/30 shadow-xl">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-classicGold mb-4">
                  Full Stack Developer
                </h3>
                <div className="w-14 h-1 bg-gradient-to-r from-classicGold to-yellow-500 rounded-full mb-6"></div>
              </div>

              <p className="text-lightGrey leading-relaxed text-lg mb-6">
                I am passionate about creating exceptional web experiences that
                combine
                <span className="text-classicGold font-semibold">
                  {" "}
                  beautiful design
                </span>{" "}
                with
                <span className="text-classicGold font-semibold">
                  {" "}
                  robust functionality
                </span>
                . Specializing in the MERN stack and Next.js, I build scalable
                applications that solve real-world problems.
              </p>

              <p className="text-lightGrey/80 leading-relaxed">
                My journey in web development is driven by curiosity and a
                commitment to continuous learning. I thrive on tackling
                challenging projects that push the boundaries of what&apos;s
                possible on the web.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className=" bg-mutedGrey/30 backdrop-blur-sm rounded-xl p-4 border border-darkGrey/30 hover:border-classicGold/50 transition-all duration-300 hover:transform hover:scale-[1.01] group"
                >
                  <div className="text-classicGold mb-3 ">
                    {item.icon}
                  </div>
                  <h4 className="text-offWhite font-semibold text-sm mb-2">
                    {item.title}
                  </h4>
                  <p className="text-lightGrey/70 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-full max-w-md">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-classicGold/20 via-transparent to-classicGold/10 rounded-3xl transform rotate-6 scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-mutedGrey/30 via-transparent to-cardBg/40 rounded-3xl transform -rotate-3 scale-105"></div>

              {/* Main image container */}
              <div className=" relative bg-gradient-to-br from-cardBg via-mutedGrey/50 to-cardBg p-6 rounded-3xl border border-classicGold/20 shadow-2xl hover:shadow-classicGold/10 transition-all duration-500 group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-classicGold/30 group-hover:border-classicGold/60 transition-colors duration-300">
                  <Image
                    className="transition-transform duration-500 scale-150 group-hover:scale-[1.52]"
                    alt="Jobayer Ahmed - MERN Stack Developer"
                    src="/assets/jobayer.jpg"
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      // filter: "brightness(1.05) contrast(1.1) saturate(1.1)",
                    }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-richBlack/20 via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-classicGold to-yellow-500 text-richBlack px-4 py-2 rounded-full font-semibold text-sm shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  Available for Work
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
