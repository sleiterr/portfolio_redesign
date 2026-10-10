import Section from "../../components/Section/Section";
import GradientLabel from "../animation/GradientLabel";
import PostContent from "./PostContent";
import Mockupsc from "./Mockupsc";
import { useFeaturedPost } from "./usePost";

const FeaturedPost = () => {
  const { postData, loading, error } = useFeaturedPost();

  if (loading) return null;

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  const post = postData[0];
  if (!post) return null;

  return (
    <Section>
      <GradientLabel className="lg:text-base! tracking-wide! mb-10 md:mb-14 uppercase">
        Featured Case Study
      </GradientLabel>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <PostContent postData={postData} />
        <Mockupsc images={post.images} />
      </div>
    </Section>
  );
};

export default FeaturedPost;
