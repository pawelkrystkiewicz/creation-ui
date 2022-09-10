import React from 'react'
import { ElementSize } from '@components/types'

export const AVATAR_VARIANTS = ['circle', 'rounded', 'square'] as const

export type AvatarVariant = typeof AVATAR_VARIANTS[number]

export type Badge =
  | {
      type: 'dot'
      count: null
    }
  | {
      type: 'count'
      count: number
    }

type AvatarProps = Omit<React.ComponentProps<'img'>, 'size'> & {
  /**
   * What variant should button be ?
   */
  variant?: AvatarVariant
  /**
   * How large should the button be?
   */
  size?: ElementSize
  /**
   * Class name
   */
  className?: string
  /**
   * Notification badge
   */
  badge?: Badge
}
export default AvatarProps
