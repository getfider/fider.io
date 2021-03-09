import { MainLayout, FeaturesSection, GetStartedSection, HeroSection, HowItWorksSection, SEO } from '@app/components'

export default function Home(): JSX.Element {
  return (
    <MainLayout>
      <SEO
        title="Collect and prioritize product feedback · Fider"
        description="Fider can help you collect and prioritize product feedback so that you can focus on building the right product."
        imageUrl="/images/cover/home.jpg"
      />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <GetStartedSection />
    </MainLayout>
  )
}
