import { getDefinedProps } from '@root/utils/pick-defined-props'
import _, { get, keys } from 'lodash'

export type Classes = {
  base: string[]
  required: string[]
  readOnly: string[]
  disabled: string[]
  active?: string[]
  checked?: string[]
  size?: {
    sm: string[]
    md: string[]
    lg: string[]
  }
}

export const classesSelector =
  (classes: Record<string, Classes>) =>
  <T = any>(part: string, props: T) => {
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
      _.partialRight(
        _.map,
        (key: string) => `${part}.${key}${whitelist.includes(key) ? `.${(props as any)[key]}` : ''}`,
      ),
    )({ ...props, 'base': true })

    /**
     * Pick classNames values from classes object
     */
    return _.flow(
      _.partialRight(_.map, (path: string) => get(classes, path, [])),
      _.flattenDeep,
    )(paths)
  }
