import React from 'react'
import { ElementColor, ElementSize } from '../types'
export type ButtonShape = 'default' | 'rounded' | 'circle'
export type ButtonVariants = 'contained' | 'outlined' | 'text'

export type ButtonProps = React.ComponentProps<'button'> & {
  /**
   * Is button loading?
   */
  loading?: boolean
  /**
   * What shape button should be
   */
  rounded?: ButtonShape
  /**
   * What variant should button be ?
   */
  variant?: ButtonVariants
  /**
   * How large should the button be?
   */
  size?: ElementSize
  /**
   * Icon to be displayed on the left side of the button
   */
  iconLeft?: React.ReactNode
  /**
   * Icon to be displayed on the right side of the button
   */
  iconRight?: React.ReactNode
  /**
   * Color of the button
   */
  color?: ElementColor
}

export type ColorPower = {
  default: number | string
  hover: number | string
  focus: number | string
  active: number | string
}
