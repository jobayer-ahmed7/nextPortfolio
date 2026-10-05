import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Send } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import PrimaryButton from "../shared/butttons/PrimaryButton";

const HeroSection = () => {
  return (
    <div className="w-full relative h-[85vh] [clip-path:inset(0)]">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Image
          src="/assets/hero-dark.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover brightness-[0.3]"
        />
      </div>
      {/* Content container */}
      <div className=" h-full container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 text-offWhite items-center pt-16 backdrop-blur-xs ">
        {/* Text Section */}
        <div className="flex flex-col items-center justify-center text-center px-2">
          <div className=" mb-4">
            <h1 className="text-classicGold text-3xl font-semibold md:text-5xl">
              I AM JOBAYER AHMED.
            </h1>
              {/* Animated Role */}
            <div className="text-xl md:text-2xl text-lightGrey font-light h-10 flex justify-center mt-4">
              <TypeAnimation
                sequence={[
                  "E-commerce Website Developer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "Next.js Developer",
                  2000,
                  "React Developer"
                ]}
                speed={10}
                repeat={Infinity}
              />
            </div>
          </div>
          <p className=" w-2/3  text-lightGrey">
            I build fast E-commerce websites that turn visitors into customers. Next.js and MERN developer for online businesses.
          </p>
            <a className="my-8" href="#contact">
              <PrimaryButton label="Book a Free 15-min Call" icon={Send} />
            </a>
            <p className="mb-6 text-lightGrey/80">3+ years in e-commerce research and sales.</p>
          <div className="flex text-3xl sm:text-4xl gap-4 sm:gap-6 text-lightGrey">
            <a
              className="hover:scale-125 duration-300 "
              href="https://github.com/jobayer-ahmed7"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="hover:scale-125 duration-300 "
              href="https://www.linkedin.com/in/jobayerahmmed7/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className="hover:scale-125 duration-300 "
              href="https://x.com/jobayer_ahmed07"
              target="_blank"
            >
              <FaSquareXTwitter />
            </a>
          </div>
        </div>

        {/* image */}
        <div className=" hidden lg:flex items-center justify-center brightness-75">
          <div className=" w-3/4 h-3/4">
            <Image
              className=""
              alt="Cartoon developer"
              src="/assets/developer.png"
            width={500}
            height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
