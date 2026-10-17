import GradientLabel from "../animation/GradientLabel";
import SplitText from "../animation/SplitText";
import AboutItems from "./AboutItems";
import Section from "../Section/Section";

// const STATS = [
//   { value: "93", label: "Projects" },
//   { value: "6mo", label: "Internship" },
//   { value: "2+", label: "Years Study" },
// ];

function About() {
  const handleAnimationComplete = () => {};

  return (
    <Section id="about" className="py-16 md:py-28 bg-section md:max-w-none!">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative">
        <GradientLabel className="lg:text-base! tracking-wide! mb-3 uppercase">
          About me
        </GradientLabel>

        <SplitText
          tag="h2"
          text="Who I Am"
          className="font-code font-bold text-3xl md:text-4xl text-primary tracking-wide mb-6 md:mb-16 w-full"
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

        <div className="grid md:grid-cols-2 gap-8 lg:gap-20">
          <div>
            <AboutItems duration={0.5} delay={500} className="mb-5">
              I am a Junior Front-end Developer creating modern, structured, and
              user-friendly web interfaces. I work with React and Next.js using
              a component-driven approach to build scalable and readable
              interfaces — keeping code architecture clean and projects
              maintainable.
            </AboutItems>

            <AboutItems duration={0.65} delay={650}>
              I use JavaScript both in React projects and for standalone dynamic
              pages — working with the DOM, Formik/ReactHookForm, interactive
              components, and data handling. I have solid experience with REST
              APIs: fetching data, POST/GET requests, and integrating external
              services.
            </AboutItems>
          </div>

          <div>
            <AboutItems duration={0.8} delay={500} className="mb-7">
              I am interested in UI/UX design and understand the importance of
              visual interface structure. I create wireframes and prototypes in
              Figma, focusing on usability improvements. I also use Adobe
              Creative Cloud to prepare visual assets — combining technical
              implementation with thoughtful visual design.
            </AboutItems>

            {/* Stats cards */}
            {/* <div className="grid grid-cols-3 gap-3 sm:gap-6">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="border border-white/10 rounded-xl p-3 sm:p-4 bg-white/[0.03]"
                >
                  <div className="font-['Source_Code_Pro',monospace] font-bold text-2xl sm:text-3xl text-[#22c3df] mb-1">
                    {value}
                  </div>
                  <div className="font-['Poppins',sans-serif] text-white/50 text-xs sm:text-sm">
                    {label}
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
