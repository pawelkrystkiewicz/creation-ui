import Icon from '@components/icon/icon'
import { icons } from '@components/icon/list-of-icons'
import { NavigationTitle } from '@components/navigation/navigation'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <NavigationTitle />
      <div
        className="flex flex-wrap gap-5 w-full
          h-[80vh] overflow-y-auto
      ">
        {icons.map(icon => (
          <div
            className="grid grid-rows-2 gap-3
          place-items-center
           border w-24 h-24 p-3 rounded-md
           hover:bg-blue-100

           ">
            <Icon icon={icon} />
            <span className="text-xs text-center">{icon.split('_').join(' ')}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
