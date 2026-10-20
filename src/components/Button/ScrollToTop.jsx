import { useState, useEffect } from "react";
import clsx from "clsx";
import { IoIosArrowUp } from "react-icons/io";

const SHOW_AFTER = 400; // Show the scroll-to-top button after scrolling 400px

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);

    // Check the initial scroll position when the component mounts
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to top"
      className={clsx(
        "group fixed bottom-24 right-6 z-[900]",
        "flex items-center justify-center w-11 h-11 rounded-full overflow-hidden",
        "bg-white/10 backdrop-blur-sm border border-white/20 text-white",
        "hover:border-brand hover:text-brand cursor-pointer",
        "active:scale-95",
        "transition-all duration-300",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none",
      )}
    >
      <div className="relative flex flex-col items-center transition-transform duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:-translate-y-[150%]">
        <IoIosArrowUp className="w-5 h-5" strokeWidth={3} />
        <IoIosArrowUp
          className="absolute top-[150%] w-5 h-5"
          strokeWidth={3}
          aria-hidden="true"
        />
      </div>
    </button>
  );
};

export default ScrollToTop;
