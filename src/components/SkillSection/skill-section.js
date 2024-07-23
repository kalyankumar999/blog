"use client";
import React from "react";

import EmblaCarousel from "../Carousel/carousel";
import { skillData } from "./data";

const SkillSection = () => {
  const OPTIONS = { loop: true, dragFree: true };

  return (
    <section
      id="skills"
      className="md:mx-[120px] px-[16px] md:px-0 md:pt-[110px] pt-[62px]"
    >
      <h3 className="uppercase font-oswald font-semibold text-white text-xl md:mb-5 mb-3">
        My skills
      </h3>

      <p className="font-satoshi text-white md:text-lg text-md mb-3 md:mb-6 max-w-[800px]">
        {skillData.description}
      </p>
      <div className=" text-black ">
        <EmblaCarousel skillData={skillData.skills} options={OPTIONS} />
      </div>
      {/* <div className="flex flex-wrap md:gap-40 gap-10 justify-between">
        {skillData.map((item) => (
          <div className="flex flex-col items-center justify-center p-2 w-28 md:mb-[-50px] hover:transform hover:ease-in-out hover:scale-105 hover:bg-white hover:text-primarytext-500 text-white hover:backdrop-blur-md hover:rounded-lg">
            <Image
              src={item.url}
              alt={item.text}
              className="w-full h-auto mb-2 object-cover"
            />
            <p className="text-center text-sm font-medium  ">
              {item.text}
            </p>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default SkillSection;
