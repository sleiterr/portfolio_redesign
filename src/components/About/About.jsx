import React from "react";
import BlurText from "../animation/BlurText";
import { SpanAbout } from "./SpanAbout";
import SplitText from "../animation/SplitText";
import clsx from "clsx";

const handleAnimationComplete = () => {};

const About = () => {
  return (
    <section className="" id="about">
      <div className="px-4 py-[8rem] mx-auto md:max-w-7xl">
        <div className="relative">
          <SpanAbout />
          <SplitText
            tag="h2"
            text="About"
            className="font-code font-bold text-5xl md:text-6xl text-primary tracking-wide mb-4 w-full"
            delay={40}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          <div className="grid grid-row-2 lg:grid-cols-2 gap-8">
            <AboutItms duration={0.5} delay={500}>
              I am a Junior Front-end Developer, creating modern, structured,
              and user-friendly web interfaces. I work with React and Next.js,
              using a component-driven approach to create scalable and readable
              interfaces. This approach helps maintain clean code architecture
              and simplifies project maintenance. I use JavaScript both in React
              projects and when creating standalone dynamic pages — working with
              the DOM, forms Formik, ReactForm, interactive components, and data
              handling. I have experience working with REST APIs fetching data,
              POST/GET requests, integrating external services, and handling
              JSON data to ensure correct display in the interface.
            </AboutItms>
            <AboutItms duration={0.8} delay={500}>
              I am interested in UI/UX design and understand the importance of
              visual interface structure, focusing on improving usability in web
              projects. I create wireframes and prototypes in Figma, focusing on
              UI/UX interactions and improving usability. I use Adobe Creative
              Cloud to prepare graphic and visual assets, allowing me to combine
              technical implementation with thoughtful visual design.
            </AboutItms>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

const AboutItms = ({ children, duration = 1, delay }) => {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <BlurText
          as="p"
          key={index}
          duration={duration}
          delay={delay}
          className={clsx(
            "font-light text-secondary text-base leading-[1.6] tracking-normal",
            "sm:text-lg sm:leading-[1.65]",
            "md:text-lg md:leading-[1.65] md:tracking-[0.02em]",
            "lg:text-lg lg:leading-[1.4]",
          )}
        >
          {child}
        </BlurText>
      ))}
    </>
  );
};
