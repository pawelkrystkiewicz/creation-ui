import { Logo } from '@components/logo/logo'
import config from '@src/config'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  const elements = [
    {
      title: 'Button',
      description: 'Button component',
      link: '/button',
    },
    {
      title: 'Spinner',
      description: 'Spinner component',
      link: '/spinner',
    },
    {
      title: 'Switch',
      description: 'Switch component',
      link: '/switch',
    },
    {
      title: 'Icon',
      description: 'Icons with Material Icons font',
      link: '/icon',
    },
  ]

  return (
    <>
      <h1 className="flex align-center gap-5">
        <Logo size="xl" />
        {config.appName}
      </h1>
      <div>Design System</div>
      <div className="flex flex-col items-start">
        <div>
          <h2>Components</h2>
          <p>This is my design system elements. Here is the list of available components</p>
        </div>
        <div>
          {elements.map(({ title, description, link }) => (
            <div key={link} className="flex flex-col items-start">
              <Link href={link}>
                <b>{title}</b>
              </Link>
              <span className="text-sm">{description}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
