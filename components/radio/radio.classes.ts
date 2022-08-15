import { getDefinedProps } from '@root/utils/pick-defined-props'
import _, { get, keys } from 'lodash'
import { RadioProps } from './radio.types'

export const selector = (part: 'wrapper' | 'input', props: RadioProps) => {
  /**
   * @description : Returns the wrapper className
   */
  // whitelist of props that values create path
  const whitelist = ['size']
  /**
   * Pick defined props from props object
   */
  const paths = _.flow(
    getDefinedProps,
    keys,
    _.partialRight(_.map, (key: string) => `${part}.${key}${whitelist.includes(key) ? `.${(props as any)[key]}` : ''}`),
  )({ ...props, 'base': '' })

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
      size: {
        sm: ['h-3', 'w-3'],
        md: ['h-4', 'w-4'],
        lg: ['h-5', 'w-5'],
      },
    },
  }
  /**
   * Pick classNames values from classes object
   */
  return _.flow(
    _.partialRight(_.map, (path: string) => get(classes, path, [])),
    _.flattenDeep,
  )(paths)
}
