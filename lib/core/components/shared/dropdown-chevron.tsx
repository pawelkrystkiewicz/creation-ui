import { Icon } from '@cui/core'
import clsx from 'clsx'
import '@cui/core/src/styles/index.scss'

interface DropdownChevronProps {
  open?: boolean
}

const DropdownChevron = ({ open }: DropdownChevronProps) => (
  <Icon
    icon='expand_more'
    className={clsx('dropdown--chevron', open && 'dropdown--chevron-open')}
    aria-hidden='true'
  />
)

export default DropdownChevron
