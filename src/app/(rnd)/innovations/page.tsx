'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {


  return (
    <>
      <header className=" text-[#134280] text-center py-12 px-4">
        <h1 className="text-4xl mt-10 font-exo2 font-bold mb-2 xl:mt-20 xl:text-6xl ">Our Innovation</h1>
        <p className=" mx-auto text-[#] font-medium font-open-sans mt-10  text-base leading-relaxed">
          Pioneering the future through cutting-edge technology solutions that transform industries and drive sustainable progress.
        </p>
      </header>

      <main className=" mx-auto px-4 py-12 text-[#134280] font-exo2 font-open-sans">
        <motion.div
                className="fixed bottom-6 md:bottom-10 right-6 md:right-10 bg-white rounded-full p-2 z-50 shadow-lg"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <a href="https://wa.me/+62818999771" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                  <Image
                    src="/images/whatsapp.logo.png"
                    alt="WhatsApp Logo"
                    width={50}
                    height={50}
                    className="object-contain transition-transform duration-200 md:w-[60px] md:h-[60px]"
                  />
                </a>
              </motion.div>
        


        <section className="w-full bg-white pb-7">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Row 1: Image Left */}
        <motion.div
          className="relative w-full h-48 sm:h-64 md:h-72 lg:h-[480px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/innovation/polination.png"
            alt="Data Analytics"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Row 1: Text Right */}
        <article className="flex-1 min-w-0 p-4 sm:p-6 md:p-8 flex flex-col  justify-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#] mb-2 sm:mb-3 ">
            Pollination Drones
          </h3>
          <p className="text-sm sm:text-base font-open-sans text-black mb-4 sm:mb-5 leading-relaxed ">
            An innovative R&D initiative to develop AI-powered autonomous drones designed specifically for optimizing pollination in palm plantations, enhancing efficiency, yield, and sustainability.
          </p>
          <div className="flex flex-wrap gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2 sm:gap-y-3 text-xs sm:text-sm font-open-sans font-semibold text-black mb-3 sm:mb-4">
            <span className="inline-flex items-center gap-1 sm:gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              Year: 2024
            </span>
            <span className="inline-flex items-center gap-1 sm:gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 1 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Location: Mamuang, Sulawesi
            </span>
          </div>
          <div className="inline-block text-xs font-bold font-open-sans px-3 py-2 bg-blue-100 text-blue-900 rounded mb-3 sm:mb-4">
            R&D Service for Pollination Drone Development
          </div>
          <div className="flex items-start text-sm sm:text-base font-semibold text-blue-900 gap-2 sm:gap-3">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
            <span className="leading-relaxed xl:mb-20">
              Goal: Optimize operational costs and accelerate the pollination process in palm plantations for maximum efficiency and productivity.
            </span>
          </div>
        </article>

        {/* Row 2: Text Left */}
        <motion.div
          className="flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-14 py-6 sm:py-8 order-2 lg:order-none"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <article className="flex-1 min-w-0 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#] mb-2 sm:mb-3">
              Development of AUV Prototype & Algorithms for Aquatic Mapping
            </h3>
            <p className="text-sm sm:text-base text-black mb-4 sm:mb-5 leading-relaxed">
              Predictive Control for Underwater vSLAM considering Effects of Internal Solitary Waves (PISCES). This research enhances underwater vSLAM on AUVs by improving stability with the NMPC algorithm under ISW disturbances, advancing marine exploration through more accurate mapping and ecosystem insights.
            </p>
            <div className="flex flex-wrap gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2 sm:gap-y-3 text-xs sm:text-sm font-semibold text-black mb-3 sm:mb-4">
              <span className="inline-flex items-center gap-1 sm:gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                Year: 2023 Current
              </span>
              <span className="inline-flex items-center gap-1 sm:gap-2">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-blue-900"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="9" y="9" width="6" height="6" rx="1" />
                  <path d="M3 9h3M3 15h3M18 9h3M18 15h3M9 3v3M15 3v3M9 18v3M15 18v3" />
                </svg>
                Device: AUV
              </span>
              <span className="inline-flex items-center gap-1 sm:gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 1 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Location: Bali
              </span>
              <span className="inline-flex items-center gap-1 sm:gap-2">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-blue-900"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 20l9-8 9 8M4 14l8-6 8 6" />
                  <path d="M12 4v5" />
                </svg>
                Sector: Maritime
              </span>
            </div>
            <div className="inline-block text-xs font-bold px-3 py-2 bg-blue-100 text-blue-900 rounded mb-3 sm:mb-4">
              AUV Prototype and Algorithms
            </div>
            <div className="flex items-start text-sm sm:text-base font-semibold text-blue-900 gap-2 sm:gap-3">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
              </svg>
              <span className="leading-relaxed">
                Goal: Improving the quality of camera readings by an AUV for underwater vSLAM using a stable control algorithm.
              </span>
            </div>
          </article>
        </motion.div>

        {/* Row 2: Image Right */}
        <motion.div
          className="relative w-full h-48 sm:h-64 md:h-72 lg:h-[480px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/innovation/auv.png"
            alt="Crop Management"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
</section>

      </main>
    </>
  );
}