export function trackEvent(name: string, props?: object): void {
  if (window.plausible) {
    window.plausible(name, { props })
  }
}
