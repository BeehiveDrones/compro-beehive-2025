# Beehive Drones Web Project

## Deskripsi
Website ini adalah platform resmi Beehive Drones yang menampilkan profil perusahaan, layanan, produk, artikel, dan rekrutmen. Dibangun dengan Next.js (React), TypeScript, dan Tailwind CSS, project ini mengutamakan modularisasi komponen, performa, dan responsivitas di semua device.

## Struktur Folder Utama
```
compro-beehive-next/
├── public/                # Asset gambar, ikon, logo
├── src/
│   ├── app/               # Halaman utama (Next.js App Router)
│   │   ├── (footer)/      # Halaman About Us, Careers, dsb
│   │   ├── (product-service)/
│   │   ├── store/         # Halaman toko produk
│   │   └── ...
│   └── components/        # Komponen global & pop-up
│       ├── homecomponents/
│       ├── pop-up/
│       └── ...
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Instalasi & Menjalankan
1. **Clone repo:**
   ```bash
   git clone <repo-url>
   cd compro-beehive-next
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # atau
   yarn install
   ```
3. **Jalankan development server:**
   ```bash
   npm run dev
   # atau
   yarn dev
   ```
4. **Akses di browser:**
   http://localhost:3000

## Arsitektur & Modularisasi
- **Setiap halaman utama** (misal: Home, About Us, Careers, Store) hanya berisi komposisi komponen, bukan logic/detail UI.
- **Komponen utama** (HeroSection, ImpactSection, OurValues, HiringSection, JobModal, dsb) dipisah ke folder `components/` sesuai domainnya.
- **Pop-up/modal** (misal: JobModal, ProductDetailModal) dibuat reusable dan menerima props yang jelas.
- **Responsif:**
  - Menggunakan Tailwind utility (`grid-cols-1 md:grid-cols-2`, `gap-8`, `sm:`, `md:`) untuk layout adaptif.
  - Modal dan grid tetap nyaman di mobile maupun desktop.
- **Best Practice:**
  - State dan event handler dikelola di komponen parent, props dikirim ke child.
  - Kode diberi type annotation (TypeScript) untuk keamanan dan maintainability.
  - Import hanya komponen yang digunakan, tidak ada import tak terpakai.
  - Komponen diberi dokumentasi singkat jika perlu.

## Pengembangan & Kontribusi
- Untuk menambah halaman/fitur baru, buat folder dan komponen di `src/app/` dan `src/components/`.
- Ikuti pola modularisasi dan responsif yang sudah ada.
- Pastikan tidak ada linter error sebelum commit.

## Catatan
- Semua tombol Apply Now pada JobModal mengarah ke WhatsApp HR dengan pesan otomatis.
- Semua modal dan komponen utama sudah dioptimalkan untuk responsivitas dan UX modern.

---

## Cara Deploy ke Vercel
1. **Push project ke GitHub/GitLab/Bitbucket.**
2. **Buka [vercel.com](https://vercel.com) dan login.**
3. **Import project repository.**
4. **Pilih framework: Next.js.**
5. **(Opsional) Atur environment variable jika diperlukan.**
6. **Klik Deploy.**
7. **Akses project di URL yang diberikan Vercel.**

## Pengaturan Environment Variable
Jika project membutuhkan environment variable (misal: API key, endpoint, dsb), buat file `.env.local` di root project:

```
# Contoh .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_ANALYTICS_ID=UA-XXXXXX-X
```

- Gunakan `process.env.NEXT_PUBLIC_...` di kode untuk mengakses variable.
- Jangan commit file `.env.local` ke repository publik.

## Panduan Testing
- Untuk unit test, gunakan [Jest](https://jestjs.io/) dan [React Testing Library](https://testing-library.com/):
  ```bash
  npm install --save-dev jest @testing-library/react @testing-library/jest-dom
  npm run test
  ```
- Pastikan semua komponen utama memiliki test coverage minimal.
- Untuk e2e test, gunakan [Cypress](https://www.cypress.io/) jika diperlukan.

---

Jika ada pertanyaan atau ingin kontribusi, silakan hubungi tim pengembang Beehive Drones.
