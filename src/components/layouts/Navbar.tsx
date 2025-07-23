'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isRndOpen, setIsRndOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fungsi untuk menutup mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-[#134280] bg-[#134280] px-4 py-1 sm:px-6 sm:py-3 text-white shadow-md">
      <div className="flex items-center justify-between h-10">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
          <Image
            src="/images/logo.beehave.1.png"
            alt="Beehive Drones Logo"
            width={120}
            height={40}
          />
        </Link>

        {/* --- Desktop menu --- */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Menu utama */}
          <div className="flex items-center gap-10 ml-6">
            <div
              className="relative"
              onMouseEnter={() => setIsProductOpen(true)}
              onMouseLeave={() => setIsProductOpen(false)}
            >
              <button className="flex items-center gap-1 px-2 py-1 hover:text-blue-400">
                Products &amp; Services <ChevronDown size={14} />
              </button>
              {isProductOpen && (
                <div className="absolute left-0 top-full mt-1 w-52 bg-white text-black rounded shadow z-50">
                  <ul className="py-1">
                    <li><Link href="/drone-services" className="block px-4 py-2 hover:bg-[#134280] hover:text-white">Drone Services</Link></li>
                    <li><Link href="/advance-manufacturing" className="block px-4 py-2 hover:bg-[#134280] hover:text-white">Advance Manufacturing</Link></li>
                    <li><Link href="/training" className="block px-4 py-2 hover:bg-[#134280] hover:text-white">Training</Link></li>
                    <li><Link href="/rnd-services" className="block px-4 py-2 hover:bg-[#134280] hover:text-white">R&amp;D Services</Link></li>
                  </ul>
                </div>
              )}
            </div>

            <Link href="/projects" className="hover:text-blue-400">Our Projects</Link>

            <div
              className="relative"
              onMouseEnter={() => setIsRndOpen(true)}
              onMouseLeave={() => setIsRndOpen(false)}
            >
              <button className="flex items-center gap-1 px-2 py-1 hover:text-blue-400">
                R&amp;D <ChevronDown size={14} />
              </button>
              {isRndOpen && (
                <div className="absolute left-0 top-full mt-1 w-48 bg-white text-black rounded shadow z-50">
                  <ul className="py-1">
                    <li><Link href="/birl" className="block px-4 py-2 hover:bg-[#134280] hover:text-white">BIRL</Link></li>
                    <li><Link href="/innovations" className="block px-4 py-2 hover:bg-[#134280] hover:text-white">Our Innovations</Link></li>
                  </ul>
                </div>
              )}
            </div>

            <Link href="/articles" className="hover:text-blue-400">Articles</Link>
          </div>

          {/* Tombol kanan */}
          <div className="flex items-center gap-3">
<Link href="/demo">
  <button className="relative overflow-hidden group text-blue-900 font-semibold px-4 py-2 rounded bg-white border border-blue-900">
    <span className="relative z-10 group-hover:text-white transition duration-300">Demo Drone</span>
    <span className="absolute inset-0 bg-blue-800 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out z-0"></span>
  </button>
</Link>


<Link href="/store">
  <button className="relative overflow-hidden group text-blue-900 font-semibold px-4 py-2 rounded border border-blue-900 bg-white flex items-center space-x-1">
    <span className="relative z-10 flex items-center space-x-1 group-hover:text-white transition duration-300">
      <ShoppingBag size={16} />
      <span>BVD Store</span>
    </span>
    <span className="absolute inset-0 bg-blue-900 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out z-0"></span>
  </button>
</Link>

          </div>
        </div>

        {/* --- Mobile hamburger --- */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={35} />}
          </button>
        </div>
      </div>

      {/* --- Mobile menu --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-2 text-sm font-medium">
          <details className="px-2">
            <summary className="cursor-pointer py-2 hover:text-blue-300">Products &amp; Services</summary>
            <div className="pl-4 space-y-2 mt-2">
              <Link href="/drone-services" className="block py-1 hover:text-blue-400" onClick={closeMobileMenu}>Drone Services</Link>
              <Link href="/advance-manufacturing" className="block py-1 hover:text-blue-400" onClick={closeMobileMenu}>Advance Manufacturing</Link>
              <Link href="/training" className="block py-1 hover:text-blue-400" onClick={closeMobileMenu}>Training</Link>
              <Link href="/rnd-services" className="block py-1 hover:text-blue-400" onClick={closeMobileMenu}>R&amp;D Services</Link>
            </div>
          </details>
          <Link href="/projects" className="block py-1 hover:text-blue-400" onClick={closeMobileMenu}>Our Projects</Link>
          <details className="px-2">
            <summary className="cursor-pointer py-2 hover:text-blue-300">R&amp;D</summary>
            <div className="pl-4 space-y-2 mt-2">
              <Link href="/birl" className="block px-2 py-2 hover:bg-blue-700 rounded" onClick={closeMobileMenu}>BIRL</Link>
              <Link href="/innovations" className="block px-2 py-2 hover:bg-blue-700 rounded" onClick={closeMobileMenu}>Our Innovations</Link>
            </div>
          </details>

          <Link href="/articles" className="block px-2 py-2 hover:bg-blue-700 rounded" onClick={closeMobileMenu}>Articles</Link>

          <Link href="/demo" className="block px-2 py-2 bg-white text-blue-900 rounded font-semibold hover:bg-blue-700 hover:text-white w-31" onClick={closeMobileMenu}>Demo Drone</Link>
          <Link
            href="/store"
            className="flex items-center gap-2 px-4 py-2 bg-white text-blue-900 rounded font-semibold hover:bg-blue-700 hover:text-white w-fit"
            onClick={closeMobileMenu}
          >
            <ShoppingBag size={16} />
            <span>BVD Store</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;