import React from "react";
import {
  vercel,
  gitHub,
  mongodb,
  postman,
} from "../../assets/iconExports/index";

const workFlowData = [
  {
    src: mongodb,
    alt: "MongoDB",
    className: "w-[6rem] h-auto",
    href: "https://www.mongodb.com",
  },
  {
    src: postman,
    alt: "Postman",
    className: "size-12",
    href: "https://www.postman.com",
  },
  {
    src: gitHub,
    alt: "GitHub",
    className: "size-12",
    href: "https://github.com",
  },
  {
    src: vercel,
    alt: "vercel",
    className: "w-[7rem] h-auto",
    href: "https://vercel.com",
  },
];

export const WorkFlow = () => {
  return (
    <div className="">
      <h4 className="font-light text-secondary text-base tracking-wider mb-6">
        Workflow/Backend
      </h4>
      <div className="flex items-center justify-center gap-4">
        {workFlowData.map((flow, index) => (
          <a
            href={flow.href}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <img
              key={index}
              src={flow.src}
              alt={flow.alt}
              className={flow.className}
            />
          </a>
        ))}
      </div>
    </div>
  );
};
