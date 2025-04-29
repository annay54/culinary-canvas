/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Merriweather Sans"', ...defaultTheme.fontFamily.sans],
        serif: ['"Inter"', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        "primary": "#D39738",
        "secondary": "#A55913",
        "tertiary": "#FFF2E1",
        "textColor": "#493843",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
