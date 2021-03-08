import React, { ReactNode } from 'react'
import Logo from '@assets/logo.svg'
import Link from 'next/link'
import GitHubLogo from '@assets/icons/iconmonstr-github.svg'
import TwitterLogo from '@assets/icons/iconmonstr-twitter.svg'
import docs from '@content/docs/all-docs'

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
                <MenuItem key={d.title+s.title} title={s.title} href={`/docs/${d.slug}#${s.slug}`} />
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
      <div className="pb-4 border-b border-truegray-700 self-center flex flex-col">
        <Logo className="w-10 mb-2 self-center" />
        <h1 className="text-2xl font-light self-center text-white">
          Fider<span className="text-blue-500">:docs</span>
        </h1>
      </div>
      <nav className="flex-1 text-gray-300 text-sm">
        <MenuHeader title="" />
        <ul>
          <MenuItem title="Home" href="/docs" />
        </ul>
        <MenuHeader title="How To" />
        <MenuHeader title="Self-Hosted" />
        <MenuHeader title="API Reference" />
        <div className="mt-20">
          <div className="text-truegray-400 hover:text-white">
            <Link href="/">
              <a>← getfider.com</a>
            </Link>
          </div>
          <div className="flex p-4">
            <a className="text-gray-500 hover:text-white" href="https://github.com/getfider/fider" target="_blank" rel="noopener">
              <GitHubLogo className="w-6" />
            </a>
            <a className="ml-6 text-gray-500 hover:text-blue-400" href="https://twitter.com/getfider" target="_blank" rel="noopener">
              <TwitterLogo className="w-6" />
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
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex flex-col w-full md:max-w-xs bg-truegray-800 p-4 h-screen sticky top-0">
        <DocsSidebar />
      </div>
      <div className="flex-1 bg-white">{props.children}</div>
    </div>
  )
}
