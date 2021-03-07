import { BlogArticle } from '@app/components'
import MDXDocument from '@content/blog/version-0.17.0.mdx'

export const metadata = {
  title: 'Fider 0.17 has been released with list of voters, better user management and huge performance improvements',
  publishedOn: new Date('2018-12-02T00:00:00Z'),
  slug: 'version-0.17.0',
  cover: 'version-0.17.0.jpg',
  excerpt: 'In this next Fider release, we have released features like list of voters, better user management and huge performance improvements',
}

export default function BlogPost(): JSX.Element {
  return (
    <BlogArticle {...metadata}>
      <MDXDocument />
    </BlogArticle>
  )
}
