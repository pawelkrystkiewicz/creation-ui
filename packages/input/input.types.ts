import React from 'react'
import { ElementSize, ElementVariants } from '@creation-ui/core'

export type InputProps = Omit<React.ComponentProps<'input'>, 'size'> & {
  /**
   * Is button loading?
   */
  loading?: boolean
  /**
   * What variant should button be ?
   */
  variant?: ElementVariants
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
   * Label
   */
  label?: React.ReactNode
  /**
   * Is button fullwidth?
   */
  fullWidth?: boolean
  /**
   * Helper text
   */
  helperText?: React.ReactNode
  /**
   * Text to be displayed when input is invalid
   */
  error?: React.ReactNode
}

export type HTMLInputType =
  | 'text'
  | 'password'
  | 'submit'
  | 'reset'
  | 'radio'
  | 'checkbox'
  | 'button'
  | 'file'
  | 'image'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'number'
  | 'url'
  | 'week'
  | 'search'
  | 'tel'
