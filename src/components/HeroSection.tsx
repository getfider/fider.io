import { Image } from './Image'

export function HeroSection(): JSX.Element {
  return (
    <section id="hero">
      <div className="bg-gray-100">
        <main className="px-4 sm:px-6 lg:px-8 mx-auto pt-20 lg:pt-40 pb-40 max-w-7xl flex flex-col lg:flex-row space-y-10 lg:space-y-0 space-x-4">
          <div className="flex-1 sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Customer Feedback</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Fider can help you collect and prioritize feedback so that you can make informed decisions and build a better product.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="https://feedback.fider.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                >
                  See it live
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <Image width={2390} height={1318} browserFrame={true} alt="Home Screenshot" src="/images/screenshot/home1.png" />
          </div>
        </main>
      </div>
      <div className="w-full">
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon className="text-gray-100 fill-current" points="0,0 2560,0 0,100"></polygon>
        </svg>
      </div>
    </section>
  )
}
