'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#134280] text-white mt-2 pt-6 pb-6 text-sm">
      <div className="container mx-auto px-4 md:px-10">
        {/* Navigasi + Sosial Media */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-6">
          <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-center">
            <li>
              <Link href="/advance-manufacturing" className="hover:underline">
                All Drone
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/flightsafe" className="hover:underline">
                Beehive FlightSafe
              </Link>
            </li>
          </ul>

          <div className="flex justify-center md:justify-end gap-6 text-xl">
            <a
              href="https://www.instagram.com/beehivedrones"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <i className="bi bi-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/beehivedrones"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <i className="bi bi-linkedin" />
            </a>
            <a
              href="https://www.tiktok.com/@beehivedrones"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <i className="bi bi-tiktok" />
            </a>
            <a
              href="https://m.youtube.com/@AeroVersumGroup"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <i className="bi bi-youtube" />
            </a>
          </div>
        </div>

        <hr className="border-white/30 my-4" />
        <div className="grid grid-cols-1 md:grid-cols-5 items-start gap-6 ">
          {/* Kiri - Logo Beehive & ISO (col 1) */}
          <div className="flex items-center justify-center xl:justify-start xl:-mt-2 md:mt-9 lg:justify-start lg:mt-5 ">
            <Image
              src="/images/logo.beehave.1.png"
              alt="Beehive Logo"
              width={150}
              height={40}
              className="-mt-3 xl:w-[230] xl:h-[220] md:w-[150] md:h-[100] "
            />
            <Image
              src="/images/iso.png"
              alt="ISO Logo"
              width={100}
              height={40}
              className="-mt-7 xl:w-[150] xl:h-[90] md:w-[100] md:h-[60] "
            />
          </div>

          {/* About Us (col 2-3) */}
          <div className=" md:col-span-2 xl:col-span-2 xl:text-left xl:mt-5 xl:ml-30 text-left md:ml-5 ">
            <h3 className="font-semibold text-sm sm:text-base md:text-md xl:text-xl mb-2 md:text-[20px]"> About Us </h3>
            <div className="xl:text-sm leading-relaxed md:text-[10px]">
              <p>
                PT. Aerotek Global Inovasi (Beehive Drones) is a drone system
              </p>
              <p>
                provider company that focuses on R&amp;D and implementation of
              </p>
              <p>drone technology in conventional industries.</p>
            </div>
          </div>

          {/* Contacts (col 4) */}
          <div className="font-semibold text-sm sm:text-base md:text-md xl:text-xl xl:mt-5 ">
            <h3 className="font-semibold text-sm sm:text-base md:text-md xl:text-xl mb-2 md:text-[20px]">Contacts</h3>
            <div className="text-sm leading-relaxed space-y-1 md:text-[8px] xl:text-sm">
              <p className="whitespace-nowrap">
                Email: marketing@beehivedrones.com
              </p>
              <p className="whitespace-nowrap">Whatsapp: +62 818-999-771</p>
              <p>Jl. Kalireso No.8 Yogyakarta 55582</p>
              
            </div>
          </div>

          {/* Kanan - Logo AeroVersum (col 5) */}
          <div className="xl:col-span-1 flex justify-center xl:justify-end lg:justify-end items-center  ">
            <Image
              src="/images/logo.aeroversum.beehave.png"
              alt="AeroVersum Logo"
              width={200}
              height={60}
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
