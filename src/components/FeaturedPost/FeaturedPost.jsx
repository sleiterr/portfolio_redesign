import Section from "../../components/Section/Section";
import GradientLabel from "../animation/GradientLabel";
import PostContent from "./PostContent";
import Mockupsc from "./Mockupsc";
import TechBadges from "./TechBadges";
import CtaLinkButton from "../Button/CtaLinkButton";
import { FiGithub } from "react-icons/fi";
import clsx from "clsx";

import { useFeaturedPost } from "./usePost";

const FeaturedPost = () => {
  const { postData, loading, error } = useFeaturedPost();

  if (loading) return null;

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  const post = postData[0];
  if (!post) return null;

  return (
    <Section id="blog" className="px-5 sm:px-6">
      <GradientLabel className="lg:text-base! tracking-wide! mb-10 md:mb-14 uppercase">
        Featured Case Study
      </GradientLabel>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 md:mb-8">
        <PostContent postData={postData} />
        <Mockupsc images={post.images} />
      </div>
      <div className="flex flex-wrap md:flex-col md:items-start justify-center md:justify-start gap-6">
        <TechBadges techStack={post.techStack} />
        <CtaLinkButton
          href="https://github.com/sleiterr/Weather_App"
          className={clsx(
            "flex items-center gap-2",
            "font-medium! text-sm! text-secondary",
            "px-6! py-3! rounded-md!",
            "border border-white/25",
            "hover:border-[#22c3df] hover:text-[#22c3df]",
          )}
        >
          <FiGithub className="w-4 h-4" />
          View GitHub
        </CtaLinkButton>
      </div>
    </Section>
  );
};

export default FeaturedPost;
