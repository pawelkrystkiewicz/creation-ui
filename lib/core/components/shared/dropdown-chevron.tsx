import Icon from '@root/lib/components/icon'
import clsx from 'clsx'
import '../index.scss'

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
