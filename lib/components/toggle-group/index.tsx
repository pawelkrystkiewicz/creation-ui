import { RadioGroup } from '@headlessui/react'
import { useTheme } from '@root/lib/context/theme'
import clsx from 'clsx'
import { ToggleGroupOption, ToggleGroupProps } from './toggle-group.types'
import './toggle-group.scss'

const ToggleGroup = (props: ToggleGroupProps) => {
  const { defaultSize } = useTheme()
  const { size = defaultSize, options, className, title, ...rest } = props

  return (
    <div
      className={clsx(
        'toggle-group',
        `form-element-spacing--${size}`,
        `size-${size}`,
        className
      )}
    >
      <RadioGroup className={clsx('toggle-group--group', className)} {...rest}>
        <RadioGroup.Label
          className={clsx(
            'toggle-group--title',
            `toggle-group--title_${size}`,
            props.required && 'toggle-group-title--required'
          )}
        >
          {title}
        </RadioGroup.Label>
        <div className={'toggle-group--options'}>
          {options.map(({ label, value, disabled }: ToggleGroupOption) => (
            <RadioGroup.Option
              key={value}
              value={value}
              disabled={disabled}
              className={({ active, checked, disabled }) =>
                clsx(
                  'toggle-group--option',
                  active && 'toggle-group--option_active',
                  checked && 'toggle-group--option_checked',
                  disabled && 'toggle-group--option_disabled'
                )
              }
            >
              <RadioGroup.Label as='span'>{label}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}

export default ToggleGroup
