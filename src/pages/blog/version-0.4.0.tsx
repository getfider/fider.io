import { BlogArticle } from '@app/components'
import MDXDocument from '@content/blog/version-0.4.0.mdx'

export const metadata = {
  title: 'Fider 0.4 released with markdown and customizable text',
  publishedOn: new Date('2017-07-29T00:00:00Z'),
  slug: 'version-0.4.0',
  cover: 'version-0.4.0.jpg',
  excerpt: "We're happy to announce that Fider 0.4 is now available",
}

export default function BlogPost(): JSX.Element {
  return (
    <BlogArticle {...metadata}>
      <MDXDocument />
    </BlogArticle>
  )
}
