import { Fragment } from 'react'
import LogoTitle from '@assets/logo-title.svg'
import { Popover, Transition } from '@headlessui/react'
import XIcon from '@assets/icons/heroicons-x.svg'
import MenuIcon from '@assets/icons/heroicons-menu.svg'
import Link from 'next/link'

const links = (
  <>
    <Link href="#get-started">
      <a className="text-base font-medium text-gray-500 hover:text-gray-900">Pricing</a>
    </Link>
    <Link href="/blog">
      <a className="text-base font-medium text-gray-500 hover:text-gray-900">Blog</a>
    </Link>
    <Link href="/docs">
      <a className="text-base font-medium text-gray-500 hover:text-gray-900">Documentation</a>
    </Link>
  </>
)

export function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 border-b-2 border-gray-100">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">Fider</span>
                <LogoTitle className="h-12" />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <nav className="hidden md:flex space-x-10">{links}</nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="https://login.fider.io/signup"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 z-10 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <LogoTitle className="h-12" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">{links}</nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <a
                  href="https://login.fider.io/signup"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
