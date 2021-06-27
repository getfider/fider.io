import LogoTitle from '@assets/logo-title.svg'
import GitHubLogo from '@assets/icons/iconmonstr-github.svg'
import TwitterLogo from '@assets/icons/iconmonstr-twitter.svg'
import EmailLogo from '@assets/icons/iconmonstr-email.svg'
import posts from '@content/blog/all-posts'
import Link from 'next/link'

export function Footer(): JSX.Element {
  const orderedPosts = Object.values(posts).sort((a, b) => b.publishedOn.getTime() - a.publishedOn.getTime())

  return (
    <footer className="bg-gray-200 text-gray-600">
      <div className="container px-5 py-12 md:py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex font-medium items-center md:justify-start justify-center text-gray-900">
            <LogoTitle className="h-10" />
          </a>
          <p className="mt-2 text-sm text-gray-500">Product Feedback tool for everyone.</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/3 lg:block md:hidden w-full px-4"></div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">Blog</h2>
            <nav className="list-none mb-10">
              {orderedPosts.slice(0, 4).map((p) => (
                <li key={p.slug} className="mt-4">
                  <Link href={`/blog/${p.slug}`}>
                    <a className="text-gray-500 hover:text-blue-800 transition-colors duration-200">{p.title}</a>
                  </Link>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">Documentation</h2>
            <nav className="list-none mb-10">
              <li className="mt-4">
                <Link href="/docs/hosting-instance">
                  <a className="text-gray-500 hover:text-blue-800 transition-colors duration-200">Hosting your own instance</a>
                </Link>
              </li>
              <li className="mt-4">
                <Link href="/docs/api">
                  <a className="text-gray-500 hover:text-blue-800 transition-colors duration-200">API Reference</a>
                </Link>
              </li>
              <li className="mt-4">
                <Link href="/docs/configuring-oauth">
                  <a className="text-gray-500 hover:text-blue-800 transition-colors duration-200">Configuring OAuth</a>
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© {new Date().getFullYear()} Fider</p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500 hover:text-black" href="https://github.com/getfider/fider" target="_blank" rel="noreferrer noopener">
              <GitHubLogo className="w-6" />
            </a>
            <a className="ml-6 text-gray-500 hover:text-blue-500" href="https://twitter.com/getfider" target="_blank" rel="noreferrer noopener">
              <TwitterLogo className="w-6" />
            </a>
            <a className="ml-6 text-gray-500 hover:text-black" href="mailto:contact@fider.io" target="_blank" rel="noreferrer noopener">
              <EmailLogo className="w-6" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
