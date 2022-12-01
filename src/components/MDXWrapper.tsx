import { MDXProvider } from '@mdx-js/react'
import { ReactNode } from 'react'
import Link from 'next/link'

interface MDXWrapperProps {
  children: ReactNode
}

const components = {
  a: (props: any) => {
    const href = props.href as string
    if (href.startsWith('http://') || href.startsWith('https://')) {
      return (
        <a target="_blank" rel="noopener noreferrer" href={href} {...props}>
          {props.children}
        </a>
      )
    }

    return <Link href={href}>{props.children}</Link>
  },
}

export function MDXWrapper(props: MDXWrapperProps): JSX.Element {
  return <MDXProvider components={components}>{props.children}</MDXProvider>
}
