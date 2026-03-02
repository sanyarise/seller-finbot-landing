/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './calculator/*.html'],
  theme: {
    extend: {
      colors: {
        brand: '#1A73E8',
        profit: '#10B981',
        alert: '#F59E0B',
        dark: '#0F172A'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
