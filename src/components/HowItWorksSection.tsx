interface StepProps {
  number: number
  title: string
  description: string
}

export function Step(props: StepProps): JSX.Element {
  return (
    <div className="p-4 w-full md:w-1/3 flex">
      <div className="flex-shrink-0 w-12 h-12 text-xl inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-800">{props.number}</div>
      <div className="flex-grow pl-6">
        <h2 className="text-gray-900 text-lg font-medium mb-2">{props.title}</h2>
        <p className="leading-relaxed text-base">{props.description}</p>
      </div>
    </div>
  )
}

export function HowItWorksSection(): JSX.Element {
  return (
    <section id="how-it-works">
      <div className="w-full mt-40">
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon className="text-gray-100 fill-current" points="0,100 2560,0 2560,100"></polygon>
        </svg>
      </div>
      <div className="bg-gray-100 py-40">
        <div className="px-4 sm:px-6 lg:px-8 pt-4">
          <div className="lg:text-center">
            <p className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">How does it work?</p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Three simple steps to understand the workflow.</p>
          </div>
        </div>
        <div className="flex max-w-7xl container mx-auto flex-wrap md:space-y-0 space-y-6 py-10">
          <Step number={1} title="Setup" description="Create a feedback site for your product. Customize it with your own logo, colors and text." />
          <Step
            number={2}
            title="Collect"
            description="Invite people to your new Fider site. They'll be able to suggest new ideas, submit feature requests or report issues they have with your product."
          />
          <Step
            number={3}
            title="Deliver"
            description="Keep your audience in the loop by responding to their suggestions. Users will be notified of any new action on their topics of their interest."
          />
        </div>
      </div>
    </section>
  )
}
