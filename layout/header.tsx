import { Logo } from '@components/logo/logo'
import { NavigationTitle } from '@components/navigation/navigation'
import config from '@root/config'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const isMain = router.pathname === '/'

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
