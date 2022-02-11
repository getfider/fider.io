import LogoTitle from '@assets/logo-title.svg'
import { useEffect } from 'react'
import Head from 'next/head'

export default function BannerGenerator(): JSX.Element {
  useEffect(() => {
    document.body.classList.add('bg-dotted')
    document.querySelector('header')?.remove()
    document.querySelector('footer')?.remove()
  }, [])

  return (
    <>
      <Head>
        <title>Banner Generator - fider.io</title>
        <meta name="robots" content="noindex" />
      </Head>

      {/* Image Size: 1200x630 */}
      {/* https://squoosh.app */}

      <section>
        <div className="mx-24">
          <div className="w-full flex flex-wrap items-center text-base justify-between">
            <LogoTitle className="block mx-auto h-24 mt-24 mb-40 bg-white p-2" />
          </div>
          <div className="text-center">
            <h1 className="text-6xl">Blog</h1>
          </div>
        </div>
      </section>
    </>
  )
}
