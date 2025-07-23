import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Rnd() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('rnd-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="rnd-section"
      className="bg-white py-10 px-6 md:px-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4"
      >
        R&amp;D Services
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-sm md:text-base text-[#1e3a8a]"
      >
        At Beehive Drones, we believe that every challenge requires a unique solution. Our R&amp;D services focus on customized innovations,
        integrating <motion.strong 
          whileHover={{ color: "#134280" }}
          transition={{ duration: 0.2 }}
        >AI, Computer Vision, Big Data, and Robotics</motion.strong> to develop adaptive and scalable drone technologies. Whether its for
        autonomous operations, data analytics, or specialized industrial applications, we create tailor-made solutions to meet the specific needs
        of your industry.
      </motion.p>
    </section>
  );
}
