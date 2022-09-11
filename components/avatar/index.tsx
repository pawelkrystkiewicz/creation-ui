import { ElementPlacement } from '@components/types'
import { forwardRef } from 'react'
import { selector } from './avatar.classes'
import AvatarProps from './avatar.types'

const defaultPlacement: ElementPlacement = {
  horizontal: 'left',
  vertical: 'bottom',
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const classes = selector(props)

  return (
    <div ref={ref} className={classes('wrapper')}>
      <img {...props} className={classes('img')} />
      {props.badge && (
        <>
          <div className={classes('notifications')}>
            <span>{props.badge?.count}</span>
            <span
              className={selector({
                ...props,
                badge: { ...props.badge, placement: props.badge.placement ?? defaultPlacement },
              })('badgePulse')}
            />
          </div>
        </>
      )}
    </div>
  )
})

Avatar.defaultProps = {
  size: 'md',
  variant: 'circle',
}

export default Avatar
