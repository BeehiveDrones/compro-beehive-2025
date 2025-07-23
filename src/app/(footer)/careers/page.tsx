'use client';
import HeroSection from './components/HeroSection';
import ImpactSection from './components/ImpactSection';
import OurValues from './components/OurValues';
import HiringSection from './components/HiringSection';
import React from 'react';

export default function CareerPage() {
  return (
    <main>
      <HeroSection />
      <ImpactSection />
      <OurValues/>
      <HiringSection/>
    </main>
  );
}

