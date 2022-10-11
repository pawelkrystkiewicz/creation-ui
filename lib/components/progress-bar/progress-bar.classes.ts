import { classesSelector } from '@root/utils/classes-selector'

const classes = {
  wrapper: {
    base: ['text-xs w-full', 'bg-gray-200', 'rounded-full', 'dark:bg-gray-700'],
    required: [],
    readOnly: [],
    disabled: [],
    size: {
      sm: [],
      md: [],
      lg: [],
    },
  },
  bar: {
    base: [
      'bg-primary-600',
      'text-primary-100',
      'text-center',
      'leading-none',
      'rounded-full',
    ],
    required: [],
    readOnly: [],
    disabled: [],
    size: {
      sm: ['p-0.5'],
      md: ['p-1'],
      lg: ['p-2'],
    },
  },
}

export const selector = classesSelector(classes)
