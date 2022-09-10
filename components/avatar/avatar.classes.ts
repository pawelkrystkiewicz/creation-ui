import { classesSelector } from '@root/utils/classes-selector'

const classes = {
  img: {
    base: ['inline-block', 'ring-2', 'ring-white'],
    variant: {
      circle: ['rounded-full'],
      rounded: ['rounded-lg'],
      square: ['rounded-none'],
    },
    size: {
      sm: ['h-12', ' w-12'],
      md: ['h-16', ' w-16'],
      lg: ['h-20', 'w-20'],
    },
  },
  notifications: {
    base: [],
    badge: {
      base: [],
      count: [
        'inline-flex ',
        'items-center',
        'justify-center',
        'px-2',
        'py-1',
        'mr-2',
        'text-xs',
        'font-bold',
        'leading-none',
        'text-red-100',
        'bg-red-600',
        'rounded-full',
      ],
      dot: ['inline-block', 'w-2', 'h-2', 'mr-2', 'bg-red-600', 'rounded-full'],
    },
  },
}

export const selector = classesSelector(classes)
