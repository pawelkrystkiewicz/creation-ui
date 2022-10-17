import { AutocompleteOptionsType } from '@root/lib/components/autocomplete/autocomplete.types'
import Icon from '@root/lib/components/icon'
import { SelectOptionsType } from '@root/lib/components/select/select.types'
import clsx from 'clsx'
import '../../index.scss'

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
    active,
    option: { value },
    multiple,
  } = props

  return (
    <>
      <span
        className={clsx(
          'dropdown--option',
          selected && 'dropdown--option-selected',
          active && 'dropdown--option-active',
          'group'
        )}
      >
        {value}
      </span>
      {selected ? (
        <span
          className={clsx(
            multiple && 'dropdown--option--multiple',
            multiple && active && 'dropdown--option--multiple-active'
          )}
        >
          {multiple && (
            <Icon icon='check' className='h-5 w-5' aria-hidden='true' />
          )}
        </span>
      ) : null}
    </>
  )
}

export default SelectOption
