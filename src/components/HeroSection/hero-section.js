"use client";
import React from "react";
// import MaskedImageCarousel from '../masked-image';

/**
 * Renders a hero section with a masked image carousel.
 * @returns {React.JSX.Element} A React JSX element representing the HeroSection component.
 */
const HeroSection = () => {
  return (
    <section className="relative mt-[-10px]   w-full  overflow-hidden pb-[4px] pt-[22px] md:px-[68px]  md:py-[80px]">
      {/* <div className=" absolute left-1/2 top-[22px] z-0 aspect-square w-[120%] -translate-x-1/2 transform rounded-full bg-gradient-to-b from-gradients-morningSun1 via-gradients-morningSun2 to-gradients-morningSun4 md:top-[73px] md:w-[90%] lg:w-[90%] "></div> */}
      <div className=" relative z-20">
        <p className=" animate-slide-up-fade-in relative top-[-10px] z-[1] text-center font-montecarlo text-[52px] leading-none text-primary-500 md:top-[-27px] md:text-[8vw]">
          Hi I'm
        </p>

        <h1 className="animate-slide-up-fade-in-delay  bg-gradient-to-b from-primary-500 to-primary-600 bg-clip-text text-center font-oswald md:text-[10vw] text-[13vw] font-[600] uppercase leading-none  text-transparent md:mt-[-48px]">
          Kalyan Kumar
        </h1>
        <h3 className="animate-slide-up-web  text-center font-oswald text-secondary-500 font-semibold md:text-[5vw] text-[7vw]">
          Web Developer
        </h3>
      </div>
    </section>
  );
};

export default HeroSection;
