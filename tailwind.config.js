/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'blue': '#466FB4',
      'white': '#FFFFFF',
      'background-blue': '#96ACFF',
    },
    extend: {},
  },
  plugins: [],
};
