import Link from 'next/link'
import LogoTitle from '@assets/logo-title.svg'
import GitHubLogo from '@assets/icons/iconmonstr-github.svg'

export function Header(): JSX.Element {
  return (
    <header className="sticky z-40 top-0 bg-white py-2 shadow-lg">
      <div className="lg:z-50 w-full max-w-7xl mx-auto bg-white flex-none flex flex-row justify-between">
        <div className="flex-none pl-4 sm:pl-6 xl:pl-8 flex items-center lg:w-60 xl:w-72">
          <Link href="/">
            <a className="overflow-hidden w-10 md:w-auto">
              <LogoTitle className="h-12" />
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-end space-x-10">
          <Link href="/blog">
            <a className="text-gray-500 hover:text-blue-800 transition-colors duration-200">Blog</a>
          </Link>
          <Link href="/docs">
            <a className="text-gray-500 hover:text-blue-800 transition-colors duration-200">Documentation</a>
          </Link>
          <Link href="/#get-started">
            <a className="text-white font-bold px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 uppercase text-sm shadow hover:shadow-lg">Get started</a>
          </Link>
          <a href="https://github.com/getfider/fider" rel="noopener" className="text-gray-500 hover:text-black transition-colors duration-200">
            <GitHubLogo className="w-6" />
          </a>
        </div>
      </div>
    </header>
  )
}
