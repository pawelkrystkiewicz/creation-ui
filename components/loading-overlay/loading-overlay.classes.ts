import { settings } from '@components/settings'
import { classesSelector } from '@root/utils/classes-selector'

const classes = {
  overlay: {
    base: [
      settings.zIndex.overlays,
      'absolute',
      'top-0',
      'bottom-0',
      'left-0',
      'right-0',
      // 'block',
      'h-full',
      'w-full',
      'bg-gray-700/50',
      'transition',
      'duration-200',
      'ease-in',
      'flex',
      'justify-center',
      'place-items-center',
      'overflow-clip',
    ],
    required: [],
    readOnly: ['select-none'],
    disabled: ['select-none'],
    size: {
      sm: [],
      md: [],
      lg: [],
    },
  },
}

export const selector = classesSelector(classes)
