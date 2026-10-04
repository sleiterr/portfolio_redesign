import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { HiMiniChevronRight } from "react-icons/hi2";
import clsx from "clsx";
import s from "../../styles/Experience.module.css";

const AccordionStudy = ({ educationPosts = [] }) => {
  const [clicked, setClicked] = useState(null);

  const handleToggle = (index) => {
    setClicked(clicked === index ? null : index);
  };
  return (
    <div className="">
      {educationPosts.map(({ id, title, subtitle, list, year }, index) => {
        const accordionIndex = (index + 1).toString().padStart(2, "0");
        const isActive = clicked === index;

        return (
          <div
            className={clsx(
              s.accordion,
              "border border-white/10 rounded-xl overflow-hidden",
              "bg-black/30 hover:bg-black/40 relative cursor-pointer text-left transition-all duration-200 ease-in-out",
              "mb-8",
              "max-w-full md:max-w-3xl md:w-full",

              isActive ? s.active : "",
            )}
            onClick={() => handleToggle(index)}
            key={id}
          >
            {/* text-accordion-nr-default */}
            <div className="flex items-center gap-2 md:gap-4 px-5 py-4">
              <p
                className={clsx(
                  "font-code font-semibold text-3xl md:text-2xl",
                  isActive
                    ? "text-cyan-400 transition-colors duration-300 ease-in-out"
                    : "text-gray-600 duration-600 ease-in-out",
                )}
              >
                {accordionIndex}
              </p>
              <h4
                className={clsx(
                  "font-code font-medium text-lg",
                  isActive
                    ? "text-cyan-400 transition-colors duration-300 ease-in-out"
                    : "text-white duration-600 ease-in-out",
                )}
              >
                {title}
              </h4>
              <IoIosArrowForward
                className={clsx(
                  "ml-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out",
                  isActive
                    ? "rotate-90 text-cyan-400 transition-colors duration-300 ease-in-out"
                    : "text-white duration-600 ease-in-out",
                )}
              />
            </div>

            <div
              className={clsx(
                "max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-out bg-transparent",
                isActive && "max-h-[900px] md:max-h-[500px] opacity-100",
              )}
            >
              <div className="px-6 pb-5 pt-4 bg-black/20 border-t border-[#22c3df]/30">
                <p className="font-light text-base text-accordion tracking-wide leading-[1.6em]">
                  <span className="font-normal text-lg text-green-400 pr-2">
                    {year}
                  </span>
                  {subtitle}
                  {id === 1 && (
                    <a
                      href="/Doc/Media_College_Denmark.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-normal text-cyan-400 underline hover:text-blue-500 transition-colors duration-300 ml-2"
                    >
                      View Diploma
                    </a>
                  )}
                  {id === 2 && (
                    <a
                      href="/Doc/certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-normal text-cyan-400 underline hover:text-blue-500 transition-colors duration-300 ml-2"
                    >
                      View Сertificate
                    </a>
                  )}
                </p>
                <ul className="flex flex-col items-start mt-6">
                  {list.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-start gap-2 w-full"
                    >
                      <HiMiniChevronRight className="text-cyan-400" />
                      <p className="font-light text-sm text-secondary tracking-wide leading-relaxed w-full">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccordionStudy;
