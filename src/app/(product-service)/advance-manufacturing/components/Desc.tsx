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
        className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6 md:mb-8"
      >
        Advanced Manufacturing
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="text-[#1e3a8a] mx-auto space-y-4 md:space-y-6"
      >
        <motion.p
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          We specialize in the design and manufacturing of high-quality drones,
          adhering to ISO 9001:2015 standards to ensure reliability, efficiency,
          and precision in every product. Our expertise covers a wide range of drone
          applications, including mapping, surveillance, inspection, logistics, and
          agricultural spraying.
        </motion.p>
        <motion.p
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          With a strong focus on innovation, we manufacture fixed-wing, VTOL,
          and multicopter drones, as well as custom drone solutions tailored to
          meet specific industry needs. Whether for aerial mapping, security
          monitoring, infrastructure inspection, or agricultural advancements,
          our drones are designed to deliver cutting-edge performance and
          data-driven insights.
        </motion.p>
        <motion.p
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Through continuous research and development, we strive to push the
          boundaries of drone technology, providing versatile and scalable
          solutions for various industries.
        </motion.p>
      </motion.div>
    </section>
  );
}
