import { settings } from './settings'

export const disabledStateClasses = [
  'disabled:opacity-50',
  'disabled:cursor-not-allowed',
  'disabled:pointer-events-none',
  'select-none',
]

export const readOnlyStateClasses = ['select-none']

export const sizes = {
  sm: ['text-sm', 'sm:text-xs'],
  md: ['text-md', 'sm:text-sm'],
  lg: ['text-base', 'sm:text-md'],
}

export const baseInputClasses = [
  'block',
  'peer',
  'border',
  'border-gray-300',
  'rounded-md',
  'focus:ring-blue-500',
  'focus:border-blue-500',
  'w-full',
  'text-left',
]

export const dropdownListClasses = {
  base: [
    settings.zIndex.dropdowns,
    'absolute',
    'mt-1',
    'max-h-60',
    'min-w-fit',
    'p-1',
    'rounded-md',
    'bg-white',
    'text-base',
    'shadow-lg',
    'ring-1',
    'ring-black',
    'ring-opacity-5',
    'focus:outline-none',
    'w-full',
  ],
  required: [],
  readOnly: readOnlyStateClasses,
  disabled: disabledStateClasses,
  size: sizes,
}
