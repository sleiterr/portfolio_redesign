import { DialogTitle } from "@headlessui/react";
import { X } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const ProjectModalContent = ({ project, onClose }) => {
  return (
    <div className="flex flex-col gap-3">
      {/* Header */}
      <div className="flex shrink-0 items-start gap-3">
        <div className="min-w-0">
          <DialogTitle className="font-code font-bold text-base sm:text-xl text-secondary leading-tight">
            {project.title}
          </DialogTitle>
          <p className="text-octonary text-xs sm:text-sm mt-0.5 line-clamp-2">
            {project.caption}
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Repository Link use the && for conditional rendering */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label=" GitHub"
              className="flex items-center gap-1.5 text-quaternary hover:text-secondary text-sm transition-colors"
            >
              <FiGithub className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          )}
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/40 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Screenshot */}
      {project.preview.map((shot, index) => (
        <img
          key={shot}
          src={shot}
          alt={`${project.title} screenshot ${index + 1}`}
          className="w-full rounded-xl border border-white/10"
        />
      ))}
    </div>
  );
};

export default ProjectModalContent;
