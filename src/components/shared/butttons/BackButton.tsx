import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
    const router = useRouter();
  return (
    <button
    onClick={()=> router.back()}
      type="button"
      className="cursor-pointer text-center w-36 rounded-2xl h-8 relative text-xl font-semibold border-2 border-darkGrey group"
    >
      <div className="bg-mutedGrey  rounded-xl h-[28px] w-1/3 grid place-items-center absolute left-0 top-0 group-hover:w-full group-hover:text-classicGold z-10 duration-500">
        <ArrowLeft />
      </div>
      <p className="translate-x-4 text-classicGold">Go Back</p>
    </button>
  );
};

export default BackButton;
