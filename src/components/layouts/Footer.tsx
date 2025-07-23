'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#134280] text-white mt-2 pt-4 pb-6 text-sm">
      <div className="container mx-auto px-4 md:px-10">
        {/* Navigasi + Sosial Media */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-6">
          {/* Navigasi */}
          <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-center">
            <li><Link href="#" className="hover:underline">All Drone</Link></li>
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

        {/* Garis pemisah */}
        <hr className="border-white/30 my-4" />

        {/* Kebijakan */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-center md:text-left mb-6">
          <Link href="#">Privacy Policy</Link>
          <span>·</span>
          <Link href="#">Use of Cookies</Link>
          <span>·</span>
          <Link href="#">Terms of Use</Link>
          <span>·</span>
          <Link href="#" className="hover:underline">Business Information</Link>
          <span>·</span>
          <Link href="#" className="hover:underline">Cookie Preferences</Link>
        </div>

{/* Logo Beehive, ISO & AeroVersum sejajar */}
<div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
  <div className="flex flex-row flex-wrap items-center justify-center gap-4">
    <Image
  src="/images/logo.beehave.1.png"
  alt="Beehive Logo"
  width={80}   // ukuran mobile
  height={30}
  className="md:w-36 md:h-auto"
/>
<Image
  src="/images/iso.png"
  alt="ISO Logo"
  width={80}
  height={30}
  className="md:w-36 md:h-auto"
/>
<Image
  src="/images/logo.aeroversum.beehave.png"
  alt="AeroVersum Logo"
  width={80}
  height={30}
  className="md:w-36 md:h-auto"
/>

  </div>
</div>


        {/* Copyright */}
        <div className="text-center text-xs mt-4">
          <small>&copy; 2025 Beehive Drones. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
