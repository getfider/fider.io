import { BlogArticle } from '@app/components'
import MDXDocument from '@content/blog/version-0.11.0.mdx'

export const metadata = {
  title: 'Fider 0.11 released with option to edit and delete ideas',
  publishedOn: new Date('2018-03-25T00:00:00Z'),
  slug: 'version-0.11.0',
  cover: 'version-0.11.0.jpg',
  excerpt: 'In this month’s release of Fider, we’ve been working mostly on internal changes, but managed to add option edit and delete ideas',
}

export default function BlogPost(): JSX.Element {
  return (
    <BlogArticle {...metadata}>
      <MDXDocument />
    </BlogArticle>
  )
}
