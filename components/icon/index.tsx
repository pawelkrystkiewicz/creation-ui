import clsx from 'clsx'
import { HTMLProps } from 'react'
import { MaterialIcon } from './icon.type'

interface IconProps extends Omit<HTMLProps<HTMLDivElement>, 'className'> {
  /**
   * Icon name from Material Icons collection
   */
  icon: MaterialIcon
  /**
   * Additional class names
   */
  className?: string
}

const Icon = ({ icon, className }: IconProps) => (
  <div className={clsx('material-icons', className)}>{icon}</div>
)

export default Icon
