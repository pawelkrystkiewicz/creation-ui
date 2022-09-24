import config from '@root/config'
import Container from '@root/layout/container'
import Content from '@root/layout/content'
import Footer from '@root/layout/footer'
import Header from '@root/layout/header'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Suspense } from 'react'
import '../styles/date-picker.css'
import '../styles/globals.css'
import '../styles/timeline.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Head>
        <title>{config.appName}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        <Content>
          <Header />
          <Component {...pageProps} />
        </Content>
      </Suspense>
      <Footer />
    </Container>
  )
}

export default MyApp
