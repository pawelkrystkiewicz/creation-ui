import { ElementSize } from '@components/types'
import React from 'react'

export type RadioProps = Omit<React.ComponentProps<'input'>, 'size'> & {
  /**
   * How large should the button be?
   */
  size?: ElementSize
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
  invalidInputText?: React.ReactNode
}
