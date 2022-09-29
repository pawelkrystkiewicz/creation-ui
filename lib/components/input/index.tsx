import { settings } from '@root/lib/components/settings'
import { useTheme } from '@root/lib/context/theme'
import { useId } from '@root/lib/hooks/use-id'
import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import '../index.scss'
import Loader from '../loader'
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
          className={clsx('peer', 'form-element--input', className)}
          type={type}
          {...rest}
        />
        {loading && <Loader className='form-element--loader' />}
        <span className={'form-element--error'}>
          {error ?? settings.defaultTexts.invalidInput ?? ''}
        </span>
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
