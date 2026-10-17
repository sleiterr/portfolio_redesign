import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { scroller } from "react-scroll";

import { whiteLogo, blackLogo } from "../../assets/logo/index";
import { GoCommandPalette } from "react-icons/go";

import clsx from "clsx";

import { DownloadCta } from "../Button/DownloadCta";
import BurgerMenu from "./BurgerMenu";
import NavMenu from "./NavMenu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  const { scrollY } = useScroll();
  const handleLinkClick = () => setMenuOpen(false);

  // On Home the route does not change, so scroll to the hero instead
  const handleLogoClick = (event) => {
    if (!isHome) return;
    event.preventDefault();
    scroller.scrollTo("hero", { smooth: true, duration: 400 });

    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search,
    );
  };

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
    } else {
      setScrolled(window.scrollY > 0);
    }
  }, [isHome]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!isHome) return;

    if (latest > 0 && !scrolled) {
      setScrolled(true);
    } else if (latest == 0 && scrolled) {
      setScrolled(false);
    }
  });

  // Disable body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = ""; // Clean up on unmount
    };
  }, [menuOpen]);

  useEffect(() => {}, [scrolled]);

  const defaultClasses =
    "flex items-center justify-between inset-0 border-b-1 px-[1rem] md:px-[1.5rem]";

  const navBarClasses =
    scrolled || !isHome
      ? `${defaultClasses} bg-header-bg/95 backdrop-blur-md border-b border-white/10`
      : `${defaultClasses} bg-transparent border-none`;

  return (
    <>
      <header
        className={clsx(
          isHome && !scrolled ? "absolute" : "fixed",
          "inset-x-0 top-0 z-[1000] w-full transition-all",
        )}
      >
        {/* Overlay */}
        <div
          className={clsx(
            "fixed inset-0 backdrop-blur-sm bg-white/10  transition-opacity duration-300 h-full w-full z-[1000]",
            menuOpen ? "opacity-300" : "opacity-0 pointer-events-none",
          )}
          // Close menu when overlay is clicked
          onClick={() => setMenuOpen(false)}
        ></div>
        <nav className={clsx(navBarClasses)}>
          <div className="relative py-[0.5rem] md:py-[1rem] shrink-0 cursor-pointer">
            <Link onClick={handleLogoClick} to="/">
              {!scrolled ? (
                <img src={whiteLogo} alt="logo" className="w-[8rem] h-auto" />
              ) : (
                <img src={whiteLogo} alt="logo" className="w-[8rem] h-auto" />
                // <img src={blackLogo} alt="logo" className="w-[8rem] h-auto" />
              )}
            </Link>
          </div>
          <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
            <div className="pointer-events-auto">
              <NavMenu handleLinkClick={handleLinkClick} variant="desktop" />
            </div>
          </div>
          <DownloadCta />
        </nav>
        {/* Mobile Menu Overlay and Slide-in Panel */}
        <div
          className={clsx(
            "fixed top-0 bottom-0 right-0 z-[1000]",
            "flex flex-col justify-start items-start",
            "pt-4 px-4 md:pt-8 md:px-8 gap-10",
            "w-full h-auto md:w-lg lg:w-3/6 md:h-full",
            "bg-nav-menu-bg backdrop-blur-sm border-l border-white/20",
            "transition-all duration-600 ease-out transform",
            {
              "opacity-0 translate-x-full pointer-events-none": !menuOpen,
              "opacity-100 translate-y-0 pointer-events-auto": menuOpen,
            },
          )}
          onClick={() => setMenuOpen(false)}
        >
          <div className="">
            <img
              src={whiteLogo}
              alt="logo"
              className="w-[8rem] md:w-[10rem] h-auto"
            />
          </div>

          {/* Mobile NavMenu */}
          <nav className="self-center m-auto">
            <NavMenu handleLinkClick={handleLinkClick} variant="mobile" />
          </nav>
          <div className="flex items-center gap-4 font-normal text-xl text-secondary tracking-wider mb-8 md:mb-4">
            <GoCommandPalette className="w-10 h-10" />
            junior developer
          </div>
        </div>
      </header>
      <div className="fixed z-[1000] right-[30px] top-[1.2rem] md:top-[32px] lg:hidden">
        <BurgerMenu
          scrolled={scrolled}
          isOpen={menuOpen}
          toggleMenu={() => setMenuOpen((prev) => !prev)}
        />
      </div>
    </>
  );
};

export default Header;
