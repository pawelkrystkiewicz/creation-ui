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
    {
      title: 'Checkbox',
      description: 'Checkbox component',
      link: '/checkbox',
    },
    {
      title: 'Text Input ',
      description: 'Text Input component',
      link: '/inputs/text',
    },
  ]

  return (
    <>
      <div id="header">
        <h1 className="flex align-center gap-5">
          <Logo size="xl" />
          {config.appName}
        </h1>
        <span className="text-sm">Design System</span>
      </div>
      <p>Comprehensive list of UI components for React built with Tailwind</p>
      <div className="flex flex-col items-start">
        <div>
          <h2>Components</h2>
          <p>List of available components</p>
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
