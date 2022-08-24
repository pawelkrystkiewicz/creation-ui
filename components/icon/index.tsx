import clsx from 'clsx'
import { MaterialIcon } from './icon.type'

interface IconProps {
  /**
   * Icon name from Material Icons collection
   */
  icon: MaterialIcon
  /**
   * Additional class names
   */
  className?: string
}

const Icon = ({ icon, className }: IconProps) => <div className={clsx('material-icons', className)}>{icon}</div>

export default Icon
