import Logo from '@assets/logo.svg'
import Link from 'next/link'
import GitHubLogo from '@assets/icons/iconmonstr-github.svg'
import TwitterLogo from '@assets/icons/iconmonstr-twitter.svg'

interface MenuHeaderProps {
  title: string
}

export function MenuHeader(props: MenuHeaderProps): JSX.Element {
  return <span className="block uppercase mt-6">{props.title}</span>
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

export default function Docs(): JSX.Element {
  return (
    <>
      <div className="min-h-screen flex">
        <div className="hidden lg:flex flex-col w-full md:max-w-xs bg-truegray-800 p-4">
          <div className="pb-4 border-b border-truegray-700 self-center flex flex-col">
            <Logo className="w-10 mb-2 self-center" />
            <h1 className="text-2xl font-light self-center text-white">
              Fider<span className="text-blue-500">:docs</span>
            </h1>
          </div>
          <nav className="flex-1 text-gray-300 text-sm">
            <MenuHeader title="" />
            <ul>
              <MenuItem title="Home" href="#" />
            </ul>
            <MenuHeader title="How To" />
            <ul className="list-disc list-inside">
              <MenuItem title="Configuring OAuth" href="#" />
            </ul>
            <MenuHeader title="Self-Hosted" />
            <ul className="list-disc list-inside">
              <MenuItem title="Enhanced SEO on Fider" href="#" />
              <MenuItem title="Hosting an instance on Heroku" href="#" />
              <MenuItem title="Hosting your own instance" href="#" />
              <MenuItem title="How to enable SSL" href="#" />
              <MenuItem title="How to show Legal Pages" href="#" />
            </ul>
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
        </div>
        <div className="flex-1 bg-white text-white">Main content area</div>
      </div>
    </>
  )
}
