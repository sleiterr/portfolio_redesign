// import { FaCircleDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const PaginationDot = ({ page, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={() => onClick(page)}
      aria-label={`Go to page ${page}`}
      aria-current={isActive ? "page" : undefined}
      className="cursor-pointer p-1 transition-transform duration-200 hover:scale-110"
    >
      {isActive ? (
        <GoDotFill className="text-2xl md:text-2xl scale-125 text-dot-active transition-all duration-200" />
      ) : (
        <GoDotFill className="text-xl md:text-xl text-dot-inactive opacity-70 transition-all duration-200 hover:opacity-100" />
      )}
    </button>
  );
};

export default PaginationDot;
