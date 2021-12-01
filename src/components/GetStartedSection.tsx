import React, { ReactNode, useEffect } from 'react'
import CheckIcon from '@assets/icons/heroicons-check.svg'
import { useCache, useScript } from '@app/hooks'

interface ItemProps {
  children: ReactNode
}

const Item = (props: ItemProps): JSX.Element => {
  return (
    <li className="flex items-center py-2">
      <span className={`w-5 h-5 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0`}>
        <CheckIcon className="w-4 h-4" />
      </span>
      <span className="text-gray-700 text-lg">{props.children}</span>
    </li>
  )
}

const CloudCard = (): JSX.Element => {
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
      <div className="w-full relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
        <div className="text-lg font-medium text-blue-500 uppercase p-8 text-center border-b border-gray-200 tracking-wide">Cloud Hosted</div>
        <div className="block sm:flex md:block lg:flex items-center justify-center">
          <div className="mt-8 sm:m-8 md:m-0 md:mt-8 lg:m-8 text-center">
            <div className="inline-flex items-center">
              <span className="text-3xl font-medium">{price}/mo</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-3 px-4 lg:px-8">
          <ul>
            <Item>All features included</Item>
            <Item>Unlimited Users</Item>
            <Item>Unlimited Feedback</Item>
            <Item>Unlimited Admins</Item>
          </ul>
        </div>

        <a
          href="https://login.fider.io/signup"
          className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 p-8 text-md font-semibold text-gray-800 uppercase mt-16"
        >
          <span>Start free 15 days trial</span>
          <span className="font-medium text-gray-700 ml-2">➔</span>
        </a>
      </div>
    </>
  )
}

export function GetStartedSection(): JSX.Element {
  return (
    <>
      <section id="get-started">
        <div className="bg-gray-700 overflow-hidden">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center">
              <div className="px-12 md:px-4 ml-auto mx-auto mt-8 lg:mt-16">
                <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">Get Feedback. Get Fider.</h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-300">Are you ready to try it?</p>
              </div>
            </div>
          </div>
          <div className="relative block max-w-xl items-center container mx-auto mt-12">
            <CloudCard />
          </div>
        </div>
        <div className="w-full bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-gray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </section>
    </>
  )
}
