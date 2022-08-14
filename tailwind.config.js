/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "my-yellow": "#E6C744",
      "my-gray": "#C2C8DA",
      ...colors,
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/hero.png')",
      },
    },
    fontFamily: {
      signature: ["Poppins"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
