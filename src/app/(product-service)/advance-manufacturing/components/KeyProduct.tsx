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
    title: 'Drone Sprayer',
    desc: 'Best Used for Mapping and Surveillance',
    image: '/images/sprayer.png',
    specs: [
      'Type : Quadcopter',
      'Capacity : 16l',
      'Wheelbase : 1300mm',
      'Flight Time : 12min',
      'Telementery Range : 5km',
      'Takeoff and Landing Type: Vertical',
      'Cruise Speed : 8m/s ',
      'Playload : Camera and Chemical Tank',
    ],
    video: 'yourVideoId1',
  },
    {
    title: 'BVD M-14',
    desc: 'Best Used for Mapping and Surveillance',
    image: '/images/product5.png',
    specs: [
      'Type: Multicopter - Quad',
'Cruise Speed: 8 m/s',
'Max Flying Speed: 12 m/s',
'Flight Endurance: up to 35 mins',
'Max Flying Height: 300 m',
'Wheelbase: 680 mm',
'Material: Carbon Kevlar',
'Max Take-off Weight: 3000 g',
'Empty Weight: 2400 g',
    ],
    video: 'yourVideoId1',
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
        className="text-3xl md:text-4xl font-exo2 font-bold text-center text-[#1e3a8a] mb-10"
      >
        Our Key Products
      </motion.h2>
      <div className="space-y-8 sm:space-y-10 ">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.01 }}
            className="flex flex-col md:flex-row  rounded overflow-hidden shadow-md"
          >
            {/* Image on left */}
            <div className="relative md:w-1/2 lg:w-1/2 xl:w-1/2">
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
                  className="absolute top-4 right-4 z-20 lg:left-70 xl:left-100"
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src="/icons/tkdn.png"
                    alt="Logo TKDN"
                    width={50}
                    height={50}
                    className="object-contain w-[50px] h-[50px] sm:w-[50px] sm:h-[50px] md:w-[50px] md:h-[50px] lg:w-10 xl:w-full"
                  />
                </motion.div>
              )}
              {/* Overlay content in image */}
              <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 text-white">
                <div>
                  <h3 className="text-2xl font-exo2 font-bold mb-1 ml-4">{product.title}</h3>
                  <p className="text-sm mb-3 ml-4 font-open-sans">{product.desc}</p>
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
                  className="inline-flex items-center font-exo2 ml-4 gap-2 px-4 py-2 bg-white text-[#134280] text-sm font-semibold rounded transition w-fit"
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
            <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 bg-gradient-to-r from-[#07080C] to-[#134280] text-white p-6 ">
              <ul className="text-sm font-open-sans md:ml-20 list-disc list-inside space-y-2 sm:space-y-3 md:space-y-4">
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
    </section>
  );
}
