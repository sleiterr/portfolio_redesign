import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

export const ProjectsLinks = () => {
  return (
    <>
      <Link
        to="/#portfolio"
        className="group relative flex gap-2 font-normal text-base md:text-xl items-center cursor-pointer"
      >
        <p className="relative font-medium text-2xl md:text-lg text-tertiary m-0 overflow-hidden transition-colors duration-300 ease-out group-hover:text-[#1ed1a8] ">
          View Projects
        </p>
        <BsArrowLeft className="hidden md:block w-4 h-4 text-tertiary transition-all duration-250 ease-in-out delay-150 group-hover:translate-x-1 group-hover:text-[#1ed1a8] rotate-180" />
      </Link>
    </>
  );
};
