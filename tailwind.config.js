/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  mode: "jit",
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
      }
    },
  },
  plugins: [],
};
