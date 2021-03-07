import { BlogArticle } from '@app/components'
import MDXDocument from '@content/blog/version-0.13.0.mdx'

export const metadata = {
  title: 'Fider 0.13 released with custom branding and legal compliance',
  publishedOn: new Date('2018-05-29T00:00:00Z'),
  slug: 'version-0.13.0',
  cover: 'version-0.13.0.jpg',
  excerpt: "In this month’s release of Fider, we're happy to release another highly request feature: Custom Branding",
}

export default function BlogPost(): JSX.Element {
  return (
    <BlogArticle {...metadata}>
      <MDXDocument />
    </BlogArticle>
  )
}
