import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Header, Footer } from '@app/components'
import analytics from '@app/fns/analytics'

import '../styles/main.css'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    analytics.pageView()

    router.events.on('routeChangeComplete', analytics.pageView)
    return () => {
      router.events.off('routeChangeComplete', analytics.pageView)
    }
  }, [])

  return (
    <>
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
