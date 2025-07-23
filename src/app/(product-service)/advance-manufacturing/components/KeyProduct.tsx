'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Product {
  title: string;
  desc: string;
  image: string;
  specs: string[];
  video: string;
}

const PRODUCTS: Product[] = [
  {
    title: 'BVD-V25',
    desc: 'Best Used for Surveillance, Logistics',
    image: '/images/product1.jpg',
    specs: [
      'Type : VTOL',
      'Wingspan : 2600mm',
      'Flight Endurance : Up to 50min',
      'Flight Range : Up to 50km',
      'Flight Height : Up to 500m',
      'Max Speed : 30m/s',
      'Cruise Speed : 17m/s ',
      'Autonomous Flight Mode',
      'TKDN 41.19%',
    ],
    video: '4m3O-qFvLJU',
  },
  {
    title: 'BVD-F11',
    desc: 'Best Used for Mapping and Surveillance',
    image: '/images/product2.jpg',
    specs: [
      'Type : Fixed Wing',
      'Wingspan : 2100mm',
      'Flight Endurance : Up to 40min',
      'Flight Range : Up to 50km',
      'Flight Height : Up to 500m',
      'Max Speed : 22m/s',
      'Cruise Speed : 15m/s ',
      'Autonomous Flight Mode',
    ],
    video: 'jLUd3p8PEME',
  },
  {
    title: 'BVD-M16A',
    desc: 'Best Used for Inspection and Surveillance',
    image: '/images/product4.png',
    specs: [
      'Type : Multicopter',
      'Flight Endurance : Up to 30min',
      'Flight Range : Up to 10km',
      'Flight Height : Up to 400m',
      'Max Speed : 15m/s',
      'Cruise Speed : 10m/s ',
      'Autonomous Flight Mode',
      'Water Takeoff And Landing',
    ],
    video: '6eocn3ESQd8',
  },
  {
    title: 'BVD-V25Mapping',
    desc: 'Best Used for Mapping and Surveillance',
    image: '/images/product3.jpg',
    specs: [
      'Type : Fixed Wings - VTOL',
      'Wingspan : 2100mm',
      'Flight Endurance : Up to 25min',
      'Flight Range : Up to 20km',
      'Flight Height : Up to 500m',
      'Max Speed : 28m/s',
      'Cruise Speed : 16m/s ',
      'Autonomous Flight Mode',
    ],
    video: 'T0yzT0F-kBY',
  },
  {
    title: 'Quadcopter',
    desc: 'Best Used for Mapping and Surveillance',
    image: '/images/quadcopter.jpg',
    specs: [
      'Type : Fixed Wings - VTOL',
      'Wingspan : 2100mm',
      'Flight Endurance : Up to 25min',
      'Flight Range : Up to 20km',
      'Flight Height : Up to 500m',
      'Max Speed : 15m/s',
      'Cruise Speed : 20m/s ',
      'Autonomous Flight Mode',
    ],
    video: 'yourVideoId1',
  },
  {
    title: 'Hexacopter',
    desc: 'Best Used for Mapping and Surveillance',
    image: '/images/hexacopter.jpg',
    specs: [
      'Type : Fixed Wings - VTOL',
      'Wingspan : 2100 mm',
      'Flight Endurance : Up to 25min',
      'Flight Range : Up to 20km',
      'Flight Height : Up to 500m',
      'Max Speed : 22m/s',
      'Cruise Speed : 15m/s ',
      'Autonomous Flight Mode',
    ],
    video: 'yourVideoId2',
  },
];

export default function KeyProduct() {
  return (
    <section className="px-4 sm:px-6 lg:px-30 py-12 bg-white">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-[#1e3a8a] mb-10"
      >
        Our Key Products
      </motion.h2>
      <div className="space-y-8 sm:space-y-10">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.01 }}
            className="flex flex-col md:flex-row rounded overflow-hidden shadow-md"
          >
            {/* Image on left */}
            <div className="relative md:w-1/2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="w-full h-[360px] overflow-hidden"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={1000}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* TKDN Logo */}
              {index === 0 && (
                <motion.div 
                  className="absolute top-4 right-4 z-20"
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src="/images/tkdn.png"
                    alt="Logo TKDN"
                    width={150}
                    height={60}
                    className="object-contain"
                  />
                </motion.div>
              )}
              {/* Overlay content in image */}
              <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 text-white">
                <div>
                  <h3 className="text-2xl font-bold mb-1 ml-4">{product.title}</h3>
                  <p className="text-sm mb-3 ml-4">{product.desc}</p>
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
                  className="inline-flex items-center ml-4 gap-2 px-4 py-2 bg-white text-[#134280] text-sm font-semibold rounded transition w-fit"
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
            </div>
            {/* Gradient on right */}
            <div className="md:w-1/2 bg-gradient-to-r from-[#07080C] to-[#134280] text-white p-6">
              <ul className="text-sm md:ml-30 list-disc list-inside space-y-2 sm:space-y-3 md:space-y-4">
                {product.specs.map((spec, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {spec}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
