/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/*astro'],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      colors: {
        'forest-green': '#034c3c',
      },
    }
  }
}

