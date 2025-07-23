'use client';

import HeroSection from '@/components/homecomponents/HeroSection';
import ProductShowcase from '@/components/homecomponents/ProductShowcase';
import IndustryText from '@/components/homecomponents/IndustryText';
import SliderSection from '@/components/homecomponents/SliderSection';
import LogoCarousel from '@/components/homecomponents/LogoCarousel';
import UpdatesSection from '@/components/homecomponents/UpdatesSection';

export default function Home() {
  return (
    <main className='bg-white'>
      <HeroSection />
      <ProductShowcase />
      <IndustryText />
      <SliderSection />
      <LogoCarousel />
      <UpdatesSection />
    </main>
  );
}