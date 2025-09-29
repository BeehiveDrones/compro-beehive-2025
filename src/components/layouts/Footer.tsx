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
          <div className="flex items-center justify-center xl:justify-start xl:-mb-7 md:mt-6 lg:justify-start lg:mb-25 ">
            <Image
              src="/images/2[1].png"
              alt="Beehive Logo"
              width={80}
              height={40}
              className="-mt-3 xl:w-[110px] xl:h-[90px] md:w-[100px] md:h-[70px] xl:mt-2 "
            />
            <Image
              src="/images/iso.png"
              alt="ISO Logo"
              width={100}
              height={40}
              className="-mt-7 xl:w-[150px] xl:h-[90px] md:w-[100px] md:h-[60px] xl:mt-2  md:mt-[1px] "
            />
          </div>

          {/* About Us (col 2-3) */}
          <div className=" md:col-span-2 xl:col-span-2 xl:text-left xl:mt-5 xl:ml-2 text-left md:ml-2 2xl:ml-8 ">
            <h3 className="font-semibold text-sm sm:text-base md:text-md xl:text-xl mb-2 md:text-[20px]"> About Us </h3>
            <div className="xl:text-sm leading-relaxed md:text-[8px]">
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
          <div className="text-sm sm:text-base md:text-md xl:text-xl xl:mt-5 md:mr-5 xl:ml-[-20px]">
            <h3 className="font-semibold text-sm sm:text-base md:text-md xl:text-xl mb-2 md:text-[20px]">
              Contacts
            </h3>
            <div className="text-sm space-y-1 md:text-[7px] xl:text-sm">
              <p className="whitespace-nowrap">
                Email: marketing@beehivedrones.com
              </p>
              <p className="whitespace-nowrap">Whatsapp: +62 818-999-771</p>
              <p>Jl. Kalireso No.8 Yogyakarta</p>
            </div>
          </div>

          {/* Kanan - Logo AeroVersum (col 5) */}
          < div className="justify-center md:justify-end flex xl:justify-end xl:mt-5 lg:justify-end">
            <Link href="http://lumbungmuncul.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/logo.aeroversum.beehave.png"
                alt="AeroVersum Logo"
                width={200}
                height={60}
                className="-mt-4 xl:w-[250px] xl:h-[190px] md:w-[160px] md:h-[140px] xl:mb-[21px]"
              />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs xl:-mt-18 md:-mt-5">
          <small>&copy; 2025 Beehive Drones. All Rights Reserved.</small>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
