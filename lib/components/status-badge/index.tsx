import { StatusBadgeProps } from './status-badge.types'
import { selector } from './status-badge.classes'
import clsx from 'clsx'

const StatusBadge = (props: StatusBadgeProps) => {
  const classes = selector(props)
  console.log(classes('wrapper'))
  return <span className={classes('wrapper')}>{props.label}</span>
}

StatusBadge.defaultProps = {
  size: 'sm',
  status: 'active',
}

export default StatusBadge
