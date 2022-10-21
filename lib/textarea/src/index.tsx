import ErrorText from '@cui/core/components/shared/error-text'
import { settings } from '@cui/core/components/settings'
import { disabledStateClasses } from '@cui/core/components/shared-classes'
import { useTheme } from '@cui/core/theme'
import  useId  from '@cui/core/hooks/use-id'
import { ElementSize } from '@cui/core/types'
import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import '@cui/core/styles/index.scss'
import Loader from '../loader'
import { TextAreaProps } from './textarea.types'

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const { defaultSize } = useTheme()
    const { error, label, size = defaultSize, className, id, loading } = props
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
        <div className='mt-1'>
          <textarea
            ref={ref}
            id={componentId}
            className={clsx('peer', 'resize', 'form-element--input', className)}
            {...props}
          />
        </div>
        {loading && <Loader className='form-element--loader' />}
        <ErrorText error={error} />
      </div>
    )
  }
)

TextArea.displayName = 'Input'

export default TextArea
