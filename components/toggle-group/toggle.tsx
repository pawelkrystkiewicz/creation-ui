import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import { ToggleGroupOption, ToggleGroupProps } from './toggle-group.types'
import { selector } from './toggle-group.classes'

const ToggleGroup = (props: ToggleGroupProps) => {
  const { size = 'md', options, className, title, ...rest } = props

  return (
    <div className={clsx(selector('wrapper', props))}>
      <RadioGroup className={clsx(selector('group', props), className)} {...rest}>
        <RadioGroup.Label className={clsx(selector('title', props))}>{title}</RadioGroup.Label>
        <div className={clsx(selector('option', props))}>
          {options.map(({ label, value, disabled }: ToggleGroupOption) => (
            <RadioGroup.Option
              key={value}
              value={value}
              disabled={disabled}
              className={optionsProps => clsx(selector('options', { ...props, ...optionsProps }))}>
              <RadioGroup.Label as="span">{label}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}

export default ToggleGroup
