import { DocsLayout, SEO } from '@app/components'
import allDocs, { DocsMetadata } from '@content/docs/all-docs'
import Link from 'next/link'

function Item(props: DocsMetadata): JSX.Element {
  return (
    <div className="h-full bg-gray-100 bg-opacity-75 p-4 md:p-8 rounded-lg overflow-hidden text-center relative">
      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">{props.category}</h2>
      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{props.title}</h1>
      <p className="leading-relaxed mb-3">{props.description}</p>
      <Link href={`/docs/${props.slug}`} className="text-blue-500 inline-flex items-center">
        Learn More
        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}

export default function Docs(): JSX.Element {
  return (
    <DocsLayout>
      <SEO
        title="Documentation · Fider"
        description="Learn how to get the most out of Fider. All documentation in a single space."
        imageUrl="/images/cover/documentation.jpg"
      />
      <section className="text-gray-600 body-font">
        <div className="container max-w-6xl px-5 py-12 md:py-24 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {Object.values(allDocs).map((d) => (
              <Item key={d.title} {...d} />
            ))}
          </div>
        </div>
      </section>
    </DocsLayout>
  )
}
