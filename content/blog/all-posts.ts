export interface PostMetadata {
  title: string;
  category: string;
  publishedOn: Date;
  slug: string;
  excerpt: string;
  cover?: string;
}

const posts = {
  "version-0.18.0": {
    title: 'Fider 0.18 has been released with attachments and better SEO',
    category: 'Release',
    publishedOn: new Date('2019-03-16T00:00:00Z'),
    slug: 'version-0.18.0',
    excerpt: 'In this next Fider release, we have released features like attachments and better SEO',
  },
  "version-0.17.0": {
    title: 'Fider 0.17 has been released with list of voters, better user management and huge performance improvements',
    category: 'Release',
    publishedOn: new Date('2018-12-02T00:00:00Z'),
    slug: 'version-0.17.0',
    excerpt: 'In this next Fider release, we have released features like list of voters, better user management and huge performance improvements',
  },
  "how-we-reduced-initial-jscss-size": {
    title: 'How we reduced our initial JS/CSS size by 67%',
    category: 'Knowledge Share',
    publishedOn: new Date('2018-10-24T00:00:00Z'),
    slug: 'how-we-reduced-initial-jscss-size',
    excerpt:
      'We have been working on reducing the amount of bytes that we send to all Fider users. Being a web application built with React, we have focused on JS and CSS. On this post we share our learnings, some concepts and suggestions on how you can do the same with your web application.',
  },
  "version-0.16.0": {
    title: 'Fider 0.16 released with Public API, delete comments and other improvements',
    category: 'Release',
    publishedOn: new Date('2018-10-21T00:00:00Z'),
    slug: 'version-0.16.0',
    excerpt: 'In this next Fider release, we have released our Public API and the ability to delete comments',
  },
  "version-0.15.0": {
    title: 'Fider 0.15 released with custom OAuth and minor improvements',
    category: 'Release',
    publishedOn: new Date('2018-08-23T00:00:00Z'),
    slug: 'version-0.15.0',
    excerpt: "In this next Fider release, we've enabled custom OAuth so that you can enable many other providers",
  },
  "version-0.14.0": {
    title: 'Fider 0.14 released with improved foundation and minor features',
    category: 'Release',
    publishedOn: new Date('2018-06-30T00:00:00Z'),
    slug: 'version-0.14.0',
    excerpt: "In this next Fider release, we've improved our foundation to support the continued growth",
  },
  "version-0.13.0": {
    title: 'Fider 0.13 released with custom branding and legal compliance',
    category: 'Release',
    publishedOn: new Date('2018-05-29T00:00:00Z'),
    slug: 'version-0.13.0',
    excerpt: "In this month’s release of Fider, we're happy to release another highly request feature: Custom Branding",
  },
  "version-0.12.0": {
    title: 'Fider 0.12 released with features for privacy and export data',
    category: 'Release',
    publishedOn: new Date('2018-04-28T00:00:00Z'),
    slug: 'version-0.12.0',
    excerpt: 'In this month’s release of Fider, we’ve been working on two highly requested features: Private Site and Export Data',
  },
  "version-0.11.0": {
    title: 'Fider 0.11 released with option to edit and delete ideas',
    category: 'Release',
    publishedOn: new Date('2018-03-25T00:00:00Z'),
    slug: 'version-0.11.0',
    excerpt: 'In this month’s release of Fider, we’ve been working mostly on internal changes, but managed to add option edit and delete ideas',
  },
  "version-0.10.0":{
    title: 'Fider 0.10 released with notifications system and more',
    category: 'Release',
    publishedOn: new Date('2018-02-28T00:00:00Z'),
    slug: 'version-0.10.0',
    excerpt: "We're happy to announce that Fider 0.10 is now available",
  },
  "version-0.9.0": {
    title: 'Fider 0.9 released with features to merge duplicate ideas, sort by trending ideas and more',
    category: 'Release',
    publishedOn: new Date('2018-01-29T00:00:00Z'),
    slug: 'version-0.9.0',
    excerpt: "We're happy to announce that Fider 0.9 is now available",
  },
  "version-0.8.0": {
    title: 'Fider 0.8 released with tags and edit posts feature',
    category: 'Release',
    publishedOn: new Date('2017-11-29T00:00:00Z'),
    slug: 'version-0.8.0',
    excerpt: "We're happy to announce that Fider 0.8 is now available",
  },
  "version-0.7.0": {
    title: 'Fider 0.7 released with members administration and automatic SSL',
    category: 'Release',
    publishedOn: new Date('2017-10-31T00:00:00Z'),
    slug: 'version-0.7.0',
    excerpt: "We're happy to announce that Fider 0.7 is now available",
  },
  "version-0.6.0": {
    title: 'Fider 0.6 released with sign in by email',
    category: 'Release',
    publishedOn: new Date('2017-09-28T00:00:00Z'),
    slug: 'version-0.6.0',
    excerpt: "We're happy to announce that Fider 0.6 is now available",
  },
  "version-0.5.0": {
    title: 'Fider 0.5 released with a great redesign and GitHub authentication',
    category: 'Release',
    publishedOn: new Date('2017-08-31T00:00:00Z'),
    slug: 'version-0.5.0',
    excerpt: "We're happy to announce that Fider 0.5 is now available",
  },
  "version-0.4.0": {
    title: 'Fider 0.4 released with markdown and customizable text',
    category: 'Release',
    publishedOn: new Date('2017-07-29T00:00:00Z'),
    slug: 'version-0.4.0',
    excerpt: "We're happy to announce that Fider 0.4 is now available",
  },
  "version-0.3.0": {
    title: 'Fider 0.3 released with staff response, SSL and sign up process',
    category: 'Release',
    publishedOn: new Date('2017-07-05T00:00:00Z'),
    slug: 'version-0.3.0',
    excerpt: "We're happy to announce that Fider 0.3 is now available",
  }
}

export default posts;
