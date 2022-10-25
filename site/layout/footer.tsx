import { Version } from '@creation-ui/core/components/version'
import { Logo } from 'site/logo/logo'
import config from '../config'
import gitHash from '../../git-hash.json'

const Footer = () => (
  <footer className='flex py-3 w-full items-center justify-center border-t absolute bottom-0 -z-0'>
    <a
      className='flex items-center justify-center gap-2 text-sm'
      href='/'
      rel='noopener noreferrer'
    >
      <Logo size='sm' /> {config.createdBy} &copy; {new Date().getFullYear()}
    </a>
    <Version gitHash={gitHash} />
  </footer>
)

export default Footer
