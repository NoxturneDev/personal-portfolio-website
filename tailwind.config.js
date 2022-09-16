/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        melodrama: ["Melodrama", "serif"],
        boska: ["Boska", "serif"],
      },
      colors: {
        "dark": {
          100: "#282828",
          200: "#1E1E1E",
          300: "#161616",
          400: "#111111"
        },
        "light": {
          100: "#FBF8F3",
          200: "#F2EEE8",
          300: "#ECE8E1",
          400: "#D8D4CD"
        },
      },
    },
  },
  plugins: [],
};
