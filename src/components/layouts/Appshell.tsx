'use client';

import Navbar from '@/components/layouts/Navbar'; // Sesuaikan path sesuai struktur project kamu
import Footer from '@/components/layouts/Footer'; // Jika kamu ingin memisahkan Footer ke file sendiri

type Props = {
  children: React.ReactNode;
};

const Appshell = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow ">{children}</main>
      <Footer />
    </div>
  );
};

export default Appshell;
