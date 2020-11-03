module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      display: ['Merriweather','sans-serif'],
      body: ['Oswald', 'sans']
    },
    extend: {
     backgroundImage: theme => ({
     testimonials: "url('~@/assets/images/testimonials.jpg')",
     })
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [],
}
