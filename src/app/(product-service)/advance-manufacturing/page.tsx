'use client';

import HeroSection from './components/HeroSection';
// import Desc from './components/Desc';
import KeyProduct from './components/KeyProduct';
import Certificate from './components/Certificate';

export default function AdvancedManufacturingPage() {
  return (
    <main>
      <HeroSection />
      {/* <Desc /> */}
      <Certificate />
      <KeyProduct />
    </main>
  );
}