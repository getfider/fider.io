import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout(props: MainLayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <main className="flex-grow">{props.children}</main>
      <Footer />
    </>
  )
}
