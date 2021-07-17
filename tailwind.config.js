// tailwind.config.js
const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        100: '#f1f8f6',
        200: '#d4e9e2',
        300: '#008248',
        400: '#1e3932',
        auth: '#060818',
      },
      secondary: '#f3f1e7',
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
      red: colors.red,
      yellow: colors.yellow,
      blue: colors.blue,
      gold: '#cba258',
      green: colors.green,
    },
    fontFamily: {
      sans: "'Helvetica Neue',Helvetica,Arial,sans-serif",
    },
    extend: {
      fontSize: {
        13: '.8125rem',
      },
    },
  },
  variants: {
    extend: {},
  },
};
