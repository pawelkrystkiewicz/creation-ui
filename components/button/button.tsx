import { Loader } from '@components/loader'
import { settings } from '@components/settings'
import { ElementSize } from '@components/types'
import cx from 'classnames'
import React from 'react'
import { ButtonProps, ButtonShape, ButtonVariants, ColorPower } from './types'

const sizes: Record<ElementSize, string> = {
  sm: 'px-2 py-0.5 text-sm',
  md: 'px-4 py-1 text-base',
  lg: 'px-6 py-2',
}
const sizesCircle: Record<ElementSize, string> = {
  sm: 'p-2',
  md: 'p-3',
  lg: 'p-5',
}

const colorPower: Record<ButtonVariants, ColorPower> = {
  contained: { default: 600, hover: 700, focus: 700, active: 800 },
  outlined: { default: 600, hover: 500, focus: 700, active: 500 },
  text: { default: 600, hover: 100, focus: 600, active: 200 },
}

const roundness: Record<ButtonShape, string> = {
  default: settings.roundness.default,
  rounded: settings.roundness.max,
  circle: 'rounded-full',
}

const commonStaticClasses: string[] = [
  'flex',
  'flex-nowrap',
  'font-medium',
  'focus:ring-4',
  'transition',
  'duration-150',
  'ease-in-out',
]

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      loading,
      rounded = 'default',
      variant = 'contained',
      size = 'md',
      iconLeft,
      iconRight,
      className,
      color = settings.color ?? 'blue',
      ...props
    },
    ref,
  ) => {
    const variants: Record<ButtonVariants, string> = {
      contained: cx([
        `text-white`,
        `bg-${color}-${colorPower[variant].default}`,
        `hover:bg-${color}-${colorPower[variant].hover}`,
        `focus:bg-${color}-${colorPower[variant].focus}`,
        `active:bg-${color}-${colorPower[variant].active}`,
      ]),
      outlined: cx([
        `border`,
        // `hover:bg-opacity-5`,
        `border-${color}-${colorPower[variant].default} `,
        `text-${color}-${colorPower[variant].default}`,
        `hover:bg-${color}-${colorPower[variant].hover}`,
        `active:bg-${color}-${colorPower[variant].active}`,
      ]),
      text: cx([
        'bg-white',
        `text-gray-${colorPower[variant].default}`,
        `hover:bg-${color}-100`,
        `hover:text-${color}-${colorPower[variant].hover}`,
        `focus:text-${color}-${colorPower[variant].focus}`,
        `active:bg-${color}-${colorPower[variant].active}`,
      ]),
    }
    const isCircle = rounded === 'circle'
    const isContained = variant === 'contained'
    const sizeCollection = isCircle ? sizesCircle : sizes

    return (
      <button
        ref={ref}
        {...props}
        className={cx(commonStaticClasses, variants[variant], roundness[rounded], sizeCollection[size], className)}>
        {loading ? <Loader size={size} color={color} white={isContained} /> : iconLeft}
        {children}
        {iconRight}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
