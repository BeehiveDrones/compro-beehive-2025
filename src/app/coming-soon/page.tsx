import React from 'react';

// Untuk memastikan font 'Exo 2' dapat digunakan, Anda perlu menambahkan link Google Fonts
// ke file `globals.css` atau `layout.tsx` di proyek Next.js Anda.
// Contoh penambahan di `globals.css`:
// @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@700&display=swap');
// Atau di `layout.tsx`:
// <head>
//   <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@700&display=swap" rel="stylesheet" />
// </head>

export default function HomePage() {
  // Array untuk menyimpan properti setiap gelembung
  const bubbles = Array.from({ length: 15 }).map((_, i) => ({
    id: `bubble-${i}`, // Menggunakan ID unik
    size: Math.floor(Math.random() * 60) + 20, // Ukuran gelembung antara 20px dan 80px
    left: Math.random() * 100, // Posisi awal horizontal acak (0-100vw)
    animationDuration: Math.floor(Math.random() * 10) + 15, // Durasi animasi 15-25 detik
    animationDelay: Math.random() * 10, // Penundaan animasi 0-10 detik
  }));

  // Array untuk menyimpan properti setiap partikel
  const particles = Array.from({ length: 50 }).map((_, i) => ({
    id: `particle-${i}`, // Menggunakan ID unik
    size: Math.floor(Math.random() * 3) + 1, // Ukuran partikel antara 1px dan 4px
    left: Math.random() * 100, // Posisi awal horizontal acak (0-100vw)
    top: Math.random() * 100, // Posisi awal vertikal acak (0-100vh)
    animationDuration: Math.floor(Math.random() * 10) + 15, // Durasi animasi 15-25 detik
    animationDelay: Math.random() * 10, // Penundaan animasi 0-10 detik
  }));

  return (
    <div
      // Mengatur tinggi penuh viewport dan warna latar belakang biru
      // Menggunakan flexbox untuk memusatkan konten secara horizontal dan vertikal
      // Position relative untuk menempatkan gelembung dan partikel secara absolut di dalamnya
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: '#134280' }} // Warna biru estetis
    >
      {/* Menggunakan tag <style> standar untuk mendefinisikan keyframes animasi
          dan gaya untuk gelembung, partikel, serta teks utama. */}
      <style>{`
        /* Animasi untuk teks utama (pulse) */
        @keyframes pulse-subtle {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.01); /* Sedikit membesar */
            opacity: 0.95; /* Sedikit memudar */
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 3s infinite ease-in-out; /* Animasi berulang */
        }

        /* Definisi kelas font-exo2 agar font 'Exo 2' diterapkan */
        .font-exo2 {
          font-family: 'Exo 2', sans-serif;
        }

        /* Animasi efek cahaya yang berkelebat (light streak) pada teks utama */
        @keyframes light-streak {
            0% {
                background-position: -200% 0; /* Mulai dari kiri luar teks */
            }
            100% {
                background-position: 200% 0; /* Bergerak ke kanan luar teks */
            }
        }

        .light-streak-text {
            background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0) 0%, /* Transparan */
                rgba(255, 255, 255, 0.5) 25%, /* Cahaya */
                rgba(255, 255, 255, 0.5) 75%, /* Cahaya */
                rgba(255, 255, 255, 0) 100% /* Transparan */
            );
            background-size: 200% 100%; /* Ukuran gradien lebih lebar dari teks */
            -webkit-background-clip: text; /* Menerapkan gradien hanya pada teks (untuk webkit browsers) */
            background-clip: text; /* Menerapkan gradien hanya pada teks */
            color: transparent; /* Membuat warna teks transparan agar gradien terlihat */
            -webkit-text-fill-color: transparent; /* Untuk kompatibilitas webkit */
            animation: light-streak 4s infinite linear; /* Animasi cahaya berkelebat */
        }


        /* Animasi untuk gelembung */
        @keyframes bubble-rise {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(5vw); /* Bergerak ke atas dan sedikit ke samping */
            opacity: 0;
          }
        }

        .bubble {
          position: absolute;
          bottom: -100px; /* Mulai dari bawah layar */
          background: rgba(255, 255, 255, 0.2); /* Warna putih semi-transparan */
          border-radius: 50%;
          animation: bubble-rise linear infinite; /* Animasi linear berulang */
          filter: blur(2px); /* Memberikan efek blur untuk tampilan yang lebih halus */
        }

        /* Animasi untuk partikel */
        @keyframes particle-fade {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 0.8;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.5);
          }
        }

        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.8); /* Warna putih semi-transparan */
          border-radius: 50%;
          animation: particle-fade linear infinite alternate; /* Animasi linear berulang dan bergantian */
          filter: blur(0.5px); /* Sedikit blur untuk efek lebih halus */
        }
      `}</style>

      {/* Kontainer untuk partikel - di lapisan paling belakang (z-0) */}
      <div className="absolute inset-0 z-0">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}vw`,
              top: `${particle.top}vh`,
              animationDuration: `${particle.animationDuration}s`,
              animationDelay: `${particle.animationDelay}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Kontainer untuk gelembung - di lapisan tengah (z-0) */}
      <div className="absolute inset-0 z-0">
        {bubbles.map(bubble => (
          <div
            key={bubble.id}
            className="bubble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}vw`,
              animationDuration: `${bubble.animationDuration}s`,
              animationDelay: `${bubble.animationDelay}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Konten utama di atas gelembung dan partikel (z-10) */}
      <div className="text-center p-8 rounded-lg shadow-xl relative z-10"> {/* z-10 untuk memastikan teks di atas efek latar belakang */}
        <h1
          // Mengatur warna teks menjadi putih sebagai fallback, ukuran font besar, dan menerapkan font Exo 2.
          // Menggunakan kelas Tailwind untuk ukuran font yang responsif di berbagai device.
          // Menambahkan kelas `animate-pulse-subtle` untuk efek interaktif.
          // Mengganti `glow-text` dengan `light-streak-text` untuk efek cahaya yang berkelebat.
          className={`text-white text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold rounded-lg p-4 font-exo2 animate-pulse-subtle  light-streak-text`}
        >
          BVD STORE COMMING SOON
        </h1>
      </div>
    </div>
  );
}
