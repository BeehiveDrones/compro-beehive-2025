
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ListProject } from "./components/ListProject";
import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

function ProjectsContent() {
  const listRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const selected = searchParams.get("selected");
    const sub = searchParams.get("sub");
    if ((selected || sub) && listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [searchParams]);

  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-exo2 font-bold text-[#1e3a8a] mb-4"
      >
        Our Projects
      </motion.h2>

      {/* Floating WhatsApp */}
      <motion.div
        className="fixed bottom-6 md:bottom-10 right-6 md:right-10 bg-white rounded-full p-2 z-50 shadow-lg"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <a
          href="https://wa.me/+62818999771"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
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
        className="text-sm md:text-base text-gray-700 mb-6 font-open-sans"
      >
        Beehive Drones has led innovative projects across Indonesia, leveraging drone technology, automation, and data analytics.
        From precision agriculture and forestry management to industrial inspections and disaster response, our solutions enhance
        efficiency, safety, and sustainability. We&apos;ve also supported medical deliveries to remote areas and environmental monitoring.
        Committed to innovation and impact, we continue to push technological boundaries for a better Indonesia.
      </motion.p>

      {/* Gambar → Video saat hover */}
      <div className="flex justify-center">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="relative w-[1000px] h-[400px]"
        >
          {/* Gambar default */}
          {!hover && (
            <Image
              src="/images/1.png"
              alt="Project Map of Indonesia"
              fill
              className="rounded-lg object-cover"
            />
          )}
          {/* Video YouTube saat hover */}
          {hover && (
            <iframe
              className="rounded-lg w-full h-full"
              src="https://www.youtube.com/embed/MzIUoDaGY2g?autoplay=1&mute=1"
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </motion.div>
      </div>

      <div ref={listRef} id="project-list">
        <ListProject />
      </div>
    </>
  );
}

export default function OurProjects() {
  return (
    <section className="py-10 px-6 md:px-20 mt-10">
      <Suspense fallback={null}>
        <ProjectsContent />
      </Suspense>
    </section>
  );
}
