module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
     backgroundImage: theme => ({
     'testimonials': "url('~@/assets/images/testimonials.jpg')",
     })
    },
  },
  variants: {},
  plugins: [],
}
