'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface SliderItem {
  category: string;
  image: string;
}

interface SliderSectionProps {
  onCategorySelect?: (category: string) => void;
}

const SLIDER_ITEMS: SliderItem[] = [
  { category: 'Forestry', image: '/slider/1.jpg' },
  { category: 'Agriculture & Plantations', image: '/slider/2.jpg' },
  { category: 'Mining & Minerals', image: '/slider/3.jpg' },
  { category: 'Construction & Real Estate', image: '/slider/4.jpg' },
];

export default function SliderSection({ onCategorySelect }: SliderSectionProps) {
  const router = useRouter();

  const handleCardClick = (category: string) => {
    if (onCategorySelect) onCategorySelect(category);
    router.push(`/projects?selected=industri&sub=${encodeURIComponent(category)}`);
  };

  return (
    <div className="w-full flex flex-col items-center mt-8 sm:mt-12 md:mt-16 px-3 sm:px-4 md:px-6 lg:px-8">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl">
        {SLIDER_ITEMS.map((item, index) => (
          <div
            key={index}
            className="w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[320px] bg-gray-200 p-4 text-center shadow-md 
                       flex flex-col justify-center items-center 
                       hover:shadow-xl hover:scale-105 transition-all duration-500 hover:bg-gray-100 
                       group relative overflow-hidden cursor-pointer rounded-lg"
            onClick={() => handleCardClick(item.category)}
          >
            <Image
              src={item.image}
              alt={item.category}
              fill
              className="object-cover opacity-50 absolute inset-0 group-hover:opacity-60 transition-opacity duration-300"
              style={{ zIndex: 1 }}
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-2">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-xl font-exo2 font-bold text-black 
                             group-hover:text-[#1e3a8a] transition-colors duration-300 text-center leading-tight">
                {item.category}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Partners & Clients Title */}
      <div className="text-center mt-8 sm:mt-12 md:mt-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-exo2 font-bold text-[#1e3a8a] 
                       hover:scale-105 transition-transform duration-300">
          Partners & Clients
        </h2>
      </div>
    </div>
  );
}