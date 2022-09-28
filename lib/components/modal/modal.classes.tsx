import { settings } from '@root/lib/components/settings'
import { classesSelector } from '@root/utils/classes-selector'

const classes = {
  dialog: {
    base: ['relative', settings.zIndex.modals],
  },
  panel: {
    base: [
      'w-full',
      'max-w-md',
      'transform',
      'overflow-hidden',
      'rounded-xl',
      'bg-white',
      'p-6',
      'text-left',
      'align-middle',
      'shadow-xl',
      'transition-all',
    ],
  },
  title: {
    base: ['text-lg', 'font-medium', 'leading-6', 'text-gray-900'],
  },
  overlay: {
    base: ['fixed', 'inset-0', 'bg-black', 'bg-opacity-25'],
  },
}

export const selector = classesSelector(classes)
