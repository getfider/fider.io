import { BlogArticle } from '@app/components'
import MDXDocument from '@content/blog/version-0.18.0.mdx'
import posts from '@content/blog/all-posts'

export default function BlogPost(): JSX.Element {
  return (
    <BlogArticle {...posts['version-0.18.0']}>
      <MDXDocument />
    </BlogArticle>
  )
}
