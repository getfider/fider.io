export interface PostMetadata {
  title: string
  category: string
  publishedOn: Date
  slug: string
  excerpt: string
  cover?: string
}

const posts = {
  '2024-06-25-new-owners': {
    title: 'Fider has new owners!',
    category: 'Announcements',
    publishedOn: new Date('2024-06-25T00:00:00Z'),
    slug: '2024-06-25-new-owners',
    excerpt: 'Exciting news! Fider has been acquired by a new team.',
  },
  '2022-05-18-oauth-trusted-source': {
    title: 'We’ve simplified authentication management on private Fider sites, check this out!',
    category: 'New Features',
    publishedOn: new Date('2022-05-18T00:00:00Z'),
    slug: '2022-05-18-oauth-trusted-source',
    excerpt: 'Custom OAuth providers can now be marked as trusted to simplify sign-in management on private sites.',
  },
  'the-way-we-blog-is-changing': {
    title: 'The way we blog is changing!',
    category: 'Announcements',
    publishedOn: new Date('2022-05-16T00:00:00Z'),
    slug: 'the-way-we-blog-is-changing',
    excerpt: 'Going forward we’ll use this blog for announcements instead of releases.',
  },
  'version-0.19.0': {
    title: 'Fider 0.19.0 has been released with a design refresh, multi-language support and other great additions',
    category: 'Release',
    publishedOn: new Date('2021-08-15T00:00:00Z'),
    slug: 'version-0.19.0',
    excerpt: 'Consistent Design, Multi-Language Support and others',
  },
  'version-0.18.1': {
    title: 'Fider 0.18.1 has been released with experimental server side rendering, security and bug fixes',
    category: 'Release',
    publishedOn: new Date('2021-03-27T00:00:00Z'),
    slug: 'version-0.18.1',
    excerpt: 'Experimental server side rendering, security and bug fixes',
  },
  'version-0.18.0': {
    title: 'Fider 0.18 has been released with attachments and better SEO',
    category: 'Release',
    publishedOn: new Date('2019-03-16T00:00:00Z'),
    slug: 'version-0.18.0',
    excerpt: 'In this next Fider release, we have released features like attachments and better SEO',
  },
  'version-0.17.0': {
    title: 'Fider 0.17 has been released with list of voters, better user management and huge performance improvements',
    category: 'Release',
    publishedOn: new Date('2018-12-02T00:00:00Z'),
    slug: 'version-0.17.0',
    excerpt: 'In this next Fider release, we have released features like list of voters, better user management and huge performance improvements',
  },
  'version-0.16.0': {
    title: 'Fider 0.16 released with Public API, delete comments and other improvements',
    category: 'Release',
    publishedOn: new Date('2018-10-21T00:00:00Z'),
    slug: 'version-0.16.0',
    excerpt: 'In this next Fider release, we have released our Public API and the ability to delete comments',
  },
  'version-0.15.0': {
    title: 'Fider 0.15 released with custom OAuth and minor improvements',
    category: 'Release',
    publishedOn: new Date('2018-08-23T00:00:00Z'),
    slug: 'version-0.15.0',
    excerpt: "In this next Fider release, we've enabled custom OAuth so that you can enable many other providers",
  },
  'version-0.14.0': {
    title: 'Fider 0.14 released with improved foundation and minor features',
    category: 'Release',
    publishedOn: new Date('2018-06-30T00:00:00Z'),
    slug: 'version-0.14.0',
    excerpt: "In this next Fider release, we've improved our foundation to support the continued growth",
  },
  'version-0.13.0': {
    title: 'Fider 0.13 released with custom branding and legal compliance',
    category: 'Release',
    publishedOn: new Date('2018-05-29T00:00:00Z'),
    slug: 'version-0.13.0',
    excerpt: "In this month’s release of Fider, we're happy to release another highly request feature: Custom Branding",
  },
  'version-0.12.0': {
    title: 'Fider 0.12 released with features for privacy and export data',
    category: 'Release',
    publishedOn: new Date('2018-04-28T00:00:00Z'),
    slug: 'version-0.12.0',
    excerpt: 'In this month’s release of Fider, we’ve been working on two highly requested features: Private Site and Export Data',
  },
  'version-0.11.0': {
    title: 'Fider 0.11 released with option to edit and delete ideas',
    category: 'Release',
    publishedOn: new Date('2018-03-25T00:00:00Z'),
    slug: 'version-0.11.0',
    excerpt: 'In this month’s release of Fider, we’ve been working mostly on internal changes, but managed to add option edit and delete ideas',
  },
  'version-0.10.0': {
    title: 'Fider 0.10 released with notifications system and more',
    category: 'Release',
    publishedOn: new Date('2018-02-28T00:00:00Z'),
    slug: 'version-0.10.0',
    excerpt: "We're happy to announce that Fider 0.10 is now available",
  },
  'version-0.9.0': {
    title: 'Fider 0.9 released with features to merge duplicate ideas, sort by trending ideas and more',
    category: 'Release',
    publishedOn: new Date('2018-01-29T00:00:00Z'),
    slug: 'version-0.9.0',
    excerpt: "We're happy to announce that Fider 0.9 is now available",
  },
  'version-0.8.0': {
    title: 'Fider 0.8 released with tags and edit posts feature',
    category: 'Release',
    publishedOn: new Date('2017-11-29T00:00:00Z'),
    slug: 'version-0.8.0',
    excerpt: "We're happy to announce that Fider 0.8 is now available",
  },
  'version-0.7.0': {
    title: 'Fider 0.7 released with members administration and automatic SSL',
    category: 'Release',
    publishedOn: new Date('2017-10-31T00:00:00Z'),
    slug: 'version-0.7.0',
    excerpt: "We're happy to announce that Fider 0.7 is now available",
  },
  'version-0.6.0': {
    title: 'Fider 0.6 released with sign in by email',
    category: 'Release',
    publishedOn: new Date('2017-09-28T00:00:00Z'),
    slug: 'version-0.6.0',
    excerpt: "We're happy to announce that Fider 0.6 is now available",
  },
  'version-0.5.0': {
    title: 'Fider 0.5 released with a great redesign and GitHub authentication',
    category: 'Release',
    publishedOn: new Date('2017-08-31T00:00:00Z'),
    slug: 'version-0.5.0',
    excerpt: "We're happy to announce that Fider 0.5 is now available",
  },
  'version-0.4.0': {
    title: 'Fider 0.4 released with markdown and customizable text',
    category: 'Release',
    publishedOn: new Date('2017-07-29T00:00:00Z'),
    slug: 'version-0.4.0',
    excerpt: "We're happy to announce that Fider 0.4 is now available",
  },
  'version-0.3.0': {
    title: 'Fider 0.3 released with staff response, SSL and sign up process',
    category: 'Release',
    publishedOn: new Date('2017-07-05T00:00:00Z'),
    slug: 'version-0.3.0',
    excerpt: "We're happy to announce that Fider 0.3 is now available",
  },
}

export default posts
