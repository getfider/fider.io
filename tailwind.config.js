/* eslint-disable no-undef */
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: isProduction,
    content: ['./src/**/*.tsx', './src/**/*.css', './content/**/*.mdx'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
}
