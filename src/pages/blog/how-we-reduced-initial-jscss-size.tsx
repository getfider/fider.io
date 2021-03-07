import { BlogArticle } from '@app/components'
import MDXDocument from '@content/blog/how-we-reduced-initial-jscss-size.mdx'
import posts from '@content/blog/all-posts'

export default function BlogPost(): JSX.Element {
  return (
    <BlogArticle {...posts['how-we-reduced-initial-jscss-size']}>
      <MDXDocument />
    </BlogArticle>
  )
}
