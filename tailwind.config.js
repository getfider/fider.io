const colors = require('tailwindcss/colors')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  mode: 'jit',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: isProduction,
    content: ['./src/**/*.tsx', './src/**/*.css', './content/**/*.mdx'],
  },
  theme: {
    extend: {
      colors: {
        truegray: colors.trueGray,
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
}
