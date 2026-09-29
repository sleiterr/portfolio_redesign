import { Download } from "lucide-react";
import clsx from "clsx";

export const DownloadCta = () => {
  return (
    <div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/Doc/Oleg_Troian_CV.pdf"
        className={clsx(
          "hidden lg:flex items-center gap-2",
          "font-semibold text-sm rounded-md text-secondary py-3 px-12 bg-button-gradient",
          "py-4 px-12",
          "md:py-4 md:px-12 md:text-2xl",
          "lg:text-sm lg:py-2.5 lg:px-5",
          "cursor-pointer focus:outline-3 focus:outline-offset-2 focus:outline-slate-600 active:bg-slate-600",
          "transition-all duration-300 ease-in-out",
          "hover:brightness-110",
        )}
      >
        <Download className="w-4 h-4 text-secondary" /> Download CV
      </a>
    </div>
  );
};
