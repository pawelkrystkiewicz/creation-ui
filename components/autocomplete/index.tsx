import { ChangeEvent, Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'
import { AutocompleteOptionsType, AutocompleteProps } from './autocomplete.types'
import { isEmpty, flow } from 'lodash'
import clsx from 'clsx'
import Icon from '@components/icon'
import { selector } from './autocomplete.classes'
import { useId } from '@root/hooks/use-id'
import { settings } from '@components/settings'

const getLimitTextDefault = (more: number) => `+${more}`
const defaultOptionFormatter = (option: AutocompleteOptionsType) => (option?.value ? `${option.value}` : '')

const Autocomplete = (props: AutocompleteProps) => {
  const {
    loadingText = 'Loading...',
    emptyText = 'Data is empty',
    notFoundText = 'Nothing found',
    clearable = true,
    multiple,
    getLimitText = getLimitTextDefault,
    optionComponent = defaultOptionFormatter,
    selectedOptionFormatter = defaultOptionFormatter,
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
          option.value.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, '')),
        )

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)
  const resetSearch = (): void => setQuery('')
  const clearSelection: React.MouseEventHandler<HTMLDivElement> = e => flow(setSelected, resetSearch)(null)
  const styles = selector(props)

  const isQuery = !isEmpty(query)
  const isSelected = !!selected
  const componentId = useId(id)

  return (
    <div className={styles('wrapper')}>
      <label htmlFor={componentId} className={styles('label')}>
        {label}
      </label>
      <Combobox value={selected} onChange={setSelected} nullable>
        {({ open }) => (
          <div className="relative mt-1">
            <div className="max-w-fit">
              <Combobox.Input
                id={componentId}
                disabled={rest.disabled}
                placeholder={placeholder}
                displayValue={selectedOptionFormatter}
                onChange={onSearchChange}
                className={styles('input')}
              />
              {(isQuery || isSelected) && (
                <div
                  className="absolute inset-y-0 right-7 flex items-center pr-2 cursor-pointer"
                  onClick={clearSelection}>
                  <Icon
                    icon="close"
                    className={clsx('text-gray-400 ease-in-out duration-300 hover:text-gray-800 !text-base')}
                    aria-label={rest.clearText}
                    title={rest.clearText}
                  />
                </div>
              )}
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <Icon
                  icon="expand_more"
                  className={clsx('text-gray-400 ease-in-out duration-300 hover:text-gray-800', open && '-rotate-180')}
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            {open && (
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={resetSearch}>
                <Combobox.Options static className={styles('options')}>
                  {!filteredOptions?.length ? (
                    <div className="relative cursor-default text-center select-none py-2 px-4 text-gray-700">
                      {notFoundText}
                      {/* OR create not found option */}
                    </div>
                  ) : (
                    filteredOptions?.map(person => (
                      <Combobox.Option
                        key={person.id}
                        className={({ selected, active }) => selector({ ...props, selected, active })('option')}
                        value={person}>
                        {({ selected, active }) => (
                          <div>
                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                              {person.value}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? '!text-white' : '!text-blue-500'
                                }`}>
                                {multiple && <CheckIcon className="h-5 w-5" aria-hidden="true" />}
                              </span>
                            ) : null}
                          </div>
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
      {helperText && <div className={styles('helperText')}>{helperText}</div>}
      <span className={styles('error')}>{error ?? settings.defaultTexts.invalidInput ?? ''}</span>
    </div>
  )
}

export default Autocomplete
