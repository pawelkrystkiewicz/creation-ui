import ErrorText from '@components/shared/error'
import { Listbox, Transition } from '@headlessui/react'
import { settings } from '@root/lib/components/settings'
import DropdownChevron from '@root/lib/components/shared/dropdown-chevron'
import SelectOption from '@root/lib/components/shared/option'
import { useTheme } from '@root/lib/context/theme'
import { useId } from '@root/lib/hooks/use-id'
import clsx from 'clsx'
import { Fragment } from 'react'
import '../index.scss'
import { SelectProps } from './select.types'

const emptyValue = { id: 0, value: '' }

const Select = (props: SelectProps) => {
  const { defaultSize, zIndex } = useTheme()
  const {
    selectedOptionFormatter = settings.f.defaultOptionFormatter,
    optionComponent = SelectOption,
    helperText,
    error,
    size = defaultSize,
  } = props
  console.log(props.value)

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
  selectedOptionFormatter: settings.f.defaultOptionFormatter,
}

export default Select
