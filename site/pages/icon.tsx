import { Icon, icons } from '@cui/core'


const Home = () => {
  return (
    <>
      <div
        className='flex flex-wrap gap-5 w-full
          h-[80vh] overflow-y-auto
      '
      >
        {icons.map(icon => (
          <div
            className='grid grid-rows-2 gap-3
          place-items-center
           border w-24 h-24 p-3 rounded-md
           hover:bg-primary-100

           '
          >
            <Icon icon={icon} />
            <span className='text-xs text-center'>
              {icon.split('_').join(' ')}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
