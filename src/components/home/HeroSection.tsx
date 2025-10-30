import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Download, ScanEye } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import CvButton from "../shared/butttons/cvButton/CvButton";

const HeroSection = () => {
  return (
    <div className="w-full relative h-[90vh] ">
      <Image
        src="/assets/hero-dark.jpg"
        alt="Hero background"
        fill
        priority
        className="object-cover -z-10 brightness-[0.3]"
      />
      {/* Content container */}
      <div className=" h-full container mx-auto relative z-10  grid grid-cols-1 lg:grid-cols-2   text-offWhite items-center  ">
        {/* Text Section */}
        <div className="flex flex-col items-center justify-center text-center px-2">
          <div className=" mb-4">
            <h1 className="text-classicGold text-3xl font-semibold md:text-5xl">
              -I AM JOBAYER AHMED.
            </h1>
              {/* Animated Role */}
            <div className="text-xl md:text-2xl text-lightGrey font-light h-10 flex justify-center mt-4">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "MERN Stack Specialist",
                  2000,
                  "Next.js Expert",
                  2000,
                  "React Developer",
                  2000,
                ]}
                speed={10}
                repeat={Infinity}
              />
            </div>
          </div>
          <p className=" w-2/3 mb-5 text-lightGrey">
            I am a Bangladesh based web developer focused on crafting clean &
            user‑friendly experiences, I am passionate about building excellent
            software that improves the lives of those around me.
          </p>
          <div className="flex gap-10 my-10 flex-col lg:flex-row  ">
            <a href="https://drive.google.com/file/d/1-BI9pLofpFi5FxPgISnCcmtwnHvxPLCG/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <CvButton className=" " label="Preview CV" icon={ScanEye} />
            </a>
            <a
              href="/resume.pdf"
              download="Full Stack Developer Resume of Jobayer Ahmed"
            >
              <CvButton className="" label="Download CV" icon={Download} />
            </a>
          </div>
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
