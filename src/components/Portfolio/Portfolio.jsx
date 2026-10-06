// Portfolio.jsx
import { useState, useEffect } from "react"; // Adjust the path as necessary
import { Link } from "react-router-dom";

import clsx from "clsx";
import { AnimatePresence, motion as Motion } from "motion/react";
import SplitText from "../animation/SplitText";
import { GradientLabel } from "../animation/GradientLabel";

import Section from "../Section/Section";
import FilterCard from "./FilterCard";
import Pagination from "../Pagination/Pagination";

import { containerVariants, cardVariants } from "../animation/Portfolio.js";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const Portfolio = ({ currentPage, setCurrentpage }) => {
  const [project, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectCategory, setSelectCategory] = useState("all");
  const [direction, setDirection] = useState(1);

  const itemsPerPage = 2;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Simulate fetching data from an API or local JSON file
        const res = await fetch("/data/projectsData.json"); // Adjust the path as necessary
        const data = await res.json();

        setProjects(data.projects);
      } catch (error) {
        setError("Failed to load projects", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Create a list of unique categories from the project data
  const categories = ["all", ...new Set(project.map((p) => p.category))];

  // function to reset filters
  function resetFilters() {
    setSelectCategory("all");
    setCurrentpage(1);
  }

  // Filter projects based on the selected category
  const categoryProjects = [...project].filter(
    (p) => selectCategory === "all" || p.category === selectCategory,
  );

  // Match.ceil to calculate total pages based on the number of filtered projects and items per page
  // cateoryProjects.length is the total number of projects after filtering by category
  // itrmsPerPage is the number of projects we want to display on each page
  const totalPage = Math.ceil(categoryProjects.length / itemsPerPage);

  // Calculate the projects to display on the current page
  // slice uses the currentPage and itemsPerPage to determine which projects to show
  const pageItems = categoryProjects.slice(
    (currentPage - 1) * itemsPerPage, // Calculate the starting index for the current page
    currentPage * itemsPerPage, // Calculate the ending index for the current page
  );

  useEffect(() => {
    if (currentPage > totalPage) {
      setCurrentpage(1);
    }
  }, [currentPage, setCurrentpage, totalPage]);

  if (loading) {
    return (
      <p className="font-normal text-2xl text-red-600 text-center">
        ...Loading
      </p>
    );
  }

  if (error || !project) {
    return (
      <p className="font-normal text-2xl text-cyan-500 text-center">
        Product not found !
      </p>
    );
  }

  return (
    <Section
      id="portfolio"
      className="hidden md:block bg-portfolio-transition md:max-w-none! py-0!"
    >
      <div className="px-4 py-[3.7rem] md:py-[12rem] mx-auto md:max-w-7xl">
        <div className="relative md:mb-12 lg:mb-6">
          <GradientLabel className="lg:text-base! tracking-wide! mb-3 uppercase">
            My Projects
          </GradientLabel>
          <SplitText
            tag="h2"
            text="Selected Work"
            className={clsx(
              "font-code font-bold text-2xl md:text-3xl text-primary",
              "mb-4 md:mb-6",
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
        </div>
        <div
          className={clsx(
            "grid",
            "md:grid-cols-1 md:gap-y-6",
            "lg:grid-cols-3 lg:gap-4 lg:grid-rows-none",
          )}
        >
          {/* FilterCard */}
          <FilterCard
            resetFilters={resetFilters}
            categories={categories}
            setSelectCategory={setSelectCategory}
            currentPage={currentPage}
            totalPage={totalPage}
            setCurrentpage={setCurrentpage}
            setDirection={setDirection}
          />

          <div className="col-span-2 lg:sticky top-24">
            <AnimatePresence mode="wait" custom={direction}>
              {/* className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6" */}
              <Motion.div
                key={`${selectCategory}-${currentPage}`}
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                custom={direction}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
              >
                {pageItems.map((item, index) => {
                  const realIndex =
                    (currentPage - 1) * itemsPerPage + index + 1;
                  const formattedIndex = realIndex.toString().padStart(2, "0");

                  return (
                    <Motion.div
                      key={item.id}
                      variants={cardVariants}
                      custom={direction}
                    >
                      <Link
                        className="relative w-full"
                        to={`/project-detail/${item.id}`}
                      >
                        {/* use object-center if images have different sizes */}
                        <img
                          src={item.image[0]}
                          alt={item.caption}
                          className="w-full h-auto object-cover rounded-xl md:aspect-[360/520] lg:min-h-[520px] lg:h-auto"
                        />
                        <div
                          className={clsx(
                            "flex flex-col items-center justify-center text-white text-center m-4",
                            "absolute inset-0 bg-black/80 rounded-xl opacity-0",
                            "hover:opacity-100 transition duration-500 ease-in-out",
                          )}
                        >
                          <p
                            className={clsx(
                              "font-normal text-7xl text-number-overlay tracking-wider",
                              "absolute right-4 top-4",
                            )}
                          >
                            {formattedIndex}
                          </p>
                          <h3 className="absolute font-code font-medium text-3xl tracking-wider text-center">
                            {item.title}
                          </h3>
                        </div>
                      </Link>
                    </Motion.div>
                  );
                })}
              </Motion.div>
            </AnimatePresence>
          </div>
          <div className="md:block lg:hidden">
            <Pagination
              currentPage={currentPage}
              totalPage={totalPage}
              setCurrentpage={setCurrentpage}
              setDirection={setDirection}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
