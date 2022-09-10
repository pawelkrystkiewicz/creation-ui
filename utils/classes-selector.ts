import { getDefinedProps } from '@root/utils/pick-defined-props'
import clsx from 'clsx'
import _, { get, keys } from 'lodash'
import { twMerge } from 'tailwind-merge'

export type Classes = {
  base: string[]
  required?: string[]
  readOnly?: string[]
  disabled?: string[]
  active?: string[]
  checked?: string[]
  size?: {
    sm?: string[]
    md?: string[]
    lg?: string[]
  }
  orientation?: {
    vertical?: string[]
    horizontal?: string[]
  }
  variant?: {
    circle?: string[]
    rounded?: string[]
    square?: string[]
    contained?: string[]
    outlined?: string[]
    text?: string[]
  }
}

export const classesSelector =
  (classes: Record<string, Classes>) =>
  <T = any>(props: T) =>
  (part: string): string => {
    /**
     * @description : Returns the wrapper className
     */
    // whitelist of props that values create path
    const whitelist = ['size', 'orientation', 'variant', 'badge']
    /**
     * Pick defined props from props object
     */
    console.log((props as any)?.badge)
    const paths = _.flow(
      getDefinedProps, // czy na pewno zostawia "badge" w spokoju?
      keys,
      _.partialRight(
        _.map,
        (key: string) => `${part}.${key}${whitelist.includes(key) ? `.${(props as any)[key]}` : ''}`,
      ),
    )({ ...props, 'base': true })
    console.log(paths)
    /**
     * Pick classNames values from classes object
     */
    return _.flow(
      _.partialRight(_.map, (path: string) => get(classes, path, [])),
      _.flattenDeep,
      clsx,
      twMerge,
    )(paths)
  }
