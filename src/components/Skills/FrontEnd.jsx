import React from "react";
import { react, tailwind, js, html, css } from "../../assets/iconExports/index";

const techStack = [
  { src: react, alt: "react", size: "size-14" },
  { src: tailwind, alt: "tailwind", size: "size-14" },
  { src: js, alt: "javaScript", size: "size-12" },
  { src: html, alt: "html", size: "size-14" },
  { src: css, alt: "css", size: "size-14" },
];

export const FrontEnd = () => {
  return (
    <div>
      <h4 className="font-light text-secondary text-base tracking-wider mb-4">
        Frontend Stack
      </h4>
      <div className="flex items-center justify-start gap-4 pl-8">
        {techStack.map((tech, index) => (
          <img
            key={index}
            src={tech.src}
            alt={tech.alt}
            className={tech.size}
          />
        ))}
      </div>
    </div>
  );
};
