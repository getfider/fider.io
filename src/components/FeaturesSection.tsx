import IconGitHub from '@assets/icons/iconmonstr-github.svg'
import IconGlobe from '@assets/icons/heroicons-globe.svg'
import IconCode from '@assets/icons/heroicons-code.svg'
import IconFingerprint from '@assets/icons/heroicons-fingerprint.svg'
import IconPhotoGraph from '@assets/icons/heroicons-photograph.svg'
import IconShieldCheck from '@assets/icons/heroicons-shield-check.svg'
import IconSpeakerPhone from '@assets/icons/heroicons-speakerphone.svg'
import IconTag from '@assets/icons/heroicons-tag.svg'
import IconUserGroup from '@assets/icons/heroicons-user-group.svg'
import IconPencil from '@assets/icons/heroicons-pencil.svg'
import IconTerminal from '@assets/icons/heroicons-terminal.svg'
import IconTranslate from '@assets/icons/heroicons-translate.svg'

interface FeatureProps {
  title: string
  description: string
  icon: JSX.Element
  color: string
}

export function Feature(props: FeatureProps): JSX.Element {
  return (
    <div className="flex">
      <div className="flex-shrink-0">
        <div className={`flex items-center justify-center h-12 w-12 rounded-full shadow-xl ${props.color} text-white`}>{props.icon}</div>
      </div>
      <div className="ml-4">
        <dt className="text-lg leading-6 font-medium text-gray-900">{props.title}</dt>
        <dd className="mt-2 text-base text-gray-500">{props.description}</dd>
      </div>
    </div>
  )
}

const colors = ['bg-blue-400', 'bg-indigo-400', 'bg-red-400', 'bg-green-400', 'bg-yellow-400', 'bg-pink-400', 'bg-purple-400']

export function FeaturesSection(): JSX.Element {
  return (
    <section id="features">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mt-20 mb-20">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">What&apos;s in the box?</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Feature-packed solution for all your needs.</p>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <Feature
              color={colors[0]}
              icon={<IconUserGroup className="w-6 h-6" />}
              title="Share ideas, vote and discuss"
              description="Give voice to your community, get valuable suggestions and prioritize what they need the most."
            />
            <Feature
              color={colors[1]}
              icon={<IconSpeakerPhone className="w-6 h-6" />}
              title="Keep everyone informed"
              description="Whenever you start, complete or decline a suggestion, Fider will notify everyone that subscribed to that topic."
            />
            <Feature
              color={colors[2]}
              icon={<IconFingerprint className="w-6 h-6" />}
              title="One click sign in"
              description="Visitors are only one click away from contributing! Sign in via Facebook, Google, GitHub, Azure AD, Twitch, Discord or any other OAuth2 provider."
            />
            <Feature
              color={colors[3]}
              icon={<IconShieldCheck className="w-6 h-6" />}
              title="Private Site"
              description="You can choose to control access to your site by making it Private."
            />
            <Feature
              color={colors[4]}
              icon={<IconPhotoGraph className="w-6 h-6" />}
              title="Your Brand"
              description="Use custom CSS feature to style Fider the way you want. Your logo, your colors, your identity."
            />
            <Feature
              color={colors[5]}
              icon={<IconCode className="w-6 h-6" />}
              title="Public API"
              description="Leverage our complete API and have total control to integrate Fider into your process."
            />
            <Feature
              color={colors[6]}
              icon={<IconTerminal className="w-6 h-6" />}
              title="Integrations"
              description="Fider can integrate with any system that supports Webhook, such as Slack and Discord."
            />
            <Feature
              color={colors[0]}
              icon={<IconTranslate className="w-6 h-6" />}
              title="Multi-language"
              description="We speak your language! Fider is translated in 10+ languages, such as English, Spanish, German, French and Portuguese!"
            />
            <Feature
              color={colors[1]}
              icon={<IconTag className="w-6 h-6" />}
              title="Organize your content"
              description="Tag your content to make it easier to find, group and decide. Tags can be either Public or Private."
            />
            <Feature
              color={colors[2]}
              icon={<IconPencil className="w-6 h-6" />}
              title="Markdown"
              description="Style your text with the popular Markdown markup language."
            />
            <Feature
              color={colors[3]}
              icon={<IconGlobe className="w-6 h-6" />}
              title="Your own domain"
              description="When using our hosted service, you can use your own domain and get a free TLS certificate to keep it secure."
            />
            <Feature
              color={colors[4]}
              icon={<IconGitHub className="w-6 h-6" />}
              title="Open Source"
              description="Our code is 100% Open Source. Visit getfider/fider on GitHub."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
