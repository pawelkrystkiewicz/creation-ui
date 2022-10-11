import { Logo } from '@root/site/logo/logo'
import { NavigationTitle } from '@root/site/navigation/navigation'
import config from '@root/config'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { DarkModeSwitch } from '@components/dark-mode-toggle'

const Header = () => {
  const location = useLocation()
  const isMain = location.pathname === '/'
  const [isDarkMode, setDarkMode] = useState(false)
  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked)
  }
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
      <DarkModeSwitch
        className='absolute top-0 right-0 m-2'
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={30}
      />
    </div>
  )
}

export default Header
