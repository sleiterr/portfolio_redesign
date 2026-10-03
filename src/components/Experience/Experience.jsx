// Experience.jsx
import React, { useEffect, useState } from "react";
import { FaAward } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import AccordionStudy from "./AccordionStudy";
import AccordionPath from "./AccordionPath";

import { fetchEducationData } from "../../utils/api";
import { fetchExperienceData } from "../../utils/api";

import clsx from "clsx";
import SplitText from "../animation/SplitText";

const handleAnimationComplete = () => {};

const Experience = () => {
  const [educationPosts, setEducationPosts] = useState([]);
  const [experiencePosts, setExperiencePosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const stayData = async () => {
      try {
        setLoading(true);

        // await new Promise((resolve) => setTimeout(resolve, 3000));

        const educationData = await fetchEducationData();
        const experienceData = await fetchExperienceData();
        setEducationPosts(educationData);
        setExperiencePosts(experienceData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    stayData();
  }, []);

  return (
    <section className="" id="experience">
      {loading ? (
        <div className="py-12">
          <p className="font-normal text-2xl text-white text-center">
            Loading Data...
          </p>
        </div>
      ) : error ? (
        <div className="py-12">
          <p className="font-normal text-2xl text-red-500 text-center">
            {error}
          </p>
        </div>
      ) : (
        <div className="px-4 py-[3.7rem] md:py-[8rem] mx-auto md:max-w-7xl">
          <div
            className={clsx(
              "grid cols-1 gap-4",
              "lg:grid-cols-2 lg:gap-12 lg:place-items-start",
              "md:place-items-center md:gap-8",
            )}
          >
            <div className="">
              <div
                className={clsx(
                  "flex items-center justify-center gap-4",
                  "mb-4 md:mb-6",
                )}
              >
                <GiGraduateCap
                  className={clsx(
                    "lg:w-14 lg:h-14 md:w-10 md:h-10 text-white",
                    "w-12 h-12",
                  )}
                />

                <SplitText
                  tag="h2"
                  text="Education"
                  className={clsx(
                    "flex items-center justify-start gap-4",
                    "font-code font-bold text-primary text-4xl md:text-6xl w-full text-left leading-[1.2]",
                  )}
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
              </div>

              <AccordionStudy educationPosts={educationPosts} />
            </div>
            <div className="">
              <div
                className={clsx(
                  "flex items-center justify-center gap-4",
                  "mb-4 md:mb-6",
                )}
              >
                <FaAward
                  className={clsx(
                    "lg:w-12 lg:h-12 md:w-10 md:h-10 text-white",
                    "w-12 h-12",
                  )}
                />
                <SplitText
                  tag="h2"
                  text="Experience"
                  className={clsx(
                    "flex items-center justify-start gap-4",
                    "font-code font-bold text-primary text-4xl md:text-6xl w-full text-left leading-[1.2]",
                  )}
                  delay={140}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
              </div>

              <AccordionPath experiencePosts={experiencePosts} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default Experience;

// border-2 border-white rounded-full
