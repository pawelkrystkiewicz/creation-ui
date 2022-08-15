import { classesSelector } from '@root/utils/classes-selector'

const classes = {
  wrapper: {
    base: ['bg-gray-50', 'w-fit', 'px-0.5', 'py-0.5', 'rounded-lg', 'relative', 'border', 'border-gray-300', 'flex'],
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
    base: ['flex', 'gap-2', 'flex-nowrap'],
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
      lg: ['-top-6'],
    },
  },
  options: {
    base: [
      'cursor-pointer',
      'focus:outline-none',
      'bg-white',
      'border-gray-200',
      'text-gray-900',
      'hover:bg-gray-50',
      'border',
      'rounded',
      'flex',
      'flex-nowrap',
      'items-center',
      'justify-center',
      'font-medium',
      'uppercase',
      'px-2',
      'shadow-none',
    ],
    required: [],
    readOnly: ['select-none'],
    disabled: ['opacity-25', 'cursor-not-allowed'],
    active: ['ring-2', 'ring-offset-2', 'ring-blue-500'],
    checked: ['!bg-blue-600', '!border-transparent', '!text-white', 'hover:!bg-blue-700', '!shadow'],
    size: {
      sm: [],
      md: [],
      lg: [],
    },
  },
}

export const selector = classesSelector(classes)
