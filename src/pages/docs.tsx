import { MainLayout, FeaturesSection, GetStartedSection, HeroSection, HowItWorksSection } from '@app/components'

export default function Docs(): JSX.Element {
  return (
    <>
      <div className="min-h-screen flex">
        <div className="flex-none hidden lg:block w-full md:max-w-xs bg-gray-900 text-white">Sidebar</div>
        <div className="flex-1 bg-white text-white">Main content area</div>
      </div>
    </>
  )
}
