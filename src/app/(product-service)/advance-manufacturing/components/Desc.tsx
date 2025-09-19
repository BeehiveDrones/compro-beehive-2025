'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Desc() {
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

    const element = document.getElementById('desc-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="desc-section"
      className="px-4 sm:px-6 lg:px-20 py-12 bg-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-exo2 font-bold text-[#1e3a8a] mb-6 md:mb-8"
      >
        Advanced Manufacturing
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="text-[#1e3a8a] font-open-sans mx-auto space-y-4 md:space-y-6"
      >
        <motion.p
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          At Beehive Drones, drone advanced manufacturing is carried out in-house by professional experts, ensuring every process meets ISO 9001:2015 international quality standards. Beyond meeting global benchmarks, we also take pride in maintaining Indonesian local content (TKDN), reflecting our commitment to both world-class excellence and national value creation.
        </motion.p>
      </motion.div>
    </section>
  );
}
