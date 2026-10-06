import { IoIosArrowForward } from "react-icons/io";
import BlogCard from "./BlogCard";
import { useBlog } from "./useBlog";

const ResultSummary = () => {
  const { blogData, loading, error } = useBlog();

  if (loading) return null;

  if (error) return <p className="font-normal text-xl text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-2 gap-2 mt-28 w-2/3 items-center">
      <div className="">
        <h2 className="font-medium text-primary text-2xl pb-4">Solution</h2>
        <ul className="flex flex-col items-start max-w-[370px] gap-2">
          {blogData.map((item) =>
            item.solution?.map((step, index) => (
              <li key={index} className="flex items-start">
                <IoIosArrowForward
                  className="shrink-0 mr-2 text-secondary"
                  size={24}
                />
                <p className="font-normal text-secondary text-lg">{step}</p>
              </li>
            )),
          )}
        </ul>
      </div>
      <div className="">
        <BlogCard className="max-w-[420px]! mt-12">
          <h2 className="font-medium text-primary text-2xl pb-4">Result</h2>
          {blogData.map((item) => (
            <p key={item.id} className="font-normal text-secondary text-xl">
              {item.result}
            </p>
          ))}
        </BlogCard>
      </div>
    </div>
  );
};

export default ResultSummary;
