/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heather: '#877499',
        viridian: '#679F9F',
        sandstone: '#E6D4BF',
        candy: '#E18299',
        azur: '#2D4729',
      },
    },
  },

  plugins: [],
}