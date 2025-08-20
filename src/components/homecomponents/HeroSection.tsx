'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Ganti array ini dengan gambar yang kamu inginkan
  const slides = [
    "/images/landing.png",
    "/images/banner2.png",
    "/images/banner3.png",
    "/images/banner4.png",
    "/images/banner5.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scale effect on scroll
  const scale = Math.max(0.8, 1 - scrollY / 1000); // min 0.8

  return (
    <div className="relative overflow-hidden">
      <div className="w-full flex justify-center ">
        {/* Carousel Gambar */}
        <div
          style={{
            width: '100%',
            zIndex: 2,
            transition: 'transform 0.8s',
            transform: `scale(${scale})`,
          }}
        >
          <Image
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            width={1000}
            height={900}
            className="w-full h-[300px] sm:h-[400px]  md:h-[400px] lg:h-[700px]  object-cover transition-all duration-1000 ease-in-out rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 md:bottom-10 right-6 md:right-10 bg-white rounded-full p-2 shadow-lg z-50 animate-pulse hover:animate-none transition-all duration-300 hover:scale-110 hover:shadow-xl">
        <a href="https://wa.me/+62818999771" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
          <Image
            src="/images/whatsapp.logo.png"
            alt="WhatsApp Logo"
            width={40}
            height={40}
            className="object-contain hover:scale-110 transition-transform duration-200 sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]"
          />
        </a>
      </div>

      {/* TKDN Logo + Icon 19
      <div
        className="absolute top-20 right-4 sm:top-20 sm:right-10 md:top-[80px] md:right-[50px] xl:top-[30px] lg:mt-30 lg:right-[100px] z-20 hover:animate-none transition-all duration-300 hover:scale-110 flex flex-row items-center gap-2"
      >
        <Image
          src="/images/tkdn.png"
          alt="TKDN Logo"
          width={50}
          height={30}
          className="object-contain sm:w-[100px] sm:h-[80px]  lg:w-[150px] lg:h-[120px] mt-4"
        />
        <Image
          src="/icons/19.png"
          alt="Icon 19"
          width={50}
          height={30}
          className="object-contain sm:w-[100px] sm:h-[80px]  lg:w-[150px] lg:h-[120px] mt-4"
        />
      </div> */}

      {/* Text Content */}
      {/* <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center w-full px-4 z-20 sm:items-start sm:text-left sm:px-12 "
      >
        <h1 className="text-1xl sm:text-3xl md:text-3xl md:mb-5 lg:text-5xl font-extrabold hover:scale-105 transition-transform duration-300 md:mt-50 lg:mt-20" style={{ color: '#1e3a8a' }}>
          Authentically Made in Indonesia
        </h1>
        <p className=" sm:mt-2 text-base sm:text-lg md:mb-90 md:text-xl lg:text-2xl mt-30 font-semibold hover:scale-105 transition-transform duration-300" style={{ color: '#1e3a8a', WebkitTextStroke: '1px light-blue' }}>
          41,19% Domestic Component Level
        </p>
      </div> */}
    </div>
  );
}