/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bierstadt: ["bierstadt", "sans-serif"],
        bierstadtBold: ["bierstadt-bold", "sans-serif"],
        aptos: ["Aptos", "sans-serif"],
      },
    },
  },
  plugins: [],
};
