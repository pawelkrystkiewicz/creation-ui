import { Logo } from '@components/logo/logo'
import { Version } from '@components/version'
import config from '@root/config'

const Footer = () => (
  <footer className="flex py-3 w-full items-center justify-center border-t absolute bottom-0">
    <a className="flex items-center justify-center gap-2 text-sm" href="/" rel="noopener noreferrer">
      <Logo size="sm" /> {config.createdBy} &copy; {new Date().getFullYear()}
    </a>
    <Version />
  </footer>
)

export default Footer