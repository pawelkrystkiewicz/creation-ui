import clsx from 'clsx'
import { MaterialIcon } from './type'

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

const Icon = ({ icon, className }: IconProps) => <span className={clsx('material-icons', className)}>{icon}</span>

export default Icon
