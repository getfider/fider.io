export interface DocsMetadata {
  title: string
  category: string
  subtitle: string
  slug: string
  description: string
  cover?: string
  sections?: Array<{
    title: string
    slug: string
  }>
}

const docs: { [key: string]: DocsMetadata } = {
  'hosting-instance': {
    title: 'Deploy with Docker',
    category: 'Self-Hosted',
    slug: 'hosting-instance',
    subtitle: 'Up and running in few minutes',
    description: 'A quick guide on how to get your own Fider instance up and running',
  },
  'hosting-on-heroku': {
    title: 'Deploy on Heroku',
    category: 'Self-Hosted',
    slug: 'hosting-on-heroku',
    subtitle: 'Deploy your Fider public instance for free',
    description: 'A five minutes guide to deploy a Fider instance on Heroku',
  },
  'hosting-on-gcp': {
    title: 'Deploy on Google Cloud',
    category: 'Self-Hosted',
    slug: 'hosting-on-gcp',
    subtitle: 'Deploy your serverless Fider public instance on Google Cloud',
    description: 'A five minutes guide to deploy a serverless Fider instance on Google Cloud Platform using Cloud Run',
  },
  'hosting-on-azure': {
    title: 'Deploy on Azure',
    category: 'Self-Hosted',
    slug: 'hosting-on-azure',
    subtitle: 'Deploy your Fider public instance on Azure',
    description: 'A five minutes guide to deploy a Fider instance on Azure',
  },
  'how-to-enable-ssl': {
    title: 'How to enable SSL',
    category: 'Self-Hosted',
    slug: 'how-to-enable-ssl',
    subtitle: 'Host your instance under the HTTPS protocol',
    description: 'Follow this quick tutorial to know how you can host your instance under the HTTPS protocol',
  },
  'how-to-show-legal-pages': {
    title: 'How to show Legal Pages',
    category: 'Self-Hosted',
    slug: 'how-to-show-legal-pages',
    subtitle: 'Display your own Privacy Policy and Terms of Service',
    description: 'Follow this quick tutorial to know how to add your own Privacy Policy and Terms of Service',
  },
  'enhanced-seo': {
    title: 'Enhanced SEO on Fider',
    category: 'Self-Hosted',
    slug: 'enhanced-seo',
    subtitle: 'Get better ranks on search results',
    description: 'Learn how to configure your own Fider instance for better ranks on search results',
  },
  'configuring-oauth': {
    title: 'Configuring OAuth',
    category: 'How To',
    slug: 'configuring-oauth',
    subtitle: 'One-click sign in made easy',
    description: 'Learn how to create Facebook and Google sign in apps and use it in your Fider instance',
  },
  api: {
    title: 'API Reference',
    category: 'API Reference',
    slug: 'api',
    subtitle: 'Integrate your App with Fider',
    description: 'Everything you need to know on how to integrate your App with Fider',
    sections: [
      { title: 'Overview', slug: 'overview' },
      { title: 'Authentication', slug: 'authentication' },
      { title: 'Best Practices', slug: 'best-practices' },
      { title: 'Posts', slug: 'posts' },
      { title: 'Votes', slug: 'votes' },
      { title: 'Comments', slug: 'comments' },
      { title: 'Users', slug: 'users' },
      { title: 'Tags', slug: 'tags' },
      { title: 'Invitations', slug: 'invitations' },
    ],
  },
}

export default docs
