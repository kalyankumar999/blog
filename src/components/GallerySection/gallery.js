"use client";

import Image from "next/image";
import React from "react";

import Pic1 from "../../assets/pic1.jpeg";
import Pic2 from "../../assets/pic2.jpeg";
import Pic3 from "../../assets/pic3.jpeg";
import Pic7 from "../../assets/pic7.jpeg";
import Pic5 from "../../assets/pic5.jpeg";
import Pic6 from "../../assets/pic6.jpeg";

const GallerySection = () => {
  return (
    <section
      id="gallery"
      className="md:mx-[120px] px-[16px] md:px-0 md:pt-[110px] pt-[62px] pb-10 flex justify-center flex-col items-center"
    >
      <h3 className="uppercase font-oswald font-semibold text-white md:text-xl text-lg md:mb-5 mb-3">
        Gallery
      </h3>
      <div className="w-full max-w-5xl md:p-5 pb-10 mx-auto md:gap-5 gap-2 columns-3 md:space-y-3 space-y-2">
        <Image src={Pic1} alt="Image 1" />
        <Image src={Pic2} alt="Image 1" />
        <Image src={Pic3} alt="Image 1" />
        <Image src={Pic5} alt="Image 1" />
        <Image src={Pic7} alt="Image 1" />
        <Image src={Pic6} alt="Image 1" />
      </div>
    </section>
  );
};

export default GallerySection;
