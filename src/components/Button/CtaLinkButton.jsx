import React from "react";
import clsx from "clsx";

const CtaLinkButton = ({
  children,
  href,
  className,
  external = true,
  rel,
  target,
  ...rest
}) => {
  // finalTarget and finalRel determine the target and rel attributes for the anchor tag based on whether the link is external.
  // finalRel determines the rel attribute for the anchor tag based on the finalTarget.
  const finalTarget = external ? "_blank" : target;
  const finalRel =
    finalTarget === "_blank" ? (rel ?? "noopener noreferrer") : rel;

  return (
    <div className="inline-block">
      <a
        href={href}
        target={finalTarget}
        rel={finalRel}
        {...rest}
        className={clsx(
          "relative z-10 block",
          "px-5 py-3 rounded-md! cursor-pointer",
          "font-medium text-quaternary text-base md:text-lg",
          "transition duration-300 ease-in-out",
          className,
        )}
      >
        {children}
      </a>
    </div>
  );
};

export default CtaLinkButton;
