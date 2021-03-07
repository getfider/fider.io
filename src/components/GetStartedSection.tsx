import GitHubLogo from '@assets/icons/iconmonstr-github.svg'
import Link from 'next/link'

export function GetStartedSection(): JSX.Element {
  return (
    <section id="get-started">
      <div className="py-40 bg-gray-700 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 px-12 md:px-4 ml-auto mr-auto mt-8 lg:mt-16">
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">Get Feedback. Get Fider.</h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-300">Are you ready to try it?</p>
              <Link href="/docs/hosting-instance">
                <a
                  target="_blank"
                  className="mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
                >
                  Host your own instance
                </a>
              </Link>
            </div>
            <div className="w-full hidden mt-4 lg:mt-8 md:block md:w-4/12 px-4 mr-auto ml-auto relative">
              <GitHubLogo className="w-2/4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon className="text-gray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </section>
  )
}
