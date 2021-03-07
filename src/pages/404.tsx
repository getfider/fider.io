import Head from 'next/head'
import Link from 'next/link'

export default function PageNotFound(): JSX.Element {
  return (
    <>
      <Head>
        <title>Page not found - getfider.com</title>
        <meta name="robots" content="noindex" />
      </Head>

      <section>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h2>404: Page Not Found</h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Oops, we cound&apos;t find the page you were looking for.</p>
          </div>
          <div className="flex mt-6">
            <Link href="/">
              <a className="mx-auto text-blue-500 text-sm uppercase hover:text-blue-800">← Back to home page</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
