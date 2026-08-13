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
          50: '#fdf8ef',
          100: '#f5edd8',
          200: '#eddcb5',
          300: '#e4ca8e',
          400: '#d4bb8a',
          500: '#C9A96E',
          600: '#B8944F',
          700: '#a07e3e',
          800: '#886a32',
          900: '#705527',
          DEFAULT: '#C9A96E',
          light: '#D4BB8A',
          dark: '#B8944F',
        },
        blush: {
          50: '#fdf6f7',
          100: '#fbe9ee',
          200: '#f7d3dc',
          300: '#f0adbe',
          400: '#e8849e',
          500: '#db5f7e',
          600: '#c43d62',
          700: '#a52d4f',
          800: '#882843',
          900: '#72263b',
          DEFAULT: '#f0adbe',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#f9f1e6',
          300: '#f3e6d2',
          DEFAULT: '#fdf9f3',
        },
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.12), 0 4px 20px -4px rgba(0, 0, 0, 0.06)',
        'soft-xl': '0 20px 60px -15px rgba(0, 0, 0, 0.15), 0 8px 30px -8px rgba(0, 0, 0, 0.08)',
        'gold': '0 4px 20px -4px rgba(201, 169, 110, 0.3)',
        'blush': '0 4px 20px -4px rgba(240, 173, 190, 0.4)',
        'inner-soft': 'inset 0 2px 8px -2px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        'xl2': '1.25rem',
        '3xl': '1.75rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-down': 'fadeDown 0.7s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}
