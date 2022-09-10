import { forwardRef } from 'react'
import { selector } from './avatar.classes'
import AvatarProps from './avatar.types'

const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const classes = selector(props)

  return (
    <div ref={ref}>
      <img {...props} className={classes('img')} />
      <span className={classes('notifications')}>{props.badge?.count}</span>
    </div>
  )
})

Avatar.defaultProps = {
  size: 'md',
  variant: 'circle',
}

export default Avatar
