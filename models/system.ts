export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>
}

export const tuple = <T extends string[]>(...args: T) => args;