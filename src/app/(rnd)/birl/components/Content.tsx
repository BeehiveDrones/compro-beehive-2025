import { motion } from 'framer-motion';

export default function Content() {
  const publications = [
    {
      id: 1,
      title: "Comparative numerical analysis of torpedo-shaped and cubic symmetrical autonomous underwater vehicles in the context of Indonesian marine environments (2023)",
      details: {
        publisher: "Mathematical Modelling of Engineering Problems (MMEP), IETJA",
        authors: "Kadek Dwi Wahyuadnyana (BIRL, ITS), Katherin Indriawati (ITS), Purwadi Agus Darwito (ITS), Ardyas Nur Aufa (BIRL), Hilton Tnunay (BIRL, KU Leuven)",
        doi: "BIRL-2023-01"
      }
    },
    {
      id: 2,
      title: "Experimental Validation: Perception and Localization Systems for Autonomous Vehicles using The Extended Kalman Filter Algorithm (2024)",
      details: {
        publisher: "International Journal on Smart Sensing and Intelligent Systems, Sciendo",
        authors: "Bambang Lelono Widjiantoro (ITS), Katherin Indriawati (ITS), Alexander Buyung (ITS), Kadek Dwi Wahyuadnyana (BIRL, ITS)",
        doi: "BIRL-2024-01"
      }
    }
  ];

  return (
    <section className="bg-white py-10 px-4 sm:px-6 md:px-12 lg:px-20 text-[#1e3a8a]">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-exo-2 font-bold mb-1"
      >
        BIRL
      </motion.h1>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-sm font-bold text-[#1e3a8a] tracking-wide mb-6 font-exo2"
      >
        REDEFINING THE POSSIBILITIES
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-xl sm:text-2xl md:text-3xl font-bold font-exo2 text-center mb-4"
      >
        Welcome to Beehive Intelligent Robotics Laboratory!
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-base text-gray-700 text-justify mb-8 sm:mb-10  font-open-sans "
      >
        Welcome to the Beehive Intelligent Robotics Laboratory (BIRL), an
        integral part of Beehive Drones company. As an academic arm of Beehive
        Drones, our laboratory serves as a dynamic hub where theoretical
        insights meet practical applications in the realm of intelligent
        robotics. Together, we navigate the intersection of cutting-edge
        technology and innovative research, synergising efforts to propel the
        field forward. Explore with us as we contribute to the evolution of
        robotics within the broader framework of Beehive Drones&apos; commitment to
        excellence and advancement. Welcome to the collaborative synergy of the
        Beehive Intelligent Robotics Laboratory, where academic exploration and
        industrial innovation seamlessly converge.
      </motion.p>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-6"
      >
        Publication
      </motion.h3>

      <div className="space-y-6 sm:space-y-8 text-black">
        {publications.map((pub, index) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
            className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
          >
            <span className="font-bold text-lg text-[#1e3a8a]">{pub.id}.</span>
            <div>
              <motion.p 
                whileHover={{ color: "#134280" }}
                className="font-bold mb-2 sm:mb-3"
              >
                {pub.title}
              </motion.p>
              <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                <li>
                  <span className="font-semibold font-open-sans">Publisher:</span> {pub.details.publisher}
                </li>
                <li>
                  <span className="font-semibold font-open-sans">Authors:</span> {pub.details.authors}
                </li>
                <li>
                  <span className="font-semibold font-open-sans">DOI:</span>{' '}
                  <motion.a 
                    href="#" 
                    className="text-black"
                    whileHover={{ x: 2 }}
                  >
                    {pub.details.doi}
                  </motion.a>
                </li>
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
