import { BlogArticle } from '@app/components'
import MDXDocument from '@content/blog/version-0.6.0.mdx'

export const metadata = {
  title: 'Fider 0.6 released with sign in by email',
  publishedOn: new Date('2017-09-28T00:00:00Z'),
  slug: 'version-0.6.0',
  cover: 'version-0.6.0.jpg',
  excerpt: "We're happy to announce that Fider 0.6 is now available",
}

export default function BlogPost(): JSX.Element {
  return (
    <BlogArticle {...metadata}>
      <MDXDocument />
    </BlogArticle>
  )
}
