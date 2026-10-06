import Section from "../../components/Section/Section";
import GradientLabel from "../animation/GradientLabel";
import PostContent from "./PostContent";

const FeaturedPost = () => {
  return (
    <Section>
      <GradientLabel className="lg:text-base! tracking-wide! mb-10 md:mb-14 uppercase">
        Featured Case Study
      </GradientLabel>
      <PostContent />
    </Section>
  );
};

export default FeaturedPost;
