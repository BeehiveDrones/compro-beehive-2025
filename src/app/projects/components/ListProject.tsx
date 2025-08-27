'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { projects } from '../../../data/projectData';

export function ListProject() {
  const [selected, setSelected] = useState<"product" | "industri" | null>(null);
  const [subSelected, setSubSelected] = useState<string | null>(null);
  const searchParams = useSearchParams();

  const productSubs = [
    'Drone Services',
    'Advance Manufacturing',
    'R&D Services',
    'Training',
  ];
  const industriSubs = [
    'Forestry',
    'Agriculture & Plantations',
    'Mining & Minerals',
    'Construction & Real Estate',
  ];

  useEffect(() => {
    const paramSelected = searchParams.get('selected');
    const paramSub = searchParams.get('sub');
    if (paramSelected === 'product' || paramSelected === 'industri') {
      setSelected(paramSelected);
    }
    if (paramSub) {
      setSubSelected(paramSub);
    }
  }, [searchParams]);

  const filteredProjects = projects.filter(project => {
    if (!selected) return true;
    if (selected && !subSelected) return project.mainCategory.includes(selected);
    if (selected && subSelected)
      return (
        project.mainCategory.includes(selected) &&
        project.subCategory.includes(subSelected)
      );
    return true;
  });

  // Sort berdasarkan id terbesar muncul paling atas
  const sortedProjects = [...filteredProjects].sort((a, b) => b.id - a.id);

  return (
    <section className="bg-white py-6 px-3 sm:py-8 sm:px-6 md:py-10 md:px-8 lg:px-12 xl:px-20 relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a8a] text-center mb-6 sm:mb-8 md:mb-10"
      >
        Project List
      </motion.h2>

      {/* Main Category Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center mt-2 gap-2 sm:gap-4 font-open-sans">
        {!selected && (
          <>
            <button
              className="w-full sm:w-auto px-4 sm:px-6 py-2 rounded font-semibold font-open-sans text-[#134280] border border-[#134280] bg-white hover:bg-[#134280] hover:text-white transition text-sm sm:text-base"
              onClick={() => { setSelected('product'); setSubSelected(null); }}
            >
              Product & Services
            </button>
            <button
              className="w-full sm:w-auto px-4 sm:px-6 py-2 rounded font-semibold font-open-sans text-[#134280] border border-[#134280] bg-white hover:bg-[#134280] hover:text-white transition text-sm sm:text-base"
              onClick={() => { setSelected('industri'); setSubSelected(null); }}
            >
              Industry
            </button>
          </>
        )}
        {selected === 'product' && (
          <button
            className="w-full sm:w-auto px-4 sm:px-6 py-2 rounded font-semibold font-open-sans text-white bg-[#134280] transition text-sm sm:text-base"
            onClick={() => { setSelected(null); setSubSelected(null); }}
          >
            Product & Services
          </button>
        )}
        {selected === 'industri' && (
          <button
            className="w-full sm:w-auto px-4 sm:px-6 py-2 rounded font-semibold font-open-sans text-white bg-[#134280] transition text-sm sm:text-base"
            onClick={() => { setSelected(null); setSubSelected(null); }}
          >
            Industry
          </button>
        )}
      </div>

      {/* Sub Category Buttons - Product */}
      {selected === 'product' && (
        <div className="flex flex-wrap justify-center items-center mt-4 gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto">
          {productSubs.map(sub => (
            <button
              key={sub}
              className={`px-3 sm:px-4 md:px-5 py-2 rounded font-semibold font-open-sans border border-[#134280] transition text-xs sm:text-sm md:text-base ${
                subSelected === sub
                  ? 'bg-[#134280] text-white'
                  : 'bg-white text-[#134280] hover:bg-[#134280] hover:text-white'
              }`}
              onClick={() => setSubSelected(sub)}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* Sub Category Buttons - Industri */}
      {selected === 'industri' && (
        <div className="flex flex-wrap justify-center items-center mt-4 gap-2 sm:gap-3 md:gap-4 max-w-5xl mx-auto">
          {industriSubs.map(sub => (
            <button
              key={sub}
              className={`px-3 sm:px-4 md:px-5 py-2 rounded font-semibold font-open-sans border border-[#134280] transition text-xs sm:text-sm md:text-base ${
                subSelected === sub
                  ? 'bg-[#134280] text-white'
                  : 'bg-white text-[#134280] hover:bg-[#134280] hover:text-white'
              }`}
              onClick={() => setSubSelected(sub)}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8">
        {sortedProjects.map((project, index) => (
          <motion.div
            key={project.id} // gunakan id biar unik
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
            className="bg-white shadow-md overflow-hidden flex flex-col min-h-[280px] sm:min-h-[320px] rounded-lg"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={350}
                height={200}
                className="rounded-2xl mx-auto mt-2 sm:mt-4 object-cover w-[calc(100%-16px)] sm:w-full h-24 sm:h-60"
              />
            </motion.div>
            
            <div className="p-2 sm:p-4 flex flex-col justify-between flex-grow font-open-sans">
              <motion.div 
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="text-gray-500 text-[10px] sm:text-xs mb-1 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0"
              >
                <span className="truncate">
                  {project.location}
                </span>
                <span className="text-right sm:text-left">{project.year}</span>
              </motion.div>

              <div className="text-gray-500 text-[10px] sm:text-xs mb-1 font-open-sans">
                {Array.isArray(project.category) ? project.category.join(', ') : project.category}
              </div>
              
              <motion.h3 
                whileHover={{ color: '#134280' }}
                transition={{ duration: 0.2 }}
                className="text-[#1e3a8a] font-bold text-sm sm:text-2xl mt-2 sm:mt-10 leading-tight"
              >
                {project.title}
              </motion.h3>
              
              {project.projectOverview && (
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 font-open-sans line-clamp-3 sm:line-clamp-none">
                  {project.projectOverview}
                </p>
              )}
              
              {project.desc && (
                <>
                  <ul className="mt-1 sm:mt-2 mb-1 sm:mb-2 text-xs sm:text-sm text-black list-disc list-inside space-y-1 font-open-sans">
                    {project.desc.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  {project.projectGoal && (
                    <div className="flex items-start gap-2 mt-2 sm:mt-4">
                      <svg
                        className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5"
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

                      <p className="text-xs sm:text-sm text-gray-700 font-open-sans ">
                        {project.projectGoal}
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
