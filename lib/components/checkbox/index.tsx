import { ElementSize } from '@root/lib/types'
import { useId } from '@root/lib/hooks/use-id'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

interface CheckboxProps extends Omit<React.ComponentProps<'input'>, 'size'> {
  /**
   * The label for the checkbox.
   */
  label?: string
  /**
   * The size of the checkbox.
   */
  size?: ElementSize
  /**
   * Indeterminate state of checkbox, overwrites checked
   */
  indeterminate?: boolean
  /**
   * Disabled state of checkbox
   */
  disabled?: boolean
}
const sizeMap: Record<ElementSize, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
}

const staticClassNames = [
  'rounded ',
  'border-gray-300',
  'text-blue-600',
  'focus:ring-blue-500',
]
const stateDisabled = [
  'opacity-50',
  'pointer-events-none',
  'cursor-not-allowed',
]

const Checkbox = ({
  size = 'sm',
  id,
  label,
  disabled,
  className,
  indeterminate,
  checked,
  onChange,
  ...props
}: CheckboxProps) => {
  const [isChecked, setChecked] = useState(checked)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    onChange?.(e)
  }

  const componentId = useId(id)
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (indeterminate && ref.current) {
      ;(ref.current as any).indeterminate = true
    }
  }, [indeterminate])

  return (
    <>
      <div className='mt-6 flex space-x-2 w-full'>
        <div className='flex items-center h-5'>
          <input
            ref={ref}
            id={componentId}
            disabled={disabled}
            type='checkbox'
            onChange={handleChange}
            className={clsx(
              sizeMap[size],
              staticClassNames,
              disabled && stateDisabled,
              className
            )}
            checked={isChecked}
            {...props}
          />
        </div>
        <label htmlFor={componentId} className='text-sm select-none'>
          {label}
        </label>
      </div>
    </>
  )
}

export default Checkbox
