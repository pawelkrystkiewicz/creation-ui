import { settings } from '@components/settings'
import clsx from 'clsx'
import { ButtonGroupProps } from './button.types'

// prettier-ignore
const commonStaticClasses: string[] = [
  'inline-flex',
  'button-group'
]

const ButtonGroup = ({ color = settings.color, children, className, ...props }: ButtonGroupProps) => {
  return (
    <div {...props} className={clsx(commonStaticClasses, className)}>
      {children}
    </div>
  )
}

export default ButtonGroup
