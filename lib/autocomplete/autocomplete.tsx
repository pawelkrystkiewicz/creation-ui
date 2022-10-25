import {
  AutocompleteOptionsType,
  DropdownChevron,
  Icon,
  SelectOption,
  useId,
  ErrorText,
  passThrough,
  useTheme,
} from '@creation-ui/core'
import '@creation-ui/core/styles/index.scss'
import { Combobox, Transition } from '@headlessui/react'
import clsx from 'clsx'
import flow from 'lodash/flow'
import isEmpty from 'lodash/isEmpty'
import React, { ChangeEvent, Fragment, useState } from 'react'
import { AutocompleteProps } from './autocomplete.types'

const Autocomplete = (props: AutocompleteProps) => {
  const { defaultSize, zIndex } = useTheme()
  const {
    loadingText = 'Loading...',
    emptyText = 'Data is empty',
    notFoundText = 'Nothing found',
    clearable = true,
    multiple,
    getLimitText = passThrough,
    optionComponent = SelectOption,
    selectedOptionFormatter = passThrough,
    options,
    placeholder = 'Select option',
    id,
    label,
    helperText,
    size = defaultSize,
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

  const isQuery = !isEmpty(query)
  const isSelected = !!selected
  const componentId = useId(id)
  const Option = optionComponent

  return (
    <div className={clsx('form-element--wrapper', `text-size--${size}`)}>
      <label
        htmlFor={componentId}
        className={clsx('form-element--label', `form-element--label-${size}`)}
      >
        {label}
      </label>
      <Combobox value={selected} onChange={setSelected} nullable>
        {({ open }) => (
          <div className='dropdown--wrapper--input'>
            <Combobox.Input
              id={componentId}
              disabled={rest.disabled}
              placeholder={placeholder}
              displayValue={selectedOptionFormatter}
              onChange={onSearchChange}
              className={clsx(
                'form-element--input',
                `form-element--input--${size}`,
                'peer relative'
              )}
            />
            <Combobox.Button className='dropdown--button'>
              <DropdownChevron open={open} />
            </Combobox.Button>
            <div className='clear-content--wrapper' onClick={clearSelection}>
              {(isQuery || isSelected) && (
                <Icon
                  icon='close'
                  className={clsx('clear-content--button')}
                  aria-label={rest.clearText}
                  title={rest.clearText}
                />
              )}
            </div>
            {open && (
              <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={resetSearch}
              >
                <Combobox.Options
                  static
                  className={clsx('dropdown--list', zIndex.dropdowns)}
                >
                  {!filteredOptions?.length ? (
                    <div className={'dropdown--list--not-found'}>
                      {notFoundText}
                      {/* OR create not found option */}
                    </div>
                  ) : (
                    filteredOptions?.map(option => (
                      <Combobox.Option key={option.id} value={option}>
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
      <ErrorText error={error} />
    </div>
  )
}

Autocomplete.defaultProps = {
  size: 'md',
  placeholder: 'Select',
}

export default Autocomplete
