import { Loader, useId, useTheme } from '@cui/core'
import clsx from 'clsx'
import React from 'react'
import './button.scss'
import { ButtonProps } from './button.types'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, loading, iconLeft, iconRight, className, id, ...props },
    ref
  ) => {
    const componentId = useId(id)
    const theme = useTheme()

    // get the default values from theme
    const {
      rounded = theme.defaultRoundness,
      size = theme.defaultSize,
      variant = theme.defaultVariant,
      color = 'primary',
    } = props

    const isContained = variant === 'contained'

    return (
      <button
        id={componentId}
        ref={ref}
        disabled={loading}
        {...props}
        className={clsx(
          'button',
          'button-base',
          `button-variant--${variant}--${color}`,
          rounded === 'circle'
            ? `button-circle--${size} rounded-full`
            : `button-size--${size}`,
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
