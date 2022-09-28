import { classesSelector } from '@root/utils/classes-selector'

const classes = {
  wrapper: {
    base: ['flex', 'justify-center', 'items-center'],
    required: [],
    readOnly: ['select-none'],
    disabled: ['select-none'],
    size: {
      sm: [],
      md: [],
      lg: [],
    },
  },
  icon: {
    base: ['mr-2', 'text-gray-200', 'animate-spin', 'fill-blue-600'],
    required: [],
    white: ['!fill-white'],
    readOnly: ['select-none'],
    disabled: ['select-none'],
    size: {
      sm: ['h-4', 'w-4'],
      md: ['h-5', 'w-5'],
      lg: ['h-6', 'w-6'],
    },
  },
}

export const selector = classesSelector(classes)
