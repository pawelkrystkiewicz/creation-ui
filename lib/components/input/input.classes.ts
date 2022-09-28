import {
  baseInputClasses,
  disabledStateClasses,
  readOnlyStateClasses,
  sizes,
} from '@root/lib/components/shared-classes'
import { classesSelector } from '@root/utils/classes-selector'

export const classes = {
  label: {
    base: ['flex', 'items-center'],
    required: ["after:content-['*']", 'after:ml-0.5', 'after:text-red-500'],
    readOnly: readOnlyStateClasses,
    disabled: disabledStateClasses,
    size: sizes,
  },
  helperText: {
    base: ['text-gray-500', 'mt-1'],
    required: [],
    readOnly: readOnlyStateClasses,
    disabled: disabledStateClasses,
    size: sizes,
  },
  error: {
    base: ['mt-2', 'invisible', 'peer-invalid:visible', 'text-red-600'],
    required: [],
    readOnly: readOnlyStateClasses,
    disabled: disabledStateClasses,
  },
  input: {
    base: baseInputClasses,
    fullWidth: ['w-full'],
    required: [],
    readOnly: ['text-gray-700', 'bg-gray-100', 'select-none'],
    disabled: disabledStateClasses,
    size: sizes,
  },
}

export const selector = classesSelector(classes)
