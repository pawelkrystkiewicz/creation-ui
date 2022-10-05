import ErrorText from '@components/shared/error'
import { settings } from '@root/lib/components/settings'
import { disabledStateClasses } from '@root/lib/components/shared-classes'
import { useTheme } from '@root/lib/context/theme'
import { useId } from '@root/lib/hooks/use-id'
import { ElementSize } from '../../types'
import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import '../index.scss'
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
