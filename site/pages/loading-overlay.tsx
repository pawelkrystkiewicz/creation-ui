import LoadingOverlay from '@root/lib/components/loading-overlay'
import { NavigationTitle } from '@root/lib/components/navigation/navigation'

const Home = () => {
  const active = true
  const variants = [
    {
      title: 'Small',
      props: { size: 'sm', active },
    },
    {
      title: 'Medium',
      props: { size: 'md', active },
    },
    {
      title: 'Large',
      props: { size: 'lg', active },
    },
  ]

  return (
    <>
      <div className='flex flex-col gap-5 prose-sm'>
        {variants.map(({ title, props }) => (
          <div className='relative w-full bg-white shadow-md rounded-lg p-3 overflow-clip'>
            <LoadingOverlay {...(props as any)} />
            <h3 className='text-blue-500'>{title}</h3>
            <p className='py-3'>
              Caveat: the parent needs to be
              <code>relative</code>
              and have
              <code>overflow-hidden</code> <code>overflow-clip</code>.
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
