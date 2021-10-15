const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
        robo: "'Roboto', sans-serif",
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'warm-gray': colors.warmGray,
        teal: colors.teal,
        header: '#5046e5',
        light: {
          100: '#6366f1',
          200: '#6064fa',
          300: '#6774f4',
          400: '#eaf6fb',
        },
        primary: '#ffffff',
        secondary: '#6462ea',
        fontc: {
          100: '#111827',
          200: '#383e41',
          300: '#000000',
        },
      },
      animation: {
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%":{
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(2deg)",
          },
          "75%": {
            transform: "rotate(-2deg)",
          },
        },
      },
  
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    function ({addUtilities}) {
      const extendUnderline = {
          '.underline': {
              'textDecoration': 'underline',
              'text-decoration-color': 'indigo-800',
          },
      }
      addUtilities(extendUnderline)
  }
]
}