module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
        robo: "'Roboto', sans-serif"
      },
      colors: {
        header: '#5145e3',
        light: {
          100: '#6366f1',
          200: '#6064fa',
          300: '#6774f4',
          400: '#eaf6fb',
        },
        primary: '#ffffff',
        secondary: '#f3f4f6',
        fontc: {
          100: '#323433',
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
  plugins: [],
}
