import {
  disabledStateClasses,
  readOnlyStateClasses,
  sizes,
} from '@components/shared-classes'
import { classesSelector } from '@root/utils/classes-selector'

export const classes = {
  wrapper: {
    base: [
      'px-2 ',
      'inline-flex ',
      'text-xs',
      'leading-5 ',
      'font-semibold ',
      'rounded-full',
      'w-fit',
    ],
    fullWidth: [],
    required: [],
    readOnly: readOnlyStateClasses,
    disabled: disabledStateClasses,
    size: {
      sm: [...sizes.sm, 'w-24'],
      md: [...sizes.md, 'w-24'],
      lg: [...sizes.lg, 'w-24'],
    },
    status: {
      success: ['bg-green-100 ', 'text-green-800'],
      active: ['bg-blue-100 ', 'text-blue-800'],
      error: ['bg-red-100 ', 'text-red-800'],
      warning: ['bg-amber-100 ', 'text-amber-800'],
    },
  },
}
export const selector = classesSelector(classes)
