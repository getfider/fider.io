declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element
  export default MDXComponent
}

interface GetPriceResponse {
  price: { net: string }
}

interface PaddleSdk {
  Setup(params: { vendor: number })
  Product: {
    Prices(planId: number, callback: (resp: GetPriceResponse) => void)
  }
}

interface Window {
  u?: SVGStringList
  Paddle: PaddleSdk
}
