import Icon from '@components/icon'
import { NavigationTitle } from '@components/navigation/navigation'
import Switch from '@components/switch'

const Home = () => {
  return (
    <>
      <div className='flex flex-col gap-4'>
        <Switch size='sm' />
        <Switch size='md' />
        <Switch size='lg' />
        {/* <Switch size="sm" disabled/> */}
      </div>
    </>
  )
}

export default Home
