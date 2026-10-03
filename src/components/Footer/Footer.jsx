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
        "flex flex-col items-center justify-center bg-footer py-6 px-8 md:py-0  lg:pt-20 lg:pb-6",
      )}
    >
      <div
        className={clsx(
          "flex items-start flex-col gap-8 justify-between w-full",
          "md:gap-0 md:flex-row md:items-center md:mb-4",
        )}
      >
        <div className="">
          <LogoLink />
        </div>

        <div className="flex flex-col md:items-center gap-2">
          <ContactFooter />
        </div>

        <LinkWrapper />
      </div>
      <div
        className={clsx(
          "relative grid place-items-center py-4 md:py-2 md:w-1/3 px-8 md:px-0 w-full",
          "before:content-[''] before:absolute before:top-1 before:w-[90%] md:before:w-full before:h-[1px] before:bg-zinc-600 before:-translate-y-1/2",
        )}
      >
        <p className="flex items-center gap-4 font-light text-base text-zinc-300 tracking-wider text-center">
          Copyright <FaRegCopyright className="text-zinc-300" /> 2025 Oleg
        </p>
      </div>
    </footer>
  );
};

export default Footer;
