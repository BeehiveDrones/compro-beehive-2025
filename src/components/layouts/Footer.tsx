'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#134280] text-white mt-2 pt-6 pb-6 text-sm">
      <div className="container mx-auto px-4 md:px-10">
        {/* Navigasi + Sosial Media */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-6">
          {/* Navigasi */}
          <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-center">
            <li><Link href="/advance-manufacturing" className="hover:underline">All Drone</Link></li>
            <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
            <li><Link href="/careers" className="hover:underline">Careers</Link></li>
            <li><Link href="/contact-us" className="hover:underline">Contact Us</Link></li>
            <li><Link href="/flightsafe" className="hover:underline">Beehive FlightSafe</Link></li>
          </ul>

          {/* Sosial Media */}
          <div className="flex justify-center md:justify-end gap-6 text-xl">
            <a href="https://www.instagram.com/beehivedrones" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <i className="bi bi-instagram" />
            </a>
            <a href="https://www.linkedin.com/company/beehivedrones" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <i className="bi bi-linkedin" />
            </a>
            <a href="https://www.tiktok.com/@beehivedrones" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <i className="bi bi-tiktok" />
            </a>
            <a href="https://m.youtube.com/@AeroVersumGroup" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <i className="bi bi-youtube" />
            </a>
          </div>
        </div>

        <hr className="border-white/30 my-4" />

        {/* Bagian logo dan info */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-6 ml-20">
          {/* Kiri - Logo Beehive & ISO */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <Image src="/images/logo.beehave.1.png" alt="Beehive Logo" width={180} height={40} />
            <Image src="/images/iso.png" alt="ISO Logo" width={120} height={40} />
          </div>

          {/* Tengah - About & Contacts dibagi 2 kolom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left mt-10">
            <div>
              <h3 className="font-semibold">About Us</h3>
              <p className="text-xs mt-2">
                PT. Lumbung Muncul Sejahtera is a data analytics and natural resources
                management company with a sustainable orientation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Contacts</h3>
              <p className="text-xs mt-2">Email: marketing@lumbungmuncul.com</p>
              <p className="text-xs">Whatsapp: +62 818-999-771</p>
              <p className="text-xs">Jl. Kalireso No.8, Yogyakarta 55582</p>
            </div>
          </div>

          {/* Kanan - Logo AeroVersum */}
          <div className="flex justify-center md:justify-end mr-20">
            <Image src="/images/logo.aeroversum.beehave.png" alt="AeroVersum Logo" width={180} height={60} />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs mt-6">
          <small>&copy; 2025 Beehive Drones. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
