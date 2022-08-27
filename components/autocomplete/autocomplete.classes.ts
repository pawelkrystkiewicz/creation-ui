import { settings } from '@components/settings'
import { baseInputClasses, disabledStateClasses, readOnlyStateClasses, sizes } from '@components/shared-classes'
import { classesSelector } from '@root/utils/classes-selector'

export const classes = {
  wrapper: {
    base: [...baseInputClasses, 'max-w-fit', 'w-auto'],
    fullWidth: ['w-full'],
    required: [],
    readOnly: readOnlyStateClasses,
    disabled: disabledStateClasses,
    size: {
      sm: ['h-10'],
      md: ['h-14'],
      lg: ['h-16'],
    },
  },
  option: {
    base: ['relative', 'cursor-pointer', 'select-none', 'py-2', 'px-4', 'text-gray-900'],
    fullWidth: [],
    required: [],
    readOnly: readOnlyStateClasses,
    disabled: disabledStateClasses,
    size: sizes,
    selected: ['bg-blue-100'],
    active: ['bg-blue-500', '!text-white'],
  },
  options: {
    base: [
      settings.zIndex.base,
      'absolute',
      'mt-1',
      'max-h-60',
      'w-full',
      'overflow-auto',
      'rounded-md',
      'bg-white',
      'py-1',
      'text-base',
      'shadow-lg',
      'ring-1',
      'ring-black',
      'ring-opacity-5',
      'focus:outline-none',
      'sm:text-sm',
    ],
    required: [],
    readOnly: readOnlyStateClasses,
    disabled: disabledStateClasses,
    size: sizes,
  },
  label: {
    base: ['flex', 'items-center'],
    required: ["after:content-['*']", 'after:ml-0.5', 'after:text-red-500'],
    readOnly: readOnlyStateClasses,
    disabled: disabledStateClasses,
    size: sizes,
  },
  helperText: {
    base: ['text-gray-500', 'mt-1'],
    required: [],
    readOnly: readOnlyStateClasses,
    disabled: disabledStateClasses,
    size: sizes,
  },
  error: {
    base: ['mt-2', 'invisible', 'peer-invalid:visible', 'text-red-600'],
    required: [],
    readOnly: readOnlyStateClasses,
    disabled: disabledStateClasses,
  },
  input: {
    base: ['rounded-md'],
    fullWidth: ['w-full'],
    required: [],
    readOnly: readOnlyStateClasses,
    disabled: disabledStateClasses,
    size: sizes,
  },
}
export const selector = classesSelector(classes)
