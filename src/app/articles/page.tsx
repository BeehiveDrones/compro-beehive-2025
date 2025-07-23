'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

function ArticlePage() {
  return (
    <main>
      <HeroSection />
      <InnovationSection />
          
    </main>
  );
}

function HeroSection() {
  return (
    <>
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
    </>
  );
}

const innovations = [
  {
    id: 1,
    category: 'Category',
    title: 'Heading',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    venue: 'venue, date',
    image: '/placeholder.png',
  },
  // Tambahkan data lain jika perlu
];

function InnovationSection() {
  return (
    <section className="bg-white py-10 px-6 md:px-20 mt-10">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">Articles</h2>

{/* Filter Categories */}
<div className="flex flex-wrap gap-3 mb-10">
  {['Category', 'Category', 'Category', 'Category', 'Category'].map((cat, index) => (
    <button
      key={index}
      className="px-4 py-2 rounded-full text-sm font-semibold bg-gray-500 text-white hover:bg-[#1e3a8a] transition"
    >
      {cat}
    </button>
  ))}
</div>


      {/* Innovation List */}
      <div className="space-y-10">
        {innovations.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row gap-6 items-start"
          >
            {/* Image */}
            <div className="flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className="rounded-md object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex-1">
              <div className="text-sm text-right text-gray-500 mb-1">{item.venue}</div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{item.description}</p>
              <a
                href="#"
                className="mt-auto self-start inline-flex items-center gap-2 px-4 py-2 bg-white text-[#1e3a8a] text-sm font-semibold rounded shadow shadow-gray-300 hover:bg-[#1e3a8a] hover:text-white transition"
              >
                Read More
                <svg className="w-4 h-4" viewBox="0 0 20 20">
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ArticlePage;
