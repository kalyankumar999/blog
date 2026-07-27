"use client";
import React from "react";

import EmblaCarousel from "../Carousel/carousel";
import { skillData } from "./data";

const SkillSection = () => {
  const OPTIONS = { loop: true, dragFree: true };

  return (
    <section
      id="skills"
      className="md:mx-[120px] px-[16px] md:px-0 md:pt-[110px] pt-[62px] animate-slide-in-up"
    >
      <h3 className="uppercase font-oswald font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-xl md:mb-5 mb-3 md:text-3xl">
        My skills
      </h3>

      <p className="font-satoshi text-gray-200 md:text-lg text-md mb-3 md:mb-6 max-w-[800px] leading-relaxed">
        {skillData.description}
      </p>
      <div className="glass-morphism rounded-2xl p-6 hover-lift">
        <EmblaCarousel skillData={skillData.skills} options={OPTIONS} />
      </div>
    </section>
  );
};

export default SkillSection;
