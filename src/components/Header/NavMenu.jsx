import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

// Navigation links for the header menu
const NAV_LINKS = [
  { to: "/#hero", label: "Home" },
  { to: "/#about", label: "About" },
  { to: "/#skills", label: "Skills" },
  { to: "/#portfolio", label: "Portfolio" },
  { to: "/#experience", label: "Experience" },
  { to: "/#blog", label: "Blog" },
];

const NavMenu = ({
  handleLinkClick,
  variant = "desktop",
  scrolled = false,
}) => {
  const location = useLocation();
  // Determine if the current variant is desktop or mobile
  const isDesktop = variant === "desktop";

  // Define classes for the unordered list based on the variant (desktop or mobile)
  const ulClasses = clsx(
    "gap-6",
    isDesktop
      ? "hidden lg:flex flex-row items-center justify-center gap-x-8"
      : "flex flex-col items-start",
  );

  // Define base classes for the links
  const linkBase =
    "font-light text-secondary relative before:content-[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-border-default before:bottom-[-.25rem] before:left-0 before:transition-all cursor-pointer before:duration-300 hover:before:w-full";

  // Define text size based on the variant (desktop or mobile)
  const textSize = isDesktop ? "text-base xl:text-lg" : "text-3xl";
  const textColor = !isDesktop
    ? "text-nav"
    : scrolled
      ? "text-white"
      : "text-white";

  return (
    <ul className={ulClasses}>
      {NAV_LINKS.filter((link) => link.hidenOn !== location.pathname).map(
        (link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={clsx(linkBase, textSize, textColor)}
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          </li>
        ),
      )}
    </ul>
  );
};

export default NavMenu;
