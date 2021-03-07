// eslint-disable-next-line no-undef
module.exports = {
  siteUrl: 'https://getfider.com',
  generateRobotsTxt: true,
  exclude: ['/404', '/banner'],
  transform: (_, url) => {
    return {
      loc: url,
    }
  },
}
