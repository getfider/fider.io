import { Image } from './Image'

const BackgroundWallpaper = () => {
  return (
    <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
      <div className="relative h-full">
        <svg
          className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern id="e229dbec-10e9-49ee-8ec3-0286ca089edf" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)" />
        </svg>
        <svg
          className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern id="d2a68204-c383-44b1-b99f-42ccff4e5365" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)" />
        </svg>
      </div>
    </div>
  )
}

export function HeroSection(): JSX.Element {
  return (
    <section id="hero">
      <div className="bg-gray-50">
        <div className="relative overflow-hidden">
          <BackgroundWallpaper />

          <div className="relative pt-6 pb-16 sm:pb-24">
            <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Customer Feedback</span>
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-700">Made Easy</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Fider is a feedback portal that helps teams collect and prioritize customer feedback in one place, based on votes and ideas submitted.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex flex-col" aria-hidden="true">
              <div className="flex-1"></div>
              <div className="flex-1 w-full bg-gray-800"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 mb-2">
              <div className="flex justify-end">
                <p className="text-base text-gray-700">We use our own product to collect feedback ☺️</p>
                <svg className="-mb-12 scale-x-flip" width="42" height="61" viewBox="0 0 42 61" fill="none">
                  <path d="M27.147 3.228C7.794 18.443 6.296 44.021 21.7 56.675m0 0l-.081-6.964m.08 6.964l-6.2.898" stroke="#FF6A00" strokeWidth="2"></path>
                </svg>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-12">
              <a href="https://feedback.fider.io" target="_blank" rel="noreferrer">
                <Image className="shadow-xl" width={2370} height={1586} browserFrame={true} alt="Home Screenshot" src="/images/screenshot/home2.png" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Trusted by teams all over the world</h2>
              <p className="mt-3 text-xl text-blue-200 sm:mt-4">You{"'"}re in good company.</p>
            </div>
            <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
              <div className="flex flex-col">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">Ideas</dt>
                <dd className="order-1 text-5xl font-bold text-white">30k+</dd>
              </div>
              <div className="flex flex-col mt-10 sm:mt-0">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">Users</dt>
                <dd className="order-1 text-5xl font-bold text-white">45k+</dd>
              </div>
              <div className="flex flex-col mt-10 sm:mt-0">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">Votes</dt>
                <dd className="order-1 text-5xl font-bold text-white">200k+</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
