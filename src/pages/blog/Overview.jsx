import { useBlog } from "./useBlog";
import { IoIosArrowForward } from "react-icons/io";
import BlogCard from "./BlogCard";

const Overview = () => {
  const { blogData, loading, error } = useBlog();

  if (loading) return null;

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  return (
    <>
      {blogData.map((item) => (
        <div key={item.id}>
          <div className="mb-14">
            <h2 className="font-code font-bold text-primary text-5xl">
              {item.title}
            </h2>
            <h4 className="font-code font-medium text-secondary text-4xl leading-snug">
              {item.subtitle}
            </h4>
          </div>
          <div className="grid grid-cols-[330px_1fr] gap-16">
            <div className="">
              <img
                src={item.images[0].src}
                alt={item.images[0].alt}
                className="w-full h-auto object-cover"
              />
              <div className="mt-10">
                <BlogCard className="w-[260px]!">
                  <h4 className="font-medium text-primary text-3xl pb-4">
                    Tech Stack
                  </h4>
                  <ul className="flex flex-col items-start justify-center gap-4">
                    {item.techStack.map((tech, index) => (
                      <li key={index} className="flex items-center">
                        <IoIosArrowForward
                          className="text-secondary mr-2"
                          size={24}
                        />
                        <p className="font-normal text-secondary text-lg">
                          {tech}
                        </p>
                      </li>
                    ))}
                  </ul>
                </BlogCard>
              </div>
            </div>
            <div>
              <div className="mb-14">
                <h4 className="font-medium text-primary text-3xl pb-4">
                  Project Overview
                </h4>
                <p className="font-normal text-secondary text-lg max-w-[620px]">
                  {item.overview.description}
                </p>
              </div>
              <div className="">
                <div className="pb-4">
                  <h4 className="font-medium text-primary text-3xl pb-1">
                    Goal:
                  </h4>
                  <p className="font-normal text-secondary text-lg pl-6">
                    - I wanted to learn how to:
                  </p>
                </div>
                <ul className="flex flex-col items-start max-w-[460px] gap-2">
                  {item.learningGoals.map((goal, index) => (
                    <li key={index} className="flex items-start">
                      <IoIosArrowForward
                        className="shrink-0  mr-2 text-secondary"
                        size={24}
                      />
                      <p className="font-normal text-secondary text-lg">
                        {goal}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-16">
                <div className="pb-4">
                  <h4 className="font-medium text-primary  text-3xl pb-4">
                    {item.challenge.title}
                  </h4>
                  <p className="font-normal text-secondary text-lg max-w-[540px]">
                    {item.challenge.description}
                  </p>
                </div>
                <ul className="flex flex-col items-start max-w-[400px] gap-2 ml-4">
                  {item.challenge.problem.map((problem, index) => (
                    <li key={index} className="flex items-start">
                      <IoIosArrowForward
                        className="shrink-0 mr-2 text-secondary"
                        size={24}
                      />
                      <p className="font-normal text-secondary text-lg">
                        {problem}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Overview;
