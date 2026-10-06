import React, { useState } from "react";
import HeroSection from "../../components/Hero/HeroSection";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/Experience/Experience";
import Portfolio from "../../components/Portfolio/Portfolio";
import Skillslop from "../../components/Skillslop/SkillTicker";
import FeaturedPost from "../../components/FeaturedPost/FeaturedPost";

import { techLogos } from "../../utils/techLogos";
// import {
//   SiReact,
//   SiNextdotjs,
//   SiTypescript,
//   SiTailwindcss,
// } from "react-icons/si";

const Home = () => {
  const [currentPage, setCurrentpage] = useState(1);
  // Hook to reference the hero section for potential future use (e.g., scrolling, animations)
  const heroRef = React.useRef(null);

  return (
    <>
      <HeroSection heroRef={heroRef} />
      <div className="relative block h-[100px] overflow-hidden lg:hidden before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-8 before:bg-gradient-to-b before:from-[#08121d] before:to-transparent before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:h-10 after:bg-gradient-to-b after:from-transparent after:to-[#08121d] after:content-['']">
        <Skillslop
          logos={techLogos}
          speed={40}
          direction="left"
          logoHeight={40} //heght_icon
          gap={40} //width_icon
          // className="px-12"
          pauseOnHover
          scaleOnHover
          fadeOut
          // fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
      <About />
      <Skills />
      <Portfolio currentPage={currentPage} setCurrentpage={setCurrentpage} />
      <FeaturedPost />
      <Experience />
    </>
  );
};

export default Home;
