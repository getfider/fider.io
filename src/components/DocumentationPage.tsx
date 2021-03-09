import { DocsLayout, MDXWrapper, SEO } from '@app/components'
import { ReactNode } from 'react'

interface DocumentationPageProps {
  title: string
  cover?: string
  category: string
  subtitle: string
  slug: string
  description: string
  children: ReactNode
}

export function DocumentationPage(props: DocumentationPageProps): JSX.Element {
  const cover = `/images/cover/${props.cover || 'documentation.jpg'}`

  return (
    <DocsLayout>
      <SEO title={`${props.title} - Documentation - Fider`} description={props.description} imageUrl={cover} />

      <section>
        <div className="container pb-24 max-w-4xl mx-auto px-8">
          <article className="mt-10">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">{props.category}</h2>
            <h1>{props.title}</h1>
            <p className="mt-2 max-w-2xl text-xl text-gray-500 tracking-normal font-normal mb-8">{props.subtitle}</p>
            <MDXWrapper>{props.children}</MDXWrapper>
          </article>
        </div>
      </section>
    </DocsLayout>
  )
}
