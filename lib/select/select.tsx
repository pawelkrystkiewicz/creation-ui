import {
  DropdownChevron,
  ErrorText,
  SelectOption,
  useId,
  useTheme,
  passThrough,
} from '@cui/core'
import '@cui/core/styles/index.scss'
import { Listbox, Transition } from '@headlessui/react'

import clsx from 'clsx'
import { Fragment } from 'react'
import { SelectProps } from './select.types'

const Select = (props: SelectProps) => {
  const { defaultSize, zIndex } = useTheme()
  const {
    selectedOptionFormatter = passThrough,
    optionComponent = SelectOption,
    helperText,
    error,
    size = defaultSize,
  } = props

  const componentId = useId(props.id)

  const Option = optionComponent

  return (
    <div
      className={clsx('form-element--wrapper', `text-size--${size}`)}
      id={componentId}
    >
      <Listbox
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        multiple={props.multiple}
      >
        {({ open }) => (
          <div className='dropdown--wrapper--input'>
            {props.label && (
              <Listbox.Label
                className={clsx(
                  'form-element--label',
                  `form-element--label-${size}`
                )}
              >
                {props.label}
              </Listbox.Label>
            )}
            <Listbox.Button
              className={clsx(
                'form-element--input',
                `form-element--input--${size}`,
                'select--input',
                'peer'
              )}
            >
              <span className='select--value'>{props.value}&nbsp;</span>
              <span className='dropdown--button'>
                <DropdownChevron open={open} />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options
                className={clsx('dropdown--list', zIndex.dropdowns)}
              >
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
      <ErrorText error={error} />
    </div>
  )
}

Select.defaultProps = {
  placeholder: 'Select',
  selectedOptionFormatter: passThrough,
}

export default Select
