import clsx from "clsx";

// variants for mockup images
const VARIANTS = {
  back: {
    wrapper: clsx(
      "w-[130px] sm:w-[180px] lg:w-[220px] self-start mt-8",
      "shadow-2xl border border-white/10 ring-1 ring-white/5",
    ),
    glow: false,
  },
  front: {
    wrapper: clsx(
      "w-[150px] sm:w-[200px] lg:w-[240px] z-10",
      "shadow-[0_24px_60px_rgba(0,0,0,0.6)] border border-white/15 ring-1 ring-[#22c3df]/10",
    ),
    glow: true,
  },
};

const Mockupsc = ({ images = [] }) => {
  return (
    <div className="relative flex justify-center items-end gap-3 sm:gap-6 min-h-[300px] sm:min-h-[400px] lg:min-h-[480px] mt-2 lg:mt-0">
      {images.map((image) => {
        // variant for the current image
        const variant = VARIANTS[image.variant] || VARIANTS.front;
        return (
          <div
            key={image.src}
            className={clsx(
              "relative flex-shrink-0 overflow-hidden rounded-[24px] sm:rounded-[32px]",
              variant.wrapper,
            )}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full object-cover"
            />
            {variant.glow && (
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-[#22c3df]/20 blur-2xl rounded-full" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Mockupsc;
