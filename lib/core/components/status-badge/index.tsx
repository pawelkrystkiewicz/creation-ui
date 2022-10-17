import { useTheme } from '@root/lib/context/theme'
import clsx from 'clsx'
import { StatusBadgeProps } from './status-badge.types'
import '../index.scss'

const StatusBadge = (props: StatusBadgeProps) => {
  const { defaultSize } = useTheme()
  const { label, status, size = defaultSize } = props

  return (
    <span
      className={clsx(
        'status-badge',
        `text-size--${size}`,
        status && `status-badge--${status}`
      )}
    >
      {label ?? status}
    </span>
  )
}

export default StatusBadge
