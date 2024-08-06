/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      screens: {
        '2xl': '1320px',
      },

      colors: {
        'Abim' : '#361f6b',
      },
      fontFamily: {
        'comic-sans': 'Cursive',
      },
    },
  },
  plugins: [],
}

