import clsx from 'clsx'
import { MaterialIcon } from './type'

interface IconProps {
  icon: MaterialIcon
  className?: string
}

const Icon = ({ icon, className }: IconProps) => <span className={clsx('material-icons', className)}>{icon}</span>

export default Icon
