import { BlogArticle } from '@app/components'
import MDXDocument from '@content/blog/version-0.14.0.mdx'

export const metadata = {
  title: 'Fider 0.14 released with improved foundation and minor features',
  publishedOn: new Date('2018-06-30T00:00:00Z'),
  slug: 'version-0.14.0',
  cover: 'version-0.14.0.jpg',
  excerpt: "In this next Fider release, we've improved our foundation to support the continued growth",
}

export default function BlogPost(): JSX.Element {
  return (
    <BlogArticle {...metadata}>
      <MDXDocument />
    </BlogArticle>
  )
}
