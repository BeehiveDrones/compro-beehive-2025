'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, ChevronDown, Menu, X } from 'lucide-react';
import { useState, SetStateAction } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isRndOpen, setIsRndOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const [selectedLang, setSelectedLang] = useState({
    code: "en",
    label: "English",
    flag: "/bendera/31.png",
  });

  const languages = [
    { code: "en", label: "English", flag: "/bendera/31.png" },
    { code: "id", label: "Indonesia", flag: "/bendera/32.png" },
    { code: "cn", label: "中文", flag: "/bendera/33.png" },
    { code: "jp", label: "日本語", flag: "/bendera/34.png" },
  ];

  const handleSelectLang = (lang: SetStateAction<{ code: string; label: string; flag: string }>) => {
    setSelectedLang(lang);
    setIsLangOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsProductOpen(false);
    setIsRndOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-[#134280] bg-[#134280] px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-3 xl:px-10 xl:py-4 text-white shadow-md font-[calibri] text-sm sm:text-base md:text-lg lg:text-xl lg:h-18">
      <div className="flex items-center justify-between h-8 sm:h-10 md:h-5 lg:h-14 xl:h-10 w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0" onClick={closeMobileMenu}>
          <Image
            src="/images/logo.beehave.1.png"
            alt="Beehive Drones Logo"
            width={80}
            height={26}
            className="w-16 h-auto sm:w-20 md:w-24 lg:w-28 xl:w-32 2xl:w-36"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-between w-full">
          <div className="flex items-center gap-4 xl:gap-6 2xl:gap-8 ml-4 xl:ml-6">
            <div className="relative" onMouseEnter={() => setIsProductOpen(true)} onMouseLeave={() => setIsProductOpen(false)}>
              <button className="flex items-center gap-1 px-2 py-1 hover:text-blue-400 lg:px-3 lg:py-1.5 xl:px-4 xl:py-2 2xl:px-5 2xl:py-2.5 text-sm lg:text-base xl:text-lg 2xl:text-xl whitespace-nowrap">
                Products & Services <ChevronDown size={16} className="lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
              </button>
              {isProductOpen && (
                <div className="absolute left-0 top-full mt-1 w-48 lg:w-52 xl:w-56 bg-white text-black rounded shadow z-50">
                  <ul className="py-1">
                    <li><Link href="/drone-services" className="block px-3 py-2 lg:px-4 lg:py-2.5 hover:bg-[#134280] hover:text-white text-sm lg:text-base">Drone Services</Link></li>
                    <li><Link href="/advance-manufacturing" className="block px-3 py-2 lg:px-4 lg:py-2.5 hover:bg-[#134280] hover:text-white text-sm lg:text-base">Advance Manufacturing</Link></li>
                    <li><Link href="/training" className="block px-3 py-2 lg:px-4 lg:py-2.5 hover:bg-[#134280] hover:text-white text-sm lg:text-base">Training</Link></li>
                    <li><Link href="/rnd-services" className="block px-3 py-2 lg:px-4 lg:py-2.5 hover:bg-[#134280] hover:text-white text-sm lg:text-base">R&amp;D Services</Link></li>
                  </ul>
                </div>
              )}
            </div>

            <Link href="/projects" className="hover:text-blue-400 text-sm lg:text-base xl:text-lg 2xl:text-xl whitespace-nowrap">Our Projects</Link>

            <div className="relative" onMouseEnter={() => setIsRndOpen(true)} onMouseLeave={() => setIsRndOpen(false)}>
              <button className="flex items-center gap-1 px-2 py-1 hover:text-blue-400 lg:px-3 lg:py-1.5 xl:px-4 xl:py-2 text-sm lg:text-base xl:text-lg 2xl:text-xl whitespace-nowrap">
                R&amp;D <ChevronDown size={16} className="lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
              </button>
              {isRndOpen && (
                <div className="absolute left-0 top-full mt-1 w-40 lg:w-48 xl:w-52 bg-white text-black rounded shadow z-50">
                  <ul className="py-1">
                    <li><Link href="/birl" className="block px-3 py-2 lg:px-4 lg:py-2.5 hover:bg-[#134280] hover:text-white text-sm lg:text-base">BIRL</Link></li>
                    <li><Link href="/innovations" className="block px-3 py-2 lg:px-4 lg:py-2.5 hover:bg-[#134280] hover:text-white text-sm lg:text-base">Our Innovations</Link></li>
                  </ul>
                </div>
              )}
            </div>

            <Link href="/articles" className="hover:text-blue-400 text-sm lg:text-base xl:text-lg 2xl:text-xl whitespace-nowrap">Articles</Link>
          </div>

          {/* Tombol kanan desktop */}
          <div className="flex items-center gap-2 xl:gap-3 2xl:gap-4">
            {/* Language dropdown */}
            <div className="relative">
              <button className="flex items-center gap-2 px-2 py-1 text-white font-semibold text-sm" onClick={() => setIsLangOpen(!isLangOpen)}>
                <Image src={selectedLang.flag} alt={selectedLang.label} width={20} height={20} className="rounded-full" />
                {selectedLang.code.toUpperCase()}
                <ChevronDown size={14} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-50"
                  >
                    <ul className="py-1 text-sm">
                      {languages.map((lang) => (
                        <li key={lang.code}>
                          <button onClick={() => handleSelectLang(lang)} className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100 text-left text-black">
                            <Image src={lang.flag} alt={lang.label} width={20} height={20} className="rounded-full" />
                            {lang.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/demo">
              <button className="relative overflow-hidden group text-blue-900 font-semibold px-2 py-1 lg:px-3 lg:py-1.5 xl:px-4 xl:py-2 2xl:px-5 2xl:py-2.5 rounded bg-white border border-blue-900 text-xs lg:text-sm xl:text-base 2xl:text-lg whitespace-nowrap">
                <span className="relative z-10 group-hover:text-white transition duration-300">Demo Drone</span>
                <span className="absolute inset-0 bg-blue-800 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out z-0"></span>
              </button>
            </Link>

            <Link href="/coming-soon">
              <button className="relative overflow-hidden group text-blue-900 font-semibold px-2 py-1 lg:px-3 lg:py-1.5 xl:px-4 xl:py-2 2xl:px-5 2xl:py-2.5 rounded border border-blue-900 bg-white flex items-center space-x-1 text-xs lg:text-sm xl:text-base 2xl:text-lg whitespace-nowrap">
                <span className="relative z-10 flex items-center space-x-1 group-hover:text-white transition duration-300">
                  <ShoppingBag size={14} className="lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                  <span>BVD Store</span>
                </span>
                <span className="absolute inset-0 bg-blue-900 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out z-0"></span>
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-1">
            {isMobileMenuOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <Menu size={28} className="sm:w-8 sm:h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-2 sm:mt-4 space-y-1 sm:space-y-2 text-xs sm:text-sm font-medium pb-4">
          <details className="px-2">
            <summary className="cursor-pointer py-2 hover:text-blue-300 text-sm sm:text-base">Products &amp; Services</summary>
            <div className="pl-4 space-y-1 sm:space-y-2 mt-2">
              <Link href="/drone-services" className="block py-1 hover:text-blue-400 text-xs sm:text-sm" onClick={closeMobileMenu}>Drone Services</Link>
              <Link href="/advance-manufacturing" className="block py-1 hover:text-blue-400 text-xs sm:text-sm" onClick={closeMobileMenu}>Advance Manufacturing</Link>
              <Link href="/training" className="block py-1 hover:text-blue-400 text-xs sm:text-sm" onClick={closeMobileMenu}>Training</Link>
              <Link href="/rnd-services" className="block py-1 hover:text-blue-400 text-xs sm:text-sm" onClick={closeMobileMenu}>R&amp;D Services</Link>
            </div>
          </details>

          <Link href="/projects" className="block px-2 py-2 hover:bg-blue-700 rounded text-sm sm:text-base" onClick={closeMobileMenu}>Our Projects</Link>

          <details className="px-2">
            <summary className="cursor-pointer py-2 hover:text-blue-300 text-sm sm:text-base">R&amp;D</summary>
            <div className="pl-4 space-y-1 sm:space-y-2 mt-2">
              <Link href="/birl" className="block py-1 hover:text-blue-400 text-xs sm:text-sm" onClick={closeMobileMenu}>BIRL</Link>
              <Link href="/innovations" className="block py-1 hover:text-blue-400 text-xs sm:text-sm" onClick={closeMobileMenu}>Our Innovations</Link>
            </div>
          </details>

          <Link href="/articles" className="block px-2 py-2 hover:bg-blue-700 rounded text-sm sm:text-base" onClick={closeMobileMenu}>Articles</Link>

          <div className="pt-2 space-y-2">
            <Link href="/demo" className="block px-2 py-2 bg-white text-blue-900 rounded font-semibold hover:bg-blue-700 hover:text-white w-fit text-xs sm:text-sm" onClick={closeMobileMenu}>Demo Drone</Link>
            <Link href="/store" className="flex items-center gap-2 px-2 py-2 bg-white text-blue-900 rounded font-semibold hover:bg-blue-700 hover:text-white w-fit text-xs sm:text-sm" onClick={closeMobileMenu}>
              <ShoppingBag size={14} className="sm:w-4 sm:h-4" />
              <span>BVD Store</span>
            </Link>

            {/* Dropdown bahasa mobile */}
            <div className="relative mt-2">
              <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-2 px-2 py-1.5 text-white text-xs sm:text-sm rounded w-fit">
                <Image src={selectedLang.flag} alt={selectedLang.label} width={20} height={20} className="rounded-full" />
                {selectedLang.code.toUpperCase()}
                <ChevronDown size={14} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }} className="absolute left-0 mt-2 w-40 text-black bg-white border border-gray-200 rounded shadow-lg z-50">
                    <ul className="py-1 text-sm">
                      {languages.map((lang) => (
                        <li key={lang.code}>
                          <button onClick={() => handleSelectLang(lang)} className="w-full flex items-center gap-2 px-3 py-2 text-black hover:bg-gray-100 text-left">
                            <Image src={lang.flag} alt={lang.label} width={20} height={20} className="rounded-full" />
                            {lang.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
