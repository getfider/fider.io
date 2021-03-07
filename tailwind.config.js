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
    cursor: {
      grab: 'grab',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '5rem',
        xl: '6rem',
        '2xl': '7rem',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
}
