'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { articles } from '@/data/articlesData'; 

// Ambil 5 artikel dengan id terbesar (terbaru)
const UPDATES = [...articles]
  .sort((a, b) => b.id - a.id)
  .slice(0, 5)
  .map(article => ({
    title: article.title,
    description: article.content[0], 
    image: article.images[0],        // ambil gambar pertama
    link: `/articles/${article.id}`  // link detail artikel (ubah sesuai kebutuhan)
  }));

export default function UpdatesSection() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section 
      id="updates-section"
      className={`container mx-auto px-4 mt-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h2 className="text-3xl font-exo2 md:text-4xl font-bold text-[#1e3a8a] mb-6 transition-transform duration-300">
        Our Updates
      </h2>
      <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/3 bg-gray-100 h-[250px] flex items-center justify-center rounded-lg hover:bg-gray-200 transition-colors duration-300 group relative">
            <Image 
              src={item.image} 
              alt="Update Image" 
              fill
              className="object-cover rounded group-hover:scale-105 transition-transform duration-300"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </div>
          <div className="w-full md:w-2/3">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-2xl font-exo2 font-bold text-[#1e3a8a] mb-4 hover:scale-105 transition-transform duration-300 hover:underline"
            >
              {item.title}
            </a>
            <p
              className="text-gray-700 font-open-sans leading-relaxed text-justify hover:text-gray-900 transition-colors duration-300"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        </div>
        <div className="flex justify-center mt-6 gap-8">
          <button 
            onClick={() => setIndex(index > 0 ? index - 1 : index)} 
            className="text-[#1e3a8a] hover:bg-gray-100 p-2 rounded-full border border-[#1e3a8a] hover:scale-110 transition-all duration-300 hover:shadow-md md:mr-140 lg:mr-200 xl:mr-280 mr-40"
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
