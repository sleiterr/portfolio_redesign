import { SquareArrowOutUpRight } from "lucide-react";
import TechStack from "./TechStack";

const ProjectThumbnail = ({ project }) => {
  return (
    <div className="flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image[0]}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
        />
        {/* Gradient overlay always present at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08121d] via-[#08121d]/20 to-transparent" />

        {/* Featured badge */}
        {project.featured && (
          <span className="absolute top-3 right-3 bg-[#22c3df]/15 border border-[#22c3df]/40 text-tertiary text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
            Featured
          </span>
        )}

        {/* Hover overlay — "click to preview" */}
        <div className="absolute inset-0 z-20 bg-[#08121d]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div
            aria-hidden="true"
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-secondary text-sm font-medium px-4 py-2.5 rounded-full"
          >
            <SquareArrowOutUpRight className="w-4 h-4" />
            Preview project
          </div>
        </div>
      </div>
      <TechStack title={project.title} items={project.techStack} limit={4} />
    </div>
  );
};

export default ProjectThumbnail;
