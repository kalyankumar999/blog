"use client";
import React from "react";

import {workData} from './data'
import Link from "next/link";

const WorkSection = () => {
  
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
         {workData.overallWorkDescription}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
        {workData.projects.map((item) => (
          <Link href={`/works/${item.id}`} key={item.id}>
            <div class=" bg-white text-primarytext-600 cursor-pointer  w-full h-48 rounded-lg p-5 hover:shadow-white hover:shadow-md">
              
                <span class="mb-2 text-2xl font-bold tracking-tight font-oswald ">
                  {item.title}
                </span>
              
              <p class="mb-3 font-normal font-satoshi">{item.description}</p>
              <div className="flex items-center">
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
             </div>
               
           
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
