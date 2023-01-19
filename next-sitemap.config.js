module.exports = {
  siteUrl: 'https://fider.io',
  generateRobotsTxt: true,
  exclude: ['/404', '/banner'],
  transform: (_, url) => {
    return {
      loc: url,
    }
  },
}
