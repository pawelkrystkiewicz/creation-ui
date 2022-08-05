import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/button/button'
import { SearchIcon } from '@heroicons/react/outline'

const Home: NextPage = () => {
  const ButtonIcon = <SearchIcon className="h-4 w-4" />
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="flex gap-3 m-5">
          <Button loading size="lg" color={"indigo"}>
            Hello
          </Button>
          <Button loading variant="outlined" size="lg" color={"indigo"}>
            World
          </Button>
          <Button loading variant="text" size="lg" color={"indigo"}>
            Enter
          </Button>
        </div>
        <div className="flex gap-3 m-5">
          <Button loading>Hello</Button>
          <Button loading variant="outlined">
            Click me
          </Button>
          <Button loading variant="text" color={"red"}>
            Link
          </Button>
        </div>
        <div className="flex gap-3 m-5">
          <Button size="sm">Hello</Button>
          <Button size="sm" variant="outlined">
            Click me
          </Button>
          <Button size="sm" variant="text">
            Link
          </Button>
        </div>
        <div className="flex gap-3 m-5">
          <Button>Hello</Button>
          <Button variant="outlined">Click me</Button>
          <Button variant="text">Link</Button>
        </div>
        <div className="flex gap-3 m-5">
          <Button size="lg">Hello</Button>
          <Button size="lg" variant="outlined">
            Click me
          </Button>
          <Button size="lg" variant="text">
            Link
          </Button>
        </div>
        <div className="flex gap-3 m-5">
          <Button rounded="rounded">Hello</Button>
          <Button rounded="rounded" variant="outlined">
            Click me
          </Button>
          <Button rounded="rounded" variant="text">
            Link
          </Button>
        </div>
        <div className="flex gap-3 m-5">
          <Button rounded="circle">{ButtonIcon}</Button>
          <Button rounded="circle" variant="outlined">
            {ButtonIcon}
          </Button>
          <Button rounded="circle" variant="text">
            {ButtonIcon}
          </Button>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
