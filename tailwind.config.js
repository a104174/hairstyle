/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      colors: {
        primary:   '#F688B9',   // rosa-claro
        background:'#FFF8F3',   // bege
        surface:   '#FFFFFF',
        graydark:  '#1E1E1E',
      },
    },
  },
  plugins: [],
}





  