import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      type="button"
      aria-label="Go back to the previous page"
      className="cursor-pointer bg-mutedGrey text-center w-36 rounded-2xl h-8 relative text-xl font-semibold group"
    >
      <div className="bg-darkGrey rounded-xl h-6 w-1/4 place-items-center absolute left-1 top-1 group-hover:w-[136px] group-hover:text-classicGold z-10 duration-400">
        <ArrowLeft />
      </div>
      <p className="translate-x-2 text-classicGold">Go Back</p>
    </button>
  );
};

export default BackButton;
