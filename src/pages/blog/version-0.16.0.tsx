import { BlogArticle } from '@app/components'
import MDXDocument from '@content/blog/version-0.16.0.mdx'

export const metadata = {
  title: 'Fider 0.16 released with Public API, delete comments and other improvements',
  publishedOn: new Date('2018-10-21T00:00:00Z'),
  slug: 'version-0.16.0',
  cover: 'version-0.16.0.jpg',
  excerpt: 'In this next Fider release, we have released our Public API and the ability to delete comments',
}

export default function BlogPost(): JSX.Element {
  return (
    <BlogArticle {...metadata}>
      <MDXDocument />
    </BlogArticle>
  )
}
