import Image from "next/image";
import React from "react";
import profileImg from "../../assets/profile.jpeg";
import { aboutData } from "./data";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="md:mx-[120px] px-[16px] md:px-0 md:pt-[110px] pt-[62px] "
    >
      <h3 className="uppercase font-oswald font-semibold text-white text-lg md:mb-5 mb-3">
        About me
      </h3>

      <div className="custom-about-styles flex md:flex-row flex-col gap-2  text-black bg-white md:p-10 p-5 rounded-lg">
        <div className="custom-about-image w-full ">
          <Image
            src={profileImg}
            alt="profile image"
            className="rounded-lg object-cover w-full max-h-[450px]"
          />
        </div>
        <div className=" custom-about-info md:pl-4 flex justify-between flex-col">
          <div>
            {/* <h3 className="text-lg font-semibold md:mb-4  mb-2 font-oswald">
            About Me
          </h3> */}
            <h2 className="font-satoshi text-primarytext-500 md:text-lg text-md  mb-2 md:mb-6">
              Hello everyone I'm
            </h2>
            <h1 className="uppercase font-oswald font-bold md:text-[40px] text-primarytext-700 mb-2  text-2xl">
              {aboutData.name}
            </h1>
            <h3 className="mb-4 md:mb-6 font-oswald text-lg md:text-[24px] font-semibold text-primarytext-400">
              {aboutData.title}
            </h3>
            <p className="font-satoshi text-primarytext-600 md:text-lg text-md  mb-3 md:mb-6">
              {aboutData.description}
            </p>

            <p className=" my-1  text-primarytext-500 md:text-lg text-md ">
              <span className="font-semibold">Experince: </span>
              {aboutData.experience}
            </p>
            <p className=" my-1 md:my-2 md:text-lg text-md  text-primarytext-500">
              <span className="font-semibold">Hobbies: </span>
              {aboutData.hobbies}
            </p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap mt-4 justify-center gap-5 items-center bottom-0">
            <a href="/kalyan-resume.pdf" target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="px-10 py-2 bg-gray-500 md:text-md text-sm font-santoshi text-white rounded-md transition-all duration-300 ease-in-out hover:bg-gray-600 hover:shadow-lg active:transform active:scale-95"
              >
                Resume
              </button>
            </a>
            <Link href="#connect">
              <button
                type="button"
                className="px-10 py-2 md:text-md text-sm bg-gray-500 font-santoshi text-white rounded-md transition-all duration-300 ease-in-out hover:bg-gray-600 hover:shadow-lg active:transform active:scale-95"
              >
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
