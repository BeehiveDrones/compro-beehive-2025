/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Gunakan variable dari next/font untuk performa optimal
        'exo2': ['var(--font-exo2)', '"Exo 2"', 'poppins'],
        'open-sans': ['var(--font-open-sans)', '"Open Sans"', 'poppins'],
        'open-sans': ['var(--font-open-sans)'],
      },
    },
  },
  plugins: [],
};
