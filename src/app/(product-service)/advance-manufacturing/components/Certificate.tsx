
"use client";

import Image from "next/image";

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
        "A producer of logistic and surveillance VTOL drones, with a Domestic Component Level (TKDN) achievement of 41.19%. This achievement reflects a our commitment to strengthening Indonesia’s industrial capabilities, reducing reliance on imports, and contributing to national economic growth. By choosing these drones, users gain not only reliable unmanned aviation technology but also contribute to national self-reliance and the advancement of the manufacturing sector.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 place-items-center">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-md border border-gray-200 
                     group flex flex-row overflow-hidden transition-all duration-500 
                     w-[240px] hover:w-[640px] h-[360px]" // tinggi fix mengikuti gambar
        >
          {/* Bagian kiri: gambar */}
          <div className="flex-shrink-0">
            <div className="relative w-[240px] h-[360px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Bagian kanan: title + deskripsi (hidden dulu, muncul saat hover) */}
          <div
            className="w-0 group-hover:w-[380px] opacity-0 group-hover:opacity-100 
                       bg-white/95 backdrop-blur-sm text-gray-700 text-sm 
                       flex flex-col items-start justify-start p-4 
                       transition-all duration-500 overflow-y-auto"
          >
            <h3 className="text-blue-600 font-bold text-lg mb-2">
              {item.title}
            </h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
