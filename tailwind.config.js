/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
