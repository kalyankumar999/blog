"use client";
import Image from "next/image";
import React from "react";
import projectImg from "../../../assets/project.webp";

import { projectData } from "../data";
import { toast } from "sonner";

const page = ({ params: { id } }) => {
  const project = projectData.find((proj) => proj.id === parseInt(id));

  console.log("kalyan", project);
  return (
    <div className="md:mx-[120px]  px-[16px] md:px-0 md:pt-4 pt-[30px] pb-10 text-white">
      <div className="flex md:flex-nowrap flex-wrap md:gap-10 md:mb-5">
        <div>
          <h2 className="uppercase font-semibold text-center mb-4 font-oswald md:text-xl text-lg">
            {project.title}
          </h2>
          <div className="relative group">
            <Image
              src={projectImg}
              alt=""
              className="w-[100%] rounded-lg object-cover md:max-w-[700px] md:min-h-[400px]"
            />
            <button
              onClick={() => toast.info("Internal Application")}
              className="absolute bottom-0 left-0 right-0 m-4 text-center rounded-full cursor-Buttonointer py-2 px-4 bg-white text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Live Demo
            </button>
            {/* <Link
              href="URL_TO_LIVE_DEMO"
              target="_blank"
              className="absolute bottom-0 left-0 right-0 m-4 text-center py-2 px-4 bg-white text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Live Demo
            </Link> */}
          </div>
        </div>
        <div className="mt-10">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-goal"
            >
              <path d="M12 13V2l8 4-8 4" />
              <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
              <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
            </svg>
            <h2 className="uppercase font-semibold font-oswald md:text-xl text-lg">
              Objectives
            </h2>
            <p>{project.objectives}</p>
          </div>
          <div className="my-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-library"
            >
              <path d="m16 6 4 14" />
              <path d="M12 6v14" />
              <path d="M8 8v12" />
              <path d="M4 4v16" />
            </svg>
            <h2 className="uppercase font-oswald md:text-xl text-lg font-semibold">
              Technologies used
            </h2>
            <ul className=" list-disc list-inside font-satoshi md:text-lg text-md">
              {project.technologies.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex gap-4 md:flex-nowrap flex-wrap">
        <div className=" w-full rounded-lg md:p-5 md:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-target"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
          <h2 className="uppercase font-semibold font-oswald md:text-xl text-lg">
            Summary
          </h2>

          <p className="mt-1  font-Satoshi md:text-lg text-md bg-white text-black max-h-[250px] overflow-scroll  font-md rounded-lg p-4 hover:shadow-white hover:shadow-md">
            {project.summary}
          </p>
        </div>

        <div className=" w-full rounded-lg md:p-5 md:p-3">
          <svg
            fill="#FFFF"
            width="20px"
            height="20px"
            viewBox="0 0 52 52"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M38.3,27.2A11.4,11.4,0,1,0,49.7,38.6,11.46,11.46,0,0,0,38.3,27.2Zm2,12.4a2.39,2.39,0,0,1-.9-.2l-4.3,4.3a1.39,1.39,0,0,1-.9.4,1,1,0,0,1-.9-.4,1.39,1.39,0,0,1,0-1.9l4.3-4.3a2.92,2.92,0,0,1-.2-.9,3.47,3.47,0,0,1,3.4-3.8,2.39,2.39,0,0,1,.9.2c.2,0,.2.2.1.3l-2,1.9a.28.28,0,0,0,0,.5L41.1,37a.38.38,0,0,0,.6,0l1.9-1.9c.1-.1.4-.1.4.1a3.71,3.71,0,0,1,.2.9A3.57,3.57,0,0,1,40.3,39.6Z" />
            <circle cx="21.7" cy="14.9" r="12.9" />
            <path d="M25.2,49.8c2.2,0,1-1.5,1-1.5h0a15.44,15.44,0,0,1-3.4-9.7,15,15,0,0,1,1.4-6.4.77.77,0,0,1,.2-.3c.7-1.4-.7-1.5-.7-1.5h0a12.1,12.1,0,0,0-1.9-.1A19.69,19.69,0,0,0,2.4,47.1c0,1,.3,2.8,3.4,2.8H24.9C25.1,49.8,25.1,49.8,25.2,49.8Z" />
          </svg>
          <h2 className="uppercase font-semibold font-oswald md:text-xl text-lg">
            Roles and Contributions
          </h2>
          <ol className="mt-1 list-disc list-outside max-h-[250px] overflow-y-auto font-Satoshi md:text-lg text-md bg-white text-black font-md rounded-lg p-4 hover:shadow-white hover:shadow-md">
            {project.contributions.map((item) => (
              <li className="ml-5 pl-2">{item}</li>
            ))}
          </ol>
        </div>
        <div className=" w-full rounded-lg md:p-5 md:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-sparkles"
          >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            <path d="M20 3v4" />
            <path d="M22 5h-4" />
            <path d="M4 17v2" />
            <path d="M5 18H3" />
          </svg>
          <h2 className="uppercase font-semibold font-oswald md:text-xl text-lg">
            Features
          </h2>
          <ol className="mt-1 list-disc list-outside max-h-[250px] overflow-y-auto font-Satoshi md:text-lg text-md bg-white text-black font-md rounded-lg p-4 hover:shadow-white hover:shadow-md">
            {project.features.map((item) => (
              <li className="ml-5 pl-2">{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default page;
