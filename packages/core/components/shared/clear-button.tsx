import { Icon } from '..'
import clsx from 'clsx'

interface ClearButtonProps {
  onClick?: () => void
}

const ClearButton = ({ onClick }: ClearButtonProps) => (
  <Icon
    icon='close'
    onClick={onClick}
    className={clsx('clear-button')}
    aria-hidden='true'
  />
)

export default ClearButton
