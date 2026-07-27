"use client";

import Image from "next/image";
import React from "react";

import Pic1 from "../../assets/pic1.jpeg";
import Pic2 from "../../assets/pic2.jpeg";
import Pic3 from "../../assets/pic3.jpeg";
import Pic7 from "../../assets/pic7.jpeg";
import Pic5 from "../../assets/pic5.jpeg";
import Pic6 from "../../assets/kalyan.jpg";

const GallerySection = () => {
  return (
    <section
      id="gallery"
      className="md:mx-[120px] px-[16px] md:px-0 md:pt-[110px] pt-[62px] pb-10 flex justify-center flex-col items-center animate-slide-in-up"
    >
      <h3 className="uppercase font-oswald font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 md:text-xl text-lg md:mb-5 mb-3 md:text-3xl">
        Gallery
      </h3>
      <div className="w-full max-w-5xl md:p-5 pb-10 mx-auto md:gap-5 gap-2 columns-3 md:space-y-3 space-y-2">
        {[Pic1, Pic2, Pic3, Pic5, Pic7, Pic6].map((pic, idx) => (
          <div 
            key={idx}
            className="glass-morphism rounded-lg overflow-hidden hover-lift group cursor-pointer"
          >
            <Image 
              src={pic} 
              alt={`Gallery Image ${idx + 1}`}
              className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
