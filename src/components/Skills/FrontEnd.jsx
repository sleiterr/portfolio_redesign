import React from "react";
import {
  react,
  tailwind,
  js,
  html,
  css,
  ts,
  nextjs,
} from "../../assets/iconExports/index";

const techStack = [
  { src: react, alt: "react", size: "size-14", href: "https://react.dev" },
  {
    src: js,
    alt: "javaScript",
    size: "size-12",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    src: nextjs,
    alt: "nextjs",
    size: "size-14",
    href: "https://nextjs.org",
  },
  {
    src: ts,
    alt: "typescript",
    size: "size-12",
    href: "https://www.typescriptlang.org",
  },
  {
    src: tailwind,
    alt: "tailwind",
    size: "size-14",
    href: "https://tailwindcss.com",
  },
  {
    src: html,
    alt: "html",
    size: "size-14",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    src: css,
    alt: "css",
    size: "size-14",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
];

export const FrontEnd = () => {
  return (
    <div>
      <h4 className="font-light text-secondary text-base tracking-wider mb-4">
        Frontend Stack
      </h4>
      <div className="flex w-full items-center justify-center gap-4">
        {techStack.map((tech, index) => (
          <a
            href={tech.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center justify-center"
            key={index}
          >
            <img
              src={tech.src}
              alt={tech.alt}
              className={`${tech.size} object-contain`}
            />
          </a>
        ))}
      </div>
    </div>
  );
};
