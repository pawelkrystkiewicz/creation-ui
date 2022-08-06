import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const color = '#2c40da'
    return (
      <Html className="scroll-smooth h-screen min-h-screen font-display antialiased">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/ico" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content={color} />
          <meta name="theme-color" content={color} />

          {/* <script src="/static/theme.js" /> */}
        </Head>
        <body className="h-screen min-h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
