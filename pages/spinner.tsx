import Loader from '@components/loader'
import { NavigationTitle } from '@components/navigation/navigation'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const variants = [
    {
      title: 'Small',
      props: { size: 'sm' },
    },
    {
      title: 'Medium',
      props: { size: 'md' },
    },
    {
      title: 'Large',
      props: { size: 'lg' },
    },
  ]

  return (
    <>
      <div>
        {variants.map(({ title, props }) => (
          <div className='w-10'>
            <p>{title}</p>
            <Loader {...(props as any)} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
