import { trackEvent } from '@app/fns/analytics'

interface SignUpLinkProps {
  area: string
  className?: string
}

export function SignUpLink(props: SignUpLinkProps): JSX.Element {
  const handleClick = () => {
    trackEvent('Signup Link', { area: props.area })
  }

  return (
    <a className={props.className} onClick={handleClick} href="https://login.fider.io/signup" target="_blank" rel="noopener noreferrer">
      Get Started
    </a>
  )
}
