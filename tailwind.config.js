/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
        nav: "920px",
        tablet: "545px",
        tablett: "770px",
        large: "922px",
      },
      fontFamily: {
        creepster: ["Creepster", "serif"],
      },
      backgroundImage: {
        hero: "url('hero.jpg')",
        Product: "url('BG-3.jpg')",
        Sweet: "url('BG-3.jpg')",
        Ceramic: "url('ye.jpg')",
      },
    },
  },
  plugins: [],
};
