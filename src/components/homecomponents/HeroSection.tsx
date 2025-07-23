'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setShowVideo(true), 800);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pause/play video based on visibility
  useEffect(() => {
    if (!videoRef.current) return;
    const videoEl = videoRef.current;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoEl.play();
        } else {
          videoEl.pause();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(videoEl);
    return () => observer.disconnect();
  }, [showVideo]);

  // When video ends
  const handleVideoEnd = () => {
    setShowVideo(false);
    setFadeOut(false);
  };

  // Scale effect on scroll
  const scale = Math.max(0.8, 1 - scrollY / 1000); // min 0.8

  return (
    <div className="relative overflow-hidden">
      <div className="w-full flex justify-center">
        {/* Gambar */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            zIndex: 2,
            opacity: showVideo ? 0 : fadeOut ? 0 : 1,
            transition: 'opacity 0.8s'
          }}
        >
          <Image
            src="/images/landingpage.jpg"
            alt="Landing Page"
            width={1600}
            height={900}
            className="w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[700px] object-cover transition-all duration-1000 ease-in-out"
            priority
          />
        </div>

        {/* Video */}
        <div
          style={{
            width: '100%',
            opacity: showVideo ? 1 : 0,
            transition: 'opacity 0.8s',
            zIndex: 3,
            transform: `scale(${scale})`,
            transitionProperty: 'opacity, transform',
            transitionDuration: '0.8s',
          }}
        >
          <video
            ref={videoRef}
            src="/video/BEEHIVE ENGLISH.mp4"
            controls
            autoPlay
            playsInline
            onEnded={handleVideoEnd}
            className="w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[700px] object-cover rounded-lg shadow-lg"
            style={{ maxWidth: 1600 }}
          />
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 md:bottom-10 right-6 md:right-10 bg-white rounded-full p-2 shadow-lg z-50 animate-pulse hover:animate-none transition-all duration-300 hover:scale-110 hover:shadow-xl">
        <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
          <Image
            src="/images/whatsapp.logo.png"
            alt="WhatsApp Logo"
            width={40}
            height={40}
            className="object-contain hover:scale-110 transition-transform duration-200 sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]"
          />
        </a>
      </div>

      {/* TKDN Logo + Icon 19 */}
      <div
        className="absolute top-20 right-4 sm:top-20 sm:right-10 md:top-[100px] md:right-[50px] lg:top-[130px] lg:right-[100px] z-20 hover:animate-none transition-all duration-300 hover:scale-110 flex flex-row items-center gap-2"
        style={{ opacity: showVideo ? 0 : fadeOut ? 0 : 1, transition: 'opacity 0.8s' }}
      >
        <Image
          src="/images/tkdn.png"
          alt="TKDN Logo"
          width={50}
          height={30}
          className="object-contain sm:w-[100px] sm:h-[80px] md:w-[120px] md:h-[100px] lg:w-[150px] lg:h-[120px] mt-4"
        />
        <Image
          src="/icons/19.png"
          alt="Icon 19"
          width={50}
          height={30}
          className="object-contain sm:w-[100px] sm:h-[80px] md:w-[120px] md:h-[100px] lg:w-[150px] lg:h-[120px] mt-4"
        />
      </div>

      {/* Text Content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center w-full px-4 z-20 sm:items-start sm:text-left sm:px-12"
        style={{ opacity: showVideo ? 0 : fadeOut ? 0 : 1, transition: 'opacity 0.8s' }}
      >
        <h1 className="text-1xl sm:text-3xl md:text-3xl md:mb-5 lg:text-5xl font-extrabold hover:scale-105 transition-transform duration-300" style={{ color: '#1e3a8a' }}>
          Authentically Made in Indonesia
        </h1>
        <p className=" sm:mt-2 text-base sm:text-lg md:mb-90 md:text-xl lg:text-2xl mt-30 font-semibold hover:scale-105 transition-transform duration-300" style={{ color: '#1e3a8a', WebkitTextStroke: '1px light-blue' }}>
          41,19% Domestic Component Level
        </p>
      </div>
    </div>
  );
}