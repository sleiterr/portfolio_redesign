import { useFeaturedPost } from "./usePost";

const PostContent = () => {
  const { postData, loading, error } = useFeaturedPost();

  if (loading) return null;

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  return (
    <>
      {postData.map((item) => (
        <div key={item.id}>
          <p className="font-code text-[#1ed1a8]/60 text-sm mb-3">
            {item.eyebrow}
          </p>
          <h2 className="font-code font-bold text-[clamp(2rem,7vw,3.25rem)] text-primary leading-[1.1] mb-5">
            {item.title}
          </h2>
          <h4 className="font-code font-bold text-[clamp(2rem,7vw,3.25rem)] text-[#22c3df] leading-[1.1]">
            {item.subtitle}
          </h4>
        </div>
      ))}
    </>
  );
};

export default PostContent;
