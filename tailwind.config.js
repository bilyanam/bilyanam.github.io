module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {    
      backgroundSize: {
      '100-200': '110% 220%',
    },

      backgroundImage: {
        none: 'none',
        'gradient-blue/pink': 'linear-gradient(to bottom, #02de9a 50%, #DE0246 50%)',
      },
  
      boxShadow: {
        '3xl': '0 4px 6px -1px rgba(2, 222, 154, 1)',
        'inner1': 'inset 0 4px 6px -1px rgba(222, 2, 70, 1)',
        '3p': '0 4px 6px -1px rgba(222, 2, 70, 1)'
      },  
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
      boxShadow: ['active'],
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