import {
  disabledStateClasses,
  readOnlyStateClasses,
  sizes,
} from '@components/shared-classes'
import { classesSelector } from '@root/utils/classes-selector'

const classes = {
  wrapper: {
    base: ['flex', 'flex-col', 'gap-3'],
    readOnly: readOnlyStateClasses,
    disabled: disabledStateClasses,
    size: sizes,
  },
  children: {
    base: ['flex', 'gap-3'],
    orientation: {
      vertical: ['flex-col'],
      horizontal: ['flex-row'],
    },
    readOnly: readOnlyStateClasses,
    disabled: disabledStateClasses,
  },
  label: {
    base: ['flex', 'items-center'],
    required: ["after:content-['*']", 'after:ml-0.5', 'after:text-red-500'],
  },
  helperText: {
    base: ['text-gray-500', 'mt-1'],
  },
  error: {
    base: ['mt-2', 'invisible', 'peer-invalid:visible', 'text-red-600'],
  },
}

export const selector = classesSelector(classes)
