// app/layout.tsx
import "@/app/globals.css";
import Appshell from "@/components/layouts/Appshell";
import { Exo_2, Open_Sans } from "next/font/google";

// Import font
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
  display: "swap",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-exo2",
  display: "swap",
});

// Metadata
export const metadata = {
  title: "Beehive Drones",
  description: "Company Profile",
};

// Layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${openSans.variable} ${exo2.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
      </head>
      <body className="font-exo2 font-open-sans">
        <Appshell>{children}</Appshell>
      </body>
    </html>
  );
}
