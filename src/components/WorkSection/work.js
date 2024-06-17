"use client";
import React from "react";
import HtmlLogo from "../../../public/logos/html.svg";
import CssLogo from "../../../public/logos/css.svg";
import GraphqlLogo from "../../../public/logos/graphql.svg";
import JavascriptLogo from "../../../public/logos/javascript.svg";
import TypescriptLogo from "../../../public/logos/typescript.svg";
import TailwindcssLogo from "../../../public/logos/tailwind-css-2.svg";
import NextjsLogo from "../../../public/logos/next-js.svg";
import EmblaCarousel from "../Carousel/carousel";

const WorkSection = () => {
  const projects = [
    {
      title: "Recruitment App",
      description:
        "A comprehensive platform for managing job postings and candidate applications.",
      logo: JavascriptLogo,
    },
    {
      title: "Tourism App",
      description:
        "An app that provides users with information about tourist attractions and local experiences.",
      logo: NextjsLogo,
    },
    {
      title: "Admin Panel",
      description:
        "A web-based interface for managing various aspects of a business or organization.",
      logo: HtmlLogo,
    },
    {
      title: "Bank App",
      description:
        "A mobile application for banking services, including account management and transactions.",
      logo: CssLogo,
    },
    {
      title: "E-commerce Platform",
      description:
        "An online store offering a wide range of products with secure payment processing.",
      logo: TypescriptLogo,
    },
      {
      title: "Recruitment App",
      description:
        "A comprehensive platform for managing job postings and candidate applications.",
      logo: JavascriptLogo,
    },
    {
      title: "Tourism App",
      description:
        "An app that provides users with information about tourist attractions and local experiences.",
      logo: NextjsLogo,
    },
    {
      title: "Healthcare Management System",
      description:
        "A system for healthcare providers to manage patient records, appointments, and billing.",
      logo: GraphqlLogo,
    },
  ];
  return (
    <section
      id="works"
      className="md:mx-[120px] px-[16px] md:px-0 md:pt-[110px] pt-[62px] pb-10"
    >
     <h3 className="uppercase font-oswald font-semibold text-white text-xl md:mb-5 mb-3">
        My Works
      </h3>

     <div>
        <p className="font-satoshi text-white md:text-lg text-md mb-3 md:mb-6 max-w-[800px]">
        I'm Kalyan Kumar Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed euismod, nunc ac bibendum ullamcorper, sapien diam cursus
        nibh, nec fermentum velit erat vel nisi. Mauris vitae semper lacus.
      </p>
     </div>

      <div className="flex md:gap-4  gap-2 justify-between  w-full flex-wrap ">
        {projects.map((item) => (
        <div class=" bg-white text-primarytext-600 cursor-pointer  md:w-[300px] rounded-lg p-5 hover:shadow-white hover:shadow-md">
         
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight ">
                {item.title}
              </h5>
            </a>
            <p class="mb-3 font-normal">
              {item.description}
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center"
            >
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
      
      ))}
      </div>
    </section>
  );
};

export default WorkSection;
