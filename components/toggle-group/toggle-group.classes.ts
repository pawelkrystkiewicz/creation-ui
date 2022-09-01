import { classesSelector } from '@root/utils/classes-selector'

const classes = {
  wrapper: {
    base: ['bg-gray-50', 'w-fit', 'rounded', 'relative', 'border', 'border-gray-300', 'flex'],
    required: [],
    readOnly: ['select-none'],
    disabled: ['select-none'],
    size: {
      sm: ['text-sm', 'sm:text-xs', 'mt-4'],
      md: ['text-base', 'sm:text-sm', 'mt-5'],
      lg: ['text-lg', 'sm:text-base', 'mt-6'],
    },
  },
  group: {
    base: ['select-none'],
    required: [],
    readOnly: ['select-none'],
    disabled: ['select-none'],
    size: {
      sm: [],
      md: [],
      lg: [],
    },
  },
  option: {
    base: ['flex', 'flex-nowrap'],
    required: [],
    readOnly: ['select-none'],
    disabled: ['select-none'],
    size: {
      sm: [],
      md: [],
      lg: [],
    },
  },
  title: {
    base: ['absolute'],
    required: ["after:content-['*']", 'after:ml-0.5', 'after:text-red-500'],
    readOnly: ['select-none'],
    disabled: ['select-none'],
    size: {
      sm: ['-top-5'],
      md: ['-top-6'],
      lg: ['-top-7'],
    },
  },
  options: {
    base: [
      'p-2',
      'cursor-pointer',
      'focus:outline-none',
      'text-gray-900',
      'hover:bg-gray-100',
      'border-r',
      'last:border-b-0',
      'flex',
      'flex-nowrap',
      'items-center',
      'justify-center',
      'uppercase',
      'shadow-none',
    ],
    required: [],
    readOnly: ['select-none'],
    disabled: ['opacity-25', 'cursor-not-allowed'],
    active: [],
    checked: ['!bg-gray-300/50'],
    size: {
      sm: [],
      md: [],
      lg: [],
    },
  },
}

export const selector = classesSelector(classes)
