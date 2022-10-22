import { ErrorText, useTheme, useId, Loader } from '@cui/core'
import '@cui/core/src/styles/index.scss'
import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import { InputProps } from './input.types'

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref: ForwardedRef<HTMLInputElement>) => {
    const { defaultSize } = useTheme()
    const {
      loading,
      helperText,
      error,
      label,
      size = defaultSize,
      type = 'text',
      className,
      id,
      ...rest
    } = props
    const componentId = useId(id)

    return (
      <div className={clsx(`text-size--${size}`, 'form-element--wrapper')}>
        <label
          htmlFor={componentId}
          className={clsx(
            'form-element--label',
            props.required && 'form-element--required'
          )}
        >
          {label}
        </label>
        <input
          ref={ref}
          id={componentId}
          className={clsx(
            'peer',
            'form-element--input',
            `form-element--input--${size}`,
            className
          )}
          type={type}
          {...rest}
        />
        {loading && <Loader className='form-element--loader' />}
        <ErrorText error={error} />
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
