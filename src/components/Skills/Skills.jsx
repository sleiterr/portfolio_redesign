import { FrontEnd } from "./FrontEnd";
import { Cms } from "./Cms";
import { WorkFlow } from "./Workflow";
import { Design } from "./Design";
import SplitText from "../animation/SplitText";
import clsx from "clsx";
import { GradientLabel } from "../animation/GradientLabel";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const Skills = () => {
  return (
    <section
      className="relative hidden lg:block before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-32 before:bg-gradient-to-b before:from-[#08121d] before:to-transparent before:content-['']"
      id="skills"
    >
      <div className="py-[8rem] lg:px-4 mx-auto md:max-w-7xl">
        <GradientLabel className="lg:text-base! tracking-wide! mb-3 uppercase">
          My Skills
        </GradientLabel>
        <SplitText
          tag="h2"
          text="Tech Stack"
          className="font-code font-bold text-4xl text-primary mb-15 w-full leading-[1.2]"
          delay={100}
          duration={0.4}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <div className="relative min-h-[26rem]">
          {/* Frontend Stack */}
          <div
            className={clsx(
              "absolute translate-x-1/2 px-4 pt-4 pb-16 w-[34rem] h-auto",
              "rounded-xl bg-white/20 backdrop-blur-sm border-l-1 border-t-1 border-sky-500",
            )}
          >
            <FrontEnd />
          </div>

          {/* CMS & Data Layer */}
          <div
            className={clsx(
              "absolute translate-y-32 left-[30rem] pt-4 pl-6 pb-8 w-[24.6rem] h-[9.2rem]",
              "rounded-xl  bg-white/20 backdrop-blur-sm z-1 border-l-1 border-t-1 border-sky-500",
            )}
          >
            <Cms />
          </div>

          {/* Development Workflow */}
          <div
            className={clsx(
              "absolute pt-4 px-6 pb-8  w-[28rem] h-[9rem]",
              "rounded-xl bg-white/20 backdrop-blur-sm z-0 top-[15rem] translate-x-[12rem] border-r-1 border-t-1 border-sky-500",
            )}
          >
            <WorkFlow />
          </div>

          {/* UI/UX Tools */}
          <div
            className={clsx(
              "absolute translate-y-58  left-1/2 translate-x-[6rem] px-6 pt-4 pb-8 w-[23rem] h-[8rem]",
              "bg-white/20 backdrop-blur-sm z-2 rounded-xl border-r-1 border-t-1 border-sky-500",
            )}
          >
            <Design />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
