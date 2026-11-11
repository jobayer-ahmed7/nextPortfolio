import { Check, TrendingUp } from "lucide-react";
import { IProjectMetric } from "@/models/Projects";
import MetricsPill from "./MetricsPill";

interface ResultsCardProps {
  results?: string[];
  metrics?: IProjectMetric[];
}

const ResultsCard = ({ results, metrics }: ResultsCardProps) => {
  const hasResults = results && results.length > 0;
  const hasMetrics = metrics && metrics.length > 0;

  if (!hasResults && !hasMetrics) return null;

  return (
    <div className="p-6 md:p-8 rounded-4xl inset-shadow-xs inset-shadow-darkGrey bg-cardBg/40 border border-darkGrey/40 space-y-6">
      <div className="flex items-center gap-2.5 text-classicGold">
        <TrendingUp className="w-5 h-5" />
        <h2 className="text-2xl sm:text-3xl font-semibold text-offWhite">
          Key Results & Business Impact
        </h2>
      </div>

      {/* Metrics Grid */}
      {hasMetrics && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {metrics.map((metric, idx) => (
            <MetricsPill key={idx} metric={metric} size="md" />
          ))}
        </div>
      )}

      {/* Narrative Outcome Bullets */}
      {hasResults && (
        <div className="space-y-3 pt-2">
          {hasMetrics && (
            <h3 className="text-sm font-semibold uppercase tracking-wider text-lightGrey/70">
              Deliverables & Milestones
            </h3>
          )}
          <ul className="space-y-3">
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
      )}
    </div>
  );
};

export default ResultsCard;
