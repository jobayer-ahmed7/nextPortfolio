import { IProjectMetric } from "@/models/Projects";
import React from "react";

interface MetricsPillProps {
  metric: IProjectMetric;
  size?: "sm" | "md";
}

const MetricsPill = ({ metric, size = "md" }: MetricsPillProps) => {
  if (!metric || !metric.value || !metric.label) return null;

  if (size === "sm") {
    return (
      <div className="flex flex-col items-center justify-center bg-cardBg/80 border border-classicGold/30 rounded-xl px-3 py-2 text-center shadow-xs">
        <span className="text-base sm:text-lg font-extrabold text-classicGold leading-none">
          {metric.value}
        </span>
        <span className="text-[11px] font-medium text-lightGrey/80 mt-1 line-clamp-1">
          {metric.label}
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-cardBg/70 border border-classicGold/30 hover:border-classicGold/60 rounded-2xl p-4 sm:p-5 text-center transition-all duration-300 inset-shadow-xs inset-shadow-darkGrey/30">
      <span className="text-2xl sm:text-3xl font-extrabold text-classicGold tracking-tight">
        {metric.value}
      </span>
      <span className="text-xs sm:text-sm font-semibold text-offWhite mt-1.5">
        {metric.label}
      </span>
      {metric.context && (
        <span className="text-[11px] text-lightGrey/60 mt-0.5 leading-snug">
          {metric.context}
        </span>
      )}
    </div>
  );
};

export default MetricsPill;
