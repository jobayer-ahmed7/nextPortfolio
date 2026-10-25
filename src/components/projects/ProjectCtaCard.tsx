import {
  PROJECT_CTA_HEADING,
  PROJECT_CTA_SUBTEXT,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import Link from "next/link";
import { MessageSquareText } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ProjectCtaCard = () => {
  return (
    <div className="lg:sticky lg:top-24 rounded-3xl p-6 sm:p-7 border border-darkGrey/60 bg-cardBg/70 backdrop-blur-xs inset-shadow-xs inset-shadow-darkGrey/50 space-y-4 shadow-xl">
      <div className="flex items-center gap-2.5 text-classicGold">
        <MessageSquareText className="w-5 h-5" />
        <span className="text-xs font-semibold tracking-wider uppercase">
          Work With Me
        </span>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl sm:text-2xl font-bold text-offWhite">
          {PROJECT_CTA_HEADING} 
        </h3>
        <p className="text-sm text-lightGrey/80 leading-relaxed">
          {PROJECT_CTA_SUBTEXT}
        </p>
      </div>

      <div className="pt-2 flex flex-col gap-3">
        <Link
          href="/#contact"
          className="w-full inline-flex items-center justify-center bg-classicGold text-mutedGrey font-semibold px-5 py-3 rounded-xl hover:bg-classicGold/90 transition-all duration-300 shadow-md hover:shadow-lg text-center text-sm sm:text-base cursor-pointer"
        >
          Start a Project
        </Link>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 border border-darkGrey/80 text-lightGrey font-semibold px-5 py-3 rounded-xl hover:border-classicGold/50 hover:text-classicGold transition-all duration-300 text-center text-sm sm:text-base cursor-pointer"
        >
          <FaWhatsapp className="w-4 h-4 text-emerald-400" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCtaCard;
