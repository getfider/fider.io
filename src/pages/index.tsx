import { MainLayout, FeaturesSection, GetStartedSection, HeroSection, HowItWorksSection, SEO } from '@app/components'

export default function Home(): JSX.Element {
  return (
    <MainLayout>
      <SEO
        title="Prioritize what your customers really need · Fider"
        description="Give your customers a voice and let them tell you what they need. Spend less time guessing and more time building the right product."
        imageUrl="/images/cover/home.png"
      />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <GetStartedSection />
    </MainLayout>
  )
}
