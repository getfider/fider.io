import { BlogArticle } from '@app/components'
import MDXDocument from '@content/blog/2024-06-25-new-owners.mdx'
import posts from '@content/blog/all-posts'

export default function BlogPost(): JSX.Element {
  return (
    <BlogArticle {...posts['2024-06-25-new-owners']}>
      <MDXDocument />
    </BlogArticle>
  )
}
