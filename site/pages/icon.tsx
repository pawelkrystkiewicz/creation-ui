import Icon from '@cui/core/components/icon'
import { icons } from '@cui/core/components/icon/list-of-icons'
import { NavigationTitle } from '@root/site/navigation/navigation'

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
