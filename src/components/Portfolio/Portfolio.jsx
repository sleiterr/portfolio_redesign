import clsx from "clsx";
import SplitText from "../animation/SplitText";
import { GradientLabel } from "../animation/GradientLabel";

import Section from "../Section/Section";
import ProjectCard from "./ProjectCard";
import { useFeaturedProject } from "./useProject";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const Portfolio = () => {
  const { projectData, loading, error } = useFeaturedProject();

  if (loading) return null;

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  const post = projectData[0];
  if (!post) return null;

  return (
    <Section
      id="portfolio"
      className="hidden md:block bg-portfolio-transition md:max-w-none! py-0!"
    >
      <div className="px-4 py-[3.7rem] md:py-[12rem] mx-auto md:max-w-7xl">
        <div className="relative mb-8 md:mb-12">
          <GradientLabel className="lg:text-base! tracking-wide! mb-3 uppercase">
            My Projects
          </GradientLabel>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <SplitText
              tag="h2"
              text="Selected Work"
              className={clsx(
                "font-code font-bold text-2xl md:text-3xl text-primary",
              )}
              delay={100}
              duration={0.4}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="right"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <span className="text-septenary text-sm">
              Tap any card to preview
            </span>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
