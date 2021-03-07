import { BlogArticle } from '@app/components'
import MDXDocument from '@content/blog/version-0.15.0.mdx'

export const metadata = {
  title: 'Fider 0.15 released with custom OAuth and minor improvements',
  publishedOn: new Date('2018-08-23T00:00:00Z'),
  slug: 'version-0.15.0',
  cover: 'version-0.15.0.jpg',
  excerpt: "In this next Fider release, we've enabled custom OAuth so that you can enable many other providers",
}

export default function BlogPost(): JSX.Element {
  return (
    <BlogArticle {...metadata}>
      <MDXDocument />
    </BlogArticle>
  )
}
