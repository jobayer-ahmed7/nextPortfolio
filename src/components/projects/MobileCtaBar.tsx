import { WHATSAPP_NUMBER } from "@/lib/constants";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const MobileCtaBar = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-richBlack/95 backdrop-blur-md border-t border-darkGrey/60 px-4 py-3 shadow-2xl pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="max-w-md mx-auto flex items-center gap-3">
        <Link
          href="/#contact"
          className="flex-1 inline-flex items-center justify-center bg-classicGold text-mutedGrey font-semibold px-4 py-3 rounded-xl hover:bg-classicGold/90 transition-all duration-300 shadow-md text-sm cursor-pointer"
        >
          Start a Project
        </Link>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="inline-flex items-center justify-center p-3 rounded-xl border border-darkGrey/80 bg-mutedGrey/50 text-lightGrey hover:text-classicGold hover:border-classicGold/50 transition-all duration-300 cursor-pointer"
        >
          <FaWhatsapp className="w-5 h-5 text-emerald-400" />
        </a>
      </div>
    </div>
  );
};

export default MobileCtaBar;
