"use client";

import Image from "next/image";
import React from "react";
import ProfileImage from "../../assets/profile.jpg";
import Dog3 from "../../assets/dog-3.jpg";
import Dog4 from "../../assets/dog-4.jpg";

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
        <Image src={Dog4} alt="Image 1" />
        <Image src={ProfileImage} alt="Image 1" />
        <Image src={Dog3} alt="Image 1" />
        <Image src={Dog4} alt="Image 1" />
        <Image src={Dog4} alt="Image 1" />
        <Image src={ProfileImage} alt="Image 1" />
      </div>
    </section>
  );
};

export default GallerySection;
