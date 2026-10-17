import { useState, useEffect } from "react";
import clsx from "clsx";
import SplitText from "../animation/SplitText";
import { GradientLabel } from "../animation/GradientLabel";
import { AnimatePresence, motion as Motion } from "motion/react";
import PortfolioPagination from "./PortfolioPagination";

import Section from "../Section/Section";
import ProjectCard from "./ProjectCard";
import { useFeaturedProject } from "./useProject";
import { containerVariants, cardVariants } from "../animation/cardVariants";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const Portfolio = () => {
  const isMd = useMediaQuery("(min-width: 786px)");
  const pageSize = isMd ? 3 : 1;

  const { projectData, loading, error } = useFeaturedProject();
  const [currentPage, setCurrentPage] = useState(1);
  // 1 = next page (cards slide in from the right), -1 = previous page
  const [direction, setDirection] = useState(1);

  // useEffect to reset current page when pageSize changes
  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize]);

  const handlePageChange = (page) => {
    if (page === currentPage) return;
    setDirection(page > currentPage ? 1 : -1);
    setCurrentPage(page);
  };

  if (loading) return null;

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  if (projectData.length === 0) return null;

  // Calculate pagination details
  const totalPage = Math.ceil(projectData.length / pageSize);
  const start = (currentPage - 1) * pageSize;
  const pageItems = projectData.slice(start, start + pageSize);

  return (
    <Section
      id="portfolio"
      className="bg-portfolio-transition md:max-w-none! py-0!"
    >
      <div className="px-4 py-[3.7rem] md:py-[12rem] mx-auto md:max-w-7xl">
        <div className="relative mb-8 md:mb-12">
          <GradientLabel className="lg:text-base! tracking-wide! mb-3 uppercase">
            My Projects
          </GradientLabel>
          <div className="flex flex-col items-start sm:flex-row sm:items-end justify-between gap-3">
            <SplitText
              tag="h2"
              text="Selected Work"
              className={clsx(
                "font-code font-bold text-3xl md:text-4xl text-primary",
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
        <AnimatePresence mode="wait" custom={direction}>
          <Motion.div
            key={`${currentPage}`}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            custom={direction}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {pageItems.map((project) => (
              <Motion.div
                key={project.id}
                variants={cardVariants}
                custom={direction}
              >
                <ProjectCard project={project} />
              </Motion.div>
            ))}
          </Motion.div>
        </AnimatePresence>
        <PortfolioPagination
          currentPage={currentPage}
          totalPage={totalPage}
          onPageChange={handlePageChange}
        />
      </div>
    </Section>
  );
};

export default Portfolio;
