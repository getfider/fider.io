import Link from 'next/link'

export function UseFiderCloud(): JSX.Element {
  return (
    <div className="p-2 bg-gray-50 border-l-4 border-gray-600 shadow leading-loose">
      The easiest way to get started with Fider is with our official managed service <Link href="/">Fider Cloud</Link>. Our managed hosting can save a
      substantial amount of developer time and resources. For most sites this ends up being the best value option and the revenue goes to funding the
      maintenance and further development of Fider. So you&apos;ll be supporting open source software and getting a great service! The section below is for
      self-hosting Fider on your server and managing your infrastructure.
    </div>
  )
}
