import { isNil, omitBy, pick, values } from 'lodash'

export const getDefinedProps = <T extends object>(props: T): any => omitBy(props, isNil)

export const pickValues = <T extends object>(object: T, keys: string[]): any => values(pick(object, keys))
