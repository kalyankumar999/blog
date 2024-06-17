'use client'
import Image from "next/image";
import React from "react";
import HtmlLogo from "../../../public/logos/html.svg";
import CssLogo from "../../../public/logos/css.svg";
import GraphqlLogo from "../../../public/logos/graphql.svg";
import JavascriptLogo from "../../../public/logos/javascript.svg";
import TypescriptLogo from "../../../public/logos/typescript.svg";
import TailwindcssLogo from "../../../public/logos/tailwind-css-2.svg";
import NextjsLogo from "../../../public/logos/next-js.svg";
import EmblaCarousel from "../Carousel/carousel";

const SkillSection = () => {
  const OPTIONS = { loop: true }
  const skillData = [
    {
      url: HtmlLogo,
      text: "HTML-5",
    },

    {
      url: CssLogo,
      text: "CSS-3",
    },
    {
      url: NextjsLogo,
      text: "Nextjs",
    },
    {
      url: TailwindcssLogo,
      text: "Tailwindcss",
    },
    {
      url: JavascriptLogo,
      text: "Javascript",
    },
    {
      url: TypescriptLogo,
      text: "Typescript",
    },
    {
      url: GraphqlLogo,
      text: "Graphql",
    },
    {
      url: HtmlLogo,
      text: "HTML-5",
    },
    {
      url: TypescriptLogo,
      text: "Typescript",
    },
    {
      url: GraphqlLogo,
      text: "Graphql",
    },
    {
      url: HtmlLogo,
      text: "HTML-5",
    },
  ];
  return (
    <section
      id="skills"
      className="md:mx-[120px] px-[16px] md:px-0 md:pt-[110px] pt-[62px]"
    >
      <h3 className="uppercase font-oswald font-semibold text-white text-xl md:mb-5 mb-3">
        My skills
      </h3>
      
      <p className="font-satoshi text-white md:text-lg text-md mb-3 md:mb-6 max-w-[800px]">
        I'm Kalyan Kumar Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed euismod, nunc ac bibendum ullamcorper, sapien diam cursus
        nibh, nec fermentum velit erat vel nisi. Mauris vitae semper lacus.
      </p>
      <div className=' text-black'>
            <EmblaCarousel skillData={skillData} options={OPTIONS} />
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
