import "@/app/globals.css"; // Pastikan file CSS global ada
import Appshell from "@/components/layouts/Appshell";
import { Exo_2 } from "next/font/google";

// Konfigurasi font Exo 2 dari Google Fonts
const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-exo2",
  display: "swap",
});

// Metadata halaman
export const metadata = {
  title: "Beehive Drones",
  description: "Company Profile",
};

// Layout root untuk semua halaman
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={exo2.variable}>
      <head>
        {/* link ke Bootstrap Icons CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
      </head>
      {/* footer sama navbar */}
      <body className="font-exo2">
        <Appshell>{children}</Appshell>
      </body>
    </html>
  );
}
