import React from "react";
import clsx from "clsx";
import BlurText from "../animation/BlurText";

const AboutItems = ({ children, duration = 1, delay, className }) => {
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
            "lg:text-lg lg:leading-[1.85]",
            className,
          )}
        >
          {child}
        </BlurText>
      ))}
    </>
  );
};

export default AboutItems;
