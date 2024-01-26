const colors = require('tailwindcss/colors')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  mode: 'jit',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: ['./src/**/*.tsx', './src/**/*.css', './content/**/*.mdx'],
  theme: {
    extend: {
      scale: {
        flip: '-1',
      },
      colors: {
        neutral: colors.neutral,
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
