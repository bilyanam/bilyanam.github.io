module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '100': 100,
      },
      inset: {
        '-68': '-17rem',
        '18': '4.5rem',
        '26': '6.5rem',
        '98': '31.25rem',
        '73': '18.75rem',
      },    
      colors: {
        primary: {
          100: '#1d1d1d',
          200: '#171717',
        },
        secondary: {
          100: '#02de9a',
          200: '#fefefe'
      },
        pink: '#DE0246',
      },
     
      animation: {},
      keyframes:{},
    },
    fontFamily: {
      body: ['Nunito Sans'],
      second: ['Montserrat'],
    }
  },
  rotate:{
    '360': '360deg',
    '36': '36deg',
    '72': '72deg',
    '108': '108deg',
    '144': '144deg',
  },
  variants: {
    extend: {
      grayscale: ['hover'],
      sepia: ['hover'],
      invert: ['hover'],
      blur: ['hover'],
      dropShadow: ['hover'],
      animation: ['hover', 'group-hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};