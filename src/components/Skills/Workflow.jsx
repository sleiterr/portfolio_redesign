import React from "react";
import {
  vercel,
  gitHub,
  mongodb,
  postman,
} from "../../assets/iconExports/index";

const workFlowData = [
  { src: mongodb, alt: "MongoDB", className: "w-[6rem] h-auto" },
  { src: postman, alt: "Postman", className: "size-12" },
  { src: gitHub, alt: "GitHub", className: "size-12" },
  { src: vercel, alt: "vercel", className: "w-[7rem] h-auto" },
];

export const WorkFlow = () => {
  return (
    <div className="">
      <h4 className="font-light text-secondary text-base tracking-wider mb-6">
        Workflow/Backend
      </h4>
      <div className="flex items-center justify-center gap-4">
        {workFlowData.map((flow, index) => (
          <img
            key={index}
            src={flow.src}
            alt={flow.alt}
            className={flow.className}
          />
        ))}
      </div>
    </div>
  );
};
