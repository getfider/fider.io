import React, { ReactNode } from 'react'
import GitHubLogo from '@assets/icons/iconmonstr-github.svg'
import CheckIcon from '@assets/icons/heroicons-check.svg'
import Link from 'next/link'
import { FAQ } from './FAQ'

interface ItemProps {
  children: ReactNode
}

function Item(props: ItemProps): JSX.Element {
  return (
    <li className="flex items-center py-2">
      <span className={`w-5 h-5 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0`}>
        <CheckIcon className="w-4 h-4" />
      </span>
      <span className="text-gray-700 text-lg">{props.children}</span>
    </li>
  )
}

export function GetStartedSection(): JSX.Element {
  return (
    <>
      <section id="get-started">
        <div className="bg-gray-700 overflow-hidden">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/2 px-12 md:px-4 ml-auto mr-auto mt-8 lg:mt-16">
                <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">Get Feedback. Get Fider.</h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-300">Are you ready to try it?</p>
              </div>
              <div className="w-full hidden mt-4 lg:mt-8 md:block md:w-4/12 px-4 mr-auto ml-auto relative">
                <GitHubLogo className="w-2/4 text-gray-500" />
              </div>
            </div>
          </div>
          <div className="relative block md:flex items-center container mx-auto px-4">
            <div className="w-full md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
              <div className="text-lg font-medium text-blue-500 uppercase p-8 text-center border-b border-gray-200 tracking-wide">Self Hosted</div>
              <div className="block sm:flex md:block lg:flex items-center justify-center">
                <div className="mt-8 sm:m-8 md:m-0 md:mt-8 lg:m-8 text-center">
                  <div className="inline-flex items-center">
                    <span className="text-3xl font-medium">$0/mo</span>
                  </div>
                  <span className="block text-sm text-gray-600 mt-2">yep, it&apos;s open source</span>
                </div>
              </div>
              <div className="flex justify-center mt-3 px-4 lg:px-8">
                <ul>
                  <Item>All features included</Item>
                  <Item>No setup or maintenance fees</Item>
                  <Item>You manage the software and updates</Item>
                </ul>
              </div>

              <Link href="/docs">
                <a className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 p-8 text-md font-semibold text-gray-800 uppercase mt-16">
                  <span>Learn how to install</span>
                  <span className="font-medium text-gray-700 ml-2">➔</span>
                </a>
              </Link>
            </div>
            <div className="w-full md:w-1/2 relative z-0 px-8 md:px-0 md:py-16">
              <div className="bg-indigo-900 text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
                <div className="text-lg font-medium uppercase p-8 text-center border-b border-indigo-800 tracking-wide">Cloud</div>
                <div className="text-center text-sm sm:text-md mt-4 text-blue-200 px-4 lg:px-8">
                  <p className="py-2">Would you like to use Fider without the hassle of hosting it yourself?</p>
                  <p className="py-2">
                    Become a monthly financial sponsor of our open source project and we&apos;ll host a fully managed Fider for instance for you so you
                    don&apos;t have to worry about maintainance or updates.
                  </p>
                  <p className="py-2">We don&apos;t set a price. Support us with what you feel the software and service is worth.</p>
                  <p className="py-2">Read the FAQ below for full details.</p>
                </div>
                <a
                  href="https://login.fider.io/signup"
                  className="flex items-center justify-center bg-indigo-800 hover:bg-indigo-700 p-8 text-md font-semibold text-gray-300 uppercase mt-8"
                >
                  <span>Sign up</span>
                  <span className="font-medium text-gray-300 ml-2">➔</span>
                </a>
              </div>
            </div>
          </div>
          <FAQ />
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
