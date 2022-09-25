import Loader from '@components/loader'
import { settings } from '@components/settings'
import { ElementSize, ElementVariants } from '@components/types'
import { useId } from '@root/hooks/use-id'
import clsx from 'clsx'
import React from 'react'
import { ButtonProps, ButtonShape } from './button.types'
import './button.css'

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
  circle: 'circle',
}

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
    ref
  ) => {
    const variants: Record<ElementVariants, string> = {
      contained: 'button-variant--contained',
      outlined: 'button-variant--outlined',
      text: 'button-variant--text',
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
        className={clsx(
          'button-base',
          variants[variant],
          roundness[rounded],
          sizeCollection[size],
          className
        )}
      >
        <>{loading ? <Loader size={size} white={isContained} /> : null}</>
        <>{iconLeft}</>
        <>{children}</>
        <>{iconRight}</>
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
