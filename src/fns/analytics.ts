import { MouseEvent } from 'react'

const trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID

enum Category {
  Pricing = 'Pricing',
  Newsletter = 'Newsletter',
  SiteChecker = 'SiteChecker',
  Outbound = 'Outbound',
  CSPHasher = 'CSPHasher',
}

enum Action {
  PriceCheck = 'PriceCheck',
  Subscribe = 'Subscribe',
  SiteCheck = 'SiteCheck',
  Click = 'Click',
}

const pageView = (): void => {
  if (!window.gtag || !trackingId) {
    console.log('config', { page_path: location.pathname, client_id: window.u })
    return
  }

  gtag('config', trackingId, { page_path: location.pathname, client_storage: 'none', anonymize_ip: true, client_id: window.u })
}

const event = (action: Action, category: Category, label?: string): void => {
  if (!window.gtag || !trackingId) {
    console.log('event', { action, category, label })
    return
  }

  gtag('event', action, {
    event_category: category,
    event_label: label,
  })
}

const outbound = (e: MouseEvent<HTMLAnchorElement>): void => {
  event(Action.Click, Category.Outbound, e.currentTarget.href)
}

export default {
  pageView,
  event,
  outbound,
  Category,
  Action,
}
