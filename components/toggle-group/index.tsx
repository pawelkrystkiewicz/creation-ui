import { RadioGroup } from '@headlessui/react'
import { selector } from './toggle-group.classes'
import { ToggleGroupOption, ToggleGroupProps } from './toggle-group.types'

const ToggleGroup = (props: ToggleGroupProps) => {
  const { size = 'md', options, className, title, ...rest } = props
  const styles = selector(props)
  return (
    <div className={styles('wrapper')}>
      <RadioGroup className={(styles('group'), className)} {...rest}>
        <RadioGroup.Label className={styles('title')}>{title}</RadioGroup.Label>
        <div className={styles('option')}>
          {options.map(({ label, value, disabled }: ToggleGroupOption) => (
            <RadioGroup.Option
              key={value}
              value={value}
              disabled={disabled}
              className={optionsProps => selector({ ...props, ...optionsProps })('options')}>
              <RadioGroup.Label as="span">{label}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}

export default ToggleGroup
