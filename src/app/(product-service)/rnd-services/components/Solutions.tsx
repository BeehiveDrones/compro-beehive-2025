import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Solutions() {
  const solutions = [
    {
      title: 'Swarm Drones',
      image: '/rnd/swarndrone.png',
      description:
        'Swarm drones refer to a group of drones working autonomously to complete a task or mission. They communicate with each other to coordinate their movements and actions, mimicking behaviors seen in nature, the way birds or insects move in a swarm.',
    },
    {
      title: 'SLAM & Visual SLAM',
      image: '/rnd/slam.png',
      description:
        'SLAM and Visual SLAM enable a robot to map an unknown environment while simultaneously determining its position, essential for GPS-denied areas like indoor navigation or underground exploration.',
    },
    {
      title: 'Underwater Robotics',
      image: '/rnd/underwater.png',
      description:
        'Underwater robotics involves designing and developing autonomous or remotely operated robotic tasks in underwater environments, including ocean exploration, environmental monitoring, and maintenance.',
    },
    {
      title: 'Intelligent Control (Optimal & Robust Control)',
      image: '/rnd/intelegent.png',
      description:
        'Intelligent Control refers to control systems that apply advanced algorithms and techniques to manage complex systems optimally and robustly based on the mathematical model of the dynamic system or models.',
    },
    {
      title: 'AI Embedded Drones',
      image: '/rnd/ai embaded.jpg',
      description:
        'AI improves drone algorithms by enhancing vision, object detection, and control. Machine learning classifies images, while neural networks detect disturbances to help maintain stability.',
    },
    {
      title: 'Reinforcement Learning',
      image: '/rnd/reinforcement.png',
      description:
        'An AI-driven approach that enables systems to learn from experience, adapt dynamically to changing environments, and continuously optimize performance through trial-and-error interactions.',
    },
    {
      title: 'Predictive Analysis',
      image: '/rnd/predict.jpg',
      description:
        'A data-driven approach that leverages historical data, statistical algorithms, and machine learning techniques to identify patterns, anticipate future trends, and optimize operations.',
    },
    {
      title: 'Geospatial Data Analytics',
      image: '/rnd/geospasial.png',
      description:
        'Transforming aerial data from satellites and drones into actionable insights, enabling precise mapping and real-time analysis across industries.',
    },
    {
      title: 'Real-Time Data Processing',
      image: '/rnd/realtime.jpg',
      description:
        'Instant analysis and interpretation of incoming data, enabling faster, smarter, and more effective responses in dynamic environments.',
    },
  ];

  return (
    <section className="bg-white py-5 px-4 md:px-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold font-exo2 text-center text-[#1e3a8a] mb-10"
      >
        Tailored Solutions for Your Needs
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            className="bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] rounded overflow-hidden flex flex-col"
          >
            <div className="relative w-full flex justify-center bg-white p-4 mt-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full h-70 overflow-hidden"
              >
                <Image
                  src={solution.image}
                  alt={solution.title}
                  width={460}
                  height={220}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-30" />
            </div>
            
            <div className="p-4 flex flex-col flex-grow">
              <table className="w-full text-left">
                <tbody>
                  <tr>
                    <td className="text-xl mt-30   font-bold text-[#1e3a8a] pb-2">
                      <motion.div
                        whileHover={{ color: "#134280" }}
                        transition={{ duration: 0.2 }}
                      >
                        {solution.title}
                      </motion.div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-sm font-open-sans text-[#1e3a8a] pb-4">
                      <motion.div
                        whileHover={{ x: 2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {solution.description}
                      </motion.div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <motion.a
          href="/contact-us"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(30, 58, 138, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className="text-sm sm:text-base bg-[#1e3a8a] text-white font-semibold shadow px-5 py-2 sm:px-6 sm:py-3 rounded hover:bg-[#163e7a] transition"
        >
          Consult With Us
        </motion.a>
      </div>
    </section>
  );
}
