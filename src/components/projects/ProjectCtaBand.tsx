import {
  PROJECT_CTA_BAND_HEADING,
  PROJECT_CTA_SUBTEXT,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import { MessageSquareText } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const ProjectCtaBand = () => {
  return (
    <div className="relative my-14 rounded-3xl border border-darkGrey/50 overflow-hidden text-center p-8 sm:p-12 shadow-xl bg-cardBg/30">
       <div className="flex items-center gap-2.5 text-classicGold mb-4">
        <MessageSquareText className="w-5 h-5" />
        <span className="text-xs font-semibold tracking-wider uppercase">
          Work With Me
        </span>
      </div>
   

      <div className="relative z-10 max-w-2xl mx-auto space-y-3">
        <h2 className="text-2xl sm:text-3xl font-bold text-offWhite">
          {PROJECT_CTA_BAND_HEADING}
        </h2>
        <p className="text-lightGrey/70 text-sm sm:text-base leading-relaxed">
          {PROJECT_CTA_SUBTEXT}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-classicGold text-mutedGrey font-semibold px-6 py-3 rounded-xl hover:bg-classicGold/90 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base cursor-pointer"
          >
            Start a Project
          </Link>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-darkGrey/70 text-lightGrey font-semibold px-6 py-3 rounded-xl hover:border-classicGold/50 hover:text-classicGold transition-all duration-300 text-sm sm:text-base cursor-pointer"
          >
            <FaWhatsapp className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCtaBand;
