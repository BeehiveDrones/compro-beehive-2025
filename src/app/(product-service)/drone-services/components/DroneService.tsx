'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  image: string;
}

const SERVICES: Service[] = [
  {
    title: 'Pilot Service',
    description: 'Certified drone pilots with expertise in operating various drone types, ensuring safe and efficient aerial operations for daily, weekly, or monthly engagements.',
    image: '/images/pilotservice.jpg',
  },
  {
    title: 'Mapping',
    description: 'High-precision drone mapping services tailored for industries such as agriculture, construction, and urban planning, delivering detailed geospatial insights.',
    image: '/images/mapping.jpg',
  },
  {
    title: 'Surveillance',
    description: 'Advanced aerial imaging and video capture to support decision-making, providing high-resolution visuals for analysis before map processing.',
    image: '/images/surve.jpg',
  },
  {
    title: 'Inspection Data Acquisition',
    description: 'Specialized drone inspections for critical infrastructure, enabling early detection of potential issues in assets like turbines, bridges, and power lines.',
    image: '/images/inspection.jpg',
  },
];

export default function DroneServices() {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-10 md:py-12 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl lg:text-5xl font-exo2 font-bold text-[#1e3a8a] mb-2 text-center md:text-left"
      >
        Drone Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-base text-xs sm:text-sm md:text-base lg:text-lg font-open-sans text-[#1e3a8a] mb-6 sm:mb-8 md:mb-10 font-medium text-center md:text-left"
      >
        <span className="text-xs sm:text-sm md:text-base lg:text-lg text-[#1e3a8a] font-open-sans font-semibold">
          Precision in Every Flight, Excellence in Every Result.
        </span>
        <br />
        Certified drone pilots provide accurate, real-time aerial data to streamline operations, boost safety, and drive growth.
      </motion.p>
      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
{SERVICES.map((service, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, y: 20 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.15 }}
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ scale: 1.015, y: -5 }}
    className={`flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow-md p-4 sm:p-6 ${
      index % 2 !== 0 ? 'md:flex-row-reverse' : ''
    }`}
  >
    <div className="w-full md:w-1/2 mb-4 md:mb-0 md:p-4 lg:p-6">
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden rounded-md"
      >
        <Image
          src={service.image}
          alt={service.title}
          width={550}
          height={180}
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-md"
        />
      </motion.div>
    </div>
    <div className="w-full md:w-1/2 md:px-6 lg:px-12 text-center md:text-left">
      <h3 className="text-xl sm:text-2xl font-exo2 font-bold text-[#1e3a8a] mb-2">
        {service.title}
      </h3>
      <p className="text-sm sm:text-base font-open-sans text-gray-700 mb-4 sm:mb-6">
        {service.description}
      </p>
    </div>
  </motion.div>
))}
      </div>
    </section>
  );
}

