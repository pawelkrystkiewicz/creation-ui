import { Version } from '@cui/core/components/version'
import { Logo } from 'site/logo/logo'
import config from '../config'

const Footer = () => (
  <footer className='flex py-3 w-full items-center justify-center border-t absolute bottom-0 -z-0'>
    <a
      className='flex items-center justify-center gap-2 text-sm'
      href='/'
      rel='noopener noreferrer'
    >
      <Logo size='sm' /> {config.createdBy} &copy; {new Date().getFullYear()}
    </a>
    <Version />
  </footer>
)

export default Footer
