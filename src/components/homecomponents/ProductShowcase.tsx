'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Product {
  title: string;
  desc: string;
  video: string;
  image: string;
}

const PRODUCTS: Record<number, Product> = {
  1: {
    title: 'BVD-V25',
    desc: 'Best Used for Surveillance, Logistics',
    video: '4m3O-qFvLJU',
    image: 'product1.jpg',
  },
  2: {
    title: 'BVD-F11',
    desc: 'Best Used for Mapping and Surveillance',
    video: 'jLUd3p8PEME',
    image: 'product2.jpg',
  },
  3: {
    title: 'BVD-V25Mapping',
    desc: 'Best Used for Mapping and Surveillance',
    video: 'T0yzT0F-kBY',
    image: 'product3.jpg',
  },
  4: {
    title: 'BVD-M16A',
    desc: 'Best Used for Inspection and Surveillance',
    video: '6eocn3ESQd8',
    image: 'product4.png',
  },
};

export default function ProductShowcase() {
  const [visibleCards, setVisibleCards] = useState(new Set<string>());
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Handle scroll effect untuk scale
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Hitung posisi relatif section terhadap viewport
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hitung scale berdasarkan scroll progress
  // Scale akan berkurang dari 1 menjadi 0.85 saat di-scroll
  const scale = Math.max(0.85, 1 - (scrollY * 0.15));

  return (
    <div 
      ref={sectionRef}
      className="container mx-auto px-4"
      style={{
        transform: `scale(${scale})`,
        transition: 'transform 0.1s ease-out',
        transformOrigin: 'center center'
      }}
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-exo2 font-bold text-[#1e3a8a] mt-10 hover:scale-105 transition-transform duration-300">
          REDEFINING THE POSSIBILITIES
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-8 justify-items-center mt-10">
        {[1, 2, 3, 4].map((id) => (
          <ProductCard key={id} id={id} isVisible={visibleCards.has(`product-${id}`)} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ id, isVisible }: { id: number; isVisible: boolean }) {
  const product = PRODUCTS[id];
  return (
    <div 
      id={`product-${id}`}
      className={`product-card w-full relative overflow-hidden rounded-lg shadow-lg transition-all duration-700 hover:shadow-2xl hover:scale-105 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 text-white">
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-exo2 font-semibold mb-1 ml-4">{product.title}</h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-open-sans mb-3 ml-4">{product.desc}</p>
        </div>
        <motion.a
          href={`https://www.youtube.com/watch?v=${product.video}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ 
            backgroundColor: "#134280",
            color: "white",
            x: 5
          }}
          whileTap={{ scale: 0.95 }}
          className="text-xs sm:text-sm md:text-base lg:text-lg inline-flex items-center ml-4 gap-2 px-4 py-2 bg-white font-exo2 text-[#134280] font-semibold rounded transition w-fit"
        >
          Watch video
          <motion.svg 
            className="w-4 h-4 fill-current" 
            viewBox="0 0 20 20"
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <path d="M6 4l10 6-10 6V4z" />
          </motion.svg>
        </motion.a>
      </div>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      <Image 
        src={`/images/${product.image}`} 
        alt={`Drone Image ${id}`} 
        width={1000} 
        height={500} 
        className="w-full h-auto object-cover shadow-lg transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  );
}