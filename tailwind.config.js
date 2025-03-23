/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./static/**/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        marbold: ['Marbold', 'sans-serif'],
      },
      colors: {
        'custom-green': '#E0F4B3',
        'custom-back': '#232323',
        'custom-olive-green': '#738252',
        'custom-green-other': '#CDEA98',
        'custom-green-dark': '#A7C879',
        'custom-text-green': '#738252',
        'custom-text-grey': '#758554',
        'custon-cards-green': '#738252',
      },
    },
  },
  plugins: [],
};
