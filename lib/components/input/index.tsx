import { settings } from '@root/lib/components/settings'
import { useId } from '@root/lib/hooks/use-id'
import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import { selector } from './input.classes'
import { InputProps } from './input.types'

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref: ForwardedRef<HTMLInputElement>) => {
    const {
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
      ...rest
    } = props
    const componentId = useId(id)
    const styles = selector(props)
    return (
      <div className='mt-6'>
        <label htmlFor={componentId} className={styles('label')}>
          {label}
        </label>
        <div className='mt-1'>
          <input
            ref={ref}
            id={componentId}
            className={clsx(styles('input'), className)}
            {...rest}
            type={type}
          />
        </div>
        {helperText && <div className={styles('helperText')}>{helperText}</div>}
        <span className={styles('error')}>
          {error ?? settings.defaultTexts.invalidInput ?? ''}
        </span>
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
