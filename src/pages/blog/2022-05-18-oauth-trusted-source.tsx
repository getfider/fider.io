import { BlogArticle } from '@app/components'
import MDXDocument from '@content/blog/2022-05-18-oauth-trusted-source.mdx'
import posts from '@content/blog/all-posts'

export default function BlogPost(): JSX.Element {
  return (
    <BlogArticle {...posts['2022-05-18-oauth-trusted-source']}>
      <MDXDocument />
    </BlogArticle>
  )
}
