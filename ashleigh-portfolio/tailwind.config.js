module.exports = {
  content: {
    files: ["./*.{html,js}"],
    transform: {
      md: (content) => {
        return remark().process(content)
      },
    },
    extract: {
      md: (content) => {
        return content.match(/[^<>"'`\s]*/)
      },
    },
  },
    variants: {
      display: ['responsive'],
    },
    theme: {
    extend: {},
  },
  plugins: [],
}
