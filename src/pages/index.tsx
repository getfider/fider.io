import { FeaturesSection, GetStartedSection, HeroSection, HowItWorksSection } from '@app/components'

export default function Home(): JSX.Element {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <GetStartedSection />
    </>
  )
}
