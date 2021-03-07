import { BlogArticle } from '@app/components'
import MDXDocument from '@content/blog/version-0.9.0.mdx'

export const metadata = {
  title: 'Fider 0.9 released with features to merge duplicate ideas, sort by trending ideas and more',
  publishedOn: new Date('2018-01-29T00:00:00Z'),
  slug: 'version-0.9.0',
  cover: 'version-0.9.0.jpg',
  excerpt: "We're happy to announce that Fider 0.9 is now available",
}

export default function BlogPost(): JSX.Element {
  return (
    <BlogArticle {...metadata}>
      <MDXDocument />
    </BlogArticle>
  )
}
