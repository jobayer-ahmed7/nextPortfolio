import { IProject } from "@/models/Projects";
import TechnologyBadge from "@/components/shared/TechnologyBadge";

interface ProjectTechCardProps {
  technologies?: IProject["technologies"];
}

const ProjectTechCard = ({ technologies }: ProjectTechCardProps) => {
  if (!technologies) return null;

  const hasFrontend = technologies.frontend && technologies.frontend.length > 0;
  const hasBackend = technologies.backend && technologies.backend.length > 0;
  const hasTools = technologies.tools && technologies.tools.length > 0;

  if (!hasFrontend && !hasBackend && !hasTools) return null;

  return (
    <div className="rounded-3xl p-6 sm:p-7 border border-darkGrey/40 bg-cardBg/40 inset-shadow-xs inset-shadow-darkGrey space-y-5">
      <h3 className="text-xl font-bold text-offWhite">
        Built with
      </h3>

      <div className="space-y-4">
        {hasFrontend && (
          <div className="space-y-2">
            <span className="text-xs font-semibold text-lightGrey/70 uppercase tracking-wider block">
              Frontend
            </span>
            <div className="flex flex-wrap gap-2">
              {technologies.frontend.map((tech, idx) => (
                <TechnologyBadge key={idx} technology={tech} variant="secondary" />
              ))}
            </div>
          </div>
        )}

        {hasBackend && (
          <div className="space-y-2">
            <span className="text-xs font-semibold text-lightGrey/70 uppercase tracking-wider block">
              Backend
            </span>
            <div className="flex flex-wrap gap-2">
              {technologies.backend.map((tech, idx) => (
                <TechnologyBadge key={idx} technology={tech} variant="secondary" />
              ))}
            </div>
          </div>
        )}

        {hasTools && (
          <div className="space-y-2">
            <span className="text-xs font-semibold text-lightGrey/70 uppercase tracking-wider block">
              Tools & DevOps
            </span>
            <div className="flex flex-wrap gap-2">
              {technologies.tools.map((tech, idx) => (
                <TechnologyBadge key={idx} technology={tech} variant="secondary" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectTechCard;
