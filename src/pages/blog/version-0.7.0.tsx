import { BlogArticle } from '@app/components'
import MDXDocument from '@content/blog/version-0.7.0.mdx'

export const metadata = {
  title: 'Fider 0.7 released with members administration and automatic SSL',
  publishedOn: new Date('2017-10-31T00:00:00Z'),
  slug: 'version-0.7.0',
  cover: 'version-0.7.0.jpg',
  excerpt: "We're happy to announce that Fider 0.7 is now available",
}

export default function BlogPost(): JSX.Element {
  return (
    <BlogArticle {...metadata}>
      <MDXDocument />
    </BlogArticle>
  )
}
