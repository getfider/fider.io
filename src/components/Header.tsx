import Link from 'next/link'
import LogoTitle from '@assets/logo-title.svg'
import GitHubLogo from '@assets/icons/iconmonstr-github.svg'
import XIcon from '@assets/icons/heroicons-x.svg'
import MenuIcon from '@assets/icons/heroicons-menu.svg'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { useToggle } from '@app/hooks'

const menuItems = (
  <>
    <Link href="/blog">
      <a className="text-gray-500 hover:text-blue-800 transition-colors duration-200">Blog</a>
    </Link>
    <Link href="/docs">
      <a className="text-gray-500 hover:text-blue-800 transition-colors duration-200">Documentation</a>
    </Link>
    <Link href="/#get-started">
      <a className="text-white font-bold px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 uppercase text-sm shadow hover:shadow-lg">Get started</a>
    </Link>
  </>
)

export function Header(): JSX.Element {
  const router = useRouter()
  const contextMenuRef = useRef<HTMLDivElement | null>(null)
  const { isOpen, open, close } = useToggle()

  const handleClickOutside = (e: MouseEvent) => {
    e.preventDefault()

    if (contextMenuRef?.current && !contextMenuRef.current.contains(e.target as Node)) {
      close()
    }
  }

  useEffect(() => {
    if (!isOpen) return

    router.events.on('routeChangeComplete', close)
    document.addEventListener('mousedown', handleClickOutside, true)

    return () => {
      router.events.off('routeChangeComplete', close)
      document.removeEventListener('mousedown', handleClickOutside, true)
    }
  })

  return (
    <header>
      <div className="sticky z-40 top-0 bg-white py-2 shadow-lg px-4 sm:px-6 xl:px-8">
        <div className="lg:z-50 w-full max-w-7xl mx-auto bg-white flex-none flex flex-row justify-between">
          <div className="flex-none flex items-center lg:w-60 xl:w-72">
            <Link href="/">
              <a className="overflow-hidden">
                <LogoTitle className="h-12" />
              </a>
            </Link>
          </div>
          <div className="hidden lg:flex items-center justify-end space-x-10">
            {menuItems}
            <a
              href="https://github.com/getfider/fider"
              rel="noopener"
              className="text-gray-500 hover:text-black transition-colors duration-200"
            >
              <GitHubLogo className="w-6" />
            </a>
          </div>
          <button
            onClick={open}
            type="button"
            className="inline-flex lg:hidden rounded-md p-2 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div ref={contextMenuRef} className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden">
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <Link href="/">
                <a>
                  <LogoTitle className="h-8 w-auto" />
                </a>
              </Link>
              <div className="-mr-2">
                <button
                  onClick={close}
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  <XIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 flex flex-col space-y-4">{menuItems}</div>
          </div>
        </div>
      )}
    </header>
  )
}
