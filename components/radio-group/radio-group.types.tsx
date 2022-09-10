import { ElementOrientation, ElementSize } from '@components/types'
import React from 'react'

export type RadioGroupProps = Omit<React.ComponentProps<'div'>, 'size'> & {
  /**
   * How large should the button be?
   */
  size?: ElementSize
  /**
   * How large should the button be?
   */
  orientation?: ElementOrientation
  /**
   * Label
   */
  label?: React.ReactNode
  /**
   * Helper text #TODO
   */
  helperText?: React.ReactNode
  /**
   * Text to be displayed when input is invalid #TODO
   */
  error?: React.ReactNode
}
