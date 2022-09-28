import { Logo } from '@root/site/logo/logo'
import { NavigationTitle } from '@root/site/navigation/navigation'
import config from '@root/config'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const isMain = location.pathname === '/'

  return (
    <div className='mb-3'>
      {isMain ? (
        <div>
          <h1 className='flex align-center items-center gap-5 font-bold text-3xl md:text-5xl'>
            <Logo size='xl' />
            {config.appName}
          </h1>
          <span className='text-sm'>Design System</span>
        </div>
      ) : (
        <NavigationTitle />
      )}
    </div>
  )
}

export default Header
