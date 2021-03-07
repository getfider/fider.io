import { BlogArticle } from '@app/components'
import MDXDocument from '@content/blog/version-0.18.0.mdx'

export const metadata = {
  title: 'Fider 0.18 has been released with attachments and better SEO',
  publishedOn: new Date('2019-03-16T00:00:00Z'),
  slug: 'version-0.18.0',
  cover: 'version-0.18.0.jpg',
  excerpt: 'In this next Fider release, we have released features like attachments and better SEO',
}

export default function BlogPost(): JSX.Element {
  return (
    <BlogArticle {...metadata}>
      <MDXDocument />
    </BlogArticle>
  )
}
