import React from "react";
import { Link } from "react-scroll";
import { LinkWrapper } from "./LinkWrapper";
import { ContactFooter } from "./ContactFooter";
import clsx from "clsx";

import { FaRegCopyright } from "react-icons/fa";
import LogoLink from "./LogoLink";

const Footer = () => {
  return (
    //  border-t border-white
    <footer
      className={clsx(
        "flex flex-col items-center justify-center bg-footer py-6 md:py-0 lg:py-8 px-8 lg:px-16",
      )}
    >
      <div
        className={clsx(
          "flex items-start flex-col gap-8 justify-between w-full",
          "md:gap-0 md:flex-row md:items-center md:mb-8",
        )}
      >
        <div className="">
          <LogoLink />
        </div>

        <div className="flex flex-col md:items-center">
          <ContactFooter />
        </div>

        <LinkWrapper />
      </div>
      <div
        className={clsx(
          "flex items-center justify-between pt-6",
          "relative w-full",
          "before:content-[''] before:absolute before:inset-x-0 before:top-1 before:h-[1px] before:bg-white/25 before:-translate-y-1/2",
        )}
      >
        <p className="flex items-center gap-4 font-light text-xs text-white/25 tracking-wider text-center">
          Copyright <FaRegCopyright className="text-white/25" /> 2025 Oleg
        </p>
        <p className="font-['Source_Code_Pro',monospace] text-white/20 text-xs">
          Built with React + Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
