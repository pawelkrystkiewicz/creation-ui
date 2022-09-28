import React from 'react'
import Icon from '@root/lib/components/icon'
import { settings } from '@root/lib/components/settings'
import DropdownChevron from '@root/lib/components/shared/dropdown-chevron'
import SelectOption from '@root/lib/components/shared/option'
import { Combobox, Transition } from '@headlessui/react'
import { useId } from '@root/lib/hooks/use-id'
import clsx from 'clsx'
import { flow, isEmpty } from 'lodash'
import { ChangeEvent, Fragment, useState } from 'react'
import { selector } from './autocomplete.classes'
import {
  AutocompleteOptionsType,
  AutocompleteProps,
} from './autocomplete.types'

const Autocomplete = (props: AutocompleteProps) => {
  const {
    loadingText = 'Loading...',
    emptyText = 'Data is empty',
    notFoundText = 'Nothing found',
    clearable = true,
    multiple,
    getLimitText = settings.f.getLimitTextDefault,
    optionComponent = SelectOption,
    selectedOptionFormatter = settings.f.defaultOptionFormatter,
    options,
    placeholder = 'Select option',
    id,
    label,
    helperText,
    error,
    ...rest
  } = props

  const [selected, setSelected] = useState<AutocompleteOptionsType>(null)
  const [query, setQuery] = useState<string>('')

  const filteredOptions =
    query === ''
      ? options
      : options?.filter(option =>
          option.value
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value)
  const resetSearch = (): void => setQuery('')
  const clearSelection: React.MouseEventHandler<HTMLDivElement> = e =>
    flow(setSelected, resetSearch)(null)
  const classes = selector(props)

  const isQuery = !isEmpty(query)
  const isSelected = !!selected
  const componentId = useId(id)
  const Option = optionComponent

  return (
    <div className={classes('wrapper')}>
      <label htmlFor={componentId} className={classes('label')}>
        {label}
      </label>
      <Combobox value={selected} onChange={setSelected} nullable>
        {({ open }) => (
          <div className='relative mt-1'>
            <div className=''>
              <Combobox.Input
                id={componentId}
                disabled={rest.disabled}
                placeholder={placeholder}
                displayValue={selectedOptionFormatter}
                onChange={onSearchChange}
                className={classes('input')}
              />
              {(isQuery || isSelected) && (
                <div
                  className='absolute inset-y-0 right-7 flex items-center pr-2 cursor-pointer'
                  onClick={clearSelection}
                >
                  <Icon
                    icon='close'
                    className={clsx(
                      'text-gray-400 ease-in-out duration-300 hover:text-gray-800 !text-base'
                    )}
                    aria-label={rest.clearText}
                    title={rest.clearText}
                  />
                </div>
              )}
              <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
                <DropdownChevron open={open} />
              </Combobox.Button>
            </div>
            {open && (
              <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={resetSearch}
              >
                <Combobox.Options static className={classes('options')}>
                  {!filteredOptions?.length ? (
                    <div className='relative cursor-default text-center select-none py-2 px-4 text-gray-700'>
                      {notFoundText}
                      {/* OR create not found option */}
                    </div>
                  ) : (
                    filteredOptions?.map(option => (
                      <Combobox.Option
                        key={option.id}
                        // className={({ selected, active }) => selector({ ...props, selected, active })('option')}
                        value={option}
                      >
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
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            )}
          </div>
        )}
      </Combobox>
      {helperText && <div className={classes('helperText')}>{helperText}</div>}
      <span className={classes('error')}>
        {error ?? settings.defaultTexts.invalidInput ?? ''}
      </span>
    </div>
  )
}

Autocomplete.defaultProps = {
  size: 'md',
  placeholder: 'Select',
}

export default Autocomplete
