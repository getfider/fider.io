import { DocsLayout, MDXWrapper, SEO } from '@app/components'
import { ReactNode } from 'react'

interface DocumentationPageProps {
  title: string
  category: string
  subtitle: string
  slug: string
  cover: string
  description: string
  children: ReactNode
}

export function DocumentationPage(props: DocumentationPageProps): JSX.Element {
  return (
    <DocsLayout>
      <SEO title={`${props.title} - Documentation - Fider`} description={props.description} imageUrl={`/images/cover/${props.cover}`} />

      <section>
        <div className="container pb-24 max-w-3xl mx-auto px-8">
          <article className="mt-10">
            <h2 class="text-base text-blue-600 font-semibold tracking-wide uppercase">{props.category}</h2>
            <h1>{props.title}</h1>
            <p class="mt-2 max-w-2xl text-xl text-gray-500 tracking-normal font-normal mb-8">{props.subtitle}</p>
            <MDXWrapper>{props.children}</MDXWrapper>
          </article>
        </div>
      </section>
    </DocsLayout>
  )
}
