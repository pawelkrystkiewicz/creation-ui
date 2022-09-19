import clsx from 'clsx'
import { flatten } from 'flat'
import { get, keys, partialRight, map, flow, flattenDeep, omitBy, isNil, pickBy, negate } from 'lodash'
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
  (part: string, classNames?: string | string[]): string => {
    /**
     * @description : Returns the wrapper className
     */
    // whitelist of props that values create path
    const whitelist = [
      'size',
      'orientation',
      'variant',
      'badge.type',
      'badge.placement.horizontal',
      'badge.placement.vertical',
      'placement.horizontal',
      'placement.vertical',
    ]
    /**
     * Pick defined props from props object
     */
    const debug = (args: any): any => {
      console.debug(args)
      return args
    }

    const paths = flow(
      flatten as any,
      partialRight(pickBy),
      debug,
      keys,
      partialRight(
        map,
        (key: string) => `${part}.${key}${whitelist.includes(key) ? `.${get(props as any, key.split('.'))}` : ''}`,
      ),
    )({ ...props, 'base': true })
    // console.log(paths)
    /**
     * Pick classNames values from classes object
     */
    const result = flow(
      partialRight(map, (path: string) => get(classes, path, [])),
      flattenDeep,
      clsx,
      twMerge,
    )(paths)

    return twMerge(result, classNames)
  }
