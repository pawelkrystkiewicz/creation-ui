import { DarkModeToggle } from '@cui/core/components'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import config from 'site/config'
import { Logo } from 'site/logo/logo'
import { NavigationTitle } from 'site/navigation/navigation'

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
      <DarkModeToggle
        className='absolute top-0 right-0 m-2'
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={30}
      />
    </div>
  )
}

export default Header
