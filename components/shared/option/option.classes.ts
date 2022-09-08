import { disabledStateClasses, readOnlyStateClasses } from '@components/shared-classes'
import { classesSelector } from '@root/utils/classes-selector'

export const classes = {
  option: {
    base: [
      'block',
      'truncate',
      'font-normal',
      'relative',
      'cursor-pointer',
      'select-none',
      'text-gray-900',
      'group',
      'flex',
      'w-full',
      'items-center',
      'rounded-md',
      'px-2',
      'py-0.5',
      'mb-1',
    ],

    selected: ['bg-blue-100', 'font-medium'],
    readOnly: readOnlyStateClasses,
    active: ['bg-blue-500', '!text-white'],
    disabled: disabledStateClasses,
  },
  multiple: {
    base: ['absolute', 'inset-y-0', 'left-0', 'flex', 'items-center', 'pl-3', '!text-blue-400'],
    active: ['!text-white'],
  },
}
export const selector = classesSelector(classes)
