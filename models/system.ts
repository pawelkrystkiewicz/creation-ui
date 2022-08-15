export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>
}

export const tuple = <T extends string[]>(...args: T) => args

export type CommitInfo = {
  'shortHash': string
  'hash': string
  'subject': string
  'sanitizedSubject': string
  'body': string
  'authoredOn': string
  'committedOn': string
  'author': {
    'name': string
    'email': string
  }
  'committer': {
    'name': string
    'email': string
  }
  'notes': string
  'branch': string
  'tags': string[]
  'version': string
  'timestamp': string
}
