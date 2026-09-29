import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { BeatLoader } from "react-spinners";
// import { Link as ScrollLink } from "react-scroll";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

import BlurText from "../../components/animation/BlurText";
import SplitText from "../../components/animation/SplitText";
import FadeContent from "../../components/animation/FadeContent";
import ProjectNav from "./ProjectNav";
import clsx from "clsx";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchProject = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 600));
        // Simulate fetching data from an API or local JSON file
        const res = await fetch("/data/projectsData.json"); // Adjust the path as necessary
        const data = await res.json();
        const foundProject = data.projects.find(
          (item) => item.id === parseInt(id),
        );

        setProject(foundProject);
        if (!foundProject) {
          throw new Error("Project not found");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-stone-900 z-50">
        <BeatLoader color="#1ed1a8" size={30} />
      </div>
    );

  if (error || !project)
    return (
      <p className="font-normal text-2xl text-white text-center">
        Product not found
      </p>
    );

  return (
    <section className="">
      <ProjectNav />
      <div className="px-4 md:px-0 lg:px-6 py-[8rem] mx-auto md:max-w-7xl">
        <div
          className={clsx(
            "grid grid-cols-1 items-center justify-center gap-12",
            "md:grid-cols-1 md:gap-12",
            "lg:grid-cols-2 lg:gap-8",
          )}
        >
          <div className="flex items-center justify-center mt-2 md:mt-0">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <img
                src={project.preview}
                alt="project image"
                className="w-[560px] h-auto border-t-1  border-r-1 border-sky-500 pt-2 pr-2"
              />
            </FadeContent>
          </div>
          <div
            className={clsx(
              "flex flex-col items-start justify-center",
              "justify-self-center w-full",
              "px-4 md:px-4 max-w-3xl lg:max-w-2xl",
            )}
          >
            {/* max-w-[clamp(600px,50vw,780px)] */}
            <div className="flex flex-col gap-4 mb-[40px]">
              <SplitText
                tag="h2"
                text={project.title}
                className="font-code font-normal text-primary text-4xl md:text-5xl tracking-wide leading-[1.2]"
                delay={100}
                duration={0.4}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
                onLetterAnimationComplete={handleAnimationComplete}
              />

              <BlurText
                as="p"
                duration={0.6}
                delay={1200}
                direction="bottom"
                className={clsx(
                  "font-light text-lg md:text-lg text-secondary",
                  "tracking-wide leading-[1.6]",
                )}
              >
                {project.caption}
              </BlurText>
            </div>

            <ul className="relative w-full after:content[''] after:absolute after:top-0 after:left-0 after:w-full after:h-[1px] after:bg-white before:content[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-white flex flex-col gap-2 mb-10">
              <li className=" flex justify-between w-full py-4">
                <p className="font-light text-lg md:text-xl text-secondary tracking-wide">
                  Year:
                </p>
                <p className="font-light text-lg md:text-xl text-secondary tracking-wide">
                  {project.date}
                </p>
              </li>
              <li className="relative h-full after:content[''] after:absolute after:top-0 after:left-0 after:w-full after:h-[1px] after:bg-white flex justify-between py-4">
                <p className="font-light text-lg md:text-xl text-secondary tracking-wide">
                  Role:
                </p>
                <p className="font-light text-lg md:text-xl text-secondary tracking-wide  text-right w-[460px] leading-8">
                  {project.role}
                </p>
              </li>
            </ul>
            <div className="flex justify-between w-full">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 font-normal text-lg md:text-xl text-secondary tracking-wider"
              >
                <p className="m-0 overflow-hidden transition-colors duration-300 ease-out group-hover:text-[#1ed1a8]">
                  Live Page
                </p>
                <IoIosArrowRoundForward
                  className={clsx(
                    "w-[2rem] h-[2rem]",
                    " text-white transition-all duration-300 ease-in-out delay-200 group-hover:translate-x-1 group-hover:text-[#1ed1a8]",
                  )}
                />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 md:gap-4 font-light text-lg md:text-xl text-secondary tracking-wider"
              >
                <p className="m-0 overflow-hidden transition-colors duration-300 ease-out group-hover:text-[#1ed1a8]">
                  View GitHub
                </p>
                <FaGithub
                  className={clsx(
                    "w-[2.1rem] h-full",
                    "text-white transition-all duration-300 ease-in-out delay-200 group-hover:translate-x-1 group-hover:text-[#1ed1a8]",
                  )}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
