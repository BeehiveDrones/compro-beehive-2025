'use client';

import Image from 'next/image';

export default function TrainingSection() {
  return (
    <section className="px-4 md:px-3 py-7 bg-white">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1e3a8a] text-center md:text-left mb-4 md:mb-2 md:ml-10 lg:ml-10">
        Training
      </h2>
      <p className="text-[#1e3a8a] mb-8 font-medium text-center md:text-left md:ml-20 lg:ml-10 text-sm md:text-base leading-relaxed">
        Upgrade your skills with our comprehensive, industry-focused training programs, available for both beginners and advanced professionals. Our training is fully customizable to meet your specific needs and can be conducted online or on-site.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-15 mx-4 md:mx-10 lg:mx-20 mt-10">
        {/* Drone Operation Training */}
        <div className="relative rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group">
          <Image
            src="/images/operation.jpg"
            alt="Drone Operation Training"
            width={600}
            height={400}
            className="w-full h-[250px] md:h-[300px] object-cover group-hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-[#134280] text-white p-4 transition-all duration-300 group-hover:bg-[#0f316b]">
            <h3 className="text-lg md:text-xl font-bold mb-1">Drone Operation Training</h3>
            <p className="text-sm md:text-base">
              Covers fundamental and advanced drone piloting skills, including flight control, mission planning, and aerial data acquisition.
            </p>
          </div>
        </div>
        {/* Geospatial Training */}
        <div className="relative rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group">
          <Image
            src="/images/rapat.jpg"
            alt="Geospatial Training"
            width={600}
            height={400}
            className="w-full h-[250px] md:h-[300px] object-cover group-hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-[#134280] text-white p-4 transition-all duration-300 group-hover:bg-[#0f316b]">
            <h3 className="text-lg md:text-xl font-bold mb-1">Geospatial Data Processing & Analysis Training</h3>
            <p className="text-sm md:text-base">
              Focuses on processing aerial data, mapping techniques, and spatial analysis for data-driven decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
