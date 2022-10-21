import ErrorText from '@cui/core/components/shared/error-text'
import { useTheme } from '@cui/core/theme'
import  useId  from '@cui/core/hooks/use-id'
import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import '@cui/core/styles/index.scss'
import { RadioProps } from './radio.types'

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (props, ref: ForwardedRef<HTMLInputElement>) => {
    const { defaultSize } = useTheme()
    const {
      helperText,
      error,
      label,
      size = defaultSize,
      className,
      id,
      ...rest
    } = props
    const componentId = useId(id)

    return (
      <div className={clsx(`text-size--${size}`, 'form-element--wrapper-row')}>
        <input
          ref={ref}
          className={clsx(
            'peer',
            'form-element--radio',
            `form-element--radio--${size}`,
            className
          )}
          type='radio'
          name={componentId}
          id={componentId}
          {...rest}
        />
        <label
          htmlFor={componentId}
          className={clsx(
            'form-element--label',
            'form-element--label--checkbox'
          )}
        >
          {label}
        </label>
        <ErrorText error={error} />
      </div>
    )
  }
)

Radio.displayName = 'Radio'

export default Radio
