import { settings } from '@root/lib/components/settings'
import DropdownChevron from '@root/lib/components/shared/dropdown-chevron'
import SelectOption from '@root/lib/components/shared/option'
import { Listbox, Transition } from '@headlessui/react'
import { useId } from '@root/lib/hooks/use-id'
import { Fragment } from 'react'
import { selector } from './select.classes'

import { SelectProps } from './select.types'

const emptyValue = { id: 0, value: '' }

const Select = (props: SelectProps) => {
  const {
    selectedOptionFormatter = settings.f.defaultOptionFormatter,
    optionComponent = SelectOption,
    helperText,
    error,
  } = props

  const classes = selector(props)
  const componentId = useId(props.id)

  const Option = optionComponent

  return (
    <div className={classes('wrapper')} id={componentId}>
      <Listbox
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        multiple={props.multiple}
      >
        {({ open }) => (
          <div className='relative mt-1'>
            {props.label && (
              <Listbox.Label className={classes('label')}>
                {props.label}
              </Listbox.Label>
            )}
            <Listbox.Button className={classes('button')}>
              <span className='block truncate'>{props.value}</span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                <DropdownChevron open={open} />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className={classes('options')}>
                {props.options?.map(option => (
                  <Listbox.Option key={option.id} value={option}>
                    {({ selected, active, disabled }) => (
                      // @ts-ignore
                      <Option
                        option={option}
                        selected={selected}
                        active={active}
                        disabled={disabled}
                        multiple={props.multiple}
                      />
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
      {helperText && <div className={classes('helperText')}>{helperText}</div>}
      <span className={classes('error')}>
        {error ?? settings.defaultTexts.invalidInput ?? ''}
      </span>
    </div>
  )
}

Select.defaultProps = {
  size: 'md',
  placeholder: 'Select',
  selectedOptionFormatter: settings.f.defaultOptionFormatter,
}

export default Select
