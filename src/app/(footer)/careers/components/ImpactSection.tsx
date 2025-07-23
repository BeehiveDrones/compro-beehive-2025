import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ImpactSection() {
  const corporateCultureItems = [
    { letter: 'C', text: 'CONNECTED' },
    { letter: 'H', text: 'HUMAN-CENTRIC APPROACH' },
    { letter: 'A', text: 'ADVANCE RESEARCH' },
    { letter: 'R', text: 'RESPONSIBLE' },
    { letter: 'G', text: 'GLOBAL LEADERSHIP' },
    { letter: 'E', text: 'ETHICAL' },
  ];
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showTapPrompt, setShowTapPrompt] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (activeItem !== null) {
      setShowTapPrompt(false);
    }
  }, [activeItem]);

  return (
    <section className="container mx-auto px-4 sm:px-6 py-8 md:py-12 bg-white">
      <AnimatedSection>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4 text-center sm:text-center">
          Make an Impact
        </h2>
        <p className="text-gray-700  leading-relaxed max-w-4xl mx-auto mb-4 text-sm sm:text-base">
          On a daily basis, Beehive Drones employees work on programs and projects with the potential to notably impact our lives. Our employees take pride in solving hard problems that can have tangible impacts on our future.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={200}>
        <div className="relative mb-8 sm:mb-12 mt-12 sm:mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a8a] inline-block">
            Our Corporate Culture
          </h2>
        </div>
      </AnimatedSection>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 md:gap-6 mt-4 sm:mt-6 md:mt-8 py-4 sm:py-6 md:py-8 px-2 sm:px-4 bg-gray-100 rounded-lg shadow-inner">
        {corporateCultureItems.map((item, index) => (
          <AnimatedSection key={item.letter} delay={300 + index * 100}>
            <motion.div 
              className="group flex flex-col items-center justify-start h-full px-1 sm:px-2 py-2 sm:py-4 cursor-pointer"
              onClick={() => {
                if (isMobile) {
                  setActiveItem(activeItem === index ? null : index);
                }
              }}
              onMouseEnter={() => !isMobile && setActiveItem(index)}
              onMouseLeave={() => !isMobile && setActiveItem(null)}
              whileTap={isMobile ? { scale: 0.95 } : {}}
            >
              <motion.div
                className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1e3a8a] mb-1 sm:mb-2 leading-none transition-transform duration-300 ${
                  activeItem === index ? '-translate-y-1 sm:-translate-y-2' : ''
                }`}
                animate={
                  isMobile && activeItem !== index && showTapPrompt 
                    ? { 
                        scale: [1, 1.05, 1],
                        transition: { repeat: Infinity, duration: 1.5 }
                      } 
                    : {}
                }
              >
                {item.letter}
              </motion.div>
              <motion.p 
                className={`text-xs sm:text-sm font-sans uppercase text-[#1e3a8a] text-center max-w-[100px] sm:max-w-[120px] mx-auto transition-all duration-300 ${
                  isMobile || activeItem === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                initial={false}
              >
                {item.text}
              </motion.p>
              {isMobile && (
                <motion.div
                  className={`mt-1 ${activeItem === index ? 'rotate-180' : ''}`}
                  animate={
                    activeItem === index
                      ? { opacity: 1, y: 0 }
                      : { opacity: showTapPrompt ? 0.7 : 0, y: showTapPrompt ? [0, 5, 0] : 0 }
                  }
                  transition={showTapPrompt ? { y: { repeat: Infinity, duration: 1.5 } } : {}}
                >
                </motion.div>
              )}
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
