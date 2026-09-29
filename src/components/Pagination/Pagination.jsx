import React from "react";
import clsx from "clsx";
import { RxDoubleArrowLeft } from "react-icons/rx";
// import { SlArrowRight } from "react-icons/sl";
import AnimatedNumber from "./AnimateNumber";

const Pagination = ({
  currentPage,
  totalPage,
  setCurrentpage,
  setDirection,
}) => {
  const prev = () => {
    if (currentPage > 1) {
      setCurrentpage(currentPage - 1);
      setDirection(-1);
    }
  };

  const next = () => {
    if (currentPage < totalPage) {
      setCurrentpage(currentPage + 1);
      setDirection(1);
    }
  };

  return (
    <div
      className={clsx(
        "flex items-center",
        "lg:justify-between lg:mt-12 lg:gap-0",
        "md:justify-center md:gap-12 md:py-4",
      )}
    >
      <FilterItemms
        currentPage={currentPage}
        totalPage={totalPage}
        prev={prev}
      />
      <div className="flex items-center gap-2">
        <span
          className={clsx(
            "flex items-center",
            "font-medium text-2xl text-secondary lg:hidden",
          )}
        >
          <AnimatedNumber value={currentPage} />
        </span>
        <span
          className={clsx(
            "flex items-center gap-2",
            "font-medium text-2xl text-secondary lg:hidden",
          )}
        >
          of <p>{totalPage}</p>
        </span>
      </div>

      <FilterItemms
        currentPage={currentPage}
        totalPage={totalPage}
        next={next}
      />
    </div>
  );
};

export default Pagination;

const FilterItemms = ({ prev, currentPage, next, totalPage }) => {
  if (prev) {
    return (
      <div className="relative group">
        <p className="absolute -top-3 left-[3.8rem] font-normal text-base text-white z-10 group-hover:text-cyan-400 transition-colors duration-300">
          Prev
        </p>
        <button
          className={clsx(
            "relative flex items-center gap-2 bg-transparent px-16 py-3 rounded-sm cursor-pointer border-1 border-white text-secondary z-0",
            "group-hover:border-cyan-400  transition-all duration-300",
            "[clip-path:polygon(0_0,27%_0,27%_7%,73%_7%,75%_0,100%_0,100%_85%,100%_100%,85%_100%,15%_100%,0_100%,0_85%)]",
          )}
          onClick={prev}
          disabled={currentPage === 1}
        >
          <RxDoubleArrowLeft className="group-hover:text-cyan-400 transition-colors duration-300" />
        </button>
      </div>
    );
  }
  if (next) {
    return (
      <div className="relative group">
        <p className="absolute -top-3 right-[3.3rem] font-normal text-base text-white z-10 group-hover:text-cyan-400 transition-colors duration-300">
          Next
        </p>
        <button
          className={clsx(
            "relative flex items-center gap-2 bg-transparante px-16 py-3 rounded-sm cursor-pointer border-1 border-white text-secondary z-0",
            "group-hover:border-cyan-400  transition-all duration-300",
            "[clip-path:polygon(0_0,27%_0,27%_7%,76%_7%,76%_0,100%_0,100%_85%,100%_100%,85%_100%,15%_100%,0_100%,0_85%)]",
          )}
          onClick={next}
          disabled={currentPage === totalPage}
        >
          <RxDoubleArrowLeft className="rotate-180 group-hover:text-cyan-400 transition-colors duration-300" />
        </button>
      </div>
    );
  }
};
