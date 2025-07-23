'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const LOGOS = [
  '/logos/Group 19.png', '/logos/Group 20.png', '/logos/Group 21.png', '/logos/Group 22.png', '/logos/Group 32.png',
  '/logos/Group 23.png', '/logos/Group 24.png', '/logos/Group 25.png', '/logos/Group 31.png', '/logos/Group 33.png',
  '/logos/Group 26.png', '/logos/Group 27.png', '/logos/Group 28.png', '/logos/Group 29.png', '/logos/Group 30.png',
  '/logos/Group 34.png', '/logos/Group 35.png', '/logos/Group 36.png', '/logos/Group 37.png', '/logos/Group 38.png',
  '/logos/Group 40.png', '/logos/Group 41.png', '/logos/Group 42.png', '/logos/Group 43.png', '/logos/Group 44.png',
  '/logos/Group 45.png', '/logos/Group 46.png', '/logos/Group 47.png', '/logos/Group 48.png', '/logos/Group 63.png',
  '/logos/Group 49.png', '/logos/Group 50.png', '/logos/Group 51.png', '/logos/Group 53.png', '/logos/Group 54.png',
  '/logos/Group 55.png'
];

export default function LogoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 5,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 8, spacing: 16 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 10, spacing: 16 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      clearInterval(intervalRef.current!);
      intervalRef.current = setInterval(() => {
        if (slider) {
          slider.next();
        }
      }, 3000);
    },
  });

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goToSlide = (slideIndex: number) => {
    instanceRef.current?.moveToIdx(slideIndex);
  };

  const getDotsCount = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      const logosLength = LOGOS.length;
      let perView = 5;
      if (width >= 1024) perView = 10;
      else if (width >= 768) perView = 8;
      return Math.max(1, Math.ceil(logosLength / perView));
    }
    return 3;
  };

  const dotsCount = getDotsCount();

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="flex flex-col items-center">
        <div ref={sliderRef} className="keen-slider w-full">
          {LOGOS.map((logo, index) => (
            <div key={index} className="keen-slider__slide flex justify-center items-center">
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center hover:scale-110 transition-all duration-300 group cursor-pointer">
                {/* <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full drop-shadow-md group-hover:drop-shadow-lg transition-all duration-300"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="white" className="group-hover:fill-blue-50 transition-colors duration-300" />
                </svg> */}
                <Image
                  src={logo}
                  alt={`Logo ${index}`}
                  width={80}
                  height={80}
                  className="relative z-10 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: dotsCount }).map((_, index) => {
            const isActive = Math.floor(currentSlide / Math.ceil(LOGOS.length / dotsCount)) === index;
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full ${isActive ? 'bg-gray-400' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
