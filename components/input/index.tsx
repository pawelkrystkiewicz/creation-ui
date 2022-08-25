import { settings } from '@components/settings'
import { disabledStateClasses } from '@components/shared-classes'
import { ElementSize } from '@components/types'
import { useId } from '@root/hooks/use-id'
import clsx from 'clsx'
import React, { ForwardedRef, forwardRef } from 'react'
import { InputProps } from './input.types'

const staticClassNames = [
  'block',
  'peer',
  'border-gray-300',
  'rounded-md',
  'shadow-sm',
  'focus:ring-blue-500',
  'focus:border-blue-500',
]

const sizes: Record<ElementSize, string> = {
  sm: 'text-sm sm:text-xs',
  md: 'text-md sm:text-sm',
  lg: 'text-base sm:text-md',
}

const readOnlyClass = ['text-gray-700', 'bg-gray-100']
const fullWidthClass = ['w-full']
const requiredClass = ["after:content-['*']", 'after:ml-0.5', 'after:text-red-500']

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      loading,
      fullWidth,
      helperText,
      error,
      label,
      variant = 'contained',
      iconLeft,
      iconRight,
      size = 'md',
      type = 'text',
      className,
      id,
      ...props
    },
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const componentId = useId(id)

    return (
      <div className="mt-6">
        <label
          htmlFor={componentId}
          className={clsx(sizes[size], 'block font-medium text-gray-700', props.required && requiredClass)}>
          {label}
        </label>
        <div className="mt-1">
          <input
            ref={ref}
            id={componentId}
            className={clsx(
              staticClassNames,
              disabledStateClasses,
              sizes[size],
              fullWidth && fullWidthClass,
              className,
              props.readOnly && readOnlyClass,
            )}
            {...props}
            type={type}
          />
        </div>
        {helperText && <div className={clsx('text-gray-500 mt-1', sizes[size])}>{helperText}</div>}

        <span className={clsx('mt-2 invisible peer-invalid:visible text-red-600', sizes[size])}>
          {error ?? settings.defaultTexts.invalidInput ?? ''}'
        </span>
      </div>
    )
  },
)

Input.displayName = 'Input'

export default Input
