import React from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <base href="/" />

          <link
            rel="icon"
            href="https://secureservercdn.net/198.71.233.110/73p.545.myftpupload.com/wp-content/uploads/2021/11/cropped-favicon-todoo-32x32.png"
            sizes="32x32"
          />

          <meta name="author" content="Gabriel Costa" />
          <meta name="copyright" content="Toodoo Software LTDA" />
          <meta name="designer" content="Gabriel Costa" />
          <meta name="abstract" content="Toodoo ERM - Dashboard" />

          <meta name="robots" content="index,nofollow" />

          <meta property="twitter:card" content="summary" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />

          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:title" content="Toodoo ERM | Dashboard" />
          <meta property="og:description" content="" />
          <meta name="description" content="" />
          <meta property="og:url" content="https://toodooerm.com.br/" />
          <meta name="keywords" content="Toodoo, software, dashboard" />

          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#5168F4" />
          <meta
            name="msapplication-TileImage"
            content="/seo/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#5168F4"></meta>

          <link
            rel="canonical"
            href="https://toodooerm.com.br/"
            itemProp="url"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossOrigin="anonymous"
          ></script>
        </body>
      </Html>
    )
  }
}
