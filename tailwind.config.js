/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: { sans: ['Montserrat', 'sans-serif'] },
      colors: { navy: '#0d2461' },
      screens: {
        'xs': '360px',
      }
    }
  },
  plugins: [],
}
