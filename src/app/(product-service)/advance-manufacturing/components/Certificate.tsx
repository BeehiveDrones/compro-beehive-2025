"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Certificate() {
  const items = [
    {
      image: "/certificate/iso.png",
      title:
        "The First Drone Manufacturing In Indonesia With ISO 9001:2015 Certification",
      description:
        "Specializing in the design and manufacturing of high-quality drones, certified under ISO 9001:2015 to ensure reliability, efficiency, and precision. The product range includes fixed-wing, VTOL, and multicopter platforms, serving applications in mapping, surveillance, inspection, logistics, and agricultural spraying. Driven by continuous innovation and R&D, our solutions offered are versatile, scalable, and tailored to diverse industry needs.",
    },
    {
      image: "/certificate/tkdn.png",
      title: "41% TKDN Indonesian-Made Drone",
      description:
        "A producer of logistic and surveillance VTOL drones, with a Domestic Component Level (TKDN) achievement of 41.19%. This achievement reflects our commitment to strengthening Indonesia’s industrial capabilities, reducing reliance on imports, and contributing to national economic growth. By choosing these drones, users gain not only reliable unmanned aviation technology but also contribute to national self-reliance and the advancement of the manufacturing sector.",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-10 p-6 xl:grid-cols-2 lg:grid-cols-2 mb-5">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -150 : 150, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
          className="flex flex-col xl:flex-row bg-white/80 backdrop-blur-sm 
                     rounded-2xl shadow-md border border-gray-200 
                     overflow-hidden w-full max-w-4xl h-auto mx-auto"
        >
          {/* Gambar sertifikat */}
          <div className="relative w-full h-[240px] md:h-[320px] xl:w-[250px] xl:h-[340px] flex-shrink-0">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain p-4"
            />
          </div>

          {/* Title + Deskripsi */}
          <div className="flex flex-col justify-start p-4 xl:p-10 text-gray-700">
            <h3 className="text-blue-600 font-bold text-lg mb-2 text-center xl:text-left ">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-center xl:text-left lg:text-left">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
