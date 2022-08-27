import { useId } from '@root/hooks/use-id'
import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import { selector } from './radio.classes'
import { RadioProps } from './radio.types'

const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref: ForwardedRef<HTMLInputElement>) => {
  const { helperText, error, label, size = 'md', className, id, ...rest } = props
  const componentId = useId(id)
  const styles = selector(props)
  return (
    <div className={styles('wrapper')}>
      <input ref={ref} className={styles('input')} type="radio" name={componentId} id={componentId} {...rest} />
      {label && (
        <label className="inline-block text-gray-800" htmlFor={componentId}>
          {label}
        </label>
      )}
    </div>
  )
})

Radio.displayName = 'Radio'

export default Radio
