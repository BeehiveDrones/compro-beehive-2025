'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <div className="w-full flex justify-center mt-0 relative overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: isHovering ? 1.05 : 1 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="w-full"
        >
          <Image
            src="/images/product & service.jpg"
            alt="halaman drone service"
            width={1600}
            height={900}
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] object-cover"
            priority
          />
        </motion.div>
      </div>
      <motion.div
        className="fixed bottom-6 md:bottom-10 right-6 md:right-10 bg-white rounded-full p-2 z-50 shadow-lg"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
          <Image
            src="/images/whatsapp.logo.png"
            alt="WhatsApp Logo"
            width={50}
            height={50}
            className="object-contain transition-transform duration-200 md:w-[60px] md:h-[60px]"
          />
        </a>
      </motion.div>
    </>
  );
}

