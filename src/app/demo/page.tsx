
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import DemoDroneForm from './components/DemoDroneForm';

export default function DemoDronePage() {
  return (
    <section className="relative bg-white py-10 px-4 sm:px-6 md:px-12 lg:px-20 text-[#1e3a8a] min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute bottom-0 right-0 w-full h-full md:w-1/2">
        <Image
          src="/images/form.jpg"
          alt="Demo Drone"
          fill
          className="object-cover object-left"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Deskripsi />
        <DemoDroneForm />
      </div>
    </section>
  );
}

function Deskripsi() {
  return (
    <motion.section
      className="text-[#1e3a8a] mb-8 md:mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <motion.h1 className="text-3xl md:text-4xl font-bold mb-2 mt-10">Demo Drone</motion.h1>
      <motion.h2 className="text-xl md:text-2xl font-semibold mb-4 font-exo2">See Beehive Drones in Action!</motion.h2>
      <motion.p className="text-sm md:text-base text-gray-700 font-open-sans">
        Discover how our advanced drone technology can enhance your operations. Whether you need aerial mapping,
        surveillance, inspection, spraying, or customized drone solutions, Beehive Drones delivers precision and efficiency
        across industries. Fill out the form below to request a drone demo, and our team will reach out soon to schedule a
        session tailored to your needs. Experience the future of drone technology firsthand! Request your demo today!
      </motion.p>
    </motion.section>
  );
}
