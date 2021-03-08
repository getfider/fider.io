export interface DocsMetadata {
  title: string;
  category: string;
  subtitle: string;
  slug: string;
  cover: string;
  description: string;
}

const docs = {
  "configuring-oauth": {
    title: 'Configuring OAuth',
    category: 'How To',
    slug: 'configuring-oauth',
    cover: 'configuring-oauth.jpg',
    subtitle: 'One-click sign in made easy',
    description: 'Learn how to create Facebook and Google sign in apps and use it in your Fider instance',
  }
}

export default docs;
