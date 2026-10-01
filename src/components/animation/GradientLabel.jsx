import clsx from "clsx";
import GradientText from "./GradientText";

export const GradientLabel = ({
  children,
  className,
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
  animationSpeed = 6,
  showBorder = false,
  withLine = true,
}) => {
  return (
    <span
      className={clsx(
        "animate-fade-in-up",
        "flex items-center gap-3",
        "font-medium md:text-2xl text-caption tracking-widest",
        "lg:-left-[4rem] lg:text-2xl",
        className,
      )}
    >
      {/* Line separator */}
      {withLine && (
        <span className="w-10 h-px bg-gradient-to-r from-[#22c3df] to-[#1ed1a8]" />
      )}
      <GradientText
        colors={colors}
        animationSpeed={animationSpeed}
        showBorder={showBorder}
      >
        {children}
      </GradientText>
    </span>
  );
};

export default GradientLabel;
