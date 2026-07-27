"use client";
import React from "react";

import {workData} from './data'
import Link from "next/link";

const WorkSection = () => {
  
  return (
    <section
      id="works"
      className="md:mx-[120px] px-[16px] md:px-0 md:pt-[110px] pt-[62px] pb-10 animate-slide-in-up"
    >
      <h3 className="uppercase font-oswald font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-xl md:mb-5 mb-3 md:text-3xl">
        My Works
      </h3>

      <div>
        <p className="font-satoshi text-gray-200 md:text-lg text-md mb-3 md:mb-6 max-w-[800px] leading-relaxed">
         {workData.overallWorkDescription}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workData.projects.map((item, idx) => (
          <Link href={`/works/${item.id}`} key={item.id}>
            <div className="glass-morphism-neon rounded-xl px-6 py-6 hover-lift group cursor-pointer animate-fade-in-scale h-full min-h-[280px] flex flex-col justify-between" style={{animationDelay: `${idx * 0.1}s`}}>
              <div>
                <span className="mb-3 text-xl md:text-2xl font-bold tracking-tight font-oswald text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 line-clamp-2">
                  {item.title}
                </span>
                
                <p className="mt-3 mb-4 font-normal font-satoshi text-gray-200 group-hover:text-white transition-colors text-sm md:text-base line-clamp-3">{item.description}</p>
              </div>
              <div className="flex items-center text-pink-300 group-hover:text-cyan-300 transition-colors duration-300 pt-2">
                Read more
                <svg
                  className="rtl:rotate-180 w-4 h-4 ms-2 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
