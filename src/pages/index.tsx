import { MainLayout, FeaturesSection, GetStartedSection, HeroSection, HowItWorksSection } from '@app/components'

export default function Home(): JSX.Element {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <GetStartedSection />
    </MainLayout>
  )
}
