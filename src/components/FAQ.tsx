import React, { ReactNode } from 'react'

interface ItemProps {
  title: string
  children: ReactNode
}

function Item(props: ItemProps): JSX.Element {
  return (
    <div className="my-6">
      <div className="font-semibold py-2 px-4 bg-gray-600 rounded-sm">{props.title}</div>
      <div className="mt-2">{props.children}</div>
    </div>
  )
}

export function FAQ(): JSX.Element {
  return (
    <div className="container mx-auto pb-20 px-4 max-w-4xl">
      <div className="flex flex-wrap justify-center">
        <div className="w-full ml-auto mr-auto mt-8 lg:mt-16">
          <h3 id="faq" className="text-3xl font-semibold leading-normal text-white">
            Frequently Asked Questions
          </h3>
          <div className="text-white mt-4">
            <Item title="I'm interested on the Cloud option, what's the process to sponsor the project?">
              <p className="mt-2 leading-7">
                <a className="text-blue-300" href="https://login.fider.io/signup" target="_blank" rel="noopener noreferrer">
                  Sign up
                </a>{' '}
                for a Fider account and then visit{' '}
                <a className="text-blue-300" href="https://opencollective.com/fider" target="_blank" rel="noopener noreferrer">
                  https://opencollective.com/fider
                </a>{' '}
                to select one of monthly tiers.
              </p>
              <p className="mt-2 leading-7">
                After subscribing, send us an email{' '}
                <a className="text-blue-300" href="mailto:opensource@fider.io">
                  opensource@fider.io
                </a>{' '}
                with your Fider URL <span className="text-sm">(https://yourname.fider.io)</span> and your OpenCollective profile URL{' '}
                <span className="text-sm">(https://opencollective.com/yourname)</span> so we can link them.
              </p>
            </Item>
            <Item title="I want to sponsor the project, but I don't want my contribution to become public. What should I do?">
              You can become an anonymous sponsor by using an OpenCollective incognito mode. You&apos;ll find this option when setting up your contribution on
              OpenCollective.
            </Item>
            <Item title="Is there a free trial period?">
              Yes. We give everyone 14 days to try the cloud option. After this period, you&apos;ll be asked to moved to a Self-Hosted or sponsor the project.
            </Item>
            <Item title="What if I don't want to use Fider Cloud anymore?">
              You can simply cancel your OpenCollective subscription and delete your Fider account.
            </Item>
            <Item title="I want to self host Fider, can I still sponsor the project?">
              You sure can! We appreciate any code or financial contribution you can give to keep the project alive. The Cloud option is an incentive for
              individuals and businesses to get something extra in return.
            </Item>
          </div>
        </div>
      </div>
    </div>
  )
}
