import { Hero, FeatureList, HowItWorks, SEO, Pricing } from '@app/components'

export default function Home(): JSX.Element {
  return (
    <>
      <SEO
        title=""
        description=""
        imageUrl=""
      />

      <Hero />
      <FeatureList />
      <HowItWorks />
      <Pricing />
    </>
  )
}
