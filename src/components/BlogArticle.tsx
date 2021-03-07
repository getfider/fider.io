import { MDXWrapper, SEO } from '@app/components'
import { ReactNode } from 'react'
import { formatDate } from '@app/fns/date'

interface BlogArticleProps {
  title: string
  slug: string
  cover: string
  excerpt: string
  publishedOn: Date
  children: ReactNode
}

export function BlogArticle(props: BlogArticleProps): JSX.Element {
  return (
    <>
      <SEO title={`${props.title} - Blog - Fider`} description={props.excerpt} imageUrl={`/images/cover/${props.cover}`} />

      <section>
        <div className="container pb-24 max-w-5xl mx-auto">
          <article className="mt-10">
            <span className="block text-gray-500 mb-2">{formatDate(props.publishedOn, 'full')}</span>
            <h1>{props.title}</h1>
            <MDXWrapper>{props.children}</MDXWrapper>
          </article>
        </div>
      </section>
    </>
  )
}
