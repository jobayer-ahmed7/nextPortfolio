import { Check } from "lucide-react";

interface ResultsCardProps {
  results?: string[];
}

const ResultsCard = ({ results }: ResultsCardProps) => {
  if (!results || results.length === 0) return null;

  return (
    <div className="p-6 md:p-8 rounded-4xl inset-shadow-xs inset-shadow-darkGrey bg-cardBg/40 border border-darkGrey/40 space-y-4">
      <h2 className="text-2xl sm:text-3xl font-semibold text-offWhite">
        Key Results
      </h2>
      <ul className="space-y-3 pt-1">
        {results.map((result, idx) => (
          <li key={idx} className="flex items-start gap-3 text-lightGrey/95 text-sm sm:text-base leading-relaxed">
            <span className="p-1 rounded-full bg-classicGold/15 border border-classicGold/30 text-classicGold mt-0.5 shrink-0">
              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
            </span>
            <span>{result}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsCard;
