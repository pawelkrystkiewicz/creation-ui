import clsx from 'clsx'
import { Icon, IconProps } from '..'

const ClearButton = ({ onClick, className, icon, ...props }: IconProps) => (
  <Icon
    icon='close'
    onClick={onClick}
    className={clsx('clear-button', className)}
    aria-hidden='true'
    {...props}
  />
)

export default ClearButton
