import { AutocompleteOptionsType } from '@root/lib/components/autocomplete/autocomplete.types'
import Icon from '@root/lib/components/icon'
import { SelectOptionsType } from '@root/lib/components/select/select.types'
import React from 'react'
import { selector } from './option.classes'

interface SelectOptionProps {
  option: SelectOptionsType | AutocompleteOptionsType
  selected?: boolean
  disabled?: boolean
  active?: boolean
  multiple?: boolean
}

const SelectOption = (props: SelectOptionProps) => {
  const {
    selected,
    option: { value },
    multiple,
  } = props
  const classes = selector(props)

  return (
    <>
      <span className={classes('option')}>{value}</span>
      {selected ? (
        <span className={classes('multiple')}>
          {multiple && (
            <Icon icon='check' className='h-5 w-5' aria-hidden='true' />
          )}
        </span>
      ) : null}
    </>
  )
}

export default SelectOption
