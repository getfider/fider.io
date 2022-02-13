import React, { useEffect } from 'react'
import CheckIcon from '@assets/icons/heroicons-check.svg'
import { useCache, useScript } from '@app/hooks'

const includedFeatures = ['All Features', 'Unlimited Users', 'Unlimited Feedback', 'Unlimited Admins']

export function GetStartedSection(): JSX.Element {
  const status = useScript('https://cdn.paddle.com/paddle/paddle.js')
  const [price, setPrice] = useCache('price', '$30')

  useEffect(() => {
    if (status === 'ready') {
      window.Paddle.Setup({ vendor: 132914 })
      window.Paddle.Product.Prices(742576, (response) => {
        setPrice(response.price.net.replace(/\.00/g, ''))
      })
    }
  }, [status, setPrice])

  return (
    <>
      <section id="get-started">
        <div className="w-full">
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-gray-100 fill-current" points="0,0 0,100 2560,0"></polygon>
          </svg>
        </div>
        <div className="bg-white">
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">Simple no-tricks pricing</h2>
                <p className="mt-4 text-xl text-gray-600">No credit card required. Start your free trial now!</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
            <div className="relative">
              <div className="absolute inset-0 h-1/2" />
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto bg-gray-50 rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                  <div className="flex-1 px-6 py-8 lg:p-12">
                    <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Fider Cloud Subscription</h3>
                    <p className="mt-6 text-base text-gray-500">An affordable plan that includes all you need.</p>
                    <div className="mt-8">
                      <div className="flex items-center">
                        <h4 className="flex-shrink-0 pr-4 text-sm tracking-wider font-semibold uppercase text-blue-600">What&apos;s included</h4>
                        <div className="flex-1 border-t-2 border-gray-200" />
                      </div>
                      <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                        {includedFeatures.map((feature) => (
                          <li key={feature} className="flex items-start lg:col-span-1">
                            <div className="flex-shrink-0">
                              <CheckIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-sm text-gray-700">{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="py-8 px-6 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                    <p className="text-lg leading-6 font-medium text-gray-900">15-Day Free Trial</p>
                    <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                      <span>{price}</span>
                      <span className="ml-3 text-xl font-medium text-gray-500">/mo</span>
                    </div>
                    <div className="mt-6">
                      <div className="rounded-md shadow">
                        <a
                          href="https://login.fider.io/signup"
                          className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                        >
                          Sign up
                        </a>
                      </div>
                    </div>
                    <div className="mt-4 text-sm">No credit card required.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
