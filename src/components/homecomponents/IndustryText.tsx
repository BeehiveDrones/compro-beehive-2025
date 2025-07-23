'use client';

import { useState, useEffect } from 'react';

export default function IndustryText() {
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById('industry-text');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mx-auto px-4 text-center mt-16">
      <h2 
        id="industry-text"
        className={`text-3xl md:text-4xl font-bold text-[#1e3a8a] hover:scale-105 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        Beehive Drones Across Industries
      </h2>
    </div>
  );
}
