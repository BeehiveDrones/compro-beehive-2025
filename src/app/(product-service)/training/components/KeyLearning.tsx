'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Types
interface OutcomeItem {
  text: string;
  icon: string;
}

interface OutcomeCategory {
  title: string;
  items: OutcomeItem[];
}

// Data
const OUTCOMES: OutcomeCategory[] = [
  {
    title: 'Drone Operation Training',
    items: [
      {
        text: 'Aerial data acquisition for mapping and analysis',
        icon: '/icons/1.png',
      },
      {
        text: 'Mastery of manual and autonomous drone piloting',
        icon: '/icons/2.png',
      },
      {
        text: 'Mission planning and automated flight execution',
        icon: '/icons/3.png',
      },
    ],
  },
  {
    title: 'Geospatial Data Processing & Analysis Training',
    items: [
      {
        text: 'Fundamental GIS concepts and spatial data processing',
        icon: '/icons/4.png',
      },
      {
        text: 'Mapping techniques and data visualization',
        icon: '/icons/2.png',
      },
      {
        text: 'Spatial analysis for decision-making',
        icon: '/icons/6.png',
      },
    ],
  },
];

export default function KeyLearning() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('key-learning-section');
      if (section) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.25) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section id="key-learning-section" className={`bg-[#F3F4F6] py-8 px-4 md:px-10 mt-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-2xl font-exo2 md:text-3xl lg:text-4xl font-bold text-center text-[#1e3a8a] mb-4">
          Key Learning Outcomes
        </h2>
      </section>
      <div className={`px-4 md:px-10 lg:px-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 lg:gap-40 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {OUTCOMES.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
            <h3 className="text-xl font-exo2 md:text-2xl font-bold text-center text-[#1e3a8a] mb-6 px-4">{category.title}</h3>
            <ul className="space-y-4 text-sm md:text-base text-[#1e3a8a]">
              {category.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-2 rounded-md hover:bg-gray-50 transition-colors duration-200">
                  <Image
                    src={item.icon}
                    alt="Item Icon"
                    width={24}
                    height={24}
                    className="object-contain mt-1 flex-shrink-0"
                  />
                  <span className='font-open-sans'>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <motion.a
          href="/contact-us"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(30, 58, 138, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className="text-sm font-exo2 sm:text-base bg-[#1e3a8a] text-white font-semibold shadow px-5 py-2 sm:px-6 sm:py-3 rounded hover:bg-[#163e7a] transition"
        >
          Consult With Us
        </motion.a>
      </div>
    </>
  );
}
