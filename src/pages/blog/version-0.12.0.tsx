import { BlogArticle } from '@app/components'
import MDXDocument from '@content/blog/version-0.12.0.mdx'

export const metadata = {
  title: 'Fider 0.12 released with features for privacy and export data',
  publishedOn: new Date('2018-04-28T00:00:00Z'),
  slug: 'version-0.12.0',
  cover: 'version-0.12.0.jpg',
  excerpt: 'In this month’s release of Fider, we’ve been working on two highly requested features: Private Site and Export Data',
}

export default function BlogPost(): JSX.Element {
  return (
    <BlogArticle {...metadata}>
      <MDXDocument />
    </BlogArticle>
  )
}
