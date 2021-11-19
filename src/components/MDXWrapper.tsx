import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react'
import { ReactNode } from 'react'
import analytics from '@app/fns/analytics'
import Link from 'next/link'

interface MDXWrapperProps {
  children: ReactNode
}

const components: MDXProviderComponentsProp = {
  a: (props) => {
    const href = props.href as string
    if (href.startsWith('http://') || href.startsWith('https://')) {
      return (
        <a onClick={analytics.outbound} target="_blank" rel="noopener noreferrer" href={href} {...props}>
          {props.children}
        </a>
      )
    }

    return (
      <Link href={href}>
        <a>{props.children}</a>
      </Link>
    )
  },
}

export function MDXWrapper(props: MDXWrapperProps): JSX.Element {
  return <MDXProvider components={components}>{props.children}</MDXProvider>
}
