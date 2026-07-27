"use client";
import React from "react";
// import MaskedImageCarousel from '../masked-image';

/**
 * Renders a hero section with a masked image carousel.
 * @returns {React.JSX.Element} A React JSX element representing the HeroSection component.
 */
const HeroSection = () => {
  return (
    <section className="relative mt-[-10px] w-full overflow-hidden pb-[4px] pt-[22px] md:px-[68px] md:py-[80px] min-h-[60vh] flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: "2s"}}></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: "4s"}}></div>
      </div>

      <div className="relative z-20 text-center">
        <p className="animate-slide-in-down relative z-[1] text-center font-montecarlo text-[52px] leading-none text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 md:text-[8vw]">
          Hi I'm
        </p>

        <h1 className="animate-slide-in-up bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-center font-oswald md:text-[10vw] text-[13vw] font-[700] uppercase leading-none text-transparent md:mt-[-20px]">
          Kalyan Kumar
        </h1>
        
        <h3 className="animate-slide-in-up text-center font-oswald text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-400 font-semibold md:text-[5vw] text-[7vw] md:mt-2">
          Web Developer
        </h3>

        <p className="mt-6 md:mt-8 font-satoshi text-gray-300 max-w-2xl mx-auto md:text-lg text-sm animate-slide-in-up" style={{animationDelay: "0.3s"}}>
          Creating beautiful, interactive, and performant web experiences with modern technologies and cutting-edge design.
        </p>

        <div className="mt-8 md:mt-10 flex justify-center gap-4 animate-slide-in-up" style={{animationDelay: "0.5s"}}>
          <a href="#works" className="group">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover-lift">
              View My Work
            </button>
          </a>
          <a href="#connect" className="group">
            <button className="px-8 py-3 glass-morphism text-cyan-300 font-semibold rounded-lg hover:text-white transition-colors duration-300 hover-lift">
              Get In Touch
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
