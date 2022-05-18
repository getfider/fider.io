import { BlogArticle } from '@app/components'
import MDXDocument from '@content/blog/the-way-we-blog-is-changing.mdx'
import posts from '@content/blog/all-posts'

export default function BlogPost(): JSX.Element {
  return (
    <BlogArticle {...posts['the-way-we-blog-is-changing']}>
      <MDXDocument />
    </BlogArticle>
  )
}
