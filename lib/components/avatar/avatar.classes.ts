import { settings } from '@root/lib/components/settings'
import { classesSelector } from '@root/utils/classes-selector'

const classes = {
  wrapper: {
    base: ['relative'],
  },
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
  badgePulse: {
    base: [
      'absolute',
      'rounded-full',
      'opacity-75',
      'animate-ping',
      'bg-red-400',
      'p-3',
    ],
    badge: {
      type: {
        count: [],
        dot: ['left-0', 'bottom-0', '!p-1.5'],
      },
    },
  },
  notifications: {
    base: [
      'relative',
      '-bottom-3',
      '-right-3',
      'rounded-full',
      'bg-red-600',
      'text-red-100',
      'absolute',
      'p-1.5',
      'm-2',
      'outline',
      'outline-white',
      'text-sm',
      'inline-flex',
      settings.zIndex.dropdowns,
    ],
    badge: {
      // pulse: ['animate-ping', 'bg-red-600', 'opacity-75'],
      placement: {
        horizontal: {
          top: ['-top-3'],
          bottom: ['-bottom-3'],
        },
        vertical: {
          right: ['-right-3'],
          left: ['-left-3'],
        },
      },
      type: {
        count: ['items-center', 'justify-center', 'leading-none', 'w-6', 'h-6'],
        dot: ['w-3', 'h-3'],
      },
    },
  },
}

export const selector = classesSelector(classes)
