/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aptos: ["Aptos", "sans-serif"],
        bierstadt: ["Bierstadt", "sans-serif"],
      },
    },
  },
  plugins: [],
};
