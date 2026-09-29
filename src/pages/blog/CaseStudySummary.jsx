import React from "react";
import clsx from "clsx";
import { IoIosArrowForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { useBlog } from "./useBlog";

const CaseStudySummary = () => {
  const { blogData, loading, error } = useBlog();

  const secondImage = blogData?.[0]?.images?.[1];

  if (loading) return null;

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-[1fr_620px] items-center mt-28">
      <div className="flex flex-col items-start h-full">
        <div className="mb-10">
          <h2 className="font-code font-medium text-primary text-3xl pb-6">
            What I Learned
          </h2>
          <ul className="flex flex-col items-start max-w-[600px] gap-2">
            {blogData.map((item) =>
              item.lessonsLearned?.map((lesson, index) => (
                <li key={index} className="flex items-start">
                  <IoIosArrowForward
                    className="shrink-0 mr-2 text-secondary"
                    size={24}
                  />
                  <p className="font-normal text-secondary text-lg">{lesson}</p>
                </li>
              )),
            )}
          </ul>
        </div>
        <div className="">
          <h2 className="font-medium text-primary text-2xl pb-4">Conclusion</h2>
          {blogData.map((item) => (
            <p key={item.id} className="font-normal text-secondary text-xl">
              {item.conclusion}
            </p>
          ))}
        </div>
        <div className="mt-auto pt-6">
          <p className="font-light text-lg md:text-xl text-lime-400 tracking-wider mb-6">
            Live demo is not available yet.
          </p>
          <a
            href={blogData?.[0]?.githubLink?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 md:gap-4 font-light text-lg md:text-2xl text-secondary tracking-wider"
          >
            <p className="m-0 overflow-hidden transition-colors duration-300 ease-out group-hover:text-[#1ed1a8]">
              View Source Code
            </p>
            <FaGithub
              className={clsx(
                "w-[42px] h-full",
                "text-white transition-all duration-300 ease-in-out delay-200 group-hover:translate-x-1 group-hover:text-[#1ed1a8]",
              )}
            />
          </a>
        </div>
      </div>
      <div className="w-[330px] h-[720px] overflow-hidden ml-auto">
        {secondImage && (
          <img
            src={secondImage.src}
            alt={secondImage.alt}
            className="w-full h-auto object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default CaseStudySummary;
