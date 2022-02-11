import { AppProps } from 'next/app'
import '../styles/main.css'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}