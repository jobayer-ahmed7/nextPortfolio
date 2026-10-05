import Image from "next/image";
import { FaChartLine, FaMobileAlt, FaRocket, FaStore } from "react-icons/fa";
import SectionHeading from "../shared/SectionHeading";

const AboutMe = () => {
  const highlights = [
    {
      icon: <FaStore className="text-2xl" />,
      title: "Custom Online Stores",
      description:
        "Full-stack e-commerce sites with secure checkout and an easy admin dashboard.",
    },
    {
      icon: <FaMobileAlt className="text-2xl" />,
      title: "Mobile-First Design",
      description:
        "Stores that look and work great on the phones most customers shop from.",
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: "Fast Loading Pages",
      description: "Quick pages mean fewer visitors leave before they buy.",
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Real E-commerce Experience",
      description:
        "Product research, sales strategy, and my own live store, not just code.",
    },
  ];

  return (
    <div className="min-h-[90vh]  px-4 overflow-x-hidden">
      <div className="container mx-auto">
        <SectionHeading title="ABOUT ME" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1 space-y-8 p-2">
            <div className=" bg-cardBg/50 backdrop-blur-none rounded-2xl p-8 border border-mutedGrey/30 shadow-xl">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-classicGold mb-4">
                  E-commerce Developer Who Understands Sales
                </h3>
                <div className="w-14 h-1 bg-linear-to-r from-classicGold to-yellow-500 rounded-full mb-6"></div>
              </div>

              <p className="text-lightGrey leading-relaxed text-lg mb-6">
                I build{" "}
                <span className="text-classicGold font-semibold">
                  fast, easy-to-manage online stores
                </span>{" "}
                that help businesses{" "}
                <span className="text-classicGold font-semibold">
                  get more orders
                </span>
                . I work with Next.js and the MERN stack, and I also run my own
                e-commerce business, so I design every page with one question in
                mind:{" "}
                <span className="text-classicGold font-semibold">
                  will this make someone buy?
                </span>
              </p>

              <p className="text-lightGrey/80 leading-relaxed">
                Before writing code for clients, I worked in e-commerce product
                research, pricing, and sales strategy. I know what makes a
                product page convert, how to set up a store you can manage
                without a developer, and how to get it ready for Meta Ads
                traffic. You get a developer who understands your business.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className=" bg-mutedGrey/30 backdrop-blur-sm rounded-xl p-4 border border-darkGrey/30 hover:border-classicGold/50 transition-all duration-300 hover:transform hover:scale-[1.01] group"
                >
                  <div className="text-classicGold mb-3 ">{item.icon}</div>
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
            <div className="relative w-4/5 max-w-xs sm:w-full sm:max-w-sm lg:max-w-md">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-linear-to-br from-classicGold/20 via-transparent to-classicGold/10 rounded-3xl transform rotate-6 scale-105"></div>
              <div className="absolute inset-0 bg-linear-to-tl from-mutedGrey/30 via-transparent to-cardBg/40 rounded-3xl transform -rotate-3 scale-105"></div>

              {/* Main image container */}
              <div className=" relative bg-linear-to-br from-cardBg via-mutedGrey/50 to-cardBg p-4 sm:p-6 rounded-3xl border border-classicGold/20 shadow-2xl hover:shadow-classicGold/10 transition-all duration-500 group">
                <div className="relative aspect-4/5 overflow-hidden rounded-2xl border-2 border-classicGold/30 group-hover:border-classicGold/60 transition-colors duration-300">
                  <Image
                    className="transition-transform duration-500 scale-150 group-hover:scale-[1.52]"
                    alt="Jobayer Ahmed - E-commerce Developer"
                    src="/assets/jobayer.jpg"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-richBlack/20 via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-linear-to-r from-classicGold to-yellow-500 text-richBlack px-4 py-2 rounded-full font-semibold text-sm shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
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
