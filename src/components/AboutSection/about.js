import Image from "next/image";
import React from "react";
import profileImg from "../../assets/kalyan.jpg";
import { aboutData } from "./data";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="md:mx-[120px] px-[16px] md:px-0 md:pt-[110px] pt-[62px] animate-slide-in-up"
    >
      <h3 className="uppercase font-oswald font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-lg md:mb-5 mb-3 text-2xl md:text-3xl">
        About me
      </h3>

      <div className="glass-morphism-vibrant md:p-10 p-5 rounded-2xl hover-lift">
        <div className="flex md:flex-row flex-col gap-8">
          <div className="flex-1">
            <Image
              src={profileImg}
              alt="profile image"
              className="rounded-xl object-cover w-full max-h-[450px] shadow-2xl hover:shadow-purple-500/50 transition-shadow duration-300"
            />
          </div>
          <div className="flex-1 flex justify-between flex-col">
            <div className="animate-fade-in-scale">
              <h2 className="text-cyan-300 md:text-lg text-md mb-2 md:mb-6 font-satoshi font-light">
                Hello everyone I'm
              </h2>
              <h1 className="uppercase font-oswald font-bold md:text-[40px] text-white mb-2 text-3xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {aboutData.name}
              </h1>
              <h3 className="mb-4 md:mb-6 font-oswald text-lg md:text-[24px] font-semibold text-pink-300">
                {aboutData.title}
              </h3>
              <p className="font-satoshi text-gray-200 md:text-lg text-md mb-3 md:mb-6 leading-relaxed">
                {aboutData.description}
              </p>

              <div className="space-y-2">
                <p className="text-cyan-200 md:text-lg text-md">
                  <span className="font-semibold text-purple-300">Experience: </span>
                  {aboutData.experience}
                </p>
                <p className="md:text-lg text-md text-pink-200">
                  <span className="font-semibold text-purple-300">Hobbies: </span>
                  {aboutData.hobbies}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap mt-8 justify-center gap-5 items-center bottom-0">
              <a href="/kalyanresume.pdf" target="_blank" rel="noopener noreferrer">
                <button
                  type="button"
                  className="px-10 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 md:text-md text-sm font-semibold text-white rounded-lg transition-all duration-300 ease-in-out hover:from-cyan-600 hover:to-purple-700 hover:shadow-lg hover:shadow-purple-500/50 active:transform active:scale-95"
                >
                  Resume
                </button>
              </a>
              <Link href="#connect">
                <button
                  type="button"
                  className="px-10 py-3 md:text-md text-sm bg-gradient-to-r from-pink-500 to-purple-600 font-semibold text-white rounded-lg transition-all duration-300 ease-in-out hover:from-pink-600 hover:to-purple-700 hover:shadow-lg hover:shadow-pink-500/50 active:transform active:scale-95"
                >
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
