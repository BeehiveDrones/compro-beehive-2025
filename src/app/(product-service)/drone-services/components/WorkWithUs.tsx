'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface WorkItem {
  title: string;
  icon: string;
  description: string;
}

const WORK_ITEMS: WorkItem[] = [
  {
    title: 'Business Success',
    icon: '/images/icon1.png',
    description: 'Our services will provide you with unique and world-leading insights to drive your company forward in innovation and business success.',
  },
  {
    title: 'Trusted',
    icon: '/images/icon2.png',
    description: 'We deliver clear and actionable information – always proficient, rigorous, and independently researched.',
  },
  {
    title: 'Expertise',
    icon: '/images/icon3.png',
    description: 'We focus all our attention on the commercial drone market, to help you understand what is really going on now, and in the future.',
  },
];

export default function WorkWithUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % WORK_ITEMS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-10 md:py-12 text-center bg-white">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-2"
      >
        Why Work With Us?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-lg sm:text-xl font-semibold text-[#1e3a8a] mb-6 sm:mb-8 md:mb-10"
      >
        Find out the benefits.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
        {WORK_ITEMS.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            animate={{
              boxShadow:
                activeIndex === index
                  ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              borderColor: activeIndex === index ? "#1e3a8a" : "#e5e7eb",
            }}
            className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-[#1e3a8a] opacity-0"
              animate={{ opacity: activeIndex === index ? 1 : 0 }}
            />
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{item.title}</h3>
            <motion.div whileHover={{ rotate: 10 }} transition={{ type: 'spring' }}>
              <Image
                src={item.icon}
                alt={item.title}
                width={120}
                height={120}
                className="mx-auto my-4 object-contain w-24 h-24 sm:w-30 sm:h-30"
              />
            </motion.div>
            <p className="text-sm sm:text-base text-[#1e3a8a]">{item.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0 5px 15px rgba(30, 58, 138, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className="text-sm sm:text-base bg-[#1e3a8a] text-white font-semibold shadow px-5 py-2 sm:px-6 sm:py-3 rounded hover:bg-[#163e7a] transition"
      >
        Consult With Us
      </motion.button>
    </section>
  );
}