import { classesSelector } from '@root/utils/classes-selector'

const classes = {
  wrapper: {
    base: ['flex', 'items-center'],
    required: ["after:content-['*']", 'after:ml-0.5', 'after:text-red-500'],
    readOnly: ['select-none'],
    disabled: ['select-none'],
    size: {
      sm: ['text-sm', 'sm:text-xs'],
      md: ['text-md', 'sm:text-sm'],
      lg: ['text-base', 'sm:text-md'],
    },
  },
  input: {
    base: [
      'appearance-none',
      'rounded-full',
      'h-4',
      'w-4',
      'border',
      'border-gray-300',
      'bg-white',
      'checked:bg-blue-600',
      'checked:border-blue-600',
      'focus:outline-none',
      'transition',
      'duration-200',
      'mt-1',
      'align-top',
      'bg-no-repeat',
      'bg-center',
      'bg-contain',
      'float-left',
      'mr-2',
      'cursor-pointer',
    ],
    required: [],
    readOnly: ['select-none'],
    disabled: ['select-none'],
    size: {
      sm: ['h-3', 'w-3'],
      md: ['h-4', 'w-4'],
      lg: ['h-5', 'w-5'],
    },
  },
}

export const selector = classesSelector(classes)
