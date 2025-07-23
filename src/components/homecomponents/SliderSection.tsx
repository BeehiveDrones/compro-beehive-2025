'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'; // Tambahkan import ini

interface SliderItem {
  title: string;
  description: string;
  image: string; // Tambahkan properti image
}

const SLIDER_ITEMS: SliderItem[] = [
  { title: 'Aerial Analysis', description: 'Beehive Drones offers comperhensive Aerial Analysis services....', image: '/slider/1.png' },
  { title: 'Drone Sprayer', description: 'Scheduled Maintenance', image: '/slider/2.png' },
  { title: 'Aerial Analysis', description: 'Beehive Drones offers comperhensive Aerial Analysis services....', image: '/slider/1.png' },
  // { title: 'Card D', description: 'Deskripsi card D', image: '/slider/card-d.png' },
  // { title: 'Card E', description: 'Deskripsi card E', image: '/slider/card-e.png' },
  // { title: 'Card F', description: 'Deskripsi card F', image: '/slider/card-f.png' },
];

export default function SliderSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [spread, setSpread] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const itemsPerView = 3;
  const totalItems = SLIDER_ITEMS.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, 5000); //  5000 ms (5 detik)
    return () => clearInterval(interval);
  }, [totalItems]);

  // Intersection Observer sederhana dengan scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Jika bagian tengah slider ada di tengah viewport
      if (rect.top < windowHeight / 2 && rect.bottom > windowHeight / 2) {
        setSpread(true);
      } else {
        setSpread(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // cek pertama kali
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Looping: ambil 3 card berurutan, looping ke awal jika lewat batas
  const visibleItems = Array.from({ length: itemsPerView }, (_, i) =>
    SLIDER_ITEMS[(currentIndex + i) % totalItems]
  );

  return (
    <div ref={sliderRef} className="w-full flex flex-col items-center mt-16 px-4">
      <div className="relative w-full flex justify-center" style={{ minHeight: 340 }}>
        <div className="flex gap-6 transition-all duration-500 w-full justify-center items-center relative">
          {visibleItems.map((item, index) => {
            let transformStyle = '';
            if (!spread) {
              transformStyle = 'translateX(0) scale(1)';
            } else {
              if (index === 0) transformStyle = 'translateX(-120%) scale(1)';
              else if (index === 1) transformStyle = 'translateX(0) scale(1.1)';
              else if (index === 2) transformStyle = 'translateX(120%) scale(1)';
            }
            return (
              <div
                key={index}
                className="w-[250px] h-[320px] bg-gray-200 p-4 text-center shadow-md flex flex-col justify-center items-center flex-shrink-0 
                           hover:shadow-xl hover:scale-105 transition-all duration-500 hover:bg-gray-100 group relative overflow-hidden"
                style={{
                  zIndex: index === 1 ? 10 : 5,
                  transform: transformStyle,
                  transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)',
                  position: 'absolute',
                  left: '50%',
                  top: 0,
                  marginLeft: '-125px',
                }}
              >
                {/* Background image with 50% opacity */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-50 absolute inset-0"
                  style={{ zIndex: 1 }}
                />
                {/* Card content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-black group-hover:text-[#1e3a8a] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-blue-800 leading-relaxed group-hover:scale-105 transition-transform duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] hover:scale-105 transition-transform duration-300">
          Partners & Clients
        </h2>
      </div>
    </div>
  );
}
