import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { NextButton, PrevButton, usePrevNextButtons } from './embla-buttons';
import Image from 'next/image';
import AutoScroll from 'embla-carousel-auto-scroll';
const EmblaCarousel = ({ skillData, options }) => {
  const customOptionsArray = [
  AutoScroll({
    playOnInit: true,
    speed: 0.7,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  }),
];
  const [emblaRef, emblaApi] = useEmblaCarousel(options, customOptionsArray);


  return (
    <div className="embla">
     <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {skillData?.map((item, index) => (
            <div className="embla__slide bg-white p-4 rounded-2xl" key={index}>
             <p className="text-center md:text-sm text-xs font-medium mb-1">{item.text}</p>
              <Image
                src={item.url}
                alt={item.text}
                className="w-full h-auto object-cover"
              />
              
            </div>
          ))}
        </div>
      </div>

      {/* <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        <button className="embla__play" onClick={toggleAutoplay} type="button">
          {isPlaying? 'Stop' : 'Start'}
        </button>
      </div> */}
    </div>
  );
};

export default EmblaCarousel;
