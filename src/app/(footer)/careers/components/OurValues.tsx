import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

export default function OurValues() {
  const values = [
    {
      title: 'Problem Solver',
      iconSrc: '/icons/20.png',
    },
    {
      title: 'Innovative',
      iconSrc: '/icons/21.png',
    },
    {
      title: 'Efficient',
      iconSrc: '/icons/22.png',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 md:py-16 text-center bg-white">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-exo2 font-bold text-[#1e3a8a] mb-12">Our Values</h2>
      </AnimatedSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"> 
        {values.map((value, index) => (
          <AnimatedSection key={value.title} delay={100 + index * 100}>
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 ml-20h-60 flex flex-col items-center justify-center
                          transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-[#1e3a8a] group
                          mx-auto max-w-xs">
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4 group-hover:text-blue-700 transition-colors duration-300">
                {value.title}
              </h3>
              <div className="relative w-24 h-24  flex items-center justify-center overflow-hidden
                            group-hover:scale-110 transition-transform duration-300">
                {value.iconSrc ? (
                  <Image
                    src={value.iconSrc}
                    alt={`${value.title} icon`}
                    layout="fill"
                    objectFit="contain"
                  />
                ) : (
                  <span className="text-gray-400 text-sm">No Icon</span>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <AnimatedSection delay={400}>
        <h3 className="text-2xl md:text-3xl font-exo2 font-bold text-[#1e3a8a] mb-8">
          &quot;We are PROUD to be the BEES&quot;
        </h3>
        <p className="text-gray-700 leading-relaxed max-w-6xl font-open-sans mx-auto text-justify">
          At Beehive Drones, we are actively developing technologies with the potential to change the course of life. We believe that hard work and innovative solutions result in big gains, so we prioritize hiring top talent and cultivating a culture based on merit. All Beehive Drones employees directly contribute to making our mission a reality. Beehive Drones is looking for world-class talents who are ready to tackle challenging futuristic projects. Take a look on some job opportunities we have that offers a competitive salary. Build your future with Beehive Drones!
        </p>
      </AnimatedSection>
    </section>
  );
}
