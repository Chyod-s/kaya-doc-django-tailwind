/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./static/**/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        marbold: ['Marbold', 'sans-serif'],
        din: ['Din', 'sans-serif'],
      },
      colors: {
        'custom-green': '#E0F4B3',
        'custom-green-70': 'rgba(224, 244, 179, 0.7)',
        'custom-back': '#232323',
        'custom-back-70': 'rgba(35, 35, 35, 0.7)',
        'custom-olive-green': '#738252',
        'custom-green-other': '#CDEA98',
        'custom-green-dark': '#A7C879',
        'custom-text-green': '#738252',
        'custom-text-grey': '#758554',
        'custon-cards-green': '#738252',
      },
      backdropBlur: {
        lg: '10px',
      },
    },
  },
  plugins: [],
};
