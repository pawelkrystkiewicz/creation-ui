import { settings } from '@components/settings'
import cx from 'classnames'
import { ButtonGroupProps } from './button.types'

// prettier-ignore
const commonStaticClasses: string[] = [
  'inline-flex',
  'button-group'
]

const ButtonGroup = ({ color = settings.color, children, className, ...props }: ButtonGroupProps) => {
  return (
    <div {...props} className={cx(commonStaticClasses, className)}>
      {children}
    </div>
  )
}

export default ButtonGroup
