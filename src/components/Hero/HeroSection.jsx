import heroBg from "../../assets/img/hero_img.jpg";
import clsx from "clsx";
import { ProjectsLinks } from "./ProjectsLinks";
import CtaLinkButton from "../Button/CtaLinkButton";

import { GradientHeader } from "./GradientHeader";
import BlurText from "../animation/BlurText";
import SplitText from "../animation/SplitText";
import { GradientLabel } from "../animation/GradientLabel";

import { FiGithub } from "react-icons/fi";

const heroTextDoc = [
  {
    id: 1,
    text: "I am a Junior Full Stack Developer & UX/UI Designer, excited to bring my skills to real-world projects while constantly growing as a developer.",
    className:
      "font-light text-base sm:text-xl md:text-lg text-secondary leading-[1.5]",
  },
];

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const HeroSection = () => {
  return (
    <>
      <section
        className={clsx(
          "relative w-full min-w-[320px] bg-cover bg-no-repeat md:bg-center lg:bg-center h-screen lg:h-auto md:aspect-[8/5]",
          "bg-left",
        )}
        id="hero"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Gradient overlays */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#08121d] via-[#08121d]/80 to-[#08121d]/30"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08121d] via-transparent to-transparent"
        />
        <div
          className={clsx(
            "absolute z-10 flex items-start justify-center",
            "top-[6rem] left-6",
            "sm:top-4 sm:left-12",
            "md:top-1/6 md:left-12",
            "lg:top-1/3 lg:left-10",
          )}
        >
          <div className="flex flex-col items-start justify-center text-left gap-4 px-4 md:px-0">
            <GradientLabel className="uppercase text-sm!">
              junior developer
            </GradientLabel>
            <div className="mb-4 w-full">
              <SplitText
                tag="h1"
                text="Hi, I'm Oleg."
                className="font-code font-extrabold text-secondary text-4xl sm:text-6xl md:text-6xl leading-[1.4] md:leading-[1.2]"
                delay={100}
                duration={0.4}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />

              <h2
                className={clsx(
                  "flex-wrap md:flex items-center gap-1 md:gap-4",
                  "font-code font-extrabold text-secondary text-4xl sm:text-6xl md:text-6xl",
                )}
              >
                I am
                <GradientHeader />
              </h2>
            </div>
            {/* Gradient */}
            <HeroItem duration={0.8} delay={0} />
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <ProjectsLinks />
              <CtaLinkButton
                href="https://github.com/sleiterr"
                className={clsx(
                  "flex items-center gap-2",
                  "text-sm! text-secondary",
                  "border border-white/25",
                  "hover:border-[#22c3df] hover:text-[#22c3df]",
                )}
              >
                <FiGithub className="w-4 h-4" />
                View GitHub
              </CtaLinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

const HeroItem = ({ duration }) => {
  return (
    <div className="w-full min-w-xs max-w-sm md:min-w-auto sm:max-w-[32rem] md:max-w-[34rem] mb-8">
      {heroTextDoc.map((p) => (
        <BlurText as="p" duration={duration} key={p.id} className={p.className}>
          {p.text}
        </BlurText>
      ))}
    </div>
  );
};
