import Logo from '@assets/logo.svg'
import GitHubLogo from '@assets/icons/iconmonstr-github.svg'
import TwitterLogo from '@assets/icons/iconmonstr-twitter.svg'

export function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-200 text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex font-medium items-center md:justify-start justify-center text-gray-900">
            <Logo className="h-10" />
          </a>
          <p className="mt-2 text-sm text-gray-500">Customer Feedback tool for everyone.</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4"></div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4"></div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">Blog</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-800 transition-colors duration-200">
                  First Link
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-800 transition-colors duration-200">
                  Second Link
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-800 transition-colors duration-200">
                  Third Link
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-800 transition-colors duration-200">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">Documentation</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-800 transition-colors duration-200">
                  First Link
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-800 transition-colors duration-200">
                  Second Link
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-800 transition-colors duration-200">
                  Third Link
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-blue-800 transition-colors duration-200">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© {new Date().getFullYear()} Fider</p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500 hover:text-black" href="https://github.com/getfider/fider" target="_blank" rel="noopener">
              <GitHubLogo className="w-6" />
            </a>
            <a className="ml-6 text-gray-500 hover:text-blue-500" href="https://twitter.com/getfider" target="_blank" rel="noopener">
              <TwitterLogo className="w-6" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
