import Image from "next/image";
import React from "react";
import profileImg from "@/assets/profile.jpg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="md:mx-[120px] px-[16px] md:px-0 md:pt-[110px] pt-[62px]"
    >
      <h3 className="uppercase font-oswald font-semibold text-white text-lg md:mb-5 mb-3">
        About me
      </h3>

      <div className="custom-about-styles flex md:flex-row flex-col gap-2  text-black bg-white md:p-10 p-5 rounded-lg">
        <div className="custom-about-image w-full">
          <Image
            src={profileImg}
            alt="profile image"
            className="rounded-lg object-cover w-full "
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
              Kalyan Kumar Avula
            </h1>
            <h3 className="mb-4 md:mb-6 font-oswald text-lg md:text-[24px] font-semibold text-primarytext-400">
              Software Web Developer
            </h3>
            <p className="font-satoshi text-primarytext-600 md:text-lg text-md  mb-3 md:mb-6">
              I'm Kalyan Kumar Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed euismod, nunc ac bibendum ullamcorper, sapien
              diam cursus nibh, nec fermentum velit erat vel nisi. Mauris vitae
              semper lacus.
            </p>

            <p className=" my-1  text-primarytext-500 md:text-lg text-md ">
              <span className="font-semibold">Experince: </span>
              1+ experince as a Developer
            </p>
            <p className=" my-1 md:my-2 md:text-lg text-md  text-primarytext-500">
              <span className="font-semibold">Hobbies: </span>
              Photography, Coding, and Traveling
            </p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap mt-4 justify-center gap-5 items-center bottom-0">
            <button
              type="button"
              className="00 px-10 py-2 bg-gray-500 md:text-md text-sm font-santoshi transition ease-in-out hover:scale-105 text-white rounded-md"
            >
              Resume
            </button>
            <button
              type="button"
              className="00 px-10 py-2 md:text-md text-sm transition ease-in-out hover:scale-105 bg-gray-500 font-santoshi text-white rounded-md"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
