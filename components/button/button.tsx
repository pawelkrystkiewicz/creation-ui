import { Loader } from '@components/loader'
import { settings } from '@components/settings'
import { ElementSize } from '@components/types'
import { useId } from '@src/hooks/use-id'
import cx from 'classnames'
import React from 'react'
import { ButtonProps, ButtonShape, ButtonVariants, ColorPower } from './types'

const sizes: Record<ElementSize, string> = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-1 text-base',
  lg: 'px-6 py-2',
}
const sizesCircle: Record<ElementSize, string> = {
  sm: 'p-2',
  md: 'p-3',
  lg: 'p-5',
}

const roundness: Record<ButtonShape, string> = {
  default: settings.roundness.default,
  rounded: settings.roundness.max,
  circle: 'rounded-full',
}

const commonStaticClasses: string[] = [
  'flex',
  'gap-2',
  'flex-nowrap',
  'items-center',
  'font-medium',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-offset-2',
  'focus:ring-blue-500',
  'transition',
  'duration-150',
  'ease-in-out',
  'disabled:opacity-50',
  'disabled:cursor-not-allowed',
  'disabled:pointer-events-none',
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
      color = settings.color,
      id,
      ...props
    },
    ref,
  ) => {
    const variants: Record<ButtonVariants, string> = {
      contained: cx(['text-white', 'bg-blue-600', 'hover:bg-blue-700', 'focus:bg-blue-700', 'active:bg-blue-800']),
      outlined: cx([`border`, `border-blue-600`, `text-blue-600`, `hover:bg-blue-50`, `active:bg-blue-100`]),
      text: cx([
        'bg-white',
        'text-blue-600',
        'hover:bg-blue-50',
        'hover:text-blue-600',
        'focus:text-blue-600',
        'active:bg-blue-100',
      ]),
    }
    const isCircle = rounded === 'circle'
    const isContained = variant === 'contained'
    const sizeCollection = isCircle ? sizesCircle : sizes

    const componentId = useId(id)

    return (
      <button
        id={componentId}
        ref={ref}
        disabled={loading}
        {...props}
        className={cx(commonStaticClasses, variants[variant], roundness[rounded], sizeCollection[size], className)}>
        <>{loading ? <Loader size={size} white={isContained} /> : iconLeft}</>
        <>{children}</>
        <>{iconRight}</>
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
