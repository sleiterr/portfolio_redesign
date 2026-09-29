import React from "react";
import { sanity, wordPress } from "../../assets/iconExports/index";

const techData = [
  { src: sanity, alt: "sanity", className: "w-[7.5rem] h-auto" },
  { src: wordPress, alt: "wordPress", className: "w-[2.5rem] h-auto" },
];

export const Cms = () => {
  return (
    <div>
      <h4 className="font-light text-secondary text-base tracking-wider mb-4">
        CMS & Data Layer
      </h4>
      <div className="flex items-center justify-start gap-4 pl-16">
        {techData.map((tech, index) => (
          <img
            key={index}
            src={tech.src}
            alt={tech.alt}
            className={tech.className}
          />
        ))}
      </div>
    </div>
  );
};
