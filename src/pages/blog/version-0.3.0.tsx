import { BlogArticle } from '@app/components'
import MDXDocument from '@content/blog/version-0.3.0.mdx'

export const metadata = {
  title: 'Fider 0.3 released with staff response, SSL and sign up process',
  publishedOn: new Date('2017-07-05T00:00:00Z'),
  slug: 'version-0.3.0',
  cover: 'version-0.3.0.jpg',
  excerpt: "We're happy to announce that Fider 0.3 is now available",
}

export default function BlogPost(): JSX.Element {
  return (
    <BlogArticle {...metadata}>
      <MDXDocument />
    </BlogArticle>
  )
}
