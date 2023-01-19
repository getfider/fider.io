import Document, { Html, Main, NextScript, DocumentInitialProps, DocumentContext, Head } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    const plausibleScript = process.env.VERCEL === '1' && (
      <>
        <script defer data-domain="fider.io" data-api="/e" src="/p.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.plausible = window.plausible || function() {(window.plausible.q = window.plausible.q || []).push(arguments)}`,
          }}
        ></script>
      </>
    )

    return (
      <Html lang="en">
        <Head>
          {plausibleScript}
          <meta name="referrer" content="same-origin" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="apple-mobile-web-app-title" content="Fider" />
          <meta name="application-name" content="Fider" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body className="text-gray-700">
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="a79f6186-73d3-4fa5-8434-fefb329973b1";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
            }}
          ></script>
        </body>
      </Html>
    )
  }
}
