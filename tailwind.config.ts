import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins:[`var(--font-poppins)`, 'sans-serif'],
      },
    },
    backgroundImage:{
      hero_overlay: "url('/hero-overlay.png')",
      opening_hours: "url('/assets/opening-hours/bg.png')",
      footer: "url('/assets/footer/bg.png')"
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
export default config;
