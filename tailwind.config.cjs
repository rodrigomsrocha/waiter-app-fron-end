/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          100: '#ffabad',
          500: '#d73035',
          900: '#8a1114',
        },
        gray: {
          100: '#f2f2f2',
          300: '#cccccc',
          500: '#999999',
          700: '#666666',
          900: '#333333',
        },
      },
      fontFamily: {
        sans: ['General Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
