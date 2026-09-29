import { Link } from "react-scroll";
import heroBg from "../../assets/img/hero_img.jpg";
import clsx from "clsx";
// import { ButtHero } from "./ButtHero";
import { ProjectsLinks } from "./ProjectsLinks";
import { GradientHeader } from "./GradientHeader";
import BlurText from "../animation/BlurText";
import SplitText from "../animation/SplitText";

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
          // backgroundPosition: "center center",
          // aspectRatio: "8 / 5",
        }}
      >
        <div
          className={clsx(
            "absolute translate-y-1/2 flex items-start justify-center",
            "top-[6rem] left-6",
            "lg:left-10 lg:bottom-60",
            "md:top-1/6 md:left-12",
            "sm:top-4 sm:left-12",
          )}
        >
          <div className="px-4 md:px-0 flex flex-col items-start justify-center text-left">
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
            <div className="">
              <ProjectsLinks />
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
