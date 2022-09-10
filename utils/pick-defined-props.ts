import _, { pick, values } from 'lodash'

export const getDefinedProps = (props: any): any =>
  _.omitBy(props, v => (typeof v === 'string' ? false : v === true ? false : true))

export const pickValues = <T extends object>(object: T, keys: string[]): any => values(pick(object, keys))
