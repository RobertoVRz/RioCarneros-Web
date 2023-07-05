/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      mid: "900px",
      lg: "1152px",
      xl: "1440px",
      "2xl": "1536px",
      "3xl": "1720px",
    },
    colors: {
      morado: "#7641AB",
      orange: "#FF6C00",
      yellow: "#FFB700",
      white: "#FFFFFF",
      marino: "#131D69",
      estrella: "#FFF500",
      black: "#323232",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
