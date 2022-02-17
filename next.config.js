const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx'],
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  async rewrites() {
    return [
      {
        source: '/p.js',
        destination: 'https://plausible.io/js/plausible.js',
      },
      {
        source: '/e',
        destination: 'https://plausible.io/api/event',
      },
    ]
  },
})
