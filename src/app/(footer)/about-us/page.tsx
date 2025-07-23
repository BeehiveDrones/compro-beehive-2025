'use client';

import Image from 'next/image';
import AnimatedSection from './components/AnimatedSection';
import CommitmentCard from './components/CommitmentCard';

export default function AboutUs() {
  return (
    <main className="container mx-auto px-4 py-12 bg-white">
      {/* Our Journey Section */}
      <section className="mb-16">
        <AnimatedSection>
          <h1 className="text-4xl font-extrabold text-[#1e3a8a] mt-15">About Us</h1>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-2/3">
            <AnimatedSection delay={100}>
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-3">Our Journey</h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                Beehive Drones was founded in 2017 by a group of Indonesian students in Manchester, UK, aiming to bring drone power to conventional industries. Today, we provide drone systems, IoT sensors, surveillance, and mapping management. Our swarm drone tech made us a world finalist in Microsoft s 2018 Imagine Cup.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                Officially registered in Indonesia as PT Aerotek Global Inovasi, we partner with private and government sectors to deliver reliable and affordable aerial technologies.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <p className="text-gray-700 leading-relaxed text-justify">
                With the motto REDEFINING THE POSSIBILITIES, we aim to assist industries in embracing modern tech and becoming a trusted partner in Industry 4.0.
              </p>
            </AnimatedSection>
          </div>

<div className="relative w-full h-44 shadow-lg overflow-hidden rounded-lg  min-h-[16rem] sm:min-h-[20rem] md:min-h-[24rem] md:w-[800px] ">
  <Image
    src="/images/team.jpg"
    alt="Test"
    fill
    className="object-cover transition-transform duration-500 hover:scale-105"
  />
</div>

        </div>
      </section>

      {/* Our Commitment to Excellence */}
      <section className="mb-12">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-[#1e3a8a] mt-30 text-center mb-12">Our Commitment to Excellence</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          <CommitmentCard icon="/icons/7.png" title="Perseverance" delay={100} description="We are committed to prioritize customer satisfaction by leveraging effective risk management practices." />
          <CommitmentCard icon="/icons/8.png" title="Quality" delay={200} description="We are commited to strive for excellent quality and continuous improvement of our technology." />
          <CommitmentCard icon="/icons/9.png" title="Safety & Integrity" delay={300} description="We are committed to comply with laws and regulations, prioritizing safety and ethical standards." />
          <CommitmentCard icon="/icons/10.png" title="Synergy & Innovation" delay={400} description="We are committed to continuously improving performance and consistently implementing Quality Management Systems while investing in our team's growth and embracing new challenges.." />
        </div>
      </section>

      {/* Our Goals */}
      <section className="mb-16 ml-20  mr-20 mt-20">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">Our Goals</h2>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <p className="text-gray-700 leading-relaxed mb-8 text-justify">
            We aim to leverage our clients sales force and solving their problems using our advance technology. We also aspire to improve, connect, and transform human lives through Innovative Drone Technology and Advanced Sensor Network System and become the <strong>World-Leading Company</strong> on Advanced System of Drone Technology.</p>
        </AnimatedSection>

        {/* Quality Standards */}
        <AnimatedSection delay={200}>
          <h3 className="text-2xl font-bold text-[#1e3a8a] mb-0 mt-20">Our Quality Standards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <div>
              <p className="text-gray-700 leading-relaxed text-justify">
                Beehive Drones is committed to delivering high-quality drone technology. As an <strong text-back font-bold>ISO 9001:2015</strong>  certified company in <strong text-black text-bold>Design & Manufacturing of Drones,</strong> we ensure every product meets international standards through precise and efficient processes. With a focus on research and development, we guarantee reliability, safety, and customer satisfaction in every solution we provide.</p>
            </div>
            <div className="relative w-full  h-40">
              <Image src="/images/iso2.png" alt="ISO Certified" layout="fill" objectFit="contain" />
            </div>

            <div>
              <p className="text-gray-700 leading-relaxed text-justify">
                In support of national industry growth, Beehive Drones also prioritizes compliance with <strong text-black>Indonesia’s TKDN (Domestic Component Level)</strong> regulations. By increasing the proportion of locally sourced components in our products, we contribute to the development of domestic manufacturing capabilities and strengthen the local supply chain. This commitment reflects our dedication to sustainable innovation, regulatory alignment, and long-term economic impact.</p>
            </div>
            <div className="relative w-full h-40">
              <Image src="/images/tkdn.png" alt="TKDN Logo" layout="fill" objectFit="contain" />
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
