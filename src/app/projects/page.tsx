'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OurProjects() {  
  return (
    <section className="py-10 px-6 md:px-20 mt-10">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4"
      >
        Our Projects
      </motion.h2>

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
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-sm md:text-base text-gray-700 mb-6"
      >
        Aero Versum Group has led innovative projects across Indonesia, leveraging drone technology, automation, and data analytics.
        From precision agriculture and forestry management to industrial inspections and disaster response, our solutions enhance
        efficiency, safety, and sustainability. We&apos;ve also supported medical deliveries to remote areas and environmental monitoring.
        Committed to innovation and impact, we continue to push technological boundaries for a better Indonesia.
      </motion.p>
      
      <div className="flex justify-center">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/images/1.png"
            alt="Project Map of Indonesia"
            width={1000}
            height={400}
            className="rounded-lg"
          />
        </motion.div>
      </div>
      
      <ListProject />
    </section>
  );
}
export function ListProject() {
  const projects = [
    {
      location: "Philippines, 2019",
      category: "Forestry",
      division: "Admin Marketing",
      title: "Wood Volume Assessment & Tree Counting",
      image: "/images/2.jpg",
    },
    {
      location: "Philippines, 2019",
      category: "Forestry",
      division: "Admin Marketing",
      title: "Wood Volume Assessment & Tree Counting",
      image: "/images/2.jpg",
    },
    {
      location: "Philippines, 2019",
      category: "Forestry",
      division: "Admin Marketing",
      title: "Wood Volume Assessment & Tree Counting",
      image: "/images/2.jpg",
    },
    {
      location: "Philippines, 2019",
      category: "Forestry",
      division: "Admin Marketing",
      title: "Wood Volume Assessment & Tree Counting",
      image: "/images/2.jpg",
    },
    {
      location: "Philippines, 2019",
      category: "Forestry",
      division: "Admin Marketing",
      title: "Wood Volume Assessment & Tree Counting",
      image: "/images/2.jpg",
    },
    {
      location: "Philippines, 2019",
      category: "Forestry",
      division: "Admin Marketing",
      title: "Wood Volume Assessment & Tree Counting",
      image: "/images/2.jpg",
    },
  ];

  return (
    <section className="bg-white py-10 px-4 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-[#1e3a8a] text-center mb-10"
      >
        Project List
      </motion.h2>
     
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            className="bg-white shadow-md overflow-hidden flex flex-col min-h-[320px] "
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
                className="rounded-2xl mx-auto mt-4 object-cover w-full"
              />
            </motion.div>

            {/* Content below image */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <motion.div 
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-gray-500 text-xs mb-1 flex justify-between"
              >
                <span>
                  {project.location} | {project.category}
                </span>
                <span>{project.division}</span>
              </motion.div>
              
              <motion.h3 
                whileHover={{ color: "#134280" }}
                transition={{ duration: 0.2 }}
                className="text-[#1e3a8a] font-bold text-2xl mt-10 leading-snug"
              >
                {project.title}
              </motion.h3>
              
              <motion.button
                whileHover={{ 
                  backgroundColor: "#1e3a8a",
                  color: "white",
                  x: 5
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 self-start inline-flex items-center gap-2 px-4 py-2 bg-white text-[#1e3a8a] text-sm font-semibold rounded shadow shadow-gray-300 transition"
              >
                View Details
                <motion.svg 
                  className="w-4 h-4" 
                  viewBox="0 0 20 20"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <path d="M6 4l10 6-10 6V4z" />
                </motion.svg>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
