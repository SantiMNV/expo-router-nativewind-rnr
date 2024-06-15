const { theme } = require("./lib/theme");


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    ...theme
  },
  plugins: [require('tailwindcss-animate')],
};