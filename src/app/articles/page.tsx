'use client';
// pages/index.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { articles } from '../../data/articlesData';
import { Exo_2, Open_Sans } from 'next/font/google';
import { motion } from 'framer-motion';

const exo2 = Exo_2({
  subsets: ['latin'],
  variable: '--font-exo2',
  weight: ['400', '600', '700'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['400', '600'],
});

const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Drone Application',
    'Technology & Innovation',
    'Partnership & Collaboration',
    'Events & Projects',
    'Company News',
    'Product & Services',
    'Impact & Sustainability'
  ];

  const filteredArticles = articles
    .filter(article => {
      if (activeCategory === 'All') return true;
      if (Array.isArray(article.category)) {
        return article.category.includes(activeCategory);
      } else {
        return article.category === activeCategory;
      }
    })
    .sort((a, b) => b.id - a.id);

  const topRowCategories = categories.slice(0, 4);
  const bottomRowCategories = categories.slice(4);

  // Reusable button style
  const renderButton = (category: string) => (
    <button
      key={category}
      className={`px-2 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-2 text-xs sm:text-sm md:text-base rounded font-medium transition-colors duration-200
        ${activeCategory === category
          ? 'bg-[#134280] text-white font-open-sans shadow-md'
          : 'bg-white text-gray-700 border border-[#134280] hover:bg-gray-50'
        }`}
      onClick={() => setActiveCategory(category)}
    >
      {category}
    </button>
  );

  return (
    <div className={openSans.className}>
      {/* Hero Section */}
      <section className="bg-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10 lg:mt-20">
          <div className="text-center">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#134280] mb-3 sm:mb-4 ${exo2.className}`}>
              Latest News & Insight 
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#134280] font-open-sans mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Stay updated with the latest developments in technology, business innovation, and industry breakthroughs
            </p>

            {/* Category Buttons */}
            <div className="mt-6 sm:mt-8 px-2 font-open-sans">
              {/* Mobile/Tablet Layout */}
              <div className="block xl:hidden">
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-3">
                  {topRowCategories.map(renderButton)}
                </div>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {bottomRowCategories.map(renderButton)}
                </div>
              </div>

              {/* Desktop Layout - 2 Rows */}
              <div className="hidden xl:block">
                <div className="flex justify-center gap-3 mb-3">
                  {topRowCategories.map(renderButton)}
                </div>
                <div className="flex justify-center gap-3">
                  {bottomRowCategories.map(renderButton)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold text-[#134280] mb-6 sm:mb-8 text-center ${exo2.className}`}>
            Featured Articles
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
            {filteredArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-20 sm:h-32 md:h-40 lg:h-48 relative overflow-hidden">
                  <Image 
                    src={article.images[0]}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-2 sm:p-3 md:p-4 lg:p-6">
                  <div className="flex items-center text-[0.6rem] sm:text-xs md:text-sm text-gray-500 mb-1 sm:mb-2">
                    <span className="font-open-sans">
                      {Array.isArray(article.category)
                        ? article.category.join(', ')
                        : article.category}
                    </span>
                    <span className="mx-2 sm:mx-4">•</span>
                    <span>{article.dateUpload}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm md:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                    {article.title.length > 30 ? article.title.substring(0, 30) + '...' : article.title}
                  </h4>
                  {/* Render potongan content dengan HTML */}
                  <p
                    className="hidden sm:block text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-4"
                    dangerouslySetInnerHTML={{
                      __html: article.content[0].length > 80
                        ? article.content[0].substring(0, 80) + '...'
                        : article.content[0]
                    }}
                  />
                  <a
                    href={`/articles/${article.id}`}
                    className="text-[0.7rem] sm:text-sm md:text-base text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}

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
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
