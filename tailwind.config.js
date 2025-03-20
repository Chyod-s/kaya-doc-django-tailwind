/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./static/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#E0F4B3',
        'custom-back': '#232323',
      },
    },
  },
  plugins: [],
};
