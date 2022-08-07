import { Logo } from '@components/logo/logo'
import config from '@src/config'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Head>
        <title>{config.appName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="flex w-full flex-1 flex-col
        px-5
        sm:px-8
        md:px-20 py-10
        prose sm:prose-sm
  md:prose-lg
  lg:prose-lg
  mx-auto
        ">
        <Component {...pageProps} />
      </main>

      <footer className="flex py-3 w-full items-center justify-center border-t">
        <a className="flex items-center justify-center gap-2 text-sm" href="/" rel="noopener noreferrer">
          <Logo size="sm" /> {config.createdBy} &copy; {new Date().getFullYear()}
        </a>
      </footer>
    </div>
  )
}

export default MyApp
