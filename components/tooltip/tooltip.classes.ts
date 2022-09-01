import { classesSelector } from '@root/utils/classes-selector'

const classes = {
  wrapper: {
    base: ['group', 'relative', 'max-w-fit'],
    required: [],
    readOnly: [],
    disabled: [],
    size: {
      sm: [],
      md: [],
      lg: [],
    },
  },
  tooltip: {
    base: [
      'pointer-events-none',
      'absolute',
      '-top-10',
      'left-1/2',
      '-translate-x-1/2',
      'whitespace-nowrap',
      'rounded',
      'bg-black',
      'px-2',
      'py-1',
      'text-white',
      'opacity-0',
      'transition',
      'before:absolute',
      'before:left-1/2',
      'before:top-full',
      'before:-translate-x-1/2',
      'before:border-4',
      'before:border-transparent',
      'before:border-t-black',
      "before:content-['']",
      'group-hover:opacity-100',
      'text-sm',
    ],
    required: [],
    readOnly: [],
    disabled: [],
    size: {
      sm: [],
      md: [],
      lg: [],
    },
  },
}

export const selector = classesSelector(classes)
