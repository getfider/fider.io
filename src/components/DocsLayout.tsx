import React, { ReactNode } from 'react'
import Logo from '@assets/logo.svg'
import LogoTitle from '@assets/logo-title.svg'
import XIcon from '@assets/icons/heroicons-x.svg'
import MenuIcon from '@assets/icons/heroicons-menu.svg'
import Link from 'next/link'
import GitHubLogo from '@assets/icons/iconmonstr-github.svg'
import TwitterLogo from '@assets/icons/iconmonstr-twitter.svg'
import EmailLogo from '@assets/icons/iconmonstr-email.svg'
import docs from '@content/docs/all-docs'
import { useToggle } from '@app/hooks'
import analytics from '@app/fns/analytics'

interface MenuHeaderProps {
  title: string
}

export function MenuHeader(props: MenuHeaderProps): JSX.Element {
  const menuItemsFor = (category: string) =>
    Object.values(docs)
      .filter((d) => d.category === category)
      .map((d) => {
        if (d.sections) {
          return (
            <React.Fragment key={d.title}>
              {d.sections.map((s) => (
                <MenuItem key={d.title + s.title} title={s.title} href={`/docs/${d.slug}#${s.slug}`} />
              ))}
            </React.Fragment>
          )
        }

        return <MenuItem key={d.title} title={d.title} href={`/docs/${d.slug}`} />
      })

  return (
    <ul className="list-disc list-inside">
      <span className="block uppercase mt-6">{props.title}</span>
      {menuItemsFor(props.title)}
    </ul>
  )
}

interface MenuItemProps {
  title: string
  href: string
}

export function MenuItem(props: MenuItemProps): JSX.Element {
  return (
    <li className="text-truegray-400 hover:text-white mt-1">
      <Link href={props.href}>
        <a>{props.title}</a>
      </Link>
    </li>
  )
}

export function DocsSidebar(): JSX.Element {
  return (
    <>
      <div className="pb-4 border-b border-truegray-700 self-center w-3/4">
        <Link href="/docs">
          <a className="flex flex-col">
            <Logo className="w-10 mb-2 self-center" />
            <h1 className="text-2xl font-light self-center text-white">
              Fider<span className="text-blue-500">:docs</span>
            </h1>
          </a>
        </Link>
      </div>
      <nav className="flex-1 text-gray-300 text-sm">
        <MenuHeader title="" />
        <ul>
          <MenuItem title="Home" href="/docs" />
        </ul>
        <MenuHeader title="Self-Hosted" />
        <MenuHeader title="How To" />
        <MenuHeader title="API Reference" />
        <div className="mt-20">
          <div className="text-truegray-400 hover:text-white">
            <Link href="/">
              <a>← fider.io</a>
            </Link>
          </div>
          <div className="flex p-4">
            <a className="text-gray-500 hover:text-white" href="https://github.com/getfider/fider" target="_blank" rel="noreferrer noopener">
              <GitHubLogo className="w-6" />
            </a>
            <a className="ml-6 text-gray-500 hover:text-blue-400" href="https://twitter.com/getfider" target="_blank" rel="noreferrer noopener">
              <TwitterLogo className="w-6" />
            </a>
            <a className="ml-6 text-gray-500 hover:text-white" href="mailto:contact@fider.io" target="_blank" rel="noreferrer noopener">
              <EmailLogo className="w-6" />
            </a>
          </div>
        </div>
      </nav>
      <p className="text-truegray-200 text-sm">© {new Date().getFullYear()} Fider</p>
    </>
  )
}

interface DocsLayoutProps {
  children: ReactNode
}

export function DocsLayout(props: DocsLayoutProps): JSX.Element {
  const { isOpen, open, close } = useToggle()
  const sidebarClasses = isOpen ? 'fixed top-0 z-50 flex' : 'hidden lg:flex sticky top-0'

  return (
    <>
      <div className="min-h-screen">
        <div className="flex lg:hidden sticky z-40 top-0 bg-white py-2 shadow-lg px-4 sm:px-6 xl:px-8">
          <div className="lg:z-50 w-full max-w-7xl mx-auto bg-white flex-none flex flex-row justify-between">
            <div className="flex-none flex items-center lg:w-60 xl:w-72">
              <Link href="/docs">
                <a className="overflow-hidden">
                  <LogoTitle className="h-12" />
                </a>
              </Link>
            </div>
            <div className="hidden lg:flex items-center justify-end space-x-10">
              <a
                onClick={analytics.outbound}
                href="https://github.com/getfider/fider"
                rel="noopener"
                className="text-gray-500 hover:text-black transition-colors duration-200"
              >
                <GitHubLogo className="w-6" />
              </a>
            </div>
            <button
              onClick={isOpen ? close : open}
              type="button"
              className="inline-flex lg:hidden rounded-md p-2 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
        <div className="flex">
          <div className={`${sidebarClasses} flex-col w-full max-w-xs bg-truegray-800 overflow-y-scroll p-4 h-screen`}>
            <DocsSidebar />
          </div>
          <div className="flex-1 bg-white overflow-auto">{props.children}</div>
        </div>
      </div>
    </>
  )
}
