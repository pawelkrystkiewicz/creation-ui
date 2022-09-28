import Icon from '@root/lib/components/icon'
import clsx from 'clsx'

interface DropdownChevronProps {
  open?: boolean
}

const DropdownChevron = ({ open }: DropdownChevronProps) => (
  <Icon
    icon='expand_more'
    className={clsx(
      'text-gray-400 ease-in-out duration-300 hover:text-gray-800',
      open && '-rotate-180'
    )}
    aria-hidden='true'
  />
)

export default DropdownChevron
