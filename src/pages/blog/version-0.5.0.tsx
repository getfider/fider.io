import { BlogArticle } from '@app/components'
import MDXDocument from '@content/blog/version-0.5.0.mdx'

export const metadata = {
  title: 'Fider 0.5 released with a great redesign and GitHub authentication',
  publishedOn: new Date('2017-08-31T00:00:00Z'),
  slug: 'version-0.5.0',
  cover: 'version-0.5.0.jpg',
  excerpt: "We're happy to announce that Fider 0.5 is now available",
}

export default function BlogPost(): JSX.Element {
  return (
    <BlogArticle {...metadata}>
      <MDXDocument />
    </BlogArticle>
  )
}
