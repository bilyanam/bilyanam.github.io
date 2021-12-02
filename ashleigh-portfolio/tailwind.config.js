const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
           fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        leah: ['Fleur De Leah', 'cursive'],
    },
    aspectRatio: {
      18: '18',
      20: '20',
      22: '22',
    },
  },
},
  variants: {
    extend: {
      aspectRatio: ['responsive', 'hover']},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
