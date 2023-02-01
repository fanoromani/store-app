const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Lato, sans-serif",
        dosis: "Dosis, sans-serif",
      },
      colors: {
        mainBG: "#DEDEDE",
      },
    },
  },
  plugins: [],
};
