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
import Link from "next/link";

const WorkSection = () => {
  const projects = [
    {
      id: 1,
      title: "Recruitment App",
      description:
        "A comprehensive platform for managing job postings and candidate applications.",
      logo: JavascriptLogo,
    },
    {
      id: 2,
      title: "Tourism App",
      description:
        "An app that provides users with information about tourist attractions and local experiences.",
      logo: NextjsLogo,
    },
    {
      id: 3,
      title: "Admin Panel",
      description:
        "A web-based interface for managing various aspects of a business or organization.",
      logo: HtmlLogo,
    },
    {
      id: 4,
      title: "Bank App",
      description:
        "A mobile application for banking services, including account management and transactions.",
      logo: CssLogo,
    },
    {
      id: 5,
      title: "Healthcare Management ",
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
        {projects.map((item) => (
          <Link href={`/works/${item.id}`} key={item.id}>
            <div class=" bg-white text-primarytext-600 cursor-pointer  w-full h-48 rounded-lg p-5 hover:shadow-white hover:shadow-md">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight font-oswald ">
                  {item.title}
                </h5>
              </a>
              <p class="mb-3 font-normal font-satoshi">{item.description}</p>
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
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
