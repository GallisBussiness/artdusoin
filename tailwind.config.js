/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', "serif"],
        playfiar: ['"Playfair Display"', "serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
      },
      colors: {
        gold: {
          DEFAULT: '#C9A96E',
          light: '#D4BB8A',
          dark: '#B8944F',
        },
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}
