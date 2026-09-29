import React, { useState } from "react";
import { FadeLoader } from "react-spinners";
import { MdCollections } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import clsx from "clsx";

const ProjectNav = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); //retirn function to navigate programmatically

  const handlePortfolioClick = () => {
    setLoading(true); // show loading spinner
    // window.location.pathname - check current path
    if (window.location.pathname !== "/") {
      // navigate to home page first
      // replace: false - keep history
      navigate("/", { replace: false });
      setTimeout(() => {
        // setTimeout to ensure scrolling happens after navigation
        //scroll to portfolio section after navigation
        scroller.scrollTo("portfolio", {
          smooth: true,
          duration: 500,
          // offset: -100,
        });
        setLoading(false);
      }, 800);
    } else {
      setTimeout(() => {
        scroller.scrollTo("portfolio", {
          smooth: true,
          duration: 500,
        });
        setLoading(false);
      }, 600);
    }
  };

  return (
    <>
      <nav className="px-8 py-6">
        <ul className="flex items-center justify-end gap-4 md:gap-8">
          <li className="relative">
            <Link
              className={clsx(
                "flex items-center font-light tracking-wider text-secondary text-2xl md:text-xl gap-2",
                "before:content-[''] before:absolute before:w-0 before:h-0.5 before:rounded-xs before:bg-white before:bottom-[-.25rem] before:left-0 before:transition-all before:duration-300 hover:before:w-full",
              )}
              to="/"
            >
              Home <IoIosArrowRoundForward />
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={handlePortfolioClick}
              className={clsx(
                "flex items-center gap-2 font-light tracking-wider text-secondary text-2xl md:text-xl cursor-pointer",
                "after:absolute after:content-[''] hover:after:w-full after:h-0.5 after:bg-white after:rounded-xs after:-bottom-[.25rem] after:left-0 after:opacity-0 after:transition-all after:duration-300 hover:after:opacity-100",
              )}
            >
              Portfolio <MdCollections />
            </button>
            {loading && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/30">
                <FadeLoader color="#1ed1a8" size={30} />
              </div>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ProjectNav;
