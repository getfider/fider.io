export interface DocsMetadata {
  title: string;
  category: string;
  subtitle: string;
  slug: string;
  cover: string;
  description: string;
  sections?: Array<{
    title: string
    slug: string
  }>
}

const docs: {[key: string]: DocsMetadata} = {
  "configuring-oauth": {
    title: 'Configuring OAuth',
    category: 'How To',
    slug: 'configuring-oauth',
    cover: 'configuring-oauth.jpg',
    subtitle: 'One-click sign in made easy',
    description: 'Learn how to create Facebook and Google sign in apps and use it in your Fider instance',
  },
  "enhanced-seo": {
    title: 'Enhanced SEO on Fider',
    category: 'Self-Hosted',
    slug: 'enhanced-seo',
    cover: 'enhanced-seo.jpg',
    subtitle: 'Get better ranks on search results',
    description: 'Learn how to configure your own Fider instance for better ranks on search results',
  },
  "hosting-instance": {
    title: 'Hosting your own instance',
    category: 'Self-Hosted',
    slug: 'hosting-instance',
    cover: 'hosting-instance.jpg',
    subtitle: 'Up and running in under a minute',
    description: 'A one minute guide on how to get your own Fider instance up and running',
  },
  "hosting-on-heroku": {
    title: 'Hosting an instance on Heroku',
    category: 'Self-Hosted',
    slug: 'hosting-on-heroku',
    cover: 'hosting-on-heroku.jpg',
    subtitle: 'Deploy your Fider public instance for free',
    description: 'A five minutes guide to deploy a Fider instance on Heroku',
  },
  "how-to-enable-ssl": {
    title: 'How to enable SSL',
    category: 'Self-Hosted',
    slug: 'how-to-enable-ssl',
    cover: 'how-to-enable-ssl.jpg',
    subtitle: 'Host your instance under the HTTPS protocol',
    description: 'Follow this quick tutorial to know how you can host your instance under the HTTPS protocol',
  },
  "how-to-show-legal-pages": {
    title: 'How to show Legal Pages',
    category: 'Self-Hosted',
    slug: 'how-to-show-legal-pages',
    cover: 'how-to-show-legal-pages.jpg',
    subtitle: 'Display your own Privacy Policy and Terms of Service',
    description: 'Follow this quick tutorial to know how to add your own Privacy Policy and Terms of Service',
  },
  "api": {
    title: 'API Reference',
    category: 'API Reference',
    slug: 'api',
    cover: 'api.jpg',
    subtitle: 'Integrate your App with Fider',
    description: 'Everything you need to know on how to integrate your App with Fider',
    sections: [
      { title: "Overview", slug: "overview" },
      { title: "Authentication", slug: "authentication" },
      { title: "Best Practices", slug: "best-practices" },
      { title: "Posts", slug: "posts" },
      { title: "Votes", slug: "votes" },
      { title: "Comments", slug: "comments" },
      { title: "Users", slug: "users" },
      { title: "Tags", slug: "tags" },
      { title: "Invitations", slug: "invitations" },
    ]
  },
}

export default docs;
