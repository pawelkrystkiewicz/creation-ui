import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  const elements = [
    {
      title: 'Button',
      description: 'Button component',
      link: '/button',
    },
    {
      title: 'Button toggle group',
      description: 'Button toggle group component',
      link: '/button-toggle-group',
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
    {
      title: 'TextArea ',
      description: 'TextArea component',
      link: '/inputs/textarea',
    },
    {
      title: 'Popover',
      description: 'Popover component',
      link: '/popover',
    },
    {
      title: 'Radio',
      description: 'Radio component',
      link: '/radio',
    },
    {
      title: 'Timeline Horizontal',
      description: 'Timeline Horizontal component',
      link: '/timeline-horizontal',
    },
    {
      title: 'Table',
      description: 'Table',
      link: '/table',
    },
    {
      title: 'Tooltips',
      description: 'Tooltips',
      link: '/tooltips',
    },
    {
      title: 'Loading Overlay',
      description: 'Loading Overlay',
      link: '/loading-overlay',
    },
    {
      title: 'Modal',
      description: '',
      link: '/modal',
    },
    {
      title: 'DatePicker',
      description: 'Date and Time Pickers',
      link: '/date-pickers',
    },
  ]

  return (
    <>
      <p>Comprehensive list of UI components for React built with Tailwind</p>
      <div className="flex flex-col items-start">
        <div>
          <h2 className='font-semibold text-2xl mt-3 mb-1'>Components</h2>
          <p>List of available components</p>
        </div>
        <div className="overflow-y-auto max-h-[50vh] w-full mt-1">
          {elements.map(({ title, description, link }) => (
            <div key={link} className="flex flex-col items-start">
              <Link href={link}>
                <div className="cursor-pointer">
                  <b>{title}</b> - <span className="text-sm">{description}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
