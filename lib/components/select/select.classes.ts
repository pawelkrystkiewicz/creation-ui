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
    base: ['min-w-fit'],
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

  options: dropdownListClasses,
  label: {
    base: ['flex', 'items-center'],
    required: ["after:content-['*']", 'after:ml-0.5', 'after:text-error-500'],
    readOnly: readOnlyStateClasses,
    disabled: disabledStateClasses,
    size: {
      sm: [...sizes.sm, 'mb-0'],
      md: [...sizes.md, 'mb-0.5'],
      lg: [...sizes.lg, 'mb-1'],
    },
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
  button: {
    base: [
      'relative',
      'cursor-pointer',
      'py-2',
      'pl-3',
      'pr-10',
      ...baseInputClasses,
    ],
    fullWidth: ['w-full'],
    required: [],
    readOnly: readOnlyStateClasses,
    disabled: disabledStateClasses,
    size: {
      sm: [...sizes.sm, 'w-24'],
      md: [...sizes.md, 'w-24'],
      lg: [...sizes.lg, 'w-24'],
    },
  },
}
export const selector = classesSelector(classes)
