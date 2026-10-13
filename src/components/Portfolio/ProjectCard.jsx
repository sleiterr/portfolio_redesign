import { useState } from "react";
import Modal from "../ui/Modal";
import ProjectThumbnail from "./ProjectThumbnail";

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        role="button"
        tabindex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
        className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 hover:border-[#22c3df]/50 transition-all duration-300 bg-white/[0.03] flex flex-col"
      >
        <ProjectThumbnail project={project} />
      </div>
      <Modal show={open} classDialogPanel="sm:max-w-4xl">
        <button onClick={() => setOpen(false)}>Close</button>
      </Modal>
    </>
  );
};

export default ProjectCard;
