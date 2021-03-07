import Head from 'next/head'
import { useRouter } from 'next/router'

interface SEOProps {
  title: string
  description: string
  imageUrl?: string
}

export function SEO(props: SEOProps): JSX.Element {
  const router = useRouter()
  const url = `https://getfider.com${router.pathname}`
  const imageUrl = props.imageUrl ? `https://getfider.com${props.imageUrl}` : undefined

  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />

      <meta property="og:title" content={props.title} />
      <meta property="og:url" content={url} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      <meta property="og:description" content={props.description} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@getfider" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:url" content={url} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
    </Head>
  )
}
