import React from "react";
import clsx from "clsx";
// import { GoArrowRight } from "react-icons/go";
import { BsArrowLeft } from "react-icons/bs";

export const ProjectsLinks = () => {
  return (
    <>
      <div>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex gap-2 font-normal text-base md:text-xl items-center cursor-pointer"
        >
          <p className="relative font-medium text-2xl md:text-lg text-tertiary m-0 overflow-hidden transition-colors duration-300 ease-out group-hover:text-[#1ed1a8] ">
            View Projects
          </p>
          <BsArrowLeft className="hidden md:block w-4 h-4 text-tertiary transition-all duration-250 ease-in-out delay-150 group-hover:translate-x-1 group-hover:text-[#1ed1a8] rotate-180" />
        </a>
      </div>
    </>
  );
};

// className={clsx(
//   "absolute bottom-8 right-5 sm:bottom-12",
//   "lg:end-25 lg:bottom-15",
//   "md:end-12 md:bottom-12",
// )}
