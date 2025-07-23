'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


interface Update {
  title: string;
  description: string;
  image: string;
  link : string;
}

const UPDATES: Update[] = [
  {
    title: 'TKDN: Indonesia’s Bold Push for Local Industry – Golden Opportunity or Hidden Burden?',
    description: 'What if Indonesia could power its industries with more local components—cutting reliance on imports, boosting jobs, and strengthening its economy? That’s the dream behind TKDN, or the Domestic Component Level policy.',
    image: '/our-updates/1.png',
    link: 'https://beehivedrones.com/blog/tkdn-indonesias-bold-push-for-local-industry-golden-opportunity-or-hidden-burden'
  },
    {
    title: 'Beehive Drones Brings Home Channel Excellence Award at ASEAN-India Scale Hub 2025',
    description: 'Beehive Drones and Lumbung Muncul Sejahtera, two companies under the Aero Versum Group, proudly participated in this international initiative — highlighting their integrated approach to drone technology and data analytics for data-driven decision-making.',
    image: '/our-updates/2.png',
    link: 'https://beehivedrones.com/blog/beehive-drones-brings-home-channel-excellence-award-at-asean-india-scale-hub-2025'
  },
];

export default function UpdatesSection() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  // videoVisible state dihapus karena tidak digunakan
  const item = UPDATES[index];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('updates-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Video intersection observer
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // setVideoVisible(true); // dihapus
            videoEl.play();
          } else {
            // setVideoVisible(false); // dihapus
            videoEl.pause();
          }
        });
      },
      { threshold: 0.5 }
    );
    videoObserver.observe(videoEl);
    return () => videoObserver.disconnect();
  }, []);
  
  return (
    <section 
      id="updates-section"
      className={`container mx-auto px-4 mt-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6 transition-transform duration-300">
        Our Updates
      </h2>
      <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/3 bg-gray-100 h-[200px]  md:h-80 flex items-center justify-center rounded-lg hover:bg-gray-200 transition-colors duration-300 group relative">
            <Image 
              src={item.image} 
              alt="Update Image" 
              fill
              className="object-cover  rounded group-hover:scale-105 transition-transform duration-300"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </div>
          <div className="w-full md:w-2/3">
            <a
              href="https://beehivedrones.com/blog/tkdn-indonesias-bold-push-for-local-industry-golden-opportunity-or-hidden-burden"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-2xl font-bold text-[#1e3a8a] mb-4 hover:scale-105 transition-transform duration-300 hover:underline"
            >
              {item.title}
            </a>
            <p className="text-gray-700 leading-relaxed text-justify hover:text-gray-900 transition-colors duration-300">
              {item.description}
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-6 gap-320">
          <button 
            onClick={() => setIndex(index > 0 ? index - 1 : index)} 
            className="text-[#1e3a8a] hover:bg-gray-100 p-2 rounded-full border border-[#1e3a8a] hover:scale-110 transition-all duration-300 hover:shadow-md"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => setIndex(index < UPDATES.length - 1 ? index + 1 : index)} 
            className="text-[#1e3a8a] hover:bg-gray-100 p-2 rounded-full border border-[#1e3a8a] hover:scale-110 transition-all duration-300 hover:shadow-md"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

    </section>
  );
}
