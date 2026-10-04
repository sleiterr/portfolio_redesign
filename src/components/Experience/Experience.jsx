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
import GradientLabel from "../animation/GradientLabel";
import Section from "../Section/Section";

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
    <Section id="experience" className="py-16 md:py-28 md:max-w-none!">
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
          <GradientLabel className="lg:text-base! tracking-wide! mb-3 uppercase">
            Background
          </GradientLabel>

          <SplitText
            tag="h2"
            text="Education &amp; Experience"
            className="font-code font-bold md:text-4xl text-primary tracking-wide mb-10 md:mb-16 w-full"
            delay={40}
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
          <div
            className={clsx(
              "grid cols-1 gap-2",
              "lg:grid-cols-2 lg:gap-12 lg:place-items-start",
              "md:place-items-center md:gap-8",
            )}
          >
            <div className="">
              <div
                className={clsx(
                  "flex items-center justify-center gap-2",
                  "mb-6",
                )}
              >
                <GiGraduateCap
                  className={clsx(
                    "lg:w-8 lg:h-8 md:w-10 md:h-10 text-white",
                    "w-12 h-12",
                  )}
                />
                <h2 className="font-code font-bold text-primary text-3xl md:text-2xl w-full text-left">
                  Education
                </h2>
              </div>

              <AccordionStudy educationPosts={educationPosts} />
            </div>
            <div className="">
              <div
                className={clsx(
                  "flex items-center justify-center gap-2",
                  "mb-6",
                )}
              >
                <FaAward
                  className={clsx(
                    "lg:w-6 lg:h-6 md:w-10 md:h-10 text-white",
                    "w-12 h-12",
                  )}
                />
                <h2
                  className={clsx(
                    "font-code font-semibold text-primary text-3xl md:text-2xl w-full text-left",
                  )}
                >
                  Experience
                </h2>
              </div>

              <AccordionPath experiencePosts={experiencePosts} />
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};
export default Experience;

// border-2 border-white rounded-full
