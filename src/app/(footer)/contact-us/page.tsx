'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Youtube,
  Music2,
} from 'lucide-react';
import Form from './components/form';

export default function AboutPage() {
  return (
    <>
      <section className="w-full h-[250px] mt-13 overflow-hidden">
        <FullScreenMap />
      </section>
      <Contact />
    </>
  );
}

function FullScreenMap() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: isHovering ? 1.02 : 1 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="w-full h-full"
    >
      <iframe
        title="Lokasi Beehive"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.237691546702!2d110.39547827484292!3d-7.65757319235883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5e43bd2fbfeb%3A0xf70011c5a67919cb!2sJl.%20Kalireso%20No.8%2C%20Kumendung%2C%20Candibinangun%2C%20Kec.%20Pakem%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta%2055582!5e0!3m2!1sid!2sid!4v1752216074785!5m2!1sid!2sid"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </motion.div>
  );
}

function Contact() {
  return (
    <section className="w-full px-4 py-12 md:py-16 bg-white text-[#1e3a8a] font-exo2">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Form Section */}
        <Form />

        {/* Contact Info Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-exo2">Get in Touch</h2>
          <p className="text-gray-700 font-open-sans">
            WE&apos;RE ALWAYS HAPPY TO HELP. Get in touch with us today!
          </p>

          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 mt-1 text-[#1e3a8a] font-open-sans" />
            <a href="https://wa.me/62818999771" target="_blank" rel="noopener noreferrer" className="hover:underline font-open-sans">
              +6281 8999 771
            </a>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 mt-1 text-[#1e3a8a]" />
            <a href="mailto:marketing@beehivedrones.com" className="hover:underline font-open-sans">
              marketing@beehivedrones.com
            </a>
          </div>

          <div className="flex items-start gap-3 ">
            <MapPin  className="w-10 h-10 mt-1 text-[#1e3a8a] font-open-sans" />
            <p>
              Jl. Kalireso No.8, Kumendung, Candibinangun, Kec. Pakem, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55582
            </p>
          </div>

          <hr className="border-[#1e3a8a] my-4" />

          <h3 className="font-bold font-open-sans">We are on Socials</h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-800">
            <a
              href="https://www.instagram.com/beehivedrones/#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@beehivedrones"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <Music2 className="w-5 h-5" />
              Tiktok
            </a>
            <a
              href="https://www.linkedin.com/company/beehivedrones"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@AeroVersumGroup?app=desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <Youtube className="w-5 h-5" />
              YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
