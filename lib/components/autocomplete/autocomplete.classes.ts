import {
  baseInputClasses,
  disabledStateClasses,
  dropdownListClasses,
  readOnlyStateClasses,
  sizes,
} from '@root/lib/components/shared-classes'
import { classesSelector } from '@root/utils/classes-selector'

export const classes = {
  wrapper: {
    base: ['w-full'],
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
    base: [
      'relative',
      'cursor-pointer',
      'select-none',
      'py-2',
      'px-4',
      'text-gray-900',
    ],
    fullWidth: [],
    required: [],
    readOnly: readOnlyStateClasses,
    disabled: disabledStateClasses,
    size: sizes,
    selected: ['bg-primary-100'],
    active: ['bg-primary-500', '!text-white'],
  },
  options: dropdownListClasses,
  label: {
    base: ['flex', 'items-center'],
    required: ["after:content-['*']", 'after:ml-0.5', 'after:text-error-500'],
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
    base: ['mt-2', 'invisible', 'peer-invalid:visible', 'text-error-600'],
    required: [],
    readOnly: readOnlyStateClasses,
    disabled: disabledStateClasses,
  },
  input: {
    base: baseInputClasses,
    fullWidth: ['w-full'],
    required: [],
    readOnly: readOnlyStateClasses,
    disabled: disabledStateClasses,
    size: sizes,
  },
}
export const selector = classesSelector(classes)
