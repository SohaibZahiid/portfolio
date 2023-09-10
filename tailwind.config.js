/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        rose: "0 10px 20px rgba(225, 29, 72, .25), 0 10px 10px rgba(255, 29, 72, .22), 0 0 120px -10px #e11d48",
        roseHover: "0 14px 28px rgba(225, 29, 72, .5), 0 6px 6px rgba(255, 29, 72, .5), 0 0 100px -10px #e11d48",
      },
    },
  },
  plugins: [],
};
