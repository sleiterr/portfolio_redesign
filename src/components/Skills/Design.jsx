import React from "react";
import { figma, ph, ai } from "../../assets/iconExports/index";

const DesignData = [
  { src: figma, alt: "figma", className: "size-12" },
  { src: ph, alt: "ph", className: "size-12" },
  { src: ai, alt: "ai", className: "size-12" },
];

export const Design = () => {
  return (
    <div className="absolute">
      <h4 className="font-light text-secondary text-base tracking-wider mb-2">
        UI/UX Tools
      </h4>
      <div className="flex items-center justify-start gap-4 pl-18">
        {DesignData.map((d, index) => (
          <img key={index} src={d.src} alt={d.alt} className={d.className} />
        ))}
      </div>
    </div>
  );
};
