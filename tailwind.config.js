const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        fontSale: "10px",
      },
      fontFamily: {
        sans: "Lato, sans-serif",
        dosis: "Dosis, sans-serif",
        saira: "Saira, sans-serif",
      },
      colors: {
        gray: {
          100: "#DEDEDE",
          200: "#EAEAEA",
          300: "#888888",
          400: "#555555",
          500: "#333333",
          600: "#262626",
          700: "#1D1D1B",
        },
        pink: {
          100: "#D14B8F",
          200: "#B6116E",
        },
        button: {
          100: "#90D250",
          200: "#7EBC43",
        },
        sale: "#F79552",
      },
    },
  },
  plugins: [],
};
