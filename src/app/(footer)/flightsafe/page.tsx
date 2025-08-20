'use client'
import Image from 'next/image'

interface Tip {
  img: string
  text: string
  detail: string
}

const tips: Tip[] = [
  {
    img: '/icons/11.png',
    text: 'Always follow local regulations',
    detail: 'Make sure to check and follow all local drone regulations before flying. This includes no-fly zones, altitude limits, and registration requirements.'
  },
  {
    img: '/icons/12.png',
    text: 'Always fly in open areas and keep your drone within visual line of sight. ',
    detail: 'Flying in open areas reduces the risk of accidents. Always keep your drone where you can see it, and avoid flying over crowds, animals, or moving vehicles.'
  },
  {
    img: '/icons/13.png',
    text: 'Fly at a safe altitude and keep away from tall buildings',
    detail: 'Maintain a safe altitude as per regulations and avoid flying near tall structures to prevent signal loss or collisions.'
  },
  {
    img: '/icons/14.png',
    text: 'Never fly under the influence of drugs or alcohol',
    detail: 'Operating a drone requires full attention and coordination. Never fly if you are under the influence of substances that impair your abilities.'
  },
  {
    img: '/icons/15.png',
    text: 'Keep your hands on control sticks to maintain control throughout flight',
    detail: 'Always be ready to respond to unexpected situations by keeping your hands on the controls.'
  },
  {
    img: '/icons/16.png',
    text: 'Take off with strong GPS signal',
    detail: 'A strong GPS signal ensures accurate positioning and safer flight. Wait for a good signal before takeoff.'
  },
  {
    img: '/icons/17.png',
    text: 'Check your drone for damage and fully charge your device before each flight',
    detail: 'Inspect your drone for any damage and ensure batteries are fully charged to avoid mid-flight failures.'
  },
  {
    img: '/icons/18.png',
    text: 'Practice flying in the Flight Simulator',
    detail: 'Use a flight simulator to improve your skills and confidence before flying your drone outdoors.'
  },
]

export default function FlightSafetyTips() {
  return (
    <section className="px-4 py-10 max-w-7xl mx-auto text-center text-[#1e3a8a] font-exo2 bg-white">
      <h2 className="text-3xl md:text-4xl font-exo2 font-bold mb-4 mt-10">Flight Safety Tips</h2>
      <p className="mb-8 text-gray-700 font-open-sans">
        Beehive Drones is dedicated to helping pilots maximize their aerial potential safely and
        responsibly. This page provides essential safety tips, regulatory resources, and instructional
        guides to ensure a smooth and compliant flight experience.
      </p>

      <div className="bg-gray-100 p-4 md:p-8 rounded-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3 px-2 group"
            >
              <Image
                src={tip.img}
                alt={`Tip ${index + 1}`}
                width={60}
                height={60}
                className="object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              />
              <p className="text-sm text-gray-800 font-semibold font-exo2">{tip.text}</p>
              <p className="text-xs text-gray-600 hidden md:block font-open-sans">{tip.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <p className=" font-open-sans mt-10 text-sm text-gray-600 leading-relaxed ">
        Learn more about flight restrictions, safety protocols, and best practices to operate your drone
        with confidence. While we strive to offer comprehensive guidance, safety ultimately depends on
        your judgment as a pilot. As a Beehive Drones operator, you are responsible for ensuring all
        flights comply with local laws and regulations.
      </p>
    </section>
  )
}
