import React from "react";

const TechBadges = ({ techStack = [] }) => {
  return (
    <div>
      <ul className="flex flex-wrap gap-2 mb-8">
        {techStack.map((tech, index) => (
          <li
            key={index}
            className="font-code text-xs text-senary bg-[#1ed1a8]/10 border border-[#1ed1a8]/20 px-3 py-1.5 rounded-md"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechBadges;
